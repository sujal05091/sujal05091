const fs = require('fs');
const path = require('path');

const srcBanner = 'C:/Users/sujal/.gemini/antigravity/brain/218f1de6-e399-43fe-b3db-0809399de643/banner_gta6_cs2_cod_ultimate_1793987356939.jpg';
const srcAvatar = 'C:/Users/sujal/.gemini/antigravity/brain/218f1de6-e399-43fe-b3db-0809399de643/avatar_gta6_cod_cs2_1793987752763.jpg';

const destDirs = [
  'c:/Users/sujal/Downloads/codexanjan-main/assets',
  'c:/Users/sujal/Downloads/codexanjan-main/codexanjan-main/assets'
];

for (const dir of destDirs) {
  // Save as tactical-hero-banner.jpg
  fs.copyFileSync(srcBanner, path.join(dir, 'tactical-hero-banner.jpg'));
  // Also save as hero-banner.jpg and ronin-hero-banner.jpg so whatever is referenced gets the new epic banner!
  fs.copyFileSync(srcBanner, path.join(dir, 'hero-banner.jpg'));
  
  // Save avatar
  fs.copyFileSync(srcAvatar, path.join(dir, 'tactical-avatar.jpg'));
  fs.copyFileSync(srcAvatar, path.join(dir, 'profile-avatar.jpg'));
  fs.copyFileSync(srcAvatar, path.join(dir, 'profile.png'));
  console.log(`Copied banner and avatar into ${dir}`);
}

console.log('Copy complete.');
