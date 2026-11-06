const fs = require('fs');
const path = require('path');

const avatarPath = 'C:/Users/sujal/.gemini/antigravity/brain/218f1de6-e399-43fe-b3db-0809399de643/avatar_gta6_cod_cs2_1793987752763.jpg';
const avatarBase64 = 'data:image/jpeg;base64,' + fs.readFileSync(avatarPath).toString('base64');

// Update build-operative-dossier.js or update operative-dossier-v2.svg directly
const targetPaths = [
  'c:/Users/sujal/Downloads/codexanjan-main/assets/operative-dossier-v2.svg',
  'c:/Users/sujal/Downloads/codexanjan-main/assets/operative-dossier.svg',
  'c:/Users/sujal/Downloads/codexanjan-main/codexanjan-main/assets/operative-dossier-v2.svg',
  'c:/Users/sujal/Downloads/codexanjan-main/codexanjan-main/assets/operative-dossier.svg'
];

for (const target of targetPaths) {
  if (fs.existsSync(target)) {
    let content = fs.readFileSync(target, 'utf8');
    // Replace xlink:href="data:image/..." or href="data:image/..."
    content = content.replace(/(xlink:href|href)="data:image\/[^"]+"/g, `$1="${avatarBase64}"`);
    fs.writeFileSync(target, content, 'utf8');
    console.log(`Updated avatar in ${target}`);
  }
}
