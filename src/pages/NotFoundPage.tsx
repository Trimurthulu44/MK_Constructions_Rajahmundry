import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { SEOHead } from '../components/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | MK Constructions Rajahmundry"
        description="The requested page could not be found. Navigate back to MK Constructions homepage or contact us directly."
      />

      <section className="min-h-[80vh] flex items-center justify-center bg-[#F8FAFC] px-4 py-32">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-stone-200 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#E5A93C]/20 text-[#D97706] flex items-center justify-center mx-auto text-2xl font-black font-display border border-[#E5A93C]/40">
            404
          </div>

          <div>
            <h1 className="text-2xl font-black font-display text-[#0B1320]">
              Page Not Found
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              The page you are looking for may have moved or doesn't exist. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[#0B1320] bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] hover:brightness-110 transition-all shadow"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-[#0B1320] bg-stone-100 hover:bg-stone-200 transition-colors"
            >
              <span>View Projects Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${SITE_CONFIG.contact.primaryPhoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-stone-600 hover:text-[#0B1320]"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>Call Contractor: {SITE_CONFIG.contact.primaryPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
