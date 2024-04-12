'use client';
import styles from './portfolio.module.css';
import PortfolioItem from '@/components/PortfolioItem/portfolioItem';
import projectsData from '../../data/projects.json';

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <h2>
        List of the projects which I was involved in. Click on the card to
        discover more about my contribution & detailed description.
      </h2>
      <div className={styles.portfolio_container}>
        {projectsData.map((project) => (
          <PortfolioItem
            key={project.id}
            id={project.id}
            slug={project.slug}
            smallImage={project.smallImage}
            isIllustrationalImage={project.isIllustrationalImage}
            name={project.name}
            year={project.year}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </>
  );
}
