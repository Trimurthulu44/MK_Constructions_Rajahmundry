import React, { useState } from 'react';
import { Send, MessageCircle, Mail, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { useLanguage } from '../context/LanguageContext';

export const ContactForm: React.FC<{ defaultService?: string }> = ({ defaultService }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: defaultService || 'House Construction',
    locationDetails: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = t('Please enter your full name', 'దయచేసి మీ పేరు నమోదు చేయండి');
    }
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!phoneClean) {
      errs.phone = t('Please enter your phone number', 'దయచేసి మీ ఫోన్ నంబర్ నమోదు చేయండి');
    } else if (!/^[0-9+]{10,13}$/.test(phoneClean)) {
      errs.phone = t('Please enter a valid 10-digit mobile number', 'సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి');
    }
    return errs;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const text = encodeURIComponent(
      `Hello MK Constructions (Gedala Laxman Rao garu),\n\n` +
      `I would like to inquire about construction services in Rajahmundry.\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Service: ${formData.projectType}\n` +
      `• Plot / Area: ${formData.locationDetails || 'Rajahmundry'}\n` +
      `• Details: ${formData.message || 'Please contact me for site visit/estimate.'}`
    );

    const waUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleMailto = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const subject = encodeURIComponent(`Construction Enquiry - ${formData.name} (${formData.projectType})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.projectType}\n` +
      `Location: ${formData.locationDetails}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:${SITE_CONFIG.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-200">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-black font-display text-[#0B1320]">
          {t('Request a Free Site Visit & Consultation', 'ఉచిత సైట్ సందర్శన & సంప్రదింపులు')}
        </h3>
        <p className="text-sm text-stone-600 mt-1">
          {t(
            'Direct on-site inspection and itemized estimate by contractor Gedala Laxman Rao.',
            'కాంట్రాక్టర్ గెడల లక్ష్మణరావు గారి ద్వారా నేరుగా సైట్ పరిశీలన మరియు అంచనా వివరాలు.'
          )}
        </p>
      </div>

      {submitted && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-bold">
              {t('Enquiry Initialized!', 'మీ సందేశం సిద్ధమైంది!')}
            </p>
            <p className="text-xs mt-0.5">
              {t(
                'WhatsApp or your mail client has been opened. Contractor Gedala Laxman Rao will respond shortly.',
                'వాట్సాప్ లేదా ఈమెయిల్ ఓపెన్ అయింది. త్వరలో గెడల లక్ష్మణరావు గారు మిమ్మల్ని సంప్రదిస్తారు.'
              )}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
            {t('Your Name *', 'మీ పేరు *')}
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Ramesh Varma"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-stone-900 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E5A93C] transition-all ${
              errors.name ? 'border-red-500' : 'border-stone-300'
            }`}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
            {t('Mobile Phone Number *', 'మొబైల్ ఫోన్ నంబర్ *')}
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 93814 40177"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-stone-900 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E5A93C] transition-all ${
              errors.phone ? 'border-red-500' : 'border-stone-300'
            }`}
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
            {t('Required Service', 'కావలసిన సేవ')}
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
          >
            <option value="House Construction">House Construction (ఇళ్ల నిర్మాణం)</option>
            <option value="Commercial Buildings">Commercial Buildings (వాణిజ్య భవనాలు)</option>
            <option value="Renovation & Remodeling">Renovation & Remodeling (మరమ్మతులు)</option>
            <option value="Interior & Exterior Works">Interior & Exterior Works (ఇంటీరియర్ & ఎక్స్‌టీరియర్)</option>
          </select>
        </div>

        {/* Plot Area / Locality in Rajahmundry */}
        <div>
          <label htmlFor="locationDetails" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
            {t('Plot Area / Locality in Rajahmundry', 'స్థలం / ప్రాంతం (రాజమండ్రి)')}
          </label>
          <input
            id="locationDetails"
            type="text"
            value={formData.locationDetails}
            onChange={(e) => setFormData({ ...formData, locationDetails: e.target.value })}
            placeholder="e.g. Rajahmundry, 150 sq yards"
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
            {t('Project Requirements / Message', 'ప్రాజెక్ట్ వివరాలు / సందేశం')}
          </label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your requirements, floor plan ideas, or timeline..."
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
          ></textarea>
        </div>

        {/* Dual Actions: WhatsApp (Primary) and Email Fallback */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('Send via WhatsApp', 'వాట్సాప్ ద్వారా పంపండి')}</span>
          </button>

          <button
            type="button"
            onClick={handleMailto}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#0B1320] bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>{t('Email', 'ఈమెయిల్')}</span>
          </button>
        </div>

        <p className="text-xs text-stone-500 text-center pt-1">
          {t(
            'We value your privacy. No spam. You will speak directly with Gedala Laxman Rao.',
            'మీ వివరాలు సురక్షితం. నేరుగా గెడల లక్ష్మణరావు గారితో మాట్లాడవచ్చు.'
          )}
        </p>
      </form>
    </div>
  );
};
