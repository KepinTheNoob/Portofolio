import { personal } from '../data/personal';
import { Pill } from '../components/Pill';
import styles from './Hero.module.css';

export function Hero() {
  const { name, title, contact, bio } = personal;

  return (
    <section id="top" className={styles.hero} aria-label="Introduction">
      <div className={styles.content}>
        <h1 className={styles.headline}>{name}</h1>
        <p className={styles.subtitle}>{title}</p>
        <div className={styles.action}>
          <Pill email={contact.email} />
        </div>
      </div>
      <div className={styles.caption}>
        {bio.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </section>
  );
}
