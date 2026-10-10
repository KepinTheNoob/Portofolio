import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span className={styles.text}>
        kevin.setiawan {year}
      </span>
    </footer>
  );
}
