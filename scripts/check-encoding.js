const fs = require('fs');

const content = fs.readFileSync('c:/Users/sujal/Downloads/codexanjan-main/codexanjan-main/README.md', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (/[\u00C0-\u024F\uFFFD]/.test(line)) {
    console.log(`Line ${i + 1}: ${line}`);
  }
}
console.log('Encoding scan complete.');
