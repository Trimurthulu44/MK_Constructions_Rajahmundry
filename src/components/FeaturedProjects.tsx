import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { MapPin, Eye, ArrowRight, Sparkles, Building2, Home, Hammer } from 'lucide-react';
import { SITE_IMAGES, ConstructionImage, isProjectCompleted } from '../data/images';
import { useLanguage } from '../context/LanguageContext';
import { Lightbox } from './Lightbox';
import { ProjectStamp } from './ProjectStamp';

type ProjectFilter = 'all' | 'residential' | 'commercial' | 'interior';

export const FeaturedProjects: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-60px' });

  // Curated featured projects pulled from data manifest
  const featuredSlugs = [
    'luxury-multi-storey-home-rajahmundry-02',
    'modern-residential-house-elevation-rajahmundry-01',
    'independent-house-front-elevation-rajahmundry',
    'textured-facade-residence-rajahmundry-03',
    'lakshmi-nilayam-residential-building-rajahmundry-04',
    'custom-wooden-partition-jali-interior-rajahmundry',
  ];

  const allFeatured: ConstructionImage[] = featuredSlugs
    .map((slug) => SITE_IMAGES.find((img) => img.slug === slug)!)
    .filter(Boolean);

  const filteredProjects = allFeatured.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'residential') {
      return (
        project.category === 'exterior' ||
        project.slug.includes('residential') ||
        project.slug.includes('home') ||
        project.slug.includes('independent') ||
        project.slug.includes('residence')
      );
    }
    if (activeFilter === 'commercial') {
      return project.slug.includes('commercial') || project.slug.includes('rcc');
    }
    if (activeFilter === 'interior') {
      return project.category === 'interior';
    }
    return true;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const filterButtons: { key: ProjectFilter; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: t('All Featured', 'అన్నీ'), icon: <Sparkles className="w-3.5 h-3.5" /> },
    { key: 'residential', label: t('Independent Houses & Villas', 'వ్యక్తిగత ఇళ్లు'), icon: <Home className="w-3.5 h-3.5" /> },
    { key: 'commercial', label: t('Commercial & Structural', 'వాణిజ్య & సివిల్'), icon: <Building2 className="w-3.5 h-3.5" /> },
    { key: 'interior', label: t('Interior Woodwork', 'ఇంటీరియర్'), icon: <Hammer className="w-3.5 h-3.5" /> },
  ];

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-stone-200 relative"
      aria-label="MK Constructions Featured Projects Showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Section Flow & View All Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] flex items-center gap-1.5">
              <span>{t('Authentic Workmanship', 'నిజమైన నిర్మాణాలు')}</span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-600 font-mono text-[11px]">Rajahmundry & East Godavari</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-[#0B1320] mt-2 text-balance">
              {t(
                'Featured Residential & Commercial Projects',
                'ప్రధాన ఇళ్లు & భవన నిర్మాణ ప్రాజెక్ట్‌లు'
              )}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
              {t(
                'Explore completed independent villas, structural RCC framing, and interior woodwork directly supervised by contractor Gedala Laxman Rao.',
                'కంప్యూటర్ గ్రాఫిక్స్ లేకుండా నేరుగా మా సైట్ల వద్ద తీసిన అసలైన ఫోటోలు.'
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="shrink-0"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#0B1320] bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] hover:brightness-110 transition-all shadow-md group"
            >
              <span>{t('View Full Photo Archive', 'అన్ని ఫోటోలు చూడండి')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Filter Segmented Control Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-stone-200/70 rounded-xl w-fit"
        >
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveFilter(btn.key)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                activeFilter === btn.key
                  ? 'bg-[#0B1320] text-[#E5A93C] shadow-sm'
                  : 'text-stone-700 hover:text-[#0B1320] hover:bg-white/50'
              }`}
            >
              {btn.icon}
              <span>{btn.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Animated Project Grid with Hover Zoom & Scrim Overlay */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => openLightbox(allFeatured.findIndex((p) => p.slug === project.slug))}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl border border-stone-200/90 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image Container with Hover Scale */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={project.src}
                    srcSet={project.srcSet}
                    alt={project.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    style={{
                      backgroundImage: `url(${project.blurDataUrl})`,
                      backgroundSize: 'cover',
                    }}
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md bg-[#0B1320]/85 backdrop-blur-md text-[#E5A93C] text-[10px] font-bold uppercase tracking-wider border border-white/10">
                      {project.category}
                    </span>
                    {project.twoInOneRole && (
                      <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] text-[#0B1320] text-[10px] font-black uppercase tracking-wider shadow-md">
                        ✨ 2-in-1 Project
                      </span>
                    )}
                  </div>

                  {/* Animated Interactive Button on Mouse-Over */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/80 via-[#0B1320]/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center justify-center p-4">
                    <div className="transform translate-y-3 group-hover:translate-y-0 group-hover:scale-105 active:scale-95 transition-all duration-300 ease-out inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] text-[#0B1320] font-black text-xs shadow-2xl border border-white/50 group-hover:shadow-[0_0_20px_rgba(229,169,60,0.6)]">
                      <Eye className="w-4 h-4 text-[#0B1320] animate-pulse" />
                      <span>{t('View Project Photos', 'ఫోటోలు చూడండి')}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#0B1320] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer Details - with Stamper at Below Corner Edge */}
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 text-xs text-[#D97706] font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>Rajahmundry</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-[#0B1320] group-hover:text-[#D97706] transition-colors leading-snug line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  {/* Neat Official Stamper at Below Corner Edge */}
                  <ProjectStamp variant="edge" size="md" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
            <p className="text-stone-500 text-sm">
              No projects found for the selected category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={allFeatured}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
};
