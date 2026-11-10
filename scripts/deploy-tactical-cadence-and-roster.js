const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const assetsDir = path.join(rootDir, 'assets');
const nestedAssetsDir = path.join(rootDir, 'codexanjan-main', 'assets');

console.log('Generating ultra-premium GTA 6 x CS2 x Task Force 141 SVGs...');

// -------------------------------------------------------------
// 1. COMMIT RADAR ACTIVE (Section 04)
// -------------------------------------------------------------
function generateCommitRadarSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="crBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080A0E" />
      <stop offset="50%" stop-color="#050608" />
      <stop offset="100%" stop-color="#0D1017" />
    </linearGradient>
    <linearGradient id="crAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FF3038" stop-opacity="0.45" />
      <stop offset="50%" stop-color="#FFB800" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#FF3038" stop-opacity="0.0" />
    </linearGradient>
    <linearGradient id="scanBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF3038" stop-opacity="0" />
      <stop offset="50%" stop-color="#FFB800" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#00F5D4" stop-opacity="0.85" />
    </linearGradient>
    <filter id="crRedGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="pointGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="reticleGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <style>
      @keyframes laserTravel {
        0% { stroke-dashoffset: 1600; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes radarBeamSweep {
        0% { transform: translateX(0px); opacity: 0; }
        5% { opacity: 0.95; }
        95% { opacity: 0.95; }
        100% { transform: translateX(644px); opacity: 0; }
      }
      @keyframes pointPulsePrimary {
        0%, 100% { r: 5; filter: drop-shadow(0 0 3px #00F5D4); }
        50% { r: 7.5; filter: drop-shadow(0 0 14px #00F5D4); }
      }
      @keyframes pointPulseSecondary {
        0%, 100% { r: 3.5; opacity: 0.75; }
        50% { r: 5.5; opacity: 1; filter: drop-shadow(0 0 8px #FFB800); }
      }
      @keyframes areaBreathe {
        0%, 100% { opacity: 0.75; }
        50% { opacity: 1; }
      }
      @keyframes liveBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.25; }
      }
      @keyframes reticleRotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .cadence-laser {
        stroke-dasharray: 140 1460;
        animation: laserTravel 3.6s linear infinite;
      }
      .sweep-beam {
        animation: radarBeamSweep 4.5s ease-in-out infinite;
      }
      .cadence-point-high {
        animation: pointPulsePrimary 2.4s ease-in-out infinite;
      }
      .cadence-point-mid {
        animation: pointPulseSecondary 3s ease-in-out infinite;
      }
      .cadence-area {
        animation: areaBreathe 4s ease-in-out infinite;
      }
      .live-indicator {
        animation: liveBlink 1.4s ease-in-out infinite;
      }
      .peak-reticle {
        transform-origin: 608px 142px;
        animation: reticleRotate 8s linear infinite;
      }
    </style>
  </defs>

  <!-- Container Base -->
  <rect width="900" height="420" rx="8" fill="url(#crBg)" stroke="#171B21" stroke-width="1.5" />

  <!-- Corner Brackets -->
  <polygon points="12,12 36,12 12,36" fill="#FF3038" />
  <polygon points="888,12 864,12 888,36" fill="#FFB800" />
  <polygon points="12,408 36,408 12,384" fill="#00F5D4" />
  <polygon points="888,408 864,408 888,384" fill="#FF3038" />

  <!-- Live Telemetry Status Top Right -->
  <g transform="translate(710, 32)" font-family="'Courier New', monospace" font-size="9.5">
    <circle cx="0" cy="0" r="3.5" fill="#42FF9E" class="live-indicator" />
    <text x="12" y="3" fill="#42FF9E" font-weight="800" letter-spacing="1.5">LIVE CADENCE RADAR</text>
  </g>

  <!-- Graph Title: SUJAL S KUMAR -->
  <g transform="translate(450, 48)" text-anchor="middle">
    <text x="0" y="0" font-family="'Orbitron', system-ui, sans-serif" font-size="16" font-weight="900" fill="#FFB800" letter-spacing="2">SUJAL S KUMAR // CODE CADENCE RADAR</text>
    <text x="0" y="20" font-family="'Courier New', monospace" font-size="10" font-weight="700" fill="#8892B0" letter-spacing="1.5">REAL-TIME COMMITS // TASK FORCE 141 TELEMETRY</text>
  </g>

  <!-- Coordinate Grid & Y-Axis Labels -->
  <g font-family="'Courier New', Consolas, monospace" font-size="10.5" fill="#6A7280" text-anchor="end">
    <!-- 30 -->
    <text x="130" y="114">30</text>
    <line x1="145" y1="110" x2="820" y2="110" stroke="#171B21" stroke-dasharray="3 3" stroke-width="1" />

    <!-- 25 -->
    <text x="130" y="154">25</text>
    <line x1="145" y1="150" x2="820" y2="150" stroke="#171B21" stroke-dasharray="3 3" stroke-width="1" />

    <!-- 20 -->
    <text x="130" y="194">20</text>
    <line x1="145" y1="190" x2="820" y2="190" stroke="#171B21" stroke-dasharray="3 3" stroke-width="1" />

    <!-- 15 -->
    <text x="130" y="234">15</text>
    <line x1="145" y1="230" x2="820" y2="230" stroke="#171B21" stroke-dasharray="3 3" stroke-width="1" />

    <!-- 10 -->
    <text x="130" y="274">10</text>
    <line x1="145" y1="270" x2="820" y2="270" stroke="#171B21" stroke-dasharray="3 3" stroke-width="1" />

    <!-- 5 -->
    <text x="130" y="314">5</text>
    <line x1="145" y1="310" x2="820" y2="310" stroke="#171B21" stroke-dasharray="3 3" stroke-width="1" />

    <!-- 0 Baseline -->
    <text x="130" y="354">0</text>
    <line x1="145" y1="350" x2="820" y2="350" stroke="#222834" stroke-width="1.5" />
  </g>

  <!-- Y-Axis Title -->
  <text x="-230" y="92" transform="rotate(-90)" font-family="'Courier New', monospace" font-size="10.5" fill="#8892B0" text-anchor="middle" letter-spacing="1.5">Contributions</text>

  <!-- Area Gradient Fill Under Curve -->
  <path d="M 160 350 L 160 350 L 188 350 L 216 350 L 244 350 L 272 278 L 300 318 L 328 350 L 356 302 L 384 286 L 412 350 L 440 294 L 468 350 L 496 350 L 524 350 L 552 318 L 580 182 L 608 142 L 636 246 L 664 294 L 692 318 L 720 198 L 748 350 L 776 350 L 804 270 L 804 350 Z" fill="url(#crAreaGrad)" class="cadence-area" />

  <!-- Traveling Radar Scan Beam -->
  <g class="sweep-beam">
    <rect x="110" y="100" width="50" height="250" fill="url(#scanBeamGrad)" />
    <line x1="160" y1="100" x2="160" y2="350" stroke="#00F5D4" stroke-width="1.8" opacity="0.9" />
  </g>

  <!-- Neon Cadence Curve Base -->
  <path d="M 160 350 L 188 350 L 216 350 L 244 350 L 272 278 L 300 318 L 328 350 L 356 302 L 384 286 L 412 350 L 440 294 L 468 350 L 496 350 L 524 350 L 552 318 L 580 182 L 608 142 L 636 246 L 664 294 L 692 318 L 720 198 L 748 350 L 776 350 L 804 270" fill="none" stroke="#FF3038" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" filter="url(#crRedGlow)" />
  <path d="M 160 350 L 188 350 L 216 350 L 244 350 L 272 278 L 300 318 L 328 350 L 356 302 L 384 286 L 412 350 L 440 294 L 468 350 L 496 350 L 524 350 L 552 318 L 580 182 L 608 142 L 636 246 L 664 294 L 692 318 L 720 198 L 748 350 L 776 350 L 804 270" fill="none" stroke="#FFB800" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />

  <!-- Animated Traveling Laser Strike -->
  <path d="M 160 350 L 188 350 L 216 350 L 244 350 L 272 278 L 300 318 L 328 350 L 356 302 L 384 286 L 412 350 L 440 294 L 468 350 L 496 350 L 524 350 L 552 318 L 580 182 L 608 142 L 636 246 L 664 294 L 692 318 L 720 198 L 748 350 L 776 350 L 804 270" fill="none" stroke="#00F5D4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="cadence-laser" filter="url(#crRedGlow)" />

  <!-- Peak Indicator Reticle on Day 3 (x=608, y=142) -->
  <g class="peak-reticle" opacity="0.85">
    <circle cx="608" cy="142" r="14" fill="none" stroke="#00F5D4" stroke-width="1" stroke-dasharray="3 3" filter="url(#reticleGlow)" />
    <line x1="590" y1="142" x2="626" y2="142" stroke="#00F5D4" stroke-width="0.8" opacity="0.6" />
    <line x1="608" y1="124" x2="608" y2="160" stroke="#00F5D4" stroke-width="0.8" opacity="0.6" />
  </g>

  <!-- Data Nodes / Pulsing Points -->
  <g fill="#FFFFFF" stroke="#FF3038" stroke-width="1.8">
    <circle cx="160" cy="350" r="3.5" />
    <circle cx="188" cy="350" r="3.5" />
    <circle cx="216" cy="350" r="3.5" />
    <circle cx="244" cy="350" r="3.5" />
    <circle cx="272" cy="278" r="4.5" class="cadence-point-mid" stroke="#FFB800" />
    <circle cx="300" cy="318" r="3.5" />
    <circle cx="328" cy="350" r="3.5" />
    <circle cx="356" cy="302" r="3.5" />
    <circle cx="384" cy="286" r="3.5" />
    <circle cx="412" cy="350" r="3.5" />
    <circle cx="440" cy="294" r="3.5" />
    <circle cx="468" cy="350" r="3.5" />
    <circle cx="496" cy="350" r="3.5" />
    <circle cx="524" cy="350" r="3.5" />
    <circle cx="552" cy="318" r="3.5" />
    <circle cx="580" cy="182" r="5" class="cadence-point-high" stroke="#00F5D4" />
    <circle cx="608" cy="142" r="6" class="cadence-point-high" stroke="#00F5D4" />
    <circle cx="636" cy="246" r="4" class="cadence-point-mid" stroke="#FFB800" />
    <circle cx="664" cy="294" r="3.5" />
    <circle cx="692" cy="318" r="3.5" />
    <circle cx="720" cy="198" r="5" class="cadence-point-high" stroke="#00F5D4" />
    <circle cx="748" cy="350" r="3.5" />
    <circle cx="776" cy="350" r="3.5" />
    <circle cx="804" cy="270" r="4.5" class="cadence-point-mid" stroke="#FFB800" />
  </g>

  <!-- X-Axis Labels (Days) -->
  <g font-family="'Courier New', Consolas, monospace" font-size="10" fill="#6A7280" text-anchor="middle">
    <text x="160" y="372">18</text>
    <text x="188" y="372">19</text>
    <text x="216" y="372">20</text>
    <text x="244" y="372">21</text>
    <text x="272" y="372">22</text>
    <text x="300" y="372">23</text>
    <text x="328" y="372">24</text>
    <text x="356" y="372">25</text>
    <text x="384" y="372">26</text>
    <text x="412" y="372">27</text>
    <text x="440" y="372">28</text>
    <text x="468" y="372">29</text>
    <text x="496" y="372">30</text>
    <text x="524" y="372">31</text>
    <text x="552" y="372">1</text>
    <text x="580" y="372">2</text>
    <text x="608" y="372">3</text>
    <text x="636" y="372">4</text>
    <text x="664" y="372">5</text>
    <text x="692" y="372">6</text>
    <text x="720" y="372">7</text>
    <text x="748" y="372">8</text>
    <text x="776" y="372">9</text>
    <text x="804" y="372">10</text>
  </g>

  <!-- X-Axis Title -->
  <text x="482" y="398" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#8892B0" text-anchor="middle" letter-spacing="1.5">Days // Cadence Epoch</text>
</svg>`;
}

// -------------------------------------------------------------
// 2. CONTRIBUTION GRID // 52-WEEK COMBAT CADENCE (Section 05)
// -------------------------------------------------------------
function generateContributionGridSvg(existingTileMatrixSvg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 420" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <!-- Background Gradient: Obsidian Carbon with GTA & CS2 Ambient Glow -->
    <linearGradient id="tfPatrolBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#060910" />
      <stop offset="40%" stop-color="#04060A" />
      <stop offset="70%" stop-color="#0A0710" />
      <stop offset="100%" stop-color="#090E17" />
    </linearGradient>

    <!-- Center Radiant Combat Aura -->
    <radialGradient id="tfCenterCombatAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00F5D4" stop-opacity="0.18" />
      <stop offset="40%" stop-color="#FFB800" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#000" stop-opacity="0" />
    </radialGradient>

    <!-- Health & Armor Gradients -->
    <linearGradient id="cyanHpGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00F5D4" />
      <stop offset="60%" stop-color="#00BBF9" />
      <stop offset="100%" stop-color="#55E6FF" />
    </linearGradient>

    <linearGradient id="goldArmorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFB800" />
      <stop offset="50%" stop-color="#FFA000" />
      <stop offset="100%" stop-color="#FF7A00" />
    </linearGradient>

    <linearGradient id="crimsonDefuseGrad" x1="100%" y1="0%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#FF3038" />
      <stop offset="50%" stop-color="#FF5722" />
      <stop offset="100%" stop-color="#FF8C00" />
    </linearGradient>

    <!-- Glow Filters -->
    <filter id="cyanGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3.2" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="goldGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3.2" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <style>
      @keyframes outerLaserPerimeter {
        0% { stroke-dashoffset: 2760; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes beaconBlink {
        0%, 100% { opacity: 0.35; }
        50% { opacity: 1; }
      }
      @keyframes radarSweepCircle {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes reticleCounterSpin {
        0% { transform: rotate(360deg); }
        100% { transform: rotate(0deg); }
      }
      @keyframes pulseGlow {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 1; filter: drop-shadow(0 0 8px #00F5D4); }
      }

      .tf-outer-laser {
        stroke-dasharray: 140 450;
        animation: outerLaserPerimeter 8s linear infinite;
      }
      .beacon-active {
        animation: beaconBlink 1.4s ease-in-out infinite;
      }
      .radar-sweep-center {
        transform-origin: 480px 212px;
        animation: radarSweepCircle 6s linear infinite;
      }
      .reticle-spin-center {
        transform-origin: 480px 212px;
        animation: reticleCounterSpin 12s linear infinite;
      }
      .hp-glow-pulse {
        animation: pulseGlow 3s ease-in-out infinite;
      }
    </style>
  </defs>

  <!-- Container Base Plate -->
  <rect width="960" height="420" rx="12" fill="url(#tfPatrolBg)" stroke="#161B25" stroke-width="1.6" />
  
  <!-- Outer Perimeter Animated Laser Trace -->
  <rect width="960" height="420" rx="12" fill="none" stroke="#FFB800" stroke-width="1.8" class="tf-outer-laser" opacity="0.85" />

  <!-- Tactical Corner Brackets -->
  <polygon points="12,12 36,12 12,36" fill="#00F5D4" />
  <polygon points="948,12 924,12 948,36" fill="#FFB800" />
  <polygon points="12,408 36,408 12,384" fill="#FF3038" />
  <polygon points="948,408 924,408 948,384" fill="#00F5D4" />

  <!-- Ambient Radiant Combat Glow Behind Center Grid -->
  <ellipse cx="480" cy="212" rx="340" ry="120" fill="url(#tfCenterCombatAura)" />

  <!-- ======================================================== -->
  <!-- CENTER HUD RADAR & DEFUSAL RETICLE (BEHIND GRID)         -->
  <!-- ======================================================== -->
  <g opacity="0.65">
    <!-- Outer Radar Dial -->
    <circle cx="480" cy="212" r="110" fill="#0A0E18" fill-opacity="0.5" stroke="#1E2838" stroke-width="1.5" />
    <circle cx="480" cy="212" r="85" fill="none" stroke="#00F5D4" stroke-width="1.2" stroke-dasharray="8 6" class="reticle-spin-center" />
    <circle cx="480" cy="212" r="60" fill="none" stroke="#FFB800" stroke-width="1" opacity="0.6" />

    <!-- Crosshair Lines -->
    <line x1="360" y1="212" x2="600" y2="212" stroke="#1E2838" stroke-width="1" stroke-dasharray="4 4" />
    <line x1="480" y1="92" x2="480" y2="332" stroke="#1E2838" stroke-width="1" stroke-dasharray="4 4" />

    <!-- Rotating Radar Scan Line -->
    <g class="radar-sweep-center">
      <line x1="480" y1="212" x2="480" y2="102" stroke="#00F5D4" stroke-width="2.5" stroke-linecap="round" filter="url(#cyanGlowFilter)" />
      <polygon points="480,212 550,132 480,102" fill="#00F5D4" fill-opacity="0.12" />
    </g>

    <!-- Center Hub Text: Includes prominent VS -->
    <text x="480" y="206" text-anchor="middle" font-family="'Orbitron', sans-serif" font-size="32" font-weight="900" fill="#FFB800" letter-spacing="3">VS</text>
    <text x="480" y="226" text-anchor="middle" font-family="'Courier New', monospace" font-size="8.5" font-weight="800" fill="#00F5D4" letter-spacing="1.5">TASK FORCE 141 CADENCE</text>
  </g>

  <!-- ======================================================== -->
  <!-- 01 // TOP TELEMETRY PROTOCOL HEADER                      -->
  <!-- ======================================================== -->
  <g transform="translate(38, 26)" font-family="'Courier New', Consolas, monospace">
    <polygon points="0,-4 8,-4 4,4" fill="#00F5D4" />
    <text x="14" y="2" font-size="10.5" font-weight="900" fill="#00F5D4" letter-spacing="1.5">TASK FORCE 141 PROTOCOL // ANNUAL COMBAT CADENCE ARENA</text>

    <!-- Status Beacon & Confirmed Lethal Strikes -->
    <circle cx="590" cy="-1" r="3.5" fill="#42FF9E" class="beacon-active" />
    <text x="884" y="2" text-anchor="end" font-size="9.5" font-weight="800" fill="#FFB800" letter-spacing="1.2">234 CONFIRMED LETHAL STRIKES // OVERDRIVE</text>
    <line x1="0" y1="12" x2="884" y2="12" stroke="#1A202C" stroke-width="1.2" />
  </g>

  <!-- ======================================================== -->
  <!-- 02 // DUAL COMBAT HUD (OPERATIVE VS DEFUSAL OBJECTIVE)    -->
  <!-- ======================================================== -->
  <g transform="translate(38, 52)">
    <!-- LEFT: SUJAL S KUMAR [OPERATIVE] -->
    <g transform="translate(0, 0)" font-family="'Courier New', Consolas, monospace">
      <text x="0" y="10" font-size="11" font-weight="900" fill="#00F5D4" letter-spacing="1">SUJAL S KUMAR</text>
      <text x="135" y="10" font-size="8.5" font-weight="700" fill="#8892B0">[GLOBAL ELITE // TF-141]</text>
      <text x="390" y="10" text-anchor="end" font-size="9.5" font-weight="900" fill="#00F5D4">100% HP</text>

      <!-- Health Bar Container -->
      <rect x="0" y="15" width="390" height="12" rx="2" fill="#0C1018" stroke="#1E2838" stroke-width="1" />
      <rect x="2" y="17" width="386" height="8" rx="1.5" fill="url(#cyanHpGrad)" class="hp-glow-pulse" />

      <!-- Tactical Armor / Primary Weapon Meter -->
      <text x="0" y="36" font-size="8" font-weight="800" fill="#FFB800" letter-spacing="1">ARMOR: 100% AP 🛡️ [AWP | HYPER BEAST]</text>
      <rect x="210" y="29" width="180" height="7" rx="1.5" fill="#181308" stroke="#3A2C10" stroke-width="0.8" />
      <rect x="211" y="30" width="178" height="5" rx="1" fill="url(#goldArmorGrad)" />
    </g>

    <!-- RIGHT: SITE-A DEFUSAL TARGET -->
    <g transform="translate(494, 0)" font-family="'Courier New', Consolas, monospace">
      <text x="0" y="10" font-size="9.5" font-weight="900" fill="#FFB800">DEFUSAL STATUS: 100%</text>
      <text x="250" y="10" text-anchor="end" font-size="8.5" font-weight="700" fill="#8892B0">[OBJECTIVE SECURED]</text>
      <text x="390" y="10" text-anchor="end" font-size="11" font-weight="900" fill="#FF3038" letter-spacing="1">CS2 SITE-A</text>

      <!-- Defusal Bar Container -->
      <rect x="0" y="15" width="390" height="12" rx="2" fill="#0C1018" stroke="#1E2838" stroke-width="1" />
      <rect x="2" y="17" width="386" height="8" rx="1.5" fill="url(#crimsonDefuseGrad)" />

      <!-- Defusal Kit Status -->
      <text x="0" y="36" font-size="8" font-weight="800" fill="#00F5D4" letter-spacing="1">DEFUSAL KIT: ACTIVE ⚡ [BOMB NEUTRALIZED]</text>
      <rect x="230" y="29" width="160" height="7" rx="1.5" fill="#081414" stroke="#143232" stroke-width="0.8" />
      <rect x="231" y="30" width="158" height="5" rx="1" fill="#00F5D4" />
    </g>
  </g>

  <!-- ======================================================== -->
  <!-- 03 // LEFT TACTICAL HUD BADGE (REPLACES OLD STICK FIGURE) -->
  <!-- ======================================================== -->
  <g transform="translate(38, 140)">
    <!-- Operative Tech Frame -->
    <rect x="0" y="0" width="108" height="180" rx="6" fill="#080C14" stroke="#1E2838" stroke-width="1.2" />
    <rect x="4" y="4" width="100" height="172" rx="4" fill="none" stroke="#00F5D4" stroke-width="0.8" stroke-dasharray="4 4" opacity="0.4" />
    
    <!-- Top Callout -->
    <rect x="8" y="10" width="92" height="18" rx="2" fill="#0E1824" stroke="#00F5D4" stroke-width="0.8" />
    <text x="54" y="22.5" text-anchor="middle" font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="#00F5D4" letter-spacing="1">TF-141 LEAD</text>

    <!-- Radar Icon / Gunner Reticle -->
    <circle cx="54" cy="62" r="24" fill="#060A10" stroke="#00F5D4" stroke-width="1.4" filter="url(#cyanGlowFilter)" />
    <circle cx="54" cy="62" r="16" fill="none" stroke="#FFB800" stroke-width="1" stroke-dasharray="3 3" />
    <circle cx="54" cy="62" r="3" fill="#FFF" />
    <line x1="30" y1="62" x2="78" y2="62" stroke="#00F5D4" stroke-width="1" opacity="0.7" />
    <line x1="54" y1="38" x2="54" y2="86" stroke="#00F5D4" stroke-width="1" opacity="0.7" />

    <!-- Name & Codename -->
    <text x="54" y="106" text-anchor="middle" font-family="'Orbitron', sans-serif" font-size="9" font-weight="900" fill="#FFFFFF">SUJAL S K</text>
    <text x="54" y="118" text-anchor="middle" font-family="'Courier New', monospace" font-size="7.5" font-weight="800" fill="#00F5D4">CS2 OPERATIVE</text>

    <line x1="12" y1="126" x2="96" y2="126" stroke="#1E2838" stroke-width="1" />

    <text x="12" y="138" font-family="'Courier New', monospace" font-size="7" fill="#8892B0">ROLE: <tspan fill="#FFF" font-weight="700">AI / FULL-STACK</tspan></text>
    <text x="12" y="150" font-family="'Courier New', monospace" font-size="7" fill="#8892B0">TIER: <tspan fill="#FFB800" font-weight="700">GLOBAL ELITE</tspan></text>
    <text x="12" y="162" font-family="'Courier New', monospace" font-size="7" fill="#8892B0">LOC: <tspan fill="#00F5D4" font-weight="700">UDUPI, IN</tspan></text>
  </g>

  <!-- ======================================================== -->
  <!-- 04 // RIGHT TARGET HUD BADGE (REPLACES OLD STICK FIGURE) -->
  <!-- ======================================================== -->
  <g transform="translate(814, 140)">
    <!-- Site-A Target Frame -->
    <rect x="0" y="0" width="108" height="180" rx="6" fill="#14080A" stroke="#281E20" stroke-width="1.2" />
    <rect x="4" y="4" width="100" height="172" rx="4" fill="none" stroke="#FF3038" stroke-width="0.8" stroke-dasharray="4 4" opacity="0.4" />

    <!-- Top Callout -->
    <rect x="8" y="10" width="92" height="18" rx="2" fill="#240E10" stroke="#FF3038" stroke-width="0.8" />
    <text x="54" y="22.5" text-anchor="middle" font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="#FF3038" letter-spacing="1">DEFUSAL ZONE</text>

    <!-- Bomb Reticle Icon -->
    <circle cx="54" cy="62" r="24" fill="#0C0506" stroke="#FF3038" stroke-width="1.4" />
    <circle cx="54" cy="62" r="16" fill="none" stroke="#FF8C00" stroke-width="1" stroke-dasharray="3 3" />
    <text x="54" y="67" text-anchor="middle" font-family="'Orbitron', sans-serif" font-size="14" font-weight="900" fill="#FF3038">A</text>

    <!-- Target Title -->
    <text x="54" y="106" text-anchor="middle" font-family="'Orbitron', sans-serif" font-size="9" font-weight="900" fill="#FFFFFF">SITE-A DEFUSED</text>
    <text x="54" y="118" text-anchor="middle" font-family="'Courier New', monospace" font-size="7.5" font-weight="800" fill="#FF8C00">52 WEEKS CLEAR</text>

    <line x1="12" y1="126" x2="96" y2="126" stroke="#281E20" stroke-width="1" />

    <text x="12" y="138" font-family="'Courier New', monospace" font-size="7" fill="#8892B0">TIMER: <tspan fill="#42FF9E" font-weight="700">00:00 [DEFUSED]</tspan></text>
    <text x="12" y="150" font-family="'Courier New', monospace" font-size="7" fill="#8892B0">HEAT: <tspan fill="#FF3038" font-weight="700">MAX COMMITS</tspan></text>
    <text x="12" y="162" font-family="'Courier New', monospace" font-size="7" fill="#8892B0">STATUS: <tspan fill="#42FF9E" font-weight="700">NEUTRALIZED</tspan></text>
  </g>

  <!-- ======================================================== -->
  <!-- 05 // REAL GITHUB 53-WEEK CONTRIBUTION MATRIX            -->
  <!-- ======================================================== -->
  ${existingTileMatrixSvg}

  <!-- ======================================================== -->
  <!-- 06 // BOTTOM TACTICAL TOOLBAR & HEATMAP LEGEND           -->
  <!-- ======================================================== -->
  <g transform="translate(38, 372)" font-family="'Courier New', Consolas, monospace">
    <!-- Active Loadout Chips -->
    <g transform="translate(0, 0)">
      <text x="0" y="10" font-size="8.5" font-weight="800" fill="#8892B0">LOADOUT:</text>
      
      <rect x="60" y="0" width="30" height="14" rx="2" fill="#0C1420" stroke="#00F5D4" stroke-width="0.8" />
      <text x="75" y="10" text-anchor="middle" font-size="7.5" font-weight="800" fill="#00F5D4">PY</text>

      <rect x="96" y="0" width="46" height="14" rx="2" fill="#0C1420" stroke="#00F5D4" stroke-width="0.8" />
      <text x="119" y="10" text-anchor="middle" font-size="7.5" font-weight="800" fill="#00F5D4">FASTAPI</text>

      <rect x="148" y="0" width="46" height="14" rx="2" fill="#181408" stroke="#FFB800" stroke-width="0.8" />
      <text x="171" y="10" text-anchor="middle" font-size="7.5" font-weight="800" fill="#FFB800">NEXT.JS</text>

      <rect x="200" y="0" width="30" height="14" rx="2" fill="#181408" stroke="#FFB800" stroke-width="0.8" />
      <text x="215" y="10" text-anchor="middle" font-size="7.5" font-weight="800" fill="#FFB800">TS</text>

      <rect x="236" y="0" width="42" height="14" rx="2" fill="#180C10" stroke="#FF3038" stroke-width="0.8" />
      <text x="257" y="10" text-anchor="middle" font-size="7.5" font-weight="800" fill="#FF3038">DOCKER</text>

      <rect x="284" y="0" width="60" height="14" rx="2" fill="#140A18" stroke="#A855F7" stroke-width="0.8" />
      <text x="314" y="10" text-anchor="middle" font-size="7.5" font-weight="800" fill="#A855F7">AI-AGENTS</text>
    </g>

    <!-- Heatmap Level Legend -->
    <g transform="translate(620, 0)">
      <text x="0" y="10" font-size="8" font-weight="700" fill="#8892B0">LESS</text>
      <rect x="36" y="1" width="10" height="10" rx="2" fill="#101520" stroke="#1A2232" stroke-width="0.8" />
      <rect x="52" y="1" width="10" height="10" rx="2" fill="#0E3D3A" stroke="#165C58" stroke-width="0.8" />
      <rect x="68" y="1" width="10" height="10" rx="2" fill="#00F5D4" stroke="#55E6FF" stroke-width="0.8" />
      <rect x="84" y="1" width="10" height="10" rx="2" fill="#FFB800" stroke="#FFE169" stroke-width="0.8" />
      <rect x="100" y="1" width="10" height="10" rx="2" fill="#FF3038" stroke="#FF7B80" stroke-width="0.8" />
      <text x="120" y="10" font-size="8" font-weight="900" fill="#FF3038" letter-spacing="1">OVERDRIVE</text>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 3. TASK FORCE 141 SQUAD ROSTER (Section 05 Roster)
// -------------------------------------------------------------
function generateTaskForceRosterSvg() {
  const squad = [
    {
      codename: 'SUJAL05091',
      tag: 'LEAD ARCHITECT',
      tagColor: '#FFB800',
      title: 'SUJAL S KUMAR',
      subtitle: 'FULL-STACK & AI ARCHITECT',
      primary: 'Next.js 14 • FastAPI • LLM Agents',
      mastery: 'Agentic Systems & Cloud Architecture',
      status: 'MISSION COMMANDER // ACTIVE',
      statusColor: '#FFB800',
      icon: '⚡'
    },
    {
      codename: 'NEURAL CORE',
      tag: 'INTEL SPECIALIST',
      tagColor: '#00F5D4',
      title: 'NEURAL AGENTS',
      subtitle: 'GENERATIVE AI & DEEP RAG',
      primary: 'OpenAI • LLaMA • LangChain • Ollama',
      mastery: 'Multi-Agent Orchestration & Vector Stores',
      status: 'NEURAL ENGINE: SYNCHRONIZED',
      statusColor: '#00F5D4',
      icon: '🧠'
    },
    {
      codename: 'VISION OPS',
      tag: 'RECON SPECIALIST',
      tagColor: '#FF3038',
      title: 'COMPUTER VISION',
      subtitle: 'EDGE DETECTION & MEDICAL AI',
      primary: 'PyTorch • OpenCV • TensorFlow • MediaPipe',
      mastery: 'Deepfake Forensics & Tissue Adhesion',
      status: 'SENSORS: TARGET LOCKED',
      statusColor: '#FF3038',
      icon: '👁️'
    },
    {
      codename: 'API FORGE',
      tag: 'HIGH-VELOCITY',
      tagColor: '#A855F7',
      title: 'BACKEND FORGE',
      subtitle: 'HIGH-THROUGHPUT MICROSERVICES',
      primary: 'FastAPI • Flask • Express • WebSockets',
      mastery: 'Zero-Latency REST & Real-time Streams',
      status: 'BANDWIDTH: 100% OPTIMAL',
      statusColor: '#A855F7',
      icon: '🔌'
    },
    {
      codename: 'CYBER SHIELD',
      tag: 'SENTINEL',
      tagColor: '#10B981',
      title: 'CYBER SENTINEL',
      subtitle: 'HEURISTIC DEFENSE & PHISHGUARD',
      primary: 'Android Security • ML Kit • Biometrics',
      mastery: 'Heuristic Threat Defense & SOS Mesh',
      status: 'FIREWALL: IMPENETRABLE',
      statusColor: '#10B981',
      icon: '🛡️'
    },
    {
      codename: 'MOBILE MESH',
      tag: 'FIELD AGENT',
      tagColor: '#06B6D4',
      title: 'MOBILE CORPS',
      subtitle: 'CROSS-PLATFORM ENGINEERING',
      primary: 'Flutter • Kotlin • Jetpack Compose',
      mastery: 'CameraX Sensors & On-Device ML',
      status: 'TACTICAL LINK: ENCRYPTED',
      statusColor: '#06B6D4',
      icon: '📱'
    },
    {
      codename: 'DATA RADAR',
      tag: 'MAINFRAME',
      tagColor: '#F59E0B',
      title: 'DATA RADAR',
      subtitle: 'VECTOR LAKES & DRIFT TELEMETRY',
      primary: 'MongoDB • Databricks • Delta Lake • Supabase',
      mastery: 'Population Stability Index & Lakehouses',
      status: 'LAKEHOUSE: REAL-TIME',
      statusColor: '#F59E0B',
      icon: '🗄️'
    },
    {
      codename: 'DEVOPS CORPS',
      tag: 'LOGISTICS',
      tagColor: '#3B82F6',
      title: 'DEVOPS LOGISTICS',
      subtitle: 'MIL-SPEC CI/CD INFRASTRUCTURE',
      primary: 'Docker • Cloud Run • AWS S3 • GitHub Actions',
      mastery: 'Container Mesh & Continuous Delivery',
      status: 'PIPELINE: STANDBY ARMED',
      statusColor: '#3B82F6',
      icon: '🛠️'
    }
  ];

  let cardsSvg = '';
  squad.forEach((c, idx) => {
    const col = idx % 4;
    const row = Math.floor(idx / 4);
    const x = 30 + col * 228;
    const y = 64 + row * 106;

    cardsSvg += `
    <!-- Card ${idx + 1}: ${c.codename} -->
    <g transform="translate(${x}, ${y})">
      <rect width="216" height="96" rx="6" fill="#090E17" stroke="#1A2232" stroke-width="1.2" />
      <rect width="216" height="96" rx="6" fill="none" stroke="${c.tagColor}" stroke-width="0.8" opacity="0.35" />
      <polygon points="6,6 18,6 6,18" fill="${c.tagColor}" />

      <!-- Tag -->
      <rect x="136" y="6" width="74" height="14" rx="2" fill="#060A10" stroke="${c.tagColor}" stroke-width="0.7" />
      <text x="173" y="16.5" text-anchor="middle" font-family="'Courier New', Consolas, monospace" font-size="6.8" font-weight="900" fill="${c.tagColor}" letter-spacing="0.5">${c.tag}</text>

      <!-- Icon & Name -->
      <text x="12" y="24" font-family="'Orbitron', sans-serif" font-size="11.5" font-weight="900" fill="#FFF" letter-spacing="0.5">${c.icon} ${c.codename}</text>

      <!-- Subtitle -->
      <text x="12" y="38" font-family="'Courier New', Consolas, monospace" font-size="7.5" font-weight="800" fill="#8892B0" letter-spacing="0.3">${c.subtitle}</text>

      <!-- Divider -->
      <line x1="12" y1="46" x2="204" y2="46" stroke="#1A2232" stroke-width="0.8" />

      <!-- Weapon / Stack -->
      <text x="12" y="58" font-family="'Courier New', Consolas, monospace" font-size="6.8" fill="#6A7280">LOADOUT:</text>
      <text x="56" y="58" font-family="'Courier New', Consolas, monospace" font-size="7" font-weight="700" fill="#E2E8F0">${c.primary}</text>

      <!-- Mastery -->
      <text x="12" y="72" font-family="'Courier New', Consolas, monospace" font-size="6.8" fill="#6A7280">MASTERY:</text>
      <text x="56" y="72" font-family="'Courier New', Consolas, monospace" font-size="7" font-weight="800" fill="${c.tagColor}">${c.mastery}</text>

      <!-- Status dot -->
      <circle cx="12" cy="85" r="2.5" fill="${c.statusColor}" />
      <text x="20" y="87" font-family="'Courier New', Consolas, monospace" font-size="6.5" font-weight="800" fill="#8892B0">${c.status}</text>
    </g>`;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 295" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="tfRosterBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#060910" />
      <stop offset="50%" stop-color="#04060A" />
      <stop offset="100%" stop-color="#090E17" />
    </linearGradient>

    <linearGradient id="rosterLaserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF3038" stop-opacity="0" />
      <stop offset="50%" stop-color="#FFB800" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#00F5D4" stop-opacity="0" />
    </linearGradient>

    <style>
      @keyframes rosterLaserMotion {
        0% { stroke-dashoffset: 960; }
        50% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -960; }
      }
      .roster-laser {
        stroke-dasharray: 220 740;
        animation: rosterLaserMotion 5s linear infinite;
      }
    </style>
  </defs>

  <rect width="960" height="295" rx="10" fill="url(#tfRosterBg)" stroke="#161B25" stroke-width="1.6" />

  <!-- Perimeter Laser -->
  <line x1="0" y1="2" x2="960" y2="2" stroke="url(#rosterLaserGrad)" stroke-width="2" class="roster-laser" />

  <!-- Header Section -->
  <g transform="translate(30, 32)" font-family="'Courier New', Consolas, monospace">
    <polygon points="0,0 8,0 4,8" fill="#FFB800" />
    <text x="16" y="6" font-size="11" font-weight="900" fill="#FFB800" letter-spacing="2">TASK FORCE 141 // SPECIAL OPERATIONS &amp; ENGINEERING SQUAD</text>
    <text x="900" y="6" text-anchor="end" font-size="8.5" font-weight="800" fill="#00F5D4" letter-spacing="1">8/8 DISCIPLINES DEPLOYED // ARCHIVE 2026</text>
    <line x1="0" y1="18" x2="900" y2="18" stroke="#1A202C" stroke-width="1.2" />
  </g>

  <!-- 8 Operative Discipline Cards -->
  ${cardsSvg}
</svg>`;
}

// -------------------------------------------------------------
// 4. SAMURAI TELEMETRY GRID // WARZONE TELEMETRY (Section 08)
// -------------------------------------------------------------
function updateTelemetryGridSvg(existingSvg) {
  let updated = existingSvg;
  // Replace RONIN METRICS with WARZONE METRICS // SUJAL S KUMAR
  updated = updated.replace(/RONIN METRICS/g, 'WARZONE METRICS // SUJAL S KUMAR');
  updated = updated.replace(/#FF3038" letter-spacing="1">WARZONE METRICS/g, '#FFB800" letter-spacing="1">WARZONE METRICS');
  return updated;
}

// -------------------------------------------------------------
// EXECUTION
// -------------------------------------------------------------

// Read existing contribution-grid.svg to extract the real tile matrix
const origContribGridPath = path.join(assetsDir, 'contribution-grid.svg');
const origContribGridContent = fs.readFileSync(origContribGridPath, 'utf8');

// Extract lines 412 through 800+ of the contribution grid
const matrixStartMarker = '<!-- Month Labels -->';
const matrixEndMarker = '<!-- ======================================================== -->\n  <!-- 06 // BOTTOM ACTION STATUS BAR & HEATMAP LEGEND       -->';
let tileMatrixSvg = '';

if (origContribGridContent.includes(matrixStartMarker)) {
  const parts = origContribGridContent.split(matrixStartMarker);
  const afterStart = matrixStartMarker + parts[1];
  if (afterStart.includes('<!-- 06 // BOTTOM')) {
    tileMatrixSvg = afterStart.split('<!-- 06 // BOTTOM')[0];
  } else if (afterStart.includes('</svg>')) {
    tileMatrixSvg = afterStart.split('</svg>')[0];
  }
}

if (!tileMatrixSvg || tileMatrixSvg.length < 500) {
  console.error('Failed to extract tile matrix, using fallback extraction');
  const match = origContribGridContent.match(/(<text x="168\.0" y="154"[\s\S]*?<\/g>\s*<\/g>)/);
  if (match) {
    tileMatrixSvg = match[1];
  }
}

console.log('Extracted authentic contribution tile matrix length:', tileMatrixSvg.length);

// Generate SVGs
const commitRadarSvg = generateCommitRadarSvg();
const contribGridSvg = generateContributionGridSvg(tileMatrixSvg);
const tfRosterSvg = generateTaskForceRosterSvg();

const origTelemetryGrid = fs.readFileSync(path.join(assetsDir, 'samurai-telemetry-grid.svg'), 'utf8');
const telemetryGridSvg = updateTelemetryGridSvg(origTelemetryGrid);

// Target files to write
const filesToWrite = [
  // Commit radar
  { name: 'commit-radar-active.svg', content: commitRadarSvg },
  { name: 'commit-radar-active-v4.svg', content: commitRadarSvg },
  // Contribution grid
  { name: 'contribution-grid.svg', content: contribGridSvg },
  { name: 'contribution-grid-v4.svg', content: contribGridSvg },
  // Squad Roster
  { name: 'shadow-fight-roster.svg', content: tfRosterSvg },
  { name: 'shadow-fight-roster-v4.svg', content: tfRosterSvg },
  // Telemetry grid
  { name: 'samurai-telemetry-grid.svg', content: telemetryGridSvg },
  { name: 'samurai-telemetry-grid-v4.svg', content: telemetryGridSvg },
];

// Write to both assets/ and codexanjan-main/assets/
const targetDirs = [assetsDir, nestedAssetsDir];

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  for (const f of filesToWrite) {
    const fullPath = path.join(dir, f.name);
    fs.writeFileSync(fullPath, f.content, 'utf8');
    console.log(`✓ Wrote: ${fullPath} (${f.content.length} bytes)`);
  }
}

console.log('All SVGs generated and synchronized successfully!');
