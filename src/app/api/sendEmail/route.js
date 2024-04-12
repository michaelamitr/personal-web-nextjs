import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {
    const { fullName, email, phone, subject, message } = await req.json();

    // Create a transporter using SMTP details
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });

    // Create an email message
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.SENDER_EMAIL,
      subject: subject,
      html: `
      <h2>Full name: ${fullName}</h2>
    <h3>E-mail: ${email}</h3>
    <h3>Phone: ${phone}</h3>
    <hr>
    <p style="font-size: 17px;">Subject: ${subject}</p>
    <p style="font-size: 17px;">Message: ${message}</p>
      `,
    };

    // Send the e-mail
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent: ', info.response);
    return NextResponse.json({
      success: true,
      message: 'Your message has been sent!',
    });
  } catch (error) {
    console.error('Error: ', error);
    return Response.json(
      {
        success: false,
        message: 'Internal server error, please try again.',
      },
      {
        status: 500,
      },
    );
  }
}
