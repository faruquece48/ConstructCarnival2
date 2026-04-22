import { sql } from '@vercel/postgres';
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {

    const response = await request.formData();

    const tran_id = response.get('tran_id')?.toString();

    const validation = await fetch("https://securepay.sslcommerz.com/validator/api/validationserverAPI.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            val_id: response.get('val_id'),
            store_id: process.env.STORE_ID,
            store_passwd: process.env.STORE_PASSWORD,
        })
    }).then(response => {
        console.log(response.formData());
        return response.json()
    });

    console.log("Payment validation started.");

    if (validation.data.status != 'VALID' || validation.data.status != 'VALIDATED' || validation.data.tran_id != response.get('tran_id') || validation.data.amount != response.get('amount') || validation.data.currency_type != response.get('currency_type') || validation.data.currency_amount != response.get('currency_amount')) {
        console.error("Payment validation failed.");
        return NextResponse.json({ staus: 500, message: 'payment validation failed' });
    }

    console.log("Payment validation success.");

    const updateAlumniData = async () => {
        if (response.get('status') == 'VALID' || response.get('status') == 'VALIDATED') {
            try {
                await sql`UPDATE alumniData SET ispaid = TRUE WHERE tran_id = ${tran_id}`;
            } catch (error) {
                return NextResponse.json({ staus: 500, message: 'SQL error occurred while updating payment status.' });
            }
        } else {
            return NextResponse.json({ staus: 500, message: 'Payment status not valid.' });
        }
    }

    const updateRegistrationData = async () => {
        if (response.get('status') == 'VALID' || response.get('status') == 'VALIDATED') {
            try {
                await sql`UPDATE registrationData SET ispaid = TRUE WHERE tran_id = ${tran_id}`;
            } catch (error) {
                return NextResponse.json({ staus: 500, message: 'SQL error occurred while updating payment status.' });
            }
        } else {
            return NextResponse.json({ staus: 500, message: 'Payment status not valid.' });
        }
    }

    const id_splits = tran_id?.split('-');
    const userID = Number(id_splits?.at(1));

    if (userID > 1700) {
        updateAlumniData();
    } else {
        updateRegistrationData();
    }

    return NextResponse.json({ staus: 200, message: 'success' });
}