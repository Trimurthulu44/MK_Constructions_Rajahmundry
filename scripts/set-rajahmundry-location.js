import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/images.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all locations with "Rajahmundry"
content = content.replace(/"location":\s*"[^"]+"/g, '"location": "Rajahmundry"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated all image locations to Rajahmundry in src/data/images.ts');
