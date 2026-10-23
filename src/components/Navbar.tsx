import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: t('Home', 'హోమ్'), path: '/' },
    { label: t('Services', 'సేవలు'), path: '/services' },
    { label: t('Projects', 'ప్రాజెక్ట్‌లు'), path: '/projects' },
    { label: t('Cost Estimator', 'ఖర్చు అంచనా'), path: '/cost-estimator' },
    { label: t('About', 'మా గురించి'), path: '/about' },
    { label: t('Contact', 'సంప్రదించండి'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1320]/95 backdrop-blur-md shadow-2xl border-b border-[#E5A93C]/20 py-3'
            : 'bg-[#0B1320]/85 backdrop-blur-sm border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Single text element in display face with official circle logo) */}
            <Link
              to="/"
              className="group flex items-center gap-3 text-xl sm:text-2xl font-black tracking-tight text-white whitespace-nowrap shrink-0 font-display"
              aria-label="MK Constructions Home"
            >
              <img
                src="/images/logo-circle.png"
                alt="MK Constructions Official Logo"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover shrink-0 drop-shadow-[0_2px_12px_rgba(229,169,60,0.5)] group-hover:scale-105 transition-transform ring-2 ring-[#E5A93C]/40"
              />
              <span className="flex items-center gap-1.5">
                <span>MK</span>
                <span className="text-[#E5A93C]">Constructions</span>
              </span>
            </Link>

            {/* Zone 2: Responsive Clean Nav Links */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs lg:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                    isActive(link.path)
                      ? 'text-[#E5A93C] border-[#E5A93C]'
                      : 'text-stone-300 border-transparent hover:text-white hover:border-[#E5A93C]/40'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Zone 3: Language Switcher & Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Language Switcher Button */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded border border-[#E5A93C]/40 text-stone-200 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
                aria-label={`Switch language to ${lang === 'en' ? 'Telugu' : 'English'}`}
                title={`Switch language to ${lang === 'en' ? 'Telugu' : 'English'}`}
              >
                <Globe className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
              </button>

              {/* Primary Action Button */}
              <a
                href={`tel:${SITE_CONFIG.contact.primaryPhoneRaw}`}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-bold text-[#0B1320] bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] hover:brightness-110 transition-all rounded shadow-md whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4" />
                <span>{t('Call Contractor', 'కాల్ చేయండి')}</span>
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded text-stone-200 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0B1320] text-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#E5A93C]/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/images/logo-circle.png"
                    alt="MK Constructions Logo"
                    className="w-10 h-10 rounded-full object-cover shrink-0 drop-shadow-[0_2px_8px_rgba(229,169,60,0.4)] ring-2 ring-[#E5A93C]/40"
                  />
                  <span className="font-display font-bold text-lg text-[#E5A93C]">
                    MK Constructions
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded text-stone-300 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded text-base font-semibold transition-colors ${
                      isActive(link.path)
                        ? 'bg-[#152338] text-[#E5A93C]'
                        : 'text-stone-200 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded text-base font-semibold text-stone-200 hover:bg-white/5 hover:text-white"
                >
                  {t('Articles & Guides', 'బ్లాగ్ & సమాచారం')}
                </Link>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href={`tel:${SITE_CONFIG.contact.primaryPhoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-[#0B1320] bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] rounded shadow text-center"
              >
                <Phone className="w-4 h-4" />
                <span>+91 93814 40177</span>
              </a>
              <a
                href={SITE_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded text-center"
              >
                <span>WhatsApp Enquiry</span>
              </a>
              <p className="text-xs text-stone-400 text-center mt-2">
                Near Ramalayam, Annapurnammapeta, Rajahmundry
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
