const fs = require('fs');
const path = require('path');

const rosterPath = path.resolve(__dirname, '../assets/shadow-fight-roster.svg');
let content = fs.readFileSync(rosterPath, 'utf8');

// Update disciplines
content = content.replace(/TypeScript • Express API/g, 'Python • FastAPI Engine');
content = content.replace(/C\+\+ • Algorithmic Core/g, 'PyTorch • Deep Learning');
content = content.replace(/System Design • High Scale/g, 'OpenCV • Computer Vision');
content = content.replace(/Web3 • Smart Contracts/g, 'Flutter • Kotlin Mobile');
content = content.replace(/Zero-Trust • Cyber Vault/g, 'Agentic AI • LLM Pipelines');
content = content.replace(/Linux • Kernel Telemetry/g, 'Docker • Cloud Run • S3');
content = content.replace(/Distributed Systems • HA/g, 'Cybersecurity • IoT Mesh');

fs.writeFileSync(rosterPath, content);
console.log('Successfully updated shadow-fight-roster.svg');
