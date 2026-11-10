const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.resolve(__dirname, '../assets'),
  path.resolve(__dirname, '../codexanjan-main/assets')
];

console.log('Generating Comic-Style GTA x CS2 theme headers, badges, and dividers...');

// 1. Generate samurai-status-badges.svg (GTA x CS2 comic HUD style)
function generateStatusBadgesSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 36" width="100%" height="36" fill="none">
  <defs>
    <!-- GTA Sunset Gold Gradient -->
    <linearGradient id="badgeGtaGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFB800" />
      <stop offset="50%" stop-color="#FFA000" />
      <stop offset="100%" stop-color="#FF7A00" />
    </linearGradient>

    <!-- Crimson Action Gradient -->
    <linearGradient id="badgeActionRed" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF2A4D" />
      <stop offset="100%" stop-color="#FF4D6D" />
    </linearGradient>

    <!-- Neon Emerald Green -->
    <linearGradient id="badgeNeonGreen" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10B981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>

    <filter id="badgeGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <style>
      @keyframes pulseDot {
        0%, 100% { opacity: 0.8; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.3); }
      }
      .beacon-dot {
        transform-origin: 746px 18px;
        animation: pulseDot 2s ease-in-out infinite;
      }
    </style>
  </defs>

  <g font-family="system-ui, -apple-system, 'SF Mono', 'Courier New', monospace" font-size="10.5" font-weight="900" letter-spacing="0.8">
    <!-- 01: IDENTITY -->
    <g transform="translate(6, 2)">
      <rect x="0" y="0" width="76" height="32" rx="3" fill="#0C0F17" stroke="#252D3D" stroke-width="1.2" />
      <text x="38" y="20" text-anchor="middle" fill="#8E95A5" font-size="9.5">OPERATIVE</text>
      <rect x="79" y="0" width="126" height="32" rx="3" fill="url(#badgeActionRed)" filter="url(#badgeGlow)" />
      <text x="142" y="20" text-anchor="middle" fill="#FFFFFF">SUJAL S KUMAR</text>
    </g>

    <!-- 02: CALLSIGN -->
    <g transform="translate(221, 2)">
      <rect x="0" y="0" width="68" height="32" rx="3" fill="#0C0F17" stroke="#252D3D" stroke-width="1.2" />
      <text x="34" y="20" text-anchor="middle" fill="#8E95A5" font-size="9.5">CALLSIGN</text>
      <rect x="71" y="0" width="112" height="32" rx="3" fill="#101724" stroke="#00F5D4" stroke-width="1.2" />
      <text x="127" y="20" text-anchor="middle" fill="#00F5D4">GHOST // TF-141</text>
    </g>

    <!-- 03: GTA VI HEIST LEVEL -->
    <g transform="translate(414, 2)">
      <rect x="0" y="0" width="58" height="32" rx="3" fill="#0C0F17" stroke="#252D3D" stroke-width="1.2" />
      <text x="29" y="20" text-anchor="middle" fill="#8E95A5" font-size="9.5">GTA VI</text>
      <rect x="61" y="0" width="98" height="32" rx="3" fill="url(#badgeGtaGold)" />
      <text x="110" y="20" text-anchor="middle" fill="#090C12">★★★★★ 5-STAR</text>
    </g>

    <!-- 04: CS2 RANK -->
    <g transform="translate(583, 2)">
      <rect x="0" y="0" width="46" height="32" rx="3" fill="#0C0F17" stroke="#252D3D" stroke-width="1.2" />
      <text x="23" y="20" text-anchor="middle" fill="#8E95A5" font-size="9.5">CS2</text>
      <rect x="49" y="0" width="116" height="32" rx="3" fill="#121824" stroke="#FFB800" stroke-width="1.2" />
      <text x="107" y="20" text-anchor="middle" fill="#FFB800">GLOBAL ELITE</text>
    </g>

    <!-- 05: SYSTEM STATUS -->
    <g transform="translate(757, 2)">
      <rect x="0" y="0" width="48" height="32" rx="3" fill="#0C0F17" stroke="#252D3D" stroke-width="1.2" />
      <text x="24" y="20" text-anchor="middle" fill="#8E95A5" font-size="9.5">STATUS</text>
      <rect x="51" y="0" width="88" height="32" rx="3" fill="url(#badgeNeonGreen)" />
      <text x="95" y="20" text-anchor="middle" fill="#FFFFFF">ARMED &amp; LIVE</text>
    </g>
  </g>
