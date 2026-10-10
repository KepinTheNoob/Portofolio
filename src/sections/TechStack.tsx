import { techStack } from '../data/techStack';
import { Section } from '../components/Section';
import { Badge } from '../components/Badge';
import styles from './TechStack.module.css';

export function TechStack() {
  return (
    <Section id="stack" title="Tech Stack" pathLabel="~/stack">
      <div className={styles.groups}>
        {techStack.map((group) => (
          <div key={group.label} className={styles.group}>
            <h3 className={styles.label}>{group.label}</h3>
            <div className={styles.badges}>
              {group.items.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
