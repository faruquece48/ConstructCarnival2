import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "abdullahruet13@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: body.email,
      to: "abdullahruet13@gmail.com",
      subject: body.subject,
      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${body.fullName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <p><strong>Message:</strong></p>

        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 }
    );
  }
}