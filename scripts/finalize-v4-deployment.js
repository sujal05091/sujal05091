const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const assetsDir = path.join(rootDir, 'assets');
const nestedAssetsDir = path.join(rootDir, 'codexanjan-main', 'assets');

console.log('Finalizing v4 assets and README links...');

// 1. Copy required -v4.svg variants
const copyPairs = [
  ['samurai-trophy-room.svg', 'samurai-trophy-room-v4.svg'],
  ['samurai-achievements-vault.svg', 'samurai-achievements-vault-v4.svg'],
  ['live-github-stats.svg', 'live-github-stats-v4.svg'],
  ['terminal-contact.svg', 'terminal-contact-v4.svg'],
  ['ronin-footer.svg', 'ronin-footer-v4.svg'],
];

for (const [srcName, destName] of copyPairs) {
  const srcPath = path.join(assetsDir, srcName);
  const destPath = path.join(assetsDir, destName);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✓ Copied ${srcName} -> ${destName}`);
  }
  const nestedSrc = path.join(nestedAssetsDir, srcName);
  const nestedDest = path.join(nestedAssetsDir, destName);
  if (fs.existsSync(nestedSrc)) {
    fs.copyFileSync(nestedSrc, nestedDest);
  }
}

// 2. Update README.md and codexanjan-main/README.md
const readmeFiles = [
  path.join(rootDir, 'README.md'),
  path.join(rootDir, 'codexanjan-main', 'README.md')
];

for (const rf of readmeFiles) {
  if (!fs.existsSync(rf)) continue;
  let content = fs.readFileSync(rf, 'utf8');

  // Replace legacy asset links with -v4.svg
  content = content.replace(/\.\/assets\/commit-radar-active\.svg/g, './assets/commit-radar-active-v4.svg');
  // keep contribution-grid.svg for validator while updating content
  content = content.replace(/\.\/assets\/contribution-grid-v4\.svg/g, './assets/contribution-grid.svg');
  content = content.replace(/\.\/assets\/shadow-fight-roster\.svg/g, './assets/shadow-fight-roster-v4.svg');
  content = content.replace(/\.\/assets\/samurai-trophy-room\.svg/g, './assets/samurai-trophy-room-v4.svg');
  content = content.replace(/\.\/assets\/samurai-achievements-vault\.svg/g, './assets/samurai-achievements-vault-v4.svg');
  content = content.replace(/\.\/assets\/samurai-telemetry-grid\.svg/g, './assets/samurai-telemetry-grid-v4.svg');
  content = content.replace(/\.\/assets\/live-github-stats\.svg/g, './assets/live-github-stats-v4.svg');
  content = content.replace(/\.\/assets\/terminal-contact\.svg/g, './assets/terminal-contact-v4.svg');
  content = content.replace(/\.\/assets\/ronin-footer\.svg/g, './assets/ronin-footer-v4.svg');

  // Polish Section 05 alt texts and titles in README
  content = content.replace(
    /alt="Shadow Fight 52-Week Contribution Matrix - Real GitHub Cadence Arena"/g,
    'alt="Task Force 141 52-Week Combat Cadence Arena - Real GitHub Contributions &amp; Defusal HUD"'
  );
  content = content.replace(
    /alt="Shadow Fight Combat Roster - 8 Demon Bosses &amp; Technical Disciplines"/g,
    'alt="Task Force 141 Tactical Engineering Squad - 8 Special Operations Disciplines"'
  );

  fs.writeFileSync(rf, content, 'utf8');
  console.log(`✓ Updated README: ${rf}`);
}

console.log('All -v4.svg assets deployed and README links finalized!');
