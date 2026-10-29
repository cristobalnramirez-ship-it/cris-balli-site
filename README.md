# Cristobal Ramirez — Personal Site

Single-page portfolio. Comparative Literature + Computational Research.

## Files

```
index.html   — page structure
style.css    — all styling, dark/light theme, responsive
script.js    — project cards, Substack RSS fetch, theme toggle, modals
```

## Deploy

Live at `cristobalramirez.dev` (Netlify, linked to this repo; every push to `main` deploys) and at the GitHub Pages URL below.

Drop the folder onto any static host:

**GitHub Pages**
1. Push to this repo (`cristobalnramirez-ship-it/cris-balli-site`)
2. Settings → Pages → deploy from `main` branch, root `/`
3. Live at `https://cristobalnramirez-ship-it.github.io/cris-balli-site/`

**Netlify / Vercel**
1. Drag-and-drop the folder, or connect the repo
2. No build step needed — it's static HTML/CSS/JS

**Local preview**
```bash
# Python
python -m http.server 8000

# Node
npx serve .
```
Open `http://localhost:8000`.

## Updating content

### Substack posts

The Writing list is curated by hand: edit the `fallbackPosts` array in `script.js` and the matching cards in `index.html` (the HTML copy is what visitors without JavaScript see). The live RSS fetch is disabled so it can't override the selection.

```js
const fallbackPosts = [
  {
    title: "Your Post Title",
    date: "Jan 15, 2026",
    excerpt: "First couple sentences of the post.",
    url: "https://cristobalramirez.substack.com/p/your-post-slug",
  },
  // ...
];
```

### Adding a project

Add an entry to the `projects` array in `script.js`:

```js
{
  id: "unique-slug",
  name: "Project Name",
  subtitle: "Optional Subtitle",     // or null
  status: "active",                   // "active" | "early" | "planned"
  tags: ["Tag 1", "Tag 2"],
  question: "The question this project investigates.",
  architecture: [                     // array of lines, or null
    "Line 1 of technical description",
    "Line 2 — supports <code>inline code</code>",
  ],
  findings: "Current status or discoveries.",  // or null
  ethics: "Ethical considerations.",            // or null
  links: {                            // or empty {}
    "GitHub": "https://github.com/...",
    "Demo": "https://...",
  },
},
```

Active/early projects get a clickable detail modal. Planned projects display as muted cards (name + question only).

### Other content

- **About text** — edit directly in `index.html`, `#about` section
- **Contact links** — edit in `index.html`, `#contact` section
- **Hero links** — edit in `index.html`, `#hero` section
- **Resume** — place a `resume.pdf` in the same folder, then add the link back in the `#about` section

### Theme

Colors and fonts are defined as CSS custom properties at the top of `style.css`. The accent color is `--accent: #c8a55a` (muted amber).
