'use client';
import styles from './projectDetail.module.css';
import projectData from '../../../data/projects.json';
import Image from 'next/image';
import Tag from '@/components/Tag/tag';
import Icon from '@/components/Icon/icon';
import Button from '@/components/Button/button';
import { Project } from '@/data/interfaces';

export default function projectSlug({
  params,
}: {
  params: { projectSlug: string };
}) {
  const project: Project | undefined = projectData.find(
    (project) => project.slug === params.projectSlug,
  );
  return (
    <div className={styles.page_container}>
      <div className={styles.back_to_projects_wrapper}>
        <Button text="back to projects" href="/portfolio" />
      </div>
      <div className={styles.headline_container}>
        <h1>{project?.name}</h1>
        <div className={styles.links_wrapper}>
          <Tag text={project?.year} />
          {project != undefined &&
            project?.links.map((link) => (
              <Icon src={link.src} alt={link.alt} href={link.href} />
            ))}
        </div>
      </div>
      <div className={styles.text_container}>
        <div className={styles.paragraph_wrapper}>
          <h2>Description</h2>
          <p>{project?.description}</p>
        </div>
        <div className={styles.paragraph_wrapper}>
          <h2>Personal contribution</h2>
          <p>{project?.personalContribution}</p>
        </div>
      </div>
      <div className={styles.image_wrapper}>
        <Image
          src={project?.smallImage}
          alt={`${project?.name} project image`}
          fill
          className={styles.project_image}
        />
      </div>
      <div className={styles.technologies_wrapper}>
        {project?.technologies?.map((technology) => (
          <Tag key={technology} text={technology} />
        ))}
      </div>
    </div>
  );
}
