import styles from './footer.module.css';
import ContactForm from '../ContactForm/contactForm';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ContactForm />
    </footer>
  );
}
