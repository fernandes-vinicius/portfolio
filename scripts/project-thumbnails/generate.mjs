/**
 * Generates YouTube-style cover thumbnails for the project cards.
 *
 * Each thumbnail is an HTML/CSS composition (headline, sticker, tech chips and
 * a tilted screenshot of the real app) rendered by headless Chrome at
 * 1280×720 and saved as WebP to `public/images/projects/<slug>.webp` — the
 * path stored in the project's `thumbnail` field in Sanity.
 *
 * Usage:
 *   npm run thumbnails              # all projects below
 *   npm run thumbnails -- listify   # a single one
 *
 * Requirements: Google Chrome installed (Playwright `chrome` channel).
 * Screenshots used inside the thumbnails live in `./sources/<slug>.webp`.
 *
 * Changed an existing image? The Next image optimizer caches by URL: clear
 * `.next/dev/cache/images` locally, and prefer a new file name (and update the
 * `thumbnail` field in Sanity) for images already served in production.
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
import sharp from "sharp";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(HERE, "sources");
const OUT = path.resolve(HERE, "../../public/images/projects");
const only = process.argv[2];

/**
 * headline: array of lines; wrap a word in [brackets] to paint it with the
 * accent "marker" block.
 */
const projects = [
  {
    slug: "salvia",
    kicker: "Diet & nutrition PWA",
    headline: ["Macros that", "[add up]"],
    sticker: ["AI", "recipes"],
    chips: ["Next.js 16", "Drizzle", "AI SDK"],
    accent: "#4ade80",
    accent2: "#facc15",
    base: "#06140b",
  },
  {
    slug: "vitrine-alto-oeste",
    kicker: "Local marketplace",
    headline: ["Your town,", "[online]"],
    sticker: ["Built", "solo"],
    chips: ["React Router 7", "Supabase", "Sanity"],
    accent: "#3b82f6",
    accent2: "#60a5fa",
    base: "#050a1a",
  },
  {
    slug: "ignite-call",
    kicker: "Scheduling platform",
    headline: ["Booking", "made [easy]"],
    sticker: ["Google", "Calendar"],
    chips: ["Next.js", "TypeScript", "Calendar API"],
    accent: "#00b37e",
    accent2: "#8257e5",
    base: "#0b0b12",
  },
  {
    slug: "listify",
    kicker: "PWA · works 100% offline",
    headline: ["Shopping", "[offline]"],
    sticker: ["AI", "price scan"],
    chips: ["React 19", "React Router 7", "Gemini"],
    accent: "#14b8a6",
    accent2: "#22d3ee",
    base: "#03130f",
    zoom: 1.55,
    origin: "50% 0%",
  },
  {
    slug: "that-movie",
    kicker: "Powered by TMDB",
    headline: ["Next", "[movie]?"],
    sticker: ["SSR", "fast"],
    chips: ["Next.js", "TypeScript", "TMDB API"],
    accent: "#ef4444",
    accent2: "#f59e0b",
    base: "#140405",
  },
  {
    slug: "expert-notes",
    kicker: "Web Speech API",
    headline: ["Talk.", "It [writes]."],
    sticker: ["Voice", "→ text"],
    chips: ["React", "TypeScript", "Speech API"],
    accent: "#a3e635",
    accent2: "#22c55e",
    base: "#0b1220",
  },
  {
    slug: "todo-list-react",
    kicker: "React · CSS Modules",
    headline: ["Get things", "[done]"],
    sticker: ["2/6", "done"],
    chips: ["React", "TypeScript", "CSS Modules"],
    accent: "#8b5cf6",
    accent2: "#38bdf8",
    base: "#0c0a1d",
    zoom: 1.35,
    origin: "50% 20%",
  },
  {
    slug: "react-redux-zustand",
    kicker: "State management showdown",
    headline: ["Redux", "[vs] Zustand"],
    sticker: ["Who", "wins?"],
    chips: ["Redux Toolkit", "Zustand", "React"],
    accent: "#a855f7",
    accent2: "#f97316",
    base: "#120a1a",
  },
  {
    slug: "the-fit-club",
    kicker: "Landing page",
    headline: ["Shape", "your [body]"],
    sticker: ["Framer", "Motion"],
    chips: ["Next.js", "Tailwind", "Framer Motion"],
    accent: "#f97316",
    accent2: "#facc15",
    base: "#160b03",
  },
  {
    slug: "ovgs",
    kicker: "Clean Architecture · end to end",
    headline: ["Sales", "[orders]"],
    sticker: ["Fully", "tested"],
    chips: ["Next.js 16", "Redux Saga", "Vitest"],
    accent: "#3b82f6",
    accent2: "#10b981",
    base: "#050b18",
  },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const headlineHtml = (lines) =>
  lines
    .map(
      (l) =>
        `<span class="line">${esc(l).replace(/\[(.+?)\]/g, "<mark>$1</mark>")}</span>`,
    )
    .join("");

const html = (p, shot) => `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@600;800;900&display=block" rel="stylesheet">
<style>
  :root { --a: ${p.accent}; --b: ${p.accent2}; --base: ${p.base}; --zoom: ${p.zoom ?? 1}; --origin: ${p.origin ?? "50% 0%"}; }
  * { box-sizing: border-box; margin: 0; }
  body { width: 1280px; height: 720px; overflow: hidden; background: var(--base); font-family: Inter, sans-serif; color: #fff; position: relative; }
  .bg { position: absolute; inset: 0;
    background:
      radial-gradient(700px 520px at 88% 30%, color-mix(in oklab, var(--a) 55%, transparent), transparent 70%),
      radial-gradient(620px 460px at 70% 105%, color-mix(in oklab, var(--b) 45%, transparent), transparent 70%),
      radial-gradient(520px 420px at -5% -10%, color-mix(in oklab, var(--a) 30%, transparent), transparent 70%); }
  .grid { position: absolute; inset: 0; opacity: .18;
    background-image: linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px);
    background-size: 48px 48px; mask-image: radial-gradient(ellipse 80% 80% at 30% 50%, #000 20%, transparent 75%); }
  .rays { position: absolute; right: -220px; top: -160px; width: 1000px; height: 1000px; opacity: .14;
    background: repeating-conic-gradient(from 0deg, #fff 0deg 4deg, transparent 4deg 16deg);
    mask-image: radial-gradient(circle, #000 0%, transparent 60%); }

  /* screenshot */
  .shot { position: absolute; right: -36px; top: 96px; width: 820px; transform: perspective(1600px) rotateY(-11deg) rotateX(4deg) rotateZ(-2deg);
    border-radius: 18px; overflow: hidden; background: #111; border: 2px solid rgba(255,255,255,.18);
    box-shadow: 0 40px 90px rgba(0,0,0,.65), 0 0 0 8px color-mix(in oklab, var(--a) 35%, transparent), 0 0 120px color-mix(in oklab, var(--a) 60%, transparent); }
  .shot .bar { height: 34px; background: #1b1b1f; display: flex; align-items: center; gap: 8px; padding: 0 14px; }
  .shot .bar i { width: 11px; height: 11px; border-radius: 50%; background: #ff5f57; }
  .shot .bar i:nth-child(2) { background: #febc2e; } .shot .bar i:nth-child(3) { background: #28c840; }
  .shot .view { aspect-ratio: 16 / 9; overflow: hidden; }
  .shot img { display: block; width: 100%; transform: scale(var(--zoom)); transform-origin: var(--origin); }

  /* copy */
  .copy { position: absolute; left: 64px; top: 70px; width: 600px; z-index: 4; }
  .kicker { display: inline-flex; align-items: center; gap: 10px; padding: 10px 18px; border-radius: 999px;
    background: rgba(0,0,0,.45); border: 2px solid color-mix(in oklab, var(--a) 70%, white); font-weight: 800; font-size: 22px; letter-spacing: .02em; text-transform: uppercase; }
  .kicker::before { content: ""; width: 12px; height: 12px; border-radius: 50%; background: var(--a); box-shadow: 0 0 14px var(--a); }
  h1 { margin-top: 28px; font-family: Anton, Impact, sans-serif; font-weight: 400; font-size: 118px; line-height: 1.02; text-transform: uppercase; letter-spacing: .005em;
    -webkit-text-stroke: 12px #000; paint-order: stroke fill; text-shadow: 0 8px 0 rgba(0,0,0,.6), 0 16px 40px rgba(0,0,0,.7); }
  h1 .line { display: table; white-space: nowrap; }
  h1 mark { color: #0a0a0a; background: linear-gradient(135deg, var(--a), var(--b)); padding: 0 .14em; border-radius: 10px; text-shadow: none; -webkit-text-stroke: 0; outline: 6px solid #000;
    box-decoration-break: clone; -webkit-box-decoration-break: clone; display: inline-block; transform: rotate(-2deg); box-shadow: 0 10px 30px color-mix(in oklab, var(--a) 55%, transparent); }

  .chips { position: absolute; left: 64px; bottom: 58px; display: flex; gap: 12px; }
  .chips span { padding: 10px 18px; border-radius: 12px; background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.22);
    font-weight: 800; font-size: 22px; backdrop-filter: blur(6px); }

  /* sticker */
  .sticker { position: absolute; right: 70px; top: 46px; width: 168px; height: 168px; border-radius: 50%;
    background: linear-gradient(135deg, var(--a), var(--b)); color: #0a0a0a; display: flex; flex-direction: column; align-items: center; justify-content: center;
    transform: rotate(12deg); border: 6px solid #fff; box-shadow: 0 18px 40px rgba(0,0,0,.55); text-align: center; z-index: 3; }
  .sticker b { font-family: Anton, sans-serif; font-weight: 400; font-size: 46px; line-height: 1; text-transform: uppercase; }
  .sticker small { font-weight: 900; font-size: 20px; text-transform: uppercase; letter-spacing: .02em; }

  /* arrow pointing at the screenshot */
  .arrow { position: absolute; left: 470px; top: 430px; width: 170px; height: 120px; z-index: 2; filter: drop-shadow(0 6px 10px rgba(0,0,0,.6)); }
</style></head><body>
  <div class="bg"></div><div class="rays"></div><div class="grid"></div>
  <div class="shot"><div class="bar"><i></i><i></i><i></i></div><div class="view"><img src="${shot}"></div></div>
  <div class="sticker"><b>${esc(p.sticker[0])}</b><small>${esc(p.sticker[1])}</small></div>
  <svg class="arrow" viewBox="0 0 170 120" fill="none"><path d="M8 100 C 50 30, 100 20, 150 40" stroke="#fff" stroke-width="12" stroke-linecap="round"/><path d="M120 18 L156 42 L118 62" stroke="#fff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/></svg>
  <div class="copy"><span class="kicker">${esc(p.kicker)}</span><h1>${headlineHtml(p.headline)}</h1></div>
  <div class="chips">${p.chips.map((c) => `<span>${esc(c)}</span>`).join("")}</div>
</body></html>`;

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
for (const p of projects) {
  if (only && only !== p.slug) continue;
  const shot = `data:image/webp;base64,${readFileSync(`${SRC}/${p.slug}.webp`).toString("base64")}`;
  await page.setContent(html(p, shot), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  // shrink the headline until every line fits the copy column
  await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    let size = 118;
    while (
      size > 60 &&
      [...h1.querySelectorAll(".line")].some(
        (l) => l.getBoundingClientRect().width > 560,
      )
    ) {
      size -= 4;
      h1.style.fontSize = `${size}px`;
    }
  });
  const png = await page.screenshot();
  const file = path.join(OUT, `${p.slug}.webp`);
  await sharp(png).webp({ quality: 85 }).toFile(file);
  console.log("✓", path.relative(process.cwd(), file));
}
await browser.close();
