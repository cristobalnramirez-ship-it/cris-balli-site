/* ============================================
   Cristobal Ramirez — Site Logic
   ============================================ */

// ---- Project Data ----

const projects = [
  // --- Live ---
  {
    id: "redlining-atlas",
    name: "Atlas of American Redlining",
    subtitle: null,
    status: "live",
    tags: ["Spatial Data", "Historical GIS", "Racial Geography", "Public Tool"],
    question:
      "What did federal appraisers see when they looked at your neighborhood in 1938?",
    architecture: [
      "Interactive map displaying HOLC redlining data across American cities \u2014 the original grades, the original language, the original racial calculus",
      "A companion to the inequality mapping projects that layer census data, highway construction, flood zones, and pollution exposure on top to show what happened next",
    ],
    findings: null,
    ethics: null,
    links: { "Live Site": "https://american-redlining-atlas.netlify.app/" },
  },
  {
    id: "monastery-directory",
    name: "Buddhist Monastery Directory",
    subtitle: null,
    status: "live",
    tags: ["Mapping", "Buddhist Practice", "Public Tool"],
    question:
      "Where are the monasteries?",
    architecture: [
      "A filterable, map-based directory of Buddhist monasteries, temples, and practice centers across the Americas",
      "Searchable by tradition, retreat offerings, visitor accessibility, and language",
      "Nothing like it exists in modern, usable form. Built as a public good",
    ],
    findings: null,
    ethics: null,
    links: { "Live Site": "https://cristobalnramirez-ship-it.github.io/buddhist-monastery-directory/" },
  },
  // --- Active ---
  {
    id: "zeitgeist",
    name: "Zeitgeist Scanner",
    subtitle: null,
    status: "active",
    tags: ["Cultural Analysis", "NLP", "Clustering", "Ethics (Samaya)"],
    question:
      "Retrodictive detection of emergent discourse formations \u2014 political movements, linguistic drift, ideological shifts \u2014 in multi-platform text. A null battery shows the method does not support forward prediction.",
    architecture: [
      "Multi-source cultural intelligence pipeline ingesting Reddit, 4chan, Telegram, and RSS feeds in twice-daily scan cycles",
      "Sentence-transformer embeddings, UMAP, and HDBSCAN cluster the corpus; formations are identified retrodictively",
      "A null battery establishes that the method does not support forward prediction",
      "Ethical guardrails are built into the system architecture, not bolted on after",
    ],
    findings: null,
    ethics: null,
    links: {},
  },
  {
    id: "counter-ontology",
    name: "Tezca (Mirror)",
    subtitle: null,
    status: "active",
    tags: ["Algorithmic Identity", "Multimodal", "Embeddings", "Privacy"],
    question:
      "What does the algorithm think you are \u2014 and what happens when you make yourself unreadable to it?",
    architecture: [
      "A browser extension captures your own scroll sessions; recordings are encrypted on your machine and the unencrypted originals deleted",
      "Seven multimodal enrichment modules annotate each reel",
      "CLIP and sentence-transformer embeddings, clustered with UMAP and HDBSCAN, map the profile the platform is building",
      "An LLM interpretive engine, running on a local model by default, writes per-reel annotations and a diagnostic for each session",
    ],
    findings: null,
    ethics: null,
    links: {},
  },
  {
    id: "la-matanza",
    name: "La Matanza",
    subtitle: null,
    status: "active",
    tags: ["Digital Humanities", "Counter-Archive", "NLP", "Texas-Mexico Border"],
    question:
      "What does an ethnic cleansing look like when reconstructed from the newspapers that covered it without calling it one?",
    architecture: [
      "Digital counter-archive assembling 27,000+ newspaper pages from La Prensa, the Brownsville Herald, and El Dem\u00f3crata Fronterizo",
      "1,623 units of testimony from the 1919 Canales Proceedings",
      "NLP and embedding pipelines surface connections across thousands of pages of OCR\u2019d testimony, reportage, and official record",
      "Building the archive that should have existed for a century",
    ],
    findings: null,
    ethics: null,
    links: {},
  },
  {
    id: "anamnesis",
    name: "Anamnesis",
    subtitle: null,
    status: "active",
    tags: ["NLP", "Archive", "State Violence", "Texas-Mexico Border"],
    question:
      "Can the structural signature of erasure be detected in archives of state violence?",
    architecture: [
      "NLP pipeline detecting the structural signature of erasure in archives of state violence",
      "Corpus: 1,623 units of testimony from the 1919 Canales Proceedings and 163,792 units from 27,033 pages of border newspapers, 1915\u20131920",
      "Five-dimension erasure rubric, calibrated to weighted Cohen\u2019s kappa 0.62\u20130.89",
    ],
    findings: null,
    ethics: null,
    links: {},
  },
  {
    id: "merit-dedicator",
    name: "Merit Dedicator (Prayer Wheel)",
    subtitle: null,
    status: "active",
    tags: ["Contemplative Tech", "Automation", "Buddhist Practice"],
    question:
      "What happens when you embed devotional logic into computational infrastructure? Can a machine dedicate merit?",
    architecture: null,
    findings: null,
    ethics: null,
    links: {},
  },
  // --- Planned ---
  {
    id: "red-book",
    name: "Red Book Engine",
    subtitle: null,
    status: "planned",
    tags: ["Cross-Modal", "Jung", "Image Analysis"],
    question:
      "Jung\u2019s Red Book puts images and text in conversation. When do they contradict each other?",
    architecture: null,
    findings: null,
    ethics: null,
    links: {},
  },
  {
    id: "erowid",
    name: "Erowid Cartographer",
    subtitle: null,
    status: "planned",
    tags: ["Embeddings", "Taxonomy", "Phenomenology"],
    question:
      "How do people describe altered states in their own words, and how do those first-person accounts get sorted into categories? A study of tens of thousands of reports.",
    architecture: null,
    findings: null,
    ethics: null,
    links: {},
  },
  // --- Archived ---
  {
    id: "mantis",
    name: "Mantis",
    subtitle: null,
    status: "archived",
    tags: ["Prediction Markets", "Cultural Analysis", "Automation", "Ethics"],
    question:
      "A prediction market trading bot that reads cultural signals from emergent discourse on Reddit and 4chan to estimate probability on live markets. Built with a risk manager, exit logic, and a dry-run mode. The question it raises: if you can model cultural emergence well enough to trade on it, what are the ethics of doing so?",
    architecture: null,
    findings: null,
    ethics: null,
    links: {},
  },
  {
    id: "84000-pipeline",
    name: "84,000 Translation Pipeline",
    subtitle: null,
    status: "archived",
    tags: ["Tibetan NLP", "Multi-Agent", "Translation", "84,000 Project"],
    question:
      "231,000 pages of Tibetan Buddhist scripture remain untranslated. Can multi-agent AI clear the bottleneck?",
    architecture: [
      "Multi-agent pipeline where four specialized agents \u2014 literal translator, technical terminologist, poetic register, and synthesizer \u2014 produce first-pass translations of untranslated texts",
      "Flags disagreements and doctrinal sensitivities for human review",
      "Built to support the 84,000 Project\u2019s mission of translating the entire Kangyur and Tengyur into modern languages",
    ],
    findings: null,
    ethics: null,
    links: {},
  },
];

