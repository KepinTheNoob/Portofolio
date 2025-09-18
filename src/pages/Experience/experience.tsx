import styles from './Experience.module.css';

const experienceData = [
  {
    company: "BNCC",
    title: "RND Staff",
    duration: "Sept 2024 - Sept 2025",
    description: "Designed and implemented a internal microservice used by internal, improving user management efficiency by 40%."
  },
  {
    company: "Nexsoft",
    title: "Freelance",
    duration: "Mar 2025 - May 2025",
    description: "Refactored over 30 JSP pages by separating embedded HTML, CSS, and JavaScript into modular, maintainable components."
  },
  {
    company: "BNCC",
    title: "Activist",
    duration: "Oct 2023 - Oct 2024",
    description: "Assisted in building and maintaining learning application using Laravel, Technotic. Gained foundational experience in version control with Git and agile development methodologies."
  }
];

const Experience = () => {
  return (
    <section className={styles.experienceSection}>
      <h2>Work Experience</h2>
      <div className={styles.timeline}>
        {experienceData.map((job, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>{job.title}</h3>
              <span className={styles.company}>{job.company}</span>
              <span className={styles.duration}>{job.duration}</span>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;