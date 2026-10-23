import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Compass, 
  Hammer, 
  CheckCircle, 
  ChevronDown,
  Sparkles,
  MapPin,
  Users,
  HardHat,
  Navigation,
  FileCheck2,
  Video,
  CheckCircle2,
  Calculator,
  Building2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { HERO_SLIDES, FOUNDER_IMAGE, SITE_IMAGES, isProjectCompleted } from '../data/images';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ContactForm } from '../components/ContactForm';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { StatsSection } from '../components/StatsSection';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { ProjectStamp } from '../components/ProjectStamp';
import { CostEstimator } from '../components/CostEstimator';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [heroIndex, setHeroIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Before/After comparison images: Masonry craftsmanship vs Completed elevation
  const beforeImg = SITE_IMAGES.find((img) => img.slug === 'red-brick-masonry-house-construction-rajahmundry') || SITE_IMAGES[0];
  const afterImg = SITE_IMAGES.find((img) => img.slug === 'luxury-multi-storey-home-rajahmundry-02') || SITE_IMAGES[1];

  // Rotate hero slides every 6 seconds with hover-pause support
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setHeroIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SITE_CONFIG.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="MK Constructions Rajahmundry | House Construction & Building Contractors"
        description="Leading building contractor in Rajahmundry. Gedala Laxman Rao brings 10+ years of quality house construction, commercial buildings, renovation & interior works."
        canonicalPath="/"
        schema={faqSchema}
      />

      {/* 1. Hero Section: Slideshow with Ken Burns effect & confident typography */}
      <section 
        className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#0C2B2B]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Slides with Ken Burns Animation & Smooth Crossfade */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.slug}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === heroIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
          >
            <img
              src={slide.src}
              srcSet={slide.srcSet}
              alt={slide.alt}
              className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${
                idx === heroIndex ? 'scale-108' : 'scale-100'
              }`}
              style={{
                backgroundImage: `url(${slide.blurDataUrl})`,
                backgroundSize: 'cover',
              }}
            />
            <div className="absolute inset-0 scrim-hero" />
          </div>
        ))}

        {/* Previous / Next Slide Arrow Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous home photo"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#E5A93C] text-white hover:text-[#0B1320] border border-white/20 hover:border-[#E5A93C] flex items-center justify-center backdrop-blur-md transition-all shadow-xl active:scale-95 group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next home photo"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#E5A93C] text-white hover:text-[#0B1320] border border-white/20 hover:border-[#E5A93C] flex items-center justify-center backdrop-blur-md transition-all shadow-xl active:scale-95 group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center text-white">
          {/* Highlighted Big Official Circular Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#C8A24A]/50 to-[#DFC47D]/30 blur-xl opacity-80 group-hover:opacity-100 transition-opacity" />
              <img
                src="/images/logo-circle.png"
                alt="MK Constructions Official Logo"
                className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover shadow-[0_10px_35px_rgba(0,0,0,0.85),0_0_30px_rgba(229,169,60,0.7)] border-4 border-[#E5A93C] transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          {/* Location & Office Navigation Tag */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 animate-fadeIn">
            <a
              href={SITE_CONFIG.location.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-[#E5A93C]/40 text-xs sm:text-sm font-medium text-stone-200 transition-colors group"
            >
              <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0" />
              <span>Near Ramalayam, Annapurnammapeta, Rajahmundry</span>
              <span className="text-white/40">·</span>
              <span className="text-[#E5A93C] font-semibold flex items-center gap-1 group-hover:underline">
                <span>{t('Get Directions', 'మ్యాప్స్ లో దారి')}</span>
                <Navigation className="w-3 h-3 group-hover:rotate-45 transition-transform" />
              </span>
            </a>
            <span className="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-stone-300 font-semibold">
              10+ Years On-Site
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white max-w-4xl mx-auto leading-tight text-balance">
            {t(
              'Building Homes. Creating Trust.',
              'బలమైన ఇళ్లు. నమ్మకమైన నిర్మాణం.'
            )}
          </h1>

          <p className="mt-4 text-base sm:text-xl text-stone-200 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            {t(
              'Quality house construction, commercial complexes, and renovation in Rajahmundry with honest commitment, locked-rate pricing, and direct contractor supervision.',
              'నాణ్యమైన పదార్థాలు, సమయపాలన మరియు కాంట్రాక్టర్ గెడల లక్ష్మణరావు గారి ప్రత్యక్ష పర్యవేక్షణలో కలల ఇళ్లను నిర్మిస్తాము.'
            )}
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={`tel:${SITE_CONFIG.contact.primaryPhoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-[#0B1320] bg-[#E5A93C] hover:bg-[#F3C465] transition-all shadow-xl active:scale-95 whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              <span>{t('Call Contractor: +91 93814 40177', 'కాల్ చేయండి: 93814 40177')}</span>
            </a>
            <Link
              to="/cost-estimator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 transition-all whitespace-nowrap"
            >
              <Calculator className="w-4 h-4 text-[#E5A93C]" />
              <span>{t('Calculate Construction Cost', 'ఖర్చు అంచనా వేయండి')}</span>
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-stone-200 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <span>{t('View Completed Projects', 'పూర్తయిన ప్రాజెక్ట్‌లు')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Minimal Slide Indicator Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {HERO_SLIDES.map((slide, i) => (
              <button
                key={slide.slug}
                onClick={() => setHeroIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all rounded-full ${
                  i === heroIndex
                    ? 'w-7 sm:w-8 h-2 bg-[#E5A93C] shadow-lg'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Executive Founder Spotlight & 35+ Veteran Workforce Showcase */}
      <section className="bg-white border-b border-slate-200 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Founder Portrait & Direct Contact Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative max-w-sm w-full">
                {/* Gold Ambient Backlight */}
                <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-[#E5A93C] to-[#0B1320] opacity-25 blur-xl pointer-events-none" />
                
                {/* Executive Arch / Profile Portrait Frame */}
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-[#E5A93C] ring-4 ring-[#0B1320]/15 bg-slate-900 group">
                  <img
                    src={FOUNDER_IMAGE.src}
                    srcSet={FOUNDER_IMAGE.srcSet}
                    alt={FOUNDER_IMAGE.alt}
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

              {/* Direct Office Address & 1-Click Google Maps Navigation */}
              <div className="mt-10 w-full max-w-sm bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E5A93C]/15 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1320] uppercase tracking-wider">
                      {t('Physical Office Address', 'ప్రధాన కార్యాలయం')}
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Near Ramalayam, Annapurnammapeta, Rajahmundry, AP - 533101
                    </div>
                  </div>
                </div>

                {/* Clickable Google Maps directions from current location */}
                <a
                  href={SITE_CONFIG.location.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0B1320] hover:bg-[#1E293B] transition-all shadow-sm group"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#E5A93C] group-hover:rotate-45 transition-transform" />
                  <span>{t('Get Directions from Your Location', 'మీ లొకేషన్ నుండి దారి చూడండి')}</span>
                </a>
              </div>
            </div>

            {/* Right: Detailed Founder Matter & 35+ Veteran Mestries Team */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/10 text-[#D97706] text-xs font-bold uppercase tracking-wider mb-2">
                  <HardHat className="w-3.5 h-3.5" />
                  <span>{t('Hands-on Leadership & Direct Accountability', 'ప్రత్యక్ష పర్యవేక్షణ & నిజాయితీ')}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black font-display text-[#0B1320] leading-tight text-balance">
                  {t(
                    'Direct Supervision by Gedala Laxman Rao with 15 Experienced Mestries & 20+ Dedicated Coolies',
                    'గెడల లక్ష్మణరావు గారి ప్రత్యక్ష పర్యవేక్షణ & 15 అనుభవజ్ఞులైన మేస్త్రీలు, 20+ కూలీల బృందం'
                  )}
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  {t(
                    SITE_CONFIG.founder.bio,
                    SITE_CONFIG.founder.teluguBio
                  )}
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  {t(
                    'When you build your home with MK Constructions, you deal directly with Gedala Laxman Rao from excavation to key handover. No brokers, no junior supervisors, and no compromise on cement, sand, or steel testing.',
                    'మీ ఇంటి నిర్మాణం మొదటి గడ్డపార వేసిన దగ్గరి నుంచి గృహ ప్రవేశం వరకు ప్రతి రోజూ లక్ష్మణరావు గారి ప్రత్యక్ష పర్యవేక్షణలోనే జరుగుతుంది. దళారులు ఉండరు, సామాగ్రి నాణ్యతలో రాజీ ఉండదు.'
                  )}
                </p>
              </div>

              {/* 35+ Experienced Workers & Mestries Card */}
              <div className="bg-[#0B1320] text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E5A93C]/20 text-[#E5A93C] flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-display text-white">
                        {t(SITE_CONFIG.team.headline, SITE_CONFIG.team.teluguHeadline)}
                      </h3>
                      <p className="text-xs text-stone-300">
                        {t('Permanent veteran crew in Rajahmundry', 'శాశ్వత నైపుణ్యంగల నిర్మాణ బృందం')}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#E5A93C] text-[#0B1320] font-black text-xs font-mono">
                    15 MESTRIES + 20+ COOLIES
                  </span>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed">
                  {t(SITE_CONFIG.team.summary, SITE_CONFIG.team.teluguSummary)}
                </p>

                {/* 4 Skill Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {SITE_CONFIG.team.groups.map((grp, gIdx) => (
                    <div key={gIdx} className="bg-white/5 p-3 rounded-xl border border-white/10 text-xs">
                      <div className="flex items-center justify-between text-[#E5A93C] font-bold">
                        <span className="truncate pr-1">{grp.title.split('(')[0]}</span>
                        <span className="shrink-0 font-mono text-[11px]">{grp.count}</span>
                      </div>
                      <p className="text-[11px] text-stone-400 mt-1 leading-normal">
                        {grp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Founder Commitment Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-800 font-semibold bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>UltraTech 53 Cement & Fe-550D Rebar Only</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-800 font-semibold bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>Strict 21-Day Slab Water Ponding Curing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2B. Modern Construction Business Guarantees (2026 Customer Trust Perks) */}
      <section className="bg-slate-900 text-white py-16 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
              {t('Customer Confidence & Guarantees', 'గ్రాహక భరోసా & నిబంధనలు')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-white mt-2">
              {t('Modern Construction Guarantees That Protect Your Investment', 'మీ పెట్టుబడికి 100% రక్షణ కల్పించే మా నిబంధనలు')}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              {t(
                'We believe in complete transparency. No hidden charges, no sudden price escalations, and strict milestone accountability.',
                'దాపరికం లేని ఒప్పందం, ధరల పెరుగుదల భారం లేకుండా సమయానికి ఇంటిని అప్పగిస్తాము.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.guarantees.map((guar) => (
              <div
                key={guar.id}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#E5A93C]/40 transition-all hover:bg-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E5A93C]/20 text-[#E5A93C] flex items-center justify-center mb-4">
                    {guar.id === 'price-lock' && <ShieldCheck className="w-5 h-5" />}
                    {guar.id === 'structural-warranty' && <FileCheck2 className="w-5 h-5" />}
                    {guar.id === 'live-updates' && <Video className="w-5 h-5" />}
                    {guar.id === 'milestone-payments' && <Clock className="w-5 h-5" />}
                  </div>
                  <h3 className="text-base font-bold font-display text-white mb-1">
                    {t(guar.title, guar.teluguTitle)}
                  </h3>
                  <p className="text-xs text-[#E5A93C] font-semibold mb-2">
                    {guar.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {guar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. StatsSection with Framer Motion number counters */}
      <StatsSection />

      {/* 4. Core Services Overview (Bento Grid) */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              {t('What We Build', 'మా సేవలు')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-[#0B1320] mt-2 text-balance">
              {t(
                'Comprehensive Construction Services in Rajahmundry',
                'రాజమండ్రిలో పూర్తి నిర్మాణ సేవలు'
              )}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600">
              {t(
                'From individual residential villas to multi-storey complexes, we handle every stage with verified engineering standards.',
                'వ్యక్తిగత ఇళ్లు, అపార్ట్‌మెంట్లు మరియు వాణిజ్య భవనాల నిర్మాణం నుంచి ఇంటీరియర్ పనుల వరకు.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SITE_CONFIG.services.map((service, idx) => {
              const serviceImg = SITE_IMAGES.find((img) => img.slug === service.relatedImageSlugs[0]) || SITE_IMAGES[idx % SITE_IMAGES.length];
              return (
                <div
                  key={service.slug}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-200 flex flex-col hover:shadow-xl hover:border-[#E5A93C] transition-all group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={serviceImg.src}
                      srcSet={serviceImg.srcSet}
                      alt={serviceImg.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B1320]/90 text-[#E5A93C] text-xs font-bold backdrop-blur-sm border border-[#E5A93C]/30">
                      0{idx + 1}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0B1320] group-hover:text-[#D97706] transition-colors">
                          {t(service.title, service.teluguTitle)}
                        </h3>
                        {/* Stamp at below corner edge */}
                        <ProjectStamp variant="edge" size="sm" />
                      </div>
                      <p className="text-xs text-[#D97706] font-semibold mt-1">
                        {service.tagline}
                      </p>
                      <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                        {t(service.shortDesc, service.teluguDesc)}
                      </p>

                      <ul className="mt-4 space-y-1.5 text-xs text-stone-700">
                        {service.features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t border-stone-100 flex items-center justify-between">
                      <Link
                        to={`/services/${service.slug}`}
                        className="text-xs sm:text-sm font-bold text-[#0B1320] hover:text-[#D97706] inline-flex items-center gap-1.5 group/link"
                      >
                        <span>{t('View Service Details & Process', 'పూర్తి వివరాలు & విధానం')}</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-[#E5A93C]" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Construction Quality Comparison: Masonry to Finished Elevation */}
      <section className="py-20 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] flex items-center gap-1.5">
                <span>{t('Workmanship Transparency', 'పనితీరు & నాణ్యత')}</span>
                <span className="text-stone-400">·</span>
                <span className="text-stone-600 font-mono text-[11px]">Rajahmundry Sites</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-[#0B1320] text-balance">
                {t(
                  'From Solid Kiln Brick Masonry to Finished Modern Elevation',
                  'పునాది ఇటుక పని నుంచి అందమైన ఆధునిక ఎలివేషన్ వరకు'
                )}
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                {t(
                  'Slide across to inspect the structural durability of our solid Godavari red clay brick masonry alongside the exquisite finish of our completed residential elevations in Rajahmundry.',
                  'స్లైడర్‌ను జరిపి మా గోదావరి ఇటుకల నిర్మాణ నాణ్యత మరియు పూర్తయిన అందమైన ఎలివేషన్‌ను పరిశీలించండి.'
                )}
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Hammer className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1320]">
                      {t('Godavari Kiln-Fired Solid Bricks', 'నాణ్యమైన గోదావరి ఇటుకలు')}
                    </h4>
                    <p className="text-xs text-stone-600">
                      High thermal insulation, zero hollow shrinkage cracks, and rich cement mortar bonding.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1320]">
                      {t('Turnkey Designer Elevation Handover', 'నాణ్యమైన ఎలివేషన్ ముగింపు')}
                    </h4>
                    <p className="text-xs text-stone-600">
                      Weatherproof exterior coatings, architectural cladding, and direct contractor supervision.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeImage={beforeImg}
                afterImage={afterImg}
                beforeLabel={t('Construction Stage: Solid Red Brickwork', 'నిర్మాణంలో: నాణ్యమైన ఇటుకల గోడలు')}
                afterLabel={t('Finished Stage: Modern Villa Elevation', 'పూర్తయిన తర్వాత: మోడ్రన్ విల్లా ఎలివేషన్')}
              />
              <p className="text-xs text-stone-500 text-center mt-3 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                <span>
                  {t(
                    'Interactive comparison: drag the center divider left or right to explore structural quality.',
                    'స్లైడర్‌ను ఇరువైపులా జరిపి నిర్మాణ నాణ్యతను చూడవచ్చు.'
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose MK Constructions in Rajahmundry */}
      <section className="py-20 bg-[#0B1320] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
              {t('Our Commitment', 'మా ప్రత్యేకతలు')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-white mt-2 text-balance">
              {t(
                'Why Homeowners in Rajahmundry Trust MK Constructions',
                'రాజమండ్రి ప్రజలు మమ్మల్ని ఎందుకు ఎంచుకుంటారు?'
              )}
            </h2>
            <p className="mt-3 text-sm text-stone-300">
              {t(
                'Honest commitments, direct contractor accountability, and no sub-contracting shortcuts.',
                'నిజాయితీతో కూడిన నాణ్యత, ఒప్పందం ప్రకారం పనులు పూర్తి చేయడం మా నైజం.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#152338] p-8 rounded-3xl border border-white/10 hover:border-[#E5A93C]/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#E5A93C]/20 text-[#E5A93C] flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-2">
                {t('10+ Years Contractor Experience', '10+ ఏళ్ల ప్రత్యక్ష అనుభవం')}
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                {t(
                  'Led personally by contractor Gedala Laxman Rao, who has managed dozens of residential and commercial structures across Rajahmundry.',
                  'కాంట్రాక్టర్ గెడల లక్ష్మణరావు గారి 10+ ఏళ్ల అనుభవంతో ప్రతి పని శ్రద్ధగా పూర్తిచేయబడుతుంది.'
                )}
              </p>
            </div>

            <div className="bg-[#152338] p-8 rounded-3xl border border-white/10 hover:border-[#E5A93C]/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#E5A93C]/20 text-[#E5A93C] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-2">
                {t('Premium Tested Materials Only', 'ఉత్తమ పదార్థాల వినియోగం')}
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                {t(
                  'No compromised sands or rerolled steel. We utilize branded 53-grade cement, tested Fe-550 TMT bars, and first-quality kiln bricks.',
                  'బ్రాండెడ్ సిమెంట్, సర్టిఫైడ్ ఐరన్ రాడ్లు మరియు నాణ్యమైన గోదావరి ఇసుక మాత్రమే ఉపయోగిస్తాము.'
                )}
              </p>
            </div>

            <div className="bg-[#152338] p-8 rounded-3xl border border-white/10 hover:border-[#E5A93C]/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#E5A93C]/20 text-[#E5A93C] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-2">
                {t('100% Vastu Compliance', '100% వాస్తు నియమాలు')}
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                {t(
                  'Floor layouts, main entrance positioning, kitchen stoves, and master bedrooms planned strictly adhering to traditional Vastu Shastra.',
                  'మీ కుటుంబ సంక్షేమం కోసం సంప్రదాయ వాస్తు నిబంధనల ప్రకారం గదులు మరియు ద్వారాలు ఏర్పాటు చేస్తాము.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Featured Projects Section (Data Manifest & Animated Grid with Hover Effects) */}
      <FeaturedProjects />

      {/* 8. Interactive House Construction Cost Estimator */}
      <section className="py-20 bg-[#F8FAFC] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              {t('Transparent Budgeting & Trade Split', 'నిర్మాణ ఖర్చుల అంచనా & మెటీరియల్-లేబర్ విభజన')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-[#0B1320] mt-2">
              {t('Calculate Your Construction Cost in Rajahmundry', 'మీ ఇంటి నిర్మాణ వ్యయాన్ని లెక్కించండి')}
            </h2>
            <p className="mt-3 text-sm text-stone-600">
              {t(
                'Adjust your plot area, floors, and specifications to get a realistic estimate divided cleanly by Material Cost and Labor Contract based on current 2026 Rajahmundry construction rates.',
                'మీ స్థలం కొలతలతో మెటీరియల్స్ (సిమెంట్, స్టీల్, ఇటుకలు, వైరింగ్, పెయింటింగ్) మరియు లేబర్ కాంట్రాక్ట్ ఖర్చులను వేర్వేరుగా లెక్కించండి.'
              )}
            </p>
          </div>
          <CostEstimator />
        </div>
      </section>

      {/* 9. Testimonials Section (Marked as Placeholder for Owner Review) */}
      <section className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              {t('Homeowner Trust', 'గ్రాహక అభిప్రాయాలు')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-[#0B1320] mt-2">
              {t('What Clients Say About Working With Us', 'గ్రాహకుల సంతృప్తి')}
            </h2>
            <p className="text-xs text-stone-400 mt-2 font-mono">
              [Note for Owner: Client feedback placeholders below can be replaced with Google Reviews in /src/data/site.ts]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_CONFIG.testimonialsPlaceholder.map((item) => (
              <div
                key={item.id}
                className="bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="text-[#E5A93C] text-2xl font-serif">“</div>
                  <p className="text-sm text-stone-700 leading-relaxed italic mt-1">
                    "{item.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-200">
                  <div className="font-bold text-sm text-[#0B1320]">{item.author}</div>
                  <div className="text-xs text-stone-500">
                    {item.projectType} · {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQs Accordion */}
      <section className="py-20 bg-[#F8FAFC] border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              {t('Common Inquiries', 'తరచుగా అడిగే ప్రశ్నలు')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-[#0B1320] mt-2">
              {t('Frequently Asked Questions', 'సాధారణ ప్రశ్నలు & సమాధానాలు')}
            </h2>
          </div>

          <div className="space-y-4">
            {SITE_CONFIG.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-base text-[#0B1320] hover:text-[#D97706] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#E5A93C] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Final Call-to-Action with Contact Form */}
      <section className="py-20 bg-[#0B1320] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
                {t('Start Your Project', 'పని ప్రారంభించండి')}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-display text-white text-balance">
                {t(
                  'Ready to Build Your Home in Rajahmundry?',
                  'రాజమండ్రిలో మీ ఇంటి నిర్మాణం ప్రారంభించాలనుకుంటున్నారా?'
                )}
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {t(
                  'Reach out directly to Gedala Laxman Rao for an honest consultation, plot inspection, and transparent milestone estimates with no hidden charges.',
                  'గెడల లక్ష్మణరావు గారితో నేరుగా మాట్లాడండి. ఉచిత సైట్ పరిశీలన మరియు పారదర్శకమైన అంచనా వివరాలు పొందండి.'
                )}
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E5A93C]/20 text-[#E5A93C] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-400">Direct Contractor Mobile</div>
                    <a
                      href={`tel:${SITE_CONFIG.contact.primaryPhoneRaw}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-[#E5A93C]"
                    >
                      {SITE_CONFIG.contact.primaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-400">Instant WhatsApp Chat</div>
                    <a
                      href={SITE_CONFIG.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-[#25D366] hover:underline"
                    >
                      Chat on WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
