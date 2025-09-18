import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <NavLink to="/" className={styles.navLogo}>
          Portfolio
        </NavLink>
        <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </div>
        <ul className={isOpen ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          <li className={styles.navItem}>
            <NavLink to="/" className={styles.navLink} onClick={() => setIsOpen(false)} end>
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/projects" className={styles.navLink} onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/experience" className={styles.navLink} onClick={() => setIsOpen(false)}>
              Experience
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;