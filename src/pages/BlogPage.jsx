import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/* ══════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════ */
export default function BlogPage() {
  const { t } = useTranslation()

  const POSTS = [
    {
      slug: 'kvkk-ve-ik-yazilimlari',
      categoryKey: 'Mevzuat',
      category: t('blog.cat_Mevzuat'),
      categoryColor: '#0d9488',
      title: t('blog.posts.kvkk.title'),
      excerpt: t('blog.posts.kvkk.excerpt'),
      date: t('blog.posts.kvkk.date'),
      readTime: t('blog.posts.kvkk.readTime'),
      featured: true,
    },
    {
      slug: 'ik-yazilimi-secerken-dikkat',
      categoryKey: 'Rehber',
      category: t('blog.cat_Rehber'),
      categoryColor: '#7c3aed',
      title: t('blog.posts.ik7.title'),
      excerpt: t('blog.posts.ik7.excerpt'),
      date: t('blog.posts.ik7.date'),
      readTime: t('blog.posts.ik7.readTime'),
      featured: false,
    },
    {
      slug: 'pdks-modern-yaklasim',
      categoryKey: 'PDKS',
      category: t('blog.cat_PDKS'),
      categoryColor: '#1d4ed8',
      title: t('blog.posts.pdksMobil.title'),
      excerpt: t('blog.posts.pdksMobil.excerpt'),
      date: t('blog.posts.pdksMobil.date'),
      readTime: t('blog.posts.pdksMobil.readTime'),
      featured: false,
    },
    {
      slug: 'ik-surecleri-otomasyonu',
      categoryKey: 'Verimlilik',
      category: t('blog.cat_Verimlilik'),
      categoryColor: '#dc2626',
      title: t('blog.posts.izin.title'),
      excerpt: t('blog.posts.izin.excerpt'),
      date: t('blog.posts.izin.date'),
      readTime: t('blog.posts.izin.readTime'),
      featured: false,
    },
    {
      slug: 'yemekhane-entegrasyonu',
      categoryKey: 'Modüller',
      category: t('blog.cat_Moduller'),
      categoryColor: '#ea7c1f',
      title: t('blog.posts.yemekhane.title'),
      excerpt: t('blog.posts.yemekhane.excerpt'),
      date: t('blog.posts.yemekhane.date'),
      readTime: t('blog.posts.yemekhane.readTime'),
      featured: false,
    },
    {
      slug: 'is-zekasi-ik-kararlari',
      categoryKey: 'Analitik',
      category: t('blog.cat_Analitik'),
      categoryColor: '#003C75',
      title: t('blog.posts.isZekasi.title'),
      excerpt: t('blog.posts.isZekasi.excerpt'),
      date: t('blog.posts.isZekasi.date'),
      readTime: t('blog.posts.isZekasi.readTime'),
      featured: false,
    },
  ]

  const CATEGORIES = [
    { key: 'Tümü',    label: t('blog.catAll') },
    { key: 'Mevzuat', label: t('blog.cat_Mevzuat') },
    { key: 'Rehber',  label: t('blog.cat_Rehber') },
    { key: 'PDKS',    label: t('blog.cat_PDKS') },
    { key: 'Verimlilik', label: t('blog.cat_Verimlilik') },
    { key: 'Modüller',   label: t('blog.cat_Moduller') },
    { key: 'Analitik',   label: t('blog.cat_Analitik') },
  ]

  const [active, setActive] = useState('Tümü')

  const featured = POSTS.find(p => p.featured)
  const rest = POSTS.filter(p => !p.featured && (active === 'Tümü' || p.categoryKey === active))

  return (
    <div style={{ background: '#fff' }}>

      {/* ══════════════════════
          HERO
      ══════════════════════ */}
      <section style={{
        background: 'linear-gradient(160deg, #00122b 0%, #003C75 100%)',
        padding: '96px 24px 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -100, right: -80, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(121,172,220,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: '20%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(121,172,220,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{
              fontSize: 'clamp(30px, 5vw, 58px)',
              fontWeight: 900, color: '#fff',
              margin: '0 0 20px', lineHeight: 1.08,
              letterSpacing: '-0.035em',
            }}
          >
            {t('blog.heroTitle')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            style={{
              fontSize: 17, color: 'rgba(219,238,255,0.6)',
              lineHeight: 1.7, maxWidth: 480, margin: '0 auto',
            }}
          >
            {t('blog.heroSubtitle')}
          </motion.p>
        </div>

        {/* Alt geçiş */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 56, background: '#fff', clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
      </section>

      {/* ══════════════════════
          ÖNE ÇIKAN — Editorial split
      ══════════════════════ */}
      {featured && (
        <section style={{ padding: '72px 24px 0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/blog/${featured.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  className="featured-card"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    borderRadius: 28,
                    overflow: 'hidden',
                    boxShadow: '0 8px 48px rgba(0,60,117,0.1)',
                    border: '1px solid rgba(0,60,117,0.08)',
                    transition: 'transform 0.22s, box-shadow 0.22s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 72px rgba(0,60,117,0.18)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 48px rgba(0,60,117,0.1)' }}
                >
                  {/* Sol — içerik */}
                  <div style={{ padding: 'clamp(36px, 5vw, 56px)', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
                        <span style={{
                          fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
                          color: '#fff', background: '#003C75',
                          padding: '4px 12px', borderRadius: 100,
                        }}>{t('blog.featuredBadge')}</span>
                        <span style={{
                          fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
                          color: featured.categoryColor,
                          background: `${featured.categoryColor}14`,
                          border: `1px solid ${featured.categoryColor}30`,
                          padding: '4px 12px', borderRadius: 100,
                        }}>{featured.category}</span>
                      </div>

                      <h2 style={{
                        fontSize: 'clamp(20px, 2.8vw, 34px)',
                        fontWeight: 800, color: '#001f3f',
                        margin: '0 0 18px', lineHeight: 1.2,
                        letterSpacing: '-0.025em',
                      }}>{featured.title}</h2>

                      <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.75, margin: 0 }}>
                        {featured.excerpt}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 36, paddingTop: 24, borderTop: '1px solid #f1f5f9' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>{featured.date}</span>
                        <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#e2e8f0', display: 'inline-block' }} />
                        <span style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>{featured.readTime} {t('blog.readSuffix')}</span>
                      </div>
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontSize: 13, fontWeight: 700, color: '#003C75',
                      }}>
                        {t('blog.readBtn')}
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Sağ — görsel panel */}
                  <div style={{
                    background: 'linear-gradient(145deg, #001f3f 0%, #003C75 60%, #005299 100%)',
                    padding: '48px 40px',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                    position: 'relative', overflow: 'hidden', minHeight: 320,
                  }}>
                    {/* Dekoratif halkalar */}
                    <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', border: '1px solid rgba(121,172,220,0.1)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', border: '1px solid rgba(121,172,220,0.08)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: 40, left: -60, width: 250, height: 250, borderRadius: '50%', background: 'rgba(121,172,220,0.05)', pointerEvents: 'none' }} />

                    {/* Büyük dekoratif harf */}
                    <div style={{
                      position: 'absolute', top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: 160, fontWeight: 900, lineHeight: 1,
                      color: 'rgba(121,172,220,0.05)',
                      pointerEvents: 'none', userSelect: 'none',
                      letterSpacing: '-0.05em',
                    }}>İK</div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{
                        fontSize: 'clamp(22px, 3vw, 36px)',
                        color: 'rgba(219,238,255,0.9)',
                        lineHeight: 1.35,
                        marginBottom: 16,
                      }}>
                      {t('blog.blogQuote')}
                      </div>
                      <div style={{ fontSize: 12, color: 'rgba(121,172,220,0.5)', fontWeight: 600, letterSpacing: '0.05em' }}>
                        {t('blog.blogQuoteSource')}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══════════════════════
          FİLTRE + GRID
      ══════════════════════ */}
      <section style={{ padding: '64px 24px 96px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Başlık + filtre satırı */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
            <div>
              <div style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>
                {t('blog.filterCount', { count: rest.length })}{active !== 'Tümü' ? ' ' + t('blog.filterCountCat', { cat: CATEGORIES.find(c => c.key === active)?.label || active }) : ''}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  style={{
                    fontSize: 12, fontWeight: 600,
                    padding: '6px 16px', borderRadius: 100,
                    border: `1px solid ${active === cat.key ? '#003C75' : '#e2e8f0'}`,
                    background: active === cat.key ? '#003C75' : '#fff',
                    color: active === cat.key ? '#fff' : '#64748b',
                    cursor: 'pointer', fontFamily: 'inherit',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { if (active !== cat.key) { e.currentTarget.style.borderColor = '#003C75'; e.currentTarget.style.color = '#003C75' } }}
                  onMouseLeave={e => { if (active !== cat.key) { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#64748b' } }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Ayırıcı çizgi */}
          <div style={{ height: 1, background: '#f1f5f9', marginBottom: 40 }} />

          {/* Yazılar */}
          <AnimatePresence mode="wait">
            {rest.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ textAlign: 'center', padding: '80px 0', color: '#94a3b8', fontSize: 15 }}
              >
                {t('blog.emptyState')}
              </motion.div>
            ) : (
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* İlk kart — geniş */}
                {rest.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: 24 }}
                  >
                    <Link to={`/blog/${rest[0].slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                      <div
                        className="wide-card"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1.4fr 1fr',
                          border: '1px solid #e8f0f9',
                          borderRadius: 22,
                          overflow: 'hidden',
                          background: '#fff',
                          boxShadow: '0 2px 16px rgba(0,60,117,0.05)',
                          transition: 'transform 0.2s, box-shadow 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,60,117,0.12)' }}
                        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,60,117,0.05)' }}
                      >
                        <div style={{ padding: '36px 40px' }}>
                          <span style={{
                            fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
                            color: rest[0].categoryColor,
                          }}>{rest[0].category}</span>

                          <h3 style={{
                            fontSize: 'clamp(18px, 2.2vw, 26px)',
                            fontWeight: 800, color: '#001f3f',
                            margin: '12px 0 14px', lineHeight: 1.25,
                            letterSpacing: '-0.02em',
                          }}>{rest[0].title}</h3>

                          <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, margin: '0 0 28px' }}>
                            {rest[0].excerpt}
                          </p>

                          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <span style={{ fontSize: 12, color: '#94a3b8' }}>{rest[0].date}</span>
                            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#e2e8f0', display: 'inline-block' }} />
                            <span style={{ fontSize: 12, color: '#94a3b8' }}>{rest[0].readTime} {t('blog.readSuffix')}</span>
                          </div>
                        </div>

                        <div style={{
                          background: `linear-gradient(135deg, ${rest[0].categoryColor}18 0%, ${rest[0].categoryColor}08 100%)`,
                          borderLeft: `1px solid ${rest[0].categoryColor}18`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          padding: 32,
                        }}>
                          <div style={{
                            fontSize: 'clamp(36px, 5vw, 72px)',
                            fontWeight: 900,
                            color: `${rest[0].categoryColor}20`,
                            letterSpacing: '-0.04em',
                            lineHeight: 1,
                            textAlign: 'center',
                            userSelect: 'none',
                          }}>
                            {rest[0].readTime}
                            <div style={{ fontSize: '0.35em', color: `${rest[0].categoryColor}40`, letterSpacing: '0.1em', fontStyle: 'normal', fontWeight: 700, marginTop: 4 }}>{t('blog.readLabel')}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}

                {/* Kalan kartlar — 3'lü grid */}
                {rest.length > 1 && (
                  <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                    {rest.slice(1).map((post, i) => (
                      <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: i * 0.06 }}
                      >
                        <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                          <div
                            style={{
                              border: '1px solid #e8f0f9',
                              borderRadius: 20, overflow: 'hidden',
                              background: '#fff',
                              boxShadow: '0 2px 12px rgba(0,60,117,0.04)',
                              height: '100%',
                              display: 'flex', flexDirection: 'column',
                              transition: 'transform 0.2s, box-shadow 0.2s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(0,60,117,0.12)' }}
                            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,60,117,0.04)' }}
                          >
                            {/* Renk şeridi */}
                            <div style={{ height: 3, background: post.categoryColor }} />

                            {/* Başlık alanı — renkli gradient bg */}
                            <div style={{
                              padding: '22px 22px 18px',
                              background: `linear-gradient(160deg, ${post.categoryColor}0a 0%, transparent 60%)`,
                            }}>
                              <span style={{
                                fontSize: 10, fontWeight: 800, letterSpacing: '0.1em',
                                textTransform: 'uppercase', color: post.categoryColor,
                                display: 'block', marginBottom: 10,
                              }}>{post.category}</span>
                              <h3 style={{
                                fontSize: 16, fontWeight: 700, color: '#0f172a',
                                margin: 0, lineHeight: 1.4, letterSpacing: '-0.01em',
                              }}>{post.title}</h3>
                            </div>

                            {/* İçerik */}
                            <div style={{ padding: '0 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                              <p style={{
                                fontSize: 13, color: '#64748b',
                                lineHeight: 1.7, margin: '0 0 20px', flex: 1,
                              }}>{post.excerpt}</p>

                              <div style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                paddingTop: 14, borderTop: '1px solid #f1f5f9',
                              }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                  <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 500 }}>{post.date}</span>
                                  <span style={{ width: 2, height: 2, borderRadius: '50%', background: '#cbd5e1', display: 'inline-block' }} />
                                  <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 500 }}>{post.readTime}</span>
                                </div>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════
          BÜLTEN
      ══════════════════════ */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{
              background: 'linear-gradient(135deg, #001f3f 0%, #003C75 100%)',
              borderRadius: 28, padding: 'clamp(40px, 6vw, 64px)',
              display: 'flex', alignItems: 'center',
              gap: 48, flexWrap: 'wrap',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', right: -60, top: -60, width: 280, height: 280, borderRadius: '50%', background: 'rgba(121,172,220,0.07)', pointerEvents: 'none' }} />

            <div style={{ flex: 1, minWidth: 240, position: 'relative', zIndex: 1 }}>
              <h2 style={{
                fontSize: 'clamp(22px, 3vw, 36px)',
                fontWeight: 800, color: '#fff',
                margin: '0 0 10px', lineHeight: 1.15,
                letterSpacing: '-0.025em',
              }}>{t('blog.newsletterTitle')}</h2>
              <p style={{ fontSize: 15, color: 'rgba(219,238,255,0.55)', lineHeight: 1.65, margin: 0 }}>
                {t('blog.newsletterSubtitle')}
              </p>
            </div>

            <div className="blog-newsletter-form" style={{ flex: '0 0 auto', minWidth: 300, position: 'relative', zIndex: 1 }}>
              <div className="blog-newsletter-row" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder={t('blog.newsletterPlaceholder')}
                  style={{
                    flex: 1, minWidth: 200,
                    padding: '13px 18px', borderRadius: 10,
                    border: '1px solid rgba(255,255,255,0.15)',
                    fontSize: 14, fontFamily: 'inherit',
                    color: '#fff',
                    background: 'rgba(255,255,255,0.08)',
                    outline: 'none',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'rgba(121,172,220,0.6)'; e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
                />
                <button
                  style={{
                    padding: '13px 24px', borderRadius: 10,
                    background: '#79ACDC', color: '#001f3f',
                    fontSize: 14, fontWeight: 700,
                    border: 'none', cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'background 0.15s',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#a0c4e8' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#79ACDC' }}
                >
                  {t('blog.newsletterBtn')}
                </button>
              </div>
              <p style={{ fontSize: 12, color: 'rgba(219,238,255,0.3)', margin: '10px 0 0' }}>
                {t('blog.newsletterNote')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .featured-card { grid-template-columns: 1fr !important; }
          .wide-card { grid-template-columns: 1fr !important; }
          .wide-card > div:last-child { display: none !important; }
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .blog-grid { grid-template-columns: 1fr !important; }
          .blog-newsletter-form {
            min-width: 100% !important;
            width: 100% !important;
          }
          .blog-newsletter-row {
            flex-direction: column !important;
          }
          .blog-newsletter-row input,
          .blog-newsletter-row button {
            width: 100% !important;
          }
          .featured-card > div:first-child,
          .wide-card > div:first-child {
            padding: 24px 20px !important;
          }
          .featured-card > div:last-child {
            min-height: 220px !important;
            padding: 28px 20px !important;
          }
        }
        @media (max-width: 480px) {
          .featured-card > div:first-child > div:last-child,
          .wide-card > div:first-child > div:last-child {
            align-items: flex-start !important;
            flex-direction: column !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </div>
  )
}
