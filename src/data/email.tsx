import { toast } from 'react-toastify';
import { ContactFormValues } from './interfaces';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export const handleSendEmail = async (
  e: FormEvent,
  emailData: ContactFormValues,
  setEmailData: Dispatch<SetStateAction<{ values: ContactFormValues }>>,
  values: ContactFormValues,
) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    const data = await response.json();
    if (data?.success) {
      toast(`${data?.message} ✅🍾`);
      setEmailData({
        values,
      });
    } else if (data?.success == false) {
      toast(`${data?.message} ❌😢`);
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
