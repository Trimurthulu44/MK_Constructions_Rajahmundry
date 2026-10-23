import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images/optimized');
fs.mkdirSync(outDir, { recursive: true });

const newImages = [
  {
    original: 'green-yellow-independent-house.jpg',
    slug: 'modern-green-accent-independent-house-rajahmundry',
    title: 'Modern Independent House (Green & Yellow Accents)',
    location: 'Rajahmundry',
    category: 'exterior',
    alt: 'Single-storey modern independent house with teal green border, yellow relief accents, compound wall and front gate in Rajahmundry',
    statusBadge: 'Completed Residence',
    scope: 'Modern Independent Bungalow · Designer Elevation & Tiled Compound',
    isHeroCandidate: true
  },
  {
    original: 'deluxe-mahal-grand-hall.jpg',
    slug: 'deluxe-mahal-commercial-event-hall-rajahmundry',
    title: 'Deluxe Mahal Grand Commercial Event Hall',
    location: 'Rajahmundry',
    category: 'exterior',
    alt: 'Deluxe Mahal event and function hall with illuminated arched colonnade facade and neon signage in Rajahmundry',
    statusBadge: 'Commercial Architecture',
    scope: 'Turnkey Commercial Event Hall · Grand Arched Colonnade & Illuminated Facade',
    isHeroCandidate: true
  },
  {
    original: 'multi-storey-apartment-5-floors.jpg',
    slug: 'multi-storey-residential-apartment-complex-rajahmundry',
    title: 'Modern 5-Storey Residential Apartment Complex',
    location: 'Rajahmundry',
    category: 'exterior',
    alt: 'Completed 5-storey modern residential apartment building with cantilevered glass balconies and boundary entrance in Rajahmundry',
    statusBadge: 'Completed Apartment',
    scope: 'G+4 Multi-Storey Residential Complex · Glass Balconies & Textured Plastering',
    isHeroCandidate: true
  }
];

const targetWidths = [480, 800, 1280];

async function run() {
  const results = [];
  for (const item of newImages) {
    const inputPath = path.resolve('public/images/original', item.original);
    const meta = await sharp(inputPath).metadata();
    const origW = meta.width;
    const origH = meta.height;

    console.log(`Processing ${item.slug} (${origW}x${origH})...`);

    // Canonical full-resolution webp
    const canonicalPath = path.join(outDir, `${item.slug}.webp`);
    await sharp(inputPath)
      .webp({ quality: 82 })
      .toFile(canonicalPath);

    // Responsive widths
    const widths = [];
    for (const w of targetWidths) {
      if (w <= origW || w === 480) {
        const wPath = path.join(outDir, `${item.slug}-${w}.webp`);
        await sharp(inputPath)
          .resize(w, null, { withoutEnlargement: true })
          .webp({ quality: 82 })
          .toFile(wPath);
        widths.push(w);
      }
    }

    // 20px blur placeholder
    const blurBuf = await sharp(inputPath)
      .resize(20)
      .webp({ quality: 50 })
      .toBuffer();
    const blurBase64 = `data:image/webp;base64,${blurBuf.toString('base64')}`;

    results.push({
      slug: item.slug,
      originalFile: item.original,
      title: item.title,
      location: item.location,
      category: item.category,
      alt: item.alt,
      width: origW,
      height: origH,
      aspectRatio: Number((origW / origH).toFixed(2)),
      src: `/images/optimized/${item.slug}.webp`,
      srcSet: widths.map(w => `/images/optimized/${item.slug}-${w}.webp ${w}w`).join(', '),
      widths,
      blurDataUrl: blurBase64,
      isHeroCandidate: item.isHeroCandidate,
      isFounderPortrait: false,
      excludeReason: null,
      statusBadge: item.statusBadge,
      scope: item.scope
    });
  }

  console.log(JSON.stringify(results, null, 2));
}

run().catch(console.error);
