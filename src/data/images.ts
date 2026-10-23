/**
 * MK Constructions - Image Manifest
 * Processed from original site archives with descriptive SEO slugs,
 * multi-width WebP responsive sets, and low-res blur placeholders.
 * 
 * Curated for maximum visual beauty:
 * 1. Premier completed luxury elevations prioritized first.
 * 2. 2-in-1 transformation pairing for the 3-storey residence (Raw Framing <-> Completed Finish).
 * 3. Hero slideshow animation restricted exclusively to the most stunning finished homes.
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
  pairedSlug?: string;
  twoInOneRole?: 'before' | 'after';
}

export interface TwoInOneProject {
  id: string;
  title: string;
  teluguTitle: string;
  location: string;
  beforeSlug: string;
  afterSlug: string;
  beforeLabel: string;
  afterLabel: string;
  beforePhase: string;
  afterPhase: string;
  story: string;
  teluguStory: string;
  specs: { label: string; value: string }[];
}

export const TWO_IN_ONE_PROJECTS: TwoInOneProject[] = [
  {
    id: 'rajahmundry-3storey-residence',
    title: 'Contemporary 3-Storey Architectural Residence',
    teluguTitle: 'ఆధునిక 3 అంతస్తుల నివాస భవనం (2-in-1 పూర్తి ప్రయాణం)',
    location: 'Rajahmundry',
    beforeSlug: 'structural-framing-elevation-inspection-rajahmundry',
    afterSlug: 'modern-residential-house-elevation-rajahmundry-01',
    beforeLabel: 'Under Construction (RCC Frame & Beam Markings)',
    afterLabel: 'Completed Turnkey Elevation (With Ganesha Motif)',
    beforePhase: 'Civil Framing & Alignment Stage',
    afterPhase: 'Completed Turnkey Handover',
    story: 'From structural column framing, precise beam alignment, and lintel casting to the final pristine white exterior styling with the custom Lord Ganesha stone-relief motif. Directly supervised on-site by contractor Gedala Laxman Rao without subcontracting.',
    teluguStory: 'సైట్ వద్ద పిల్లర్ల ఫ్రేమింగ్, బీమ్ అమరికల నుండి వినాయకుడి ఎలివేషన్ ఆర్ట్ మరియు ఆధునిక రంగులతో పూర్తయిన ఇల్లు. గెడల లక్ష్మణరావు గారి ప్రత్యక్ష పర్యవేక్షణలో నిర్మించబడింది.',
    specs: [
      { label: 'Structure', value: 'G + 2 (3 Storeys)' },
      { label: 'Materials', value: 'Fe-550D TMT + 53G OPC Cement' },
      { label: 'Masonry', value: 'Godavari River Sand + Kiln Red Bricks' },
      { label: 'Highlight', value: 'Lord Ganesha Relief & Modern Louvers' },
    ],
  },
];

export const SITE_IMAGES: ConstructionImage[] = [
  {
    "slug": "luxury-multi-storey-home-rajahmundry-02",
    "originalFile": "ram.jpg.jpg",
    "title": "Modern Villa with Wood Cladding",
    "location": "Rajahmundry",
    "category": "exterior",
    "alt": "Finished multi-storey modern home with wood panel exterior and glass balcony railings in Rajahmundry",
    "width": 3072,
    "height": 4096,
    "aspectRatio": 0.75,
    "src": "/images/optimized/luxury-multi-storey-home-rajahmundry-02.webp",
    "srcSet": "/images/optimized/luxury-multi-storey-home-rajahmundry-02-480.webp 480w, /images/optimized/luxury-multi-storey-home-rajahmundry-02-800.webp 800w, /images/optimized/luxury-multi-storey-home-rajahmundry-02-1280.webp 1280w, /images/optimized/luxury-multi-storey-home-rajahmundry-02-1920.webp 1920w",
    "widths": [
      480,
      800,
      1280,
      1920
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUCAwQG/8QAKBAAAgEEAQMCBwEAAAAAAAAAAQIDAAQRIRIFMWFBURMUM5GSwdHw/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGxEBAAICAwAAAAAAAAAAAAAAAQACESEDE0H/2gAMAwEAAhEDEQA/AL7m4S1gR3hmkMjEAxrnGMf2rzbq9kt1Es/KVQxDSY4DHt+qT3U04iQ2l3CQoYv8TbNvQ2KbdLkluumiORxzAySmsnHaq5L2V3ClQCEbjiC8kS52BkZx53RUbeCCWMmSRlZTjAfGvtRR22fYNA1OduG63aKWa7CoGChI5AQNdqZiWS4tI7G65NJLArPIHAOc59vFY+qsflLcehYnt4prZWkM81s8qEsIgM8iPTxUK7lmJmnd4pMBRsZ1v/dqKet061z9I/kf7RWRZDE0QXM//9k=",
    "isHeroCandidate": true,
    "isFounderPortrait": false,
    "excludeReason": null
  },
  {
    "slug": "modern-residential-house-elevation-rajahmundry-01",
    "originalFile": "karthik.jpg.jpg",
    "title": "Contemporary 3-Storey Residence",
    "location": "Rajahmundry",
    "category": "exterior",
    "alt": "Contemporary three-storey independent house with designer elevation and Ganesha motif in Rajahmundry",
    "width": 3072,
    "height": 4096,
    "aspectRatio": 0.75,
    "src": "/images/optimized/modern-residential-house-elevation-rajahmundry-01.webp",
    "srcSet": "/images/optimized/modern-residential-house-elevation-rajahmundry-01-480.webp 480w, /images/optimized/modern-residential-house-elevation-rajahmundry-01-800.webp 800w, /images/optimized/modern-residential-house-elevation-rajahmundry-01-1280.webp 1280w, /images/optimized/modern-residential-house-elevation-rajahmundry-01-1920.webp 1920w",
    "widths": [
      480,
      800,
      1280,
      1920
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUBAwQG/8QAKRAAAgEDAgUDBQEAAAAAAAAAAQIDAAQRBRMSISIxQRRCUWFxgZGhwf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/8QAGxEAAwACAwAAAAAAAAAAAAAAAAECERITITH/2gAMAwEAAhEDEQA/AG8pR54kMZkGCSFPb4J+lZbPjGoOrcW2RgMZeknxgHtUWD3EkyujIV2wJD7e2f3Wcxk3onS4aOJOEtEQT/anbbyKnoeFJFxlCCRnHfH5FFUxSRFNyM8O51MNwjn55UUctlpJx2i6lOk3p1nKLIc9gRn/ACrdVmurKcCKUlWTJ5D5pDC7I4dWIZeYI8U/vnaQRljk7RoJeDrS7uSOwjEq8bN1Z+9FZdMkf0EXP2iijAn/2Q==",
    "isHeroCandidate": true,
    "isFounderPortrait": false,
    "excludeReason": null,
    "pairedSlug": "structural-framing-elevation-inspection-rajahmundry",
    "twoInOneRole": "after"
  },
  {
    "slug": "independent-house-front-elevation-rajahmundry",
    "originalFile": "www.jpg.jpg",
    "title": "Modern Single-Storey Independent Home",
    "location": "Rajahmundry",
    "category": "exterior",
    "alt": "Single-storey independent house exterior finishing with compound wall and front gate in Rajahmundry",
    "width": 1280,
    "height": 960,
    "aspectRatio": 1.33,
    "src": "/images/optimized/independent-house-front-elevation-rajahmundry.webp",
    "srcSet": "/images/optimized/independent-house-front-elevation-rajahmundry-480.webp 480w, /images/optimized/independent-house-front-elevation-rajahmundry-800.webp 800w, /images/optimized/independent-house-front-elevation-rajahmundry-1280.webp 1280w",
    "widths": [
      480,
      800,
      1280
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMGAgX/xAAhEAACAgICAQUAAAAAAAAAAAABAgMRAAQhQRIFBhMiYf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABES/9oADAMBAAIRAxEAPwBsnrsujO6yvSxGvEAlTfebHuJ9qMSwOqoreB+nZ57zg/BPtu7rVMxY2a7xg15NUgSFQvlxyTeNEWmnJHNrq+wwaTkEgV3hkgptRTKPwXhl0kf/2Q==",
    "isHeroCandidate": true,
    "isFounderPortrait": false,
    "excludeReason": null
  },
  {
    "slug": "textured-facade-residence-rajahmundry-03",
    "originalFile": "tata.jpg.jpg",
    "title": "Architectural Geometric Residence",
    "location": "Rajahmundry",
    "category": "exterior",
    "alt": "Three-storey residential building with modern geometric textured facade and green glazing in Rajahmundry",
    "width": 963,
    "height": 1280,
    "aspectRatio": 0.75,
    "src": "/images/optimized/textured-facade-residence-rajahmundry-03.webp",
    "srcSet": "/images/optimized/textured-facade-residence-rajahmundry-03-480.webp 480w, /images/optimized/textured-facade-residence-rajahmundry-03-800.webp 800w",
    "widths": [
      480,
      800
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFBgH/xAAnEAACAQMEAAUFAAAAAAAAAAABAgMABBEFEiFBEzFhkaEVIjJRcf/EABYBAQEBAAAAAAAAAAAAAAAAAAIDAf/EABoRAAMBAAMAAAAAAAAAAAAAAAABESECIjH/2gAMwEAAhEDEQA/AEtImMJWVnKgE4fO32NaL61dSaS00UqOqhgJFGS2Pj4qVraiHThahoQ4PMbgDOe+PKmbdg+iKuc71cJ/MHyrPApRU0sVzG8SOGH3KD70VP0Zkl0m2ZmQEJjn0oquGaYu/vbSW5QXYMng4DKRwT3yOqrxtPPZ2ps7ZVgTlBv81wRj5qdcMFkCeHEV2p+Uanr1FdnvLi3CRQysiBRhV4AqDURTj2KFvFPa26RSwlmA6m245/VFKQTyzx75ZGds4yT1RRoz/9k=",
    "isHeroCandidate": true,
    "isFounderPortrait": false,
    "excludeReason": null
  },
  {
    "slug": "lakshmi-nilayam-residential-building-rajahmundry-04",
    "originalFile": "kuy.jpg.jpg",
    "title": "Lakshmi Nilayam G+2 Residence",
    "location": "Rajahmundry",
    "category": "exterior",
    "alt": "Lakshmi Nilayam multi-storey house with designer steel entrance gate and geometric facade in Rajahmundry",
    "width": 963,
    "height": 1280,
    "aspectRatio": 0.75,
    "src": "/images/optimized/lakshmi-nilayam-residential-building-rajahmundry-04.webp",
    "srcSet": "/images/optimized/lakshmi-nilayam-residential-building-rajahmundry-04-480.webp 480w, /images/optimized/lakshmi-nilayam-residential-building-rajahmundry-04-800.webp 800w",
    "widths": [
      480,
      800
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAQBAwIFBgf/xAAmEAABBAEDBAEFAAAAAAAAAAABAgMEEQASEyEFIkFRMQYUYbHh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgMAAf/EABgRAAMBAQAAAAAAAAAAAAAAAAABEhEC/9oADAMBAAIRAxEAPwC1ibFkw5CUlZG2Bso7a7r4Huzl8Dp8Pqiu9KkONVS0dpWn0R4Oawx2mmnnGLSvTYAxn6em7cttbo0ldpVXi/7WLloPWnURYqYkdDDdBKR6+cMlMxhQvUR+DWGOkGWedMSZX2khwOqVoRaQefONdM6i9M3N8oS4mtJ00cVHCaHxWZskhdjg6D+8jmoqOKmobNbHJ5Pnm8MlhIKDYB7jhmk5R//Z",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": null
  },
  {
    "slug": "custom-wooden-partition-jali-interior-rajahmundry",
    "originalFile": "iii.jpg.jpg",
    "title": "Peacock Jali Wood Living Partition",
    "location": "Rajahmundry",
    "category": "interior",
    "alt": "Handcrafted wooden partition screen with illuminated peacock jali design and display shelves in Rajahmundry",
    "width": 736,
    "height": 908,
    "aspectRatio": 0.81,
    "src": "/images/optimized/custom-wooden-partition-jali-interior-rajahmundry.webp",
    "srcSet": "/images/optimized/custom-wooden-partition-jali-interior-rajahmundry-480.webp 480w",
    "widths": [
      480
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAZABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUCAwQG/8QAJxAAAgEEAQIFBQAAAAAAAAAAAQIDAAQRIRITMQU0QYGhFDNRcXL/xAAXAQEBAQEAAAAAAAAAAAAAAAADAgAB/8QAGhEAAwEBAQEAAAAAAAAAAAAAAAERAiEDEv/aAAwDAQACEQMRAD8AwWzGaE8rWWFARlpCGB323ut0KNFDcG3uJI8bHE6HfRFc/HN4gk6xO0pR2bCsdHWvmm9uHjgl5jBwew0den5GfWp039dFXcsbC0hCjmxZsbNFBbdFVUFGLpkH07MdBSD75qLQgPIVk6nM5bgM/I0KquPLSfqtq+Ti/mi9LUxcOKFnVV9qwxRSm5+77UVjkP/Z",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": null
  },
  {
    "slug": "modern-modular-kitchen-cabinets-rajahmundry",
    "originalFile": "uuuu.jpg.jpg",
    "title": "Gloss Acrylic Modular Kitchen",
    "location": "Rajahmundry",
    "category": "interior",
    "alt": "Sleek acrylic modular kitchen with black granite countertop and under-cabinet lighting in Rajahmundry",
    "width": 564,
    "height": 846,
    "aspectRatio": 0.67,
    "src": "/images/optimized/modern-modular-kitchen-cabinets-rajahmundry.webp",
    "srcSet": "/images/optimized/modern-modular-kitchen-cabinets-rajahmundry-480.webp 480w",
    "widths": [
      480
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQCAwUG/8QAKxAAAgEDAgUDBQEAAAAAAAAAAQIDAAQRBRITIUEGFCIxUYEVJDJxobHR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIA/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMwEAAhEDEQA/ANFbqytoTmTiSD6to3Gs2fXslu7Wp+7nAFStoysjJG28SKUDqeYIOM49qVn0RpI3UXCjIPiZTz/NVEoXusahDKqiSFcoCQvMDNFJns8uT82MdMg5/VFBPzadJZsHLMiqfAw8zVPfL2DPDnLD0auokwwKsAQeRB61jX+mKsbywNtCjJRvL2NVRCHxu4HJ7ZCfXZ/KKVXDKGHWisz/2Q==",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": null
  },
  {
    "slug": "traditional-arched-hallway-pillars-rajahmundry",
    "originalFile": "lll.jpg.jpg",
    "title": "Traditional Pillared Courtyard Hall",
    "location": "Rajahmundry",
    "category": "interior",
    "alt": "Traditional Indian hallway with circular pillars, arched colonnade, and illuminated doll niches in Rajahmundry",
    "width": 963,
    "height": 1280,
    "aspectRatio": 0.75,
    "src": "/images/optimized/traditional-arched-hallway-pillars-rajahmundry.webp",
    "srcSet": "/images/optimized/traditional-arched-hallway-pillars-rajahmundry-480.webp 480w, /images/optimized/traditional-arched-hallway-pillars-rajahmundry-800.webp 800w",
    "widths": [
      480,
      800
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIDBAUG/8QAJhAAAgICAQMCBwAAAAAAAAAAAQIDEQAEIQYSMQUTFSNBUXGhwf/EABUBAQEAAAAAAAAAAAAAAAAAAAMB/8QAGREBAAMBAQAAAAAAAAAAAAAAAAERIRIT/9oADAMBAAIRAxEAPwDNg1GbbVZjbyKHP3I/H8yf13VXUWF44vaZnEbIR+8qdP7qfFIDK1UW5Y/Tis1+sJkrXpu75ym7vCqbJlLQhWNQgCkKKsjDIUnDLbHm8MPzL05NdYCRWruQcGvOR7qqgUxSEr3ChfjLMbGvOLtorQlyAWHg4sToqwo29xRQmesMWMkoCcMqP//Z",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": null
  },
  {
    "slug": "commercial-arched-building-construction-rajahmundry",
    "originalFile": "ma.jpg.jpg",
    "title": "Arched Commercial Hall Facade",
    "location": "Rajahmundry",
    "category": "exterior",
    "alt": "Arched colonnade commercial structure during plastering and site preparation in Rajahmundry",
    "width": 1280,
    "height": 963,
    "aspectRatio": 1.33,
    "src": "/images/optimized/commercial-arched-building-construction-rajahmundry.webp",
    "srcSet": "/images/optimized/commercial-arched-building-construction-rajahmundry-480.webp 480w, /images/optimized/commercial-arched-building-construction-rajahmundry-800.webp 800w, /images/optimized/commercial-arched-building-construction-rajahmundry-1280.webp 1280w",
    "widths": [
      480,
      800,
      1280
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIGBAX/xAAlEAABAgUCBwEAAAAAAAAAAAABAAIDBAURIRIxBhMyQVFhcZL/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAQADAQAAAAAAAAAAAAAAAAABESEi/9oADAMBAAIRAxEAPwDfJ16FIQ+TEBedV8uIsPV07+JwTYCFbbdTbqfCFu/0lOKfLBrXOznG6Kg3KkbWoL2h2h2fBCFxGSEC3Qf2hHKtf//Z",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": null
  },
  {
    "slug": "rcc-roof-slab-shuttering-construction-rajahmundry",
    "originalFile": "pp.jpg.jpg",
    "title": "RCC Roof Slab Centering & Reinforcement",
    "location": "Rajahmundry",
    "category": "in-progress",
    "alt": "Roof slab formwork, timber centering, and structural concrete framing for a home in Rajahmundry",
    "width": 1280,
    "height": 963,
    "aspectRatio": 1.33,
    "src": "/images/optimized/rcc-roof-slab-shuttering-construction-rajahmundry.webp",
    "srcSet": "/images/optimized/rcc-roof-slab-shuttering-construction-rajahmundry-480.webp 480w, /images/optimized/rcc-roof-slab-shuttering-construction-rajahmundry-800.webp 800w, /images/optimized/rcc-roof-slab-shuttering-construction-rajahmundry-1280.webp 1280w",
    "widths": [
      480,
      800,
      1280
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUDBAb/xAAlEAACAQMDAgcAAAAAAAAAAAABAgQAAxEFMVEhgRITFCJBQ6H/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABoRAAICAwAAAAAAAAAAAAAAAAABERICEyH/2gAMAwEAAhEDEQA/AGWtTDDs4tAeaw6eLZRyaVwNaBcW5e3xdUdO4qfVZcYss1lMgfUB7QBzg0rF7TJLlmj3o7gDLWyOONvym7nhKxUGvt2hctq6EMrDIZTkGiqEDVI8eItr1AYLsXtHOO1FXsQUZ//Z",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": null
  },
  {
    "slug": "structural-framing-elevation-inspection-rajahmundry",
    "originalFile": "qqqq.jpg.jpg",
    "title": "Structural Beam Elevation Inspection (2-in-1 Stage)",
    "location": "Rajahmundry",
    "category": "in-progress",
    "alt": "Multi-level building concrete frame inspection with structural beam markings in Rajahmundry",
    "width": 1080,
    "height": 1440,
    "aspectRatio": 0.75,
    "src": "/images/optimized/structural-framing-elevation-inspection-rajahmundry.webp",
    "srcSet": "/images/optimized/structural-framing-elevation-inspection-rajahmundry-480.webp 480w, /images/optimized/structural-framing-elevation-inspection-rajahmundry-800.webp 800w",
    "widths": [
      480,
      800
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAgP/xAAqEAACAQMDAgMJAAAAAAAAAAABAgMABBEFITESExSBkTJBQkNRYXGh0f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAAMBAAAAAAAAAAAAAAAAAAABERL/2gAMAwEAAhEDEQA/AK+tahJp1qnhlYyufaChukffP1qZNPd+FDXsjGWSVQFduoAH0GfKpOr6jb3N4HaBy0Z5D56wOBjHH9qldyyslszZy0iswB2XY0boSiHBePEBH3SAvHuopCUBnJL4ziipo1mkSLUXhuVItI0lf4gCDv8AmqcvdkaMuYXdG6l2Iwa4G6nknMLyFoweDv8AuiYBUJXY45rIpp++G36fImilO/KPmN60Uhaz/9k=",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": "Contains red inspection box markups on image; paired directly with completed elevation as a 2-in-1 transformation showcase",
    "pairedSlug": "modern-residential-house-elevation-rajahmundry-01",
    "twoInOneRole": "before"
  },
  {
    "slug": "multi-storey-apartment-scaffolding-plastering-rajahmundry",
    "originalFile": "kiki.jpg.jpg",
    "title": "Apartment Exterior Plastering Work",
    "location": "Rajahmundry",
    "category": "in-progress",
    "alt": "Multi-storey apartment building under exterior cement plastering with scaffolding in Rajahmundry",
    "width": 720,
    "height": 1280,
    "aspectRatio": 0.56,
    "src": "/images/optimized/multi-storey-apartment-scaffolding-plastering-rajahmundry.webp",
    "srcSet": "/images/optimized/multi-storey-apartment-scaffolding-plastering-rajahmundry-480.webp 480w",
    "widths": [
      480
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAkABQDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAYEBQcBA//EACcQAAICAQIFAwUAAAAAAAAAAAECAAMRBBIFEyExQQYUkSJSYXGB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgEA/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERIf/aAAwDAQACEQMRAD8AjPxHUPr1L2VgqcitTuJ/viMa0pfUtqD6WGf1FZarltAanT0LnrWpG7575jFwO3bqRQ/Rbh03fcIpUseh0wz2hLZ9PhoS6jPq/YC6vlG9m3dHxjPzL3QuK79NYGDBXXLeT+ZRLqa/cLt0DKFOQ2cASTTxWnm8t6WoZV6HcPHYCE2hWEbzCKL+obScq5bI8JCHrYXN5xmc1NhrqSxQA24dcd4QiZJQm8FmOCpKjAEIQg0n/9k=",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": null
  },
  {
    "slug": "building-construction-workers-masonry-rajahmundry",
    "originalFile": "rr.jpg.jpg",
    "title": "On-Site Masonry & Conduiting Team",
    "location": "Rajahmundry",
    "category": "in-progress",
    "alt": "Construction team and masons working on external brick stairs and conduit fitting on site in Rajahmundry",
    "width": 963,
    "height": 1280,
    "aspectRatio": 0.75,
    "src": "/images/optimized/building-construction-workers-masonry-rajahmundry.webp",
    "srcSet": "/images/optimized/building-construction-workers-masonry-rajahmundry-480.webp 480w, /images/optimized/building-construction-workers-masonry-rajahmundry-800.webp 800w",
    "widths": [
      480,
      800
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGQAAAwEBAAAAAAAAAAAAAAAAAAQFAwIG/8QAJxAAAgEDAwMDBQAAAAAAAAAAAQIDAAQRBRIhEzFBBkJhFFFTcfH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/8QAGREBAAIDAAAAAAAAAAAAAAAAAAERAhJB/9oADAMBAAIRAxEAPwCzrup3NpcILWWMIynIZMkEH+UlD6guYmkW7XqkfiIBHH65qVqyxLe3LRSZx2XfkkjxSsSiN5HjYMVxtwc89+aLFPS/X7lV2diXUN3HkUUlp9xizjWVlR1yCOkD5+RRQlI1C3eOS+kkZXnjCk4HBJ+KzW3ZLlnSTam1cBRznAzVSdRG8W33ICxJzk0hklmz9zUbW1jHjdQR7jzyc0VxbsWiBJPc0Uyf/9k=",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": null
  },
  {
    "slug": "red-brick-masonry-house-construction-rajahmundry",
    "originalFile": "santh.jpg.jpg",
    "title": "Red Brick Masonry & Lintel Casting",
    "location": "Rajahmundry",
    "category": "in-progress",
    "alt": "Solid red brick masonry wall construction for a multi-level house in Rajahmundry",
    "width": 780,
    "height": 1040,
    "aspectRatio": 0.75,
    "src": "/images/optimized/red-brick-masonry-house-construction-rajahmundry.webp",
    "srcSet": "/images/optimized/red-brick-masonry-house-construction-rajahmundry-480.webp 480w",
    "widths": [
      480
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQDBQYH/8QAKRAAAgEDAgUDBQEAAAAAAAAAAQIDAAQRBRSIjEGE0FhUYGRocHw8f/EABYBAQEBAAAAAAAAAAAAAAAAAAIDAP/EABoRAQEAAgMAAAAAAAAAAAAAAAEAAiERElH/2gAMAwEAAhEDEQA/ANNrN1La2Ja3YpKW6ekd8Ula61diw8y52h1l2bgRmQnsAKj8TTs9tHb9IkcFlDEAdwPX2Jql06Y2sNyXjUlWygVwxI/FTXyeBvd0JW3KCASDz3oqk0nW1k02Bpo2Em3DbcEfuMUUxiliNbgdHh3PkO67ctnHxpfS5s+acYBJH0/tOeKAEv7RF4XAOPnSMIEVjM0YCkFeR71kI4PE6ksHK8dB24wTj70VprOwtGhwbaIhTtGVHbAoqfcm5N//2Q==",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": null
  },
  {
    "slug": "interior-wall-color-finishes-palette",
    "originalFile": "ooo.jpg.jpg",
    "title": "Interior Wall Finish & Paint Options",
    "location": "Rajahmundry",
    "category": "other",
    "alt": "Six-shade interior room paint and color finishing reference showcase",
    "width": 810,
    "height": 1440,
    "aspectRatio": 0.56,
    "src": "/images/optimized/interior-wall-color-finishes-palette.webp",
    "srcSet": "/images/optimized/interior-wall-color-finishes-palette-480.webp 480w, /images/optimized/interior-wall-color-finishes-palette-800.webp 800w",
    "widths": [
      480,
      800
    ],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAkABQDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EACYQAAIBAwMEAQUAAAAAAAAAAAECAwAEERIhMRMUQVEiI0JhofD/xAAXAQEBAQEAAAAAAAAAAAAAAAADBAEC/8QAIREAAQQBBAMBAAAAAAAAAAAAAQACAxESEyEiMQRRkaH/2gAMAwEAAhEDEQA/ANbNcPb62k3JPG3mogJFqrGQlskE5P8AeamS8g1dAW7qxJwvmqLmSKBRE8mhgMlD9ufdceZJrQhjDuro2xx0cMfivt71hHhjqOeSKVhh6JTIkYjPIFKPin1YvX4u5ryTuRK9vKoJyG0+v3We9Ntc3WTL9YqNWonJ2/NerNH297aQQ3XbJO51nOQMDneu54IYZWVr4uPLsw+R97UccowEg3tQycyGVVKmzs7dbdVeTDDYjI2NKkQwEkly5J5DUozHkcr7TtiNBfP3Mkl65aeQnBOBtgVCqeki63wFG2aUpWAAUEJ7BVkDSRqwSV1GeAaUpShaCv/Z",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": "6-panel paint sample collage of non-photographic catalog nature; preserved in gallery for color consult references but excluded from hero banner"
  },
  {
    "slug": "gedala-laxman-rao-founder-mk-constructions",
    "originalFile": "gedala-laxman-rao.jpg",
    "title": "Gedala Laxman Rao (Founder & Chief Contractor)",
    "location": "Rajahmundry",
    "category": "people/team",
    "alt": "Gedala Laxman Rao, Founder and Chief Contractor of MK Constructions in Rajahmundry",
    "width": 583,
    "height": 732,
    "aspectRatio": 0.8,
    "src": "/images/optimized/gedala-laxman-rao-founder-mk-constructions.webp",
    "srcSet": "/images/optimized/gedala-laxman-rao-founder-mk-constructions-480.webp 480w, /images/optimized/gedala-laxman-rao-founder-mk-constructions-800.webp 800w",
    "widths": [
      480,
      800
    ],
    "blurDataUrl": "data:image/webp;base64,UklGRrYAAABXRUJQVlA4IKoAAABQBACdASoUABkAPtFYpEyoJSOiKA1RABoJQAAFjrcnMziwc1lrEMyTmfiAAPxQNyi7Wz9GHrf76l818oZgq6822i5bn01y7TByCZEdacFnc2bpyd2i6F9N6WcSO1izZI5VtAfpcwI7LBIBGAJ+y8zSBmWSPe+/93/7xRSFfF08K+4luf5RRkbE/e0JeItneu8p0w8vYaVqqkFq+lj/cM7MPA9fN/i9NpAAAA==",
    "isHeroCandidate": false,
    "isFounderPortrait": true,
    "excludeReason": null
  }
];

export const FOUNDER_IMAGE = SITE_IMAGES.find(img => img.isFounderPortrait)!;

/**
 * Premier finished homes curated for the animated Hero slideshow.
 * Priority 1: Modern Villa with Wood Cladding & Glass Railings
 * Priority 2: Contemporary 3-Storey Residence with Ganesha Motif
 * Priority 3: Modern Single-Storey Designer Home with Purple/Grey Accents
 * Priority 4: Architectural Geometric Residence
 */
