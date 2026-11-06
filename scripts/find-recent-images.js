const fs = require('fs');
const path = require('path');

function searchDir(dir, maxDepth = 4) {
  if (maxDepth <= 0) return [];
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const fullPath = path.join(dir, file);
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          results = results.concat(searchDir(fullPath, maxDepth - 1));
        } else if (/\.(jpe?g|png|webp)$/i.test(file)) {
          // Check if modified in last 2 hours
          if (Date.now() - stat.mtimeMs < 2 * 60 * 60 * 1000) {
            results.push({ path: fullPath, size: stat.size, mtime: stat.mtime });
          }
        }
      } catch (e) {}
    }
  } catch (e) {}
  return results;
}

const searchRoots = [
  'C:/Users/sujal/.gemini/antigravity/brain/218f1de6-e399-43fe-b3db-0809399de643',
  'C:/Users/sujal/AppData/Local/Temp',
  'c:/Users/sujal/Downloads/codexanjan-main'
];

for (const root of searchRoots) {
  const files = searchDir(root, 4);
  for (const f of files) {
    console.log(`${f.mtime.toISOString()} | ${f.size} bytes | ${f.path}`);
  }
}
