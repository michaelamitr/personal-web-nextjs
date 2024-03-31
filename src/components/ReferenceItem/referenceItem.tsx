import styles from './referenceItem.module.css';
import Tag from '../Tag/tag';
import Icon from '../Icon/icon';
import { ReferenceItem } from '@/data/interfaces';
import Image from 'next/image';

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
        <div className={styles.links_wrapper}>
          {links.map((link) => (
            <Icon
              key={link.href}
              src={link.src}
              alt={link.alt}
              href={link.href}
            />
          ))}
        </div>
        <Tag text={year} />
      </div>
      <p>
        <Image
          src={'/icons/brackets-bottom.png'}
          alt={'Brackets bottom'}
          width={40}
          height={30}
          className={styles.brackets_bottom}
        />
        {reference}
        <Image
          src={'/icons/brackets-top.png'}
          alt={'Brackets top'}
          width={40}
          height={30}
          className={styles.brackets_top}
        />
      </p>
    </div>
  );
}
