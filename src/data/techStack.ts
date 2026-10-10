export interface TechGroup {
  label: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  {
    label: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Kotlin", "Python", "C", "Rust", "PHP", "Go", ".Net"],
  },
  {
    label: "Frontend",
    items: ["React", "Angular", "HTML/CSS/JS", "TanStack Query", "Laravel Blade", "Vite", "Tailwind CSS"],
  },
  {
    label: "Mobile",
    items: ["Flutter", "Jetpack Compose", "Kotlin"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Spring Boot", "Express", "Laravel", "REST API", "Prisma ORM", "Sequelize"],
  },
  {
    label: "Databases",
    items: ["SQLite", "MySQL", "PostgreSQL", "MariaDB", "Firebase (Firestore)"],
  },
  {
    label: "Cloud & Deployment",
    items: ["Vercel", "Firebase Hosting", "Git", "Midtrans", "Rumahweb Hosting", "Firebase Auth", "Cloudinary"],
  },
  {
    label: "Security",
    items: ["Role-Based Access Control", "CSRF protection", "HTTP-only cookie sessions", "brute-force prevention", "rate limiting", "webhook", "microservice"],
  },
  {
    label: "Testing & QA",
    items: ["Jest", "unit and integration testing", "in-memory SQLite DB simulation", "security testing (XSS, SQL injection, rate limiting, CSRF, security headers)", "ESLint", "TypeScript strict mode"],
  },
  {
    label: "IoT & Embedded",
    items: ["ESP32-C3", "MPU6050 (IMU)", "HMC5883L (magnetometer)", "buzzer and vibration motor actuators", "MQTT-based cloud dashboards"],
  },
  {
    label: "Developer Tools & Environments",
    items: ["Git", "SVN", "Linux", "Postman", "Docker"],
  },
];
