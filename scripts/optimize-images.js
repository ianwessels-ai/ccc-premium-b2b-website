const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const files = [
  "public/hero-cricket-cinematic.png",
  "public/hero-cricket.jpg",
  "public/hero-corporate-cricket.jpg",
  "public/hero-cricket-new.png",
];

async function optimize(file) {
  if (!fs.existsSync(file)) {
    console.log(`❌ File not found: ${file}`);
    return;
  }

  const parsed = path.parse(file);
  const output = path.join(parsed.dir, `${parsed.name}.webp`);

  await sharp(file)
    .resize({
      width: 1920,
      withoutEnlargement: true,
    })
    .webp({
      quality: 82,
      effort: 6,
    })
    .toFile(output);

  const original = fs.statSync(file).size / 1024;
  const optimized = fs.statSync(output).size / 1024;

  console.log(
    `✅ ${parsed.base}: ${original.toFixed(0)} KB → ${optimized.toFixed(0)} KB`
  );
}

(async () => {
  for (const file of files) {
    await optimize(file);
  }
})();