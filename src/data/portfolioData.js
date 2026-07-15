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
    resumeUrl: "/resume-placeholder.pdf", // Placeholder
    profileImg: "/am_idphoto.jpeg" // Updated profile image
  },
  education: [
    {
      degree: "B.Tech. in Computer Science and Engineering (Specialization in E-Commerce Technology)",
      institution: "Vellore Institute of Technology (VIT)",
      location: "Bhopal, Madhya Pradesh, India",
      duration: "Sep 2023 - Ongoing",
      gpa: "9.45 / 10.0",
      courses: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Machine Learning",
        "Web Technologies",
        "AWS"
      ]
    },
    {
      degree: "Class XII (CBSE Board)",
      institution: "Asha Modern School",
      location: "Saharanpur, Uttar Pradesh, India",
      duration: "Mar 2022 - Mar 2023",
      percentage: "96.8%",
      courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    },
    {
      degree: "Class X (CBSE Board)",
      institution: "Asha Modern School",
      location: "Saharanpur, Uttar Pradesh, India",
      duration: "Mar 2020 - Mar 2021",
      percentage: "98.2%",
      courses: ["Mathematics", "Science", "Social Science", "English", "Hindi"]
    }
  ],
  experience: [
    {
      role: "AI Intern",
      company: "amasQIS.ai",
      location: "Remote",
      duration: "July 2025 - Dec 2025",
      highlights: [
        "Implemented and fine-tuned supervised and unsupervised Machine Learning models in Python to optimize pattern recognition capabilities.",
        "Engineered data preprocessing pipelines using Pandas, NumPy & Scikit-learn, cleaning and normalizing high-dimensional datasets to improve model training efficiency."
      ],
      technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn"]
    }
  ],
  projects: [
    {
      title: "Resilient Customer Churn Prediction Platform",
      duration: "Jan 2026 - Jun 2026",
      category: "AI/ML & Cloud",
      technologies: ["React.js", "Flask", "MongoDB", "Python", "SHAP", "AWS S3", "Pandas", "NumPy", "Scikit-learn"],
      description: "Engineered a decoupled, explainable machine learning platform to predict customer churn probability from 30+ demographic, service and billing indicators.",
      features: [
        "Decoupled machine learning system designed with React and Flask frontend-backend architecture.",
        "SHAP LinearExplainer integration for local interpretability, mapping complex model weights into beautiful visual contribution charts.",
        "High-throughput batch prediction pipeline processing CSV uploads of up to 10,000 records dynamically.",
        "AWS S3 integration for avatar storage including file validation, size constraints (5MB), and an automated garbage collection routine to optimize storage overhead."
      ],
      challenges: [
        "Problem: Hard-to-explain black-box model decisions for business teams. Solution: Integrated local interpretability visual charts via SHAP.",
        "Problem: High memory usage when parsing large batch CSV files. Solution: Engineered stream-like processing pipelines.",
        "Problem: Orphan image files in cloud storage. Solution: Authored a garbage collection cron routine to purge unused data."
      ],
      // github: "https://github.com/placeholder-github/churn-prediction",
      // live: "https://demo.placeholder/churn-prediction"
    },
    {
      title: "Automated Wishlist Email Notification System",
      duration: "July 2025",
      category: "Automation",
      technologies: ["Python", "Pandas", "SMTP", "Excel Automation", "TLS Encryption", "datetime"],
      description: "Programmed a secure automation script to parse user wishlist datasets, identifying inactive products over 10 days to trigger targeted email alerts.",
      features: [
        "Robust script automating user wishlist data parsing using Pandas for threshold checks.",
        "Secure SMTP email integration with TLS encryption.",
        "Automated delivery of dynamic HTML email reminders to enhance customer cart conversions."
      ],
      challenges: [
        "Problem: Securing email delivery credentials and ensuring TLS encryption standards. Solution: Structured environment variable storage and secured SMTP bindings.",
        "Problem: Handling dates across multiple regional formats. Solution: Utilized robust datetime parsers and standardized Unix timestamps."
      ],
      // github: "https://github.com/placeholder-github/wishlist-email-automation",
      // live: "https://demo.placeholder/wishlist-email-automation"
    }
  ],
  skills: {
    programming: ["C++", "Python"],
    ml: ["Machine Learning Models", "Supervised Learning", "Unsupervised Learning", "SHAP Interpretability", "EDA"],
    frameworks: ["React.js", "Node.js", "Express.js", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    cloud: ["AWS EC2", "AWS S3"],
    tools: ["Git", "GitHub", "Docker", "Postman"]
  },
  certifications: [
    {
      name: "NPTEL SWAYAM Marketing Management - II",
      issuer: "NPTEL (Top 1%)",
      date: "2026",
      credentialUrl: "https://nptel.ac.in/noc/E_Certificate/NOC26MG25S65240104504378802"
    },
    {
      name: "NPTEL SWAYAM Deep Learning",
      issuer: "IIT Ropar (Top 5%)",
      date: "2025",
      credentialUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs21/Course/NPTEL25CS21S95590003304295359.pdf"
    },
    {
      name: "SC-900: Microsoft Security, Compliance, and Identity Fundamentals",
      issuer: "Microsoft",
      date: "2025",
      credentialUrl: "https://github.com/Anshika-Mittal/certificates/blob/main/MCF.pdf"
    },
    {
      name: "Industrial IoT Markets & Security",
      issuer: "Coursera",
      date: "2024",
      credentialUrl: "https://github.com/Anshika-Mittal/certificates/blob/main/IndustrialIoTMarkets%26Security.pdf"
    }
  ],
  achievements: [
    {
      title: "LeetCode Contest Ranking",
      description: "Ranked 4,495 out of 40,113 participants in LeetCode Weekly Contest 510",
      tag: "Competitive Programming",
      icon: "SiLeetcode"
    },
    {
      title: "Academic Excellence",
      description: "Secured 100/100 in Mathematics for 3 consecutive years in classes X, XI & XII CBSE Board.",
      tag: "Mathematics",
      icon: "TbMath100Percent"
    }
  ],
  hobbies: [
    { name: "Music", detail: "Flute player", icon: "GiFlute" },
    { name: "Sport", detail: "Ex-Judoka", icon: "GiJudoStance" },
    { name: "Language", detail: "Spanish learner", icon: "IoLanguage" }
  ]
};
