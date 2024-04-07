'use client';
import { useState } from 'react';
import styles from './contactForm.module.css';
import { ContactFormValues } from '@/data/interfaces';

export default function ContactForm() {
  const initFormValues: ContactFormValues = {
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };
  const initFormState = { values: initFormValues };

  const [formState, setFormState] = useState(initFormState);

  const { values } = formState;

  const handleFormChange = (e: { target: { name: string; value: string } }) =>
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [e.target.name]: e.target.value,
      },
    }));
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Get in touch</legend>
        <div className={styles.form_line}>
          <label htmlFor="fullName" className={styles.label}>
            Full name*
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={values.fullName}
            placeholder="Your full name"
            className={styles.input}
            required
            onChange={handleFormChange}
          />
        </div>
        <div className={styles.form_line}>
          <label htmlFor="email" className={styles.label}>
            E-mail*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            placeholder="Your e-mail"
            className={styles.input}
            required
            onChange={handleFormChange}
          />
        </div>
        <div className={styles.form_line}>
          <label htmlFor="phone" className={styles.label}>
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={values.phone}
            placeholder="Your phone number"
            className={styles.input}
            onChange={handleFormChange}
          />
        </div>
        <div className={styles.form_line}>
          <label htmlFor="subject" className={styles.label}>
            Subject*
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={values.subject}
            placeholder="Subject of your message"
            className={styles.input}
            onChange={handleFormChange}
          />
        </div>
        <div className={styles.form_line}>
          <label htmlFor="message" className={styles.label}>
            Your message*
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            cols={20}
            rows={5}
            className={styles.textarea}
            placeholder="What would you like to tell me?"
            onChange={handleFormChange}
          />
        </div>
        <div className={styles.controls_container}>
          <button type="submit" className={styles.submit_button}>
            Send
          </button>
          <label>* required</label>
        </div>
      </fieldset>
    </form>
  );
}
