const fs = require('fs');
const transcriptPath = 'C:/Users/sujal/.gemini/antigravity/brain/218f1de6-e399-43fe-b3db-0809399de643/.system_generated/logs/transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').trim().split('\n');

for (let i = lines.length - 1; i >= 0; i--) {
  try {
    const obj = JSON.parse(lines[i]);
    if (obj.source === 'USER_EXPLICIT') {
      console.log('Step index:', obj.step_index);
      console.log('Media:', JSON.stringify(obj.media, null, 2));
      console.log('Content:', obj.content);
      break;
    }
  } catch (e) {}
}
