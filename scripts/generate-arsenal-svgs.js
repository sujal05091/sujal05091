const fs = require('fs');
const path = require('path');

const assetsDir = path.resolve(__dirname, '../assets');

// Helper to wrap pill groups
function createArsenalPillSvg(items, viewBoxWidth = 850) {
  const gradDef = `
  <defs>
    <linearGradient id="pillGradRed" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF3038" />
      <stop offset="100%" stop-color="#FF474E" />
    </linearGradient>
  </defs>`;

  let currentX = 0;
  let itemsXml = '';

  for (const item of items) {
    const textWidth = Math.max(item.name.length * 8.5 + 24, 50);
    const totalItemWidth = 32 + textWidth;

    itemsXml += `
    <!-- ${item.name} -->
    <g transform="translate(${currentX}, 1)">
      <rect x="0" y="0" width="30" height="30" rx="3" fill="#0C0E14" stroke="#222834" stroke-width="1" />
      <text x="15" y="20" text-anchor="middle" fill="${item.iconColor || '#FF3038'}" font-family="system-ui, -apple-system, sans-serif" font-size="${item.fontSize || '11'}" font-weight="900">${item.short || item.name.substring(0, 2).toUpperCase()}</text>
      <rect x="33" y="0" width="${textWidth}" height="30" rx="3" fill="url(#pillGradRed)" />
      <text x="${33 + textWidth / 2}" y="19" text-anchor="middle" fill="#050608">${item.name.toUpperCase()}</text>
    </g>`;

    currentX += totalItemWidth + 12;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Math.max(currentX + 10, viewBoxWidth)} 32" fill="none">
${gradDef}
  <g font-family="system-ui, -apple-system, 'SF Mono', 'Courier New', monospace" font-size="11" font-weight="900" letter-spacing="0.8">
${itemsXml}
  </g>
</svg>`;
}

// 1. Languages: Python, Java, C, Kotlin, Dart, JavaScript, TypeScript, SQL
const languages = [
  { name: 'Python', short: 'PY', iconColor: '#3776AB', fontSize: '12' },
  { name: 'Java', short: 'JV', iconColor: '#FF5722', fontSize: '12' },
  { name: 'C', short: 'C', iconColor: '#659AD2', fontSize: '15' },
  { name: 'Kotlin', short: 'KT', iconColor: '#7F52FF', fontSize: '12' },
  { name: 'Dart', short: 'DT', iconColor: '#0175C2', fontSize: '12' },
  { name: 'JavaScript', short: 'JS', iconColor: '#FFD600', fontSize: '12' },
  { name: 'TypeScript', short: 'TS', iconColor: '#3178C6', fontSize: '12' },
  { name: 'SQL', short: 'SQL', iconColor: '#4479A1', fontSize: '10' }
];

// 2. AI & ML: TensorFlow, PyTorch, Scikit-Learn, OpenCV, MediaPipe, Keras
const frameworks = [
  { name: 'TensorFlow', short: 'TF', iconColor: '#FF6F00', fontSize: '12' },
  { name: 'PyTorch', short: 'PT', iconColor: '#EE4C2C', fontSize: '12' },
  { name: 'Scikit-Learn', short: 'SK', iconColor: '#F7931E', fontSize: '11' },
  { name: 'OpenCV', short: 'CV', iconColor: '#5C3EE8', fontSize: '12' },
  { name: 'MediaPipe', short: 'MP', iconColor: '#00C853', fontSize: '11' },
  { name: 'Keras', short: 'K', iconColor: '#D00000', fontSize: '14' }
];

// 3. Frontend: React, Next.js, Vite, HTML5, CSS3, Tailwind CSS
const frontend = [
  { name: 'React', short: '⚛', iconColor: '#61DAFB', fontSize: '15' },
  { name: 'Next.js', short: 'N', iconColor: '#FFFFFF', fontSize: '14' },
  { name: 'Vite', short: '⚡', iconColor: '#646CFF', fontSize: '13' },
  { name: 'HTML5', short: 'H5', iconColor: '#E34F26', fontSize: '12' },
  { name: 'CSS3', short: 'C3', iconColor: '#1572B6', fontSize: '12' },
  { name: 'Tailwind CSS', short: 'TW', iconColor: '#06B6D4', fontSize: '11' }
];

// 4. Backend: FastAPI, Flask, Python, Node.js, Express, REST APIs
const backend = [
  { name: 'FastAPI', short: '⚡', iconColor: '#009688', fontSize: '14' },
  { name: 'Flask', short: 'FL', iconColor: '#FFFFFF', fontSize: '12' },
  { name: 'REST APIs', short: 'API', iconColor: '#FFB703', fontSize: '9' },
  { name: 'Node.js', short: 'JS', iconColor: '#339933', fontSize: '12' },
  { name: 'Express', short: 'EX', iconColor: '#FFFFFF', fontSize: '11' },
  { name: 'Spring Boot', short: 'SB', iconColor: '#6DB33F', fontSize: '11' }
];

// 5. Mobile: Flutter, Android Studio, Kotlin, Jetpack Compose, CameraX, Firebase
const mobile = [
  { name: 'Flutter', short: 'FL', iconColor: '#02569B', fontSize: '12' },
  { name: 'Android Studio', short: 'AS', iconColor: '#3DDC84', fontSize: '11' },
  { name: 'Kotlin', short: 'KT', iconColor: '#7F52FF', fontSize: '12' },
  { name: 'Jetpack Compose', short: 'JC', iconColor: '#4285F4', fontSize: '11' },
  { name: 'CameraX', short: 'CX', iconColor: '#00E676', fontSize: '11' },
  { name: 'Firebase', short: 'FB', iconColor: '#FFCA28', fontSize: '12' }
];

// 6. Databases & Cloud: PostgreSQL, MongoDB, Supabase, Firebase, AWS S3, Cloud Run, ChromaDB
const databases = [
  { name: 'PostgreSQL', short: 'PG', iconColor: '#4169E1', fontSize: '11' },
  { name: 'MongoDB', short: 'MG', iconColor: '#47A248', fontSize: '11' },
  { name: 'Supabase', short: 'SB', iconColor: '#3ECF8E', fontSize: '11' },
  { name: 'Firebase', short: 'FB', iconColor: '#FFCA28', fontSize: '11' },
  { name: 'AWS S3', short: 'S3', iconColor: '#FF9900', fontSize: '11' },
  { name: 'Cloud Run', short: 'CR', iconColor: '#4285F4', fontSize: '11' },
  { name: 'ChromaDB', short: 'CH', iconColor: '#A855F7', fontSize: '11' }
];

// 7. Tools: Git, GitHub, Docker, Postman, Linux, Figma, VS Code
const tools = [
  { name: 'Git', short: 'GIT', iconColor: '#F05032', fontSize: '10' },
  { name: 'GitHub', short: 'GH', iconColor: '#FFFFFF', fontSize: '11' },
  { name: 'Docker', short: 'DK', iconColor: '#2496ED', fontSize: '11' },
  { name: 'Postman', short: 'PM', iconColor: '#FF6C37', fontSize: '11' },
  { name: 'Linux', short: 'LX', iconColor: '#FCC624', fontSize: '11' },
  { name: 'Figma', short: 'FG', iconColor: '#F24E1E', fontSize: '11' },
  { name: 'VS Code', short: 'VS', iconColor: '#007ACC', fontSize: '11' }
];

// Write all SVGs
const svgConfigs = [
  { file: 'arsenal-languages-v3.svg', data: languages },
  { file: 'arsenal-languages-v2.svg', data: languages },
  { file: 'arsenal-languages.svg', data: languages },

  { file: 'arsenal-frameworks-v3.svg', data: frameworks },
  { file: 'arsenal-frameworks-v2.svg', data: frameworks },
  { file: 'arsenal-frameworks.svg', data: frameworks },

  { file: 'arsenal-frontend-v3.svg', data: frontend },

  { file: 'arsenal-backend-v3.svg', data: backend },
  { file: 'arsenal-backend-v2.svg', data: backend },
  { file: 'arsenal-backend.svg', data: backend },

  { file: 'arsenal-mobile-v3.svg', data: mobile },

  { file: 'arsenal-databases-v3.svg', data: databases },
  { file: 'arsenal-databases-v2.svg', data: databases },
  { file: 'arsenal-databases.svg', data: databases },

  { file: 'arsenal-tools-v3.svg', data: tools },
  { file: 'arsenal-tools-v2.svg', data: tools },
  { file: 'arsenal-tools.svg', data: tools },
];

for (const cfg of svgConfigs) {
  const filePath = path.join(assetsDir, cfg.file);
  fs.writeFileSync(filePath, createArsenalPillSvg(cfg.data));
  console.log('Generated:', cfg.file);
}

console.log('All Arsenal SVGs generated successfully!');