</svg>`;
}

// 2. Generate tactical-divider.svg (vibrant GTA amber & CS2 cyan HUD line)
function generateTacticalDividerSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 36" width="100%" height="36" fill="none">
  <defs>
    <!-- Vibrant GTA Amber Gold Gradient -->
    <linearGradient id="divAmber" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFB800" stop-opacity="0" />
      <stop offset="40%" stop-color="#FFA000" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#FF7A00" stop-opacity="1" />
    </linearGradient>

    <!-- Vibrant CS2 Electric Cyan Gradient -->
    <linearGradient id="divCyan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00F5D4" stop-opacity="1" />
      <stop offset="60%" stop-color="#00BBF9" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#00F5D4" stop-opacity="0" />
    </linearGradient>

    <filter id="divGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="2.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <style>
      @keyframes radarSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .spin-center-reticle {
        transform-origin: 450px 18px;
        animation: radarSpin 12s linear infinite;
      }
    </style>
  </defs>

  <!-- Left Amber Laser Line -->
  <line x1="40" y1="18" x2="415" y2="18" stroke="url(#divAmber)" stroke-width="2.5" filter="url(#divGlow)" />
  <line x1="40" y1="18" x2="415" y2="18" stroke="#FFE082" stroke-width="1" />

  <!-- Right Cyan Laser Line -->
  <line x1="485" y1="18" x2="860" y2="18" stroke="url(#divCyan)" stroke-width="2.5" filter="url(#divGlow)" />
  <line x1="485" y1="18" x2="860" y2="18" stroke="#E0F7FA" stroke-width="1" />

  <!-- Center Tactical Reticle -->
  <g transform="translate(450, 18)">
    <circle cx="0" cy="0" r="14" stroke="#252D3D" stroke-width="1.5" fill="#090C12" />
    <circle cx="0" cy="0" r="11" stroke="#FFB800" stroke-width="1.5" stroke-dasharray="8 4" class="spin-center-reticle" />
    <circle cx="0" cy="0" r="6" stroke="#00F5D4" stroke-width="1.5" fill="#0E1624" />
    <circle cx="0" cy="0" r="2" fill="#FFB800" />

    <!-- Crosshair Cardinal Ticks -->
    <line x1="-19" y1="0" x2="-14" y2="0" stroke="#FFB800" stroke-width="2" />
    <line x1="14" y1="0" x2="19" y2="0" stroke="#00F5D4" stroke-width="2" />
    <line x1="0" y1="-19" x2="0" y2="-14" stroke="#FFB800" stroke-width="2" />
    <line x1="0" y1="14" x2="0" y2="19" stroke="#00F5D4" stroke-width="2" />
  </g>

  <!-- Coordinates & Callout Labels -->
  <text x="45" y="30" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#8E95A5" letter-spacing="1.5">📍 UDUPI, IN // 13.3409° N, 74.7421° E</text>
  <text x="855" y="30" text-anchor="end" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#8E95A5" letter-spacing="1.5">GTA VI HEIST // CS2 DEFUSAL // TF-141</text>
</svg>`;
}

