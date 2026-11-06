const fs = require('fs');

const readme = fs.readFileSync('README.md', 'utf8');
const matches = readme.match(/anjan/gi);
console.log('Matches for anjan in README.md:', matches ? matches.length : 0);

const assets = fs.readdirSync('assets');
console.log('Total asset files in assets/:', assets.length);
