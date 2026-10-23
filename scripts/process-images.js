import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const imageList = [
  {
    original: 'check.jpg.jpg',
    slug: 'gedala-laxman-rao-founder-mk-constructions',
    category: 'people/team',
    alt: 'Gedala Laxman Rao, Founder and Chief Contractor of MK Constructions in Rajahmundry',
    isHeroCandidate: false,
    isFounderPortrait: true,
    excludeReason: null,
    title: 'Gedala Laxman Rao (Founder)',
    location: 'Rajahmundry, AP'
  },
  {
    original: 'karthik.jpg.jpg',
    slug: 'modern-residential-house-elevation-rajahmundry-01',
    category: 'exterior',
    alt: 'Contemporary three-storey independent house with designer elevation and Ganesha motif in Rajahmundry',
    isHeroCandidate: true,
    isFounderPortrait: false,
    excludeReason: null,
    title: 'Contemporary 3-Storey Residence',
    location: 'Danavaipeta, Rajahmundry'
  },
  {
    original: 'ram.jpg.jpg',
    slug: 'luxury-multi-storey-home-rajahmundry-02',
    category: 'exterior',
    alt: 'Finished multi-storey modern home with wood panel exterior and glass balcony railings in Rajahmundry',
    isHeroCandidate: true,
    isFounderPortrait: false,
    excludeReason: null,
    title: 'Modern Villa with Wood Cladding',
    location: 'Morampudi, Rajahmundry'
  },
  {
    original: 'tata.jpg.jpg',
    slug: 'textured-facade-residence-rajahmundry-03',
    category: 'exterior',
    alt: 'Three-storey residential building with modern geometric textured facade and green glazing in Rajahmundry',
    isHeroCandidate: false,
    isFounderPortrait: false,
    excludeReason: null,
    title: 'Architectural Geometric Residence',
    location: 'VL Puram, Rajahmundry'
  },
  {
    original: 'kuy.jpg.jpg',
    slug: 'lakshmi-nilayam-residential-building-rajahmundry-04',
    category: 'exterior',
    alt: 'Lakshmi Nilayam multi-storey house with designer steel entrance gate and geometric facade in Rajahmundry',
    isHeroCandidate: false,
    isFounderPortrait: false,
    excludeReason: null,
    title: 'Lakshmi Nilayam G+2 Residence',
    location: 'Tilak Road, Rajahmundry'
  },
  {
    original: 'ma.jpg.jpg',
    slug: 'commercial-arched-building-construction-rajahmundry',
    category: 'exterior',
    alt: 'Arched colonnade commercial structure during plastering and site preparation in Rajahmundry',
    isHeroCandidate: true,
    isFounderPortrait: false,
    excludeReason: null,
    title: 'Arched Commercial Hall Facade',
    location: 'Katheru, Rajahmundry'
  },
  {
    original: 'pp.jpg.jpg',
    slug: 'rcc-roof-slab-shuttering-construction-rajahmundry',
    category: 'in-progress',
    alt: 'Roof slab formwork, timber centering, and structural concrete framing for a home in Rajahmundry',
    isHeroCandidate: true,
    isFounderPortrait: false,
    excludeReason: null,
    title: 'RCC Roof Slab Centering & Reinforcement',
    location: 'Rajahmundry'
  },
  {
    original: 'www.jpg.jpg',
    slug: 'independent-house-front-elevation-rajahmundry',
    category: 'exterior',
    alt: 'Single-storey independent house exterior finishing with compound wall and front gate in Rajahmundry',
    isHeroCandidate: true,
    isFounderPortrait: false,
    excludeReason: null,
    title: 'Modern Single-Storey Independent Home',
    location: 'Hukumpeta, Rajahmundry'
  },
  {
    original: 'iii.jpg.jpg',
    slug: 'custom-wooden-partition-jali-interior-rajahmundry',
    category: 'interior',
    alt: 'Handcrafted wooden partition screen with illuminated peacock jali design and display shelves in Rajahmundry',
    isHeroCandidate: false,
    isFounderPortrait: false,
    excludeReason: null,
    title: 'Peacock Jali Wood Living Partition',
    location: 'Rajahmundry'
  },
  {
    original: 'uuuu.jpg.jpg',
    slug: 'modern-modular-kitchen-cabinets-rajahmundry',
    category: 'interior',
    alt: 'Sleek acrylic modular kitchen with black granite countertop and under-cabinet lighting in Rajahmundry',
    isHeroCandidate: false,
    isFounderPortrait: false,
    excludeReason: null,
    title: 'Gloss Acrylic Modular Kitchen',
    location: 'Rajahmundry'
  },
  {
    original: 'lll.jpg.jpg',
    slug: 'traditional-arched-hallway-pillars-rajahmundry',
    category: 'interior',
    alt: 'Traditional Indian hallway with circular pillars, arched colonnade, and illuminated doll niches in Rajahmundry',
    isHeroCandidate: false,
    isFounderPortrait: false,
    excludeReason: null,
    title: 'Traditional Pillared Courtyard Hall',
    location: 'Rajahmundry'
  },
  {
    original: 'kiki.jpg.jpg',
    slug: 'multi-storey-apartment-scaffolding-plastering-rajahmundry',
    category: 'in-progress',
    alt: 'Multi-storey apartment building under exterior cement plastering with scaffolding in Rajahmundry',
    isHeroCandidate: false,
    isFounderPortrait: false,
    excludeReason: null,
    title: 'Apartment Exterior Plastering Work',
    location: 'Prakash Nagar, Rajahmundry'
  },
  {
    original: 'rr.jpg.jpg',
    slug: 'building-construction-workers-masonry-rajahmundry',
    category: 'in-progress',
    alt: 'Construction team and masons working on external brick stairs and conduit fitting on site in Rajahmundry',
    isHeroCandidate: false,
    isFounderPortrait: false,
    excludeReason: null,
    title: 'On-Site Masonry & Conduiting Team',
    location: 'Rajahmundry'
  },
  {
    original: 'santh.jpg.jpg',
    slug: 'red-brick-masonry-house-construction-rajahmundry',
    category: 'in-progress',
    alt: 'Solid red brick masonry wall construction for a multi-level house in Rajahmundry',
    isHeroCandidate: false,
    isFounderPortrait: false,
    excludeReason: null,
    title: 'Red Brick Masonry & Lintel Casting',
    location: 'Rajahmundry'
  },
  {
    original: 'qqqq.jpg.jpg',
    slug: 'structural-framing-elevation-inspection-rajahmundry',
    category: 'in-progress',
    alt: 'Multi-level building concrete frame inspection with structural beam markings in Rajahmundry',
    isHeroCandidate: false,
    isFounderPortrait: false,
    excludeReason: 'Contains red inspection box markups on image; preserved for documentation gallery but excluded from hero banner',
    title: 'Structural Beam Elevation Inspection',
    location: 'Rajahmundry'
  },
  {
    original: 'ooo.jpg.jpg',
    slug: 'interior-wall-color-finishes-palette',
    category: 'other',
    alt: 'Six-shade interior room paint and color finishing reference showcase',
    isHeroCandidate: false,
    isFounderPortrait: false,
    excludeReason: '6-panel paint sample collage of non-photographic catalog nature; preserved in gallery for color consult references but excluded from hero banner',
    title: 'Interior Wall Finish & Paint Options',
    location: 'Rajahmundry'
  }
];

