const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = path.join(process.cwd(), "public", "images");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".png"));

(async () => {
  let before = 0;
  let after = 0;

  for (const file of files) {
    const input = path.join(dir, file);
    const output = path.join(dir, file.replace(/\.png$/i, ".webp"));
    const beforeSize = fs.statSync(input).size;
    before += beforeSize;

    await sharp(input).webp({ quality: 80 }).toFile(output);

    const afterSize = fs.statSync(output).size;
    after += afterSize;
    console.log(
      `${file} ${(beforeSize / 1e6).toFixed(2)}MB -> ${path.basename(output)} ${(afterSize / 1e6).toFixed(2)}MB`,
    );
  }

  console.log(
    `TOTAL ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(1)}MB (${Math.round((1 - after / before) * 100)}% menor)`,
  );
})();
