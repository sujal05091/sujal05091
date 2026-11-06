const fs = require('fs');
const path = require('path');

const assetsDir = path.resolve(__dirname, '../assets');

// 1. live-github-stats.svg
const liveStatPath = path.join(assetsDir, 'live-github-stats.svg');
let liveStat = fs.readFileSync(liveStatPath, 'utf8');
liveStat = liveStat.replace("Anjan Shetty's GitHub Stats", "Sujal S Kumar's GitHub Stats");
liveStat = liveStat.replace(/(Total Stars Earned:<\/text>\s*<text[^>]*>)\d+(<\/text>)/, '$128$2');
liveStat = liveStat.replace(/(Total Commits \(2026\):<\/text>\s*<text[^>]*>)\d+(<\/text>)/, '$1185$2');
liveStat = liveStat.replace(/(Total PRs:<\/text>\s*<text[^>]*>)\d+(<\/text>)/, '$16$2');
liveStat = liveStat.replace(/(Total Issues:<\/text>\s*<text[^>]*>)\d+(<\/text>)/, '$14$2');
liveStat = liveStat.replace(/(Contributed to \(last year\):<\/text>\s*<text[^>]*>)\d+(<\/text>)/, '$116$2');
fs.writeFileSync(liveStatPath, liveStat);
console.log('Updated live-github-stats.svg');

// 2. samurai-telemetry-grid.svg
const telemPath = path.join(assetsDir, 'samurai-telemetry-grid.svg');
let telem = fs.readFileSync(telemPath, 'utf8');
telem = telem.replace(/(Total Stars Earned:<\/text>\s*<text[^>]*>)\d+(<\/text>)/, '$128$2');
telem = telem.replace(/(Total Commits \(2026\):<\/text>\s*<text[^>]*>)\d+(<\/text>)/, '$1185$2');
telem = telem.replace(/(Total PRs:<\/text>\s*<text[^>]*>)\d+(<\/text>)/, '$16$2');
telem = telem.replace(/(Total Issues:<\/text>\s*<text[^>]*>)\d+(<\/text>)/, '$14$2');
telem = telem.replace(/(Contributed to \(yr\):<\/text>\s*<text[^>]*>)\d+(<\/text>)/, '$116$2');

// Update language bars to Python, TypeScript, Dart, Kotlin
telem = telem.replace('TypeScript</text>\n        <rect x="95" y="-7" width="90" height="6" rx="3" fill="#1C222E" />\n        <rect x="95" y="-7" width="50"', 'Python</text>\n        <rect x="95" y="-7" width="90" height="6" rx="3" fill="#1C222E" />\n        <rect x="95" y="-7" width="54"');
telem = telem.replace('>55%<', '>32%<');
telem = telem.replace('JavaScript</text>\n        <rect x="95" y="-7" width="90" height="6" rx="3" fill="#1C222E" />\n        <rect x="95" y="-7" width="27"', 'TypeScript / JS</text>\n        <rect x="95" y="-7" width="90" height="6" rx="3" fill="#1C222E" />\n        <rect x="95" y="-7" width="46"');
telem = telem.replace('>30%<', '>28%<');
telem = telem.replace('Python</text>\n        <rect x="95" y="-7" width="90" height="6" rx="3" fill="#1C222E" />\n        <rect x="95" y="-7" width="9"', 'Dart (Flutter)</text>\n        <rect x="95" y="-7" width="90" height="6" rx="3" fill="#1C222E" />\n        <rect x="95" y="-7" width="36"');
telem = telem.replace('>10%<', '>22%<');
telem = telem.replace('HTML / CSS</text>\n        <rect x="95" y="-7" width="90" height="6" rx="3" fill="#1C222E" />\n        <rect x="95" y="-7" width="5"', 'Kotlin / Android</text>\n        <rect x="95" y="-7" width="90" height="6" rx="3" fill="#1C222E" />\n        <rect x="95" y="-7" width="28"');
telem = telem.replace('>5%<', '>18%<');

fs.writeFileSync(telemPath, telem);
console.log('Updated samurai-telemetry-grid.svg');