export const HERO_SLIDES = SITE_IMAGES.filter(img => img.isHeroCandidate);

export const IMAGES_BY_CATEGORY = {
  exterior: SITE_IMAGES.filter(img => img.category === 'exterior'),
  interior: SITE_IMAGES.filter(img => img.category === 'interior'),
  inProgress: SITE_IMAGES.filter(img => img.category === 'in-progress'),
  people: SITE_IMAGES.filter(img => img.category === 'people/team'),
  other: SITE_IMAGES.filter(img => img.category === 'other'),
};

/**
 * Slugs of completed building projects and finished interior creations.
 * Used to stamp completed works with the official MK Constructions seal.
 */
export const COMPLETED_PROJECT_SLUGS = new Set<string>([
  'luxury-multi-storey-home-rajahmundry-02',
  'modern-residential-house-elevation-rajahmundry-01',
  'independent-house-front-elevation-rajahmundry',
  'textured-facade-residence-rajahmundry-03',
  'lakshmi-nilayam-residential-building-rajahmundry-04',
  'custom-wooden-partition-jali-interior-rajahmundry',
  'modern-modular-kitchen-cabinets-rajahmundry',
  'traditional-arched-hallway-pillars-rajahmundry',
]);

export const isProjectCompleted = (slug: string): boolean => {
  return COMPLETED_PROJECT_SLUGS.has(slug);
};
