const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
fs.mkdirSync(output, { recursive: true });
for (const file of ['index.html', 'invoices.html', 'advisory.html', 'advisory-config.js', 'coastline-all-trades-demo.html', 'assets']) {
  fs.cpSync(path.join(root, file), path.join(output, file), { recursive: true });
}
console.log('Built Omni Digital Solutions into dist/');
