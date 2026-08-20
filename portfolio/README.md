# Portfolio

Personal portfolio built with React 19, TypeScript, Vite 8, Tailwind CSS 4, React Router 7 and
lucide-react. No other runtime dependencies.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build to dist/
npm run preview  # serve the production build locally
npm run lint
```

---

## Where the content lives

**All copy lives in `src/data/`. You should never need to edit a component to change content.**

Unreplaced placeholders are written as `[LIKE THIS]`. Any *link* still holding a placeholder
renders as visibly inert (dashed border / struck through, with a screen-reader note) instead of a
dead link — so an unfinished site never ships a 404. Fill the value in and it becomes a real link
automatically.

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | **Start here.** Name, initials, role, headline, intro, tagline, location, availability, email, GitHub, LinkedIn, resume URL, About paragraphs, the "Currently" list, profile photo, CTA and contact copy. |
| `src/data/projects.ts` | Featured projects **and** their case-study pages. |
| `src/data/skills.ts` | Skill groups and the technologies in each. |
| `src/data/hackathons.ts` | Hackathons, competitions, workshops, activities. |
| `src/data/education.ts` | Institution, program, dates, coursework, achievements. |
| `src/data/currentlyBuilding.ts` | Work-in-progress cards and their status. |
| `src/data/nav.ts` | Navigation items (`id` must match a `<Section id=…>`). |
| `src/data/types.ts` | The shape of everything above — check here for what a field means. |
| `index.html` | `<title>`, meta description, Open Graph / Twitter tags, canonical URL. |
| `public/favicon.svg` | Favicon placeholder — replace the `??` initials or swap the file. |

### Adding a project

1. Copy an entry in the `projects` array in `src/data/projects.ts`.
2. Give it a unique `slug` — that becomes its URL, `/projects/<slug>`.
3. Fill in the fields. Set `featured: false` to keep it off the home page.
4. Replace `caseStudy: caseStudyTemplate()` with your own array of sections.

The card, the route, the case-study page, the "on this page" contents and the prev/next links are
all generated from that entry. No component changes required.

Case-study sections render **in the order you list them**, and every part is optional — a section
can have `body` paragraphs, `bullets`, an `image`, or any combination. Add or drop sections per
project freely.

### Adding images

Put files in `public/` (e.g. `public/projects/my-app.png`) and reference them as
`'/projects/my-app.png'`. Any `image` field with `src: null` renders a labelled placeholder frame of
the same dimensions, so the layout does not shift when you add the real screenshot. Always write
real `alt` text when you add an image.

Your résumé goes in `public/` too — e.g. `public/resume.pdf`, then set
`site.links.resume = '/resume.pdf'`.

---

## Changing the theme

Every colour in the site is a CSS variable defined in **one place**: the `:root` and `.dark` blocks
at the top of `src/index.css`. Components only ever reference semantic names (`bg-bg`, `text-fg`,
`border-border`, `text-accent`), so there are no hardcoded colours to hunt down.

To change the accent colour, edit these three lines under `:root` (and their counterparts under
`.dark`):

```css
--accent: #3557d8;
--accent-hover: #2b48b8;
--accent-fg: #ffffff; /* text drawn on top of the accent */
```

Light/dark is a class on `<html>`, set before first paint by a small inline script in `index.html`
so the theme never flashes. It follows the OS preference until the user clicks the toggle, after
which the choice is remembered in `localStorage`.

Fonts (Inter + JetBrains Mono) are loaded in `index.html` and mapped to `--font-sans` /
`--font-mono` in `src/index.css`.

---

## Structure

```
src/
  components/
    ui/            Container, Section, Button, Tag, MediaFrame, Reveal, BrandIcons
    Navbar.tsx     Hero.tsx        HeroVisual.tsx   About.tsx
    Projects.tsx   ProjectCard.tsx Skills.tsx       Hackathons.tsx
    Education.tsx  CurrentlyBuilding.tsx            ResumeCTA.tsx
    Contact.tsx    Footer.tsx      ScrollManager.tsx
  pages/           Home.tsx  ProjectDetail.tsx  NotFound.tsx
  data/            site, projects, skills, hackathons, education, currentlyBuilding, nav, types
  hooks/           useReveal, useTheme, useActiveSection, usePageMeta
  lib/utils.ts     cn(), isPlaceholder(), mailto(), prettyUrl()
  App.tsx  main.tsx  index.css
```

`@/` is an alias for `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).

---

## Notes

- **Contact form** is UI only and is labelled as such on the page. `handleSubmit` in
  `src/components/Contact.tsx` does not send anything — wire it to a form service (Formspree,
  Web3Forms, an API route) when you want it live.
- **Motion** — scroll reveals are driven by `useReveal` + `data-reveal` and are fully disabled under
  `prefers-reduced-motion: reduce`.
- **Accessibility** — semantic landmarks, a skip link, one visible focus style, `aria-current` on
  the active nav item, Escape-to-close on the mobile menu, and labelled placeholder frames.

## Deploying

Any static host works — build and serve `dist/`.

Because this is a single-page app with real routes (`/projects/<slug>`), the host must serve
`index.html` for unknown paths. Netlify/Vercel/Cloudflare do this with a rewrite rule. GitHub Pages
does not, so `public/404.html` stashes the requested path and hands it back to `index.html`, which
restores it before React mounts.

If you deploy to a **project** page (`username.github.io/repo/` rather than a custom domain or
`username.github.io/`), also set the base path:

```ts
// vite.config.ts
export default defineConfig({ base: '/repo/', ... })
```

```tsx
// src/main.tsx
<BrowserRouter basename="/repo">
```
