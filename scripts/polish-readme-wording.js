const fs = require('fs');

const readmes = [
  'c:/Users/sujal/Downloads/codexanjan-main/README.md',
  'c:/Users/sujal/Downloads/codexanjan-main/codexanjan-main/README.md'
];

for (const rm of readmes) {
  let content = fs.readFileSync(rm, 'utf8');

  content = content.replace(/SAMURAI ACCOLADES/g, 'SPECIAL FORCES ACCOLADES');
  content = content.replace(/Initialize Ronin Telemetry HUD/g, 'Deploy Tactical Telemetry HUD');
  content = content.replace(/RONIN TELEMETRY MAINFRAME/g, 'WARZONE TELEMETRY MAINFRAME');
  content = content.replace(/RONIN CODE ENGINE/g, 'TACTICAL CODE ENGINE');
  content = content.replace(/Ronin Telemetry Grid/g, 'Tactical Telemetry Grid');
  content = content.replace(/Ronin Command Terminal/g, 'Tactical Command Terminal');
  content = content.replace(/Samurai Trophy Accolades/g, 'Tactical Special Forces Accolades');
  content = content.replace(/Section 07 - Trophy Room \/\/ Samurai Accolades/g, 'Section 07 - Trophy Room // Special Forces Accolades');
  content = content.replace(/Section 05 - Contribution Patrol \/\/ Ronin Cadence/g, 'Section 05 - Combat Patrol // 52-Week Activity');

  fs.writeFileSync(rm, content, 'utf8');
  console.log(`Polished wording in ${rm}`);
}
