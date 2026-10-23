import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Clock, User, Calendar, CheckCircle2, Phone, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { FOUNDER_IMAGE } from '../data/images';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const post = SITE_CONFIG.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MK Constructions',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mkconstructionsrajahmundry.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | MK Constructions Rajahmundry`}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        schema={articleSchema}
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#070D16] via-[#0B1320] to-[#0F1D33] text-white pt-36 pb-20 border-b border-[#E5A93C]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-300 mb-6">
            <Link to="/" className="hover:text-[#E5A93C]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <Link to="/blog" className="hover:text-[#E5A93C]">Guides</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#E5A93C] font-semibold">{post.category}</span>
          </nav>

          <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mt-2 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300 mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#E5A93C]" />
              <span className="font-semibold">{post.author}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#E5A93C]" />
              <span>{post.date}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#E5A93C]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-stone-200">
            {/* Key Takeaways Box */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 mb-10">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#D97706] mb-3">
                Key Takeaways for Rajahmundry Homeowners:
              </h2>
              <ul className="space-y-2">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-sm sm:text-base text-stone-800 leading-relaxed">
              {post.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Author Footer Box */}
            <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-6 bg-stone-50 p-6 rounded-2xl">
              <img
                src={FOUNDER_IMAGE.src}
                srcSet={FOUNDER_IMAGE.srcSet}
                alt={FOUNDER_IMAGE.alt}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#E5A93C] shadow-sm"
              />
              <div className="text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                  About the Author
                </div>
                <h3 className="text-base font-bold text-[#0B1320] font-display">
                  {SITE_CONFIG.founder.name}
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Founder & civil contractor at MK Constructions with 10+ years of active field experience in Rajahmundry.
                </p>
              </div>
            </div>

            {/* Back Button & CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-100">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-[#0B1320]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to all guides</span>
              </Link>
              <a
                href={`tel:${SITE_CONFIG.contact.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#0B1320] bg-gradient-to-r from-[#E5A93C] to-[#F59E0B] hover:brightness-110 shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Discuss Your Project with Laxman Rao</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
