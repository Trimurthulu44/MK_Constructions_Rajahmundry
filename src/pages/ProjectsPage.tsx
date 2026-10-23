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
  LayoutGrid, 
  ListFilter, 
  ShieldCheck, 
  Hammer, 
  Building2, 
  CheckCircle2, 
  Phone 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_IMAGES, ConstructionImage, isProjectCompleted } from '../data/images';
import { SITE_CONFIG } from '../data/site';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Lightbox } from '../components/Lightbox';
import { ProjectStamp } from '../components/ProjectStamp';

type CategoryFilter = 'all' | 'exterior' | 'in-progress' | 'interior' | 'people/team';
type ViewMode = 'grid' | 'list';

export const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter images - all displayed individually one by one
  const filteredImages = SITE_IMAGES.filter((img) => {
    const matchesCategory = filter === 'all' || img.category === filter;
    const matchesSearch = searchQuery.trim() === '' ||
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const categories: { key: CategoryFilter; label: string; count: number }[] = [
    { key: 'all', label: t('All Projects', 'అన్ని ప్రాజెక్ట్‌లు'), count: SITE_IMAGES.length },
    { key: 'exterior', label: t('Completed Homes & Elevations', 'పూర్తయిన ఇళ్లు & ఎలివేషన్'), count: SITE_IMAGES.filter(i => i.category === 'exterior').length },
    { key: 'in-progress', label: t('Under Construction & Structural', 'నిర్మాణంలో ఉన్నవి & స్ట్రక్చరల్'), count: SITE_IMAGES.filter(i => i.category === 'in-progress').length },
    { key: 'interior', label: t('Interior Woodwork', 'ఇంటీరియర్ & వుడ్‌వర్క్'), count: SITE_IMAGES.filter(i => i.category === 'interior').length },
    { key: 'people/team', label: t('Founder & Leadership', 'వ్యవస్థాపకుడు & టీమ్'), count: SITE_IMAGES.filter(i => i.category === 'people/team').length },
  ];

  return (
    <>
      <SEOHead
        title="Completed & Ongoing Construction Projects in Rajahmundry | MK Constructions"
        description="Browse photo gallery of completed independent houses, duplex villas, commercial halls, RCC slab shuttering & interior woodwork in Rajahmundry."
        canonicalPath="/projects"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#070D16] via-[#0B1320] to-[#0F1D33] text-white pt-36 pb-16 border-b border-[#E5A93C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/20 border border-[#E5A93C]/40 text-[#E5A93C] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>{t('Verified On-Site Construction Portfolio', 'అసలైన నిర్మాణ పోర్ట్‌ఫోలియో')}</span>
            <span className="text-white/40">·</span>
            <span>Rajahmundry & East Godavari</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white mt-1 max-w-3xl mx-auto">
            {t(
              'Our Construction Projects in Rajahmundry',
              'రాజమండ్రిలో మా నిర్మాణ ప్రాజెక్ట్‌లు'
            )}
          </h1>
          <p className="mt-3 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t(
              'Explore 100% authentic on-site photographs of completed residences, active RCC structural stages, and interior woodwork directly supervised by contractor Gedala Laxman Rao.',
              'ఎటువంటి నకిలీ కంప్యూటర్ గ్రాఫిక్స్ లేకుండా నేరుగా సైట్ వద్ద తీసిన నిజమైన ఫోటోలు.'
            )}
          </p>

          {/* Structured Category Filters Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#070D16]/90 backdrop-blur-md rounded-2xl max-w-4xl mx-auto border border-white/10 shadow-lg">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  filter === cat.key
                    ? 'bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] text-[#0B1320] font-black shadow-md'
                    : 'text-stone-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  filter === cat.key ? 'bg-black/20 text-[#0B1320]' : 'bg-white/10 text-stone-300'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search & Layout Control Bar */}
          <div className="mt-6 max-w-2xl mx-auto flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('Search project by name or type in Rajahmundry...', 'ప్రాజెక్ట్ పేరు లేదా రకం వెతకండి...')}
                className="w-full bg-[#0B1320]/90 border border-white/15 rounded-xl pl-10 pr-9 py-2.5 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#E5A93C] shadow-inner"
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

            {/* View Mode Toggle: Grid vs 1-by-1 List */}
            <div className="flex items-center bg-[#0B1320]/90 border border-white/15 rounded-xl p-1 shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-[#E5A93C] text-[#0B1320] shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
                title="Grid View (3 cards per row)"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline text-[11px]">Grid</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'list'
                    ? 'bg-[#E5A93C] text-[#0B1320] shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
                title="1-by-1 Detailed List View"
              >
                <ListFilter className="w-4 h-4" />
                <span className="hidden sm:inline text-[11px]">1-by-1 View</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Structured Dashboard */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Subheader Status Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-10 border-b border-stone-200 gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-display text-[#0B1320]">
                {filter === 'all' 
                  ? t('All Verified Construction Projects', 'అన్ని అసలైన నిర్మాణ ప్రాజెక్ట్‌లు')
                  : categories.find(c => c.key === filter)?.label}
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                {t(
                  `Displaying ${filteredImages.length} projects neatly formatted one by one · Beautiful completed elevations prioritized first.`,
                  `${filteredImages.length} ప్రాజెక్ట్‌లు క్రమపద్ధతిలో ఒకదాని తర్వాత ఒకటి చూపించబడుతున్నాయి.`
                )}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                100% Real Site Photos
              </span>
              {filter !== 'all' && (
                <button
                  onClick={() => { setFilter('all'); setSearchQuery(''); }}
                  className="text-xs text-[#D97706] font-bold hover:underline"
                >
                  {t('Reset Filter', 'రీసెట్ చేయండి')}
                </button>
              )}
            </div>
          </div>

          {/* 1. GRID VIEW: Neatly Formatted Uniform Cards */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((img, idx) => (
                <div
                  key={img.slug}
                  onClick={() => openLightbox(idx)}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-stone-200/90 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  {/* Fixed Uniform Aspect Ratio Photo */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                    <img
                      src={img.src}
                      srcSet={img.srcSet}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${img.blurDataUrl})`,
                        backgroundSize: 'cover',
                      }}
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 pointer-events-none">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-md border border-white/20 ${
                        img.category === 'exterior'
                          ? 'bg-[#0B1320]/90 text-[#E5A93C]'
                          : img.category === 'in-progress'
                          ? 'bg-amber-900/90 text-amber-200'
                          : 'bg-[#0B1320]/90 text-stone-200'
                      }`}>
                        {img.statusBadge || img.category}
                      </span>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute top-3 right-3 pointer-events-none">
                      <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#E5A93C]" />
                        <span>{img.location}</span>
                      </span>
                    </div>

                    {/* Hover Overlay with Action Button */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/80 via-[#0B1320]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center justify-center p-4">
                      <div className="transform translate-y-3 group-hover:translate-y-0 group-hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] text-[#0B1320] font-black text-xs shadow-2xl">
                        <Eye className="w-4 h-4 text-[#0B1320]" />
                        <span>{t('View High-Res Photo', 'పూర్తి ఫోటో చూడండి')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Structured Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-[#D97706] font-bold uppercase tracking-wider mb-1.5">
                        <span>Project #{String(idx + 1).padStart(2, '0')}</span>
                        <span className="text-stone-400 capitalize">{img.category}</span>
                      </div>
                      
                      <h3 className="text-base font-bold text-[#0B1320] font-display leading-snug group-hover:text-[#D97706] transition-colors">
                        {img.title}
                      </h3>

                      <p className="mt-2 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {img.scope || img.alt}
                      </p>
                    </div>

                    {/* Card Footer with Verification Stamp */}
                    <div className="mt-4 pt-3.5 border-t border-stone-100 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Gedala Laxman Rao Supervision</span>
                      </div>

                      {img.category !== 'people/team' && (
                        <ProjectStamp variant="edge" size="sm" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2. 1-BY-1 LIST VIEW: Detailed Sequential Showcase */}
          {viewMode === 'list' && (
            <div className="space-y-8">
              {filteredImages.map((img, idx) => (
                <div
                  key={img.slug}
                  onClick={() => openLightbox(idx)}
                  className="group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-stone-200 transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 items-center"
                >
                  {/* Left Column: Photo */}
                  <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-100">
                    <img
                      src={img.src}
                      srcSet={img.srcSet}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${img.blurDataUrl})`,
                        backgroundSize: 'cover',
                      }}
                    />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-md bg-[#0B1320]/90 text-[#E5A93C] text-[10px] font-black uppercase tracking-wider backdrop-blur-md shadow-md border border-white/10">
                        {img.statusBadge || img.category}
                      </span>
                    </div>

                    {img.category !== 'people/team' && (
                      <ProjectStamp className="bottom-3 right-3" size="md" position="bottom-right" />
                    )}
                  </div>

                  {/* Right Column: Detailed Breakdown */}
                  <div className="lg:col-span-7 space-y-3">
                    <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
                      <span className="text-[#E5A93C] font-bold">PROJECT #{String(idx + 1).padStart(2, '0')}</span>
                      <span className="flex items-center gap-1 text-stone-600">
                        <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
                        {img.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0B1320] group-hover:text-[#D97706] transition-colors">
                      {img.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {img.alt}
                    </p>

                    {/* Scope Specification Box */}
                    {img.scope && (
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 font-medium flex items-start gap-2">
                        <Hammer className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                        <span><strong>Scope of Work:</strong> {img.scope}</span>
                      </div>
                    )}

                    {/* Quality Badges */}
                    <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px]">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        Direct Contractor Supervision
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 border border-stone-200">
                        Zero Subcontracting
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 border border-stone-200">
                        Rajahmundry & Godavari Belt
                      </span>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={(e) => { e.stopPropagation(); openLightbox(idx); }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] text-[#0B1320] font-bold text-xs shadow hover:brightness-110 transition-all"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{t('View Full-Size Photograph', 'పూర్తి ఫోటో చూడండి')}</span>
                      </button>

                      <a
                        href={`tel:${SITE_CONFIG.contact.primaryPhoneRaw}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1320] hover:text-[#D97706] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
                        <span>Inquire About This Style</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty Search State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 shadow-sm p-8">
              <p className="text-stone-600 text-sm font-semibold">
                No projects found matching "{searchQuery}".
              </p>
              <button
                onClick={() => { setFilter('all'); setSearchQuery(''); }}
                className="mt-4 px-5 py-2.5 bg-[#0B1320] text-[#E5A93C] rounded-xl text-xs font-bold hover:brightness-125 transition-all shadow-md"
              >
                Reset Search & Show All Projects
              </button>
            </div>
          )}

          {/* Bottom Callout: Estimate House Cost */}
          <div className="mt-20 bg-gradient-to-br from-[#070D16] via-[#0B1320] to-[#152338] rounded-3xl p-8 sm:p-12 text-white border border-[#E5A93C]/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
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
