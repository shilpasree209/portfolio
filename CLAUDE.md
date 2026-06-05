# Portfolio Project

Personal portfolio website for Shilpa Sreekumar — full-stack engineer with a background in banking/financial services.

## Tech Stack

- **React 18** with functional components and hooks
- **Vite 5** for dev server and builds
- **Vanilla CSS** in `src/index.css` (no Tailwind, no CSS modules)

## Dev Commands

```bash
npm run dev      # start dev server (localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview production build locally
```

## Project Structure

```
portfolio/
├── src/
│   ├── App.jsx       # entire portfolio — all sections live here
│   ├── main.jsx      # React 18 createRoot entry point
│   └── index.css     # all styles, ~500 lines
├── index.html
├── vite.config.js
└── package.json
```

Everything is in one file (`App.jsx`). If the file grows significantly, extract sections into separate components under `src/components/`.

## Sections (in order)

1. **Hero** — name, tagline, avatar SVG, responsive nav with mobile menu
2. **About Me** — background summary
3. **Skills** — bullet list of key technologies
4. **Technical Deep Dive** — three tech cards (Python, React, RAG & Context Engineering)
5. **Experience** — company cards for Infosys, TimeClick Software, Tech Delegates
6. **Contact** — name and email

## CSS Conventions

- Mobile-first responsive design; breakpoints at `640px`, `1024px`, `1280px`
- Hero uses `indigo-to-purple` gradient (`#667eea` → `#764ba2`)
- Cards use white background with subtle box shadows and hover lift animations
- Accent color: blue/purple family
- All styles are global in `index.css` — use descriptive class names scoped to their section (e.g., `.experience-card`, `.tech-card`)

## Notes

- No routing — single-page, scroll-based navigation
- No state management library — local `useState` only (currently used for mobile menu toggle)
- No tests configured
