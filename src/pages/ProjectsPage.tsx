import React, { useState } from 'react';
import { 
  MapPin, 
  Eye, 
  Search, 
  X, 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  LayoutGrid, 
  ListFilter, 
  ShieldCheck, 
  Hammer, 
  CheckCircle2, 
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPLETED_PROJECTS, ConstructionImage } from '../data/images';
import { SITE_CONFIG } from '../data/site';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Lightbox } from '../components/Lightbox';
import { ProjectStamp } from '../components/ProjectStamp';

type ViewMode = 'grid' | 'list';

export const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // All completed projects simply visible one by one
  const filteredProjects = COMPLETED_PROJECTS.filter((proj) => {
    const matchesSearch = searchQuery.trim() === '' ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (proj.scope && proj.scope.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesSearch;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <SEOHead
        title="Completed Construction Projects in Rajahmundry | MK Constructions"
        description="Browse photo portfolio of completed independent houses, luxury villas, 5-storey apartment complexes, Deluxe Mahal event hall and interior woodwork in Rajahmundry."
        canonicalPath="/projects"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#070D16] via-[#0B1320] to-[#0F1D33] text-white pt-36 pb-16 border-b border-[#E5A93C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/20 border border-[#E5A93C]/40 text-[#E5A93C] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>{t('Completed Projects Showcase', 'పూర్తయిన నిర్మాణాల గ్యాలరీ')}</span>
            <span className="text-white/40">·</span>
            <span>Rajahmundry & East Godavari</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white mt-1 max-w-3xl mx-auto">
            {t(
              'Completed Projects in Rajahmundry',
              'రాజమండ్రిలో పూర్తయిన మా ప్రాజెక్ట్‌లు'
            )}
          </h1>
          <p className="mt-3 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t(
              'Browse our verified portfolio of completed turnkey residences, multi-storey apartment buildings, grand commercial event halls, and handcrafted interiors.',
              'ఎటువంటి గ్రాఫిక్స్ లేకుండా నేరుగా సైట్ల వద్ద తీసిన అసలైన ఫోటోలు.'
            )}
          </p>

          {/* Search & Layout View Controls */}
          <div className="mt-8 max-w-2xl mx-auto flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('Search completed projects in Rajahmundry...', 'ప్రాజెక్ట్ వెతకండి...')}
                className="w-full bg-[#0B1320]/90 border border-white/15 rounded-xl pl-10 pr-9 py-2.5 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#E5A93C] shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* View Mode Switcher: Grid vs 1-by-1 List */}
            <div className="flex items-center bg-[#0B1320]/90 border border-white/15 rounded-xl p-1 shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-[#E5A93C] text-[#0B1320] shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
                title="Grid View"
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
                title="1-by-1 Detailed View"
              >
                <ListFilter className="w-4 h-4" />
                <span className="hidden sm:inline text-[11px]">1-by-1 View</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Projects Dashboard Section */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Status Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-10 border-b border-stone-200 gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-display text-[#0B1320]">
                {t('Completed Turnkey Projects', 'పూర్తయిన నిర్మాణ ప్రాజెక్ట్‌లు')}
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                {t(
                  `Displaying all ${filteredProjects.length} finished projects neatly structured one by one.`,
                  `మొత్తం ${filteredProjects.length} పూర్తయిన ప్రాజెక్ట్‌లు ఒకదాని తర్వాత ఒకటి చూపించబడుతున్నాయి.`
                )}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                100% Completed Projects
              </span>
            </div>
          </div>

          {/* 1. GRID VIEW: Structured, Uniform Cards Displayed One by One */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.slug}
                  onClick={() => openLightbox(idx)}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-stone-200/90 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  {/* Image Container with Uniform Aspect Ratio */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                    <img
                      src={project.src}
                      srcSet={project.srcSet}
                      alt={project.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${project.blurDataUrl})`,
                        backgroundSize: 'cover',
                      }}
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider backdrop-blur-md shadow-md border border-white/20 bg-[#0B1320]/90 text-[#E5A93C]">
                        {project.statusBadge || 'Completed'}
                      </span>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute top-3 right-3 pointer-events-none">
                      <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#E5A93C]" />
                        <span>{project.location}</span>
                      </span>
                    </div>

                    {/* Hover Action Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/80 via-[#0B1320]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center justify-center p-4">
                      <div className="transform translate-y-3 group-hover:translate-y-0 group-hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] text-[#0B1320] font-black text-xs shadow-2xl">
                        <Eye className="w-4 h-4 text-[#0B1320]" />
                        <span>{t('View High-Res Photo', 'పూర్తి ఫోటో చూడండి')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Structured Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-[#D97706] font-bold uppercase tracking-wider mb-1.5">
                        <span className="capitalize">{project.projectType || project.category}</span>
                        <span className="text-stone-400 capitalize flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#E5A93C]" />
                          {project.location}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[#0B1320] font-display leading-snug group-hover:text-[#D97706] transition-colors">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {project.scope || project.alt}
                      </p>
                    </div>

                    {/* Card Footer with Verification Seal */}
                    <div className="mt-4 pt-3.5 border-t border-stone-100 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Turnkey Completed</span>
                      </div>

                      <ProjectStamp variant="edge" size="sm" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2. 1-BY-1 LIST VIEW: Sequential Detailed Cards */}
          {viewMode === 'list' && (
            <div className="space-y-8">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.slug}
                  onClick={() => openLightbox(idx)}
                  className="group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-stone-200 transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 items-center"
                >
                  {/* Left Column: Photo Frame */}
                  <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-100">
                    <img
                      src={project.src}
                      srcSet={project.srcSet}
                      alt={project.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${project.blurDataUrl})`,
                        backgroundSize: 'cover',
                      }}
                    />

                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-md bg-[#0B1320]/90 text-[#E5A93C] text-[10px] font-black uppercase tracking-wider backdrop-blur-md shadow-md border border-white/10">
                        {project.statusBadge || 'Completed'}
                      </span>
                    </div>

                    <ProjectStamp className="bottom-3 right-3" size="md" position="bottom-right" />
                  </div>

                  {/* Right Column: Detailed Breakdown */}
                  <div className="lg:col-span-7 space-y-3">
                    <div className="flex items-center justify-between text-xs text-stone-400">
                      <span className="text-[#E5A93C] font-bold uppercase tracking-wider text-[11px]">
                        {project.projectType || project.category}
                      </span>
                      <span className="flex items-center gap-1 text-stone-600">
                        <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
                        {project.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0B1320] group-hover:text-[#D97706] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {project.alt}
                    </p>

                    {/* Scope Specification Box */}
                    {project.scope && (
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 font-medium flex items-start gap-2">
                        <Hammer className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                        <span><strong>Scope of Work:</strong> {project.scope}</span>
                      </div>
                    )}

                    {/* Quality Badges */}
                    <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px]">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Completed & Handed Over
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 border border-stone-200">
                        Zero Subcontracting
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 border border-stone-200">
                        Rajahmundry & Godavari Belt
                      </span>
                    </div>

                    {/* Action Row */}
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
                        <span>Inquire About Similar Build</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty Search State */}
          {filteredProjects.length === 0 && (
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
        images={filteredProjects}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
};
