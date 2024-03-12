import styles from './referenceItem.module.css';
import YearTag from '../YearTag/yearTag';
import Icon from '../Icon/icon';
import { ReferenceItem } from '@/data/interfaces';

export default function ReferenceItem({
  name,
  links,
  role,
  reference,
  year,
}: ReferenceItem) {
  return (
    <div className={styles.item_wrapper}>
      <h2 className={styles.reference_item_headline}>
        <span className={styles.name}>{name}</span>
        <br />
        {role}
      </h2>
      <div className={styles.info_wrapper}>
        {links.map((link) => (
          <Icon src={link.src} alt={link.alt} href={link.href} />
        ))}
        <YearTag year={year} />
      </div>
      <p>{reference}</p>
    </div>
  );
}