// ---- Fallback Writing Data ----
// TODO: automate via RSS or Substack API
const fallbackPosts = [
  {
    title: "Make the Machine Pray",
    date: "Jan 19, 2026",
    excerpt: "On language models, mantra, and what we train machines to pray for.",
    url: "https://cristobalramirez.substack.com/p/make-the-robots-pray",
  },
  {
    title: "The Waiting Room at the End of Time",
    date: "Mar 13, 2026",
    excerpt: "On algorithmic recirculation and cultural stasis.",
    url: "https://cristobalramirez.substack.com/p/the-waiting-room-at-the-end-of-time",
  },
  {
    title: "Dreaming Mexican Art",
    date: "May 13, 2026",
    excerpt: "On tequitqui and indigenous labor misattributed in colonial architecture.",
    url: "https://cristobalramirez.substack.com/p/dreaming-mexican-art",
  },
  {
    title: "Larping All the Way Down",
    date: "Jun 18, 2026",
    excerpt: "A found-collage essay of fragments overheard at New York Tech Week.",
    url: "https://cristobalramirez.substack.com/p/the-line-starts-here",
  },
  {
    title: "Is Canvassing the Method?",
    date: "Sep 27, 2026",
    excerpt: "On doors, comment sections, and scrolling as a way of reading.",
    url: "https://cristobalramirez.substack.com/p/is-organizing-the-method",
  },
];

// ---- Init ----

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNav();
  initScrollSpy();
  renderProjects();
  renderWritingCards(fallbackPosts); // curated list; live RSS would override the selection
  initModal();
  initMusic();
});

// ---- Theme Toggle ----

function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  }
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

// ---- Mobile Nav ----

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !open);
    links.classList.toggle("open", !open);
  });

  // Close on link click
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("open");
    });
  });
}

