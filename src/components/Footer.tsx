import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070D16] text-stone-300 border-t border-[#E5A93C]/20 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Founder */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src="/images/logo-circle.png"
                alt="MK Constructions Logo"
                className="w-12 h-12 rounded-full object-cover shrink-0 drop-shadow-[0_2px_12px_rgba(229,169,60,0.45)] ring-2 ring-[#E5A93C]/40 group-hover:scale-105 transition-transform"
              />
              <span className="font-display text-2xl font-black text-white tracking-tight">
                MK <span className="text-[#E5A93C]">Constructions</span>
              </span>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed">
              {t(
                'Premier civil contracting & turnkey house construction firm in Rajahmundry led by Gedala Laxman Rao with 10+ years of proven hands-on field experience and 35+ skilled permanent workers.',
                'రాజమండ్రిలో బలమైన మరియు సురక్షితమైన ఇళ్ల నిర్మాణం. కాంట్రాక్టర్ గెడల లక్ష్మణరావు గారి 10+ ఏళ్ల ప్రత్యక్ష అనుభవం & 35+ నిపుణులైన కార్మికులతో.'
              )}
            </p>
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-[#E5A93C] font-bold">
                {t('Contractor & Founder', 'వ్యవస్థాపకుడు & కాంట్రాక్టర్')}
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                {SITE_CONFIG.founder.name}
              </div>
              <div className="text-xs text-stone-400">
                {SITE_CONFIG.founder.experienceText} · 35+ Mestries & Workers
              </div>
            </div>
          </div>

          {/* Column 2: Services Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              {t('Construction Services', 'నిర్మాణ సేవలు')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.services.map((srv) => (
                <li key={srv.slug}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="hover:text-[#E5A93C] transition-colors inline-flex items-center gap-1 group text-stone-300"
                  >
                    <span>{srv.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#E5A93C]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Guides */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              {t('Company & Resources', 'కంపెనీ & సమాచారం')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/cost-estimator" className="hover:text-[#E5A93C] transition-colors font-semibold text-[#E5A93C]">
                  {t('House Cost Estimator', 'గృహ నిర్మాణ ఖర్చు అంచనా')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#E5A93C] transition-colors">
                  {t('About Gedala Laxman Rao & Team', 'మా గురించి & వర్కర్స్')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#E5A93C] transition-colors">
                  {t('Completed & Active Projects', 'ప్రాజెక్ట్‌లు')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#E5A93C] transition-colors">
                  {t('Construction Guides & Costs', 'నిర్మాణ గైడ్లు')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E5A93C] transition-colors">
                  {t('Office Location & Free Site Visit', 'ఆఫీస్ అడ్రస్ & సైట్ విజిట్')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#E5A93C] transition-colors text-xs text-stone-400">
                  {t('Privacy Policy', 'ప్రైవసీ పాలసీ')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Exact Office Location */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              {t('Office & Contact', 'ఆఫీస్ & సంప్రదించండి')}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">
                    {SITE_CONFIG.location.address}
                  </div>
                  <a
                    href={SITE_CONFIG.location.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#E5A93C] hover:underline mt-1 font-semibold"
                  >
                    <span>Get Directions from Your Location</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${SITE_CONFIG.contact.primaryPhoneRaw}`}
                    className="hover:text-[#E5A93C] transition-colors text-white font-semibold"
                  >
                    {SITE_CONFIG.contact.primaryPhone}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.contact.secondaryPhoneRaw}`}
                    className="hover:text-[#E5A93C] transition-colors text-stone-400 text-xs"
                  >
                    {SITE_CONFIG.contact.secondaryPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-[#E5A93C] transition-colors text-stone-300 break-all text-xs"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-xs text-stone-400">
                <Clock className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Natural SEO Local Trust Tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {currentYear} {SITE_CONFIG.name}. All rights reserved. Handcrafted for homeowner excellence in Rajahmundry.
          </p>
          <div className="flex items-center gap-2 text-stone-400">
            <span>Rajahmundry</span>
            <span>·</span>
            <span>East Godavari</span>
            <span>·</span>
            <span>Andhra Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
