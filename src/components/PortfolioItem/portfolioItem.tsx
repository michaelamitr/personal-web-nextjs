'use client';
import styles from './portfolioItem.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../Tag/tag';
import { PortfolioItem } from '@/data/interfaces';

export default function PortfolioItem({
  slug,
  imgUrl,
  name,
  year,
  shortDescription,
  Technologies,
}: PortfolioItem) {
  return (
    <Link
      className={styles.portfolio_item_container}
      href={`/portfolio/${slug}`}
    >
      <div className={styles.image_container}>
        <Image
          src={imgUrl}
          alt={`${name} project image`}
          fill
          className={styles.project_image}
        />
      </div>
      <div className={styles.info_container}>
        <div className={styles.headline_container}>
          <h2 className={styles.project_name}>{name}</h2>
          <Tag text={year} />
        </div>
        <p>{shortDescription}</p>
        <div className={styles.technologies_container}>
          {Technologies.map((technology) => (
            <Tag text={technology} />
          ))}
        </div>
      </div>
    </Link>
  );
}
