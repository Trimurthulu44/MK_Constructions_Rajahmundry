import React, { useState } from 'react';
import { Calculator, ShieldCheck, ChevronDown, CheckCircle2, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { CostEstimator } from '../components/CostEstimator';
import { ContactForm } from '../components/ContactForm';
import { Link } from 'react-router-dom';

export const CostEstimatorPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const estimatorFaqs = [
    {
      question: 'What is the current average construction cost per sq ft in Rajahmundry (2026)?',
      answer: 'In Rajahmundry, standard quality turnkey residential construction typically ranges between ₹1,850 and ₹2,150 per sq. ft. of built-up area. This includes high-grade 53 OPC/PPC cement, primary Fe-550D TMT steel, kiln red bricks, vitrified flooring, teakwood main door, and CPVC plumbing. Luxury villas with full teakwood, large-format glazed tiles, and false ceilings range between ₹2,250 and ₹2,600+ per sq. ft.'
    },
    {
      question: 'Does the distance from Godavari river affect foundation cost?',
      answer: 'Yes. Areas close to the Godavari river bank or low-lying agricultural convert layouts (e.g., portions of Katheru, Kovvur bank, or alluvial pockets) often feature sandy or black cotton soils that require deeper column footings, continuous plinth tie-beams, or under-reamed piles. Contractor Gedala Laxman Rao conducts an initial on-site soil inspection to specify the exact substructure depth required.'
    },
    {
      question: 'Why does MK Constructions insist on Godavari Kiln-Fired Red Bricks over cheap blocks?',
      answer: 'Kiln-fired red clay bricks from local Godavari river kilns offer superior thermal insulation in Andhra Pradesh\'s hot summer climate, prevent hairline plaster shrinkage cracks, and provide superior structural load bearing. They keep indoor room temperatures 3°C to 5°C cooler compared to fly ash blocks.'
    },
    {
      question: 'How are payments structured with MK Constructions?',
      answer: 'We operate on a 100% milestone-based schedule. You never pay massive sums in advance. Payments are split across 7 clear structural milestones (Foundation, Plinth, Slabs, Brickwork, Plastering, Flooring/Finishes, and Handover). Each stage is inspected by you and verified by Gedala Laxman Rao before the next milestone installment is due.'
    },
    {
      question: 'Are municipal building permissions and water/electricity connections included?',
      answer: 'We assist homeowners with architectural municipal layout blueprints, structural drawings, and engineer stability certificates required for Rajahmundry Municipal Corporation (RMC) permissions. Government statutory fees are paid directly to the corporation, while all civil and physical connection works on site are managed by MK Constructions.'
    }
  ];

  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'House Construction Cost Estimator in Rajahmundry',
        description: 'Calculate instant construction costs for residential houses and duplex villas in Rajahmundry.',
        url: 'https://mkconstructionsrajahmundry.com/cost-estimator',
      },
      {
        '@type': 'FAQPage',
        mainEntity: estimatorFaqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
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
            name: 'Cost Estimator',
            item: 'https://mkconstructionsrajahmundry.com/cost-estimator',
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="House Construction Cost Estimator Rajahmundry | MK Constructions"
        description="Calculate house construction cost in Rajahmundry. Built-up area calculator, per sq ft rates (₹1,750 - ₹2,450), stage-wise payment schedule by Gedala Laxman Rao."
        canonicalPath="/cost-estimator"
        schema={pageSchema}
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#070D16] via-[#0B1320] to-[#0F1D33] text-white pt-36 pb-20 border-b border-[#E5A93C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
            {t('Transparent Pricing Tool', 'పారదర్శక వ్యయ అంచనా')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white mt-2 max-w-4xl mx-auto">
            {t(
              'House Construction Cost Estimator in Rajahmundry',
              'రాజమండ్రిలో గృహ నిర్మాణ ఖర్చు అంచనా'
            )}
          </h1>
          <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t(
              'Plan your home budget with complete confidence. Choose your plot size, floors, and specifications to see realistic per-square-foot costs and milestone payment schedules.',
              'ఎటువంటి దాపరికం లేకుండా నిజమైన సామాగ్రి ధరలతో మీ ఇంటి నిర్మాణ వ్యయాన్ని వెంటనే లెక్కించండి.'
            )}
          </p>
        </div>
      </section>

      {/* Main Interactive Tool Section */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CostEstimator />
        </div>
      </section>

      {/* Quality Material Standard Section */}
      <section className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              {t('Uncompromising Standards', 'మా నాణ్యతా ప్రమాణాలు')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-[#0B1320] mt-2">
              {t('What Makes MK Constructions Different in Rajahmundry?', 'ఇతర కాంట్రాక్టర్ల కన్నా మా ప్రత్యేకత ఏమిటి?')}
            </h2>
            <p className="mt-3 text-sm text-stone-600">
              {t(
                'We never sacrifice structural longevity for cheap margins. Here is what goes into every square foot we build.',
                'లాభాల కోసం నాణ్యతను తగ్గించం. ప్రతి చదరపు అడుగు పటిష్టంగా ఉండేలా చూస్తాము.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0B1320] text-[#E5A93C] flex items-center justify-center font-black">
                53
              </div>
              <h3 className="text-lg font-bold font-display text-[#0B1320]">
                UltraTech / Nagarjuna 53-Grade Cement
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We strictly use certified 53-grade high-early-strength cement for all RCC column footings, plinth beams, and roof slabs. Zero compromised fly ash filler cements used in primary structural framing.
              </p>
            </div>

            <div className="bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0B1320] text-[#E5A93C] flex items-center justify-center font-black">
                550
              </div>
              <h3 className="text-lg font-bold font-display text-[#0B1320]">
                Tata Tiscon / Vizag Steel Fe-550D
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Earthquake-resistant 'D' grade steel provides high elongation and ductileness, guarding your home against seismic tremors and concrete micro-cracking over decades.
              </p>
            </div>

            <div className="bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0B1320] text-[#E5A93C] flex items-center justify-center font-black">
                21
              </div>
              <h3 className="text-lg font-bold font-display text-[#0B1320]">
                Strict 21-Day Slab Water Curing
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We construct continuous cement mortar bunds on newly cast roof slabs for 21 days of continuous pond water immersion, unlocking 100% designed concrete compressive strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-[#F8FAFC] border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              {t('Pricing Clarifications', 'ఖర్చుల వివరాలు & సందేహాలు')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-[#0B1320] mt-2">
              {t('Frequently Asked Questions on House Costs', 'ఇంటి నిర్మాణ ఖర్చులపై తరచుగా అడిగే ప్రశ్నలు')}
            </h2>
          </div>

          <div className="space-y-4">
            {estimatorFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-base text-[#0B1320] hover:text-[#D97706] transition-colors"
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

      {/* Bottom CTA / Contact Form */}
      <section className="py-20 bg-[#0B1320] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
                {t('Free On-Site Inspection', 'ఉచిత స్థల పరిశీలన')}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-display text-white text-balance">
                {t(
                  'Get a Precise, Blueprint-Based Estimate for Your Plot',
                  'మీ ప్లాట్ కోసం ఖచ్చితమైన అంచనా పొందండి'
                )}
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {t(
                  'Online calculators give you a solid baseline, but nothing replaces an experienced contractor walking your plot, testing soil slope, and checking municipal approach roads.',
                  'కాంట్రాక్టర్ గెడల లక్ష్మణరావు గారు స్వయంగా మీ సైట్‌ను పరిశీలించి వివరణాత్మకమైన ఎస్టిమేట్ అందిస్తారు.'
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
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-400">Instant WhatsApp Discussion</div>
                    <a
                      href={SITE_CONFIG.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-[#25D366] hover:underline"
                    >
                      Message Gedala Laxman Rao
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ContactForm defaultService="House Construction" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
