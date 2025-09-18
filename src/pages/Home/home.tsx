import styles from "./home.module.css";

const Home = () => {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Kotlin",
    "Flutter",
    "Laravel",
    "Python",
    "SQL",
    "PHP",
    "Prisma",
    "Express",
    "Node.js",
    "C",
    "Java",
    "Sequelize",
    "Firebase",
    "Git",
    "GitHub",
  ];

  return (
    <section className={styles.homeSection}>
      <div className={styles.intro}>
        <h1>Kevin Setiawan</h1>
        <h2>Fullstack Developer</h2>
        <ul>
          <li>
            🎓 Master of Information Technology Student at Binus University
            (Class of B27)
          </li>
          <li>💼 RND Staff at BNCC — Internal Development</li>
          <li>
            💡 Passionate about AI applications, and full-stack development
          </li>
          <li>🎯 Focused on building real-world impactful projects</li>
        </ul>
      </div>

      <div className={styles.contact}>
        <h3>Get in Touch</h3>
        <p>
          Email:{" "}
          <a href="mailto:kevinsetiawan2412@gmail.com">kevinsetiawan2412@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+628987801833">+62 898 7801 833</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/kevin--setiawan"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/kevin--setiawan
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/KepinTheNoob"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/KepinTheNoob
          </a>
        </p>
      </div>

      <div className={styles.techStack}>
        <h3>My Tech Stack</h3>
        <ul className={styles.stackList}>
          {techStack.map((tech) => (
            <li key={tech} className={styles.stackItem}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