const targetWidths = [480, 800, 1280, 1920];
const outDir = path.resolve('public/images/optimized');
fs.mkdirSync(outDir, { recursive: true });

const manifest = [];

for (const item of imageList) {
  const origPath = path.resolve('public/images/original', item.original);
  if (!fs.existsSync(origPath)) {
    console.error('File not found:', origPath);
    continue;
  }

  // Get dimensions using identify
  const dimOutput = execSync(`identify -format "%w %h" "${origPath}"`).toString().trim();
  const [origW, origH] = dimOutput.split(' ').map(Number);

  console.log(`Processing ${item.slug} (${origW}x${origH})...`);

  // Canonical full-resolution webp
  const canonicalPath = path.join(outDir, `${item.slug}.webp`);
  execSync(`convert "${origPath}" -quality 82 "${canonicalPath}"`);

  // Target widths
  const generatedWidths = [];
  for (const w of targetWidths) {
    if (w <= origW || w === 480) { // always generate 480 for mobile thumbnail
      const wPath = path.join(outDir, `${item.slug}-${w}.webp`);
      execSync(`convert "${origPath}" -resize "${w}x>" -quality 82 "${wPath}"`);
      generatedWidths.push(w);
    }
  }

  // Generate blur placeholder (20px width)
  const blurBuf = execSync(`convert "${origPath}" -resize 20x -quality 50 -format webp -`);
  const blurBase64 = `data:image/webp;base64,${blurBuf.toString('base64')}`;

  manifest.push({
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
    srcSet: generatedWidths.map(w => `/images/optimized/${item.slug}-${w}.webp ${w}w`).join(', '),
    widths: generatedWidths,
    blurDataUrl: blurBase64,
    isHeroCandidate: item.isHeroCandidate,
    isFounderPortrait: item.isFounderPortrait,
    excludeReason: item.excludeReason
  });
}

// Write src/data/images.ts
const code = `/**
 * MK Constructions - Image Manifest
 * Processed from original site archives with descriptive SEO slugs,
 * multi-width WebP responsive sets, and low-res blur placeholders.
 */

export interface ConstructionImage {
  slug: string;
  originalFile: string;
  title: string;
  location: string;
  category: 'exterior' | 'interior' | 'in-progress' | 'people/team' | 'other';
  alt: string;
  width: number;
  height: number;
  aspectRatio: number;
  src: string;
  srcSet: string;
  widths: number[];
  blurDataUrl: string;
  isHeroCandidate: boolean;
  isFounderPortrait: boolean;
  excludeReason: string | null;
}

export const SITE_IMAGES: ConstructionImage[] = ${JSON.stringify(manifest, null, 2)};

export const FOUNDER_IMAGE = SITE_IMAGES.find(img => img.isFounderPortrait)!;

export const HERO_SLIDES = SITE_IMAGES.filter(img => img.isHeroCandidate);

export const IMAGES_BY_CATEGORY = {
  exterior: SITE_IMAGES.filter(img => img.category === 'exterior'),
  interior: SITE_IMAGES.filter(img => img.category === 'interior'),
  inProgress: SITE_IMAGES.filter(img => img.category === 'in-progress'),
  people: SITE_IMAGES.filter(img => img.category === 'people/team'),
  other: SITE_IMAGES.filter(img => img.category === 'other'),
};
`;

fs.mkdirSync(path.resolve('src/data'), { recursive: true });
fs.writeFileSync(path.resolve('src/data/images.ts'), code);
console.log('Successfully generated /src/data/images.ts and optimized WebP files.');
