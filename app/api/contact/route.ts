import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    console.log("Contact Form Data:", body);

    // Here you can:
    // 1. Save to database
    // 2. Send email using nodemailer
    // 3. Store in Firebase/Supabase

    return NextResponse.json({
      success: true,
      message: "Message sent successfully"
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong"
      },
      { status: 500 }
    );
  }
}