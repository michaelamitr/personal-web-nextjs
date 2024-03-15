import styles from './portfolio.module.css';
import PortfolioItem from '@/components/PortfolioItem/portfolioItem';
import projectsData from '../../data/projects.json';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className={styles.portfolio_container}>
        {projectsData.map((project) => (
          <PortfolioItem
            slug={project.slug}
            imgUrl={project.smallImage}
            name={project.name}
            year={project.year}
            shortDescription={project.shortDescription}
            Technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}
