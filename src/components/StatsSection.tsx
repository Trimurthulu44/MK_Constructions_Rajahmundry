import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { Award, Briefcase, HeartHandshake, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { useLanguage } from '../context/LanguageContext';

interface StatCounterItemProps {
  numericValue: number;
  suffix?: string;
  prefix?: string;
  label: string;
  teluguLabel: string;
  subtext: string;
  icon: React.ReactNode;
  delay?: number;
}

const StatCounterItem: React.FC<StatCounterItemProps> = ({
  numericValue,
  suffix = '+',
  prefix = '',
  label,
  teluguLabel,
  subtext,
  icon,
  delay = 0,
}) => {
  const { t } = useLanguage();
  const [displayValue, setDisplayValue] = useState(0);
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: '-40px' });

  useEffect(() => {
    // Respect accessibility settings
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(numericValue);
      return;
    }

    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2.0,
        ease: [0.16, 1, 0.3, 1], // Smooth deceleration curve
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay }}
      className="relative p-6 sm:p-7 rounded-2xl bg-[#0C2B2B] border border-white/10 hover:border-[#C8A24A]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
    >
      <div>
        {/* Icon & Category Kicker */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-[#C8A24A]/15 border border-[#C8A24A]/30 text-[#C8A24A] flex items-center justify-center group-hover:scale-105 transition-transform">
            {icon}
          </div>
          <span className="text-[11px] font-mono tracking-wider text-stone-400 uppercase">
            Rajahmundry
          </span>
        </div>

        {/* Animated Number Counter */}
        <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#C8A24A] tracking-tight tabular-nums font-mono">
          {prefix}
          {displayValue}
          {suffix}
        </div>

        {/* Metric Label */}
        <h3 className="text-base sm:text-lg font-bold text-white font-display mt-2 leading-snug">
          {t(label, teluguLabel)}
        </h3>
      </div>

      {/* Metric Context Subtitle */}
      <p className="text-xs text-stone-400 mt-3 pt-3 border-t border-white/10 leading-relaxed">
        {subtext}
      </p>
    </motion.div>
  );
};

export const StatsSection: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  // Key business metrics requested:
  // 1. 10+ Years Experience
  // 2. Projects Completed
  // 3. Satisfied Families
  // 4. 100% On-Site Supervision
  const statItems = [
    {
      numericValue: 10,
      suffix: '+',
      label: '10+ Years Experience',
      teluguLabel: '10+ సంవత్సరాల అనుభవం',
      subtext: 'Hands-on civil contracting experience in Rajahmundry',
      icon: <Award className="w-5 h-5 text-[#C8A24A]" />,
    },
    {
      numericValue: 45,
      suffix: '+',
      label: 'Projects Completed',
      teluguLabel: 'పూర్తయిన ప్రాజెక్ట్‌లు',
      subtext: 'Independent houses, duplex villas & commercial buildings',
      icon: <Briefcase className="w-5 h-5 text-[#C8A24A]" />,
    },
    {
      numericValue: 50,
      suffix: '+',
      label: 'Satisfied Families',
      teluguLabel: 'సంతృప్తి చెందిన కుటుంబాలు',
      subtext: 'Built to withstand generations across East Godavari',
      icon: <HeartHandshake className="w-5 h-5 text-[#C8A24A]" />,
    },
    {
      numericValue: 100,
      suffix: '%',
      label: 'On-Site Supervision',
      teluguLabel: 'ప్రత్యక్ష పర్యవేక్షణ',
      subtext: 'Direct daily oversight by founder Gedala Laxman Rao',
      icon: <ShieldCheck className="w-5 h-5 text-[#C8A24A]" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#081E1E] text-white py-16 sm:py-20 border-y border-[#C8A24A]/20 relative overflow-hidden"
      aria-label="MK Constructions verified achievements and statistics"
    >
      {/* Subtle architectural grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C8A24A 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#C8A24A]">
            {t('Proven Track Record', 'మా మైలురాళ్ళు')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-display text-white mt-2 text-balance">
            {t(
              'A Decade of Trusted Civil Construction in Rajahmundry',
              'రాజమండ్రిలో దశాబ్ద కాలపు నమ్మకమైన నిర్మాణం'
            )}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-stone-300">
            {t(
              'Delivering structural safety, tested materials, and punctual handover under direct contractor accountability.',
              'నాణ్యమైన పదార్థాలు మరియు సమయానికి పనులు పూర్తిచేయడం మా లక్ష్యం.'
            )}
          </p>
        </motion.div>

        {/* Responsive Grid: 1 col on xs, 2 cols on mobile/tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statItems.map((stat, idx) => (
            <StatCounterItem
              key={idx}
              numericValue={stat.numericValue}
              suffix={stat.suffix}
              label={stat.label}
              teluguLabel={stat.teluguLabel}
              subtext={stat.subtext}
              icon={stat.icon}
              delay={idx * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
