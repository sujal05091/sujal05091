const fs = require('fs');
const path = require('path');

const targetDirs = [
  'c:/Users/sujal/Downloads/codexanjan-main/assets',
  'c:/Users/sujal/Downloads/codexanjan-main/codexanjan-main/assets'
];

for (const dir of targetDirs) {
  // 1. header-connect.svg
  const hcPath = path.join(dir, 'header-connect.svg');
  if (fs.existsSync(hcPath)) {
    let c = fs.readFileSync(hcPath, 'utf8');
    c = c.replace('RONIN COMMS // SECURE CHANNELS', 'SECURE COMMS // TASK FORCE CHANNELS');
    fs.writeFileSync(hcPath, c, 'utf8');
    console.log(`Updated header-connect.svg in ${dir}`);
  }

  // 2. header-contributions.svg
  const hcbPath = path.join(dir, 'header-contributions.svg');
  if (fs.existsSync(hcbPath)) {
    let c = fs.readFileSync(hcbPath, 'utf8');
    c = c.replace('CONTRIBUTION PATROL // RONIN CADENCE', 'COMBAT PATROL // 52-WEEK ACTIVITY');
    fs.writeFileSync(hcbPath, c, 'utf8');
    console.log(`Updated header-contributions.svg in ${dir}`);
  }

  // 3. header-project-database.svg
  const hpdPath = path.join(dir, 'header-project-database.svg');
  if (fs.existsSync(hpdPath)) {
    let c = fs.readFileSync(hpdPath, 'utf8');
    c = c.replace('PROJECT DATABASE // RONIN ARCHIVES', 'HEIST ARCHIVES // MISSION DATABASE');
    fs.writeFileSync(hpdPath, c, 'utf8');
    console.log(`Updated header-project-database.svg in ${dir}`);
  }

  // 4. header-telemetry.svg
  const htPath = path.join(dir, 'header-telemetry.svg');
  if (fs.existsSync(htPath)) {
    let c = fs.readFileSync(htPath, 'utf8');
    c = c.replace('RONIN TELEMETRY // MAINFRAME METRICS', 'WARZONE TELEMETRY // MAINFRAME METRICS');
    fs.writeFileSync(htPath, c, 'utf8');
    console.log(`Updated header-telemetry.svg in ${dir}`);
  }

  // 5. header-terminal.svg
  const htermPath = path.join(dir, 'header-terminal.svg');
  if (fs.existsSync(htermPath)) {
    let c = fs.readFileSync(htermPath, 'utf8');
    c = c.replace('RONIN TERMINAL // COMMAND SHELL', 'COMMAND TERMINAL // TACTICAL SHELL');
    fs.writeFileSync(htermPath, c, 'utf8');
    console.log(`Updated header-terminal.svg in ${dir}`);
  }

  // 6. header-trophy-room.svg
  const htrPath = path.join(dir, 'header-trophy-room.svg');
  if (fs.existsSync(htrPath)) {
    let c = fs.readFileSync(htrPath, 'utf8');
    c = c.replace('TROPHY ROOM // SAMURAI ACCOLADES', 'TROPHY ROOM // SPECIAL FORCES ACCOLADES');
    fs.writeFileSync(htrPath, c, 'utf8');
    console.log(`Updated header-trophy-room.svg in ${dir}`);
  }

  // 7. samurai-telemetry-grid.svg
  const stgPath = path.join(dir, 'samurai-telemetry-grid.svg');
  if (fs.existsSync(stgPath)) {
    let c = fs.readFileSync(stgPath, 'utf8');
    c = c.replace('RONIN METRICS', 'WARZONE METRICS');
    fs.writeFileSync(stgPath, c, 'utf8');
    console.log(`Updated samurai-telemetry-grid.svg in ${dir}`);
  }

  // 8. samurai-achievements-vault.svg
  const savPath = path.join(dir, 'samurai-achievements-vault.svg');
  if (fs.existsSync(savPath)) {
    let c = fs.readFileSync(savPath, 'utf8');
    c = c.replace('RONIN TROPHY VAULT', 'TASK FORCE 141 VAULT');
    fs.writeFileSync(savPath, c, 'utf8');
    console.log(`Updated samurai-achievements-vault.svg in ${dir}`);
  }
}

console.log('All headers and telemetry SVGs upgraded to Tactical Gaming aesthetic.');
