import { useEffect, useState } from 'react';
import styles from './Nav.module.css';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#top" className={styles.logo}>
          <img src="/LogoTransparent.png" alt="Kevin Setiawan" />
        </a>
        
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>projects</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)}>experience</a>
          <a href="#stack" onClick={() => setMobileMenuOpen(false)}>stack</a>
        </nav>

        <div className={styles.right}>
          <a href="#contact" className={styles.contactBtn}>contact</a>
          
          <button 
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
