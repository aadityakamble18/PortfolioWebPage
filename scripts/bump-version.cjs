const fs = require('fs');
const path = require('path');

const versionFile = path.join(__dirname, '../src/version.json');
try {
  const data = JSON.parse(fs.readFileSync(versionFile, 'utf8'));
  let currentVersion = Number(data.version);
  currentVersion += 0.001;
  data.version = currentVersion;
  
  fs.writeFileSync(versionFile, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(Version bumped to );
} catch (e) {
  console.error('Failed to bump version:', e);
  process.exit(1);
}
