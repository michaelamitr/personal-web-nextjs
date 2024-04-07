'use server';
import nodemailer from 'nodemailer';
import { ContactFormValues } from './interfaces';

export async function sendEmail({ values }: { values: ContactFormValues }) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log('testResult', testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      to: SMTP_EMAIL,
      subject: values.subject,
      html: `<html>
        <head>
          <title>Info mail</title>
          <style>
              h2 {color: red;}
          </style>
        </head>
        <body>
          <h2>Name: ${values.fullName}</h2>
          <h3>E-mail: ${values.email}</h3><h3>Phone: ${values.phone}</h3>
          <h3>Subject: ${values.subject}</h3><p>Message: ${values.message}</p>
        </body>
      </html>`,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export const handleSendEmail = async (values: {
  values: ContactFormValues;
}) => {
  await sendEmail(values);
};
