const fs = require('fs');
const path = require('path');

const srcBanner = 'C:/Users/sujal/.gemini/antigravity/brain/218f1de6-e399-43fe-b3db-0809399de643/banner_gta6_cs2_cod_ultimate_1793987356939.jpg';
const srcDossier = 'C:/Users/sujal/.gemini/antigravity/brain/218f1de6-e399-43fe-b3db-0809399de643/dossier_cod_gta6_cs2_1793988000977.jpg';
const srcRadar = 'C:/Users/sujal/.gemini/antigravity/brain/218f1de6-e399-43fe-b3db-0809399de643/radar_tactical_loadout_cod_cs2_1793988046568.jpg';

const destDirs = [
  'c:/Users/sujal/Downloads/codexanjan-main/assets',
  'c:/Users/sujal/Downloads/codexanjan-main/codexanjan-main/assets'
];

for (const dir of destDirs) {
  fs.copyFileSync(srcBanner, path.join(dir, 'tactical-hero-banner.jpg'));
  fs.copyFileSync(srcDossier, path.join(dir, 'tactical-dossier.jpg'));
  fs.copyFileSync(srcRadar, path.join(dir, 'tactical-loadout-matrix.jpg'));
  console.log(`Copied images to ${dir}`);
}

// Create tactical-divider.svg
const tacticalDividerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 28" fill="none">
  <defs>
    <linearGradient id="divCyan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00F5D4" stop-opacity="0" />
      <stop offset="50%" stop-color="#00F5D4" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#00F5D4" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="divMagenta" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF007F" stop-opacity="0" />
      <stop offset="50%" stop-color="#FF007F" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#FF007F" stop-opacity="0" />
    </linearGradient>
  </defs>

  <!-- Dual Tactical HUD Laser Lines -->
  <line x1="40" y1="12" x2="410" y2="12" stroke="url(#divCyan)" stroke-width="1.5" />
  <line x1="490" y1="12" x2="860" y2="12" stroke="url(#divMagenta)" stroke-width="1.5" />

  <!-- Target Reticle & Diamond Optics in Center -->
  <g transform="translate(450, 12)">
    <circle cx="0" cy="0" r="10" stroke="#00F5D4" stroke-width="1" fill="#080A0F" />
    <circle cx="0" cy="0" r="5" stroke="#FF007F" stroke-width="1" fill="#0C0E14" />
    <circle cx="0" cy="0" r="1.5" fill="#00F5D4" />
    
    <!-- Crosshair Ticks -->
    <line x1="-15" y1="0" x2="-11" y2="0" stroke="#00F5D4" stroke-width="1.5" />
    <line x1="11" y1="0" x2="15" y2="0" stroke="#FF007F" stroke-width="1.5" />
    <line x1="0" y1="-15" x2="0" y2="-11" stroke="#00F5D4" stroke-width="1.5" />
    <line x1="0" y1="11" x2="0" y2="15" stroke="#FF007F" stroke-width="1.5" />
  </g>

  <!-- Left/Right Coordinate Labels -->
  <text x="50" y="22" font-family="'Courier New', monospace" font-size="8" fill="#4E5564" letter-spacing="1.5">LAT 13.3409° N // LON 74.7421° E</text>
  <text x="850" y="22" text-anchor="end" font-family="'Courier New', monospace" font-size="8" fill="#4E5564" letter-spacing="1.5">TASK FORCE 141 // CLASSIFIED</text>
</svg>`;

for (const dir of destDirs) {
  fs.writeFileSync(path.join(dir, 'tactical-divider.svg'), tacticalDividerSvg, 'utf8');
  console.log(`Created tactical-divider.svg in ${dir}`);
}
