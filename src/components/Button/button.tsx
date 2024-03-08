import Link from 'next/link';
import styles from './button.module.css';
import { Button } from '@/data/interfaces';

export default function Button({ text, href }: Button) {
  return (
    <button className={styles.btn}>
      <Link href={href} className={styles.btn_link}>
        {text}
      </Link>
    </button>
  );
}
