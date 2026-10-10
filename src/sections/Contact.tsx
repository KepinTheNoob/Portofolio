import { personal } from '../data/personal';
import { Section } from '../components/Section';
import styles from './Contact.module.css';

export function Contact() {
  const { contact } = personal;

  return (
    <Section id="contact" title="Contact">
      <div className={styles.links}>
        <div className={styles.item}>
          <span className={styles.label}>email</span>
          <a href={`mailto:${contact.email}`} className={styles.value}>
            {contact.email}
          </a>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>github</span>
          <a
            href={contact.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.value}
          >
            {contact.github.label}
          </a>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>linkedin</span>
          <a
            href={contact.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.value}
          >
            {contact.linkedin.label}
          </a>
        </div>
      </div>
    </Section>
  );
}