// 3. terminal-contact.svg
const termPath = path.join(assetsDir, 'terminal-contact.svg');
const termSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 320" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="termBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080A0D" />
      <stop offset="50%" stop-color="#06080A" />
      <stop offset="100%" stop-color="#0E1218" />
    </linearGradient>
    <filter id="termGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <style>
      @keyframes promptBlink {
        0%, 49% { opacity: 1; }
        50%, 100% { opacity: 0; }
      }
      .t-cursor { animation: promptBlink 1.1s infinite; }
    </style>
  </defs>

  <rect width="800" height="320" rx="10" fill="url(#termBg)" stroke="#171B21" stroke-width="1.5" />
  <polygon points="12,12 28,12 12,28" fill="#FF3038" />
  <polygon points="788,308 772,308 788,292" fill="#FF3038" />

  <!-- Terminal Top Window Header -->
  <g transform="translate(30, 32)">
    <circle cx="0" cy="0" r="4" fill="#FF3038" />
    <circle cx="14" cy="0" r="4" fill="#F4C95D" />
    <circle cx="28" cy="0" r="4" fill="#42FF9E" />
    <text x="50" y="4" font-family="'Courier New', Consolas, monospace" font-size="12" font-weight="700" fill="#A8ADB7" letter-spacing="2">RONIN TERMINAL // SECURE CHANNEL [SUJAL@DOJO ~]</text>
    <line x1="0" y1="16" x2="740" y2="16" stroke="#171B21" stroke-width="1" />
  </g>

  <!-- Terminal Dialogue Commands & Outputs -->
  <g transform="translate(45, 78)" font-family="'Courier New', Consolas, monospace">
    <!-- Prompt 1: whoami -->
    <g transform="translate(0, 0)">
      <text x="0" y="0" font-size="13" font-weight="700" fill="#FF3038">&gt; whoami</text>
      <text x="0" y="20" font-size="15" font-weight="900" fill="#F4F4F2" letter-spacing="1.5">SUJAL S KUMAR // AI &amp; FULL-STACK DEVELOPER</text>
    </g>

    <!-- Prompt 2: mission -->
    <g transform="translate(0, 50)">
      <text x="0" y="0" font-size="13" font-weight="700" fill="#FF3038">&gt; mission</text>
      <text x="0" y="20" font-size="13.5" font-weight="700" fill="#A8ADB7">BUILDING INTELLIGENT APPLICATIONS. <tspan fill="#55E6FF">TURNING IDEAS INTO PRODUCTS.</tspan></text>
    </g>

    <!-- Prompt 3: channels -->
    <g transform="translate(0, 100)">
      <text x="0" y="0" font-size="13" font-weight="700" fill="#FF3038">&gt; comms</text>
      <text x="0" y="20" font-size="13.5" font-weight="700" fill="#55E6FF">github.com/sujal05091 <tspan fill="#8892B0">|</tspan> linkedin.com/in/sujal-s-kumar-53630a295</text>
    </g>

    <!-- Prompt 4: status -->
    <g transform="translate(0, 150)">
      <text x="0" y="0" font-size="13" font-weight="700" fill="#FF3038">&gt; status</text>
      <text x="0" y="20" font-size="13.5" font-weight="700" fill="#42FF9E">ALWAYS BUILDING // ALWAYS LEARNING // READY TO DEPLOY</text>
    </g>

    <!-- Final Prompt Line with Active Blinking Cursor -->
    <g transform="translate(0, 200)">
      <text x="0" y="0" font-size="14" font-weight="700" fill="#FF3038">&gt; transmission_ready_</text>
      <rect x="195" y="-13" width="9" height="17" fill="#FF3038" class="t-cursor" />
    </g>
  </g>
