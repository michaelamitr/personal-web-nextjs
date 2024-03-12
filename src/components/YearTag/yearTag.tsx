import styles from './yearTag.module.css';

interface YearTagProps {
  year: number;
}

export default function YearTag({ year }: YearTagProps) {
  return <span className={styles.container}>{year}</span>;
}
