# Prompts Log

A running record of the prompts used to build this portfolio.

---

## 1 — Initial build

**Prompt (summary):** Build a one-page scrolling portfolio with a sticky nav containing Hero, About, Skills (including an "AI tools I use" subsection), filterable Projects, an Experience / Education / Certifications timeline, Contact and Footer. Use the supplied Vite file structure, fill the content from the attached résumé, use Web3Forms for the contact form with a placeholder access key, and do not generate any images.

**Outcome:**

- Converted the scaffold from Next.js to Vite + React + Tailwind CSS v3.
- Created the requested structure: `src/components/{layout,ui,sections}`, `src/data`, `docs/`, `.env.example`.
- Extracted all résumé content into `src/data/{profile,skills,projects,experience}.js`.
- Built an editorial light theme with five colour tokens and Inter + JetBrains Mono.
- Implemented sticky nav with `IntersectionObserver` active-section tracking and a mobile menu.
- Implemented category filtering on the Projects grid.
- Wired the Web3Forms contact form with honeypot, status states and an `aria-live` region.
- Left every image slot conditional so no placeholder art is rendered.

---

## Template for future entries

```
## N — <short title>

**Prompt:** <what you asked for>

**Outcome:** <what changed, which files>
```
