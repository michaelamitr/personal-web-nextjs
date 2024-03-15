import styles from './projectDetail.module.css';

export default function projectSlug({
  params,
}: {
  params: { projectSlug: string };
}) {
  return (
    <div className={styles.page_container}>
      <h1>{params.projectSlug}</h1>
    </div>
  );
}
