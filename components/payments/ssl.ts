import { siteConfig } from '@/config/site';
import axios from 'axios';
import generateUniqueId from 'generate-unique-id';

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWORD;
const is_live = false;


export default async function paymentBySSL(formData: any) {

    const response = await axios.post('https://securepay.sslcommerz.com/gwprocess/v4/api.php', {
        store_id: store_id,
        store_passwd: store_passwd,
        total_amount: formData.fee,
        currency: 'BDT',
        tran_id: formData.tran_id,
        success_url: 'https://constructcarnival.com/api/success',
        fail_url: 'https://constructcarnival.com/api/fail',
        cancel_url: 'https://constructcarnival.com/api/cancel',
        ipn_url: 'https://constructcarnival.com/api/ipn',
        shipping_method: 'Online',
        cus_name: formData.member1,
        cus_email: formData.email,
        cus_add1: 'Rajshahi',
        cus_country: 'Bangladesh',
        cus_phone: formData.phoneNumber,
    }, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    })

    console.log(response)
    // if (response.status == )

    return {
        status: 200,
        message: "Success",
        data: response.data,
    };
}