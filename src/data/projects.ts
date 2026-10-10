export interface Project {
  title: string;
  description: string[];
  image: string;
  stack: string[];
  repo?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Xporade - AI Export Assistant for Indonesian SMEs",
    description: [
      "Built an AI-powered app that guides Indonesian SMEs through exporting: users describe their product, and the system recommends the correct HS Code with a confidence score for each match.",
      "Integrated the Kolosal AI API to analyze product details (name, category, description, trade route, annual export volume) and generate HS Code recommendations along with destination-country export regulations and compliance requirements.",
      "Designed and implemented a guided onboarding flow that collects product information, trade route, HS code, and export volume to personalize analysis.",
      "Developed an AI dashboard summarizing analysis count, confidence levels, recent analysis history, and top destination countries, plus a regulation view with an export-ready checklist of required documents and certifications.",
      "Implemented authentication (login/register) and a user profile with edit and save flows; designed the full UI/UX in Figma, from landing page to dashboard."
    ],
    image: "/DistributedSystem.png", // placeholder
    stack: ["Kolosal AI API", "Figma", "Full Stack"],
    live: "https://xporade.vercel.app"
  },
  {
    title: "Fall Detector - IoT Fall Detection with Machine Learning",
    description: [
      "Built a wearable fall-detection prototype on an ESP32-C3, combining an MPU6050 accelerometer/gyroscope and an HMC5883L magnetometer to capture motion and orientation data.",
      "Trained a machine learning model on the public UMAFall dataset to classify falls versus normal daily activities from sensor data.",
      "Added on-device alerting with a buzzer and vibration motor, and a physical silence button so the wearer can cancel the alarm after a false trigger.",
      "Built a real-time monitoring dashboard on Adafruit IO to track device status and fall events remotely."
    ],
    image: "/DeepPlan.png", // placeholder
    stack: ["ESP32-C3", "MPU6050", "HMC5883L", "Python", "Adafruit IO"],
    repo: "https://github.com/KepinTheNoob/Mitifall"
  },
  {
    title: "DeepPlan - AI Decision Support for Infrastructure Development",
    description: [
      "Developed an AI-powered mobile app that supports decision-making for infrastructure development projects, helping users evaluate options and plan before building.",
      "Designed the user flow for entering project requirements and receiving AI-generated recommendations in a clear, decision-ready format."
    ],
    image: "/DeepPlan.png", // placeholder
    stack: ["AI integration", "mobile app"],
    repo: "https://github.com/KepinTheNoob/DeepPlan"
  },
  {
    title: "BuddyLearn - Accessible Learning App for Blind Users",
    description: [
      "Developed an accessible Android app that helps blind users learn and navigate independently through tap-and-hold gestures.",
      "Integrated AI-driven text-to-speech to read content and navigation cues aloud, removing the need for visual interaction.",
      "Used Firebase for authentication and data storage."
    ],
    image: "/Leap.png", // placeholder
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "AI Text-to-Speech"],
    repo: "https://github.com/dheovanwa/BuddyLearn"
  },
  {
    title: "MatchPoint - Real-Time Sports Score Counter",
    description: [
      "Developed a cross-platform score counter app for badminton and basketball with real-time score tracking.",
      "Implemented match history logging with Firebase so past games can be reviewed anytime."
    ],
    image: "/MatchPoint.png", // placeholder
    stack: ["Flutter", "Firebase"],
    repo: "https://github.com/KepinTheNoob/MatchPoint"
  },
  {
    title: "Tracker - Raw Food Price Prediction",
    description: [
      "Developed a raw food price prediction app that analyzes market trends to forecast price fluctuations.",
      "Applied machine learning models in Python to historical price data to support purchasing and planning decisions."
    ],
    image: "/Tracker.png", // placeholder
    stack: ["Python", "Machine Learning"],
    repo: "https://github.com/KepinTheNoob/api-tracker"
  }
];
