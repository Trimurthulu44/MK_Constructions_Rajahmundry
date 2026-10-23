import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, HelpCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { SITE_IMAGES } from '../data/images';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ContactForm } from '../components/ContactForm';

export const ServicesIndexPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const servicesFaqs = [
    {
      question: 'How is house construction cost calculated for residential projects in Rajahmundry?',
      answer: 'Construction costs in Rajahmundry depend on total built-up square footage, foundation soil depth (especially in river-proximity alluvial zones near the Godavari), concrete grade (53-grade OPC/PPC), TMT steel grade (Fe-550D), and finishing specifications like vitrified tiles and teakwood doors. We provide itemized bills of materials with transparent milestone installments.',
    },
    {
      question: 'What municipal building permissions and approvals are needed in Rajahmundry?',
      answer: 'Residential and commercial projects in Rajahmundry require municipal building plan approvals, land title verification, and setback clearances compliant with Andhra Pradesh municipal norms. MK Constructions assists homeowners with architectural layouts and technical structural drawings before excavation commences.',
    },
    {
      question: 'Does MK Constructions handle complete turnkey projects from foundation to interior handover?',
      answer: 'Yes. We manage turnkey civil construction from initial ground excavation, column footings, and RCC roof slabs, through solid red brick masonry, electrical/plumbing conduits, modular kitchens, and final Gruhapravesam cleaning.',
    },
    {
      question: 'How does Gedala Laxman Rao ensure structural safety and crack prevention on site?',
      answer: 'Contractor Gedala Laxman Rao personally oversees steel rebar tying, concrete vibrator compaction, and strictly enforces continuous 21-day water ponding curing for all RCC slabs. We exclusively use tested branded materials and kiln-fired solid red bricks.',
    },
    {
      question: 'Can clients request custom Vastu-aligned adjustments to their architectural plans?',
      answer: 'Yes. Every project is planned according to traditional Indian Vastu Shastra principles—including main entrance orientation, Agneya (southeast) kitchen positioning, and Nairuthi (southwest) master bedroom locations—balanced with modern ventilation.',
    },
  ];

  const servicesPageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'MK Constructions Services in Rajahmundry',
        itemListElement: SITE_CONFIG.services.map((srv, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: srv.title,
          url: `https://mkconstructionsrajahmundry.com/services/${srv.slug}`,
          description: srv.shortDesc,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: servicesFaqs.map((faq) => ({
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
        ],
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Construction Services in Rajahmundry | MK Constructions"
        description="Explore turnkey house construction, commercial complexes, structural remodeling & interior works in Rajahmundry. Honest pricing & 10+ years contractor expertise."
        canonicalPath="/services"
        schema={servicesPageSchema}
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#070D16] via-[#0B1320] to-[#0F1D33] text-white pt-36 pb-20 border-b border-[#E5A93C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
            {t('Expertise & Capabilities', 'మా సేవా విభాగాలు')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white mt-2 max-w-3xl mx-auto">
            {t(
              'Civil & Architectural Construction Services in Rajahmundry',
              'రాజమండ్రిలో సివిల్ & ఆర్కిటెక్చరల్ నిర్మాణ సేవలు'
            )}
          </h1>
          <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t(
              'Delivering structurally certified homes, modern commercial complexes, and bespoke interior finishes across East Godavari with direct supervision by Gedala Laxman Rao.',
              'తూర్పు గోదావరి జిల్లా వ్యాప్తంగా నాణ్యమైన ఇళ్లు మరియు వాణిజ్య భవనాల నిర్మాణం.'
            )}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SITE_CONFIG.services.map((service, index) => {
            const isEven = index % 2 === 1;
            const primaryImg = SITE_IMAGES.find((img) => img.slug === service.relatedImageSlugs[0]) || SITE_IMAGES[0];
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-3xl shadow-lg border border-stone-200"
              >
                {/* Image Col */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-stone-200">
                    <img
                      src={primaryImg.src}
                      srcSet={primaryImg.srcSet}
                      alt={primaryImg.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B1320]/90 text-[#E5A93C] text-xs font-bold backdrop-blur-sm border border-[#E5A93C]/30">
                      0{index + 1} · {service.title}
                    </div>
                  </div>
                </div>

                {/* Content Col */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : ''} space-y-4`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                    {service.tagline}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-display text-[#0B1320]">
                    {t(service.title, service.teluguTitle)}
                  </h2>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                    {t(service.shortDesc, service.teluguDesc)}
                  </p>

                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                      Key Highlights:
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-[#0B1320] bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] hover:brightness-110 transition-all shadow-md"
                    >
                      <span>{t('Full Service Details & FAQs', 'పూర్తి వివరాలు & సమాధానాలు')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services FAQ Section with Accordion */}
      <section className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#D97706]" />
              <span>{t('Construction FAQs', 'నిర్మాణ ప్రశ్నలు & సమాధానాలు')}</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-[#0B1320] mt-2">
              {t(
                'Frequently Asked Questions on Construction in Rajahmundry',
                'రాజమండ్రిలో నిర్మాణ పనుల గురించి సందేహాలు'
              )}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              Common inquiries regarding costs, municipal approvals, materials, and contractor oversight.
            </p>
          </div>

          <div className="space-y-4">
            {servicesFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0B1320] hover:text-[#D97706] transition-colors"
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
                    <div className="px-6 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-20 bg-[#F8FAFC] border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
};
