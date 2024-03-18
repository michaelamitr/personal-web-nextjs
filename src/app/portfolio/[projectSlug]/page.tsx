'use client';
import { useEffect, useState } from 'react';
import styles from './projectDetail.module.css';
import projectData from '../../../data/projects.json';
import Button from '@/components/Button/button';
import { Project } from '@/data/interfaces';
import RenderedProject from '@/components/RenderedProject/renderedProject';

export default function ProjectSlug({
  params,
}: {
  params: { projectSlug: string };
}) {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      setTimeout(() => {
        const foundProject = projectData.find(
          (project) => project.slug === params.projectSlug,
        ) as Project;
        setProject(foundProject);
        setLoading(false);
      }, 1000);
    };

    fetchProject();
  }, [params.projectSlug]);

  return (
    <>
      {loading ? (
        <div className={styles.loading_container}>Loading...</div>
      ) : (
        <div className={styles.page_container}>
          <div className={styles.back_to_projects_wrapper}>
            {project && <Button text="back to projects" href="/portfolio" />}
          </div>
          {project ? (
            <RenderedProject projectToRender={project} />
          ) : (
            <div className={styles.headline_container}>
              <h1 className={styles.project_name}>Project not found.</h1>
            </div>
          )}

          {!project && (
            <div className={styles.error_back_button}>
              <Button text="back to projects" href="/portfolio" />
            </div>
          )}
        </div>
      )}
    </>
  );
}
