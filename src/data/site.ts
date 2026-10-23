/**
 * MK Constructions - Master Business & Site Configuration
 * 
 * IMPORTANT: All business facts here are verified.
 * Where real data is yet to be supplied by the owner (e.g. physical street address,
 * Google Business Profile link, social links, customer reviews), placeholders
 * are explicitly marked with TODO comments.
 */

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  teluguTitle: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  teluguDesc: string;
  features: string[];
  processSteps: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedImageSlugs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
  author: string;
  content: string[];
  keyTakeaways: string[];
}

export interface TestimonialPlaceholder {
  id: string;
  author: string;
  role: string;
  location: string;
  projectType: string;
  quote: string;
  isPlaceholder: true;
}

export const SITE_CONFIG = {
  name: 'MK Constructions',
  legalName: 'MK Constructions Rajahmundry',
  taglines: [
    'Building Homes. Creating Trust.',
    'Quality Construction with Honest Commitment'
  ],
  founder: {
    name: 'Gedala Laxman Rao',
    teluguName: 'గెడల లక్ష్మణరావు',
    role: 'Founder & Chief Civil Contractor',
    experienceYears: 10,
    experienceText: '10+ Years of Direct On-Site Civil Construction Experience in Rajahmundry',
    portraitSlug: 'gedala-laxman-rao-founder-mk-constructions',
    bio: 'Contractor Gedala Laxman Rao is a hands-on civil builder with over a decade of personal on-site construction leadership in Rajahmundry. Known for strict adherence to IS-456 structural standards, 100% Vastu compliance, and an unbending commitment to quality materials (UltraTech 53-grade cement, primary Fe-550D TMT rebar, and kiln-fired Godavari red bricks). Unlike remote builders who sublet work to third-party sub-contractors, Laxman Rao personally supervises every excavation, column casting, and slab pour daily.',
    teluguBio: 'గెడల లక్ష్మణరావు గారు గత 10+ సంవత్సరాలుగా రాజమండ్రి పరిసర ప్రాంతాలలో అత్యంత నమ్మకమైన సివిల్ కాంట్రాక్టర్‌గా గుర్తింపు పొందారు. పనులను ఇతరులకు సబ్-కాంట్రాక్ట్ ఇవ్వకుండా, ప్రతి సైట్‌ను స్వయంగా ఉదయం, సాయంత్రం పర్యవేక్షిస్తూ బలమైన, సురక్షితమైన కలల గృహాలను నిర్మిస్తారు. నాణ్యమైన అల్ట్రాటెక్ 53 సిమెంట్, Fe-550D స్టీల్, గోదావరి ఎర్ర ఇటుకలు మరియు 21 రోజుల నిరంతర నీటి క్యూరింగ్‌తో తరతరాలు నిలిచే ఇళ్లను నిర్మించడమే వీరి నిబద్ధత.',
    commitments: [
      'Daily Personal Morning & Evening On-Site Inspections',
      'Direct Direct-To-Contractor Phone Access (No Middlemen)',
      '100% Transparent Dealer Invoices for Cement, Steel & Bricks',
      'Strict 21-Day Continuous Water Ponding Curing for Roof Slabs',
      'Zero Structural Compromise Policy'
    ]
  },
  team: {
    totalWorkers: '35+',
    headline: '35+ Permanent Workforce: 15 Experienced Mestries & 20+ Dedicated Coolies',
    teluguHeadline: '35+ శాశ్వత శ్రామిక బలం: 15 మంది అనుభవజ్ఞులైన తాపీ మేస్త్రీలు & 20+ కూలీలు',
    summary: 'MK Constructions maintains a permanent in-house workforce of 35+ dedicated workers, including 15 experienced master mestries and 20+ skilled coolies. We never depend on street day-labor, ensuring flawless structural strength and timely completion.',
    teluguSummary: 'బయటి రోజువారీ కూలీలపై ఆధారపడకుండా, MK Constructions వద్ద 15 మంది అనుభవజ్ఞులైన తాపీ మేస్త్రీలు మరియు 20+ మంది సుశిక్షితులైన కూలీలు శాశ్వతంగా పనిచేస్తున్నారు. దీనివల్ల పండుగల సమయంలోనూ పని ఆగకుండా సమయానికి అత్యుత్తమ నాణ్యతతో పూర్తవుతుంది.',
    groups: [
      {
        title: '15 Experienced Master Mestries (అనుభవజ్ఞులైన ప్రధాన తాపీ మేస్త్రీలు)',
        count: '15 Veterans',
        experience: '10 - 18 Years Mastery',
        description: 'Master craftsmen specialized in plumb-line red brick alignment, right-angle corner masonry, Fe-550D rebar grid tying, and leak-proof steel shuttering centering.'
      },
      {
        title: '20+ Dedicated Concrete Laborers & Coolies (శ్రామికులు & కూలీలు)',
        count: '20+ Workers',
        experience: '8+ Years Experience',
        description: 'Trained batch-mixing crew, needle vibrator operators preventing honeycombs, heavy material handlers, and daily 21-day continuous pond water curing specialists.'
      }
    ]
  },
  guarantees: [
    {
      id: 'price-lock',
      title: 'Zero Price-Escalation Guarantee',
      teluguTitle: 'లాక్డ్-రేట్ బడ్జెట్ అగ్రిమెంట్',
      tagline: 'The price agreed in the contract is the price you pay.',
      desc: 'Even if cement or steel market prices rise during the project, MK Constructions absorbs the difference. Homeowners never face surprise price hikes mid-build.'
    },
    {
      id: 'structural-warranty',
      title: '10-Year Structural Guarantee',
      teluguTitle: '10 సంవత్సరాల స్ట్రక్చరల్ వారంటీ',
      tagline: 'Certified structural stability for peace of mind.',
      desc: 'Written structural warranty on RCC column footings, plinth tie beams, and roof slabs constructed with certified primary Fe-550D steel and 53-grade cement.'
    },
    {
      id: 'live-updates',
      title: 'Daily WhatsApp Video & Photo Progress',
      teluguTitle: 'రోజువారీ వాట్సాప్ వీడియో & ఫోటో అప్‌డేట్స్',
      tagline: 'Transparent progress tracking for locals and NRIs.',
      desc: 'Every evening, contractor Gedala Laxman Rao sends timestamped video clips and photos of day’s concrete pours, brickwork, and curing directly to your phone.'
    },
    {
      id: 'milestone-payments',
      title: '100% Stage-By-Stage Milestone Billing',
      teluguTitle: 'దశలవారీగా పనులు చూసి మాత్రమే చెల్లింపులు',
      tagline: 'Zero high-risk upfront payments.',
      desc: 'Your payments are divided into 7 transparent stages. You inspect and verify each milestone with the contractor before releasing the next installment.'
    }
  ],
  location: {
    city: 'Rajahmundry',
    district: 'East Godavari District',
    state: 'Andhra Pradesh',
    country: 'India',
    countryCode: 'IN',
    streetAddress: 'Near Ramalayam, Annapurnammapeta',
    postalCode: '533101',
    addressLocality: 'Rajahmundry',
    addressRegion: 'Andhra Pradesh',
    address: 'Near Ramalayam, Annapurnammapeta, Rajahmundry, Andhra Pradesh 533101',
    fullAddress: 'Near Ramalayam, Annapurnammapeta, Rajahmundry, Andhra Pradesh 533101',
    googleMapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=Near+Ramalayam,+Annapurnammapeta,+Rajahmundry,+Andhra+Pradesh+533101',
    areaServed: [
      'Rajahmundry City',
      'Annapurnammapeta',
      'Danavaipeta',
      'Morampudi',
      'VL Puram',
      'Diwancheruvu',
      'Hukumpeta',
      'Katheru',
      'Kovvur',
      'Godavari Urban Region'
    ],
    // Coordinates for Annapurnammapeta near Ramalayam, Rajahmundry
    geo: {
      latitude: '17.0065',
      longitude: '81.7820'
    }
  },
  contact: {
    primaryPhone: '+91 93814 40177',
    primaryPhoneRaw: '+919381440177',
    secondaryPhone: '+91 95585 55288',
    secondaryPhoneRaw: '+919558555288',
    whatsappNumber: '919381440177',
    whatsappLink: 'https://wa.me/919381440177',
    email: 'mkconstructions87@gmail.com',
    // TODO: Confirm business working hours with owner
    workingHours: 'Monday – Saturday: 8:30 AM – 7:30 PM (Sunday by Appointment)',
    workingHoursSchema: 'Mo-Sa 08:30-19:30',
  },
  social: {
    // TODO: Add actual Google Business Profile URL once created/claimed
    googleBusinessProfile: 'https://maps.google.com/?q=MK+Constructions+Rajahmundry',
    // TODO: Add Instagram URL if available
    instagram: '',
    // TODO: Add Facebook Page URL if available
    facebook: '',
    // TODO: Add Justdial/Sulekha links if listed
    justdial: '',
  },
  url: typeof window !== 'undefined' ? window.location.origin : 'https://mkconstructionsrajahmundry.com',
  about: {
    english: 'MK Constructions is a trusted name in house construction, known for quality and reliability. With 10+ years of experience we deliver strong, safe, well-designed homes. We focus on customer satisfaction, quality materials and timely completion. Our commitment is to build homes that last for generations.',
    telugu: 'MK Constructions గృహ నిర్మాణ రంగంలో విశ్వసనీయమైన పేరు. 10+ సంవత్సరాల అనుభవంతో బలమైన, సురక్షితమైన మరియు నాణ్యమైన ఇళ్లను నిర్మిస్తున్నాము. గ్రాహక సంతృప్తి, ఉత్తమ పదార్థాలు మరియు సమయానికి పనులు పూర్తిచేయడం మా లక్ష్యం. తరతరాల పాటు నిలిచే ఇళ్లను నిర్మించడమే మా నిబద్ధత.',
  },
  stats: [
    {
      numericValue: 10,
      prefix: '',
      suffix: '+',
      label: 'Years of Experience',
      teluguLabel: 'సంవత్సరాల అనుభవం',
      subtext: 'Direct civil contracting in Rajahmundry',
      isVerified: true,
    },
    {
      numericValue: 35,
      prefix: '',
      suffix: '+',
      label: 'Skilled Mestries & Coolies',
      teluguLabel: 'మేస్త్రీలు & కూలీల బృందం',
      subtext: '15 Mestries & 20+ Coolies (No daily market labor)',
      isVerified: true,
    },
    {
      numericValue: 50,
      prefix: '',
      suffix: '+',
      label: 'Satisfied Families',
      teluguLabel: 'సంతృప్తి చెందిన కుటుంబాలు',
      subtext: 'In Rajahmundry & Godavari region',
      isVerified: false,
    },
    {
      numericValue: 100,
      prefix: '',
      suffix: '%',
      label: 'Direct On-Site Supervision',
      teluguLabel: 'ప్రత్యక్ష పర్యవేక్షణ',
      subtext: 'Daily site checks by Gedala Laxman Rao',
      isVerified: true,
    },
  ],
  services: [
    {
      id: 'house-construction',
      slug: 'house-construction-rajahmundry',
      title: 'House Construction',
      teluguTitle: 'ఇళ్ల నిర్మాణం (House Construction)',
      tagline: 'Custom Independent Houses & Villas Built to Last Generations',
      shortDesc: 'Turnkey residential house construction in Rajahmundry with complete structural engineering, premium red brick masonry, and Vastu-compliant layouts.',
      fullDesc: 'From initial foundation excavation to roof slab casting and final finish, MK Constructions delivers turnkey residential construction for independent houses and duplex villas in Rajahmundry. Contractor Gedala Laxman Rao provides active, daily on-site supervision to guarantee high-grade cement, tested TMT rebar, and premium grade brickwork at every stage.',
      teluguDesc: 'పునాది నుంచి గృహ ప్రవేశం వరకు పూర్తి బాధ్యతతో బలమైన, సురక్షితమైన మరియు వాస్తుబద్ధమైన ఇళ్లను నిర్మిస్తాము. ప్రతి దశలో నాణ్యమైన సామాగ్రి మరియు నేరుగా కాంట్రాక్టర్ పర్యవేక్షణ ఉంటుంది.',
      features: [
        'Complete Turnkey Civil Construction',
        'Vastu-Compliant Architectural Planning',
        'Certified TMT Steel & High-Strength Concrete Mixes',
        'First-Grade Godavari Sand & Red Kiln Bricks',
        'Daily Contractor On-Site Supervision'
      ],
      processSteps: [
        { step: '01', title: 'Consultation & Site Soil Inspection', desc: 'Understanding your requirements, site soil condition, budget, and building permit parameters in Rajahmundry.' },
        { step: '02', title: 'Architectural Plan & Vastu Alignment', desc: 'Detailed 2D/3D floor layouts, structural drawings, and material specifications agreed before work starts.' },
        { step: '03', title: 'Substructure & Foundation Casting', desc: 'Deep excavation, anti-termite treatment, column footings, plinth beams, and robust damp-proofing.' },
        { step: '04', title: 'Superstructure, Masonry & Slab', desc: 'RCC column framing, roof slab casting with vibration curing, and solid red brick walls.' },
        { step: '05', title: 'Finishing, Testing & Handover', desc: 'Concealed electrical, plumbing pressure checks, plastering, premium tile flooring, and timely handover.' },
      ],
      faqs: [
        {
          question: 'Do you build according to traditional Vastu principles?',
          answer: 'Yes. Every floor plan and doorway placement is tailored according to traditional Indian Vastu Shastra principles while optimizing modern space and natural ventilation.'
        },
        {
          question: 'What materials are used for independent houses in Rajahmundry?',
          answer: 'We exclusively use reputable ISI-certified 53-grade cement (such as UltraTech or Nagarjuna), Fe-550D TMT steel bars, clean Godavari river sand, and kiln-fired solid red bricks.'
        },
        {
          question: 'Does the contractor supervise the construction site personally?',
          answer: 'Yes. Gedala Laxman Rao personally visits and oversees all active sites in Rajahmundry on a daily basis to inspect structural alignment and concrete curing.'
        }
      ],
      relatedImageSlugs: [
        'modern-residential-house-elevation-rajahmundry-01',
        'luxury-multi-storey-home-rajahmundry-02',
        'independent-house-front-elevation-rajahmundry',
        'rcc-roof-slab-shuttering-construction-rajahmundry',
        'red-brick-masonry-house-construction-rajahmundry'
      ]
    },
    {
      id: 'commercial-buildings',
      slug: 'commercial-buildings-rajahmundry',
      title: 'Commercial Buildings',
      teluguTitle: 'వాణిజ్య భవనాలు (Commercial Buildings)',
      tagline: 'Robust Commercial Complexes, Halls & Retail Showrooms',
      shortDesc: 'Engineering durable commercial structures, shopping complexes, multi-storey offices, and event halls across Rajahmundry and East Godavari.',
      fullDesc: 'Commercial construction requires high-capacity structural load calculations, open span column grids, durable fire-safe materials, and efficient pedestrian traffic flow. MK Constructions executes commercial projects with strict compliance to municipal regulations and timely milestone schedules.',
      teluguDesc: 'షాపింగ్ కాంప్లెక్స్‌లు, ఆఫీస్ బిల్డింగ్‌లు మరియు ఫంక్షన్ హాళ్ల కోసం పటిష్టమైన నిర్మాణాలు. వాణిజ్య అవసరాలకు తగిన రూపకల్పన మరియు గడువులోగా పూర్తి.',
      features: [
        'Large-Span Heavy-Duty RCC Framing',
        'Modern Front Facade & Glass Elevation',
        'Municipal By-Law & Fire Clearance Compliance',
        'High Footfall Flooring & Drainage Infrastructure',
        'Dedicated Lift Shaft & Utility Planning'
      ],
      processSteps: [
        { step: '01', title: 'Feasibility & Commercial Usage Study', desc: 'Assessing frontage visibility, floor-to-ceiling heights, parking mandates, and structural loads.' },
        { step: '02', title: 'Heavy Foundation & Column Gridding', desc: 'Heavy load-bearing column pedestals, reinforced footings, and seismic-resistant RCC frame construction.' },
        { step: '03', title: 'Flooring & Service Risers', desc: 'Spacious retail floor plates, plumbing shafts, electrical risers, and high-durability stairwells.' },
        { step: '04', title: 'Exterior Elevation & Glassworks', desc: 'Weather-resistant textured exterior plaster, glazing frames, and branded entrance portals.' }
      ],
      faqs: [
        {
          question: 'Can you handle multi-storey commercial construction?',
          answer: 'Yes, we have extensive hands-on experience executing multi-storey framed structures, apartment blocks, and commercial venues with strict structural compliance.'
        },
        {
          question: 'How do you ensure milestones are met for commercial investments?',
          answer: 'We provide itemized stage-wise progress schedules and manage material procurement proactively to avoid monsoon and supply-chain delays.'
        }
      ],
      relatedImageSlugs: [
        'commercial-arched-building-construction-rajahmundry',
        'multi-storey-apartment-scaffolding-plastering-rajahmundry',
        'building-construction-workers-masonry-rajahmundry'
      ]
    },
    {
      id: 'renovation-remodeling',
      slug: 'renovation-remodeling-rajahmundry',
      title: 'Renovation & Remodeling',
      teluguTitle: 'మరమ్మతులు & ఆధునికీకరణ (Renovation)',
      tagline: 'Revitalizing Older Homes with Modern Strength and Fresh Aesthetics',
      shortDesc: 'Structural strengthening, additional floor additions, damp-proofing, facade remodeling, and complete modernization of existing houses in Rajahmundry.',
      fullDesc: 'Whether you need to add an upper floor to your existing house, eliminate chronic roof dampness, modernize your exterior facade, or reconfigure interior walls for contemporary living, MK Constructions blends heritage structures with modern engineering.',
      teluguDesc: 'పాత ఇళ్ల పునరుద్ధరణ, అదనపు అంతస్తుల నిర్మాణం, రూఫ్ లీకేజ్ మరమ్మతులు మరియు ఎలివేషన్ మార్పులు సురక్షితమైన ఇంజనీరింగ్‌తో చేస్తాము.',
      features: [
        'Upper Floor Vertical Extensions & Slab Tie-Ins',
        'Structural Crack Repair & Epoxy Grouting',
        'Advanced Waterproofing & Damp-Proofing Solutions',
        'Modern Exterior Elevation Upgrades',
        'Space Optimization & Wall Reconfiguration'
      ],
      processSteps: [
        { step: '01', title: 'Structural Integrity Assessment', desc: 'Checking existing columns, foundation settlement, and load capacity prior to adding new levels.' },
        { step: '02', title: 'Remodeling Blueprint & Demolition Plan', desc: 'Controlled, safe structural modifications avoiding any stress to neighboring properties.' },
        { step: '03', title: 'Reinforcement & Expansion', desc: 'Anchoring new rebar, pouring reinforced tie beams, and executing precise masonry additions.' },
        { step: '04', title: 'Waterproof Membrane & Surface Finishing', desc: 'Multi-layer terrace waterproofing and aesthetic external texture application.' }
      ],
      faqs: [
        {
          question: 'Is it safe to construct an additional floor on an older building?',
          answer: 'We first inspect the foundation depth, column size, and load capacity. If necessary, we add column jackets or steel reinforcements before casting the new floor.'
        },
        {
          question: 'How do you handle persistent water leakage and terrace seepage?',
          answer: 'We chip down to the sound concrete slab, apply elastomeric waterproof membranes, install proper slope screeds, and seal all construction joints.'
        }
      ],
      relatedImageSlugs: [
        'rcc-roof-slab-shuttering-construction-rajahmundry',
        'red-brick-masonry-house-construction-rajahmundry',
        'independent-house-front-elevation-rajahmundry'
      ]
    },
    {
      id: 'interior-exterior-works',
      slug: 'interior-exterior-works-rajahmundry',
      title: 'Interior & Exterior Works',
      teluguTitle: 'ఇంటీరియర్ & ఎక్స్‌టీరియర్ వర్క్స్ (Interior & Exterior)',
      tagline: 'Custom Woodwork, CNC Partitions, Modular Kitchens & Elevation Art',
      shortDesc: 'Fine interior finishings, custom wood partitions, acrylic modular kitchens, textured exterior elevations, and stainless steel / glass gates in Rajahmundry.',
      fullDesc: 'The finishing touch transforms a civil structure into an inviting home. MK Constructions crafts bespoke interior woodwork, false ceilings, CNC-cut decorative jali partitions, modular kitchen cabinetry, and weather-proof exterior decorative plaster patterns.',
      teluguDesc: 'అందమైన ఇంటీరియర్ వుడ్‌వర్క్, సీఎన్‌సీ జాలీలు, మోడ్యులర్ కిచెన్‌లు మరియు ఆధునిక ఎక్స్‌టీరియర్ ఎలివేషన్ డిజైన్లు.',
      features: [
        'Custom Wooden Partitions with CNC Jali Art',
        'High-Gloss Acrylic & Laminate Modular Kitchens',
        'Architectural Facade Plaster & Exterior Textures',
        'Gypsum & POP False Ceiling with Ambient LED Grooves',
        'Designer Stainless Steel Gates & Glass Railings'
      ],
      processSteps: [
        { step: '01', title: 'Interior Concept & Material Selection', desc: 'Selecting water-resistant plywood, acrylic veneers, quartz counters, and paint palettes.' },
        { step: '02', title: 'Carpentry & Elevation Framing', desc: 'Precision CNC routing, framing partition pillars, and exterior mold fabrication.' },
        { step: '03', title: 'Electrical & Illumination Integration', desc: 'Concealed LED strip profiles, cove lighting, and appliance electrical points.' },
        { step: '04', title: 'Final Finishing & Polish', desc: 'Melamine/PU wood polishes, smooth acrylic painting, and precision hardware installation.' }
      ],
      faqs: [
        {
          question: 'Do you design modular kitchens suited for Indian cooking?',
          answer: 'Yes, our modular kitchens feature heavy-duty stainless steel wire baskets, heat-resistant quartz/granite counters, and easy-clean acrylic shutters designed for Indian spices and heavy cookware.'
        },
        {
          question: 'Can you replicate custom front elevation patterns from 3D models?',
          answer: 'Yes, our experienced plasterers and fabricators create custom geometric grooves, circular motifs, and composite stone finishes directly matching architectural drawings.'
        }
      ],
      relatedImageSlugs: [
        'custom-wooden-partition-jali-interior-rajahmundry',
        'modern-modular-kitchen-cabinets-rajahmundry',
        'traditional-arched-hallway-pillars-rajahmundry',
        'lakshmi-nilayam-residential-building-rajahmundry-04'
      ]
    }
  ],
  blogPosts: [
    {
      slug: 'house-construction-cost-factors-rajahmundry',
      title: 'House Construction Cost Factors in Rajahmundry (Complete Guide)',
      excerpt: 'A realistic, honest breakdown of what influences per-square-foot construction costs in Rajahmundry—from soil conditions to steel grades and finishes.',
      readTime: '6 min read',
      date: 'October 2026',
      category: 'Cost & Budgeting',
      author: 'Gedala Laxman Rao',
      keyTakeaways: [
        'Soil composition near the Godavari river bank requires tailored foundation depths.',
        'Material choices (TMT grade Fe-550D vs local rebar) impact long-term seismic durability.',
        'Clear contracts with transparent material bills prevent mid-project price escalation.'
      ],
      content: [
        'When planning to construct a home in Rajahmundry or the surrounding East Godavari region, one of the most common questions homeowners ask is: "What will the true cost per square foot be?" While generic online estimates often quote blanket numbers, real construction costs depend directly on specific engineering variables.',
        '1. Foundation Depth and Ground Soil: Rajahmundry has diverse soil geography—ranging from hard gravel terrain near hills to soft alluvial silt deposits closer to the river belt. Sites requiring deep pile foundations or reinforced continuous plinth beams have different substructure costs than rock-bed plots.',
        '2. Structural Steel and Cement Quality: At MK Constructions, we recommend Fe-550D grade TMT steel and 53-grade OPC/PPC cement for all structural columns and slabs. While sub-standard rerolled steel might save 5% on initial material bills, it compromises crack resistance and structural longevity.',
        '3. Masonry: Godavari Red Kiln Bricks vs Fly Ash Blocks: High-temperature kiln-burned red clay bricks remain the trusted standard in Andhra Pradesh for thermal comfort and structural stability. Their cost fluctuates with seasonal clay kiln operations.',
        '4. Electrical, Plumbing and Finishings: The difference between standard PVC fixtures and high-end CPVC pressure-tested lines, vitrified tiles, and teakwood frames can shift overall finishing budgets by 25% to 40%.',
        'Conclusion: Work with an experienced local contractor who provides an itemized bill of materials and transparent stage-wise milestone payments. Contact MK Constructions for an honest, site-specific estimate in Rajahmundry.'
      ]
    },
    {
      slug: 'how-to-choose-a-building-contractor-rajahmundry',
      title: 'How to Choose the Right Building Contractor in Rajahmundry',
      excerpt: 'Key questions to ask, red flags to avoid, and essential checks before signing a residential construction agreement in Godavari region.',
      readTime: '5 min read',
      date: 'September 2026',
      category: 'Homeowner Guide',
      author: 'Gedala Laxman Rao',
      keyTakeaways: [
        'Always verify active on-site presence rather than contractors who sub-contract everything.',
        'Inspect ongoing and completed buildings in Rajahmundry to see real workmanship.',
        'Insist on a stage-wise payment schedule tied strictly to completed structural milestones.'
      ],
      content: [
        'Building your family home is often the largest financial and emotional investment of a lifetime. Selecting the right contractor determines whether your building journey is smooth and rewarding or fraught with delays and unexpected costs.',
        '1. Hands-on Contractor Experience vs Remote Middlemen: Does your contractor personally inspect the site every day? Many large firms assign junior supervisors who miss crucial slab vibrations or curing lapses. A dedicated local contractor like Gedala Laxman Rao with 10+ years of active field experience ensures direct accountability.',
        '2. Inspect Real Buildings in Person: Do not rely solely on 3D computer renders. Ask to visit active sites where brickwork and slab reinforcement are underway, as well as homes completed 3 to 5 years ago to observe paint durability, plaster cracks, and plumbing health.',
        '3. Milestone-Based Payment Structure: Never agree to heavy upfront payments. A fair contract divides payments into clear structural milestones: Foundation, Plinth Beam, Ground Floor Slab, First Floor Slab, Masonry, Plastering, and Final Finishes.',
        '4. Vastu Alignment and Local Knowledge: Navigating Rajahmundry municipal planning regulations and ensuring proper Vastu orientation requires an experienced local builder who understands local municipal setbacks and traditional customs.'
      ]
    },
    {
      slug: 'how-long-does-house-construction-take-rajahmundry',
      title: 'How Long Does House Construction Take in Rajahmundry?',
      excerpt: 'A realistic phase-by-phase timeline for building an independent duplex home in Andhra Pradesh, factoring in monsoon curing and finishing.',
      readTime: '5 min read',
      date: 'August 2026',
      category: 'Construction Planning',
      author: 'Gedala Laxman Rao',
      keyTakeaways: [
        'A standard 2,000 to 2,500 sq ft duplex typically takes 8 to 11 months from groundbreaking to housewarming.',
        'Adequate water curing (minimum 14 to 21 days per slab) must never be rushed.',
        'Planning around the Godavari monsoon ensures smooth exterior plastering and painting.'
      ],
      content: [
        'One of the most important aspects of construction planning is establishing an accurate, realistic timeline. While some marketing claims promise "homes built in 4 months", rushing concrete curing or plaster drying leads to shrinkage cracks and damp issues down the road.',
        'Phase 1: Planning, Approvals & Excavation (Month 1): Architectural drafting, soil testing, municipal layout permits, and ground foundation pit digging.',
        'Phase 2: Foundation & Plinth Beam (Month 2): Pouring PCC bed, setting footings, casting RCC plinth beams, and backfilling with compaction.',
        'Phase 3: Superstructure & Slabs (Months 3 to 5): Erecting RCC columns, timber centering, steel cage tying, slab casting, and crucial 21-day continuous water curing.',
        'Phase 4: Brick Masonry & Concealed Services (Months 6 to 7): Red brick wall construction, door/window frame fitting, concealed electrical conduits, and plumbing lines.',
        'Phase 5: Plastering, Waterproofing & Curing (Months 8 to 9): Two-coat cement plastering, terrace waterproofing, and thorough wall curing.',
        'Phase 6: Flooring, Woodwork, Painting & Handover (Months 10 to 11): Laying vitrified floor tiles, bathroom ceramics, kitchen granite, emulsion painting, and final cleaning for Gruhapravesam (housewarming).',
        'At MK Constructions, we maintain disciplined milestone scheduling so that your home is delivered on time with uncompromised strength.'
      ]
    }
  ],
  // Testimonials - Strictly marked as placeholders per prompt rules so owner can update with real client reviews
  testimonialsPlaceholder: [
    {
      id: 'test-1',
      author: '/* TODO: Real Client Name */ Rajesh Varma',
      role: 'Homeowner',
      location: 'Danavaipeta, Rajahmundry',
      projectType: 'G+2 Independent House',
      quote: 'Gedala Laxman Rao garu took personal care of our house construction from the foundation to the final coat of paint. His on-site supervision and honesty in material selection made our family feel completely at peace.',
      isPlaceholder: true,
    },
    {
      id: 'test-2',
      author: '/* TODO: Real Client Name */ K. Srinivasa Rao',
      role: 'Commercial Property Owner',
      location: 'Morampudi, Rajahmundry',
      projectType: 'Commercial Showroom Complex',
      quote: 'MK Constructions completed our commercial building on schedule with top-quality concrete work and a modern front elevation. Highly recommended building contractor in Rajahmundry.',
      isPlaceholder: true,
    },
    {
      id: 'test-3',
      author: '/* TODO: Real Client Name */ M. Venkata Ramana',
      role: 'Independent House Owner',
      location: 'Tilak Road, Rajahmundry',
      projectType: 'Residential Remodeling & Upper Floor',
      quote: 'We wanted an additional floor and modern elevation without disturbing our existing ground floor. The engineering work and neat finishing were executed seamlessly.',
      isPlaceholder: true,
    }
  ],
  faqs: [
    {
      question: 'Where is MK Constructions located and what areas do you cover?',
      answer: 'MK Constructions is based in Rajahmundry, Andhra Pradesh. We serve the entire Rajahmundry urban and surrounding Godavari region including Danavaipeta, Morampudi, VL Puram, Katheru, Diwancheruvu, Hukumpeta, and Kovvur.'
    },
    {
      question: 'Who oversees the actual construction work on site?',
      answer: 'Our founder and chief civil contractor Gedala Laxman Rao, who has 10+ years of hands-on construction experience, directly supervises every project site daily.'
    },
    {
      question: 'What types of construction projects does MK Constructions undertake?',
      answer: 'We undertake turnkey Independent Houses, Duplex Villas, Multi-Storey Apartments, Commercial Buildings & Retail Complexes, Home Renovation & Floor Additions, and Custom Interior/Exterior Works.'
    },
    {
      question: 'How do you structure payment terms?',
      answer: 'We believe in 100% transparency. Payments are structured into clear, milestone-based installments tied strictly to verified progress stages (Foundation, Plinth, Slabs, Brickwork, Plastering, and Handover).'
    },
    {
      question: 'What materials and cement grades do you use for house construction in Rajahmundry?',
      answer: 'We exclusively use certified 53-grade OPC/PPC cement (UltraTech, Nagarjuna), Fe-550D primary TMT steel rebar, clean Godavari river sand, and kiln-burned solid red clay bricks for maximum thermal comfort and durability.'
    },
    {
      question: 'Do you follow traditional Vastu Shastra principles for floor plans?',
      answer: 'Yes. Every residential layout is planned in accordance with traditional Indian Vastu principles—including entrance orientation, kitchen placement (Agneya/southeast), master bedroom location (Nairuthi/southwest), and open light ventilation.'
    },
    {
      question: 'How long does it take to construct an independent duplex house in Rajahmundry?',
      answer: 'A standard 2,000 to 2,500 sq ft independent duplex house typically takes 8 to 11 months from foundation excavation to final painting and Gruhapravesam, ensuring a strict minimum 21-day water curing period per concrete slab.'
    },
    {
      question: 'How can I discuss my project or request a site visit?',
      answer: 'You can directly call contractor Gedala Laxman Rao at +91 93814 40177 or +91 95585 55288, or message us on WhatsApp at https://wa.me/919381440177. We provide free initial site visits and consultation in Rajahmundry.'
    }
  ]
};
