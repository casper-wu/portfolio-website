const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "..", "public", "images");

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return null;

  const stat = fs.statSync(filePath);
  const sizeMB = stat.size / 1024 / 1024;
  if (sizeMB < 0.3) return null; // skip small files

  const tempPath = filePath + ".tmp";

  try {
    let pipeline = sharp(filePath);
    const metadata = await pipeline.metadata();

    // Resize if too wide
    if (metadata.width > 2000) {
      pipeline = pipeline.resize(2000);
    }

    if (ext === ".png") {
      await pipeline
        .png({ compressionLevel: 9, palette: true })
        .toFile(tempPath);
    } else {
      await pipeline
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(tempPath);
    }

    const oldSize = fs.statSync(filePath).size;
    const newSize = fs.statSync(tempPath).size;

    if (newSize < oldSize) {
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      return {
        file: path.basename(filePath),
        old: (oldSize / 1024 / 1024).toFixed(1),
        new: (newSize / 1024 / 1024).toFixed(1),
      };
    } else {
      fs.unlinkSync(tempPath);
      return {
        file: path.basename(filePath),
        old: (oldSize / 1024 / 1024).toFixed(1),
        new: (oldSize / 1024 / 1024).toFixed(1),
        skipped: true,
      };
    }
  } catch (err) {
    console.error(`  Error: ${path.basename(filePath)} - ${err.message}`);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    return null;
  }
}

async function main() {
  const files = fs.readdirSync(IMAGES_DIR)
    .map((f) => path.join(IMAGES_DIR, f))
    .filter((f) => fs.statSync(f).isFile());

  console.log(`Compressing ${files.length} files...\n`);
  const results = [];

  for (const file of files) {
    const r = await compressImage(file);
    if (r) results.push(r);
  }

  console.log("\n=== Results ===");
  let totalOld = 0, totalNew = 0;
  for (const r of results) {
    totalOld += parseFloat(r.old);
    totalNew += parseFloat(r.new);
    const status = r.skipped ? " (skipped - already optimized)" : "";
    console.log(`${r.file}: ${r.old}MB → ${r.new}MB${status}`);
  }
  console.log(`\nTotal: ${totalOld.toFixed(1)}MB → ${totalNew.toFixed(1)}MB (saved ${(totalOld - totalNew).toFixed(1)}MB)`);
}

main().catch(console.error);
