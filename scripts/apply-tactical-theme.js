const fs = require('fs');
const path = require('path');

const dirs = [
  'c:/Users/sujal/Downloads/codexanjan-main',
  'c:/Users/sujal/Downloads/codexanjan-main/codexanjan-main'
];

for (const dir of dirs) {
  // 1. Update header-profile.svg
  const hpPath = path.join(dir, 'assets', 'header-profile.svg');
  if (fs.existsSync(hpPath)) {
    let hpContent = fs.readFileSync(hpPath, 'utf8');
    hpContent = hpContent.replace('WARRIOR PROFILE // DOSSIER', 'OPERATIVE DOSSIER // INTEL');
    hpContent = hpContent.replace('THE DIGITAL RONIN', 'TASK FORCE 141 // OPERATIVE');
    fs.writeFileSync(hpPath, hpContent, 'utf8');
    console.log(`Updated header-profile.svg in ${dir}`);
  }

  // 2. Update ronin-footer.svg
  const rfPath = path.join(dir, 'assets', 'ronin-footer.svg');
  if (fs.existsSync(rfPath)) {
    let rfContent = fs.readFileSync(rfPath, 'utf8');
    rfContent = rfContent.replace('RONIN DOJO // ONLINE', 'TASK FORCE 141 // ONLINE');
    rfContent = rfContent.replace('RONIN PROTOCOL', 'TF-141 PROTOCOL');
    fs.writeFileSync(rfPath, rfContent, 'utf8');
    console.log(`Updated ronin-footer.svg in ${dir}`);
  }

  // 3. Update README.md
  const rmPath = path.join(dir, 'README.md');
  if (fs.existsSync(rmPath)) {
    let rm = fs.readFileSync(rmPath, 'utf8');

    // Replace picture tag with clean, robust img tag
    const pictureRegex = /<picture>[\s\S]*?<\/picture>/;
    const heroReplacement = '<img src="./assets/tactical-hero-banner.jpg" width="100%" alt="Sujal S Kumar - GTA 6 x Counter-Strike 2 x Call of Duty Tactical Tech Developer Command Center" />';
    rm = rm.replace(pictureRegex, heroReplacement);

    // Replace operative-dossier-v2.svg with tactical-dossier.jpg
    rm = rm.replace(
      /<img src="\.\/assets\/operative-dossier-v2\.svg" width="100%" alt="[^"]*" \/>/,
      '<img src="./assets/tactical-dossier.jpg" width="100%" alt="Sujal S Kumar Operative Dossier - Task Force 141 Classified Intel" />'
    );

    // Replace developer-rank.svg with tactical-loadout-matrix.jpg
    rm = rm.replace(
      /<img src="\.\/assets\/developer-rank\.svg" width="100%" alt="[^"]*" \/>/,
      '<img src="./assets/tactical-loadout-matrix.jpg" width="100%" alt="Tactical Loadout & Capability Topology Radar - COD Warzone & CS2 Architecture Matrix" />'
    );

    // Replace all katana-divider.svg with tactical-divider.svg
    rm = rm.replace(/assets\/katana-divider\.svg/g, 'assets/tactical-divider.svg');
    rm = rm.replace(/alt="Katana Divider"/g, 'alt="Tactical HUD Divider"');

    // Clean up wording
    rm = rm.replace(/01 \/\/ WARRIOR PROFILE/g, '01 // OPERATIVE DOSSIER // TASK FORCE 141');
    rm = rm.replace(/03 \/\/ PROJECT DATABASE \/\/ RONIN ARCHIVES/g, '03 // HEIST ARCHIVES // MISSION DATABASE');
    rm = rm.replace(/05 \/\/ CONTRIBUTION PATROL \/\/ RONIN CADENCE/g, '05 // COMBAT PATROL // 52-WEEK ACTIVITY');
    rm = rm.replace(/08 \/\/ RONIN TELEMETRY \/\/ MAINFRAME METRICS/g, '08 // WARZONE TELEMETRY // MAINFRAME METRICS');
    rm = rm.replace(/09 \/\/ RONIN COMMS \/\/ SECURE CHANNELS/g, '09 // SECURE COMMS // TASK FORCE CHANNELS');
    rm = rm.replace(/10 \/\/ RONIN TERMINAL \/\/ COMMAND SHELL/g, '10 // COMMAND TERMINAL // TACTICAL SHELL');
    rm = rm.replace(/MONOLITHIC RONIN FOOTER/g, 'MONOLITHIC TACTICAL FOOTER');
    rm = rm.replace(/alt="Tech Samurai Dynamic Terminal HUD"/g, 'alt="Tactical Terminal Dynamic HUD"');
    rm = rm.replace(/alt="Section 01 - Warrior Profile Dossier"/g, 'alt="Section 01 - Operative Dossier Intel"');
    rm = rm.replace(/alt="Section 03 - Project Database \/\/ Ronin Archives"/g, 'alt="Section 03 - Heist Archives // Mission Database"');
    rm = rm.replace(/RONIN PROTOCOL 0x534B/g, 'TF-141 PROTOCOL 0x534B');

    fs.writeFileSync(rmPath, rm, 'utf8');
    console.log(`Updated README.md in ${dir}`);
  }
}
