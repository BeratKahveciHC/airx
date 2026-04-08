'use client'

import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { useTranslations } from 'next-intl'
import { Link } from '../i18n/navigation'

function ArrowLeftIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5"/><path d="m11 5-7 7 7 7"/>
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
    </svg>
  )
}

export default function BlogPostPage({ post }) {
  const t = useTranslations()

  if (!post) return null

  const accentColor = post.categoryColor || '#003C75'

  return (
    <div style={{ background: '#fff' }}>
      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(160deg, #00122b 0%, #003C75 100%)',
        padding: '72px 24px 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -60, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(121,172,220,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/blog"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                fontSize: 13, fontWeight: 600,
                color: 'rgba(219,238,255,0.55)',
                textDecoration: 'none', marginBottom: 40,
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#79ACDC' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(219,238,255,0.55)' }}
            >
              <ArrowLeftIcon /> Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            style={{ marginBottom: 18 }}
          >
            <span style={{
              fontSize: 11, fontWeight: 800, letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: accentColor,
              background: `${accentColor}20`,
              border: `1px solid ${accentColor}35`,
              padding: '5px 14px', borderRadius: 100,
            }}>{post.category}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(26px, 4.5vw, 52px)',
              fontWeight: 900, color: '#fff',
              margin: '0 0 24px', lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.22 }}
            style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}
          >
            <span style={{ fontSize: 13, color: 'rgba(219,238,255,0.45)', fontWeight: 500 }}>{post.date}</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(219,238,255,0.2)', display: 'inline-block' }} />
            <span style={{ fontSize: 13, color: 'rgba(219,238,255,0.45)', fontWeight: 500 }}>{post.readTime} {t('blogPost.readSuffix')}</span>
          </motion.div>
        </div>

        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 56, background: '#fff', clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
      </section>

      {/* ── İçerik ── */}
      <section style={{ padding: '72px 24px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            {post.excerpt && (
              <div style={{
                fontSize: 18, color: '#475569', lineHeight: 1.75,
                fontStyle: 'italic',
                padding: '20px 24px',
                borderLeft: `4px solid ${accentColor}`,
                background: `${accentColor}08`,
                borderRadius: '0 12px 12px 0',
                marginBottom: 48,
              }}>
                {post.excerpt}
              </div>
            )}

            <div className="blog-content">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </motion.div>

          {/* Alt CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              marginTop: 72,
              padding: '40px',
              background: 'linear-gradient(135deg, #001f3f 0%, #003C75 100%)',
              borderRadius: 24,
              textAlign: 'center',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', right: -40, top: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(121,172,220,0.07)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.02em' }}>
                {t('blogPost.ctaTitle')}
              </h3>
              <p style={{ fontSize: 15, color: 'rgba(219,238,255,0.6)', lineHeight: 1.65, margin: '0 0 28px', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
                {t('blogPost.ctaSubtitle')}
              </p>
              <Link
                href="/iletisim#demo-form"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 28px', borderRadius: 10,
                  fontSize: 14, fontWeight: 700,
                  background: '#fff', color: '#003C75',
                  textDecoration: 'none',
                  transition: 'transform 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = '' }}
              >
                {t('blogPost.ctaBtn')} <ArrowRightIcon />
              </Link>
            </div>
          </motion.div>

          {/* Blog'a dön */}
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link
              href="/blog"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: 14, fontWeight: 600, color: '#64748b',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#003C75' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#64748b' }}
            >
              <ArrowLeftIcon /> {t('blogPost.backBtn')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Markdown Stil ── */}
      <style>{`
        .blog-content { font-size: 16px; line-height: 1.8; color: #334155; }
        .blog-content h2 {
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 800; color: #001f3f;
          margin: 52px 0 16px; line-height: 1.2;
          letter-spacing: -0.025em;
          padding-bottom: 12px;
          border-bottom: 1px solid #f1f5f9;
        }
        .blog-content h3 {
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 700; color: #0f172a;
          margin: 36px 0 12px; line-height: 1.3;
          letter-spacing: -0.015em;
        }
        .blog-content p { margin: 0 0 20px; }
        .blog-content strong { color: #0f172a; font-weight: 700; }
        .blog-content ul, .blog-content ol { margin: 0 0 20px; padding-left: 20px; }
        .blog-content li { margin-bottom: 8px; }
        .blog-content a { color: #003C75; text-decoration: underline; text-underline-offset: 3px; }
        .blog-content blockquote {
          margin: 32px 0; padding: 16px 24px;
          border-left: 4px solid #79ACDC;
          background: #f4f8fd;
          border-radius: 0 10px 10px 0;
          color: #475569; font-style: italic;
        }
        .blog-content code {
          background: #f1f5f9; color: #003C75;
          padding: 2px 7px; border-radius: 5px;
          font-size: 0.9em; font-family: monospace;
        }
        .blog-content pre {
          background: #0f172a; color: #e2e8f0;
          padding: 20px 24px; border-radius: 12px;
          overflow-x: auto; margin: 0 0 24px;
        }
        .blog-content pre code { background: none; color: inherit; padding: 0; }
        .blog-content table { width: 100%; border-collapse: collapse; margin: 0 0 24px; font-size: 14px; }
        .blog-content th { background: #003C75; color: #fff; padding: 10px 16px; text-align: left; font-weight: 700; font-size: 13px; }
        .blog-content td { padding: 10px 16px; border-bottom: 1px solid #f1f5f9; color: #475569; }
        .blog-content tr:hover td { background: #f8fafd; }
        .blog-content hr { border: none; border-top: 1px solid #e8f0f9; margin: 40px 0; }
        .blog-content em { color: #64748b; }
        @media (max-width: 640px) {
          .blog-content table { display: block; overflow-x: auto; white-space: nowrap; }
        }
      `}</style>
    </div>
  )
}
