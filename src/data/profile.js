// Single source of truth for personal details used across the site.
// Update the placeholder URLs marked TODO with your real links.

export const profile = {
  name: "Ahmed Mohammed",
  role: "AI Engineer",
  pitch:
    "I build real-world AI systems — computer vision, deep learning and LLM applications — and I am looking for a Summer 2026 AI / Data Science internship.",
  location: "Alexandria, Egypt",
  email: "ahmedmohamedfouad101@gmail.com",
  phone: "+20 155 558 2452",
  // Used for the WhatsApp link — digits only, with country code, no "+" or spaces.
  whatsapp: "201555582452",
  github: "https://github.com/", // TODO: replace with your GitHub profile URL
  linkedin: "https://www.linkedin.com/", // TODO: replace with your LinkedIn profile URL
  resumeUrl: "https://drive.google.com/uc?export=download&id=1r6EyyXm59vBKJr_UynirycJU5mXpLHHX", // TODO: drop your PDF at public/resume.pdf
  // Set this to "/images/profile.jpg" once you add your photo (see README).
  photo: "/images/profile.jpg",
}

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
]
