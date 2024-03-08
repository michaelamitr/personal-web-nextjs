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
        <p className={styles.welcome_text}>
          Hello and welcome to my page! My name is Michaela and I am now
          profesionally focused on programming, more specifically Front-end
          development. I am constantly working on my personal and tech
          improvement and I am open to new challenges.
        </p>
        <p className={styles.welcome_text}>
          If you would like ot get to know more about me, feel free to read my
          story in the{' '}
          <Link href={'/about'} className={styles.link_text}>
            about
          </Link>{' '}
          section. I hope this page helps you to explore my skillset and
          projects better. If you are interested in some kind of cooperation, do
          not hesitate to{' '}
          <Link href={'/contact'} className={styles.link_text}>
            contact
          </Link>{' '}
          me.
        </p>
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
