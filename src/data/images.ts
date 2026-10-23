/**
 * MK Constructions - Image Manifest
 * Processed from original site archives with descriptive SEO slugs,
 * multi-width WebP responsive sets, and low-res blur placeholders.
 * 
 * Curated for maximum visual beauty and structure:
 * 1. Premier completed luxury residences, apartments & commercial projects prioritized.
 * 2. Unlinked, individual standalone projects displayed neatly one by one.
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
  statusBadge?: string;
  scope?: string;
  projectType?: 'residential' | 'apartment' | 'commercial' | 'interior';
}

export const SITE_IMAGES: ConstructionImage[] = [
  // 1. Modern Villa with Wood Cladding
  {
    "slug": "luxury-multi-storey-home-rajahmundry-02",
    "originalFile": "ram.jpg.jpg",
    "title": "Modern Villa with Wood Cladding",
    "location": "Rajahmundry",
    "category": "exterior",
    "projectType": "residential",
    "alt": "Finished multi-storey modern home with wood panel exterior and glass balcony railings in Rajahmundry",
    "width": 3072,
    "height": 4096,
    "aspectRatio": 0.75,
    "src": "/images/optimized/luxury-multi-storey-home-rajahmundry-02.webp",
    "srcSet": "/images/optimized/luxury-multi-storey-home-rajahmundry-02-480.webp 480w, /images/optimized/luxury-multi-storey-home-rajahmundry-02-800.webp 800w, /images/optimized/luxury-multi-storey-home-rajahmundry-02-1280.webp 1280w, /images/optimized/luxury-multi-storey-home-rajahmundry-02-1920.webp 1920w",
    "widths": [480, 800, 1280, 1920],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUCAwQG/8QAKBAAAgEEAQMCBwEAAAAAAAAAAQIDAAQRIRIFMWFBURMUM5GSwdHw/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGxEBAAICAwAAAAAAAAAAAAAAAQACESEDE0H/2gAMAwEAAhEDEQA/AL7m4S1gR3hmkMjEAxrnGMf2rzbq9kt1Es/KVQxDSY4DHt+qT3U04iQ2l3CQoYv8TbNvQ2KbdLkluumiORxzAySmsnHaq5L2V3ClQCEbjiC8kS52BkZx53RUbeCCWMmSRlZTjAfGvtRR22fYNA1OduG63aKWa7CoGChI5AQNdqZiWS4tI7G65NJLArPIHAOc59vFY+qsflLcehYnt4prZWkM81s8qEsIgM8iPTxUK7lmJmnd4pMBRsZ1v/dqKet061z9I/kf7RWRZDE0QXM//9k=",
    "isHeroCandidate": true,
    "isFounderPortrait": false,
    "excludeReason": null,
    "statusBadge": "Completed Residence",
    "scope": "Turnkey Villa Construction · Glass Balconies & Exterior Cladding"
  },

  // 2. Contemporary 3-Storey Residence
  {
    "slug": "modern-residential-house-elevation-rajahmundry-01",
    "originalFile": "karthik.jpg.jpg",
    "title": "Contemporary 3-Storey Residence",
    "location": "Rajahmundry",
    "category": "exterior",
    "projectType": "residential",
    "alt": "Contemporary three-storey independent house with designer elevation and Ganesha motif in Rajahmundry",
    "width": 3072,
    "height": 4096,
    "aspectRatio": 0.75,
    "src": "/images/optimized/modern-residential-house-elevation-rajahmundry-01.webp",
    "srcSet": "/images/optimized/modern-residential-house-elevation-rajahmundry-01-480.webp 480w, /images/optimized/modern-residential-house-elevation-rajahmundry-01-800.webp 800w, /images/optimized/modern-residential-house-elevation-rajahmundry-01-1280.webp 1280w, /images/optimized/modern-residential-house-elevation-rajahmundry-01-1920.webp 1920w",
    "widths": [480, 800, 1280, 1920],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUBAwQG/8QAKRAAAgEDAgUDBQEAAAAAAAAAAQIDAAQRBRMSISIxQRRCUWFxgZGhwf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/8QAGxEAAwACAwAAAAAAAAAAAAAAAAECERITITH/2gAMwEAAhEDEQA/AG8pR54kMZkGCSFPb4J+lZbPjGoOrcW2RgMZeknxgHtUWD3EkyujIV2wJD7e2f3Wcxk3onS4aOJOEtEQT/anbbyKnoeFJFxlCCRnHfH5FFUxSRFNyM8O51MNwjn55UUctlpJx2i6lOk3p1nKLIc9gRn/ACrdVmurKcCKUlWTJ5D5pDC7I4dWIZeYI8U/vnaQRljk7RoJeDrS7uSOwjEq8bN1Z+9FZdMkf0EXP2iijAn/2Q==",
    "isHeroCandidate": true,
    "isFounderPortrait": false,
    "excludeReason": null,
    "statusBadge": "Completed Residence",
    "scope": "Independent G+2 Floors · Custom Lord Ganesha Relief Art"
  },

  // 3. Modern 5-Storey Residential Apartment Complex (NEW)
  {
    "slug": "multi-storey-residential-apartment-complex-rajahmundry",
    "originalFile": "multi-storey-apartment-5-floors.jpg",
    "title": "Modern 5-Storey Residential Apartment Complex",
    "location": "Rajahmundry",
    "category": "exterior",
    "projectType": "apartment",
    "alt": "Completed 5-storey modern residential apartment building with cantilevered glass balconies and boundary entrance in Rajahmundry",
    "width": 1024,
    "height": 768,
    "aspectRatio": 1.33,
    "src": "/images/optimized/multi-storey-residential-apartment-complex-rajahmundry.webp",
    "srcSet": "/images/optimized/multi-storey-residential-apartment-complex-rajahmundry-480.webp 480w, /images/optimized/multi-storey-residential-apartment-complex-rajahmundry-800.webp 800w",
    "widths": [480, 800],
    "blurDataUrl": "data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAAAwBACdASoUAA8APtFUo0uoJKMhsAgBABoJZwC7AywBa5lE632Cf7c7BHAA/vN7fRZkfOkdR1hdqtxzk36OQsSiPTpqnkEx88fOgS4OUSQH4SfAEPO1R581sgkbqE0PoutwNE0pGu/7VYe06D2Pu5snEbHrEa2D7hYpRoTXopQdCRgA",
    "isHeroCandidate": true,
    "isFounderPortrait": false,
    "excludeReason": null,
    "statusBadge": "Completed Apartment Complex",
    "scope": "G+4 Multi-Storey Residential Complex · Glass Balconies & Textured Plastering"
  },

  // 4. Deluxe Mahal Commercial Restaurant & Dining Hall (NEW)
  {
    "slug": "deluxe-mahal-commercial-event-hall-rajahmundry",
    "originalFile": "deluxe-mahal-grand-hall.jpg",
    "title": "Deluxe Mahal Commercial Restaurant & Dining Hall",
    "location": "Rajahmundry",
    "category": "exterior",
    "projectType": "commercial",
    "alt": "Deluxe Mahal commercial restaurant and grand dining hall with illuminated arched colonnade facade in Rajahmundry",
    "width": 1024,
    "height": 768,
    "aspectRatio": 1.33,
    "src": "/images/optimized/deluxe-mahal-commercial-event-hall-rajahmundry.webp",
    "srcSet": "/images/optimized/deluxe-mahal-commercial-event-hall-rajahmundry-480.webp 480w, /images/optimized/deluxe-mahal-commercial-event-hall-rajahmundry-800.webp 800w",
    "widths": [480, 800],
    "blurDataUrl": "data:image/webp;base64,UklGRpoAAABXRUJQVlA4II4AAAAwBACdASoUAA8APtFUo0uoJKMhsAgBABoJbACdMoAltxfuRmyXA4naPAAA/ul/QV0Zlpnambk6KVKAyuHXnTpiXN2ysczo39kC2vMJgPYKETJP2hmFQ32cmNvSynpXijfn32w3NvYUreM56oVLOByTHyhfPtK8rHzFIz/+58pF5VBsCfbRyWVARfbPBRAA",
    "isHeroCandidate": true,
    "isFounderPortrait": false,
    "excludeReason": null,
    "statusBadge": "Commercial Restaurant",
    "scope": "Turnkey Commercial Restaurant & Grand Dining Colonnade · Full Structural & Facade Execution"
  },

  // 5. Barkas Arabian Kitchens Restaurant (NEW)
  {
    "slug": "barkas-arabian-kitchens-restaurant-rajahmundry",
    "originalFile": "barkas-arabian-kitchens-restaurant.jpg",
    "title": "Barkas Arabian Kitchens Restaurant",
    "location": "Rajahmundry",
    "category": "exterior",
    "projectType": "commercial",
    "alt": "Barkas Arabian Kitchens restaurant commercial building with decorative entrance arch, lighting and neon branding in Rajahmundry",
    "width": 405,
    "height": 720,
    "aspectRatio": 0.56,
    "src": "/images/optimized/barkas-arabian-kitchens-restaurant-rajahmundry.webp",
    "srcSet": "/images/optimized/barkas-arabian-kitchens-restaurant-rajahmundry-480.webp 480w, /images/optimized/barkas-arabian-kitchens-restaurant-rajahmundry.webp 720w",
    "widths": [480, 720],
    "blurDataUrl": "data:image/webp;base64,UklGRi4BAABXRUJQVlA4ICIBAABwBgCdASoUACQAPtFiqlAoJSOipWmZABoJYgCdMvB2j+yidwPXPrIY7rT8e7cLbWDvSvN6Bd8LHS9jtMQA/vfwnLaoVDkJJi87PKxCaekbUzbaScvg1tYu9zT2gElFb01Kfr8p7sv5WRnLZFRis+VwAH6wwNXUEV8gzDO36UD+dhq/hVilXUVrsxfDxJzGZM4cxniacbQYSPOFEdGbb79tAW3x9OHLnGh627RK1cLfePA45dyn/EtnNitHcDaTfo5GH27DZqWBIXncjG+6FpxifGRfHqGibLppsQA2Vcm+xlMqhcy3PQuSu4vmLFF/fpgCDtB1dR6fhfgEIl3o5Le5wzKmdz/Kfa4incFbEUII9PxrUQY+jT0jPFMxSZM/H4kgAA==",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": null,
    "statusBadge": "Commercial Restaurant",
    "scope": "Turnkey Restaurant Execution · Arabian Theme Entrance Arch, Commercial Kitchen & Facade Lighting"
  },

  // 5. Modern Independent House (Green & Yellow Accents) (NEW)
  {
    "slug": "modern-green-accent-independent-house-rajahmundry",
    "originalFile": "green-yellow-independent-house.jpg",
    "title": "Modern Independent House (Green & Yellow Accents)",
    "location": "Rajahmundry",
    "category": "exterior",
    "projectType": "residential",
    "alt": "Single-storey modern independent house with teal green border, yellow relief accents, compound wall and front gate in Rajahmundry",
    "width": 1024,
    "height": 768,
    "aspectRatio": 1.33,
    "src": "/images/optimized/modern-green-accent-independent-house-rajahmundry.webp",
    "srcSet": "/images/optimized/modern-green-accent-independent-house-rajahmundry-480.webp 480w, /images/optimized/modern-green-accent-independent-house-rajahmundry-800.webp 800w",
    "widths": [480, 800],
    "blurDataUrl": "data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAAAQBACdASoUAA8APtFUo0uoJKMhsAgBABoJYwC7AB6MpcRl1TCRBPvMAAD+yKZ/EBkiB+on1bEzRw+T4ypUIaWA9tNyJVB19GdiWlqqdXgsPXaEtxcYBPSk1MxghYxH7Rw1gDpQm6sztQLjjtBduVUuUVJOYzSbRnaLOGvkPsU4AA==",
    "isHeroCandidate": true,
    "isFounderPortrait": false,
    "excludeReason": null,
    "statusBadge": "Completed Residence",
    "scope": "Modern Independent Bungalow · Designer Elevation & Tiled Compound"
  },

  // 6. Modern Single-Storey Independent Home (Purple & Grey)
  {
    "slug": "independent-house-front-elevation-rajahmundry",
    "originalFile": "www.jpg.jpg",
    "title": "Modern Single-Storey Independent Home",
    "location": "Rajahmundry",
    "category": "exterior",
    "projectType": "residential",
    "alt": "Single-storey independent house exterior finishing with compound wall and front gate in Rajahmundry",
    "width": 1280,
    "height": 960,
    "aspectRatio": 1.33,
    "src": "/images/optimized/independent-house-front-elevation-rajahmundry.webp",
    "srcSet": "/images/optimized/independent-house-front-elevation-rajahmundry-480.webp 480w, /images/optimized/independent-house-front-elevation-rajahmundry-800.webp 800w, /images/optimized/independent-house-front-elevation-rajahmundry-1280.webp 1280w",
    "widths": [480, 800, 1280],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMGAgX/xAAhEAACAgICAQUAAAAAAAAAAAABAgMRAAQhQRIFBhMiYf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABES/9oADAMBAAIRAxEAPwBsnrsujO6yvSxGvEAlTfebHuJ9qMSwOqoreB+nZ57zg/BPtu7rVMxY2a7xg15NUgSFQvlxyTeNEWmnJHNrq+wwaTkEgV3hkgptRTKPwXhl0kf/2Q==",
    "isHeroCandidate": true,
    "isFounderPortrait": false,
    "excludeReason": null,
    "statusBadge": "Completed Residence",
    "scope": "Independent Bungalow · Compound Wall & Designer Steel Entrance"
  },

  // 7. Architectural Geometric Residence
  {
    "slug": "textured-facade-residence-rajahmundry-03",
    "originalFile": "tata.jpg.jpg",
    "title": "Architectural Geometric Residence",
    "location": "Rajahmundry",
    "category": "exterior",
    "projectType": "residential",
    "alt": "Three-storey residential building with modern geometric textured facade and green glazing in Rajahmundry",
    "width": 963,
    "height": 1280,
    "aspectRatio": 0.75,
    "src": "/images/optimized/textured-facade-residence-rajahmundry-03.webp",
    "srcSet": "/images/optimized/textured-facade-residence-rajahmundry-03-480.webp 480w, /images/optimized/textured-facade-residence-rajahmundry-03-800.webp 800w",
    "widths": [480, 800],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFBgH/xAAnEAACAQMEAAUFAAAAAAAAAAABAgMABBEFEiFBEzFhkaEVIjJRcf/EABYBAQEBAAAAAAAAAAAAAAAAAAIDAf/EABoRAAMBAAMAAAAAAAAAAAAAAAABESECIjH/2gAMwEAAhEDEQA/AEtImMJWVnKgE4fO32NaL61dSaS00UqOqhgJFGS2Pj4qVraiHThahoQ4PMbgDOe+PKmbdg+iKuc71cJ/MHyrPApRU0sVzG8SOGH3KD70VP0Zkl0m2ZmQEJjn0oquGaYu/vbSW5QXYMng4DKRwT3yOqrxtPPZ2ps7ZVgTlBv81wRj5qdcMFkCeHEV2p+Uanr1FdnvLi3CRQysiBRhV4AqDURTj2KFvFPa26RSwlmA6m245/VFKQTyzx75ZGds4yT1RRoz/9k=",
    "isHeroCandidate": true,
    "isFounderPortrait": false,
    "excludeReason": null,
    "statusBadge": "Completed Residence",
    "scope": "Geometric Texture Plastering · Green Glazing & Louvers"
  },

  // 8. Lakshmi Nilayam G+2 Residence
  {
    "slug": "lakshmi-nilayam-residential-building-rajahmundry-04",
    "originalFile": "kuy.jpg.jpg",
    "title": "Lakshmi Nilayam G+2 Residence",
    "location": "Rajahmundry",
    "category": "exterior",
    "projectType": "residential",
    "alt": "Lakshmi Nilayam multi-storey house with designer steel entrance gate and geometric facade in Rajahmundry",
    "width": 963,
    "height": 1280,
    "aspectRatio": 0.75,
    "src": "/images/optimized/lakshmi-nilayam-residential-building-rajahmundry-04.webp",
    "srcSet": "/images/optimized/lakshmi-nilayam-residential-building-rajahmundry-04-480.webp 480w, /images/optimized/lakshmi-nilayam-residential-building-rajahmundry-04-800.webp 800w",
    "widths": [480, 800],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAQBAwIFBgf/xAAmEAABBAEDBAEFAAAAAAAAAAABAgMEEQASEyEFIkFRMQYUYbHh/8QAFwEBAQEAAAAAAAAAAAAAAAAAAgMAAf/EABgRAAMBAQAAAAAAAAAAAAAAAAABEhEC/9oADAMBAAIRAxEAPwC1ibFkw5CUlZG2Bso7a7r4Huzl8Dp8Pqiu9KkONVS0dpWn0R4Oawx2mmnnGLSvTYAxn6em7cttbo0ldpVXi/7WLloPWnURYqYkdDDdBKR6+cMlMxhQvUR+DWGOkGWedMSZX2khwOqVoRaQefONdM6i9M3N8oS4mtJ00cVHCaHxWZskhdjg6D+8jmoqOKmobNbHJ5Pnm8MlhIKDYB7jhmk5R//Z",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": null,
    "statusBadge": "Completed Residence",
    "scope": "Multi-Storey Family Home · Custom Steel Gate & Color Elevation"
  },

  // 9. Peacock Jali Wood Living Partition
  {
    "slug": "custom-wooden-partition-jali-interior-rajahmundry",
    "originalFile": "iii.jpg.jpg",
    "title": "Peacock Jali Wood Living Partition",
    "location": "Rajahmundry",
    "category": "interior",
    "projectType": "interior",
    "alt": "Handcrafted wooden partition screen with illuminated peacock jali design and display shelves in Rajahmundry",
    "width": 736,
    "height": 908,
    "aspectRatio": 0.81,
    "src": "/images/optimized/custom-wooden-partition-jali-interior-rajahmundry.webp",
    "srcSet": "/images/optimized/custom-wooden-partition-jali-interior-rajahmundry-480.webp 480w",
    "widths": [480],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAZABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUCAwQG/8QAJxAAAgEEAQIFBQAAAAAAAAAAAQIDAAQRIRITMQU0QYGhFDNRcXL/xAAXAQEBAQEAAAAAAAAAAAAAAAADAgAB/8QAGhEAAwEBAQEAAAAAAAAAAAAAAAERAiEDEv/aAAwDAQACEQMRAD8AwWzGaE8rWWFARlpCGB323ut0KNFDcG3uJI8bHE6HfRFc/HN4gk6xO0pR2bCsdHWvmm9uHjgl5jBwew0den5GfWp039dFXcsbC0hCjmxZsbNFBbdFVUFGLpkH07MdBSD75qLQgPIVk6nM5bgM/I0KquPLSfqtq+Ti/mi9LUxcOKFnVV9qwxRSm5+77UVjkP/Z",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": null,
    "statusBadge": "Interior Craftsmanship",
    "scope": "Teak Wood Partition · CNC Peacock Jali Screen & LED Niches"
  },

  // 10. Gloss Acrylic Modular Kitchen
  {
    "slug": "modern-modular-kitchen-cabinets-rajahmundry",
    "originalFile": "uuuu.jpg.jpg",
    "title": "Gloss Acrylic Modular Kitchen",
    "location": "Rajahmundry",
    "category": "interior",
    "projectType": "interior",
    "alt": "Sleek acrylic modular kitchen with black granite countertop and under-cabinet lighting in Rajahmundry",
    "width": 564,
    "height": 846,
    "aspectRatio": 0.67,
    "src": "/images/optimized/modern-modular-kitchen-cabinets-rajahmundry.webp",
    "srcSet": "/images/optimized/modern-modular-kitchen-cabinets-rajahmundry-480.webp 480w",
    "widths": [480],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQCAwUG/8QAKxAAAgEDAgUDBQEAAAAAAAAAAQIDAAQRBRITIUEGFCIxUYEVJDJxobHR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIA/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMwEAAhEDEQA/ANFbqytoTmTiSD6to3Gs2fXslu7Wp+7nAFStoysjJG28SKUDqeYIOM49qVn0RpI3UXCjIPiZTz/NVEoXusahDKqiSFcoCQvMDNFJns8uT82MdMg5/VFBPzadJZsHLMiqfAw8zVPfL2DPDnLD0auokwwKsAQeRB61jX+mKsbywNtCjJRvL2NVRCHxu4HJ7ZCfXZ/KKVXDKGHWisz/2Q==",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": null,
    "statusBadge": "Interior Craftsmanship",
    "scope": "Modular Kitchen Cabinets · Black Granite Counter & Under-Cabinet Lights"
  },

  // 11. Traditional Pillared Courtyard Hall
  {
    "slug": "traditional-arched-hallway-pillars-rajahmundry",
    "originalFile": "lll.jpg.jpg",
    "title": "Traditional Pillared Courtyard Hall",
    "location": "Rajahmundry",
    "category": "interior",
    "projectType": "interior",
    "alt": "Traditional Indian hallway with circular pillars, arched colonnade, and illuminated doll niches in Rajahmundry",
    "width": 963,
    "height": 1280,
    "aspectRatio": 0.75,
    "src": "/images/optimized/traditional-arched-hallway-pillars-rajahmundry.webp",
    "srcSet": "/images/optimized/traditional-arched-hallway-pillars-rajahmundry-480.webp 480w, /images/optimized/traditional-arched-hallway-pillars-rajahmundry-800.webp 800w",
    "widths": [480, 800],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIDBAUG/8QAJhAAAgICAQMCBwAAAAAAAAAAAQIDEQAEIQYSMQUTFSNBUXGhwf/EABUBAQEAAAAAAAAAAAAAAAAAAAMB/8QAGREBAAMBAQAAAAAAAAAAAAAAAAERIRIT/9oADAMBAAIRAxEAPwDNg1GbbVZjbyKHP3I/H8yf13VXUWF44vaZnEbIR+8qdP7qfFIDK1UW5Y/Tis1+sJkrXpu75ym7vCqbJlLQhWNQgCkKKsjDIUnDLbHm8MPzL05NdYCRWruQcGvOR7qqgUxSEr3ChfjLMbGvOLtorQlyAWHg4sToqwo29xRQmesMWMkoCcMqP//Z",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": null,
    "statusBadge": "Interior Craftsmanship",
    "scope": "Circular RCC Pillars · Arched Colonnade Hallway & Doll Niches"
  },

  // Archive / In-Progress & Founder entries (used in About / Home founder spotlight)
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
    "widths": [480, 800],
    "blurDataUrl": "data:image/webp;base64,UklGRrYAAABXRUJQVlA4IKoAAABQBACdASoUABkAPtFYpEyoJSOiKA1RABoJQAAFjrcnMziwc1lrEMyTmfiAAPxQNyi7Wz9GHrf76l818oZgq6822i5bn01y7TByCZEdacFnc2bpyd2i6F9N6WcSO1izZI5VtAfpcwI7LBIBGAJ+y8zSBmWSPe+/93/7xRSFfF08K+4luf5RRkbE/e0JeItneu8p0w8vYaVqqkFq+lj/cM7MPA9fN/i9NpAAAA==",
    "isHeroCandidate": false,
    "isFounderPortrait": true,
    "excludeReason": null,
    "statusBadge": "Founder & Chief Contractor"
  },
  {
    "slug": "structural-framing-elevation-inspection-rajahmundry",
    "originalFile": "qqqq.jpg.jpg",
    "title": "Multi-Storey Civil Framing & Beam Inspection",
    "location": "Rajahmundry",
    "category": "in-progress",
    "alt": "Multi-level building concrete frame inspection with structural beam markings in Rajahmundry",
    "width": 1080,
    "height": 1440,
    "aspectRatio": 0.75,
    "src": "/images/optimized/structural-framing-elevation-inspection-rajahmundry.webp",
    "srcSet": "/images/optimized/structural-framing-elevation-inspection-rajahmundry-480.webp 480w, /images/optimized/structural-framing-elevation-inspection-rajahmundry-800.webp 800w",
    "widths": [480, 800],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAgP/xAAqEAACAQMDAgMJAAAAAAAAAAABAgMABBEFITESExSBkTJBQkNRYXGh0f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAAMBAAAAAAAAAAAAAAAAAAABERL/2gAMAwEAAhEDEQA/AK+tahJp1qnhlYyufaChukffP1qZNPd+FDXsjGWSVQFduoAH0GfKpOr6jb3N4HaBy0Z5D56wOBjHH9qldyyslszZy0iswB2XY0boSiHBePEBH3SAvHuopCUBnJL4ziipo1mkSLUXhuVItI0lf4gCDv8AmqcvdkaMuYXdG6l2Iwa4G6nknMLyFoweDv8AuiYBUJXY45rIpp++G36fImilO/KPmN60Uhaz/9k=",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": "Under-construction inspection photo"
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
    "widths": [480],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQDBQYH/8QAKRAAAgEDAgUDBQEAAAAAAAAAAQIDAAQRBRSIjEGE0FhUYGRocHw8f/EABYBAQEBAAAAAAAAAAAAAAAAAAIDAP/EABoRAQEAAgMAAAAAAAAAAAAAAAEAAiERElH/2gAMwEAAhEDEQA/ANNrN1La2Ja3YpKW6ekd8Ula61diw8y52h1l2bgRmQnsAKj8TTs9tHb9IkcFlDEAdwPX2Jql06Y2sNyXjUlWygVwxI/FTXyeBvd0JW3KCASDz3oqk0nW1k02Bpo2Em3DbcEfuMUUxiliNbgdHh3PkO67ctnHxpfS5s+acYBJH0/tOeKAEv7RF4XAOPnSMIEVjM0YCkFeR71kI4PE6ksHK8dB24wTj70VprOwtGhwbaIhTtGVHbAoqfcm5N//2Q==",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": "Under-construction masonry stage"
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
    "widths": [480, 800, 1280],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUDBAb/xAAlEAACAQMDAgcAAAAAAAAAAAABAgQAAxEFMVEhgRITFCJBQ6H/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABoRAAICAwAAAAAAAAAAAAAAAAABERICEyH/2gAMwEAAhEDEQA/AGWtTDDs4tAeaw6eLZRyaVwNaBcW5e3xdUdO4qfVZcYss1lMgfUB7QBzg0rF7TJLlmj3o7gDLWyOONvym7nhKxUGvt2hctq6EMrDIZTkGiqEDVI8eItr1AYLsXtHOO1FXsQUZ//Z",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": "Under-construction shuttering stage"
  },
  {
    "slug": "commercial-arched-building-construction-rajahmundry",
    "originalFile": "ma.jpg.jpg",
    "title": "Arched Commercial Hall Facade (Under Construction)",
    "location": "Rajahmundry",
    "category": "in-progress",
    "alt": "Arched colonnade commercial structure during plastering and site preparation in Rajahmundry",
    "width": 1280,
    "height": 963,
    "aspectRatio": 1.33,
    "src": "/images/optimized/commercial-arched-building-construction-rajahmundry.webp",
    "srcSet": "/images/optimized/commercial-arched-building-construction-rajahmundry-480.webp 480w, /images/optimized/commercial-arched-building-construction-rajahmundry-800.webp 800w, /images/optimized/commercial-arched-building-construction-rajahmundry-1280.webp 1280w",
    "widths": [480, 800, 1280],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIGBAX/xAAlEAABAgUCBwEAAAAAAAAAAAABAAIDBAURIRIxBhMyQVFhcZL/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAQADAQAAAAAAAAAAAAAAAAABESEi/9oADAMBAAIRAxEAPwDfJ16FIQ+TEBedV8uIsPV07+JwTYCFbbdTbqfCFu/0lOKfLBrXOznG6Kg3KkbWoL2h2h2fBCFxGSEC3Qf2hHKtf//Z",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": "Under-construction commercial arch frame"
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
    "widths": [480],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAkABQDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAYEBQcBA//EACcQAAICAQIFAwUAAAAAAAAAAAECAAMRBBIFEyExQQYUkSJSYXGB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgEA/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERIf/aAAwDAQACEQMRAD8AjPxHUPr1L2VgqcitTuJ/viMa0pfUtqD6WGf1FZarltAanT0LnrWpG7575jFwO3bqRQ/Rbh03fcIpUseh0wz2hLZ9PhoS6jPq/YC6vlG9m3dHxjPzL3QuK79NYGDBXXLeT+ZRLqa/cLt0DKFOQ2cASTTxWnm8t6WoZV6HcPHYCE2hWEbzCKL+obScq5bI8JCHrYXN5xmc1NhrqSxQA24dcd4QiZJQm8FmOCpKjAEIQg0n/9k=",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": "Under-construction plastering stage"
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
    "widths": [480, 800],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGQAAAwEBAAAAAAAAAAAAAAAAAAQFAwIG/8QAJxAAAgEDAwMDBQAAAAAAAAAAAQIDAAQRBRIhEzFBBkJhFFFTcfH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/8QAGREBAAIDAAAAAAAAAAAAAAAAAAERAhJB/9oADAMBAAIRAxEAPwCzrup3NpcILWWMIynIZMkEH+UlD6guYmkW7XqkfiIBHH65qVqyxLe3LRSZx2XfkkjxSsSiN5HjYMVxtwc89+aLFPS/X7lV2diXUN3HkUUlp9xizjWVlR1yCOkD5+RRQlI1C3eOS+kkZXnjCk4HBJ+KzW3ZLlnSTam1cBRznAzVSdRG8W33ICxJzk0hklmz9zUbW1jHjdQR7jzyc0VxbsWiBJPc0Uyf/9k=",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": "Under-construction masonry work"
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
    "widths": [480, 800],
    "blurDataUrl": "data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAkABQDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EACYQAAIBAwMEAQUAAAAAAAAAAAECAwAEERIhMRMUQVEiI0JhofD/xAAXAQEBAQEAAAAAAAAAAAAAAAADBAEC/8QAIREAAQQBBAMBAAAAAAAAAAAAAQACAxESEyEiMQRRkaH/2gAMwEAAhEDEQA/ANbNcPb62k3JPG3mogJFqrGQlskE5P8AeamS8g1dAW7qxJwvmqLmSKBRE8mhgMlD9ufdceZJrQhjDuro2xx0cMfivt71hHhjqOeSKVhh6JTIkYjPIFKPin1YvX4u5ryTuRK9vKoJyG0+v3We9Ntc3WTL9YqNWonJ2/NerNH297aQQ3XbJO51nOQMDneu54IYZWVr4uPLsw+R97UccowEg3tQycyGVVKmzs7dbdVeTDDYjI2NKkQwEkly5J5DUozHkcr7TtiNBfP3Mkl65aeQnBOBtgVCqeki63wFG2aUpWAAUEJ7BVkDSRqwSV1GeAaUpShaCv/Z",
    "isHeroCandidate": false,
    "isFounderPortrait": false,
    "excludeReason": "Color swatch catalog"
  }
];

export const FOUNDER_IMAGE = SITE_IMAGES.find(img => img.isFounderPortrait)!;

/**
 * Filtered Completed Projects for the Projects Dashboard:
 * Excludes founder portrait and under-construction raw stages.
 * Only presents finished, turnkey architecture and interiors.
 */
export const COMPLETED_PROJECTS: ConstructionImage[] = SITE_IMAGES.filter(
  img => !img.isFounderPortrait && img.category !== 'in-progress' && img.category !== 'other' && !img.excludeReason
);

/**
 * Premier finished homes curated for the animated Hero slideshow.
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
 */
export const COMPLETED_PROJECT_SLUGS = new Set<string>(
  COMPLETED_PROJECTS.map(img => img.slug)
);

export const isProjectCompleted = (slug: string): boolean => {
  return COMPLETED_PROJECT_SLUGS.has(slug);
};
