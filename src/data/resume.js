export const personal = {
  name: "Tanvi Vilaskar",
  tagline: "Flow like the waves — quiet, steady, and unstoppable",
  subtitle: "ML Engineer · Mainframe DevOps · Full Stack Developer",
  summary:
    "Final-year B.Tech IT student (CGPA: 9.15/10) with hands-on expertise in Machine Learning, DevOps, and Mainframe systems. Hackathon winner and IEEE Best Paper awardee with experience building end-to-end intelligent systems — from ML pipelines and CI/CD automation to COBOL-based enterprise solutions on z/OS.",
  email: "tanvilaskar01@gmail.com",
  phone: "+91-93090-85300",
  location: "Pune, India",
  linkedin: "https://linkedin.com/in/tanvi-vilaskar",
  github: "https://github.com/Tanvi-vilaskar",
};

export const skills = [
  {
    category: "Languages",
    icon: "languages",
    items: ["Python", "C", "C++", "Java", "JavaScript", "SQL", "REXX", "Bash"],
  },
  {
    category: "ML & Data",
    icon: "brain",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn",
      "OpenCV",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Random Forest",
      "XGBoost",
      "Logistic Regression",
      "Streamlit",
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "code",
    items: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT", "RBAC"],
  },
  {
    category: "DevOps & CI/CD",
    icon: "gear",
    items: ["Jenkins", "Docker", "GitHub Actions", "GCP", "Git", "GitHub", "Postman", "VS Code Extensions", "Linux"],
  },
  {
    category: "Mainframe",
    icon: "server",
    items: ["COBOL", "JCL", "DB2", "REXX", "TSO/ISPF", "VSAM", "Batch Processing", "z/OS", "RMF/SMF", "MIPS Analysis"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["MongoDB", "MySQL", "Oracle", "DB2", "Supabase"],
  },
  {
    category: "Platforms & Tools",
    icon: "tools",
    items: ["Linux","AWS","Agile", "Jira", "Postman", "Chrome Extension APIs"],
  },
  {
    category: "Coursework",
    icon: "book",
    items: ["Operating Systems", "Computer Networks", "DBMS", "OOP", "DSA", "Software Engineering", " Cloud Computing"],
  },
];

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "BMC Software (FY26 IZOT)",
    type: "AI/ML + Mainframe DevOps",
    period: "Jan 2026 – Jun 2026",
    location: "Pune, India",
    bullets: [
      "Built Static SLA Guardian — AI-powered CI/CD agent for COBOL that predicts SLA breaches before deployment via static analysis, with zero MIPS consumption overhead.",
      "Trained TensorFlow/Scikit-Learn models on RMF/SMF data to predict MIPS and channel utilization; integrated Jenkins CI/CD gate with auto-fail on predicted SLA breach.",
      "Developed a VS Code extension delivering real-time SLA risk feedback directly in the IDE.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "OmegaSoft Pvt. Ltd",
    type: "React.js · Node.js · Express.js · REST APIs",
    period: "May 2023 – Jul 2023",
    location: "Pune, India",
    bullets: [
      "Built and tested secure RESTful APIs with Role-Based Access Control (RBAC) for a cafe management system.",
    ],
    
  },
];

