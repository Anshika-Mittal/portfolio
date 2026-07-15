# Anshika Mittal - Software Developer & AI/ML Engineer Portfolio

A premium, responsive, and recruiter-friendly portfolio website designed for AI/ML Software Engineering and Software Developer roles. Built using **React + Vite + Tailwind CSS + Framer Motion + React Icons**, this portfolio is tailored to stand out to recruiters at top product companies (such as ION Group).

## 🚀 Key Highlights & JD Alignment
- **Mathematical Foundations**: Highlights Anshika's perfect math scores (**100/100** for 3 consecutive years) and algorithm ranking (LeetCode Weekly Contest).
- **Intelligent Automation**: Focuses on workflow automation projects (SMTP/TLS schedulers, cloud storage cleanup crons).
- **Architecture & Explainability**: Showcases explainable AI integration (SHAP LinearExplainer contribution charts) and clean, decoupled web-system layouts.
- **Recruiter Friendly**: Single-page design with a sticky tracking navigation bar, PDF resume downloader, light/dark themes, and client-validated email contact form.

---

## 📁 Folder Structure
```
portfolio/
├── public/
│   ├── favicon.svg              # Brand logo favicon
│   └── resume-placeholder.pdf   # Placeholder resume download file
├── src/
│   ├── assets/                  # Profile images & project illustrations
│   ├── components/              # Modular UI components
│   │   ├── Navbar.jsx           # Floating header with active section tracking
│   │   ├── ThemeToggle.jsx      # Light/dark mode selector
│   │   ├── ProjectCard.jsx      # Interactive card with expand/collapse details
│   │   ├── ExperienceTimeline.jsx # Vertical work history nodes (conditionally rendered)
│   │   ├── SkillBadge.jsx       # Color-categorized skill groups
│   │   ├── Achievements.jsx     # Contest and academic highlight grid
│   │   ├── Education.jsx        # School/College coursework panels
│   │   ├── ContactForm.jsx      # Client-validated contact form with confetti trigger
│   │   └── Footer.jsx           # Links, copyright, and scroll-to-top button
│   ├── data/
│   │   └── portfolioData.js     # CENTRALIZED DATA FILE (Edit details here)
│   ├── hooks/
│   │   └── useLocalStorage.js   # Local storage theme state persistence
│   ├── pages/
│   │   ├── Home.jsx             # Portfolio page assembler with scroll reveals
│   │   └── NotFound.jsx         # Elegant 404 page
│   ├── App.jsx                  # Root container, routes, and theme classes
│   ├── index.css                # Global CSS directives & tailwind classes
│   └── main.jsx                 # Vite JavaScript entry point
├── index.html                   # HTML metadata (SEO-optimized)
├── package.json                 # Project dependencies
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind theme guidelines
└── vite.config.js               # Dev server configuration
```

---

## 🛠️ Quick Start & Local Development

### 1. Installation
Ensure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 2. Start Local Server
Run the development environment locally at `http://localhost:3000`:
```bash
npm run dev
```

### 3. Build for Production
Compile a highly optimized static bundle into the `dist/` directory:
```bash
npm run build
```

---

## 🎨 How to Customize the Portfolio

All textual content is decoupled from layout rendering. To modify anything on the website, you only need to edit **one centralized file**: [portfolioData.js](file:///c:/Users/mitta/Desktop/Anshika_Profile/Anti-portfolio/portfolio/src/data/portfolioData.js).

### 1. Edit Social Links, Phone, or Email
Open `src/data/portfolioData.js` and edit the fields in `personalInfo`:
```javascript
personalInfo: {
  name: "Anshika Mittal",
  phone: "+91 7017199916",
  email: "your.email@gmail.com",     // Update here
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  // ...
}
```

### 2. Update the Resume Download File
1. Save your resume PDF in the `public` directory (e.g., as `public/resume.pdf`).
2. Update the file reference in `src/data/portfolioData.js`:
   ```javascript
   resumeUrl: "/resume.pdf"
   ```

### 3. Replace the Profile Picture Placeholders
1. Place your headshot photograph in the `src/assets/` directory (e.g. `src/assets/profile.png`).
2. Import it at the top of `src/pages/Home.jsx` (or place it in `public/profile.png` and reference `/profile.png`).
3. Update `profileImg` inside `personalInfo` in `src/data/portfolioData.js`.

### 4. Add a New Project
To append a new project card, add a project object to the `projects` list in `src/data/portfolioData.js`:
```javascript
projects: [
  {
    title: "Project Title",
    duration: "Jan 2026 - Present",
    category: "AI/ML & Cloud", // Can be "AI/ML & Cloud", "Automation", etc.
    technologies: ["React", "Python"],
    description: "Short project summary.",
    features: [
      "Key feature description line 1",
      "Key feature description line 2"
    ],
    challenges: [
      "Problem: Technical issue description. Solution: Action taken to resolve."
    ],
    github: "https://github.com/...",
    live: "https://..."
  },
  // ...
]
```

### 5. Change Theme Color Palette
Tailwind is configured with a Blue/Slate palette. To change colors globally (e.g., to Indigo, Amber, or Violet):
1. Open `tailwind.config.js`.
2. Edit the colors in `theme.extend.colors.primary`:
   ```javascript
   primary: {
     // Replace these hex codes with your preferred theme shades
     50: '#f5f3ff',
     100: '#ede9fe',
     500: '#8b5cf6', // Main primary color
     600: '#7c3aed',
     // ...
   }
   ```

---

## 🌐 Deployment Instructions

### 1. Vercel (Preferred - Fast & Automatic)
Vercel integrates directly with GitHub and deploys automatically on every push:
1. Sign up/log in at [Vercel](https://vercel.com).
2. Click **New Project** and select your GitHub repository containing the portfolio.
3. Vercel automatically detects **Vite** config settings. Leave the build settings as default:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your site will be live on a `*.vercel.app` domain in seconds!

### 2. Netlify
1. Log in at [Netlify](https://netlify.com).
2. Click **Add new site** &rarr; **Import from Git**.
3. Select your repository provider and repo.
4. Set the following build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.

### 3. GitHub Pages
To deploy to GitHub Pages:
1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add the following scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Add a `homepage` field in `package.json` pointing to your URL:
   ```json
   "homepage": "https://<your-username>.github.io/<your-repo-name>"
   ```
4. Run deployment script:
   ```bash
   npm run deploy
   ```
5. In GitHub, go to your repository **Settings &rarr; Pages** and verify the build source is set to the `gh-pages` branch.

---

## 🔗 Connecting a Custom Domain
Once deployed on Vercel or Netlify, you can attach a professional domain name:

### On Vercel:
1. Go to your Vercel Dashboard, select your project, and click **Settings &rarr; Domains**.
2. Enter your domain name (e.g., `anshikamittal.com`) and click **Add**.
3. Vercel will provide DNS record settings (A Record or CNAME).
4. Go to your domain registrar (Namecheap, GoDaddy, Google Domains) and paste these DNS configuration rules:
   - For apex domain (e.g., `anshikamittal.com`): Create an **A Record** pointing to Vercel's IP: `76.76.21.21`
   - For subdomains (e.g., `www.anshikamittal.com`): Create a **CNAME** pointing to `cname.vercel-dns.com`
5. Vercel will automatically provision a free SSL certificate once the records propagate (usually within 15–30 minutes).
