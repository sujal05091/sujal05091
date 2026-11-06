const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const b64Path = path.join(rootDir, 'assets/profile_base64.txt');
const b64 = fs.readFileSync(b64Path, 'utf8').trim();

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="dosBgV2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080A0E" />
      <stop offset="50%" stop-color="#050608" />
      <stop offset="100%" stop-color="#0E1118" />
    </linearGradient>
    <linearGradient id="redGradText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF3038" />
      <stop offset="100%" stop-color="#FF5E65" />
    </linearGradient>
    <radialGradient id="avatarGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF3038" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#FF3038" stop-opacity="0" />
    </radialGradient>
    <filter id="dosRedGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <clipPath id="avatarCircle">
      <circle cx="0" cy="0" r="68" />
    </clipPath>

    <style>
      @keyframes radarSpinSlow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes pulseAuraAvatar {
        0%, 100% { transform: scale(0.98); opacity: 0.7; }
        50% { transform: scale(1.03); opacity: 1; }
      }
      @keyframes borderEdgeTraceDossier {
        0% { stroke-dashoffset: 2700; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes dossierLaserScan {
        0% { transform: translateY(0px); opacity: 0; }
        15% { opacity: 0.6; }
        85% { opacity: 0.6; }
        100% { transform: translateY(470px); opacity: 0; }
      }
      @keyframes bracketGlow {
        0%, 100% { opacity: 0.8; filter: drop-shadow(0 0 2px #FF3038); }
        50% { opacity: 1; filter: drop-shadow(0 0 8px #FF3038); }
      }
      .spin-avatar-reticle {
        transform-origin: 730px 220px;
        animation: radarSpinSlow 16s linear infinite;
      }
      .pulse-avatar-frame {
        transform-origin: 730px 220px;
        animation: pulseAuraAvatar 4s ease-in-out infinite;
      }
      .border-edge-laser {
        stroke-dasharray: 200 2500;
        animation: borderEdgeTraceDossier 5.5s linear infinite;
      }
      .dossier-scanner {
        animation: dossierLaserScan 6s linear infinite;
      }
      .bracket-anim {
        animation: bracketGlow 3.5s ease-in-out infinite;
      }
    </style>
  </defs>

  <!-- Background Base -->
  <rect width="880" height="470" rx="12" fill="url(#dosBgV2)" />
  <rect x="1" y="1" width="878" height="468" rx="11" fill="none" stroke="#FF3038" stroke-width="2" opacity="0.85" />
  <rect x="1" y="1" width="878" height="468" rx="11" fill="none" stroke="#FF5E65" stroke-width="2.5" class="border-edge-laser" opacity="1" />

  <!-- Tactical Sweeping Laser Scan Line -->
  <g class="dossier-scanner">
    <line x1="15" y1="0" x2="865" y2="0" stroke="#FF3038" stroke-width="1.5" filter="url(#dosRedGlow)" />
  </g>

  <!-- Tactical Corner Brackets -->
  <g class="bracket-anim">
    <polygon points="15,15 50,15 15,50" fill="#FF3038" />
    <polygon points="865,15 830,15 865,50" fill="#FF3038" />
    <polygon points="15,455 50,455 15,420" fill="#FF3038" />
    <polygon points="865,455 830,455 865,420" fill="#FF3038" />
  </g>

  <!-- Top Security Classification Bar -->
  <g transform="translate(45, 42)" font-family="'Courier New', Consolas, monospace">
    <rect x="0" y="-12" width="270" height="22" rx="2" fill="#12161F" stroke="#FF3038" stroke-width="1" />
    <text x="10" y="3" font-size="11" font-weight="800" fill="#FF3038" letter-spacing="2">SECURITY DOSSIER // CLASSIFIED</text>
    <text x="540" y="3" font-size="10" fill="#6A7280" letter-spacing="1">RECORD ID: #00-534B-RONIN</text>
    <line x1="0" y1="18" x2="790" y2="18" stroke="#1C222E" stroke-width="1.2" />
  </g>

  <!-- LEFT COLUMN: OPERATIVE DOSSIER METRICS -->
  <g transform="translate(45, 82)" font-family="'Courier New', Consolas, monospace">
    <!-- Row 1: Operative & Codename -->
    <g transform="translate(0, 0)">
      <text x="0" y="0" font-size="10" fill="#6A7280" letter-spacing="2">OPERATIVE</text>
      <text x="0" y="20" font-size="16" font-weight="900" fill="#F4F4F2" letter-spacing="1.5">SUJAL S KUMAR</text>

      <text x="260" y="0" font-size="10" fill="#6A7280" letter-spacing="2">CODENAME</text>
      <text x="260" y="20" font-size="16" font-weight="900" fill="url(#redGradText)" letter-spacing="1.5">SUJAL05091</text>
    </g>

    <!-- Dividing Line -->
    <line x1="0" y1="32" x2="560" y2="32" stroke="#1C222E" stroke-width="1" />

    <!-- Row 2: Role & Currently Learning -->
    <g transform="translate(0, 52)">
      <!-- Role Column -->
      <g transform="translate(0, 0)">
        <text x="0" y="0" font-size="11" font-weight="800" fill="#FF3038" letter-spacing="2">ROLE</text>
        <g transform="translate(0, 18)" font-size="11" fill="#C5CAD4" font-weight="700">
          <text x="0" y="0">&gt; AI &amp; Full-Stack Developer</text>
          <text x="0" y="18">&gt; B.E. AI &amp; Data Science (8.2)</text>
          <text x="0" y="36">&gt; Intern @ Accolade Tech Solutions</text>
        </g>
      </g>

      <!-- Currently Learning Column -->
      <g transform="translate(260, 0)">
        <text x="0" y="0" font-size="11" font-weight="800" fill="#55E6FF" letter-spacing="2">CURRENT FOCUS</text>
        <g transform="translate(0, 18)" font-size="11" fill="#A8ADB7">
          <text x="0" y="0">&gt; Agentic AI &amp; RAG Pipelines</text>
          <text x="0" y="18">&gt; Computer Vision &amp; Edge AI</text>
          <text x="0" y="36">&gt; Scalable Cloud &amp; Microservices</text>
        </g>
      </g>
    </g>

    <!-- Dividing Line -->
    <line x1="0" y1="122" x2="560" y2="122" stroke="#1C222E" stroke-width="1" />

    <!-- Row 3: Interests & Focus -->
    <g transform="translate(0, 142)">
      <text x="0" y="0" font-size="11" font-weight="800" fill="#FF3038" letter-spacing="2">CORE DISCIPLINES</text>
      <!-- Badges / 2x2 Grid -->
      <g transform="translate(0, 18)" font-size="11" fill="#E2E8F0">
        <g transform="translate(0, 0)">
          <rect x="0" y="-12" width="240" height="22" rx="3" fill="#10141D" stroke="#222936" stroke-width="1" />
          <text x="10" y="2">&gt; Generative AI &amp; LLM Pipelines</text>
        </g>
        <g transform="translate(260, 0)">
          <rect x="0" y="-12" width="240" height="22" rx="3" fill="#10141D" stroke="#222936" stroke-width="1" />
          <text x="10" y="2">&gt; Full-Stack &amp; Mobile SaaS</text>
        </g>
        <g transform="translate(0, 28)">
          <rect x="0" y="-12" width="240" height="22" rx="3" fill="#10141D" stroke="#222936" stroke-width="1" />
          <text x="10" y="2">&gt; Cybersecurity &amp; Threat AI</text>
        </g>
        <g transform="translate(260, 28)">
          <rect x="0" y="-12" width="240" height="22" rx="3" fill="#10141D" stroke="#222936" stroke-width="1" />
          <text x="10" y="2">&gt; IoT Mesh &amp; Assistive Tech</text>
        </g>
      </g>
    </g>

    <!-- Dividing Line -->
    <line x1="0" y1="212" x2="560" y2="212" stroke="#1C222E" stroke-width="1" />

    <!-- Row 4: Operative Creed -->
    <g transform="translate(0, 234)">
      <text x="0" y="0" font-size="10" fill="#6A7280" letter-spacing="2">OPERATIVE CREED</text>
      <g transform="translate(0, 18)">
        <rect x="0" y="-12" width="540" height="26" rx="3" fill="#141924" stroke="#FF3038" stroke-width="1" />
        <line x1="0" y1="-12" x2="0" y2="14" stroke="#FF3038" stroke-width="4" />
        <text x="16" y="5" font-size="11" font-weight="800" fill="#F4F4F2" letter-spacing="1.2">"Build with discipline. Engineer with precision. Deploy with purpose."</text>
      </g>
    </g>
  </g>

  <!-- RIGHT COLUMN: BIOMETRIC PROFILE PHOTO HUD -->
  <g transform="translate(730, 225)">
    <!-- Ambient Red Glow -->
    <circle cx="0" cy="0" r="85" fill="url(#avatarGlow)" class="pulse-avatar-frame" />

    <!-- Outer Rotating Radar Ring -->
    <circle cx="0" cy="0" r="80" fill="none" stroke="#222832" stroke-width="1.5" />
    <circle cx="0" cy="0" r="78" fill="none" stroke="#FF3038" stroke-width="1.5" stroke-dasharray="12 8" class="spin-avatar-reticle" opacity="0.8" />
    <circle cx="0" cy="0" r="71" fill="none" stroke="#55E6FF" stroke-width="1" stroke-opacity="0.4" />

    <!-- Profile Picture Clipped to Circle -->
    <image href="data:image/png;base64,${b64}" x="-68" y="-68" width="136" height="136" clip-path="url(#avatarCircle)" preserveAspectRatio="xMidYMid slice" />

    <!-- Cybernetic Glass Overlay Ring on Top of Image -->
    <circle cx="0" cy="0" r="68" fill="none" stroke="#FF3038" stroke-width="2.5" filter="url(#dosRedGlow)" />
    <circle cx="0" cy="0" r="68" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.5" />

    <!-- Red Corner Targeting Brackets -->
    <path d="M -90 -90 L -72 -90 M -90 -90 L -90 -72" stroke="#FF3038" stroke-width="2" />
    <path d="M 90 -90 L 72 -90 M 90 -90 L 90 -72" stroke="#FF3038" stroke-width="2" />
    <path d="M -90 90 L -72 90 M -90 90 L -90 72" stroke="#FF3038" stroke-width="2" />
    <path d="M 90 90 L 72 90 M 90 90 L 90 72" stroke="#FF3038" stroke-width="2" />

    <!-- Biometric Verification Badge Under Avatar -->
    <g transform="translate(0, 112)" font-family="'Courier New', Consolas, monospace">
      <rect x="-75" y="-12" width="150" height="24" rx="3" fill="#0E121A" stroke="#222834" stroke-width="1" />
      <circle cx="-58" cy="0" r="3.5" fill="#42FF9E" />
      <text x="-48" y="4" font-size="9.5" font-weight="800" fill="#F4F4F2" letter-spacing="1.5">BIOMETRIC OK</text>
    </g>

    <text x="0" y="145" text-anchor="middle" font-family="'Courier New', Consolas, monospace" font-size="9" fill="#6A7280" letter-spacing="2">TACTICAL ID // ACTIVE</text>
  </g>
</svg>`;

const v2Path = path.join(rootDir, 'assets/operative-dossier-v2.svg');
const v1Path = path.join(rootDir, 'assets/operative-dossier.svg');

fs.writeFileSync(v2Path, svg);
fs.writeFileSync(v1Path, svg);
console.log('Operative dossier successfully generated at:', v2Path);
