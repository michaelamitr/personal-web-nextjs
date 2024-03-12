import styles from './references.module.css';
import ReferenceItem from '@/components/ReferenceItem/referenceItem';
import referencesData from '../../data/references.json';

export default function References() {
  return (
    <div className={styles.page_container}>
      <h1>References</h1>
      <div className={styles.references_container}>
        {referencesData.map((reference) => (
          <ReferenceItem
            key={reference.id}
            name={reference.name}
            links={reference.links}
            role={reference.role}
            reference={reference.reference}
            year={reference.year}
          />
        ))}
      </div>
    </div>
  );
}
