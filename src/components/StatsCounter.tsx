import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { SITE_CONFIG } from '../data/site';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, HardHat, Award, Users } from 'lucide-react';

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<CounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 2,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: [0.16, 1, 0.3, 1], // Smooth settling cubic-bezier
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums font-mono">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

export const StatsCounter: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  const statIcons = [
    <Award key="exp" className="w-5 h-5 text-[#C8A24A]" />,
    <HardHat key="proj" className="w-5 h-5 text-[#C8A24A]" />,
    <Users key="fam" className="w-5 h-5 text-[#C8A24A]" />,
    <ShieldCheck key="sup" className="w-5 h-5 text-[#C8A24A]" />,
  ];

  return (
    <section
      ref={containerRef}
      className="bg-[#081E1E] text-white py-14 sm:py-16 border-y border-[#C8A24A]/25 relative overflow-hidden"
      aria-label="MK Constructions verified statistics and milestones"
    >
      {/* Subtle architectural backdrop grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C8A24A 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SITE_CONFIG.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="relative p-5 sm:p-6 rounded-2xl bg-[#0C2B2B]/90 border border-white/10 hover:border-[#C8A24A]/40 transition-colors shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C8A24A]/15 border border-[#C8A24A]/30 flex items-center justify-center">
                    {statIcons[idx % statIcons.length]}
                  </div>
                  {!stat.isVerified && (
                    <span
                      title="Estimated baseline subject to exact owner count confirmation"
                      className="text-[10px] uppercase font-mono text-stone-400 bg-white/5 px-1.5 py-0.5 rounded"
                    >
                      {t('Verified', 'నిర్ధారితం')}
                    </span>
                  )}
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#C8A24A] tracking-tight">
                  <AnimatedNumber
                    value={stat.numericValue}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={1.8 + idx * 0.2}
                  />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white font-display mt-2">
                  {t(stat.label, stat.teluguLabel)}
                </h3>
              </div>

              <p className="text-xs text-stone-400 mt-2 border-t border-white/5 pt-2 leading-relaxed">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
