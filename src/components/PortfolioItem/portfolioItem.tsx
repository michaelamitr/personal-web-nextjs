'use client';
import styles from './portfolioItem.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../Tag/tag';
import IsIllustrationImage from '../IsIllustrationImage/isIllustrationImage';
import { PortfolioItemInterface } from '@/data/interfaces';

export default function PortfolioItem({
  slug,
  smallImage,
  isIllustrationalImage,
  name,
  year,
  description,
  technologies,
}: PortfolioItemInterface) {
  return (
    <Link
      className={styles.portfolio_item_container}
      href={`/portfolio/${slug}`}
    >
      <div className={styles.image_container}>
        <Image
          src={smallImage}
          alt={`${name} project image`}
          fill
          sizes="(max-width: 1000px) 80vw, (max-width: 1500px) 40vw, 33vw"
          priority
          className={styles.project_image}
        />
        {isIllustrationalImage && <IsIllustrationImage />}
      </div>
      <div className={styles.info_container}>
        <div className={styles.headline_container}>
          <h2 className={styles.project_name}>{name}</h2>
          <Tag text={year} />
        </div>
        <p>{description}</p>
        <div className={styles.technologies_container}>
          {technologies.map((technology) => (
            <Tag key={technology} text={technology} />
          ))}
        </div>
      </div>
    </Link>
  );
}
