/**
 * Builds public/images/ask-hannah-mcp-cover.jpg for CaseStudyCard.
 * Portrait is composed on the LEFT at contain-fit so the full face stays visible
 * under object-fit: cover; right panel carries title + MCP motif.
 */
import sharp from "sharp";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const avatarPath = join(root, "public/images/hannah-avatar.jpg");
const outPath = join(root, "public/images/ask-hannah-mcp-cover.jpg");

const W = 1920;
const H = 640;
const LEFT_W = 760;
const RIGHT_W = W - LEFT_W;
const PAD = 36;

const obsidian = { r: 8, g: 12, b: 20, alpha: 1 };

const photoMaxW = LEFT_W - PAD * 2;
const photoMaxH = H - PAD * 2;

const photoBuf = await sharp(avatarPath)
  .resize({
    width: photoMaxW,
    height: photoMaxH,
    fit: "contain",
    position: "centre",
    background: obsidian,
  })
  .toBuffer();

const leftPanel = await sharp({
  create: {
    width: LEFT_W,
    height: H,
    channels: 3,
    background: obsidian,
  },
})
  .composite([{ input: photoBuf, gravity: "centre" }])
  .png()
  .toBuffer();

const svgRight = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${RIGHT_W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1018"/>
      <stop offset="50%" stop-color="#0d1420"/>
      <stop offset="100%" stop-color="#141d2e"/>
    </linearGradient>
    <linearGradient id="goldFade" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C8A96E" stop-opacity="0.35"/>
      <stop offset="50%" stop-color="#C8A96E" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#C8A96E" stop-opacity="0"/>
    </linearGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="#C8A96E" fill-opacity="0.06"/>
    </pattern>
    <linearGradient id="fadeL" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#080C14" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#080C14" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#dots)"/>
  <rect x="0" y="0" width="72" height="100%" fill="url(#fadeL)"/>
  <rect x="0" y="${H * 0.4}" width="${RIGHT_W}" height="2" fill="url(#goldFade)"/>
  <g opacity="0.5" stroke="#C8A96E" stroke-width="2" fill="none">
    <line x1="${RIGHT_W * 0.35}" y1="160" x2="${RIGHT_W * 0.48}" y2="240"/>
    <line x1="${RIGHT_W * 0.48}" y1="240" x2="${RIGHT_W * 0.62}" y2="190"/>
    <line x1="${RIGHT_W * 0.48}" y1="240" x2="${RIGHT_W * 0.44}" y2="380"/>
    <line x1="${RIGHT_W * 0.62}" y1="190" x2="${RIGHT_W * 0.78}" y2="290"/>
    <line x1="${RIGHT_W * 0.44}" y1="380" x2="${RIGHT_W * 0.58}" y2="440"/>
  </g>
  <g fill="#C8A96E">
    <circle cx="${RIGHT_W * 0.35}" cy="160" r="9" opacity="0.9"/>
    <circle cx="${RIGHT_W * 0.48}" cy="240" r="11" opacity="1"/>
    <circle cx="${RIGHT_W * 0.62}" cy="190" r="8" opacity="0.85"/>
    <circle cx="${RIGHT_W * 0.44}" cy="380" r="8" opacity="0.8"/>
    <circle cx="${RIGHT_W * 0.78}" cy="290" r="7" opacity="0.75"/>
    <circle cx="${RIGHT_W * 0.58}" cy="440" r="7" opacity="0.7"/>
  </g>
  <text x="48" y="268" font-family="Georgia, 'Times New Roman', serif" font-size="56" font-weight="600" fill="#F4EFE6" letter-spacing="-0.02em">Ask Hannah MCP</text>
  <text x="50" y="322" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="18" fill="#C8A96E" letter-spacing="0.22em" opacity="0.95">LIVE SERVER · CLAUDE · TEN TOOLS</text>
  <text x="50" y="364" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="15" fill="#F4EFE6" fill-opacity="0.4" letter-spacing="0.05em">Queryable professional data for agents</text>
</svg>`;

const rightBuf = await sharp(Buffer.from(svgRight)).png().toBuffer();

await sharp({
  create: { width: W, height: H, channels: 3, background: obsidian },
})
  .composite([
    { input: leftPanel, left: 0, top: 0 },
    { input: rightBuf, left: LEFT_W, top: 0 },
  ])
  .jpeg({ quality: 92, chromaSubsampling: "4:4:4" })
  .toFile(outPath);

console.log(`Wrote ${outPath} (${W}×${H}) from ${avatarPath}`);
