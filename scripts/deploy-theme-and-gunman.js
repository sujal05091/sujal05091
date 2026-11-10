const fs = require('fs');
const path = require('path');

const srcBanner = 'C:/Users/sujal/.gemini/antigravity/brain/8bea02ba-ef24-4fb1-88ea-e9897612879d/.user_uploaded/media_1794334512382_df195ea3.jpg';
const srcPhoto = 'C:/Users/sujal/.gemini/antigravity/brain/8bea02ba-ef24-4fb1-88ea-e9897612879d/.user_uploaded/media_1794334517805_2ee9c963.jpg';
const srcSujalGunman = 'C:/Users/sujal/.gemini/antigravity/brain/8bea02ba-ef24-4fb1-88ea-e9897612879d/tactical_operator_sujal_1794334840296.jpg';
const srcExtractedGunman = path.resolve(__dirname, '../assets/gunman-extracted.jpg');

const assetDirs = [
  path.resolve(__dirname, '../assets'),
  path.resolve(__dirname, '../codexanjan-main/assets')
];

console.log('Deploying new GTA/CS theme and Sujal gunman assets...');

// Convert photo to base64 for SVG embedding
const photoBuf = fs.readFileSync(srcPhoto);
const photoB64 = photoBuf.toString('base64');
const photoDataUri = 'data:image/jpeg;base64,' + photoB64;

for (const dir of assetDirs) {
  if (!fs.existsSync(dir)) continue;

  // 1. Deploy Banner as main theme
  fs.copyFileSync(srcBanner, path.join(dir, 'tactical-hero-banner.jpg'));
  fs.copyFileSync(srcBanner, path.join(dir, 'hero-banner.jpg'));
  fs.copyFileSync(srcBanner, path.join(dir, 'banner-cs-gta-boxart-original.jpg'));
  console.log(`✓ Deployed hero banner to ${dir}`);

  // 2. Deploy Sujal photo
  fs.copyFileSync(srcPhoto, path.join(dir, 'sujal-photo.jpg'));
  fs.copyFileSync(srcPhoto, path.join(dir, 'sujal-avatar-original.jpg'));
  fs.copyFileSync(srcPhoto, path.join(dir, 'profile.png'));
  fs.copyFileSync(srcPhoto, path.join(dir, 'tactical-avatar.jpg'));
  fs.copyFileSync(srcPhoto, path.join(dir, 'profile-avatar.jpg'));
  console.log(`✓ Deployed Sujal photo assets to ${dir}`);

  // 3. Deploy Tactical Gunman character art
  fs.copyFileSync(srcSujalGunman, path.join(dir, 'tactical-gunman.jpg'));
  fs.copyFileSync(srcSujalGunman, path.join(dir, 'sujal-tactical-operator.jpg'));
  if (fs.existsSync(srcExtractedGunman)) {
    fs.copyFileSync(srcExtractedGunman, path.join(dir, 'tactical-gunman-original.jpg'));
  }
  console.log(`✓ Deployed tactical gunman assets to ${dir}`);

  // 4. Update profile_base64.txt
  fs.writeFileSync(path.join(dir, 'profile_base64.txt'), photoB64, 'utf8');

  // 5. Update operative-dossier-v2.svg and operative-dossier.svg
  for (const svgFile of ['operative-dossier-v2.svg', 'operative-dossier.svg']) {
    const svgPath = path.join(dir, svgFile);
    if (fs.existsSync(svgPath)) {
      let content = fs.readFileSync(svgPath, 'utf8');
      content = content.replace(/(xlink:href|href)="data:image\/[^"]+"/g, `$1="${photoDataUri}"`);
      fs.writeFileSync(svgPath, content, 'utf8');
      console.log(`✓ Updated biometric photo in ${svgPath}`);
    }
  }
}

console.log('\nAll assets deployed successfully.');

