/* ============================================
   Cris Balli — Site Logic
   ============================================ */

// ---- Project Data ----

const projects = [
  {
    id: "zeitgeist",
    name: "Zeitgeist Scanner",
    subtitle: "Figuralism",
    status: "active",
    tags: ["Cultural Analysis", "NLP", "Clustering", "Ethics"],
    question:
      "Can we detect emergent cultural formations\u2009\u2014\u2009political movements, linguistic drift, ideological shifts\u2009\u2014\u2009before they reach mainstream legibility?",
    architecture: [
      "Multi-source ingestion: Reddit (PRAW + Arctic Shift), 4chan live boards (JSON API), 4chan archives (4plebs), RSS feeds, Telegram (Telethon)",
      "Local embeddings: `all-MiniLM-L6-v2` via sentence-transformers",
      "UMAP + HDBSCAN clustering \u2192 novelty detection \u2192 proto-formation detection",
      "LLM summarization via Claude Haiku",
      "Twice-daily scan cycle across 5 subreddits + 6 boards",
      "Streamlit + Plotly dashboard (\u201cThe Palm\u201d)",
      "Samaya (ethics) layer: ng\u00f6ndro gate + kill switch\u2009\u2014\u2009ethical guardrails built into the system architecture, not bolted on after",
    ],
    findings:
      "Early stage. Cluster visualizations emerging. Novelty scoring being calibrated.",
    ethics:
      "The Samaya layer enforces ethical constraints at the architecture level: a ng\u00f6ndro gate requires intentional reflection before accessing sensitive outputs, and a kill switch can halt the pipeline if outputs risk amplifying harm. Guardrails are structural, not cosmetic.",
    links: {},
  },
  {
    id: "merit-dedicator",
    name: "Merit Dedicator",
    subtitle: "Prayer Wheel",
    status: "active",
    tags: ["Contemplative Tech", "Automation", "Buddhist Practice"],
    question:
      "What happens when you embed devotional logic into computational infrastructure? Can a machine dedicate merit?",
    architecture: null, // Cris to fill
    findings:
      'This project began from the line: \u201cthe question is not whether LLMs can pray, but what we are training them to pray for.\u201d',
    ethics: null,
    links: {},
  },
  {
    id: "college-oracle",
    name: "College Oracle",
    subtitle: null,
    status: "active",
    tags: ["Information Asymmetry", "NLP", "Education"],
    question:
      "Can we reduce the information asymmetry in college admissions by computationally surfacing patterns across thousands of self-reported outcomes?",
    architecture: null, // Cris to fill
    findings: null,
    ethics: null,
    links: {},
  },
  {
    id: "anamnesis",
    name: "Anamnesis",
    subtitle: null,
    status: "active",
    tags: ["Archive", "Embeddings", "Personal Knowledge"],
    question:
      "What does it look like to build a system that reads your own archive\u2009\u2014\u2009years of writing, thinking, conversation\u2009\u2014\u2009and surfaces what you\u2019ve forgotten you knew?",
    architecture: null, // Cris to fill
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
      "Cross-modal analysis of Jung\u2019s Red Book: when do images contradict text?",
    architecture: null,
    findings: null,
    ethics: null,
    links: {},
  },
  {
    id: "dharma-translator",
    name: "Dharma Translator",
    subtitle: null,
    status: "planned",
    tags: ["Multi-Agent", "Translation", "Tibetan"],
    question:
      "Multi-agent translation pipeline to accelerate Tibetan text translation (84,000 Project).",
    architecture: null,
    findings: null,
    ethics: null,
    links: {},
  },
  {
    id: "houston-map",
    name: "Houston Inequality Map",
    subtitle: null,
    status: "planned",
    tags: ["Visualization", "GIS", "History"],
    question:
      "Animated visualization of income inequality, redlining, and displacement across Houston, 1950\u2013present.",
    architecture: null,
    findings: null,
    ethics: null,
    links: {},
  },
  {
    id: "counter-ontology",
    name: "Counter-Ontology Mirror",
    subtitle: null,
    status: "planned",
    tags: ["Algorithmic Self", "Identity", "Platforms"],
    question:
      "Algorithmic self-portrait: how platforms see you vs. how you see yourself.",
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
      "Empirically derived taxonomy of altered states from trip report embeddings.",
    architecture: null,
    findings: null,
    ethics: null,
    links: {},
  },
];

// ---- Fallback Writing Data ----
// TODO: automate via RSS or Substack API
const fallbackPosts = [
  {
    title: "Recent Post 1",
    date: "2026",
    excerpt:
      "Placeholder\u2009\u2014\u2009replace with actual Substack post title, date, and excerpt once published.",
    url: "https://crisballi.substack.com",
  },
  {
    title: "Recent Post 2",
    date: "2026",
    excerpt:
      "Placeholder\u2009\u2014\u2009replace with actual Substack post title, date, and excerpt once published.",
    url: "https://crisballi.substack.com",
  },
  {
    title: "Recent Post 3",
    date: "2025",
    excerpt:
      "Placeholder\u2009\u2014\u2009replace with actual Substack post title, date, and excerpt once published.",
    url: "https://crisballi.substack.com",
  },
  {
    title: "Recent Post 4",
    date: "2025",
    excerpt:
      "Placeholder\u2009\u2014\u2009replace with actual Substack post title, date, and excerpt once published.",
    url: "https://crisballi.substack.com",
  },
];

// ---- Init ----

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNav();
  initScrollSpy();
  renderProjects();
  fetchWriting();
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
  const feedUrl = "https://crisballi.substack.com/feed";

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
      <a href="${escapeHtml(track.sourceUrl)}" class="track-source" target="_blank" rel="noopener" title="Open in ${escapeHtml(track.source)}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a>
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