// 3. Generate Section Header SVG
function generateSectionHeaderSvg(number, subtitle, mainTitle) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 85" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="hBgComic" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0E131C" />
      <stop offset="50%" stop-color="#090C12" />
      <stop offset="100%" stop-color="#06080C" />
    </linearGradient>

    <!-- GTA Amber to Crimson to CS2 Cyan slash -->
    <linearGradient id="hSlashComic" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFB800" />
      <stop offset="35%" stop-color="#FF3038" />
      <stop offset="70%" stop-color="#FFF" />
      <stop offset="100%" stop-color="#00F5D4" />
    </linearGradient>

    <filter id="hGlowComic" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <style>
      @keyframes slashMotionComic {
        0% { stroke-dashoffset: 900; }
        50% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -900; }
      }
      @keyframes borderEdgeTraceComic {
        0% { stroke-dashoffset: 2000; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes radarRotateSlow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .slash-line-comic {
        stroke-dasharray: 260 640;
        animation: slashMotionComic 4.5s linear infinite;
      }
      .border-edge-comic {
        stroke-dasharray: 180 1820;
        animation: borderEdgeTraceComic 5s linear infinite;
      }
      .radar-reticle-slow {
        transform-origin: 845px 34px;
        animation: radarRotateSlow 16s linear infinite;
      }
    </style>
  </defs>

  <!-- Background Base Bar -->
  <rect width="900" height="85" rx="5" fill="url(#hBgComic)" />
  <rect width="900" height="85" rx="5" fill="none" stroke="#1F2736" stroke-width="1.2" />
  <rect width="900" height="85" rx="5" fill="none" stroke="#FFB800" stroke-width="1.8" class="border-edge-comic" opacity="0.9" />

  <!-- Section Number Badge (Left) with GTA Amber Frame -->
  <g transform="translate(20, 20)">
    <rect x="0" y="0" width="70" height="30" rx="3" fill="#141B26" stroke="#FFB800" stroke-width="1.5" />
    <polygon points="0,0 9,0 0,9" fill="#FFB800" />
    <polygon points="70,30 61,30 70,21" fill="#FFB800" />
    <text x="35" y="21" text-anchor="middle" font-family="'Courier New', Consolas, monospace" font-size="16" font-weight="900" fill="#FFB800">${number}</text>
  </g>

  <!-- Main Title & Section Hierarchy -->
  <g transform="translate(105, 30)">
    <text x="0" y="0" font-family="'Courier New', Consolas, monospace" font-size="11" font-weight="700" fill="#8E95A5" letter-spacing="2">${subtitle}</text>
    <text x="0" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" letter-spacing="2.5">${mainTitle}</text>
  </g>

  <!-- Task Force 141 Tactical Optics Reticle (Right) -->
  <g transform="translate(845, 34)">
    <circle cx="0" cy="0" r="23" fill="#0C1018" stroke="#252D3D" stroke-width="1.5" />
    <circle cx="0" cy="0" r="18" fill="none" stroke="#FFB800" stroke-width="1.2" stroke-dasharray="6 3" class="radar-reticle-slow" opacity="0.9" />
    <circle cx="0" cy="0" r="12" fill="none" stroke="#00F5D4" stroke-width="1.2" />
    <line x1="-16" y1="0" x2="-8" y2="0" stroke="#FFB800" stroke-width="1.5" />
    <line x1="8" y1="0" x2="16" y2="0" stroke="#00F5D4" stroke-width="1.5" />
    <line x1="0" y1="-16" x2="0" y2="-8" stroke="#FFB800" stroke-width="1.5" />
    <line x1="0" y1="8" x2="0" y2="16" stroke="#00F5D4" stroke-width="1.5" />
    <circle cx="0" cy="0" r="2.5" fill="#FFB800" />
  </g>

  <!-- Bottom Animated Action Laser Line -->
  <line x1="20" y1="74" x2="880" y2="74" stroke="#1A2230" stroke-width="2" />
  <line x1="20" y1="74" x2="880" y2="74" stroke="url(#hSlashComic)" stroke-width="2.5" stroke-linecap="round" class="slash-line-comic" filter="url(#hGlowComic)" />
  <polygon points="20,72 26,74 20,76" fill="#FFB800" />
  <polygon points="880,72 874,74 880,76" fill="#00F5D4" />
</svg>`;
}

const headerConfigs = [
  { file: 'header-profile.svg', number: '01', subtitle: 'OPERATIVE DOSSIER // INTEL', title: 'TASK FORCE 141 // OPERATIVE' },
  { file: 'header-arsenal.svg', number: '02', subtitle: 'TECH ARSENAL // WEAPONS OF CODE', title: 'OPERATIVE TECH ARSENAL' },
  { file: 'header-project-database.svg', number: '03', subtitle: 'HEIST ARCHIVES // MISSION DATABASE', title: 'MISSION DATABASE // PROJECTS' },
  { file: 'header-commit-radar.svg', number: '04', subtitle: 'CODE CADENCE // RADAR TELEMETRY', title: 'COMMIT RADAR // CODE CADENCE' },
  { file: 'header-contributions.svg', number: '05', subtitle: 'COMBAT PATROL // 52-WEEK ACTIVITY', title: '52-WEEK COMBAT CADENCE' },
  { file: 'header-roadmap.svg', number: '06', subtitle: 'MISSION DIRECTIVES // 2026 ROADMAP', title: '2026 TACTICAL ROADMAP' },
  { file: 'header-trophy-room.svg', number: '07', subtitle: 'SPECIAL FORCES ACCOLADES // HONORS', title: 'TROPHY ROOM // ACCOLADES' },
  { file: 'header-badges.svg', number: '07B', subtitle: 'VERIFIED HONORS // CREDENTIALS', title: 'CREDENTIALS &amp; CERTIFICATIONS' },
  { file: 'header-telemetry.svg', number: '08', subtitle: 'WARZONE TELEMETRY // MAINFRAME METRICS', title: 'WARZONE TELEMETRY GRID' },
  { file: 'header-connect.svg', number: '09', subtitle: 'SECURE COMMS // TASK FORCE CHANNELS', title: 'SECURE COMMS CHANNELS' },
  { file: 'header-terminal.svg', number: '10', subtitle: 'COMMAND TERMINAL // TACTICAL SHELL', title: 'TACTICAL COMMAND SHELL' }
];

const statusBadgesSvg = generateStatusBadgesSvg();
const tacticalDividerSvg = generateTacticalDividerSvg();

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) continue;

  // 1. Save samurai-status-badges.svg
  fs.writeFileSync(path.join(dir, 'samurai-status-badges.svg'), statusBadgesSvg, 'utf8');
  console.log(`✓ Updated samurai-status-badges.svg in ${dir}`);

  // 2. Save tactical-divider.svg
  fs.writeFileSync(path.join(dir, 'tactical-divider.svg'), tacticalDividerSvg, 'utf8');
  console.log(`✓ Updated tactical-divider.svg in ${dir}`);

  // 3. Save all 11 headers
  for (const cfg of headerConfigs) {
    const svg = generateSectionHeaderSvg(cfg.number, cfg.subtitle, cfg.title);
    fs.writeFileSync(path.join(dir, cfg.file), svg, 'utf8');
    console.log(`✓ Updated ${cfg.file} in ${dir}`);
  }
}

console.log('Theme deployment complete.');
