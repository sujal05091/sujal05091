const fs = require('fs');
const path = require('path');

const rootAssets = 'c:/Users/sujal/Downloads/codexanjan-main/assets';
const subAssets = 'c:/Users/sujal/Downloads/codexanjan-main/codexanjan-main/assets';

const rootFiles = fs.readdirSync(rootAssets);
for (const file of rootFiles) {
  const src = path.join(rootAssets, file);
  const dest = path.join(subAssets, file);
  if (fs.statSync(src).isFile()) {
    if (!fs.existsSync(dest) || fs.statSync(src).mtimeMs > fs.statSync(dest).mtimeMs) {
      fs.copyFileSync(src, dest);
      console.log(`Synced root -> sub: ${file}`);
    }
  }
}

const subFiles = fs.readdirSync(subAssets);
for (const file of subFiles) {
  const src = path.join(subAssets, file);
  const dest = path.join(rootAssets, file);
  if (fs.statSync(src).isFile()) {
    if (!fs.existsSync(dest) || fs.statSync(src).mtimeMs > fs.statSync(dest).mtimeMs) {
      fs.copyFileSync(src, dest);
      console.log(`Synced sub -> root: ${file}`);
    }
  }
}

console.log('Asset synchronization complete.');
