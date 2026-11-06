const fs = require('fs');

function cleanReadme(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace mojibake sequences with correct emojis/characters
  const replacements = [
    { target: /âš¡/g, replacement: '⚡' },
    { target: /ðŸ©º/g, replacement: '🩺' },
    { target: /ðŸ ¦/g, replacement: '🏦' },
    { target: /ðŸŽ“/g, replacement: '🎓' },
    { target: /ðŸš—/g, replacement: '🚗' },
    { target: /ðŸŽ­/g, replacement: '🎭' },
    { target: /ðŸ›¡ï¸ /g, replacement: '🛡️' },
    { target: /ðŸ ²/g, replacement: '🍲' },
    { target: /ðŸš¨/g, replacement: '🚨' },
    { target: /ðŸŒ¾/g, replacement: '🌾' },
    { target: /ðŸš€/g, replacement: '🚀' },
    { target: /ðŸ †/g, replacement: '🏆' },
    { target: /ðŸ¥ˆ/g, replacement: '🥈' },
    { target: /ðŸ¤–/g, replacement: '🤖' },
    { target: /ðŸ“±/g, replacement: '📱' },
    { target: /ðŸ“ˆ/g, replacement: '📈' },
    { target: /ðŸŒ /g, replacement: '🌐' }
  ];

  for (const r of replacements) {
    content = content.replace(r.target, r.replacement);
  }

  fs.writeFileSync(filePath, content, { encoding: 'utf8' });
  console.log(`Cleaned: ${filePath}`);
}

cleanReadme('c:/Users/sujal/Downloads/codexanjan-main/codexanjan-main/README.md');
cleanReadme('c:/Users/sujal/Downloads/codexanjan-main/README.md');
