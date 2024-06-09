'use client';
import { FormEvent, useState, useRef } from 'react';
import styles from './contactForm.module.css';
import { ContactFormValues } from '@/data/interfaces';
import { handleSendEmail } from '@/data/email';
import { ToastContainer } from 'react-toastify';

export default function ContactForm() {
  const initFormValues: ContactFormValues = {
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };
  const initFormState = initFormValues;

  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const [formState, setFormState] = useState(initFormState);

  const handleFormChange = (e: { target: { name: string; value: string } }) =>
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleFormSubmit = (e: FormEvent) => {
    submitButtonRef.current!.disabled = true;
    if (submitButtonRef.current!.disabled) {
      submitButtonRef.current!.textContent = 'Sent!';
    }
    setTimeout(() => {
      submitButtonRef.current!.disabled = false;
      submitButtonRef.current!.textContent = 'Send';
    }, 3000);
    handleSendEmail(e, formState, setFormState, initFormValues);
  };

  return (
    <>
      <form
        id="contactForm"
        className={styles.form}
        onSubmit={(e) => handleFormSubmit(e)}
      >
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
              value={formState.fullName}
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
              value={formState.email}
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
              value={formState.phone}
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
              value={formState.subject}
              placeholder="Subject of your message"
              className={styles.input}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className={styles.form_line}>
            <label htmlFor="message" className={styles.label}>
              Your message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              cols={20}
              rows={5}
              className={styles.textarea}
              placeholder="What would you like to tell me?"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className={styles.controls_container}>
            <button
              type="submit"
              className={styles.submit_button}
              ref={submitButtonRef}
            >
              Send
            </button>
            <label>* required</label>
          </div>
        </fieldset>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName={styles.toast}
        progressClassName={styles.progress}
      />
    </>
  );
}
