import styles from './tag.module.css';
import { TagProps } from '@/data/interfaces';

export default function Tag({ text }: TagProps) {
  return <span className={styles.container}>{text}</span>;
}
