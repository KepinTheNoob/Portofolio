import { useState } from "react";
import styles from "./Projects.module.css";

const projectsData = [
  {
    title: "BNCC's Microservice System",
    image: "/DistributedSystem.png",
    description:
      "Developed internal service for BNCC's microservice system, built with Node.js, Express, and Prisma. It handles user authentication, role-based access control, and data management.",
  },
  {
    title: "BNCC's LMS System Development",
    image: "/Leap.png",
    description:
      "Developed BNCC's Learning Management System (LMS) features using Laravel and Technotic.",
  },
  {
    title: "Deep Plan",
    image: "/DeepPlan.png",
    description:
      "AI-powered project planning platform designed to support Smart City development. It addresses the common challenges of infrastructure projects—such as cost overruns, delays, and inefficient resource use—by shifting away from conventional planning methods.",
    link: "https://github.com/KepinTheNoob/DeepPlan",
  },
  {
    title: "Cashier App",
    image: "/CashierApp.jpg",
    description:
      "A storage cashier system that lists products (from Firebase) and manages sales. Each product has variants (with cost, price, unit, etc.), and the app handles transactions, categories, and stock in a clean, user-friendly way.",
    link: "https://github.com/KepinTheNoob/Cashier-App",
  },
  {
    title: "Tracker",
    image: "/Tracker.png",
    description:
      "A food prediction app that forecasts raw food prices for the upcoming months. It’s meant to help people plan purchases and budgets by providing insights into future price trends.",
    link: "https://github.com/ValDrayn/Tracker",
  },
  {
    title: "Match Point",
    image: "/MatchPoint.png",
    description:
      "MatchPoint is a sports match tracking application built to make recording and reviewing games easier for players and enthusiasts. It supports both basketball and badminton, allowing users to track scores, match duration, and game history in a structured format.",
    link: "https://github.com/KepinTheNoob/MatchPoint",
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className={styles.projectSection}>
      <h2>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
                onClick={() => setSelectedImage(project.image)}
              />
            )}
            <p>{project.description}</p>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            ) : (
              <span className={styles.noLink}>No Link Available</span>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedImage(null)}
        >
          <div className={styles.modalContent}>
            <img src={selectedImage} alt="Full view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
