const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "Allwalks");
const OUT = path.join(__dirname, "..", "public", "images", "allwalks");

const jobs = [];
const add = (srcRel, outRel, format) => jobs.push({ srcRel, outRel, format });

// Concept (7) -> jpg
const concept = ["DockWithRoles", "HospitalWithRoles", "KoraliaWithRoles", "LakeWithRoles", "MagicAcademyWithRoles", "MarketWithRoles", "SandBathWithRoles"];
const conceptSlug = ["dock", "hospital", "koralia", "lake", "magic-academy", "market", "sand-bath"];
concept.forEach((n, i) => add(`Concept/${n}.png`, `concept/${conceptSlug[i]}.jpg`, "jpg"));

// IP (2) -> png
add("IP/IP.png", "ip/ip.png", "png");
add("IP/emoji.png", "ip/emoji.png", "png");

// Story Comics (32) -> jpg
for (let i = 1; i <= 32; i++) add(`Story Comics/${i}.png`, `story-comics/${i}.jpg`, "jpg");

// Story illustrations (30) -> jpg
for (let i = 1; i <= 30; i++) add(`Story illustrations/${i}.png`, `story-illustrations/${i}.jpg`, "jpg");

// UI (5) -> png
add("UI/GameInteractionUIDesign1.png", "ui/game-ui-1.png", "png");
add("UI/GameInteractionUIDesign2.png", "ui/game-ui-2.png", "png");
add("UI/WebsiteUIDesign.png", "ui/website-ui-1.png", "png");
add("UI/WebsiteUIDesign2.png", "ui/website-ui-2.png", "png");
add("UI/WebsiteUIDesign3.png", "ui/website-ui-3.png", "png");

async function run() {
  let totalIn = 0, totalOut = 0;
  for (const { srcRel, outRel, format } of jobs) {
    const src = path.join(SRC, srcRel);
    const out = path.join(OUT, outRel);
    if (!fs.existsSync(src)) {
      console.error(`MISSING: ${srcRel}`);
      continue;
    }
    fs.mkdirSync(path.dirname(out), { recursive: true });
    let p = sharp(src).resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true });
    if (format === "jpg") p = p.jpeg({ quality: 80, mozjpeg: true });
    else p = p.png({ compressionLevel: 9 });
    await p.toFile(out);
    totalIn += fs.statSync(src).size;
    totalOut += fs.statSync(out).size;
  }
  console.log(`Done: ${jobs.length} files`);
  console.log(`Total: ${(totalIn / 1024 / 1024).toFixed(1)}MB -> ${(totalOut / 1024 / 1024).toFixed(1)}MB`);
}

run().catch((e) => { console.error(e); process.exit(1); });
