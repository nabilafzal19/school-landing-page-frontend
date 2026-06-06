import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "..", "app");

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDF8F3"/>
      <stop offset="50%" stop-color="#F3EDE4"/>
      <stop offset="100%" stop-color="#EEF2F6"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="560" y="130" width="80" height="80" rx="16" fill="#F4A825"/>
  <path d="M600 155L630 175V205H570V175L600 155Z" fill="white"/>
  <rect x="592" y="192" width="16" height="13" fill="#F4A825"/>
  <text x="600" y="280" font-family="Georgia, 'Times New Roman', serif" font-size="52" font-weight="700" fill="#0A1628" text-anchor="middle">Greenwood International School</text>
  <text x="600" y="340" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#C8871A" text-anchor="middle">Nurturing Minds, Building Futures</text>
  <text x="600" y="400" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#64748b" text-anchor="middle">CBSE Affiliated · Nursery to Class XII · New Delhi</text>
</svg>`;

const iconSvg = fs.readFileSync(path.join(appDir, "icon.svg"));

await sharp(Buffer.from(ogSvg)).png().toFile(path.join(appDir, "opengraph-image.png"));
await sharp(iconSvg).resize(180, 180).png().toFile(path.join(appDir, "apple-icon.png"));

console.log("Generated opengraph-image.png and apple-icon.png");