// ---- Scroll Spy ----

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("active"));
          const active = document.querySelector(
            `.nav-links a[href="#${entry.target.id}"]`
          );
          if (active) active.classList.add("active");
        }
      });
    },
    { rootMargin: "-30% 0px -70% 0px" }
  );

  sections.forEach((s) => observer.observe(s));
}

// ---- Substack RSS ----

async function fetchWriting() {
  const grid = document.getElementById("writing-grid");
  const feedUrl = "https://cristobalramirez.substack.com/feed";

  try {
    // Try direct fetch first (will likely fail due to CORS on static hosting)
    const resp = await fetch(feedUrl);
    if (!resp.ok) throw new Error("RSS fetch failed");
    const text = await resp.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "text/xml");
    const items = xml.querySelectorAll("item");

    if (items.length === 0) throw new Error("No items");

    const posts = Array.from(items)
      .slice(0, 6)
      .map((item) => {
        const title = item.querySelector("title")?.textContent || "Untitled";
        const link = item.querySelector("link")?.textContent || "#";
        const pubDate = item.querySelector("pubDate")?.textContent || "";
        const desc = item.querySelector("description")?.textContent || "";
        // Strip HTML and trim excerpt
        const tmp = document.createElement("div");
        tmp.innerHTML = desc;
        const plainText = tmp.textContent || tmp.innerText || "";
        const excerpt = plainText.split(/[.!?]/).slice(0, 2).join(". ").trim();
        const date = pubDate ? formatDate(pubDate) : "";
        return { title, date, excerpt: excerpt ? excerpt + "." : "", url: link };
      });

    renderWritingCards(posts);
  } catch {
    // Fallback to hardcoded data
    renderWritingCards(fallbackPosts);
  }
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function renderWritingCards(posts) {
  const grid = document.getElementById("writing-grid");
  grid.innerHTML = posts
    .map(
      (p) => `
    <article class="writing-card">
      <span class="card-date">${escapeHtml(p.date)}</span>
      <h3 class="card-title">${escapeHtml(p.title)}</h3>
      <p class="card-excerpt">${escapeHtml(p.excerpt)}</p>
      <a href="${escapeHtml(p.url)}" class="card-link" target="_blank" rel="noopener">Read \u2192</a>
    </article>
  `
    )
    .join("");
}

// ---- Lab Projects ----

function renderProjects() {
  const grid = document.getElementById("lab-grid");
  grid.innerHTML = projects
    .map((p) => {
      const isPlanned = p.status === "planned";
      return `
      <article class="lab-card${isPlanned ? " planned" : ""}" data-project="${p.id}">
        <div class="lab-card-head">
          <div>
            <div class="card-name">${escapeHtml(p.name)}</div>
            ${p.subtitle ? `<div class="card-subtitle">${escapeHtml(p.subtitle)}</div>` : ""}
          </div>
          <span class="badge badge-${p.status}">${p.status}</span>
        </div>
        <p class="card-question">${escapeHtml(p.question)}</p>
        <div class="card-tags">
          ${p.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
        </div>
        ${!isPlanned ? '<div class="card-expand-hint">click to expand</div>' : ""}
      </article>
    `;
    })
    .join("");

  // Attach click handlers (not for planned)
  grid.querySelectorAll(".lab-card:not(.planned)").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-project");
      openModal(id);
    });
  });
}

// ---- Modal ----

function openModal(projectId) {
  const p = projects.find((x) => x.id === projectId);
  if (!p) return;

  const overlay = document.getElementById("modal-overlay");
  const content = document.getElementById("modal-content");

  let html = `
    <h3>${escapeHtml(p.name)}</h3>
    ${p.subtitle ? `<div class="modal-subtitle">${escapeHtml(p.subtitle)}</div>` : ""}
    <div class="modal-badges">
      <span class="badge badge-${p.status}">${p.status}</span>
      ${p.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
    </div>
  `;

  // Question
  html += `
    <div class="modal-section">
      <h4>Question</h4>
      <p>${escapeHtml(p.question)}</p>
    </div>
  `;

  // Architecture
  if (p.architecture) {
    html += `
      <div class="modal-section">
        <h4>Architecture</h4>
        <ul>${p.architecture.map((line) => `<li>${inlineCode(escapeHtml(line))}</li>`).join("")}</ul>
      </div>
    `;
  } else {
    html += `
      <div class="modal-section">
        <h4>Architecture</h4>
        <p><em>Architecture details coming soon.</em></p>
      </div>
    `;
  }

  // Findings
  if (p.findings) {
    html += `
      <div class="modal-section">
        <h4>Findings / Status</h4>
        <p>${escapeHtml(p.findings)}</p>
      </div>
    `;
  }

  // Ethics
  if (p.ethics) {
    html += `
      <div class="modal-section">
        <h4>Ethics</h4>
        <p>${escapeHtml(p.ethics)}</p>
      </div>
    `;
  }

  // Links
  const linkEntries = Object.entries(p.links || {});
  if (linkEntries.length > 0) {
    html += `
      <div class="modal-links">
        ${linkEntries.map(([label, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(label)}</a>`).join("")}
      </div>
    `;
  }

  content.innerHTML = html;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Focus trap — close button
  overlay.querySelector(".modal-close").focus();
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initModal() {
  document.querySelector(".modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// ---- Utility ----

function escapeHtml(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// Convert `backtick` spans to <code> tags (after escaping)
function inlineCode(str) {
  return str.replace(/`([^`]+)`/g, "<code>$1</code>");
}

