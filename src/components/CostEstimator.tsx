import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  ChevronRight,
  HardHat,
  Zap,
  Droplets,
  Paintbrush,
  Hammer,
  Grid,
  FileText,
  DollarSign,
  Briefcase
} from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { useLanguage } from '../context/LanguageContext';

export interface TradeItem {
  id: string;
  name: string;
  teluguName: string;
  category: 'structure' | 'wiring' | 'plumbing' | 'flooring' | 'woodwork' | 'painting';
  materialRate: number; // ₹ per sq.ft built-up
  laborRate: number; // ₹ per sq.ft built-up
  materialSpecs: string;
  laborSpecs: string;
}

export interface ConstructionPackage {
  id: 'budget' | 'standard' | 'luxury';
  name: string;
  teluguName: string;
  tagline: string;
  baseRatePerSqFt: number; // Total turnkey rate
  materialRatePerSqFt: number;
  laborRatePerSqFt: number;
  badge?: string;
  highlightColor: string;
  description: string;
  features: string[];
  trades: TradeItem[];
}

export const CONSTRUCTION_PACKAGES: ConstructionPackage[] = [
  {
    id: 'budget',
    name: 'Basic / Budget Package',
    teluguName: 'బేసిక్ / బడ్జెట్ ప్యాకేజ్',
    tagline: 'Standard quality residential construction for budget-conscious families',
    baseRatePerSqFt: 1750,
    materialRatePerSqFt: 1350,
    laborRatePerSqFt: 400,
    highlightColor: 'border-stone-300 text-stone-700',
    description: 'Practical construction using certified ISI materials, kiln red bricks, standard vitrified tiles, and Finolex concealed wiring.',
    features: [
      'Structure: Fe-500/550 Primary Steel & 43/53-Grade OPC/PPC Cement',
      'Walls: Standard Kiln-Fired Red Clay Bricks (9" outer, 4.5" inner)',
      'Flooring: Durable Ceramic / Standard 2x2 Vitrified Tiles (₹45/sq.ft)',
      'Doors & Windows: Sal Wood Frames, Flush Door Shutters, Aluminum Glazed Windows',
      'Plumbing & Sanitary: Prince/Sudhakar CPVC Pipes & Standard Ceramic Commodes',
      'Electrical: Finolex/Anchor Concealed Wiring with Anchor Roma Modular Switches',
      'Painting: 1 Coat Primer + 2 Coats Asian Tractor Emulsion'
    ],
    trades: [
      {
        id: 'structure',
        name: 'Civil Structure & Red Kiln Brickwork',
        teluguName: 'పునాది, కాంక్రీట్ స్లాబ్స్ & ఎర్ర ఇటుక గోడలు',
        category: 'structure',
        materialRate: 840,
        laborRate: 250,
        materialSpecs: 'Fe-500/550 Steel, 43/53 Cement, Godavari Kiln Red Bricks & River Sand',
        laborSpecs: 'Foundation excavation, plinth beams, centering, slab casting & 21-day water curing'
      },
      {
        id: 'wiring',
        name: 'Electrical & Concealed Wiring',
        teluguName: 'ఎలక్ట్రికల్ కన్సీల్డ్ వైరింగ్ & స్విచ్‌లు',
        category: 'wiring',
        materialRate: 120,
        laborRate: 35,
        materialSpecs: 'Finolex/Anchor FR copper wires, heavy PVC conduits & Anchor Roma modular switches',
        laborSpecs: 'Wall slot cutting, conduit laying, wire pulling, switchboard mounting & earthing'
      },
      {
        id: 'plumbing',
        name: 'Plumbing, CPVC & Sanitary Fixtures',
        teluguName: 'ప్లంబింగ్ లైన్లు & శానిటరీ ఫిట్టింగ్స్',
        category: 'plumbing',
        materialRate: 115,
        laborRate: 35,
        materialSpecs: 'Prince/Sudhakar CPVC hot & cold lines, SWR drainage, ceramic commodes & taps',
        laborSpecs: 'Concealed pipe chasing, slope drainage, septic connection & hydraulic testing'
      },
      {
        id: 'flooring',
        name: 'Flooring, Tiles & Kitchen Granite',
        teluguName: 'టైల్స్ & కిచెన్ గ్రానైట్ పనులు',
        category: 'flooring',
        materialRate: 130,
        laborRate: 35,
        materialSpecs: '2x2 vitrified tiles (₹45/sq.ft), polished granite platform & bathroom tiles',
        laborSpecs: 'Mortar bed leveling, tile fixing, cement joint grouting & granite platform fixing'
      },
      {
        id: 'woodwork',
        name: 'Doors, Woodwork & Windows',
        teluguName: 'తలుపులు & కిటికీల అమరిక',
        category: 'woodwork',
        materialRate: 80,
        laborRate: 20,
        materialSpecs: 'Sal wood main & internal door frames, flush doors & aluminum glazed windows',
        laborSpecs: 'Carpenter holdfast frame fixing, door mounting, lock & handle fittings'
      },
      {
        id: 'painting',
        name: 'Painting & Wall Putty Works',
        teluguName: 'పెయింటింగ్ & వాల్ పుట్టీ పనులు',
        category: 'painting',
        materialRate: 65,
        laborRate: 25,
        materialSpecs: '1 coat interior primer + 2 coats Asian Tractor Emulsion & exterior weather coat',
        laborSpecs: 'Wall surface scraping, primer roller coats & 2 finish coats'
      }
    ]
  },
  {
    id: 'standard',
    name: 'Standard Quality Package',
    teluguName: 'స్టాండర్డ్ క్వాలిటీ ప్యాకేజ్',
    tagline: 'Our Most Popular Choice for Duplex Homes & Independent Villas',
    baseRatePerSqFt: 2050,
    materialRatePerSqFt: 1590,
    laborRatePerSqFt: 460,
    badge: 'Most Popular in Rajahmundry',
    highlightColor: 'border-[#E5A93C] bg-[#E5A93C]/5 text-[#0B1320]',
    description: 'High-strength UltraTech/Nagarjuna 53-grade cement, Vizag/Tata steel, first-quality teakwood main door, premium vitrified tiling, and Polycab wiring.',
    features: [
      'Structure: UltraTech / Nagarjuna 53-Grade Cement & Tata Tiscon / Vizag Steel Fe-550D',
      'Walls: First-Grade Kiln-Burned Godavari Red Clay Bricks with 1:6 Sand Mortar',
      'Flooring: Premium 2x2 or 4x2 Vitrified Floor Tiles (up to ₹75/sq.ft, Kajaria / Somany)',
      'Doors & Windows: First-Quality Teak Wood Main Door & African Teak Internal Frames, UPVC Sliding Windows',
      'Kitchen: 20mm Jet Black Polished Granite Platform + SS 304 Sink + 2ft Dado Tiles',
      'Plumbing: Astral / Ashirvad CPVC & Cera / Parryware Wall-Hung Commodes with Jaquar Fixtures',
      'Electrical: Polycab Fire-Resistant Concealed Wiring + Legrand/GM Modular Switches',
      'Painting: 2 Coats Birla Putty + Asian Paints Premium Smooth Emulsion (Internal) & Apex (External)',
      'Supervision: Daily Personal Site Supervision by Gedala Laxman Rao with 21-Day Slab Water Curing'
    ],
    trades: [
      {
        id: 'structure',
        name: 'Civil Structure & Red Kiln Brickwork',
        teluguName: 'పునాది, RCC స్లాబ్స్ & గోదావరి ఎర్ర ఇటుక గోడలు',
        category: 'structure',
        materialRate: 980,
        laborRate: 280,
        materialSpecs: 'UltraTech/Nagarjuna 53 Cement, Tata/Vizag Fe-550D Steel, First-Grade Kiln Red Bricks & River Sand',
        laborSpecs: 'Foundation footings, plinth beams, centering with steel plates/props, vibrator concrete & strict 21-day pond curing'
      },
      {
        id: 'wiring',
        name: 'Electrical & Concealed Wiring Works',
        teluguName: 'పాలి క్యాబ్ వైరింగ్ & లెగ్రాండ్ స్విచ్‌లు',
        category: 'wiring',
        materialRate: 140,
        laborRate: 40,
        materialSpecs: 'Polycab/Finolex FR copper wires, heavy PVC conduits, Legrand/GM modular switches, MCBs & copper plate earthing',
        laborSpecs: 'Mechanical wall chasing, PVC conduit installation, metal box embedding, wire pulling & switchboard fixing'
      },
      {
        id: 'plumbing',
        name: 'Plumbing, CPVC & Sanitary Fixtures',
        teluguName: 'ఆస్ట్రాల్ ప్లంబింగ్ & జాగ్వార్ శానిటరీ ఫిట్టింగ్స్',
        category: 'plumbing',
        materialRate: 135,
        laborRate: 40,
        materialSpecs: 'Astral/Ashirvad CPVC hot & cold lines, Prince SWR pipes, Cera/Parryware commodes & Jaquar diverters',
        laborSpecs: 'Concealed plumbing chasing, slope drainage, septic tank tie-in, fixture mounting & 24-hr pressure testing'
      },
      {
        id: 'flooring',
        name: 'Flooring, Tiles & Kitchen Granite',
        teluguName: 'ప్రీమియం విట్రిఫైడ్ టైల్స్ & బ్లాక్ గ్రానైట్ ప్లాట్‌ఫారమ్',
        category: 'flooring',
        materialRate: 165,
        laborRate: 45,
        materialSpecs: '2x2 or 4x2 Vitrified Floor Tiles (₹75/sq.ft Kajaria/Somany), 20mm Jet Black Granite, 7ft bathroom wall tiles',
        laborSpecs: 'Base sand-cement screed, laser leveling, vitrified tile fixing with spacers, epoxy grouting & edge bullnosing'
      },
      {
        id: 'woodwork',
        name: 'Teak Woodwork, Doors & UPVC Windows',
        teluguName: 'టేకు మెయిన్ డోర్ & UPVC విండోస్',
        category: 'woodwork',
        materialRate: 90,
        laborRate: 25,
        materialSpecs: '1st Quality Teakwood Main Door & Frame, African Teak internal frames & 2.5-track UPVC sliding windows',
        laborSpecs: 'Holdfast masonry anchoring, door hanging, Godrej mortise locks, brass handles & tower bolts'
      },
      {
        id: 'painting',
        name: 'Birla Putty, Painting & Elevation Finish',
        teluguName: 'బిర్లా పుట్టీ, ఏషియన్ పెయింట్స్ & ఎలివేషన్ కోటింగ్స్',
        category: 'painting',
        materialRate: 80,
        laborRate: 30,
        materialSpecs: '2 coats Birla white cement putty, Asian Paints Premium Smooth Emulsion (Internal) & Apex weather-shield (External)',
        laborSpecs: 'Mechanical wall sanding, 2 coats blade putty float, primer roller coats, 2 finish paint coats & clean cleanup'
      }
    ]
  },
  {
    id: 'luxury',
    name: 'Luxury Custom Villa Package',
    teluguName: 'లగ్జరీ కస్టమ్ విల్లా ప్యాకేజ్',
    tagline: 'Architectural Excellence with Bespoke Elevation & Italian / Granite Finishes',
    baseRatePerSqFt: 2450,
    materialRatePerSqFt: 1910,
    laborRatePerSqFt: 540,
    badge: 'Architectural Grade',
    highlightColor: 'border-[#D97706] bg-[#D97706]/5 text-[#0B1320]',
    description: 'Burma teakwood throughout, designer elevation grooves, false ceiling with LED ambient cove lighting, Kohler/Grohe sanitary, and Italian marble/large glazed vitrified tiles.',
    features: [
      'Structure: UltraTech Super 53-Grade + Crystalline Waterproofing Admixture for Roof Slabs',
      'Steel & Masonry: Tata Tiscon / Vizag Steel Fe-550D with Ultrasonic Testing & Selected Red Bricks',
      'Flooring: Italian Marble or Large-Format 4x2 / 6x2.5 Glazed Vitrified Tiles (up to ₹130/sq.ft)',
      'Doors: Seasoned Burma/African Teakwood Throughout (Main Door, Internal Frames & French Windows)',
      'Ceiling: Gypsum False Ceiling with Designer LED Warm-White Profile Grooves in Hall & Bedrooms',
      'Kitchen: Quartz / Premium Galaxy Granite Counter + Franke Double-Bowl Sink with High-Arc Tap',
      'Bathrooms: Concealed Diverters, Rain Shower Panels, Grohe / Kohler Sanitary & Glass Partitions',
      'Exterior: Custom Textured Elevation Grooves, CNC Jali Feature Panels & SS/Toughened Glass Railings',
      'Painting: Asian Paints Royale Luxury Emulsion (Internal) & Apex Ultima Protek 10-Yr (External)'
    ],
    trades: [
      {
        id: 'structure',
        name: 'Civil Structure & Red Kiln Brickwork',
        teluguName: 'అల్ట్రాటెక్ సూపర్ సిమెంట్, టాటా స్టీల్ & ఎలివేషన్ ఆర్కిటెక్చర్',
        category: 'structure',
        materialRate: 1160,
        laborRate: 320,
        materialSpecs: 'UltraTech Super 53 Cement + Crystalline waterproofing, Tata Tiscon Fe-550D rebar & selected red kiln bricks',
        laborSpecs: 'Senior master mestries, structural bar benders, steel plate shuttering, mechanical vibrator compaction & 21-day curing'
      },
      {
        id: 'wiring',
        name: 'Electrical, False Ceiling & Ambient Wiring',
        teluguName: 'ఫాల్స్ సీలింగ్ ప్రొఫైల్ లైటింగ్ & ష్నైడర్ స్విచ్‌లు',
        category: 'wiring',
        materialRate: 170,
        laborRate: 50,
        materialSpecs: 'Polycab FR-LSH low-smoke copper wires, Schneider/Legrand Arteor designer switches & LED warm-white cove grooves',
        laborSpecs: 'False ceiling electrical conduits, multi-circuit wiring, surge protector setup & double copper plate earthing'
      },
      {
        id: 'plumbing',
        name: 'Plumbing, CPVC & Luxury Sanitary Fixtures',
        teluguName: 'గ్రోహే / కోహ్లర్ శానిటరీ & రెయిన్ షవర్ ప్యానెల్స్',
        category: 'plumbing',
        materialRate: 165,
        laborRate: 50,
        materialSpecs: 'Ashirvad CPVC, thermostatic concealed diverters, Grohe/Kohler wall-hung sanitary & Franke double-bowl sink',
        laborSpecs: 'Concealed manifold plumbing, wall-hung cistern installation, luxury fixture alignment & pressure testing'
      },
      {
        id: 'flooring',
        name: 'Italian Marble / Large Glazed Tiles & Quartz',
        teluguName: 'ఇటాలియన్ మార్బుల్ / లార్జ్ టైల్స్ & క్వార్ట్జ్ ప్లాట్‌ఫారమ్',
        category: 'flooring',
        materialRate: 205,
        laborRate: 55,
        materialSpecs: 'Italian Marble or 4x2/6x2.5 Glazed Vitrified Tiles (₹130/sq.ft), Quartz/Galaxy Granite & designer bathroom tiles',
        laborSpecs: 'Precision zero-lip leveling systems, diamond-blade 45-degree edge joints, epoxy joint filling & mirror polishing'
      },
      {
        id: 'woodwork',
        name: 'Burma Teakwood, CNC Doors & UPVC French Windows',
        teluguName: 'బర్మా టేకు తలుపులు & ఫ్రెంచ్ విండోస్',
        category: 'woodwork',
        materialRate: 110,
        laborRate: 30,
        materialSpecs: 'Seasoned Burma/African Teakwood throughout, CNC architectural jali panels & Kommerling UPVC sliding windows',
        laborSpecs: 'Master carpenter joinery, computerized lock fitting, architectural hardware mounting'
      },
      {
        id: 'painting',
        name: 'Royale Luxury Emulsion & 10-Yr Exterior Protek',
        teluguName: 'రాయల్ లగ్జరీ ఎమల్షన్ & 10 ఏళ్ల వారంటీ ఎక్స్‌టీరియర్ పెయింట్',
        category: 'painting',
        materialRate: 100,
        laborRate: 35,
        materialSpecs: '2 coats Birla putty, Asian Paints Royale Luxury Emulsion (Internal) & Apex Ultima Protek 10-Year (External)',
        laborSpecs: 'Multi-stage orbital machine wall sanding, velvet-smooth putty application & airless spray/roller finish coats'
      }
    ]
  }
];

