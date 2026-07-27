# Ahmed Mohammed — Portfolio

A one-page scrolling portfolio built with **Vite + React + Tailwind CSS**. No backend: the contact form is handled by [Web3Forms](https://web3forms.com).

## Run locally

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build in dist/
pnpm preview  # preview the production build
```

## Enable the contact form (Web3Forms)

1. Go to [web3forms.com](https://web3forms.com), enter your email, and copy the **access key** they send you.
2. Copy `.env.example` to `.env`.
3. Paste the key: `VITE_WEB3FORMS_KEY=abcd1234-...`
4. Restart the dev server.

Until a real key is set, the form validates and shows a friendly "not connected yet" message instead of sending.

## Adding your photo

No images are generated in this project — the layout is designed to look complete without them, and the photo slot only renders once you provide a file.

1. Save your headshot as `public/images/profile.jpg` (a 4:5 portrait crop, around 800×1000px, works best).
2. Open `src/data/profile.js` and change:
   ```js
   photo: null,
   // to
   photo: "/images/profile.jpg",
   ```
3. It will appear at the top of the right-hand column in the **About** section.

## Adding project screenshots

1. Drop images into `public/images/projects/`.
2. In `src/data/projects.js`, set the `image` field of any project:
   ```js
   image: "/images/projects/multilingual-translator.png",
   ```
3. Projects with `image: null` simply render as text cards — no empty placeholder boxes.

## Adding your résumé

Save your PDF as `public/resume.pdf`. The nav and hero "Résumé" buttons already point at `/resume.pdf` (configurable via `resumeUrl` in `src/data/profile.js`).

## What to edit where

| File | Contains |
| --- | --- |
| `src/data/profile.js` | Name, role, pitch, email, phone, WhatsApp, GitHub, LinkedIn, nav links |
| `src/data/skills.js` | Skill groups and the "AI tools I use" subsection |
| `src/data/projects.js` | Project cards and filter categories |
| `src/data/experience.js` | Experience, education and certifications timeline |
| `src/index.css` | Colour tokens, typography, base styles |

**Before publishing, replace the `TODO` placeholder URLs in `src/data/profile.js`** (GitHub, LinkedIn) and the `#` placeholders for `liveUrl` / `repoUrl` in `src/data/projects.js`.

## Deploy

Any static host works. On Vercel: framework preset **Vite**, build command `pnpm build`, output directory `dist`. Add `VITE_WEB3FORMS_KEY` as an environment variable.
