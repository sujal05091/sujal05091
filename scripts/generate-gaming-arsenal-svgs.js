const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.resolve(__dirname, '../assets'),
  path.resolve(__dirname, '../codexanjan-main/assets')
];

console.log('Generating AAA Gaming Loadout Tech Arsenal SVGs...');

function createGamingArsenalSvg(category) {
  const { themeColor, items, viewBoxWidth = 860 } = category;
  
  let currentX = 0;
  let itemsXml = '';

  for (const item of items) {
    const textWidth = Math.max(item.name.length * 8.5 + 26, 54);
    const totalItemWidth = 34 + textWidth;
    const centerX = 34 + textWidth / 2;

    itemsXml += `
    <!-- ${item.name} -->
    <g transform="translate(${currentX}, 1)">
      <!-- Left Tactical Icon Slot -->
      <rect x="0" y="0" width="32" height="30" rx="3" fill="#090C14" stroke="#1D2434" stroke-width="1.2" />
      <text x="16" y="20" text-anchor="middle" fill="${item.iconColor || '#FFF'}" font-family="system-ui, -apple-system, sans-serif" font-size="${item.fontSize || '11'}" font-weight="900">${item.short}</text>
      
      <!-- Right Tech Badge Card -->
      <rect x="34" y="0" width="${textWidth}" height="30" rx="3" fill="#0C101A" stroke="${themeColor}" stroke-width="1.2" stroke-opacity="0.75" />
      <!-- Tactical Corner Rarity Notch -->
      <polygon points="34,0 ${34 + 8},0 34,8" fill="${themeColor}" />
      <!-- Subtle internal separator line -->
      <line x1="${34 + 1}" y1="1" x2="${34 + 1}" y2="29" stroke="${themeColor}" stroke-width="2" stroke-opacity="0.8" />
      <!-- Item Name Text -->
      <text x="${centerX}" y="19" text-anchor="middle" fill="#F8FAFC" font-family="'SF Mono', Consolas, 'Courier New', monospace" font-size="10.5" font-weight="800" letter-spacing="1">${item.name.toUpperCase()}</text>
    </g>`;

    currentX += totalItemWidth + 10;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Math.max(currentX + 10, viewBoxWidth)} 32" width="100%" height="32" fill="none">
  <g font-family="system-ui, -apple-system, 'SF Mono', 'Courier New', monospace" font-size="11" font-weight="900" letter-spacing="0.8">
${itemsXml}
  </g>
</svg>`;
}

// 1. Languages (Tactical Amber)
const languages = {
  themeColor: '#FF6B35',
  items: [
    { name: 'Python', short: 'PY', iconColor: '#3776AB', fontSize: '12' },
    { name: 'Java', short: 'JV', iconColor: '#FF5722', fontSize: '12' },
    { name: 'C', short: 'C', iconColor: '#659AD2', fontSize: '14' },
    { name: 'Kotlin', short: 'KT', iconColor: '#7F52FF', fontSize: '12' },
    { name: 'Dart', short: 'DT', iconColor: '#0175C2', fontSize: '12' },
    { name: 'JavaScript', short: 'JS', iconColor: '#FFD600', fontSize: '12' },
    { name: 'TypeScript', short: 'TS', iconColor: '#3178C6', fontSize: '12' },
    { name: 'SQL', short: 'SQL', iconColor: '#4479A1', fontSize: '10' }
  ]
};

// 2. AI & ML (Legendary / Covert Gold)
const frameworks = {
  themeColor: '#FFB800',
  items: [
    { name: 'TensorFlow', short: 'TF', iconColor: '#FF6F00', fontSize: '12' },
    { name: 'PyTorch', short: 'PT', iconColor: '#EE4C2C', fontSize: '12' },
    { name: 'Scikit-Learn', short: 'SK', iconColor: '#F7931E', fontSize: '11' },
    { name: 'OpenCV', short: 'CV', iconColor: '#5C3EE8', fontSize: '12' },
    { name: 'MediaPipe', short: 'MP', iconColor: '#00C853', fontSize: '11' },
    { name: 'Keras', short: 'K', iconColor: '#D00000', fontSize: '14' }
  ]
};

// 3. Frontend (CS2 Electric Cyan)
const frontend = {
  themeColor: '#00F5D4',
  items: [
    { name: 'React', short: '⚛', iconColor: '#61DAFB', fontSize: '15' },
    { name: 'Next.js', short: 'N', iconColor: '#FFFFFF', fontSize: '14' },
    { name: 'Vite', short: '⚡', iconColor: '#646CFF', fontSize: '13' },
    { name: 'HTML5', short: 'H5', iconColor: '#E34F26', fontSize: '12' },
    { name: 'CSS3', short: 'C3', iconColor: '#1572B6', fontSize: '12' },
    { name: 'Tailwind CSS', short: 'TW', iconColor: '#06B6D4', fontSize: '11' }
  ]
};

// 4. Backend (Special Ops Ultraviolet / Purple)
const backend = {
  themeColor: '#A855F7',
  items: [
    { name: 'FastAPI', short: '⚡', iconColor: '#009688', fontSize: '14' },
    { name: 'Flask', short: 'FL', iconColor: '#FFFFFF', fontSize: '12' },
    { name: 'REST APIs', short: 'API', iconColor: '#FFB703', fontSize: '9' },
    { name: 'Node.js', short: 'JS', iconColor: '#339933', fontSize: '12' },
    { name: 'Express', short: 'EX', iconColor: '#FFFFFF', fontSize: '11' },
    { name: 'Spring Boot', short: 'SB', iconColor: '#6DB33F', fontSize: '11' }
  ]
};

// 5. Mobile (Emerald Ops Green)
const mobile = {
  themeColor: '#10B981',
  items: [
    { name: 'Flutter', short: 'FL', iconColor: '#02569B', fontSize: '12' },
    { name: 'Android Studio', short: 'AS', iconColor: '#3DDC84', fontSize: '11' },
    { name: 'Kotlin', short: 'KT', iconColor: '#7F52FF', fontSize: '12' },
    { name: 'Jetpack Compose', short: 'JC', iconColor: '#4285F4', fontSize: '11' },
    { name: 'CameraX', short: 'CX', iconColor: '#00E676', fontSize: '11' },
    { name: 'Firebase', short: 'FB', iconColor: '#FFCA28', fontSize: '12' }
  ]
};

// 6. Databases & Cloud (Deep Sapphire Blue)
const databases = {
  themeColor: '#3B82F6',
  items: [
    { name: 'PostgreSQL', short: 'PG', iconColor: '#4169E1', fontSize: '11' },
    { name: 'MongoDB', short: 'MG', iconColor: '#47A248', fontSize: '11' },
    { name: 'Supabase', short: 'SB', iconColor: '#3ECF8E', fontSize: '11' },
    { name: 'Firebase', short: 'FB', iconColor: '#FFCA28', fontSize: '11' },
    { name: 'AWS S3', short: 'S3', iconColor: '#FF9900', fontSize: '11' },
    { name: 'Cloud Run', short: 'CR', iconColor: '#4285F4', fontSize: '11' },
    { name: 'ChromaDB', short: 'CH', iconColor: '#A855F7', fontSize: '11' }
  ]
};

// 7. Tools (Tungsten Titanium Platinum)
const tools = {
  themeColor: '#94A3B8',
  items: [
    { name: 'Git', short: 'GIT', iconColor: '#F05032', fontSize: '10' },
    { name: 'GitHub', short: 'GH', iconColor: '#FFFFFF', fontSize: '11' },
    { name: 'Docker', short: 'DK', iconColor: '#2496ED', fontSize: '11' },
    { name: 'Postman', short: 'PM', iconColor: '#FF6C37', fontSize: '11' },
    { name: 'Linux', short: 'LX', iconColor: '#FCC624', fontSize: '11' },
    { name: 'Figma', short: 'FG', iconColor: '#F24E1E', fontSize: '11' },
    { name: 'VS Code', short: 'VS', iconColor: '#007ACC', fontSize: '11' }
  ]
};

const configs = [
  { files: ['arsenal-languages-v4.svg', 'arsenal-languages-v3.svg', 'arsenal-languages-v2.svg', 'arsenal-languages.svg'], data: languages },
  { files: ['arsenal-frameworks-v4.svg', 'arsenal-frameworks-v3.svg', 'arsenal-frameworks-v2.svg', 'arsenal-frameworks.svg'], data: frameworks },
  { files: ['arsenal-frontend-v4.svg', 'arsenal-frontend-v3.svg'], data: frontend },
  { files: ['arsenal-backend-v4.svg', 'arsenal-backend-v3.svg', 'arsenal-backend-v2.svg', 'arsenal-backend.svg'], data: backend },
  { files: ['arsenal-mobile-v4.svg', 'arsenal-mobile-v3.svg'], data: mobile },
  { files: ['arsenal-databases-v4.svg', 'arsenal-databases-v3.svg', 'arsenal-databases-v2.svg', 'arsenal-databases.svg'], data: databases },
  { files: ['arsenal-tools-v4.svg', 'arsenal-tools-v3.svg', 'arsenal-tools-v2.svg', 'arsenal-tools.svg'], data: tools },
];

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) continue;

  for (const cfg of configs) {
    const svg = createGamingArsenalSvg(cfg.data);
    for (const file of cfg.files) {
      fs.writeFileSync(path.join(dir, file), svg, 'utf8');
      console.log(`✓ Generated ${file} in ${dir}`);
    }
  }
}

console.log('\nAll Gaming Arsenal SVGs generated and deployed!');
