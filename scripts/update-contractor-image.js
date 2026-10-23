import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const userUploadedPath = 'C:/Users/Karthik/.gemini/antigravity/brain/5ff9a348-c32b-4cd1-9b4f-79d35bae4480/.user_uploaded/media_1792739805891_d23eb535.jpg';
const outDir = path.resolve('public/images/optimized');
const origDir = path.resolve('public/images/original');

async function processContractorImage() {
  if (!fs.existsSync(userUploadedPath)) {
    throw new Error(`User uploaded file not found at: ${userUploadedPath}`);
  }

  // Copy to original directory as well
  fs.copyFileSync(userUploadedPath, path.join(origDir, 'gedala-laxman-rao.jpg'));

  const meta = await sharp(userUploadedPath).metadata();
  console.log('Contractor image metadata:', meta);

  const slug = 'gedala-laxman-rao-founder-mk-constructions';

  // 1. Full resolution WebP
  await sharp(userUploadedPath)
    .webp({ quality: 90 })
    .toFile(path.join(outDir, `${slug}.webp`));

  // 2. 480w WebP
  await sharp(userUploadedPath)
    .resize(480, null, { withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(path.join(outDir, `${slug}-480.webp`));

  // 3. 800w WebP (if width allows, else full width)
  const target800 = Math.min(800, meta.width);
  await sharp(userUploadedPath)
    .resize(target800, null, { withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(path.join(outDir, `${slug}-800.webp`));

  // 4. Low-res Blur placeholder (20px)
  const blurBuffer = await sharp(userUploadedPath)
    .resize(20, null)
    .webp({ quality: 50 })
    .toBuffer();
  const blurBase64 = `data:image/webp;base64,${blurBuffer.toString('base64')}`;

  console.log('Blur placeholder:', blurBase64);
  console.log(`Dimensions: ${meta.width}x${meta.height}, aspect: ${(meta.width / meta.height).toFixed(2)}`);

  // Return manifest data
  return {
    slug,
    originalFile: 'gedala-laxman-rao.jpg',
    title: 'Gedala Laxman Rao (Founder & Chief Contractor)',
    location: 'Rajahmundry, AP',
    category: 'people/team',
    alt: 'Gedala Laxman Rao, Founder and Chief Civil Contractor of MK Constructions Rajahmundry',
    width: meta.width,
    height: meta.height,
    aspectRatio: Number((meta.width / meta.height).toFixed(2)),
    src: `/images/optimized/${slug}.webp`,
    srcSet: `/images/optimized/${slug}-480.webp 480w, /images/optimized/${slug}-800.webp 800w`,
    widths: [480, 800],
    blurDataUrl: blurBase64,
    isHeroCandidate: false,
    isFounderPortrait: true,
    excludeReason: null
  };
}

processContractorImage().catch(console.error);
