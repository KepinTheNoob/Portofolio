export interface ExperienceEntry {
  company: string;
  title: string;
  duration: string;
  description: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Mulia HS",
    title: "Freelance, Fullstack Developer - E-Commerce Website",
    duration: "Aug 2026 - Present",
    description: [
      "Developed a full e-commerce website for Mulia HS, covering the customer storefront, checkout and an admin dashboard, built with React on the front end and Express Typescript on the back end.",
      "Integrated Midtrans (Snap) as the payment gateway so customers can pay online and order status updates with the payment result.",
      "Implemented automated customer emails with Nodemailer, sending purchase confirmations and payment details after checkout.",
      "Built an admin dashboard for the store owner to add, edit and manage products and handle orders without developer help.",
      "Designed the MariaDB database schema for products, orders and customers, and deployed the application to production hosting."
    ],
  },
  {
    company: "PT Sofco Graha",
    title: "Internship, Fullstack Developer - HRIS Webapp",
    duration: "Feb 2026 - Aug 2026",
    description: [
      "Delivered 30+ tickets, mostly new features, and fixed 10+ bugs on Gaji.id, a payroll web application built with Spring Boot and Angular (TypeScript), working in an SVN-based workflow.",
      "Built a bilingual translation system for the reporting module, splitting downloadable reports into separate English and Indonesian folders so users receive output in their preferred language.",
      "Implemented code-level data translation for upload templates across 150+ Excel files, keeping import and export formats consistent in both languages.",
      "Developed features end to end across the Angular front end and Spring Boot back end, from UI components and form validation to REST endpoints and business logic.",
      "Investigated and resolved bugs reported by the team and QA, tracing issues through the existing codebase and delivering fixes within the SVN review and commit workflow."
    ],
  },
  {
    company: "AB Fitness Gym",
    title: "Freelance, Fullstack Developer - Gym Dashboard",
    duration: "Dec 2025 - Feb 2026",
    description: [
      "Developed a QR-based check-in web app, replacing a manual paper logbook and eliminating handwritten walk-in records, achieving 100% removal of manual check-in tracking.",
      "Developed the Node.js/Express backend with Prisma ORM, designing the database schema (members, plans, transactions, attendance, categories) and REST API, with JWT authentication and bcrypt password hashing.",
      "Implemented auto-generated unique QR codes for 100+ gym members, distributed by the gym owner for self-service scanning at entry.",
      "Reduced customer check-in time from 1-2 minutes per person with the manual logbook to near-instant scans.",
      "Built the admin dashboard with a live attendance widget, 6-month revenue trend, peak-hour attendance chart, and expiring-member follow-ups; plus finance reports with CSV export and downloadable digital member ID cards with QR codes.",
      "Added an image pipeline (Multer + Sharp resizing to Cloudinary) and an automated SQLite backup with Google Drive sync via rclone and 30-day rotation."
    ],
  },
  {
    company: "Bintang Jaya",
    title: "Freelance, Mobile Developer - POS",
    duration: "Aug 2025 - Dec 2025",
    description: [
      "Built a cashier / point-of-sale app for Bintang Jaya, replacing manual sales handling with a mobile app for recording transactions.",
      "Developed the full UI in Kotlin with Jetpack Compose, covering the product list, cart, checkout and transaction flow.",
      "Implemented secure staff login with Firebase Authentication so only authorized users can access the cashier.",
      "Modeled and stored products and sales transactions in Cloud Firestore, keeping data synced and available across the app."
    ],
  },
  {
    company: "Bina Nusantara Computer Club (BNCC)",
    title: "RND Staff, Fullstack - Internal Microservice",
    duration: "Oct 2024 - Oct 2025",
    description: [
      "Designed and implemented a role based authentication service used internally to assign roles, permission, and preference to members, improving user management efficiency by 40%.",
      "Integrated key features such as permissions setting and setting user preferences using Express and TypeScript, which reduced onboarding time for new members by 30% and decreased permission-related support tickets by 50%.",
      "Developed an intuitive front-end interface using React and TypeScript for assigning user preferences and permissions, featuring real-time validation, which improved user experience by reducing errors by 40% and decreased user setup time by 30%.",
      "Built the service as a reusable internal module that other BNCC systems could rely on for access control, rather than each project implementing its own."
    ],
  },
  {
    company: "Nexsoft",
    title: "Freelance, Web Developer - Refactor",
    duration: "Mar 2025 - May 2025",
    description: [
      "Refactored 30+ JSP pages by separating embedded HTML, CSS, and JavaScript into modular components and external files, enabling reuse and cleaner version control.",
      "Reduced code redundancy by 30%, improving readability and maintainability across the application.",
      "Standardized shared page structure so future changes could be made once and applied across pages, instead of editing each page individually."
    ],
  }
];
