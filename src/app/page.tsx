import Image from 'next/image';
import styles from './page.module.css';
import Icon from '@/components/Icon/icon';
import Button from '@/components/Button/button';
import TextLink from '@/components/TextLink/textLink';

export default function Home() {
  return (
    <div className={styles.page_container}>
      <div className={styles.main_text}>
        <h1>Michaela Trčková</h1>
        <h2>Front-end developer && much more</h2>
        <div className={styles.links_wrapper}>
          <Icon
            href={'https://www.linkedin.com/in/michaela-trckova-fe-dev/'}
            alt={'LinkedIn Icon'}
            src={'/icons/linkedin.svg'}
          />
          <Button href={'/portfolio'} text={'portfolio'} />
        </div>
      </div>
      <p className={styles.first_paragraph}>
        Hello and welcome to my page! My name is Michaela and I am now
        profesionally focused on programming, more specifically Front-end
        development. I am constantly working on my personal and tech improvement
        and I am open to new challenges.
      </p>
      <p className={styles.second_paragraph}>
        If you would like to get to know more about me, feel free to read my
        story in the <TextLink href={'/about'} text="about" isBlank /> section.
        I hope this page helps you to explore my skillset and projects better.
        If you are interested in some kind of cooperation, do not hesitate to{' '}
        <TextLink href={'#contactForm'} text="contact" isBlank={false} /> me.
      </p>
      <div className={styles.image_wrapper}>
        <Image
          src="/img/IMG_0183.jpg"
          alt="Photo of Michaela Trčková"
          fill
          priority
          sizes="(max-width: 500px) 80vw, (max-width: 1600px) 380px, 500px"
          className={styles.michaela_image}
        />
        <Image
          src={'/img/lines-frame.png'}
          alt="Image frame"
          width={380}
          height={380}
          priority
          className={styles.image_frame}
        />
      </div>
    </div>
  );
}
