import styles from './footer.module.css';
import Image from 'next/image';
import ContactForm from '../ContactForm/contactForm';
import CV from '../CV/cv';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <ContactForm />
        <div className={styles.info_wrapper}>
          <CV />
          <div className={styles.author_container}>
            <h3>created by</h3>
            <Image
              src={'/img/signature-MT.png'}
              alt="Michaela Trčková Signature"
              width={949}
              height={339}
              className={styles.signature}
            />
            <h3>2024</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
