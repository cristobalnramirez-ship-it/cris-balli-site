# Cris Balli — Personal Site

Single-page portfolio. Comparative Literature + Computational Research.

## Files

```
index.html   — page structure
style.css    — all styling, dark/light theme, responsive
script.js    — project cards, Substack RSS fetch, theme toggle, modals
```

## Deploy

Drop the folder onto any static host:

**GitHub Pages**
1. Push to a repo (e.g., `crisballi.github.io`)
2. Settings → Pages → deploy from `main` branch, root `/`
3. Live at `https://crisballi.github.io`

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

The site attempts to fetch from `https://crisballi.substack.com/feed` on page load. If CORS blocks it (common on static hosts), it falls back to the `fallbackPosts` array in `script.js`.

To update manually, edit `fallbackPosts` in `script.js`:

```js
const fallbackPosts = [
  {
    title: "Your Post Title",
    date: "Jan 15, 2026",
    excerpt: "First couple sentences of the post.",
    url: "https://crisballi.substack.com/p/your-post-slug",
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
- **Email** — search for `cris@example.com` and replace with actual address
- **Resume** — place a `resume.pdf` in the same folder

### Theme

Colors and fonts are defined as CSS custom properties at the top of `style.css`. The accent color is `--accent: #c8a55a` (muted amber).
