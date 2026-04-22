import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';


export async function POST(request: Request) {

    const response = await request.formData();
    const nextUrl = new URL('https://constructcarnival.com/cancel', request.url)

    nextUrl.searchParams.set('tran_id', response.get('tran_id') as string);

    return NextResponse.redirect(nextUrl);
}