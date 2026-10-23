import React, { useState } from 'react';
import { 
  MapPin, 
  Eye, 
  Info, 
  Search, 
  X, 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Hammer, 
  CheckCircle2, 
  ArrowLeftRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_IMAGES, ConstructionImage, TWO_IN_ONE_PROJECTS, isProjectCompleted } from '../data/images';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Lightbox } from '../components/Lightbox';
import { ProjectStamp } from '../components/ProjectStamp';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

type CategoryFilter = 'all' | 'two-in-one' | 'exterior' | 'in-progress' | 'interior' | 'people/team';

export const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // 2-in-1 Project Images
  const twoInOneProject = TWO_IN_ONE_PROJECTS[0];
  const before2In1Img = SITE_IMAGES.find((img) => img.slug === twoInOneProject.beforeSlug) || SITE_IMAGES[0];
  const after2In1Img = SITE_IMAGES.find((img) => img.slug === twoInOneProject.afterSlug) || SITE_IMAGES[1];

  // Filtering images
  const filteredImages = SITE_IMAGES.filter((img) => {
    // When viewing 'all' or 'exterior', settle duplicate raw inspection image neatly into the 2-in-1 showcase
    // so it doesn't clutter as an isolated duplicate card
    if ((filter === 'all' || filter === 'exterior') && img.slug === twoInOneProject.beforeSlug && searchQuery.trim() === '') {
      return false;
    }

    if (filter === 'two-in-one') {
      return img.slug === twoInOneProject.afterSlug || img.slug === twoInOneProject.beforeSlug;
    }

    const matchesCategory = filter === 'all' || img.category === filter;
    const matchesSearch = searchQuery.trim() === '' ||
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.alt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const categories: { key: CategoryFilter; label: string; icon?: React.ReactNode }[] = [
    { key: 'all', label: t('All Projects', 'అన్ని ప్రాజెక్ట్‌లు') },
    { key: 'two-in-one', label: t('✨ 2-in-1 Transformations', '✨ 2-ఇన్-1 నిర్మాణాలు'), icon: <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" /> },
    { key: 'exterior', label: t('Exteriors & Elevations', 'ఎక్స్‌టీరియర్ & ఎలివేషన్') },
    { key: 'in-progress', label: t('Under Construction', 'నిర్మాణంలో ఉన్నవి') },
    { key: 'interior', label: t('Interiors & Woodwork', 'ఇంటీరియర్ & వుడ్‌వర్క్') },
    { key: 'people/team', label: t('Founder & Team', 'వ్యవస్థాపకుడు & టీమ్') },
  ];

  return (
    <>
      <SEOHead
        title="Completed & Ongoing Construction Projects in Rajahmundry | MK Constructions"
        description="Browse photo gallery of completed independent houses, duplex villas, commercial halls, RCC slab shuttering & interior woodwork in Rajahmundry."
        canonicalPath="/projects"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#070D16] via-[#0B1320] to-[#0F1D33] text-white pt-36 pb-20 border-b border-[#E5A93C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Real Workmanship Archive', 'నిర్మాణ గ్యాలరీ')}</span>
            <span className="text-white/40">·</span>
            <span>Rajahmundry & East Godavari</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white mt-2 max-w-3xl mx-auto">
            {t(
              'Our Construction Projects in Rajahmundry',
              'రాజమండ్రిలో మా నిర్మాణ ప్రాజెక్ట్‌లు'
            )}
          </h1>
          <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t(
              'Explore 100% authentic on-site photographs of completed residences, active RCC structural stages, and interior woodwork executed by MK Constructions.',
              'ఎటువంటి నకిలీ కంప్యూటర్ గ్రాఫిక్స్ లేకుండా నేరుగా సైట్ వద్ద తీసిన నిజమైన ఫోటోలు.'
            )}
          </p>

          {/* Interactive Filter Segmented Control */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#070D16]/90 backdrop-blur-md rounded-2xl max-w-3xl mx-auto border border-white/10 shadow-lg">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  filter === cat.key
                    ? 'bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] text-[#0B1320] font-black shadow-md'
                    : 'text-stone-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search Input Row */}
          <div className="mt-6 max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('Search project by name or type in Rajahmundry...', 'ప్రాజెక్ట్ పేరు లేదా రకం వెతకండి...')}
                className="w-full bg-[#0B1320]/90 border border-white/15 rounded-xl pl-10 pr-9 py-2.5 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#E5A93C]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white p-0.5"
                  aria-label="Clear search query"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured 2-in-1 Project Showcase: Settle Same-Building Lifecycle */}
      {(filter === 'all' || filter === 'two-in-one') && searchQuery.trim() === '' && (
        <section className="bg-white border-b border-stone-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#0B1320] via-[#122238] to-[#0B1320] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border-2 border-[#E5A93C]/40">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Description */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/20 border border-[#E5A93C]/40 text-[#E5A93C] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
                    <span>{t('2-in-1 Project Transformation', '2-ఇన్-1 అసలైన నిర్మాణం')}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
                    {t(twoInOneProject.title, twoInOneProject.teluguTitle)}
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {t(twoInOneProject.story, twoInOneProject.teluguStory)}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {twoInOneProject.specs.map((spec, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[10px] text-[#E5A93C] font-semibold uppercase">{spec.label}</div>
                        <div className="text-xs font-bold text-white mt-0.5">{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Supervision Guarantee */}
                  <div className="flex items-center gap-2 pt-2 text-xs text-stone-300 border-t border-white/10">
                    <ShieldCheck className="w-4 h-4 text-[#E5A93C] shrink-0" />
                    <span>{t('Zero Subcontracting · Direct Supervision by Gedala Laxman Rao', 'సబ్‌కాంట్రాక్ట్ లేకుండా గెడల లక్ష్మణరావు గారి ప్రత్యక్ష పర్యవేక్షణ')}</span>
                  </div>
                </div>

                {/* Right Interactive Slider */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/40">
                    <BeforeAfterSlider
                      beforeImage={before2In1Img}
                      afterImage={after2In1Img}
                      beforeLabel={t('Before: Structural RCC Frame & Beam Alignment', 'నిర్మాణంలో: రా ఫ్రేమింగ్ & బీమ్ అమరిక')}
                      afterLabel={t('After: Completed 3-Storey Elevation with Ganesha Art', 'పూర్తయిన తర్వాత: 3 అంతస్తుల మోడ్రన్ ఎలివేషన్')}
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-stone-400">
                    <span className="flex items-center gap-1.5 text-[#E5A93C]">
                      <ArrowLeftRight className="w-3.5 h-3.5" />
                      {t('Drag slider left/right to compare same building', 'స్లైడర్‌ను జరిపి చూడవచ్చు')}
                    </span>
                    <span className="font-mono text-stone-400">Rajahmundry Site</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Subtitle */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-display text-[#0B1320]">
                {filter === 'two-in-one'
                  ? t('2-in-1 Project Details', '2-ఇన్-1 ప్రాజెక్ట్ వివరాలు')
                  : t('Curated Project Archive', 'ప్రాజెక్ట్ గ్యాలరీ')}
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                {t(
                  `Displaying ${filteredImages.length} authentic photographs, sorted with premier completed elevations first.`,
                  `${filteredImages.length} అసలైన నిర్మాణ ఫోటోలు, అందమైన ఎలివేషన్‌లు మొదటి ప్రాధాన్యతగా చూపించబడుతున్నాయి.`
                )}
              </p>
            </div>
            {filter !== 'all' && (
              <button
                onClick={() => setFilter('all')}
                className="text-xs text-[#D97706] font-bold hover:underline"
              >
                {t('View All (Reset)', 'అన్నీ చూడండి')}
              </button>
            )}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((img, idx) => (
              <div
                key={img.slug}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md border border-stone-200 cursor-pointer break-inside-avoid hover:shadow-xl hover:border-[#E5A93C] transition-all duration-300"
              >
                <div className="relative overflow-hidden bg-stone-100">
                  <img
                    src={img.src}
                    srcSet={img.srcSet}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${img.blurDataUrl})`,
                      backgroundSize: 'cover',
                    }}
                  />

                  {/* 2-in-1 Badge if applicable */}
                  {img.twoInOneRole && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] text-[#0B1320] text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1 border border-white/40">
                      <Sparkles className="w-3 h-3" />
                      <span>{img.twoInOneRole === 'after' ? '2-in-1 Completed' : '2-in-1 Raw Frame'}</span>
                    </div>
                  )}

                  {/* Exclude / Inspection Note Badge if applicable */}
                  {img.excludeReason && !img.twoInOneRole && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-amber-900/80 backdrop-blur-sm rounded text-[10px] text-amber-200 font-mono flex items-center gap-1 border border-amber-500/30">
                      <Info className="w-3 h-3 shrink-0" />
                      <span>On-Site Inspection Archive</span>
                    </div>
                  )}

                  {/* Animated Interactive Button on Mouse-Over */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/80 via-[#0B1320]/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center justify-center p-4">
                    <div className="transform translate-y-3 group-hover:translate-y-0 group-hover:scale-105 active:scale-95 transition-all duration-300 ease-out inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] text-[#0B1320] font-black text-xs shadow-2xl border border-white/50 group-hover:shadow-[0_0_20px_rgba(229,169,60,0.6)]">
                      <Eye className="w-4 h-4 text-[#0B1320] animate-pulse" />
                      <span>{t('View Photo', 'ఫోటో చూడండి')}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer Details - with Stamper at Below Corner Edge */}
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-[10px] text-[#D97706] font-bold uppercase tracking-wider mb-1">
                      <span>{img.category}</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-500 font-medium">Rajahmundry</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#0B1320] font-display line-clamp-1 group-hover:text-[#D97706] transition-colors">
                      {img.title}
                    </h3>
                  </div>

                  {/* Stamper at Below Corner Edge */}
                  {img.category !== 'people/team' && (
                    <ProjectStamp variant="edge" size="sm" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-stone-200">
              <p className="text-stone-500 text-sm">
                No images found matching your search. Try resetting the filter.
              </p>
              <button
                onClick={() => { setFilter('all'); setSearchQuery(''); }}
                className="mt-3 px-4 py-2 bg-[#0B1320] text-[#E5A93C] rounded-lg text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Bottom Callout: Estimate House Cost */}
          <div className="mt-16 bg-gradient-to-br from-[#070D16] via-[#0B1320] to-[#152338] rounded-3xl p-8 sm:p-12 text-white border border-[#E5A93C]/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/20 border border-[#E5A93C]/30 text-[#E5A93C] text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                <span>{t('Plan Your Construction', 'ఖర్చు అంచనా')}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                {t('Inspired by Our Projects? Calculate Your Cost', 'మీ ఇంటి నిర్మాణానికి ఎంత ఖర్చవుతుందో లెక్కించండి')}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300">
                {t(
                  'Use our interactive Rajahmundry house cost estimator to calculate per-sq-ft budgets for standard & luxury villas.',
                  'మీ స్థలం కొలతలతో కొన్ని క్షణాల్లోనే వివరణాత్మక వ్యయ అంచనా పొందండి.'
                )}
              </p>
            </div>

            <Link
              to="/cost-estimator"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] hover:brightness-110 text-[#0B1320] text-xs sm:text-sm font-black flex items-center gap-2 shadow-lg transition-transform active:scale-95 whitespace-nowrap shrink-0"
            >
              <span>{t('Open Cost Estimator', 'కాస్ట్ ఎస్టిమేటర్ తెరవండి')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
};
