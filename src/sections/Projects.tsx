import { projects } from '../data/projects';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <Section id="projects" title="Selected Work">
      <div className={styles.grid}>
        {projects.map((project) => (
          <Card key={project.title}>
            <div className={styles.cardHeader}>
              <h3 className={styles.title}>{project.title}</h3>
              <div className={styles.links}>
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">repo</a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">live</a>
                )}
              </div>
            </div>
            <ul className={styles.descriptionList}>
              {project.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <div className={styles.stack}>
              {project.stack.map(tech => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
