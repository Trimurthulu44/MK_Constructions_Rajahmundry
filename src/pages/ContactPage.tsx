import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="Contact MK Constructions Rajahmundry | Near Ramalayam, Annapurnammapeta"
        description="Get in touch with civil contractor Gedala Laxman Rao at MK Constructions. Office located Near Ramalayam, Annapurnammapeta, Rajahmundry. Call +91 93814 40177."
        canonicalPath="/contact"
      />

      {/* Header Banner */}
      <section className="bg-[#0B1320] text-white pt-36 pb-20 border-b border-[#E5A93C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
            {t('Direct Communication & Office Location', 'మమ్మల్ని సంప్రదించండి & కార్యాలయ చిరునామా')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white mt-2 max-w-3xl mx-auto">
            {t(
              'Get in Touch with MK Constructions',
              'ఎంకే కన్‌స్ట్రక్షన్స్‌తో సంప్రదింపులు'
            )}
          </h1>
          <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t(
              'Visit our office near Ramalayam in Annapurnammapeta, Rajahmundry, or schedule a free on-site consultation directly with contractor Gedala Laxman Rao.',
              'రాజమండ్రి అన్నపూర్ణమ్మపేట రామాలయం వద్ద మా కార్యాలయాన్ని సందర్శించండి లేదా నేరుగా కాంట్రాక్టర్ గారితో మీ సైట్ విజిట్ ప్లాన్ చేసుకోండి.'
            )}
          </p>
        </div>
      </section>

      {/* Main Grid: Details & Form */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Office Location Card with One-Click Directions */}
              <div className="bg-gradient-to-br from-[#0B1320] to-[#152338] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-[#E5A93C]/40 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#E5A93C] text-[#0B1320] flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#E5A93C] uppercase tracking-wider">
                      {t('Official Office Address', 'ప్రధాన కార్యాలయం చిరునామా')}
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-white mt-1 leading-snug">
                      Near Ramalayam, Annapurnammapeta
                    </h3>
                    <p className="text-xs text-stone-300 mt-1">
                      Rajahmundry, Andhra Pradesh - 533101
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={SITE_CONFIG.location.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] text-[#0B1320] font-black text-sm shadow-lg hover:brightness-110 transition-all"
                  >
                    <Navigation className="w-4 h-4 fill-current" />
                    <span>Get Directions From Your Location</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-[11px] text-stone-400 text-center mt-2">
                    Opens Google Maps with live turn-by-turn navigation
                  </p>
                </div>
              </div>

              {/* Phone Numbers Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1320] text-[#E5A93C] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1320] uppercase tracking-wider">
                      {t('Call Contractor Direct', 'నేరుగా కాల్ చేయండి')}
                    </h3>
                    <p className="text-xs text-stone-500">
                      Primary & secondary direct mobile lines
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={`tel:${SITE_CONFIG.contact.primaryPhoneRaw}`}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 hover:bg-[#E5A93C]/10 border border-stone-200 transition-colors group"
                  >
                    <div>
                      <div className="text-xs text-stone-500 font-medium">Primary Contractor Line</div>
                      <div className="text-base font-bold text-[#0B1320] group-hover:text-[#D97706]">
                        {SITE_CONFIG.contact.primaryPhone}
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#D97706] underline">Call Now</span>
                  </a>

                  <a
                    href={`tel:${SITE_CONFIG.contact.secondaryPhoneRaw}`}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 hover:bg-[#E5A93C]/10 border border-stone-200 transition-colors group"
                  >
                    <div>
                      <div className="text-xs text-stone-500 font-medium">Secondary Contact Line</div>
                      <div className="text-base font-bold text-[#0B1320] group-hover:text-[#D97706]">
                        {SITE_CONFIG.contact.secondaryPhone}
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#D97706] underline">Call Now</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-[#25D366]/10 rounded-2xl p-6 border border-[#25D366]/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1320]">
                      {t('Quick WhatsApp Chat', 'వాట్సాప్ సందేశం')}
                    </h3>
                    <p className="text-xs text-stone-600">
                      Send floor plans or photos for fast estimate
                    </p>
                  </div>
                </div>
                <a
                  href={SITE_CONFIG.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors shrink-0 shadow"
                >
                  Chat Now
                </a>
              </div>

              {/* Email & Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-stone-500 uppercase font-bold tracking-wider">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-sm font-bold text-[#0B1320] hover:underline break-all"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-stone-100">
                  <Clock className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-stone-500 uppercase font-bold tracking-wider">
                      Consultation & Site Visit Hours
                    </div>
                    <p className="text-xs font-semibold text-stone-700">
                      {SITE_CONFIG.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section for Rajahmundry */}
      <section className="bg-white py-16 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                {t('Location Map', 'స్థాన వివరాలు')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-[#0B1320] mt-1">
                Near Ramalayam, Annapurnammapeta, Rajahmundry
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Click the button to get immediate GPS directions from your current location
              </p>
            </div>
            <a
              href={SITE_CONFIG.location.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B1320] text-[#E5A93C] hover:bg-[#152338] transition-colors text-xs font-bold border border-[#E5A93C]/40 shadow-sm whitespace-nowrap self-start sm:self-auto"
            >
              <Navigation className="w-3.5 h-3.5 fill-current" />
              <span>Get Directions From Your Location</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg border border-stone-300 h-96 relative bg-stone-100">
            <iframe
              title="MK Constructions Annapurnammapeta Rajahmundry Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122247.50283259837!2d81.72477508496417!3d17.00056157976935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3f721526659%3A0xe54e60bc4b92c431!2sRajahmundry%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
