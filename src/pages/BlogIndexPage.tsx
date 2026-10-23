import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Calendar, BookOpen } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';

export const BlogIndexPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="Construction Guides & Cost Advice in Rajahmundry | MK Constructions"
        description="Helpful, honest home building advice for Rajahmundry. Read about construction cost factors, contractor selection tips, and realistic project timelines."
        canonicalPath="/blog"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#070D16] via-[#0B1320] to-[#0F1D33] text-white pt-36 pb-20 border-b border-[#E5A93C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
            {t('Knowledge & Insights', 'నిర్మాణ గైడ్లు')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white mt-2 max-w-3xl mx-auto">
            {t(
              'Homeowner Construction Guides for Rajahmundry',
              'ఇంటి నిర్మాణ గైడ్లు & సలహాలు'
            )}
          </h1>
          <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t(
              'Practical, honest guidance on construction costs, material selection, and builder choices in Andhra Pradesh without inflated numbers.',
              'రాజమండ్రిలో ఇల్లు నిర్మించుకునే వారికి ఉపయోగకరమైన వాస్తవ సమాచారం.'
            )}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_CONFIG.blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-xl hover:border-[#E5A93C] transition-all group"
              >
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#D97706] font-bold uppercase tracking-wider">
                    <span>{post.category}</span>
                    <span className="flex items-center gap-1 text-stone-400 font-normal lowercase">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold font-display text-[#0B1320] group-hover:text-[#D97706] transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="pt-2">
                    <div className="text-[11px] font-bold uppercase text-stone-400 mb-1">
                      Key Takeaways:
                    </div>
                    <ul className="space-y-1 text-xs text-stone-700">
                      {post.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#E5A93C] font-bold">·</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 border-t border-stone-100 flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <User className="w-3.5 h-3.5 text-stone-400" />
                    <span>{post.author}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0B1320] group-hover:text-[#D97706]"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5A93C]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
