import styles from './about.module.css';
import cn from 'classnames';
import TextLink from '@/components/TextLink/textLink';

export default function About() {
  return (
    <div className={styles.page_container}>
      <h1>About</h1>
      <h2>
        Hi, I am Michaela and I am a curious and creative person. And also a
        Front-end developer.
      </h2>
      <div className={styles.main_container}>
        <div className={cn(styles.fist_content, styles.gridarea)}>
          <p>
            I started my journey in March 2023, with a long term web development
            course, Digital Academy: Web by{' '}
            <TextLink
              href="https://www.czechitas.cz/en"
              text="Czechitas"
              isBlank
            />
            . Why? Because I wanted to do something creative, something where I
            could use my good eye for detail and visual side of things, but also
            logical and analytical thinking. Front-end is the right place for
            me.
          </p>
        </div>
        <div
          className={cn(styles.fist_image, styles.gridarea, styles.right)}
        ></div>
        <div
          className={cn(styles.second_content, styles.gridarea, styles.right)}
        >
          <p>
            I have been involved in several projects so far. My first project
            was <TextLink href="/portfolio/hike-it" text="Hike It" isBlank />. A
            graduation project processed within the Digital Academy. At my first
            developer job, I was involved in other projects for apartment
            developers –{' '}
            <TextLink
              href="/portfolio/web-for-developer-company"
              text="web"
              isBlank
            />{' '}
            and{' '}
            <TextLink
              href="/portfolio/custom-internal-system"
              text="internal system"
              isBlank
            />
            . Apart from that, I am also a coach and mentor to people who are at
            the beginning of their journey in IT in Czechitas.
          </p>
        </div>
        <div className={cn(styles.second_image, styles.gridarea)}></div>
        <div className={cn(styles.third_content, styles.gridarea)}>
          <p>
            I am continually working on myself, discovering new libraries,
            trying new features, getting deeper into front-end development and
            corresponding technologies. My stack is mostly focused on Next.js
            and TypeScript. Apart from front-end, I am also interested in
            cybersecurity and working on my Google Cybersecurity Professional
            Certificate.
          </p>
        </div>
        <div
          className={cn(styles.third_image, styles.gridarea, styles.right)}
        ></div>
        <div
          className={cn(styles.fourth_content, styles.gridarea, styles.right)}
        >
          <p>
            And last but not least, I am a passionate traveler. I love to meet
            new cultures and people I can inspire and get inspired by. Also, I
            truly enjoy DIY work like sewing, painting, embroidery and much
            more.
          </p>
        </div>
        <div className={cn(styles.fourth_image, styles.gridarea)}></div>
      </div>
      <h2>See you somewhere in the world!</h2>
    </div>
  );
}
