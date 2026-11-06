const fs = require('fs');

const readmes = [
  'c:/Users/sujal/Downloads/codexanjan-main/README.md',
  'c:/Users/sujal/Downloads/codexanjan-main/codexanjan-main/README.md'
];

for (const rm of readmes) {
  let content = fs.readFileSync(rm, 'utf8');

  // Replace hero banner image src with tactical-hero-banner.jpg
  content = content.replace(
    /<img src="\.\/assets\/ronin-hero-banner\.jpg" width="100%" alt="[^"]*" \/>/,
    '<img src="./assets/tactical-hero-banner.jpg" width="100%" alt="Sujal S Kumar - GTA 6 x Counter-Strike 2 x Call of Duty Tactical Tech Developer Command Center" />'
  );

  // Update typing terminal lines
  content = content.replace(
    /lines=AI\+%26\+FULL-STACK\+DEVELOPER;BUILDING\+INTELLIGENT\+APPLICATIONS;TURNING\+IDEAS\+INTO\+PRODUCTS;INNOVATE\.\+ENGINEER\.\+DEPLOY\.;WELCOME\+TO\+THE\+DIGITAL\+RONIN\+DOJO/,
    'lines=SUJAL+S+KUMAR+%2F%2F+TASK+FORCE+141;AI+%26+FULL-STACK+DEVELOPER;GTA+6+VICE+CITY+HEIST+ENGINEER;CS2+SITE-A+DEFUSAL+SPECIALIST;BUILD+WITH+DISCIPLINE.+DEPLOY+WITH+PURPOSE.'
  );

  fs.writeFileSync(rm, content, 'utf8');
  console.log(`Updated ${rm}`);
}
