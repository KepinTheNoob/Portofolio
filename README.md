# Kevin Setiawan - Portfolio

Personal portfolio site. React + TypeScript + Vite, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

All content lives in `src/data/`:

- `personal.ts` - name, title, bio, contact links
- `projects.ts` - project list (title, description, stack, links, images)
- `experience.ts` - work experience entries
- `techStack.ts` - tech stack grouped by category

Edit these files to update the site. The UI reads from them directly.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Design system

See `DESIGN.md` for colors, typography, spacing, and component specs. All CSS references design tokens defined in `src/index.css`.
