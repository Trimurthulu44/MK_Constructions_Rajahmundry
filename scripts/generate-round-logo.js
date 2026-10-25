import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function main() {
  const inputFile = 'C:/Users/Karthik/.gemini/antigravity/brain/8fc5be65-6fb0-4636-9aa8-9a8ae79aaea4/.user_uploaded/media_1792911280450_73b5ac58.jpg';
  
  if (!fs.existsSync(inputFile)) {
    throw new Error('Input file does not exist: ' + inputFile);
  }

  // 1. Copy to original folder
  fs.copyFileSync(inputFile, 'public/images/original/mk-constructions-official-logo.jpg');
  console.log('Saved original to public/images/original/mk-constructions-official-logo.jpg');

  // 2. Create the anti-aliased circular mask
  // 1024x1024 with circle at (512, 512), radius 511.5
  const size = 1024;
  const r = 511.5;
  const maskSvg = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="512" cy="512" r="${r}" fill="#ffffff"/></svg>`
  );

  // Generate 1024x1024 circular PNG with transparency outside
  const roundLogoBuffer = await sharp(inputFile)
    .resize(size, size)
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  // Save to public/images/logo-circle.png
  fs.writeFileSync('public/images/logo-circle.png', roundLogoBuffer);
  console.log('Saved public/images/logo-circle.png');

  // Save to public/images/logo.png as well
  fs.writeFileSync('public/images/logo.png', roundLogoBuffer);
  console.log('Saved public/images/logo.png');

  // Copy to public/assets/aistudio/logo-circle.png
  if (fs.existsSync('public/assets/aistudio')) {
    fs.writeFileSync('public/assets/aistudio/logo-circle.png', roundLogoBuffer);
    console.log('Saved public/assets/aistudio/logo-circle.png');
  }

  // Generate WebP version for optimal web performance
  await sharp(roundLogoBuffer)
    .webp({ quality: 95 })
    .toFile('public/images/logo-circle.webp');
  console.log('Saved public/images/logo-circle.webp');

  // Generate favicon versions
  await sharp(roundLogoBuffer)
    .resize(192, 192)
    .png()
    .toFile('public/favicon.png');
  console.log('Saved public/favicon.png');

  await sharp(roundLogoBuffer)
    .resize(48, 48)
    .png()
    .toFile('public/favicon.ico');
  console.log('Saved public/favicon.ico');

  console.log('All logo assets successfully updated and permanently replaced!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
