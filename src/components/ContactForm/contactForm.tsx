import styles from './contactForm.module.css';

export default function ContactForm() {
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Get in touch</legend>
        <div className={styles.form_line}>
          <label htmlFor="fullName" className={styles.label}>
            Full name
          </label>
          <input
            type="text"
            name="size"
            id="fullName"
            // value=""
            placeholder="Your full name"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.form_line}>
          <label htmlFor="email" className={styles.label}>
            E-mail
          </label>
          <input
            type="email"
            name="size"
            id="email"
            // value=""
            placeholder="Your e-mail"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.form_line}>
          <label htmlFor="phone" className={styles.label}>
            Phone
          </label>
          <input
            type="text"
            name="size"
            id="phone"
            // value=""
            placeholder="Your phone number"
            className={styles.input}
          />
        </div>
        <div className={styles.form_line}>
          <label htmlFor="subject" className={styles.label}>
            Subject
          </label>
          <input
            type="text"
            name="size"
            id="subject"
            // value=""
            placeholder="Subject of your message"
            className={styles.input}
          />
        </div>
        <div className={styles.form_line}>
          <label htmlFor="message" className={styles.label}>
            Your message
          </label>
          <textarea
            id="message"
            cols={20}
            rows={5}
            className={styles.textarea}
            placeholder="What would you like to tell me?"
          ></textarea>
        </div>
        <button type="submit" className={styles.submit_button}>
          Send
        </button>
      </fieldset>
    </form>
  );
}
