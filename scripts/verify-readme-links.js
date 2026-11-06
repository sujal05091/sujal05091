const fs = require('fs');
const path = require('path');

const readme = fs.readFileSync('README.md', 'utf8');
const assetMatches = [...readme.matchAll(/\.\/assets\/([a-zA-Z0-9_\-\.]+)/g)].map(m => m[1]);
const uniqueAssets = [...new Set(assetMatches)];

console.log('Unique assets referenced in README.md:', uniqueAssets.length);
let missing = 0;
for (const a of uniqueAssets) {
  const p = path.join('assets', a);
  if (!fs.existsSync(p)) {
    console.error('MISSING ASSET:', a);
    missing++;
  } else {
    console.log('✓ Found:', a);
  }
}

if (missing === 0) {
  console.log('\n🎉 ALL REFERENCED ASSETS EXIST PERFECTLY!');
} else {
  console.error(`\n❌ Found ${missing} missing assets!`);
  process.exit(1);
}