</svg>`;
fs.writeFileSync(termPath, termSvg);
console.log('Updated terminal-contact.svg');

// 4. ronin-footer.svg
const footPath = path.join(assetsDir, 'ronin-footer.svg');
const footSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="footBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050608" />
      <stop offset="50%" stop-color="#0A0D12" />
      <stop offset="100%" stop-color="#050608" />
    </linearGradient>
    <linearGradient id="footBlade" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#141820" />
      <stop offset="20%" stop-color="#4A5260" />
      <stop offset="70%" stop-color="#A8ADB7" />
      <stop offset="95%" stop-color="#F4F4F2" />
      <stop offset="100%" stop-color="#FFFFFF" />
    </linearGradient>
    <linearGradient id="footEnergy" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF3038" stop-opacity="0" />
      <stop offset="30%" stop-color="#FF3038" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="1" />
      <stop offset="70%" stop-color="#FF4B4B" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#8C111B" stop-opacity="0" />
    </linearGradient>
    <radialGradient id="footRedGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF3038" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#050608" stop-opacity="0" />
    </radialGradient>
    <filter id="fGlowFooter" x="-20%" y="-30%" width="140%" height="160%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <style>
      @keyframes slowBladePulse {
        0% { stroke-dashoffset: 1200; opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { stroke-dashoffset: -1200; opacity: 0; }
      }
      .foot-energy-beam {
        stroke-dasharray: 200 1000;
        animation: slowBladePulse 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
    </style>
  </defs>

  <rect width="1200" height="300" rx="12" fill="url(#footBg)" stroke="#171B21" stroke-width="1.5" />
  <circle cx="600" cy="150" r="220" fill="url(#footRedGlow)" />

  <!-- Corner Brackets -->
  <path d="M 20 50 L 20 20 L 50 20" fill="none" stroke="#FF3038" stroke-width="2.5" />
  <path d="M 1150 20 L 1180 20 L 1180 50" fill="none" stroke="#FF3038" stroke-width="2.5" />
  <path d="M 20 250 L 20 280 L 50 280" fill="none" stroke="#FF3038" stroke-width="2.5" />
  <path d="M 1150 280 L 1180 280 L 1180 250" fill="none" stroke="#FF3038" stroke-width="2.5" />

  <!-- Center Content -->
  <g transform="translate(600, 75)" text-anchor="middle">
    <!-- Codename Badge -->
    <rect x="-80" y="-22" width="160" height="24" rx="3" fill="#141820" stroke="#FF3038" stroke-width="1" />
    <text x="0" y="-6" font-family="'Courier New', Consolas, monospace" font-size="11" font-weight="700" fill="#FF3038" letter-spacing="3">SUJAL05091</text>

    <!-- Large Name -->
    <text x="0" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF" letter-spacing="4">SUJAL S KUMAR</text>

    <!-- Subtitle -->
    <text x="0" y="72" font-family="'Courier New', Consolas, monospace" font-size="14" font-weight="700" fill="#A8ADB7" letter-spacing="3">AI &amp; FULL-STACK DEVELOPER // <tspan fill="#55E6FF">DATA SCIENCE</tspan></text>
  </g>

  <!-- Horizontal Cyber Telemetry Stream Across Center -->
  <g transform="translate(100, 195)">
    <!-- Baseline track -->
    <rect x="0" y="-3" width="1000" height="6" rx="3" fill="#0E1218" stroke="#171B21" stroke-width="1" />

    <!-- Left Tech Bracket -->
    <path d="M 0 -7 L 8 -7 L 8 7 L 0 7 Z" fill="#141820" stroke="#FF3038" stroke-width="1.2" />
    <circle cx="4" cy="0" r="1.5" fill="#FF3038" />

    <!-- Right Tech Bracket -->
    <path d="M 992 -7 L 1000 -7 L 1000 7 L 992 7 Z" fill="#141820" stroke="#55E6FF" stroke-width="1.2" />
    <circle cx="996" cy="0" r="1.5" fill="#55E6FF" />

    <!-- Data Stream Pulse -->
    <line x1="10" y1="0" x2="990" y2="0" stroke="url(#footEnergy)" stroke-width="3" stroke-linecap="round" class="foot-energy-beam" filter="url(#fGlowFooter)" />
    <line x1="10" y1="0" x2="990" y2="0" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" class="foot-energy-beam" />

    <!-- Circuit Nodes -->
    <circle cx="200" cy="0" r="2" fill="#FF3038" />
    <circle cx="500" cy="0" r="2.5" fill="#FFFFFF" />
    <circle cx="800" cy="0" r="2" fill="#55E6FF" />
  </g>

  <!-- Final Philosophy Statement -->
  <text x="600" y="245" text-anchor="middle" font-family="'Courier New', Consolas, monospace" font-size="13" font-weight="700" fill="#F4F4F2" letter-spacing="4">BUILD WITH DISCIPLINE. ENGINEER WITH PRECISION. DEPLOY WITH PURPOSE.</text>

  <!-- Bottom Telemetry (Right) -->
  <g transform="translate(1000, 275)" font-family="'Courier New', Consolas, monospace" font-size="10" fill="#787F89">
    <circle cx="-10" cy="-4" r="3.5" fill="#42FF9E" />
    <text x="0" y="0" fill="#42FF9E" font-weight="700">RONIN DOJO // ONLINE</text>
  </g>
</svg>`;
fs.writeFileSync(footPath, footSvg);
console.log('Updated ronin-footer.svg');
