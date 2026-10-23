import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Phone, MessageCircle, Eye } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { SITE_IMAGES, ConstructionImage, isProjectCompleted } from '../data/images';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ContactForm } from '../components/ContactForm';
import { Lightbox } from '../components/Lightbox';
import { ProjectStamp } from '../components/ProjectStamp';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const service = SITE_CONFIG.services.find((s) => s.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related photos for this service
  const relatedImages: ConstructionImage[] = service.relatedImageSlugs
    .map((s) => SITE_IMAGES.find((img) => img.slug === s)!)
    .filter(Boolean);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${service.title} in Rajahmundry`,
        serviceType: service.title,
        provider: {
          '@type': 'GeneralContractor',
          name: 'MK Constructions',
          telephone: SITE_CONFIG.contact.primaryPhone,
          url: 'https://mkconstructionsrajahmundry.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Rajahmundry',
            addressRegion: 'Andhra Pradesh',
            addressCountry: 'IN',
          },
        },
        areaServed: {
          '@type': 'City',
          name: 'Rajahmundry',
        },
        description: service.shortDesc,
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://mkconstructionsrajahmundry.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://mkconstructionsrajahmundry.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: `https://mkconstructionsrajahmundry.com/services/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEOHead
        title={`${service.title} in Rajahmundry | MK Constructions`}
        description={`${service.shortDesc} Gedala Laxman Rao guarantees quality materials and timely completion.`}
        canonicalPath={`/services/${service.slug}`}
        schema={pageSchema}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#070D16] via-[#0B1320] to-[#0F1D33] text-white pt-36 pb-20 border-b border-[#E5A93C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-300 mb-4">
            <Link to="/" className="hover:text-[#E5A93C]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <Link to="/services" className="hover:text-[#E5A93C]">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#E5A93C] font-semibold">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
              {service.tagline}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-display text-white mt-2">
              {t(service.title, service.teluguTitle)} in Rajahmundry
            </h1>
            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              {t(service.fullDesc, service.teluguDesc)}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.contact.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0B1320] bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] hover:brightness-110 transition-all shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Call Contractor Gedala Laxman Rao</span>
              </a>
              <a
                href={SITE_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Process Steps */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Process & Features */}
            <div className="lg:col-span-8 space-y-12">
              {/* Key Features Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0B1320] mb-4">
                  {t('What Makes Our Construction Superior', 'మా నాణ్యతా ప్రమాణాలు')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Construction Process */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                    {t('Step-by-Step Workflow', 'నిర్మాణ దశలు')}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0B1320] mt-1">
                    {t('How We Execute Your Project in Rajahmundry', 'పని విధానం')}
                  </h2>
                </div>

                <div className="space-y-6">
                  {service.processSteps.map((step) => (
                    <div key={step.step} className="flex gap-4 items-start">
                      <div className="w-9 h-9 rounded-2xl bg-[#0B1320] text-[#E5A93C] font-black text-xs flex items-center justify-center shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#0B1320] font-display">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Photo Gallery */}
              {relatedImages.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0B1320]">
                      {t('Project Photos for This Service', 'సంబంధిత ప్రాజెక్ట్ ఫోటోలు')}
                    </h2>
                    <span className="text-xs text-stone-500 font-medium">Rajahmundry, AP</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {relatedImages.map((img, idx) => (
                      <div
                        key={img.slug}
                        onClick={() => openLightbox(idx)}
                        className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-[#E5A93C] shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                      >
                        {/* 100% Clean Image Container with Animated Hover Button */}
                        <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                          <img
                            src={img.src}
                            srcSet={img.srcSet}
                            alt={img.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/80 via-[#0B1320]/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center justify-center p-4">
                            <div className="transform translate-y-3 group-hover:translate-y-0 group-hover:scale-105 active:scale-95 transition-all duration-300 ease-out inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] text-[#0B1320] font-black text-xs shadow-2xl border border-white/50 group-hover:shadow-[0_0_20px_rgba(229,169,60,0.6)]">
                              <Eye className="w-3.5 h-3.5 text-[#0B1320] animate-pulse" />
                              <span>{t('View Photo', 'ఫోటో చూడండి')}</span>
                            </div>
                          </div>
                        </div>

                        {/* Below-Corner Card Footer: Location strictly Rajahmundry & Stamp at below edge */}
                        <div className="p-3.5 bg-white border-t border-stone-100 flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-[#0B1320] truncate font-display">{img.title}</h4>
                            <p className="text-[11px] text-[#D97706] font-semibold flex items-center gap-1 mt-0.5">
                              <span>Rajahmundry</span>
                            </p>
                          </div>
                          {/* Official circular stamp at below corner edge */}
                          <ProjectStamp variant="edge" size="sm" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Service-Specific FAQs */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0B1320] mb-4">
                  {t('Frequently Asked Questions', 'తరచుగా అడిగే ప్రశ్నలు')}
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="pb-4 border-b border-stone-100 last:border-b-0">
                      <h3 className="text-sm font-bold text-[#0B1320]">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Contact Form */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-24">
                <ContactForm defaultService={service.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for service photos */}
      <Lightbox
        images={relatedImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
};
