import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';

export const FloatingActions: React.FC = () => {
  return (
    <div
      className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 pointer-events-none"
      aria-label="Quick contact shortcuts"
    >
      {/* Call Button */}
      <a
        href={`tel:${SITE_CONFIG.contact.primaryPhoneRaw}`}
        className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#0B1320] text-[#E5A93C] hover:text-white hover:bg-[#1E293B] shadow-xl border border-[#E5A93C]/40 transition-transform hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#E5A93C]"
        aria-label={`Call Contractor Gedala Laxman Rao at ${SITE_CONFIG.contact.primaryPhone}`}
        title={`Call ${SITE_CONFIG.contact.primaryPhone}`}
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={SITE_CONFIG.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] shadow-2xl transition-transform hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-white border-2 border-white/30"
        aria-label="Chat with MK Constructions on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
