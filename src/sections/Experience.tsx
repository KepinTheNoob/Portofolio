import { experience } from '../data/experience';
import { Section } from '../components/Section';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className={styles.list}>
        {experience.map((entry, index) => (
          <div key={index} className={styles.entry}>
            <div className={styles.meta}>
              <span className={styles.duration}>{entry.duration}</span>
            </div>
            <div className={styles.content}>
              <h3 className={styles.role}>
                {entry.title} <span className={styles.company}>/ {entry.company}</span>
              </h3>
              <ul className={styles.descriptionList}>
                {entry.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