// ---- Music Player ----
//
// HOW TO MANAGE PLAYLISTS:
//
// All music data lives in music/playlists.json. Edit that file to manage tracks.
//
// ADD A TRACK:
//   Add an object to the "tracks" array of any playlist:
//   {
//     "title": "Track Name",
//     "artist": "Artist Name",
//     "album": "Album Name (optional)",
//     "year": "2024 (optional)",
//     "note": "Your personal note about this track",
//     "source": "spotify",
//     "sourceUrl": "https://open.spotify.com/track/YOUR_TRACK_ID"
//   }
//   To get a Spotify URL: right-click any track in Spotify → Share → Copy Song Link.
//   The link looks like: https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8?si=...
//   You can remove the ?si=... part or leave it — both work.
//
// REMOVE A TRACK:
//   Delete the track object from the "tracks" array.
//
// CREATE A NEW PLAYLIST:
//   Add a new object to the "playlists" array:
//   {
//     "id": "your_playlist_id",
//     "name": "Display Name",
//     "description": "One-line description.",
//     "tracks": []
//   }
//
// USE YOUTUBE INSTEAD OF SPOTIFY:
//   Set "source" to "youtube" and "sourceUrl" to the YouTube URL:
//   {
//     "source": "youtube",
//     "sourceUrl": "https://www.youtube.com/watch?v=VIDEO_ID"
//   }
//   YouTube tracks won't have inline embeds — they'll open in a new tab.
//   Spotify tracks get embedded players in the mini-player bar.
//

let musicData = null;
let currentPlaylistId = null;
let currentTrackIndex = -1;

async function initMusic() {
  try {
    const resp = await fetch("music/playlists.json");
    if (!resp.ok) throw new Error("Failed to load playlists");
    musicData = await resp.json();
    if (!musicData.playlists?.some((p) => p.tracks.length)) return;
    document.getElementById("music").hidden = false;
    document.querySelector('.nav-links a[href="#music"]').hidden = false;
    renderPlaylistTabs();
    if (musicData.playlists.length > 0) {
      selectPlaylist(musicData.playlists[0].id);
    }
    initMusicEvents();
  } catch (e) {
    console.warn("Music data not loaded:", e);
  }
}

function renderPlaylistTabs() {
  const container = document.querySelector(".playlist-tabs");
  if (!container || !musicData) return;

  container.innerHTML = musicData.playlists
    .map(
      (pl) =>
        `<button class="playlist-tab" data-playlist="${escapeHtml(pl.id)}" role="tab" aria-selected="false">${escapeHtml(pl.name)}</button>`
    )
    .join("");

  container.querySelectorAll(".playlist-tab").forEach((tab) => {
    tab.addEventListener("click", () => selectPlaylist(tab.dataset.playlist));
  });
}

function selectPlaylist(id) {
  const playlist = musicData.playlists.find((p) => p.id === id);
  if (!playlist) return;

  currentPlaylistId = id;

  // Update tab active state
  document.querySelectorAll(".playlist-tab").forEach((tab) => {
    const isActive = tab.dataset.playlist === id;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive);
  });

  // Update description
  const descEl = document.querySelector(".playlist-desc");
  if (descEl) descEl.textContent = playlist.description;

  // Render tracks
  renderTrackList(playlist);
}

