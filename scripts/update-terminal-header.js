const fs = require('fs');
const path = require('path');

const targetDirs = [
  'c:/Users/sujal/Downloads/codexanjan-main/assets/terminal-contact.svg',
  'c:/Users/sujal/Downloads/codexanjan-main/codexanjan-main/assets/terminal-contact.svg'
];

for (const target of targetDirs) {
  if (fs.existsSync(target)) {
    let c = fs.readFileSync(target, 'utf8');
    c = c.replace('RONIN TERMINAL // SECURE CHANNEL [SUJAL@DOJO ~]', 'TASK FORCE 141 TERMINAL // SECURE CHANNEL [SUJAL@TF141 ~]');
    fs.writeFileSync(target, c, 'utf8');
    console.log(`Updated ${target}`);
  }
}
