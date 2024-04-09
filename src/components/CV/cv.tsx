import styles from './cv.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function CV() {
  const MichaelaCV = '/MichaelaTrckova_CV.pdf';
  return (
    <Link className={styles.resume_container} href={MichaelaCV} target="blank">
      <h3 className={styles.title}>Check out my resume</h3>
      <Image src={'/icons/cv.png'} alt="CV icon" width={50} height={50} />
    </Link>
  );
}
