import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../data/site';
import { SEOHead } from '../components/SEOHead';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | MK Constructions Rajahmundry"
        description="Privacy policy and data transparency statement of MK Constructions, Rajahmundry."
        canonicalPath="/privacy"
      />

      <section className="bg-[#0B1320] text-white pt-36 pb-16 border-b border-[#E5A93C]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-black font-display text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-stone-300 text-sm">
            Last Updated: October 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-200 space-y-6 text-sm text-stone-700 leading-relaxed">
            <h2 className="text-xl font-bold font-display text-[#0B1320]">
              1. Our Commitment to Your Privacy
            </h2>
            <p>
              MK Constructions respects the personal information you share with us. We only collect details that you voluntarily submit through our contact forms, phone calls, or WhatsApp messages (such as your name, contact phone number, and construction plot details).
            </p>

            <h2 className="text-xl font-bold font-display text-[#0B1320]">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used solely for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Communicating with you regarding your construction inquiries or site visits in Rajahmundry.</li>
              <li>Preparing accurate architectural and structural cost estimates.</li>
              <li>Direct coordination between homeowner and contractor Gedala Laxman Rao.</li>
            </ul>

            <h2 className="text-xl font-bold font-display text-[#0B1320]">
              3. No Data Selling or Unsolicited Marketing
            </h2>
            <p>
              We do not sell, rent, or distribute your phone number or contact records to any third-party marketing brokers or advertisers. All conversations remain confidential.
            </p>

            <h2 className="text-xl font-bold font-display text-[#0B1320]">
              4. Contact for Inquiries
            </h2>
            <p>
              If you have any questions about this privacy statement, you can reach out directly via:
              <br />
              Email: <strong>{SITE_CONFIG.contact.email}</strong>
              <br />
              Phone: <strong>{SITE_CONFIG.contact.primaryPhone}</strong>
              <br />
              Office: <strong>{SITE_CONFIG.location.address}</strong>
            </p>

            <div className="pt-6 border-t border-stone-200">
              <Link to="/" className="text-[#D97706] font-bold hover:underline">
                ← Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