function renderTrackList(playlist) {
  const container = document.querySelector(".track-list");
  if (!container) return;

  container.innerHTML = playlist.tracks
    .map(
      (track, i) => `
    <div class="track-item${currentPlaylistId === playlist.id && currentTrackIndex === i ? " playing" : ""}" data-index="${i}" role="listitem">
      <span class="track-number">${String(i + 1).padStart(2, "0")}</span>
      <div class="track-info">
        <span class="track-title">${escapeHtml(track.title)}</span>
        <span class="track-artist">${escapeHtml(track.artist)}${track.year ? " \u00b7 " + escapeHtml(track.year) : ""}</span>
        ${track.note ? `<span class="track-note">${escapeHtml(track.note)}</span>` : ""}
      </div>
      ${track.sourceUrl ? `<a href="${escapeHtml(track.sourceUrl)}" class="track-source" target="_blank" rel="noopener" title="Open in ${escapeHtml(track.source)}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a>` : ""}
    </div>
  `
    )
    .join("");
}

function initMusicEvents() {
  // Track list click delegation
  const trackList = document.querySelector(".track-list");
  if (trackList) {
    trackList.addEventListener("click", (e) => {
      if (e.target.closest(".track-source")) return;
      const item = e.target.closest(".track-item");
      if (!item) return;
      playTrack(currentPlaylistId, parseInt(item.dataset.index));
    });
  }

  // Mini player controls
  const player = document.getElementById("mini-player");
  if (player) {
    player.querySelector(".mini-player-close").addEventListener("click", hideMiniPlayer);
    player.querySelector(".mini-player-prev").addEventListener("click", prevTrack);
    player.querySelector(".mini-player-next").addEventListener("click", nextTrack);
  }
}

function playTrack(playlistId, trackIndex) {
  const playlist = musicData.playlists.find((p) => p.id === playlistId);
  if (!playlist || !playlist.tracks[trackIndex]) return;

  currentPlaylistId = playlistId;
  currentTrackIndex = trackIndex;
  const track = playlist.tracks[trackIndex];

  // Update playing state in track list
  document.querySelectorAll(".track-item").forEach((item, i) => {
    item.classList.toggle("playing", i === trackIndex);
  });

  // Show mini player
  showMiniPlayer(track);
}

function getEmbedUrl(track) {
  if (track.source === "spotify") {
    const id = track.sourceUrl.match(/track\/([a-zA-Z0-9]+)/)?.[1];
    return id
      ? `https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`
      : null;
  }
  return null;
}

function showMiniPlayer(track) {
  const player = document.getElementById("mini-player");
  if (!player) return;

  const embedArea = player.querySelector(".mini-player-embed");
  const titleEl = player.querySelector(".mini-player-title");
  const artistEl = player.querySelector(".mini-player-artist");
  const noteEl = player.querySelector(".mini-player-note");

  // Set info
  titleEl.textContent = track.title;
  artistEl.textContent = track.artist;
  noteEl.textContent = track.note || "";

  // Set embed
  const embedUrl = getEmbedUrl(track);
  if (embedUrl) {
    embedArea.innerHTML = `<iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="${escapeHtml(track.title)} by ${escapeHtml(track.artist)}"></iframe>`;
  } else {
    embedArea.innerHTML = `<a href="${escapeHtml(track.sourceUrl)}" target="_blank" rel="noopener" class="mini-player-external">Open in ${escapeHtml(track.source)} \u2192</a>`;
  }

  // Show with animation
  player.hidden = false;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      player.classList.add("active");
    });
  });
  document.body.classList.add("mini-player-open");
}

function hideMiniPlayer() {
  const player = document.getElementById("mini-player");
  if (!player) return;

  player.classList.remove("active");
  document.body.classList.remove("mini-player-open");

  const onEnd = () => {
    if (!player.classList.contains("active")) {
      player.hidden = true;
      // Clear the iframe to stop playback
      const embedArea = player.querySelector(".mini-player-embed");
      if (embedArea) embedArea.innerHTML = "";
    }
    player.removeEventListener("transitionend", onEnd);
  };
  player.addEventListener("transitionend", onEnd);

  // Clear playing state
  currentTrackIndex = -1;
  document.querySelectorAll(".track-item").forEach((item) => {
    item.classList.remove("playing");
  });
}

function nextTrack() {
  if (!musicData || currentPlaylistId === null) return;
  const playlist = musicData.playlists.find((p) => p.id === currentPlaylistId);
  if (!playlist) return;
  const next = (currentTrackIndex + 1) % playlist.tracks.length;
  playTrack(currentPlaylistId, next);
}

function prevTrack() {
  if (!musicData || currentPlaylistId === null) return;
  const playlist = musicData.playlists.find((p) => p.id === currentPlaylistId);
  if (!playlist) return;
  const prev =
    currentTrackIndex <= 0
      ? playlist.tracks.length - 1
      : currentTrackIndex - 1;
  playTrack(currentPlaylistId, prev);
}
