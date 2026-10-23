import React from 'react';
import { 
  ShieldCheck, 
  HardHat, 
  Award, 
  HeartHandshake, 
  Phone, 
  ArrowRight, 
  Users, 
  Hammer, 
  CheckCircle2, 
  MapPin, 
  Navigation, 
  Sparkles,
  Lock,
  Video,
  Receipt
} from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { FOUNDER_IMAGE, SITE_IMAGES } from '../data/images';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { ProjectStamp } from '../components/ProjectStamp';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const finishedProjectImg = SITE_IMAGES.find(
    (img) => img.slug === 'multi-storey-residential-apartment-complex-rajahmundry'
  ) || SITE_IMAGES[0];

  const founderSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gedala Laxman Rao',
    jobTitle: 'Founder & Chief Civil Contractor',
    worksFor: {
      '@type': 'GeneralContractor',
      name: 'MK Constructions',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Near Ramalayam, Annapurnammapeta',
        addressLocality: 'Rajahmundry',
        addressRegion: 'Andhra Pradesh',
        postalCode: '533101',
        addressCountry: 'IN',
      },
    },
    image: `https://mkconstructionsrajahmundry.com${FOUNDER_IMAGE.src}`,
  };

  return (
    <>
      <SEOHead
        title="About Gedala Laxman Rao & 35+ Skilled Team | MK Constructions Rajahmundry"
        description="Meet civil contractor Gedala Laxman Rao and his dedicated 35+ veteran workforce (Mestries, Bar Benders, Carpenters & Coolies) building trusted homes in Rajahmundry."
        canonicalPath="/about"
        schema={founderSchema}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#070D16] via-[#0B1320] to-[#0F1D33] text-white pt-36 pb-20 border-b border-[#E5A93C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/30 text-xs font-bold uppercase tracking-wider text-[#E5A93C] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Our Story & Foundation', 'మా ప్రస్థానం & నైపుణ్యం')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-white mt-2 max-w-4xl mx-auto leading-tight">
            {t(
              'Honest Civil Contracting & 35+ Skilled Workforce in Rajahmundry',
              'రాజమండ్రిలో నిజాయితీతో కూడిన నిర్మాణాలు & 35+ నిపుణులైన వర్కర్స్'
            )}
          </h1>
          <p className="mt-5 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t(
              'Founded by Gedala Laxman Rao with 10+ years of active field leadership. We build your dream home with our own permanent mestries, zero sub-contracting, and absolute cost transparency.',
              '10+ సంవత్సరాల అనుభవంతో కాంట్రాక్టర్ గెడల లక్ష్మణరావు గారి స్వంత పర్యవేక్షణలో, ఎలాంటి సబ్-కాంట్రాక్టింగ్ లేకుండా శాశ్వత మేస్త్రీల ద్వారా నాణ్యమైన ఇళ్ల నిర్మాణం.'
            )}
          </p>

          {/* Quick Location Badge */}
          <div className="mt-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#E5A93C]" />
            <span className="text-xs sm:text-sm text-stone-200 font-medium">
              Office: Near Ramalayam, Annapurnammapeta, Rajahmundry
            </span>
            <a
              href={SITE_CONFIG.location.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#E5A93C] hover:underline flex items-center gap-1"
            >
              <Navigation className="w-3 h-3 fill-current" />
              <span>Map Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Founder Spotlight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait Col */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative max-w-sm w-full">
                {/* Gold Ambient Glow */}
                <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-[#E5A93C] to-[#0B1320] opacity-25 blur-xl pointer-events-none" />

                {/* Executive Arch / Profile Portrait Frame */}
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-[#E5A93C] ring-4 ring-[#0B1320]/15 bg-slate-900 group">
                  <img
                    src={FOUNDER_IMAGE.src}
                    srcSet={FOUNDER_IMAGE.srcSet}
                    alt="Gedala Laxman Rao - Founder & Chief Civil Contractor at MK Constructions Rajahmundry"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* 10+ Years Badge Moved BELOW Photo (Clean & Completely Unobstructed) */}
                <div className="mt-4 flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0B1320] via-[#152338] to-[#0B1320] border border-[#E5A93C]/70 shadow-lg text-white">
                    <ShieldCheck className="w-4 h-4 text-[#E5A93C] shrink-0" />
                    <span className="text-xs font-black tracking-wide text-[#E5A93C]">
                      {t('10+ Years On-Site Construction Mastery', '10+ సంవత్సరాల ప్రత్యక్ష నిర్మాణ అనుభవం')}
                    </span>
                  </div>
                </div>

                {/* Dedicated High-Visibility Founder Nameplate */}
                <div className="mt-3 w-full bg-[#0B1320] text-white p-5 rounded-2xl border border-[#E5A93C]/40 shadow-xl">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#E5A93C] font-bold">
                        {t('Founder & Chief Civil Contractor', 'వ్యవస్థాపకుడు & ముఖ్య సివిల్ కాంట్రాక్టర్')}
                      </div>
                      <div className="text-xl font-black font-display text-white mt-1">
                        {SITE_CONFIG.founder.name}
                      </div>
                    </div>
                    <div className="text-right shrink-0 pl-3 border-l border-white/10">
                      <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded bg-[#E5A93C]/20 text-[#E5A93C] border border-[#E5A93C]/40">
                        Zero Subcontracting
                      </span>
                      <div className="text-[10px] text-stone-400 mt-1.5 font-medium">Rajahmundry</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-300">
                    <span className="flex items-center gap-1.5 text-stone-400">
                      <HardHat className="w-3.5 h-3.5 text-[#E5A93C]" />
                      Direct Supervision
                    </span>
                    <span className="text-[#E5A93C] font-semibold">15 Mestries + 20+ Coolies</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Story Col */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                  {t('Meet the Contractor', 'కాంట్రాక్టర్ పరిచయం')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0B1320] mt-1">
                  {SITE_CONFIG.founder.name}
                </h2>
                <p className="text-sm font-semibold text-[#D97706] mt-0.5">
                  {t(
                    'Founder & Chief Civil Contractor, MK Constructions',
                    'వ్యవస్థాపకుడు & ముఖ్య సివిల్ కాంట్రాక్టర్, ఎంకే కన్‌స్ట్రక్షన్స్'
                  )}
                </p>
              </div>

              {/* Bilingual Statement */}
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border-2 border-stone-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1320] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A93C]" />
                  <span>Official Contractor Commitment (English & తెలుగు)</span>
                </h3>
                <p className="text-sm text-stone-800 leading-relaxed font-medium mb-4">
                  "{SITE_CONFIG.about.english}"
                </p>
                <div className="pt-3 border-t border-stone-200">
                  <p className="text-sm text-stone-800 leading-relaxed font-telugu">
                    "{SITE_CONFIG.about.telugu}"
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-stone-700 leading-relaxed">
                <p>
                  {t(
                    'Unlike modern broker agencies that subcontract construction to inexperienced third parties, Gedala Laxman Rao personally oversees every single project site from initial foundation excavation through the final Gruhapravesam key handover.',
                    'కార్పొరేట్ బ్రోకర్ల వలె పనులను వేరేవారికి సబ్-కాంట్రాక్ట్‌కి ఇవ్వకుండా, గెడల లక్ష్మణరావు గారు మొదటి రోజు పునాది తవ్వకం నుండి గృహప్రవేశం తాళం ఇచ్చే వరకు స్వయంగా సైట్ వద్దే ఉండి అన్ని పనులను దగ్గరుండి చేయిస్తారు.'
                  )}
                </p>
                <p>
                  {t(
                    'With his direct command of a 35+ veteran workforce (senior mestries, centering carpenters, bar benders, and concrete laborers), quality is never compromised. Every cement bag, TMT rebar batch, and Godavari sand load is personally inspected.',
                    '35+ మంది సుశిక్షితులైన శాశ్వత వర్కర్స్ (సివిల్ మేస్త్రీలు, సెంటరింగ్ కార్పెంటర్లు, బైండింగ్ వర్కర్స్, కూలీలు) నిరంతరం పర్యవేక్షించబడుతూ పటిష్టమైన నాణ్యతా ప్రమాణాలతో పనులు పూర్తవుతాయి.'
                  )}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${SITE_CONFIG.contact.primaryPhoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[#0B1320] bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] hover:brightness-110 transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('Speak with Gedala Laxman Rao', 'నేరుగా కాంట్రాక్టర్‌తో మాట్లాడండి')}</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#0B1320] bg-stone-100 hover:bg-stone-200 transition-colors"
                >
                  <span>{t('Office Location & Site Visit', 'ఆఫీస్ అడ్రస్ & సైట్ విజిట్')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated 35+ Skilled Team Section */}
      <section className="py-20 bg-[#0B1320] text-white border-y border-[#E5A93C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/30 text-xs font-bold uppercase tracking-wider text-[#E5A93C] mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>{t('Permanent Dedicated Workforce', 'మా శాశ్వత శ్రామిక బలం')}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
              {t(
                '15 Experienced Mestries & 20+ Dedicated Coolies',
                '15 అనుభవజ్ఞులైన మేస్త్రీలు & 20+ అంకితభావం గల కూలీల బృందం'
              )}
            </h2>
            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              {t(
                'We never hire random day-laborers off the street for structural work. Our 35+ permanent workforce (15 seasoned master mestries + 20+ trained concrete coolies) executes every site exclusively under contractor Gedala Laxman Rao\'s direct supervision.',
                'మేము సైట్ పనులకు బయటి తాత్కాలిక వ్యక్తులను నియమించము. 15 మంది సుదీర్ఘ అనుభవం గల ప్రధాన మేస్త్రీలు మరియు 20 మందికి పైగా శాశ్వత కూలీలతో కూడిన 35+ మంది బృందం స్వయంగా కాంట్రాక్టర్ లక్ష్మణరావు గారి పర్యవేక్షణలోనే ప్రతి పనిని నాణ్యంగా పూర్తిచేస్తుంది.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 15 Experienced Mestries */}
            <div className="bg-[#152338] p-8 rounded-3xl border-2 border-[#E5A93C]/40 shadow-xl space-y-6 hover:border-[#E5A93C] transition-all relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#E5A93C] text-[#0B1320] flex items-center justify-center font-black text-2xl font-mono shadow-lg">
                    15
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                      {t('Experienced Master Mestries', 'అనుభవజ్ఞులైన ప్రధాన మేస్త్రీలు')}
                    </h3>
                    <p className="text-xs text-[#E5A93C] font-semibold">
                      10 to 18 Years Proven Mastery in Godavari Belt
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-[#E5A93C]/20 text-[#E5A93C] border border-[#E5A93C]/30">
                  Senior Craftsmen
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {t(
                  'Master bricklayers, column alignment supervisors, centering specialists, and bar-benders with decades of hands-on structural construction expertise.',
                  'గోదావరి బట్టీ ఎర్ర ఇటుకల తాపీ పని, పిల్లర్ల ఖచ్చితమైన లెవలింగ్, టీఎమ్‌టీ స్టీల్ రాడ్ల బైండింగ్ మరియు సెంటరింగ్ పనుల్లో నైపుణ్యం గల సీనియర్ మేస్త్రీలు.'
                )}
              </p>

              <div className="space-y-3 pt-2 border-t border-white/10 text-xs text-stone-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                  <span><strong>8 Master Brick Masons:</strong> 100% Plumb-line accuracy, 1:4 mortar joint bonding & load-bearing red-brick masonry.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                  <span><strong>4 Centering & Bar Benders:</strong> Fe-550D TMT steel cage binding, beam stirrup spacing & leak-proof steel plate shuttering.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                  <span><strong>3 Precision Finishers:</strong> Smooth sponge floating plaster, zero-hollow tile fixing & teak woodwork frame installation.</span>
                </div>
              </div>
            </div>

            {/* 20+ Dedicated Concrete Laborers & Coolies */}
            <div className="bg-[#152338] p-8 rounded-3xl border-2 border-[#E5A93C]/40 shadow-xl space-y-6 hover:border-[#E5A93C] transition-all relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#E5A93C] text-[#0B1320] flex items-center justify-center font-black text-2xl font-mono shadow-lg">
                    20+
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                      {t('Dedicated Coolies & Laborers', 'అంకితభావం గల కూలీలు & కార్మికులు')}
                    </h3>
                    <p className="text-xs text-[#E5A93C] font-semibold">
                      8+ Years Permanent Teamwork & Heavy Civil Pouring
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-[#E5A93C]/20 text-[#E5A93C] border border-[#E5A93C]/30">
                  Full-Time Crew
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {t(
                  'Our permanent in-house workforce handles high-torque concrete vibrators, rapid continuous slab pours, sand screening, and mandatory 21-day slab water ponding.',
                  'నిరంతర స్లాబ్ కాంక్రీట్ పోత, వైబ్రేటర్ ఆపరేషన్, ఇసుక జల్లెడ పట్టడం మరియు 21 రోజుల పాటు తప్పనిసరిగా నీటి మడులు కట్టి క్యూరింగ్ చేసే శాశ్వత శ్రామిక బృందం.'
                )}
              </p>

              <div className="space-y-3 pt-2 border-t border-white/10 text-xs text-stone-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                  <span><strong>10 Mix & Pour Laborers:</strong> High-frequency needle mechanical vibrator compaction preventing honeycombing and air pockets.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                  <span><strong>6 Dedicated Curing Coolies:</strong> Strict morning & evening water spraying and 21-day uninterrupted slab water ponding.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                  <span><strong>4+ Material Handlers:</strong> Machine aggregate feeding, Godavari river sand screening & disciplined on-site logistics.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Construction Trust Guarantees */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              {t('Homeowner Protection', 'క్లయింట్ భద్రత & నియమాలు')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-[#0B1320] mt-2">
              {t('Why Rajahmundry Families Trust MK Constructions', 'మమ్మల్ని ఎందుకు ఎంచుకోవాలి?')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-[#0B1320] text-[#E5A93C] flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B1320] font-display">
                {t('Locked-Rate Price Guarantee', 'ధర పెరుగుదల లేని ఒప్పందం')}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Once agreement is signed, your per-sq.ft rate is 100% frozen. Zero surprise escalations during construction even if market material rates shift.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-[#0B1320] text-[#E5A93C] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B1320] font-display">
                {t('10-Year Structural Guarantee', '10 ఏళ్ల నిర్మాణ వారంటీ')}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Full engineering assurance on RCC column footings, plinth tie beams, and roof slabs against settling or cracks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-[#0B1320] text-[#E5A93C] flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B1320] font-display">
                {t('Daily WhatsApp Site Updates', 'రోజువారీ వాట్సాప్ అప్‌డేట్స్')}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Live photo and video reports of steel tying, concrete pouring, and water curing sent daily so you track progress from work or home.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-[#0B1320] text-[#E5A93C] flex items-center justify-center">
                <Receipt className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B1320] font-display">
                {t('Stage-Wise Milestone Billing', 'దశలవారీ చెల్లింపులు')}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Pay only after each structural stage (foundation, ground slab, first slab, brickwork, plastering) is personally verified and approved by you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location & Callout */}
      <section className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0B1320] via-[#101D30] to-[#152338] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl relative border border-[#E5A93C]/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
                  {t('Direct Office Visit & Site Consultation', 'కార్యాలయం & సైట్ విజిట్')}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-display text-white text-balance leading-tight">
                  Near Ramalayam, Annapurnammapeta, Rajahmundry
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed">
                  {t(
                    'Bring your plot documents, house sketches, or talk directly with contractor Gedala Laxman Rao about floor plan optimization, Vastu alignment, and current Godavari material prices.',
                    'మీ ప్లాట్ డాక్యుమెంట్లు లేదా ఇంటి ప్లాన్‌లతో మా కార్యాలయానికి రండి లేదా నేరుగా కాంట్రాక్టర్ గారితో మాట్లాడండి.'
                  )}
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={SITE_CONFIG.location.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[#0B1320] bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] hover:brightness-110 transition-all shadow-md"
                  >
                    <Navigation className="w-4 h-4 fill-current" />
                    <span>Get Directions from Your Location</span>
                  </a>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/15"
                  >
                    <span>{t('Browse Project Gallery', 'ప్రాజెక్ట్ గ్యాలరీ')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Clean Project Card with Stamp at Below-Corner Edge */}
              <div className="lg:col-span-5">
                <div className="bg-[#070D16] rounded-2xl overflow-hidden border border-[#E5A93C]/30 shadow-2xl">
                  {/* Clean image - zero stamps inside image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={finishedProjectImg.src}
                      srcSet={finishedProjectImg.srcSet}
                      alt={finishedProjectImg.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Below-corner card footer with stamper at the edge */}
                  <div className="p-4 flex items-center justify-between gap-3 bg-[#070D16]">
                    <div>
                      <div className="text-xs font-bold text-white">{t('MK Constructions Signature Build', 'ఎంకే కన్‌స్ట్రక్షన్స్ సిగ్నేచర్ ప్రాజెక్ట్')}</div>
                      <div className="text-[11px] text-stone-300 font-medium truncate max-w-[240px]">
                        {finishedProjectImg.title}
                      </div>
                      <div className="text-[11px] text-[#E5A93C] flex items-center gap-1 mt-0.5 font-medium">
                        <MapPin className="w-3 h-3" />
                        <span>Rajahmundry, Andhra Pradesh</span>
                      </div>
                    </div>
                    {/* Stamp at below corner edge */}
                    <ProjectStamp variant="edge" size="sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};