export const projects = [
  {
    name: "Signal-Pulse",
    subtitle: "Focus Tracker",
    badge: "★ Winner XENIA'26",
    badgeColor: "#c47a45",
    period: "Feb 2026",
    tech: ["JavaScript", "Chrome Extension APIs","Machine Learning","Pattern detection","Streamlit"],
    description:
      "Chrome extension classifying browsing into Work/Communication/Distraction, computing on-device focus scores (0–100) using 8+ behavioral signals.",
    highlights: [
      "Pomodoro mode & site blocking",
      "Streak tracking system",
      "Team wellness dashboard",
      "200+ participants beaten",
    ],
    link: "https://github.com/Tanvi-vilaskar/Signal-pulse-xenia",
  },
  {
    name: "CivicLink",
    subtitle: "AI-Powered Civic Grievance Platform",
    badge: "◈ AI + CivicTech",
    badgeColor: "#0e4d6e",
    period: "Feb 2026",
    tech: ["FastAPI", "YOLOv8", "OpenCV", "Supabase", "Python"],
    description:
      "AI-powered grievance platform using YOLOv8 for 3-class pothole detection and severity scoring based on object confidence plus OSM Overpass API amenity proximity for priority routing.",
    highlights: [
      "3-class pothole detection with YOLOv8",
      "Priority scoring using hospitals and schools proximity",
      "JWT role-based access and full status workflow",
      "Haversine geospatial filtering and async ML inference",
    ],
    link: "https://github.com/snehal-wadhane/CivicLink-backend/tree/tanvi-branch",
  },
 {
  name: "AccessGuard++",
  subtitle: "ML-based Risk Scoring",
  badge: "◈ IEEE Best Paper",
  badgeColor: "#0e4d6e",
  period: "Sep – Dec 2025",
  tech: ["Python", "Scikit-Learn", "Random Forest", "Streamlit", "OpenCV"],
  description:
    "Built an ML-powered insider threat detection system that analyzes 15+ behavioral features to generate real-time risk scores, trigger threshold-based alerts.",
  highlights: [
    "Risk scores 0.0–1.0",
    "Alerting at 0.75+ threshold",
    "OpenCV face-auth, 3-attempt lockout",
    "Live Streamlit dashboard",
  ],
  link: "https://github.com/Tanvi-vilaskar/AccessGuard",
},
  {
    name: "DataSure-MF",
    subtitle: "Mainframe Data Validation",
    badge: "◈ Mainframe",
    badgeColor: "#2a5a4a",
    period: "Jul 2025 – Nov 2025",
    tech: ["COBOL", "JCL", "REXX", "DB2", "z/OS"],
    description:
      "Mainframe data validation system for detecting duplicate and invalid records with REXX-driven re-entry prompts and DB2 master record update workflows.",
    highlights: [
      "Duplicate and invalid record detection",
      "Add/modify/delete DB2 master record workflow",
      "REXX-based re-entry prompts",
      "DB2 CURSOR WITH HOLD across COMMIT boundaries",
    ],
    link: "https://github.com/Tanvi-vilaskar/DataSure-MF",
  },
  {
    name: "Bug Classification",
    subtitle: "Severity Prediction",
    badge: "◈ Industry · Trishtha Global",
    badgeColor: "#2a5a4a",
    period: "Jan – Mar 2025",
    tech: ["Python", "XGBoost", "Logistic Regression", "Jira API", "Streamlit"],
    description:
      "Trained on 10,000+ bugs across 20+ GitHub repos for 4-class severity prediction with Jira integration.",
    highlights: [
      "10K+ training bugs",
      "4-class severity model",
      "Jira REST API sync",
      "500+ ticket batch inference",
    ],
    link: "https://github.com/Tanvi-vilaskar/Bug_Classification_severity_prediction_tristha_global_final",
  },
  {
    name: "StyleSense",
    subtitle: "AI-Based Fashion Recommendation System",
    badge: "◈ ML App",
    badgeColor: "#c47a45",
    period: "Jan 2025 – Mar 2025",
    tech: ["Python", "Machine Learning", "Streamlit", "MobileNetV2", "U2-Net", "Random Forest"],
    description:
      "AI-based fashion recommendation system that detects body shape, isolates the user from background, and suggests outfits based on predicted body type.",
    highlights: [
      "Fine-tuned MobileNetV2 body shape detection",
      "U2-Net background segmentation",
      "Random Forest recommendation engine",
      "Interactive Streamlit app for real-time predictions",
    ],
    link: "https://github.com/Tanvi-vilaskar/StyleSence_myntra",
  },
];

export const education = [
  {
    institution: "Vishwakarma Institute of Information Technology",
    degree: "B.Tech — Information Technology",
    period: "Aug 2024 – 2027",
    score: "CGPA: 9.15 / 10",
    coursework: "DSA · OOP · OS · DBMS · CN",
  },
  {
    institution: "Government Polytechnic Pune",
    degree: "Diploma — Information Technology",
    period: "Aug 2021 – Jun 2024",
    score: "93.27%",
    coursework: "",
  },
];

export const achievements = [
  { icon: "trophy", text: "Winner — XENIA'26 Hackathon (2026), 200+ participants" },
  { icon: "award", text: "IEEE Best Paper Award — AccessGuard++" },
  { icon: "code", text: "200+ DSA Problems on LeetCode (C++)" },
  { icon: "star", text: "Top 100 — Myntra WeForShe (2025)" },
  { icon: "star", text: "Top 45 — SIH Internal Round (2025)" },
];

export const certifications = [
  "IBM Mainframe Developer, 2025",
  "IBM Z Xplore – Advanced",
  "IBM DevOps & Software Engineering, 2025",
  "Google Git and GitHub, 2025",
  "CCNAv7: Intro to Networks, Dec 2024",
  "Intro to Cybersecurity, Jul 2025",
];