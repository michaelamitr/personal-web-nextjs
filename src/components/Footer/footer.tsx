import styles from './footer.module.css';
import ContactForm from '../ContactForm/contactForm';
import CV from '../CV/cv';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ContactForm />
      <div className={styles.footer_info_container}>
        <CV />
      </div>
    </footer>
  );
}
