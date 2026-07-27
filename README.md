# 1. Project Overview

## Project Name

**Ahmed Mohammed — AI Engineer Portfolio**

## Description

This project is a modern responsive personal portfolio website developed to present my background, technical skills, AI projects, experience, and professional information.

The website is designed to showcase my work as an AI Engineer with focus areas including:

- Artificial Intelligence
- Machine Learning
- Computer Vision
- Deep Learning
- Large Language Models (LLMs)
- Software Development

The application is built as a static React website and deployed using GitHub Pages.

The contact system is implemented using Web3Forms, allowing visitors to send messages directly without requiring a custom backend.

---

## 🌐 Live Demo

Visit the live portfolio:

🔗 https://ahmad-fouad1.github.io/Ahmed-Portfolio/

## 📂 GitHub Repository

Source code:

🔗 https://github.com/ahmad-fouad1/Ahmed-Portfolio


---

# ✨ Features

- Responsive design for desktop, tablet, and mobile devices
- Modern dark professional UI
- Smooth scrolling single-page layout
- Component-based React architecture
- Dynamic project, skills, and experience sections
- Reusable UI components
- Interactive animations and hover effects
- Downloadable resume
- Project showcase with:
  - Descriptions
  - Technologies used
  - GitHub links
  - Demo links
- Contact form integration using Web3Forms
- Optimized production build using Vite
- Hosted using GitHub Pages


---

# 🛠 Technologies Used

## Frontend

- **React 19**
  - Component-based UI development
  - React Hooks (`useState`, `useEffect`, `useRef`)

- **Vite**
  - Fast development server
  - Optimized production builds

- **JavaScript (JSX)**
  - Main programming language

- **Tailwind CSS**
  - Utility-first styling framework
  - Custom design system and responsive styling

- **PostCSS + Autoprefixer**
  - CSS processing and browser compatibility


## Libraries

- **lucide-react**
  - Modern icon library

- **clsx**
  - Conditional class management

- **tailwind-merge**
  - Intelligent Tailwind class merging


## Services

- **Web3Forms**
  - Backend-free contact form handling

- **GitHub Pages**
  - Static website hosting


---

# 🚀 Installation and Running Locally

## 1. Clone the repository

```bash
git clone https://github.com/ahmad-fouad1/Ahmed-Portfolio.git
```

## 2. Navigate to the project folder

```bash
cd Ahmed-Portfolio
```

## 3. Install dependencies

Using npm:

```bash
npm install
```

or using pnpm:

```bash
pnpm install
```

## 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```


## 5. Create production build

To test the production version:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```


---

# 📩 Contact Form Setup (Web3Forms)

This portfolio uses **Web3Forms** to handle contact form submissions without requiring a backend server.

## Setup Steps

1. Visit:

https://web3forms.com/

2. Create a free account.

3. Generate an Access Key.

4. Add the key to your environment variables.

5. Restart the development server.


The contact form sends user messages directly to the configured email address through Web3Forms.


---

# 🔐 Environment Variables

Create a file named:

```
.env.local
```

inside the project root directory.

Example:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### Important:

- Never upload `.env.local` to GitHub.
- Never commit real API keys or private credentials.
- Use `.env.example` as a template for required variables.


Example:

```
.env.example

VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```


---

# 📁 Project Structure

```
Ahmed-Portfolio/
│
├── public/         
│       └── images
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   └── SectionHeading.jsx
│   │   │
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Projects.jsx
│   │       ├── Experience.jsx
│   │       └── Contact.jsx
│   │
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── experience.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── docs/
│   └── prompts-log.md
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```


---

# 🔒 Security Guidelines

To keep the project secure:

- Do not commit `.env.local` files.
- Do not upload private API keys.
- Do not store sensitive credentials inside React components.
- Keep `.env.example` files with placeholders only.
- Review files before pushing to GitHub.

Example:

✅ Good:

```env
VITE_API_KEY=your_key_here
```

❌ Bad:

```env
VITE_API_KEY=123456789_REAL_SECRET_KEY
```


---

# 👨‍💻 Author

## Ahmed Mohammed

AI Engineer interested in:

- Machine Learning
- Computer Vision
- Deep Learning
- Large Language Models
- AI Automation

### Connect with me:

GitHub:
https://github.com/ahmad-fouad1

LinkedIn:
(Add your LinkedIn URL)

Email:
(Add your email)


---

⭐ If you find this portfolio useful, feel free to explore the repository and connect with me.