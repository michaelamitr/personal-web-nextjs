import styles from './renderedProject.module.css';
import { Project } from '@/data/interfaces';
import Tag from '../Tag/tag';
import Icon from '../Icon/icon';
import IsIllustrationImage from '../IsIllustrationImage/isIllustrationImage';
import Image from 'next/image';

export default function RenderedProject({
  projectToRender,
}: {
  projectToRender: Project;
}) {
  return (
    <>
      <div className={styles.headline_container}>
        <h1 className={styles.project_name}>{projectToRender.name}</h1>
        <div className={styles.links_wrapper}>
          <Tag text={projectToRender.year} />
          {projectToRender.links
            ? projectToRender.links.map((link) => (
                <Icon
                  key={link.href}
                  src={link.src}
                  alt={link.alt}
                  href={link.href}
                />
              ))
            : null}
        </div>
      </div>
      <div className={styles.text_container}>
        <div className={styles.paragraph_wrapper}>
          <h2 className={styles.section_headline}>Description</h2>
          <p>{projectToRender?.description}</p>
        </div>
        <div className={styles.paragraph_wrapper}>
          <h2 className={styles.section_headline}>Personal contribution</h2>
          <p>{projectToRender.personalContribution}</p>
        </div>
      </div>
      <div className={styles.image_wrapper}>
        <Image
          src={projectToRender.smallImage}
          alt={`${projectToRender.name} project image`}
          fill
          priority
          className={styles.project_image}
        />
        {projectToRender.isIllustrationalImage && <IsIllustrationImage />}
      </div>
      <h2 className={styles.section_headline}>Technologies</h2>
      <div className={styles.technologies_wrapper}>
        {projectToRender.technologies.map((technology) => (
          <Tag key={technology} text={technology} />
        ))}
      </div>
    </>
  );
}
