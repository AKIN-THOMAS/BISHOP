# Bishop Akin-Thomas — Portfolio

Single-page portfolio site: React + Vite, no CSS framework — design tokens are plain CSS custom properties (see `src/styles/tokens.css`), typeset in Instrument Serif (display) and Space Grotesk (body/UI).

## Structure

- `src/data/content.js` — all copy (hero, work, experience, research, skills, about, contact). Edit this file to change site content.
- `src/components/` — one component + co-located stylesheet per section (`Nav`, `Hero`, `ImpactStrip`, `WorkGrid`, `ExperienceTimeline`, `ResearchList`, `SkillsGrid`, `About`, `ContactFooter`).
- `src/styles/tokens.css` — color, type, spacing, and radius tokens as CSS custom properties.
- `src/styles/base.css` — reset, base typography, buttons, focus states, layout primitives (`.container`, `.section`, `.divider`).

## Available scripts

- `npm run dev` — start the Vite dev server.
- `npm run build` — production build to `dist/`.
- `npm run preview` — preview the production build locally.

## Known placeholder

`src/data/content.js` → `caseStudies[1].result` still holds a placeholder result for the First Dynamic-Links case study, pending a shareable client outcome.
