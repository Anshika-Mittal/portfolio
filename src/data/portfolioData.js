export const portfolioData = {
  personalInfo: {
    name: "Anshika Mittal",
    phone: "+91 7017199916",
    email: "anshikasre16@gmail.com", // Placeholder
    github: "https://github.com/Anshika-Mittal", // Placeholder
    linkedin: "https://linkedin.com/in/anshika-mittal-in", // Placeholder
    leetcode: "https://leetcode.com/u/Anshika_Mittal_1605/", // Placeholder
    codeforces: "https://codeforces.com/profile/Anshika_1618", // Placeholder
    headline: "Software Developer & AI/ML Engineer",
    bio: "B.Tech CSE student at Vellore Institute Of Technology with a strong mathematical foundation and deep interest in automation, scalable backend architectures and intelligent systems. Experienced in engineering data pipelines and explainable machine learning models.",
    resumeUrl: "https://github.com/Anshika-Mittal/Resume", // Placeholder
    profileImg: "/am_idphoto.jpeg", // Updated profile image
  },
  education: [
    {
      degree:
        "B.Tech Computer Science and Engineering (Specialization in E-Commerce Technology)",
      institution: "Vellore Institute of Technology (VIT)",
      location: "Bhopal, Madhya Pradesh, India",
      duration: "Sep 2023 - Ongoing",
      gpa: "9.46 / 10.0",
      courses: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Machine Learning",
        "Web Technologies",
        "AWS",
      ],
    },
    {
      degree: "Class XII (CBSE Board)",
      institution: "Asha Modern School",
      location: "Saharanpur, Uttar Pradesh, India",
      duration: "Mar 2022 - Mar 2023",
      percentage: "95.8%",
      courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    },
    {
      degree: "Class X (CBSE Board)",
      institution: "Asha Modern School",
      location: "Saharanpur, Uttar Pradesh, India",
      duration: "Mar 2020 - Mar 2021",
      percentage: "98.2%",
      courses: [
        "Mathematics",
        "Science",
        "Social Science",
        "English",
        "Hindi",
        "Information Technology",
      ],
    },
  ],
  experience: [
    {
      role: "AI Intern",
      company: "amasQIS.ai",
      location: "Remote",
      duration: "July 2025 - Dec 2025",
      highlights: [
        "Implemented and fine-tuned supervised and unsupervised Machine Learning models in Python to optimize pattern recognition capabilities.",
        "Engineered data preprocessing pipelines using Pandas, NumPy & Scikit-learn, cleaning and normalizing high-dimensional datasets to improve model training efficiency.",
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "Pandas",
        "NumPy",
        "Scikit-learn",
      ],
    },
  ],
  projects: [
    {
      title: "Resilient Customer Churn Prediction Platform",
      duration: "Jan 2026 - Jun 2026",
      category: "AI/ML & Cloud",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Python",
        "SHAP",
        "AWS S3",
        "Pandas",
        "Scikit-learn",
      ],
      description:
        "Built an end-to-end, decoupled and explainable AI-powered customer churn prediction platform that identifies at-risk customers using demographic, service and billing data, achieving 80.81% prediction accuracy across 30+ features.",
      features: [
        "Developed an explainable churn prediction system using Scikit-learn and SHAP LinearExplainer, providing interpretable feature-level insights for individual predictions.",
        "Built a full-stack architecture with React.js, Node.js, Express.js and MongoDB, enabling secure user authentication and seamless customer data management.",
        "Implemented scalable batch inference for CSV uploads containing up to 10,000 customer records while optimizing MongoDB operations to reduce write latency by 15%.",
        "Integrated AWS S3 for secure profile image storage with file-type and 5MB size validation, along with automated garbage collection to prevent orphaned cloud objects.",
      ],
      challenges: [
        "Making machine learning predictions understandable to end users by translating complex model weights into clear SHAP-based feature contribution visualizations.",
        "Scaling batch prediction workflows efficiently while handling large CSV datasets and optimizing database write performance.",
        "Ensuring secure and efficient cloud file management by validating uploads and automatically cleaning up unused S3 objects.",
      ],
      github: "https://github.com/Anshika-Mittal/ChurnShieldAI",
      live: "https://churnshieldai-client.vercel.app/",
    },
    {
      title: "Scalable Notification Service",
      duration: "Jun 2026 - Aug 2026",
      category: "Automation & Backend Systems",
      technologies: ["Node.js", "Express.js", "MongoDB", "Redis"],
      description:
        "Engineered a scalable, asynchronous multi-channel notification service that processes queued notifications efficiently while ensuring reliable delivery, idempotency, retry handling and low-latency notification history queries.",
      features: [
        "Built a multi-channel notification processing system supporting Email delivery and processing numerous queued notifications within seconds using asynchronous workers.",
        "Reduced API response latency by decoupling notification delivery from request handling through Redis-backed asynchronous job queues.",
        "Prevented duplicate notification processing across 10+ repeated requests using database-level idempotency constraints and implemented exponential-backoff retries with Dead Letter Queue handling.",
        "Reduced notification-history query latency by 85% through targeted MongoDB indexing while applying Strategy and Factory patterns to keep channel-specific delivery logic modular and extensible.",
      ],
      challenges: [
        "Ensuring exactly-once-like notification processing and preventing duplicate deliveries when clients repeatedly submitted the same requests.",
        "Designing a reliable failure-handling mechanism using exponential backoff and Dead Letter Queues for notifications that repeatedly failed delivery.",
        "Maintaining a scalable and extensible architecture while optimizing asynchronous processing and high-volume MongoDB notification-history queries.",
      ],
      github: "https://github.com/Anshika-Mittal/Scalable-E-Commerce-Notification-Microservice",
      live: "",
    },
  ],
  skills: {
    programming: ["C++", "Python"],
    ml: [
      "Machine Learning Models",
      "Supervised Learning",
      "Unsupervised Learning",
      "SHAP Interpretability",
      "EDA",
    ],
    frameworks: [
      "React.js",
      "Node.js",
      "Express.js",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
    cloud: ["AWS EC2", "AWS S3"],
    tools: ["Git", "GitHub", "Docker", "Postman"],
  },
  certifications: [
    {
      name: "NPTEL SWAYAM Marketing Management - II",
      issuer: "NPTEL (Top 1%)",
      date: "2026",
      credentialUrl:
        "https://nptel.ac.in/noc/E_Certificate/NOC26MG25S65240104504378802",
    },
    {
      name: "NPTEL SWAYAM Deep Learning",
      issuer: "IIT Ropar (Top 5%)",
      date: "2025",
      credentialUrl:
        "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs21/Course/NPTEL25CS21S95590003304295359.pdf",
    },
    {
      name: "SC-900: Microsoft Security, Compliance, and Identity Fundamentals",
      issuer: "Microsoft",
      date: "2025",
      credentialUrl:
        "https://github.com/Anshika-Mittal/certificates/blob/main/MCF.pdf",
    },
    {
      name: "Industrial IoT Markets & Security",
      issuer: "Coursera",
      date: "2024",
      credentialUrl:
        "https://github.com/Anshika-Mittal/certificates/blob/main/IndustrialIoTMarkets%26Security.pdf",
    },
  ],
  achievements: [
    {
      title: "LeetCode Contest Ranking",
      description:
        "Ranked 4,495 out of 40,113 participants in LeetCode Weekly Contest 510",
      tag: "Competitive Programming",
      icon: "SiLeetcode",
    },
    {
      title: "Academic Excellence",
      description:
        "Secured 100/100 in Mathematics for 3 consecutive years in classes X, XI & XII CBSE Board.",
      tag: "Mathematics",
      icon: "TbMath100Percent",
    },
  ],
  hobbies: [
    { name: "Music", detail: "Flute player" },
    { name: "Sport", detail: "Ex-Judoka" },
    { name: "Language", detail: "Spanish learner" },
    { name: "Games", detail: "Chess player" },
  ],
};
