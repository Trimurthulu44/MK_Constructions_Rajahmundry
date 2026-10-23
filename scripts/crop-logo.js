import sharp from 'sharp';
import fs from 'fs';

async function main() {
  const meta = await sharp('public/images/logo.png').metadata();
  console.log('Original logo:', meta);

  // The circular emblem is centered around (296, 260) with radius 249
  const cx = 296;
  const cy = 260;
  const r = 249;
  const size = r * 2;

  const circleMask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${r}" cy="${r}" r="${r}" fill="#fff"/></svg>`
  );

  await sharp('public/images/logo.png')
    .extract({ left: cx - r, top: cy - r, width: size, height: size })
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toFile('public/images/logo-circle.png');

  // Also create a WebP version for maximum speed
  await sharp('public/images/logo-circle.png')
    .webp({ quality: 95 })
    .toFile('public/images/logo-circle.webp');

  // Copy to public/assets/aistudio/logo-circle.png as well
  fs.copyFileSync('public/images/logo-circle.png', 'public/assets/aistudio/logo-circle.png');

  console.log('Successfully created public/images/logo-circle.png and logo-circle.webp');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