export const CostEstimator: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { t } = useLanguage();

  const [plotArea, setPlotArea] = useState<number>(1200); // Plot area in sq ft
  const [floors, setFloors] = useState<number>(2); // 1 = Ground, 2 = G+1 Duplex, 3 = G+2
  const [selectedPackageId, setSelectedPackageId] = useState<'budget' | 'standard' | 'luxury'>('standard');
  const [contractMode, setContractMode] = useState<'turnkey' | 'labor' | 'material'>('turnkey');

  const selectedPkg = useMemo(() => {
    return CONSTRUCTION_PACKAGES.find((p) => p.id === selectedPackageId) || CONSTRUCTION_PACKAGES[1];
  }, [selectedPackageId]);

  // Total built-up area = plotArea * 0.8 (ground footprint coverage) * floors
  const builtUpAreaPerFloor = Math.round(plotArea * 0.8);
  const totalBuiltUpArea = builtUpAreaPerFloor * floors;

  // Active Rate depending on Contract Mode
  const activeRatePerSqFt = useMemo(() => {
    if (contractMode === 'labor') return selectedPkg.laborRatePerSqFt;
    if (contractMode === 'material') return selectedPkg.materialRatePerSqFt;
    return selectedPkg.baseRatePerSqFt; // Turnkey
  }, [contractMode, selectedPkg]);

  // Estimated Cost
  const estimatedTotalCost = Math.round(totalBuiltUpArea * activeRatePerSqFt);
  const minCost = Math.round(estimatedTotalCost * 0.95);
  const maxCost = Math.round(estimatedTotalCost * 1.05);

  // Material & Labor sub-totals for Turnkey
  const totalMaterialCost = Math.round(totalBuiltUpArea * selectedPkg.materialRatePerSqFt);
  const totalLaborCost = Math.round(totalBuiltUpArea * selectedPkg.laborRatePerSqFt);
  const materialPercent = Math.round((selectedPkg.materialRatePerSqFt / selectedPkg.baseRatePerSqFt) * 100);
  const laborPercent = 100 - materialPercent;

  // Format INR Currency
  const formatLakhs = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(amount / 100000).toFixed(2)} Lakhs`;
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Milestone schedule calculation
  const milestoneBreakdown = [
    { stage: 'Stage 1: Foundation & Footings', percent: 15, desc: 'Site excavation, PCC, column footings & plinth tie beams', amount: Math.round(estimatedTotalCost * 0.15) },
    { stage: 'Stage 2: Ground Floor RCC Slab', percent: 20, desc: 'Columns casting, formwork, steel cage tying, roof slab concrete & 21-day curing', amount: Math.round(estimatedTotalCost * 0.20) },
    { stage: 'Stage 3: Upper Floors RCC Slabs', percent: 15, desc: 'First/Upper floor columns, beam framing and roof slab casting', amount: Math.round(estimatedTotalCost * 0.15) },
    { stage: 'Stage 4: Red Brick Masonry', percent: 15, desc: 'Solid Godavari red kiln brickwork, lintels, chajjas, door/window frame fitting', amount: Math.round(estimatedTotalCost * 0.15) },
    { stage: 'Stage 5: Concealed Lines & Plastering', percent: 15, desc: 'Concealed electrical/plumbing conduits, internal & external two-coat plastering', amount: Math.round(estimatedTotalCost * 0.15) },
    { stage: 'Stage 6: Flooring, Woodwork & Painting', percent: 15, desc: 'Vitrified tiles, teak doors, kitchen counter, putty & 2-coat painting', amount: Math.round(estimatedTotalCost * 0.15) },
    { stage: 'Stage 7: Final Handover & Gruhapravesam', percent: 5, desc: 'Fixture fittings, thorough deep cleaning, defect checks & final handover', amount: Math.round(estimatedTotalCost * 0.05) },
  ];

  // Material quantities approximation
  const cementBags = Math.round(totalBuiltUpArea * 0.42);
  const steelTonnes = Number(((totalBuiltUpArea * 3.8) / 1000).toFixed(1));
  const redBricks = Math.round(totalBuiltUpArea * 18);
  const sandTons = Math.round(totalBuiltUpArea * 0.055);

  const getCategoryIcon = (category: TradeItem['category']) => {
    switch (category) {
      case 'structure':
        return <HardHat className="w-4 h-4 text-[#E5A93C]" />;
      case 'wiring':
        return <Zap className="w-4 h-4 text-[#E5A93C]" />;
      case 'plumbing':
        return <Droplets className="w-4 h-4 text-[#E5A93C]" />;
      case 'flooring':
        return <Grid className="w-4 h-4 text-[#E5A93C]" />;
      case 'woodwork':
        return <Hammer className="w-4 h-4 text-[#E5A93C]" />;
      case 'painting':
        return <Paintbrush className="w-4 h-4 text-[#E5A93C]" />;
    }
  };

  const handleSendToWhatsApp = () => {
    const modeName = contractMode === 'turnkey' 
      ? 'Full Turnkey (Material + 35+ Labor Team)' 
      : contractMode === 'labor' 
      ? 'Labor-Only Contract (Client supplies materials)' 
      : 'Material-Only Cost Estimate';

    const text = encodeURIComponent(
      `Hello Gedala Laxman Rao garu (MK Constructions Rajahmundry),\n\n` +
      `I calculated construction costs using your website estimator for my house in Rajahmundry:\n\n` +
      `📋 PROJECT DETAILS:\n` +
      `• Location: Near Ramalayam, Annapurnammapeta / Rajahmundry\n` +
      `• Plot Area: ${plotArea} sq.ft (~${Math.round(plotArea / 9)} Gajaalu)\n` +
      `• Floors: ${floors === 1 ? 'Ground Floor only' : floors === 2 ? 'G+1 Duplex' : `G+${floors - 1}`}\n` +
      `• Total Built-up Area: ~${totalBuiltUpArea.toLocaleString()} sq.ft\n` +
      `• Specification: ${selectedPkg.name}\n` +
      `• Contract Mode: ${modeName}\n\n` +
      `💰 COST & TRADE BREAKDOWN:\n` +
      `• Applied Rate: ₹${activeRatePerSqFt}/sq.ft\n` +
      `• Estimated Total: ${formatLakhs(minCost)} - ${formatLakhs(maxCost)} (${formatCurrency(estimatedTotalCost)})\n` +
      `• Material Share: ${formatLakhs(totalMaterialCost)} (~₹${selectedPkg.materialRatePerSqFt}/sq.ft · ${materialPercent}%)\n` +
      `• Labor Share: ${formatLakhs(totalLaborCost)} (~₹${selectedPkg.laborRatePerSqFt}/sq.ft · ${laborPercent}%)\n\n` +
      `🛠️ INCLUDES: Civil structure, Polycab wiring, CPVC plumbing, Vitrified tiles/granite, Teak woodwork & Asian Paints painting.\n\n` +
      `Could we schedule a free on-site consultation to review blueprints?`
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-[#070D16] via-[#0B1320] to-[#152338] text-white p-6 sm:p-8 border-b border-[#E5A93C]/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/20 border border-[#E5A93C]/40 text-[#E5A93C] text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>{t('Instant House Construction Estimator', 'గృహ నిర్మాణ ఖర్చు అంచనా')}</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black font-display text-white">
              {t('Calculate Construction Costs in Rajahmundry', 'రాజమండ్రిలో మెటీరియల్ & లేబర్ ఖర్చుల వివరాలు')}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl leading-relaxed">
              {t(
                'Transparent, market-accurate rates based on 2026 Rajahmundry contractor standards. View complete Turnkey rates or divide cleanly between Material Cost and Labor Cost.',
                'ప్రస్తుత గోదావరి మెటీరియల్ ధరలు (సిమెంట్, Fe-550D స్టీల్, ఎర్ర ఇటుకలు) మరియు 35+ మేస్త్రీల లేబర్ ఖర్చులతో ఖచ్చితమైన లెక్కలు.'
              )}
            </p>
          </div>

          <div className="shrink-0 text-left sm:text-right bg-white/5 p-3.5 sm:p-4 rounded-2xl border border-white/10">
            <div className="text-[11px] text-stone-300 font-medium">{t('Verified Rajahmundry Rates', 'ధృవీకరించబడిన ధరలు')}</div>
            <div className="text-lg sm:text-xl font-black text-[#E5A93C]">₹1,750 – ₹2,450 / sq.ft</div>
            <div className="text-[10px] text-stone-400">Labor contract from ₹400 – ₹540 / sq.ft</div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-10 space-y-10">
        {/* Step 1: Input Controls (Plot Area, Floors, Locality) */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-4">
            <span className="w-5 h-5 rounded-full bg-[#D97706] text-white inline-flex items-center justify-center text-[10px]">1</span>
            <span>{t('Step 1: Enter Your Plot & Building Details', 'దశ 1: స్థలం & భవన వివరాలు నమోదు చేయండి')}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Plot Area Slider */}
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="plot-area-slider" className="text-xs font-bold text-[#0B1320] uppercase tracking-wider">
                  {t('Plot Area (Sq. Yards / Sq. Ft)', 'ప్లాట్ వైశాల్యం')}
                </label>
                <span className="text-sm font-black text-[#D97706] font-display">
                  {plotArea.toLocaleString()} sq.ft
                </span>
              </div>
              <div className="text-[11px] text-stone-500 mb-3">
                ~{Math.round(plotArea / 9)} Sq. Yards (గజాలు)
              </div>
              <input
                id="plot-area-slider"
                aria-label={t('Plot Area in Square Feet', 'ప్లాట్ వైశాల్యం')}
                type="range"
                min="600"
                max="4500"
                step="50"
                value={plotArea}
                onChange={(e) => setPlotArea(Number(e.target.value))}
                className="w-full accent-[#E5A93C] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                <span>600 sq.ft (66 Gajaalu)</span>
                <span>2,000 sq.ft</span>
                <span>4,500 sq.ft (500 Gajaalu)</span>
              </div>
            </div>

            {/* Floors Selector */}
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
              <label className="text-xs font-bold text-[#0B1320] uppercase tracking-wider block mb-2">
                {t('Number of Floors', 'అంతస్తుల సంఖ్య')}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { count: 1, label: t('Ground', 'గ్రౌండ్ ఫ్లోర్'), sub: 'Single Storey' },
                  { count: 2, label: t('G + 1', 'జి + 1 డూప్లెక్స్'), sub: 'Duplex Villa' },
                  { count: 3, label: t('G + 2', 'జి + 2 బిల్డింగ్'), sub: 'Multi Storey' }
                ].map((item) => (
                  <button
                    key={item.count}
                    type="button"
                    onClick={() => setFloors(item.count)}
                    className={`p-3 rounded-xl text-center border transition-all ${
                      floors === item.count
                        ? 'bg-[#0B1320] text-white border-[#0B1320] shadow-md ring-2 ring-[#E5A93C]/40'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-[#E5A93C]'
                    }`}
                  >
                    <div className="text-sm font-black">{item.label}</div>
                    <div className="text-[10px] opacity-75">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Location in Rajahmundry */}
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
              <label className="text-xs font-bold text-[#0B1320] uppercase tracking-wider block mb-2">
                {t('Project Location', 'ప్రాంతం')}
              </label>
              <div className="p-3 bg-white border border-stone-300 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0B1320]">Rajahmundry, Andhra Pradesh</div>
                  <div className="text-[11px] text-stone-500">Free site visit anywhere in Rajahmundry</div>
                </div>
                <span className="text-[10px] bg-[#E5A93C]/20 text-[#0B1320] font-bold px-2 py-0.5 rounded">Active</span>
              </div>
              <p className="text-[11px] text-stone-500 mt-2">
                {t('Includes free on-site soil and municipal setback inspection by Gedala Laxman Rao.', 'కాంట్రాక్టర్ గారి ద్వారా ఉచిత సైట్ పరిశీలన అందించబడుతుంది.')}
              </p>
            </div>
          </div>
        </div>

        {/* Step 2: Choose Construction Package */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-4">
            <span className="w-5 h-5 rounded-full bg-[#D97706] text-white inline-flex items-center justify-center text-[10px]">2</span>
            <span>{t('Step 2: Choose Construction Specification Package', 'దశ 2: నిర్మాణ ప్యాకేజ్ ఎంచుకోండి')}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONSTRUCTION_PACKAGES.map((pkg) => {
              const isSelected = selectedPackageId === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={`rounded-3xl border-2 p-6 cursor-pointer transition-all flex flex-col justify-between relative ${
                    isSelected
                      ? 'border-[#E5A93C] bg-[#E5A93C]/5 shadow-xl scale-[1.01] ring-2 ring-[#E5A93C]/20'
                      : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] text-[#0B1320] text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold font-display text-[#0B1320]">
                        {t(pkg.name, pkg.teluguName)}
                      </h3>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-[#E5A93C] bg-[#E5A93C]' : 'border-stone-300'
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-[#0B1320]" />}
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className="text-2xl font-black font-display text-[#0B1320]">
                        ₹{pkg.baseRatePerSqFt}
                      </span>
                      <span className="text-xs text-stone-500 font-medium"> / sq.ft (Turnkey)</span>
                    </div>

                    {/* Material vs Labor mini-badge */}
                    <div className="mt-2 flex items-center gap-2 text-[11px] text-stone-600 bg-stone-100 p-2 rounded-lg font-mono">
                      <span>Material: <strong>₹{pkg.materialRatePerSqFt}</strong></span>
                      <span>·</span>
                      <span>Labor: <strong>₹{pkg.laborRatePerSqFt}</strong></span>
                    </div>

                    <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
                      {pkg.description}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-stone-100 pt-4 text-xs text-stone-700">
                      {pkg.features.slice(0, 5).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A93C] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-bold">
                    <span className={isSelected ? 'text-[#D97706]' : 'text-stone-500'}>
                      {isSelected ? t('Currently Selected', 'ఎంపికైంది') : t('Select Package', 'ఎంచుకోండి')}
                    </span>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#D97706]' : 'text-stone-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 3: Choose Contract Mode (Turnkey vs Labor-Only vs Material-Only) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-stone-50 to-slate-100 border border-stone-200 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                Contract Pricing Model
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#0B1320]">
                {t('Divide Estimate by Material and Labor Contract', 'మెటీరియల్ & లేబర్ కాంట్రాక్ట్ విభజన')}
              </h3>
            </div>
            <div className="text-xs text-stone-500 font-medium">
              Based on Rajahmundry Big Contractor Rates
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <button
              type="button"
              onClick={() => setContractMode('turnkey')}
              className={`p-3.5 rounded-xl text-left border transition-all ${
                contractMode === 'turnkey'
                  ? 'bg-[#0B1320] text-white border-[#0B1320] shadow-md ring-2 ring-[#E5A93C]/40'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-[#E5A93C]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase">Turnkey (All-Inclusive)</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${contractMode === 'turnkey' ? 'bg-[#E5A93C] text-[#0B1320]' : 'bg-stone-100 text-stone-600'}`}>
                  Most Preferred
                </span>
              </div>
              <div className="text-base font-black mt-1 font-mono">₹{selectedPkg.baseRatePerSqFt} / sq.ft</div>
              <div className={`text-[11px] mt-0.5 ${contractMode === 'turnkey' ? 'text-stone-300' : 'text-stone-500'}`}>
                100% Materials + 35+ Labor Team + Supervision
              </div>
            </button>

            <button
              type="button"
              onClick={() => setContractMode('labor')}
              className={`p-3.5 rounded-xl text-left border transition-all ${
                contractMode === 'labor'
                  ? 'bg-[#0B1320] text-white border-[#0B1320] shadow-md ring-2 ring-[#E5A93C]/40'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-[#E5A93C]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase">Labor-Only Contract</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${contractMode === 'labor' ? 'bg-[#E5A93C] text-[#0B1320]' : 'bg-stone-100 text-stone-600'}`}>
                  ~22% Cost
                </span>
              </div>
              <div className="text-base font-black mt-1 font-mono text-[#E5A93C]">₹{selectedPkg.laborRatePerSqFt} / sq.ft</div>
              <div className={`text-[11px] mt-0.5 ${contractMode === 'labor' ? 'text-stone-300' : 'text-stone-500'}`}>
                Client buys materials; MK supplies 35+ Mestries & machinery
              </div>
            </button>

            <button
              type="button"
              onClick={() => setContractMode('material')}
              className={`p-3.5 rounded-xl text-left border transition-all ${
                contractMode === 'material'
                  ? 'bg-[#0B1320] text-white border-[#0B1320] shadow-md ring-2 ring-[#E5A93C]/40'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-[#E5A93C]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase">Material-Only Cost</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${contractMode === 'material' ? 'bg-[#E5A93C] text-[#0B1320]' : 'bg-stone-100 text-stone-600'}`}>
                  ~78% Cost
                </span>
              </div>
              <div className="text-base font-black mt-1 font-mono text-[#D97706]">₹{selectedPkg.materialRatePerSqFt} / sq.ft</div>
              <div className={`text-[11px] mt-0.5 ${contractMode === 'material' ? 'text-stone-300' : 'text-stone-500'}`}>
                Steel, Cement, Godavari bricks, wiring, plumbing & tiles
              </div>
            </button>
          </div>
        </div>

        {/* Step 4: Estimated Cost Summary Card */}
        <div className="bg-gradient-to-br from-[#070D16] via-[#0B1320] to-[#152338] rounded-3xl text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-[#E5A93C]/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Area & Price Result */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
                  {contractMode === 'turnkey' 
                    ? t('Estimated Turnkey Investment (Material + Labor)', 'పూర్తి నిర్మాణ వ్యయం (సామాగ్రి + లేబర్)')
                    : contractMode === 'labor'
                    ? t('Estimated Labor Contract Value', 'మొత్తం లేబర్ కాంట్రాక్ట్ ఖర్చు')
                    : t('Estimated Material-Only Purchase Budget', 'మొత్తం మెటీరియల్ కొనుగోలు వ్యయం')}
                </span>
              </div>

              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
                  {formatLakhs(estimatedTotalCost)}
                </span>
                <span className="text-sm sm:text-base text-stone-300 font-mono">
                  ({formatLakhs(minCost)} – {formatLakhs(maxCost)})
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="bg-white/10 p-3 rounded-2xl border border-white/10">
                  <div className="text-stone-400 text-[10px] uppercase font-bold">Total Built-up Area</div>
                  <div className="text-base font-bold text-white font-mono mt-0.5">
                    ~{totalBuiltUpArea.toLocaleString()} sq.ft
                  </div>
                  <div className="text-[10px] text-stone-300">({builtUpAreaPerFloor} sq.ft × {floors} floors)</div>
                </div>

                <div className="bg-white/10 p-3 rounded-2xl border border-white/10">
                  <div className="text-stone-400 text-[10px] uppercase font-bold">Rate Applied</div>
                  <div className="text-base font-bold text-[#E5A93C] font-mono mt-0.5">
                    ₹{activeRatePerSqFt} / sq.ft
                  </div>
                  <div className="text-[10px] text-stone-300">
                    {contractMode === 'turnkey' ? 'Turnkey Contract' : contractMode === 'labor' ? 'Labor-Only' : 'Material-Only'}
                  </div>
                </div>

                <div className="bg-white/10 p-3 rounded-2xl border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-stone-400 text-[10px] uppercase font-bold">Execution Timeline</div>
                  <div className="text-base font-bold text-white font-mono mt-0.5">
                    {floors === 1 ? '6 – 8 Months' : '8 – 11 Months'}
                  </div>
                  <div className="text-[10px] text-stone-300">Strict 21-day slab curing</div>
                </div>
              </div>

              {/* Material vs Labor Split Bar */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-300 flex items-center gap-1.5 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C]" />
                    <span>Material Share: <strong>{formatLakhs(totalMaterialCost)}</strong> (~₹{selectedPkg.materialRatePerSqFt}/sq.ft · {materialPercent}%)</span>
                  </span>
                  <span className="text-stone-300 flex items-center gap-1.5 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                    <span>Labor Share: <strong>{formatLakhs(totalLaborCost)}</strong> (~₹{selectedPkg.laborRatePerSqFt}/sq.ft · {laborPercent}%)</span>
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden flex">
                  <div style={{ width: `${materialPercent}%` }} className="h-full bg-gradient-to-r from-[#E5A93C] to-[#F59E0B]" />
                  <div style={{ width: `${laborPercent}%` }} className="h-full bg-[#25D366]" />
                </div>
              </div>

              {/* Guarantees Included In Price */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap gap-x-4 gap-y-2 text-xs text-stone-300">
                <span className="flex items-center gap-1.5 text-white font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Locked-Rate Guarantee</span>
                </span>
                <span className="flex items-center gap-1.5 text-white font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>35+ Permanent Mestries & Workers</span>
                </span>
                <span className="flex items-center gap-1.5 text-white font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Daily WhatsApp Video Updates</span>
                </span>
              </div>
            </div>

            {/* Right Col: Direct CTAs */}
            <div className="lg:col-span-5 bg-white/10 p-6 rounded-3xl border border-white/15 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E5A93C]" />
                <span>{t('Take Action on This Estimate', 'ఈ అంచనాతో ముందుకు వెళ్లండి')}</span>
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Send this customized estimate directly to Contractor Gedala Laxman Rao on WhatsApp or book a free plot inspection.
              </p>

              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-lg transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t('Share Estimate to WhatsApp', 'వాట్సాప్‌లో ఈ అంచనా పంపండి')}</span>
                </button>

                <a
                  href={`tel:${SITE_CONFIG.contact.primaryPhoneRaw}`}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] text-[#0B1320] text-xs sm:text-sm font-black shadow-lg transition-all active:scale-95 hover:brightness-110"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('Call Contractor: +91 93814 40177', 'కాల్ చేయండి: 93814 40177')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5: Comprehensive Trade-Wise Material vs. Labor Breakdown Table */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
              <span className="w-5 h-5 rounded-full bg-[#D97706] text-white inline-flex items-center justify-center text-[10px]">3</span>
              <span>{t('Trade-Wise Material vs. Labor Cost Breakdown', 'విభాగాల వారీగా మెటీరియల్ మరియు లేబర్ ఖర్చులు')}</span>
            </div>
            <span className="text-xs text-stone-500 font-medium">
              Based on {totalBuiltUpArea.toLocaleString()} sq.ft built-up area
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
            <div className="divide-y divide-stone-200">
              {selectedPkg.trades.map((trade) => {
                const tradeMaterialTotal = Math.round(totalBuiltUpArea * trade.materialRate);
                const tradeLaborTotal = Math.round(totalBuiltUpArea * trade.laborRate);
                const tradeCombinedTotal = tradeMaterialTotal + tradeLaborTotal;

                return (
                  <div key={trade.id} className="p-4 sm:p-6 hover:bg-stone-50/70 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Left: Trade Title & Scope */}
                      <div className="space-y-1 lg:max-w-md">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-[#0B1320] text-[#E5A93C] flex items-center justify-center shrink-0">
                            {getCategoryIcon(trade.category)}
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-[#0B1320]">
                              {trade.name}
                            </h4>
                            <div className="text-[11px] text-stone-500 font-telugu">
                              {trade.teluguName}
                            </div>
                          </div>
                        </div>

                        <div className="pt-2 pl-9 space-y-1 text-xs text-stone-600">
                          <div>
                            <span className="font-semibold text-stone-800">Materials: </span>
                            {trade.materialSpecs}
                          </div>
                          <div>
                            <span className="font-semibold text-stone-800">Labor Scope: </span>
                            {trade.laborSpecs}
                          </div>
                        </div>
                      </div>

                      {/* Right: Material vs Labor vs Subtotal columns */}
                      <div className="grid grid-cols-3 gap-3 shrink-0 lg:w-96 text-center pl-9 lg:pl-0">
                        {/* Material Share */}
                        <div className="bg-amber-50/80 p-2.5 rounded-xl border border-amber-200">
                          <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Material Cost</div>
                          <div className="text-sm font-black text-amber-900 font-mono mt-0.5">
                            {formatLakhs(tradeMaterialTotal)}
                          </div>
                          <div className="text-[10px] text-amber-700">₹{trade.materialRate} / sq.ft</div>
                        </div>

                        {/* Labor Share */}
                        <div className="bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-200">
                          <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Labor Cost</div>
                          <div className="text-sm font-black text-emerald-900 font-mono mt-0.5">
                            {formatLakhs(tradeLaborTotal)}
                          </div>
                          <div className="text-[10px] text-emerald-700">₹{trade.laborRate} / sq.ft</div>
                        </div>

                        {/* Subtotal */}
                        <div className="bg-slate-100 p-2.5 rounded-xl border border-slate-200">
                          <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Subtotal</div>
                          <div className="text-sm font-black text-[#0B1320] font-mono mt-0.5">
                            {formatLakhs(tradeCombinedTotal)}
                          </div>
                          <div className="text-[10px] text-slate-500">₹{trade.materialRate + trade.laborRate} / sq.ft</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Total Row */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 to-[#0B1320] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-[#E5A93C]">Total Trade Sums (Material + Labor)</div>
                <div className="text-xs text-stone-300 mt-0.5">Civil Structure, Wiring, Plumbing, Tiles, Teak Doors & Painting</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-[10px] text-stone-400 uppercase">Materials Total</div>
                  <div className="text-sm sm:text-base font-black text-[#E5A93C] font-mono">
                    {formatLakhs(totalMaterialCost)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-stone-400 uppercase">Labor Total</div>
                  <div className="text-sm sm:text-base font-black text-[#25D366] font-mono">
                    {formatLakhs(totalLaborCost)}
                  </div>
                </div>
                <div className="text-right pl-3 border-l border-white/20">
                  <div className="text-[10px] text-stone-400 uppercase">Grand Total</div>
                  <div className="text-base sm:text-lg font-black text-white font-mono">
                    {formatLakhs(estimatedTotalCost)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 6: Transparent Milestone Payment Schedule */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
              <span className="w-5 h-5 rounded-full bg-[#D97706] text-white inline-flex items-center justify-center text-[10px]">4</span>
              <span>{t('Stage-Wise Milestone Payment Schedule', 'దశల వారీగా చెల్లింపుల షెడ్యూల్')}</span>
            </div>
            <span className="text-xs text-stone-500 font-medium hidden sm:inline">
              Zero High-Risk Upfront Demands
            </span>
          </div>

          <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden divide-y divide-stone-200">
            {milestoneBreakdown.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-stone-100/60 transition-colors">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-[#0B1320] text-[#E5A93C] text-xs font-bold inline-flex items-center justify-center font-mono">
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-bold text-[#0B1320]">
                      {item.stage}
                    </span>
                    <span className="text-xs font-bold text-[#D97706] bg-[#D97706]/10 px-2 py-0.5 rounded-full">
                      {item.percent}%
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 pl-8">
                    {item.desc}
                  </p>
                </div>

                <div className="text-right pl-8 sm:pl-0">
                  <span className="text-sm font-black text-[#0B1320] font-mono">
                    {formatCurrency(item.amount)}
                  </span>
                  <div className="text-[10px] text-stone-500">Milestone Payment</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 7: Approx Material Consumption Estimates */}
        <div className="bg-[#F8FAFC] p-6 rounded-3xl border border-stone-200">
          <h4 className="text-xs font-bold text-[#0B1320] uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#E5A93C]" />
            <span>{t('Estimated Key Materials Required for this Build', 'ఈ నిర్మాణానికి అవసరమైన ప్రధాన సామాగ్రి అంచనా')}</span>
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-3 rounded-2xl border border-stone-200 shadow-sm">
              <div className="text-xs text-stone-500">Cement Bags</div>
              <div className="text-lg font-black text-[#0B1320] font-mono mt-0.5">~{cementBags} Bags</div>
              <div className="text-[10px] text-stone-400">53-Grade UltraTech/Nagarjuna</div>
            </div>
            <div className="bg-white p-3 rounded-2xl border border-stone-200 shadow-sm">
              <div className="text-xs text-stone-500">TMT Steel</div>
              <div className="text-lg font-black text-[#0B1320] font-mono mt-0.5">~{steelTonnes} MT</div>
              <div className="text-[10px] text-stone-400">Fe-550D Tata/Vizag Steel</div>
            </div>
            <div className="bg-white p-3 rounded-2xl border border-stone-200 shadow-sm">
              <div className="text-xs text-stone-500">Red Kiln Bricks</div>
              <div className="text-lg font-black text-[#0B1320] font-mono mt-0.5">~{redBricks.toLocaleString()}</div>
              <div className="text-[10px] text-stone-400">Godavari Kiln-Fired Bricks</div>
            </div>
            <div className="bg-white p-3 rounded-2xl border border-stone-200 shadow-sm">
              <div className="text-xs text-stone-500">Godavari Sand</div>
              <div className="text-lg font-black text-[#0B1320] font-mono mt-0.5">~{sandTons} Tons</div>
              <div className="text-[10px] text-stone-400">Clean River Silt-Free Sand</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};