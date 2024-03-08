import Image from 'next/image';
import styles from './page.module.css';
import cn from 'classnames';
import Icon from '@/components/Icon/icon';
import Link from 'next/link';
import Button from '@/components/Button/button';

export default function Home() {
  return (
    <>
      <div className={styles.page_container}>
        <h1>Michaela Trčková</h1>
        <h2>Front-end developer && much more</h2>
        <div className={styles.links_wrapper}>
          <Icon
            href={'https://www.linkedin.com/in/michaela-trckova-fe-dev/'}
            alt={'LinkedIn'}
            src={'/icons/linkedIn.svg'}
          />
          <Button href={'/portfolio'} text={'portfolio'} />
        </div>
        <div className={styles.image_wrapper}>
          <Image
            src="/img/IMG_0183.jpg"
            alt="Photo of Michaela Trčková"
            fill
            className={styles.michaela_image}
          />
        </div>
      </div>
    </>
  );
}
