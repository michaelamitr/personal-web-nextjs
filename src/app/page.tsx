import Image from 'next/image';
import styles from './page.module.css';
import cn from 'classnames';

export default function Home() {
  return (
    <>
      <div className={styles.page_container}>
        <h1>Michaela Trčková</h1>
        <h2>Front-end developer && much more</h2>
        <Image
          src="/img/IMG_0183.jpg"
          alt="Photo of Michaela Trčková"
          width={2705}
          height={2705}
          className={styles.michaela_image}
        />
      </div>
    </>
  );
}
