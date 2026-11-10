const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const targetDirs = [
  path.join(rootDir, 'assets'),
  path.join(rootDir, 'codexanjan-main', 'assets')
];

console.log('Sanitizing all legacy assets to purge any trace of Anjan Shetty...');

function sanitizeFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const replacements = [
    [/Anjan\s+Shetty/gi, 'Sujal S Kumar'],
    [/Anjan/gi, 'Sujal'],
    [/Shetty/gi, 'Kumar'],
    [/codexanjan/gi, 'sujal05091'],
    [/codex-anjan/gi, 'sujal05091']
  ];

  for (const [pattern, replacement] of replacements) {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Sanitized: ${filePath}`);
  }
}

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      const subFiles = fs.readdirSync(full);
      for (const sf of subFiles) {
        sanitizeFile(path.join(full, sf));
      }
    } else if (f.endsWith('.svg') || f.endsWith('.md') || f.endsWith('.json')) {
      sanitizeFile(full);
    }
  }
}

console.log('Sanitization complete.');
