# Project Documentation

## 1. Purpose

A personal portfolio for **Ahmed Mohammed**, AI Engineer and third-year Computer Science (Intelligent Systems) student at Alexandria University, targeting a Summer 2026 AI / Data Science internship.

## 2. Architecture decision: one page, not many

A single scrolling page with a sticky nav was chosen over a multi-page routed app because it:

- removes the router as a dependency and therefore as a source of bugs,
- keeps every piece of evidence a recruiter needs within one scroll,
- deploys as a single static HTML file plus assets,
- still provides clear navigation via anchor links and an active-section indicator.

Navigation uses `IntersectionObserver` to highlight the section currently in view, and native smooth scrolling with `scroll-padding-top` so section headings are never hidden behind the sticky header.

## 3. Stack

| Concern | Choice | Why |
| --- | --- | --- |
| Build tool | Vite | Instant HMR, tiny static output |
| UI | React 19 (JSX) | Component reuse for cards, badges, timeline items |
| Styling | Tailwind CSS v3 | Utility-first, theme driven by CSS custom properties |
| Icons | lucide-react | Consistent stroke icons; brand marks are local SVGs since lucide dropped them |
| Contact | Web3Forms | Working form with zero backend and no database |

## 4. Structure

```
src/
├── components/
│   ├── layout/    Navbar (sticky, active-section, mobile menu), Footer
│   ├── ui/        Button, Card, Badge, SectionHeading, BrandIcons
│   └── sections/  Hero, About, Skills, Projects, Experience, Contact
├── data/          profile.js, skills.js, projects.js, experience.js
├── App.jsx        Section composition order
├── main.jsx       React entry
└── index.css      Design tokens + base layer
```

Content is fully separated from presentation: every section reads from `src/data/*`, so updating the portfolio is a data edit, not a code edit.

## 5. Design system

Five colours total, defined as CSS custom properties in `src/index.css` and exposed to Tailwind in `tailwind.config.js`:

- `--background` paper off-white
- `--foreground` ink
- `--muted` / `--muted-foreground` stone surfaces and secondary text
- `--border` hairline rules
- `--accent` a single warm signal colour used for emphasis, links and timeline nodes

Two typefaces: **Inter** for prose and headings, **JetBrains Mono** for labels, metadata and tags — a deliberately technical, editorial feel that carries the design without decorative imagery.

## 6. Images policy

No generated or placeholder imagery. Every image slot is conditional:

- `About` renders a portrait only when `profile.photo` is set.
- Each project card renders a screenshot only when `project.image` is set.

This means the page never shows a broken or grey placeholder box, and adding real media later is a one-line data change. See README for instructions.

## 7. Contact form flow

1. The form posts `FormData` to `https://api.web3forms.com/submit`.
2. `access_key` comes from `VITE_WEB3FORMS_KEY`.
3. A hidden `botcheck` honeypot field filters basic spam.
4. Status is tracked as `idle | sending | success | error`, and results are announced through an `aria-live="polite"` region.
5. If no key is configured, submission short-circuits with an explanatory message rather than failing silently.

## 8. Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Skip-to-content link as the first focusable element.
- Visible focus ring via `:focus-visible`.
- Filter buttons use `role="tab"` with `aria-selected`; the mobile menu button exposes `aria-expanded` / `aria-controls`.
- All icon-only controls carry `sr-only` text labels.
- `prefers-reduced-motion` disables animation and smooth scrolling.

## 9. Performance

- Static output, no client-side router, no data fetching on load.
- Fonts preconnected and loaded with `display=swap`.
- Project screenshots (when added) use `loading="lazy"`.
