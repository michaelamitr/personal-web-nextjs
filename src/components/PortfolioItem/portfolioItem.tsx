import styles from './portfolioItem.module.css';
import Image from 'next/image';
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
    <div className={styles.portfolio_item_container}>
      <div className={styles.image_container}>
        <Image
          src={imgUrl}
          alt={`${name} project image`}
          fill
          className={styles.project_image}
        />
      </div>
      <div>
        <h2>{name}</h2>
        <Tag text={year} />
        <p>{shortDescription}</p>
        <div className={styles.technologies_container}></div>
        {Technologies.map((technology) => (
          <Tag text={technology} />
        ))}
      </div>
    </div>
  );
}
