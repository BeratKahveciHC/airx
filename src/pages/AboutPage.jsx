import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'

/* ── CountUp ── */
function CountUp({ target, prefix = '', suffix = '', duration = 1800, delay = 0 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const t = setTimeout(() => {
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        setCount(Math.round((1 - Math.pow(2, -10 * p)) * target))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(t)
  }, [started, target, duration, delay])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

/* ── Data ── */
export default function AboutPage() {
  const { t } = useTranslation()

  const STATS = [
    { target: 150, suffix: '+', label: t('about.statsLabel1') },
    { target: 15000, suffix: '+', label: t('about.statsLabel2') },
    { target: 14, suffix: '', label: t('about.statsLabel3') },
    { target: 99, prefix: '%', suffix: '.9', label: t('about.statsLabel4') },
  ]

  const VALUES = [
    {
      title: t('about.value1Title'),
      text: t('about.value1Text'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: t('about.value2Title'),
      text: t('about.value2Text'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: t('about.value3Title'),
      text: t('about.value3Text'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
          <path d="M3 21v-5h5" />
        </svg>
      ),
    },
  ]

  const PRINCIPLES = [
    t('about.principle1'),
    t('about.principle2'),
    t('about.principle3'),
    t('about.principle4'),
  ]

  const MILESTONES = [
    { tag: t('about.milestone1Tag'), title: t('about.milestone1Title'), text: t('about.milestone1Text') },
    { tag: t('about.milestone2Tag'), title: t('about.milestone2Title'), text: t('about.milestone2Text') },
    { tag: t('about.milestone3Tag'), title: t('about.milestone3Title'), text: t('about.milestone3Text') },
  ]

  return (
    <main>
      <SEO
        title="Hakkımızda — AiRX İK Yönetim Platformu"
        description="AiRX, Türkiye'nin mobil öncelikli İK yönetim platformudur. 150+ aktif kurum, 15.000+ kullanıcı. Biyometrik veri gerektirmez, KVKK uyumlu, 1 günde kurulum."
        canonical="/hakkimizda"
      />

      {/* ── Hero ── */}
      <section className="about-hero-section" style={{
        padding: '108px 24px 0',
        background: 'linear-gradient(180deg, #ffffff 0%, #f4f8fd 60%, #ffffff 100%)',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 24, alignItems: 'stretch' }} className="about-hero-grid">

            {/* Left card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="about-hero-card"
              style={{
                background: '#fff',
                border: '1px solid rgba(0,60,117,0.08)',
                borderRadius: 28,
                padding: '52px 48px',
                boxShadow: '0 20px 56px rgba(0,60,117,0.08)',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', right: -90, top: -100, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(121,172,220,0.16) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <motion.div animate={{ y: [0, -12, 0], x: [0, 8, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', right: 80, bottom: 90, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,60,117,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ fontSize: 'clamp(36px, 4.8vw, 60px)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.03em', color: '#0f172a', margin: '0 0 22px', maxWidth: 580 }}
                >
                  {t('about.heroTitle1')}{' '}
                  <span style={{ color: '#003C75' }}>{t('about.heroTitleHighlight')}</span>{' '}
                  {t('about.heroTitle2')}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.17 }}
                  style={{ fontSize: 17, color: '#475569', lineHeight: 1.82, margin: '0 0 34px', maxWidth: 580 }}
                >
                  {t('about.heroSubtitle')}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.24 }}
                  style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
                >
                  <motion.a
                    href="#about-values"
                    whileHover={{ y: -3, boxShadow: '0 18px 36px rgba(0,60,117,0.24)' }}
                    whileTap={{ scale: 0.98 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 8, background: '#003C75', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: '0 10px 26px rgba(0,60,117,0.18)' }}
                  >
                    {t('about.heroBtn1')}
                  </motion.a>
                  <motion.a
                    href="/iletisim#demo-form"
                    whileHover={{ y: -3, borderColor: '#b8c7da', background: '#f8fbff' }}
                    whileTap={{ scale: 0.98 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 24px', borderRadius: 8, background: '#fff', color: '#334155', textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #dbe3ee' }}
                  >
                    {t('about.heroBtn2')}
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            {/* Right dark card */}
            <motion.div
              initial={{ opacity: 0, x: 28, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.09, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'linear-gradient(155deg, #001428 0%, #003c75 58%, #0a5ca9 100%)',
                borderRadius: 28, padding: '38px 32px',
                color: '#fff', position: 'relative', overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(0,37,75,0.22)',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(121,172,220,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(121,172,220,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.7 }} />
              <motion.div animate={{ y: [0, 16, 0], rotate: [0, 8, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: 28, right: 28, width: 72, height: 72, borderRadius: 18, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', lineHeight: 1.28, color: '#dbeeff', marginBottom: 28 }}>
                  "{t('about.cardQuote')}"
                </div>

                <div style={{ display: 'grid', gap: 10, marginBottom: 30 }}>
                  {PRINCIPLES.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ default: { duration: 0.45, delay: 0.3 + i * 0.06 }, x: { duration: 0.2, ease: 'easeOut' }, background: { duration: 0.2, ease: 'easeOut' } }}
                      whileHover={{ x: 5, background: 'rgba(255,255,255,0.13)' }}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', borderRadius: 14, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.11)', backdropFilter: 'blur(8px)' }}
                    >
                      <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#79ACDC', flexShrink: 0 }} />
                      <span style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,0.86)' }}>{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <div style={{ fontSize: 30, fontWeight: 800, lineHeight: 1, marginBottom: 5 }}>{t('about.quickStat1Value')}</div>
                    <div style={{ fontSize: 13, color: 'rgba(219,238,255,0.58)' }}>{t('about.quickStat1Label')}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 30, fontWeight: 800, lineHeight: 1, marginBottom: 5 }}>{t('about.quickStat2Value')}</div>
                    <div style={{ fontSize: 13, color: 'rgba(219,238,255,0.58)' }}>{t('about.quickStat2Label')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section style={{ padding: '64px 24px 80px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }} className="about-stats-grid">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ default: { duration: 0.45, delay: i * 0.07 }, y: { duration: 0.2, ease: 'easeOut' }, boxShadow: { duration: 0.2, ease: 'easeOut' } }}
                whileHover={{ y: -8, boxShadow: '0 20px 44px rgba(0,60,117,0.10)' }}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,60,117,0.08)',
                  boxShadow: '0 8px 28px rgba(15,23,42,0.04)',
                  borderRadius: 22, padding: '28px 24px',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', right: -18, top: -18, width: 72, height: 72, borderRadius: '50%', background: 'radial-gradient(circle, rgba(121,172,220,0.10) 0%, transparent 70%)' }} />
                <div style={{ fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 900, color: '#003C75', lineHeight: 1, marginBottom: 10 }}>
                  <CountUp target={stat.target} prefix={stat.prefix || ''} suffix={stat.suffix || ''} delay={i * 120} />
                </div>
                <div style={{ fontSize: 14, color: '#64748b', lineHeight: 1.5 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        id="about-values"
        style={{ padding: '0 24px 100px', background: 'linear-gradient(180deg, #f4f8fd 0%, #ffffff 100%)' }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.52 }}
            style={{ textAlign: 'center', marginBottom: 52, paddingTop: 80 }}
          >
            <h2 style={{ fontSize: 'clamp(30px, 4.2vw, 46px)', color: '#003C75', margin: '0 0 16px', lineHeight: 1.12 }}>
              {t('about.valuesSectionTitle')}
            </h2>
            <p style={{ maxWidth: 640, margin: '0 auto', fontSize: 17, color: '#64748b', lineHeight: 1.78 }}>
              {t('about.valuesSectionSubtitle')}
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="about-values-grid">
            {VALUES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ default: { duration: 0.5, delay: i * 0.09 }, y: { duration: 0.2, ease: 'easeOut' }, boxShadow: { duration: 0.2, ease: 'easeOut' } }}
                whileHover={{ y: -10, boxShadow: '0 26px 50px rgba(0,60,117,0.11)' }}
                style={{
                  background: '#fff', borderRadius: 26,
                  border: '1px solid rgba(0,60,117,0.08)',
                  padding: '36px 32px',
                  boxShadow: '0 10px 28px rgba(0,60,117,0.06)',
                }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: 18,
                  background: 'linear-gradient(135deg, rgba(0,60,117,0.07), rgba(121,172,220,0.15))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 22, color: '#003C75',
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: '#0f172a', margin: '0 0 12px' }}>{item.title}</h3>
                <p style={{ fontSize: 15.5, color: '#64748b', lineHeight: 1.78, margin: 0 }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story / Timeline ── */}
      <section style={{ padding: '0 24px 100px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.88fr 1.12fr', gap: 22, alignItems: 'start' }} className="about-story-grid">

            {/* Left — brand card */}
            <motion.div
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              style={{
                background: 'linear-gradient(160deg, #001428 0%, #003C75 60%, #0a5ca9 100%)',
                borderRadius: 28, padding: '40px 34px',
                color: '#fff', position: 'relative', overflow: 'hidden',
                boxShadow: '0 24px 56px rgba(0,37,75,0.22)',
              }}
            >
              <div style={{ position: 'absolute', right: -70, bottom: -70, width: 220, height: 220, borderRadius: '50%', background: 'rgba(121,172,220,0.10)', pointerEvents: 'none' }} />
              <motion.div animate={{ x: [0, -8, 0], y: [0, 12, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: 24, right: 24, width: 80, height: 80, borderRadius: 22, border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', lineHeight: 1.24, marginBottom: 20, color: '#ffffff' }}>
                  {t('about.storyQuote')}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.82, color: 'rgba(219,238,255,0.68)', margin: '0 0 30px' }}>
                  {t('about.storyBody')}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 22 }}>
                  {[
                    { val: t('about.miniStat1Val'), desc: t('about.miniStat1Desc') },
                    { val: t('about.miniStat2Val'), desc: t('about.miniStat2Desc') },
                    { val: t('about.miniStat3Val'), desc: t('about.miniStat3Desc') },
                    { val: t('about.miniStat4Val'), desc: t('about.miniStat4Desc') },
                  ].map((s) => (
                    <div key={s.desc}>
                      <div style={{ fontSize: 26, fontWeight: 800, lineHeight: 1, marginBottom: 5 }}>{s.val}</div>
                      <div style={{ fontSize: 13, color: 'rgba(219,238,255,0.56)' }}>{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — milestones */}
            <div style={{ display: 'grid', gap: 14 }}>
              {MILESTONES.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24, x: 12 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ default: { duration: 0.48, delay: i * 0.09 }, x: { duration: 0.2, ease: 'easeOut' }, y: { duration: 0.2, ease: 'easeOut' }, boxShadow: { duration: 0.2, ease: 'easeOut' } }}
                  whileHover={{ x: 6, y: -4, boxShadow: '0 20px 42px rgba(15,23,42,0.09)' }}
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(0,60,117,0.08)',
                    borderRadius: 22, padding: '26px 26px 24px',
                    boxShadow: '0 8px 28px rgba(15,23,42,0.05)',
                  }}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', borderRadius: 9999, background: 'rgba(0,60,117,0.06)', color: '#003C75', fontSize: 12, fontWeight: 700, marginBottom: 14 }}>
                    {item.tag}
                  </div>
                  <h3 style={{ fontSize: 21, fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.78, margin: 0 }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta" style={{
        padding: '104px 24px',
        background: 'linear-gradient(140deg, #001020 0%, #002044 35%, #003C75 65%, #00509e 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(121,172,220,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(121,172,220,0.07) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <motion.div animate={{ scale: [1, 1.14, 1], opacity: [0.2, 0.36, 0.2] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: -190, right: -110, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(121,172,220,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.14, 0.26, 0.14] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', bottom: -180, left: -80, width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,80,158,0.28) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 980, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 52px)', color: '#fff', margin: '0 0 20px', lineHeight: 1.1 }}>
              {t('about.ctaTitle')}
            </h2>
            <p style={{ maxWidth: 580, margin: '0 auto 34px', fontSize: 17, lineHeight: 1.78, color: 'rgba(219,238,255,0.68)' }}>
              {t('about.ctaSubtitle')}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <motion.a href="/iletisim#demo-form" whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.24)' }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '15px 34px', borderRadius: 9999, background: '#fff', color: '#003C75', textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
                {t('about.ctaBtn1')}
              </motion.a>
              <motion.a href="mailto:info@airx.com.tr" whileHover={{ y: -4, background: 'rgba(255,255,255,0.16)' }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '15px 28px', borderRadius: 9999, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 15, backdropFilter: 'blur(8px)' }}>
                {t('about.ctaBtn2')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* ── Grid layouts ── */
        @media (max-width: 1024px) {
          .about-hero-grid, .about-story-grid { grid-template-columns: 1fr !important; }
          .about-stats-grid, .about-values-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .about-stats-grid, .about-values-grid { grid-template-columns: 1fr !important; }
          .about-story-grid > div:first-child {
            padding: 30px 22px !important;
          }
        }

        /* ── Hero section padding ── */
        @media (max-width: 1024px) {
          .about-hero-section { padding: 84px 24px 0 !important; }
        }
        @media (max-width: 640px) {
          .about-hero-section { padding: 72px 20px 0 !important; }
          .about-hero-card { padding: 32px 24px !important; }
        }
        @media (max-width: 480px) {
          .about-hero-section { padding: 64px 16px 0 !important; }
          .about-hero-card { padding: 28px 20px !important; border-radius: 20px !important; }
          .about-story-grid > div:first-child {
            border-radius: 22px !important;
            padding: 26px 18px !important;
          }
        }

        /* ── CTA padding ── */
        @media (max-width: 768px) {
          .about-cta { padding: 72px 24px !important; }
        }
        @media (max-width: 480px) {
          .about-cta { padding: 56px 16px !important; }
        }
      `}</style>
    </main>
  )
}
