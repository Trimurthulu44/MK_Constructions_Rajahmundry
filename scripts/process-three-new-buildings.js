import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const newBuildings = [
  {
    inputPath: 'C:/Users/Karthik/.gemini/antigravity/brain/8fc5be65-6fb0-4636-9aa8-9a8ae79aaea4/.user_uploaded/media_1792914280933_5316d79a.jpg',
    originalFile: 'contemporary-3-storey-villa-wood-accents.jpg',
    slug: 'contemporary-3-storey-villa-wood-accents-rajahmundry',
    title: 'Contemporary 3-Storey Villa with Wood Accents',
    location: 'Rajahmundry',
    category: 'exterior',
    projectType: 'residential',
    alt: 'Completed contemporary 3-storey residential villa with wood-textured paneling, glass balconies and compound wall in Rajahmundry',
    statusBadge: 'Completed Villa',
    scope: 'G+2 Contemporary Villa · Wood-Clad Elevation, Glass Railing Balconies & Compound Gate',
    isHeroCandidate: true,
  },
  {
    inputPath: 'C:/Users/Karthik/.gemini/antigravity/brain/8fc5be65-6fb0-4636-9aa8-9a8ae79aaea4/.user_uploaded/media_1792914280934_239620a5.jpg',
    originalFile: 'lakshmi-ram-multi-storey-residence.jpg',
    slug: 'lakshmi-ram-multi-storey-residence-rajahmundry',
    title: 'Lakshmi Ram Multi-Storey Residence',
    location: 'Rajahmundry',
    category: 'exterior',
    projectType: 'residential',
    alt: 'Lakshmi Ram multi-storey residence exterior elevation with stone grid cladding and blue architectural glass in Rajahmundry',
    statusBadge: 'Completed Residence',
    scope: 'Turnkey Multi-Floor Residence · Stone Grid Cladding, Blue Glass Windows & Lakshmi Ram Signage',
    isHeroCandidate: true,
  },
  {
    inputPath: 'C:/Users/Karthik/.gemini/antigravity/brain/8fc5be65-6fb0-4636-9aa8-9a8ae79aaea4/.user_uploaded/media_1792914280942_e37caa76.jpg',
    originalFile: 'modern-bungalow-purple-grey-relief.jpg',
    slug: 'modern-bungalow-purple-grey-relief-rajahmundry',
    title: 'Modern Bungalow with Purple & Grey Relief Facade',
    location: 'Rajahmundry',
    category: 'exterior',
    projectType: 'residential',
    alt: 'Single-storey independent house with textured grey plaster, purple architectural reliefs and tiled approach ramp in Rajahmundry',
    statusBadge: 'Completed Independent House',
    scope: 'Turnkey Independent House · Textured Plastering, Purple Elevation Reliefs & Tiled Approach',
    isHeroCandidate: false,
  }
];

async function main() {
  const outputConfigs = [];

  for (const b of newBuildings) {
    if (!fs.existsSync(b.inputPath)) {
      throw new Error(`File not found: ${b.inputPath}`);
    }

    // 1. Copy original file
    const origDest = path.join('public/images/original', b.originalFile);
    fs.copyFileSync(b.inputPath, origDest);
    console.log(`Copied original to ${origDest}`);

    // 2. Read metadata
    const metadata = await sharp(b.inputPath).metadata();
    const width = metadata.width;
    const height = metadata.height;
    const aspectRatio = +(width / height).toFixed(2);

    // 3. Generate primary WebP
    const primaryWebpPath = `public/images/optimized/${b.slug}.webp`;
    await sharp(b.inputPath)
      .webp({ quality: 88 })
      .toFile(primaryWebpPath);
    console.log(`Generated ${primaryWebpPath}`);

    // 4. Generate responsive variants
    let widths = [];
    let srcSetParts = [];

    if (width > 500) {
      const w480Path = `public/images/optimized/${b.slug}-480.webp`;
      await sharp(b.inputPath)
        .resize(480)
        .webp({ quality: 85 })
        .toFile(w480Path);
      widths.push(480);
      srcSetParts.push(`/images/optimized/${b.slug}-480.webp 480w`);

      if (width > 850) {
        const w800Path = `public/images/optimized/${b.slug}-800.webp`;
        await sharp(b.inputPath)
          .resize(800)
          .webp({ quality: 85 })
          .toFile(w800Path);
        widths.push(800);
        srcSetParts.push(`/images/optimized/${b.slug}-800.webp 800w`);
      }
    } else {
      // For narrower images (e.g. 460w/465w), make 480 / full
      const w480Path = `public/images/optimized/${b.slug}-480.webp`;
      await sharp(b.inputPath)
        .resize(Math.min(480, width))
        .webp({ quality: 85 })
        .toFile(w480Path);
      widths.push(Math.min(480, width));
      srcSetParts.push(`/images/optimized/${b.slug}-480.webp ${Math.min(480, width)}w`);
    }

    widths.push(width);
    srcSetParts.push(`/images/optimized/${b.slug}.webp ${width}w`);

    // 5. Generate tiny blur placeholder
    const blurBuffer = await sharp(b.inputPath)
      .resize(20, Math.round(20 / aspectRatio))
      .webp({ quality: 20 })
      .toBuffer();
    const blurDataUrl = `data:image/webp;base64,${blurBuffer.toString('base64')}`;

    outputConfigs.push({
      slug: b.slug,
      originalFile: b.originalFile,
      title: b.title,
      location: b.location,
      category: b.category,
      projectType: b.projectType,
      alt: b.alt,
      width,
      height,
      aspectRatio,
      src: `/images/optimized/${b.slug}.webp`,
      srcSet: srcSetParts.join(', '),
      widths,
      blurDataUrl,
      isHeroCandidate: b.isHeroCandidate,
      isFounderPortrait: false,
      excludeReason: null,
      statusBadge: b.statusBadge,
      scope: b.scope,
    });
  }

  console.log('\n--- GENERATED IMAGE CONFIGURATIONS ---\n');
  console.log(JSON.stringify(outputConfigs, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
