const fs = require('fs');
const path = require('path');

const rankPath = path.resolve(__dirname, '../assets/developer-rank.svg');
let content = fs.readFileSync(rankPath, 'utf8');

// Replace Pod 01
content = content.replace(
  'FRONTEND // KENJUTSU 剣術',
  'AI / ML // KAKUSHIN 革新'
);
content = content.replace(
  'REACT • NEXT.JS • TS • 96%',
  'TENSORFLOW • PYTORCH • CV • 96%'
);

// Replace Pod 02
content = content.replace(
  'AI / ML // KAKUSHIN 革新',
  'FULL STACK // KENJUTSU 剣術'
);
content = content.replace(
  'AGENTIC AI • LLMS • 94%',
  'REACT • NEXT.JS • TS • 95%'
);

// Replace Pod 03
content = content.replace(
  'SYSTEM DESIGN // KOUZOU 構造',
  'MOBILE DEV // SHINOBI 忍'
);
content = content.replace(
  'SCALABILITY • ARCH • 92%',
  'FLUTTER • KOTLIN • JETPACK • 94%'
);

// Replace Pod 04
content = content.replace(
  'NODE • EXPRESS • FASTAPI • 95%',
  'FASTAPI • FLASK • PYTHON • 95%'
);

// Replace Pod 05
content = content.replace(
  'POSTGRES • MONGO • REDIS • 90%',
  'POSTGRES • MONGO • CHROMADB • 92%'
);

// Replace Pod 06
content = content.replace(
  'DOCKER • CI/CD • K8S • 88%',
  'DOCKER • AWS • CLOUD RUN • 90%'
);

fs.writeFileSync(rankPath, content);
console.log('Successfully updated developer-rank.svg');
