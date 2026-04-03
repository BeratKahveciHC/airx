import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/* ── CountUp ── */
function CountUp({ target, prefix = '', suffix = '', duration = 1800, delay = 0 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const timer = setTimeout(() => {
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(2, -10 * progress)
        setCount(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(timer)
  }, [started, target, duration, delay])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

/* ── SVG İkonlar ── */
const CheckIcon = ({ size = 18, color = '#22c55e' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const XIcon = ({ size = 18, color = '#ef4444' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
)

const ArrowRightIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
  </svg>
)

const ShieldIcon = ({ size = 32, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const ZapIcon = ({ size = 32, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const LayersIcon = ({ size = 32, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 2 7l10 5 10-5-10-5z" />
    <path d="m2 17 10 5 10-5" />
    <path d="m2 12 10 5 10-5" />
  </svg>
)

const HeadphonesIcon = ({ size = 32, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
)

const TrendingUpIcon = ({ size = 32, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
)

const GlobeIcon = ({ size = 32, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

/* ── Sayfa ── */
export default function WhyAiRXPage() {
  const { t } = useTranslation()
  const [hoveredRow, setHoveredRow] = useState(null)

  const COMPARE_ROWS = [
    { feature: t('whyPage.row1Feature'), airx: true, others: false, note: t('whyPage.row1Note') },
    { feature: t('whyPage.row2Feature'), airx: true, others: false, note: t('whyPage.row2Note') },
    { feature: t('whyPage.row3Feature'), airx: true, others: false, note: t('whyPage.row3Note') },
    { feature: t('whyPage.row4Feature'), airx: true, others: false, note: t('whyPage.row4Note') },
    { feature: t('whyPage.row5Feature'), airx: true, others: false, note: t('whyPage.row5Note') },
    { feature: t('whyPage.row6Feature'), airx: true, others: true, note: t('whyPage.row6Note') },
    { feature: t('whyPage.row7Feature'), airx: true, others: false, note: t('whyPage.row7Note') },
    { feature: t('whyPage.row8Feature'), airx: true, others: false, note: t('whyPage.row8Note') },
    { feature: t('whyPage.row9Feature'), airx: true, others: false, note: t('whyPage.row9Note') },
  ]

  const PILLARS = [
    { icon: <ShieldIcon />, label: t('whyPage.pillar1Label'), title: t('whyPage.pillar1Title'), body: t('whyPage.pillar1Body'), accent: '#003C75' },
    { icon: <ZapIcon />, label: t('whyPage.pillar2Label'), title: t('whyPage.pillar2Title'), body: t('whyPage.pillar2Body'), accent: '#1d4ed8' },
    { icon: <LayersIcon />, label: t('whyPage.pillar3Label'), title: t('whyPage.pillar3Title'), body: t('whyPage.pillar3Body'), accent: '#7c3aed' },
    { icon: <HeadphonesIcon />, label: t('whyPage.pillar4Label'), title: t('whyPage.pillar4Title'), body: t('whyPage.pillar4Body'), accent: '#0d9488' },
    { icon: <TrendingUpIcon />, label: t('whyPage.pillar5Label'), title: t('whyPage.pillar5Title'), body: t('whyPage.pillar5Body'), accent: '#dc2626' },
    { icon: <GlobeIcon />, label: t('whyPage.pillar6Label'), title: t('whyPage.pillar6Title'), body: t('whyPage.pillar6Body'), accent: '#ea7c1f' },
  ]

  const STATS = [
    { target: 150, suffix: '+', label: t('whyPage.statsLabel1'), sub: t('whyPage.statsSub1') },
    { target: 15, suffix: 'K+', label: t('whyPage.statsLabel2'), sub: t('whyPage.statsSub2') },
    { target: 14, suffix: '', label: t('whyPage.statsLabel3'), sub: t('whyPage.statsSub3') },
    { target: 99, prefix: '%', label: t('whyPage.statsLabel4'), sub: t('whyPage.statsSub4') },
  ]

  return (
    <div style={{ background: '#fff' }}>

      {/* ══════════════════════════════════════════
          HERO — Premium, split, grid çizgili
      ══════════════════════════════════════════ */}
      <section style={{
        background: '#00122b',
        minHeight: '88vh',
        display: 'flex', alignItems: 'center',
        padding: '100px 0 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid çizgileri */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(121,172,220,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(121,172,220,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          pointerEvents: 'none',
        }} />

        {/* Merkez glow */}
        <div style={{
          position: 'absolute', top: '30%', left: '40%',
          transform: 'translate(-50%, -50%)',
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(0,60,117,0.55) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Sağ glow */}
        <div style={{
          position: 'absolute', top: '10%', right: '-5%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(121,172,220,0.06) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div className="why-page-hero-shell" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="why-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

            {/* SOL — metin */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: 'clamp(38px, 5.5vw, 76px)',
                  fontWeight: 900,
                  color: '#fff',
                  lineHeight: 1.0,
                  margin: '0 0 8px',
                  letterSpacing: '-0.04em',
                }}
              >
                {t('whyPage.heroLine1')}
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.13, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: 'clamp(38px, 5.5vw, 76px)',
                  fontWeight: 900,
                  color: '#fff',
                  lineHeight: 1.0,
                  margin: '0 0 8px',
                  letterSpacing: '-0.04em',
                }}
              >
                {t('whyPage.heroLine2')}
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.19, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: 'clamp(38px, 5.5vw, 76px)',
                  fontWeight: 900,
                  background: 'linear-gradient(100deg, #79ACDC 0%, #c2dff5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.0,
                  margin: '0 0 32px',
                  letterSpacing: '-0.04em',
                }}
              >
                {t('whyPage.heroLine3')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.28 }}
                style={{
                  fontSize: 17,
                  color: 'rgba(219,238,255,0.5)',
                  lineHeight: 1.75,
                  maxWidth: 460,
                  margin: '0 0 44px',
                }}
              >
                {t('whyPage.heroSubtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.36 }}
                style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
              >
                <Link
                  to="/iletisim#demo-form"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '15px 32px', borderRadius: 10,
                    fontSize: 15, fontWeight: 700,
                    background: '#fff', color: '#003C75',
                    textDecoration: 'none',
                    transition: 'transform 0.18s, box-shadow 0.18s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(255,255,255,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
                >
                  {t('whyPage.heroDemoBtn')} <ArrowRightIcon />
                </Link>
                <Link
                  to="/fiyatlar"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '15px 32px', borderRadius: 10,
                    fontSize: 15, fontWeight: 500,
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                    transition: 'border-color 0.18s, color 0.18s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(121,172,220,0.4)'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
                >
                  {t('whyPage.heroPricingBtn')}
                </Link>
              </motion.div>
            </div>

            {/* SAĞ — stat kartları */}
            <motion.div
              className="why-page-hero-stats"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
            >
              {[
                {
                  value: t('whyPage.heroStat1Value'), label: t('whyPage.heroStat1Label'), sub: t('whyPage.heroStat1Sub'),
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#79ACDC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="2" width="18" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
                    </svg>
                  ),
                },
                {
                  value: t('whyPage.heroStat2Value'), label: t('whyPage.heroStat2Label'), sub: t('whyPage.heroStat2Sub'),
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#79ACDC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ),
                },
                {
                  value: t('whyPage.heroStat3Value'), label: t('whyPage.heroStat3Label'), sub: t('whyPage.heroStat3Sub'),
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#79ACDC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="3" width="6" height="6" rx="1"/><rect x="2" y="15" width="6" height="6" rx="1"/><rect x="16" y="15" width="6" height="6" rx="1"/><path d="M9 6h6"/><path d="M9 18h6"/><path d="M12 9v6"/>
                    </svg>
                  ),
                },
                {
                  value: t('whyPage.heroStat4Value'), label: t('whyPage.heroStat4Label'), sub: t('whyPage.heroStat4Sub'),
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#79ACDC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
                    </svg>
                  ),
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.08 }}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(121,172,220,0.1)',
                    borderRadius: 20,
                    padding: '28px 24px',
                    backdropFilter: 'blur(8px)',
                    transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
                  }}
                  whileHover={{
                    background: 'rgba(255,255,255,0.07)',
                    borderColor: 'rgba(121,172,220,0.22)',
                    y: -3,
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, marginBottom: 16,
                    background: 'rgba(121,172,220,0.1)',
                    border: '1px solid rgba(121,172,220,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{stat.icon}</div>
                  <div style={{
                    fontSize: 'clamp(28px, 3.5vw, 40px)',
                    fontWeight: 900, color: '#fff',
                    lineHeight: 1, letterSpacing: '-0.03em',
                    marginBottom: 6,
                  }}>{stat.value}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(219,238,255,0.7)', marginBottom: 2 }}>{stat.label}</div>
                  <div style={{ fontSize: 12, color: 'rgba(121,172,220,0.5)', fontWeight: 500 }}>{stat.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Alt border çizgisi */}
          <div style={{ marginTop: 80, height: 1, background: 'linear-gradient(90deg, transparent, rgba(121,172,220,0.15) 30%, rgba(121,172,220,0.15) 70%, transparent)' }} />
        </div>

        {/* Alt geçiş */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 64, background: '#fff', clipPath: 'ellipse(60% 100% at 50% 100%)' }} />

        <style>{`
          @media (max-width: 1024px) {
            .why-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
              padding: 0 !important;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════
          İSTATİSTİKLER
      ══════════════════════════════════════════ */}
      <section style={{ padding: '72px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div className="why-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                style={{
                  textAlign: 'center', padding: '32px 20px',
                  borderRight: i < STATS.length - 1 ? '1px solid #e8f0f9' : 'none',
                }}
              >
                <div style={{
                  fontSize: 'clamp(40px, 5vw, 56px)',
                  fontWeight: 900,
                  color: '#003C75',
                  lineHeight: 1,
                  marginBottom: 8,
                  letterSpacing: '-0.03em',
                }}>
                  <CountUp target={stat.target} prefix={stat.prefix} suffix={stat.suffix} delay={i * 100} />
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{stat.label}</div>
                <div style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RAKIP KARŞILAŞTIRMA TABLOSU
      ══════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(180deg, #f4f8fd 0%, #edf4fc 100%)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 56 }}
          >
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#003C75', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              {t('whyPage.compareTitle')}
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
              {t('whyPage.compareSubtitle')}
            </p>
          </motion.div>

          <div className="why-compare-scroll" style={{ overflowX: 'auto', overflowY: 'hidden' }}>
            {/* Tablo başlığı */}
            <motion.div
              className="why-compare-head"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                display: 'grid', gridTemplateColumns: '1fr 140px 140px',
                gap: 0, marginBottom: 4,
              }}
            >
              <div style={{ padding: '12px 20px' }} />
              <div style={{
                padding: '14px 20px', textAlign: 'center',
                background: '#003C75', borderRadius: '14px 14px 0 0',
                fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: '0.04em',
              }}>
                {t('whyPage.compareColAirx')}
              </div>
              <div style={{
                padding: '14px 20px', textAlign: 'center',
                background: '#f8fafc',
                borderRadius: '14px 14px 0 0',
                fontSize: 13, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.04em',
              }}>
                {t('whyPage.compareColOthers')}
              </div>
            </motion.div>

            {/* Tablo satırları */}
            <div className="why-compare-table" style={{ borderRadius: '0 0 18px 18px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,60,117,0.08)' }}>
              {COMPARE_ROWS.map((row, i) => (
                <motion.div
                  className="why-compare-row"
                  key={row.feature}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                  style={{
                    display: 'grid', gridTemplateColumns: '1fr 140px 140px',
                    gap: 0,
                    background: hoveredRow === i ? '#f0f7ff' : (i % 2 === 0 ? '#fff' : '#fafcff'),
                    transition: 'background 0.15s',
                    borderBottom: i < COMPARE_ROWS.length - 1 ? '1px solid rgba(0,60,117,0.06)' : 'none',
                  }}
                >
                  {/* Özellik adı */}
                  <div className="why-compare-feature" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#1e293b', lineHeight: 1.4 }}>{row.feature}</span>
                    {row.note && (
                      <span style={{
                        fontSize: 11, fontWeight: 600, color: '#003C75',
                        background: 'rgba(0,60,117,0.07)',
                        padding: '2px 8px', borderRadius: 100, whiteSpace: 'nowrap', flexShrink: 0,
                      }}>{row.note}</span>
                    )}
                  </div>

                  {/* AiRX sütunu */}
                  <div className="why-compare-value" style={{
                    padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: row.airx ? 'rgba(0,60,117,0.03)' : 'transparent',
                  }}>
                    {row.airx
                      ? <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon /></div>
                      : <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(239,68,68,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><XIcon /></div>
                    }
                  </div>

                  {/* Diğerleri sütunu */}
                  <div className="why-compare-value" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {row.others
                      ? <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon /></div>
                      : <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(239,68,68,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><XIcon /></div>
                    }
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ÖZELLIK PILLARLARI
      ══════════════════════════════════════════ */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 56 }}
          >
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#003C75', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              {t('whyPage.pillarsTitle')}
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 440, margin: '0 auto', lineHeight: 1.65 }}>
              {t('whyPage.pillarsSubtitle')}
            </p>
          </motion.div>

          <div className="why-pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ default: { duration: 0.45, delay: i * 0.07 }, y: { duration: 0.2, ease: 'easeOut' }, boxShadow: { duration: 0.2, ease: 'easeOut' } }}
                style={{
                  borderRadius: 24,
                  border: `1px solid ${pillar.accent}22`,
                  background: '#fff',
                  boxShadow: `0 4px 32px ${pillar.accent}10`,
                  position: 'relative', overflow: 'hidden',
                  cursor: 'default',
                  padding: '32px 30px 36px',
                }}
                whileHover={{ y: -5, boxShadow: `0 16px 48px ${pillar.accent}20` }}
              >
                {/* Köşe glow */}
                <div style={{ position: 'absolute', top: -40, right: -40, width: 140, height: 140, borderRadius: '50%', background: `radial-gradient(circle, ${pillar.accent}10 0%, transparent 70%)`, pointerEvents: 'none' }} />
                {/* Sol accent çizgisi */}
                <div style={{ position: 'absolute', top: 24, bottom: 24, left: 0, width: 3, borderRadius: '0 3px 3px 0', background: pillar.accent }} />

                {/* Label + İkon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: pillar.accent,
                    background: `${pillar.accent}12`,
                    border: `1px solid ${pillar.accent}25`,
                    padding: '3px 10px', borderRadius: 100,
                  }}>{pillar.label}</span>
                  <div style={{
                    width: 44, height: 44, borderRadius: 13, flexShrink: 0,
                    background: `${pillar.accent}15`,
                    border: `1px solid ${pillar.accent}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 4px 14px ${pillar.accent}20`,
                  }}>
                    {pillar.icon}
                  </div>
                </div>

                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#0f172a', margin: '0 0 10px', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.72, margin: 0 }}>
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          "KARAR AN" BÖLÜMÜ — Bold quote
      ══════════════════════════════════════════ */}
      <section style={{
        padding: '96px 24px',
        background: 'linear-gradient(135deg, #001f3f 0%, #003C75 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -40, width: 400, height: 400, borderRadius: '50%', background: 'rgba(121,172,220,0.05)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div style={{
              fontSize: 'clamp(28px, 5vw, 56px)',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: 32,
              letterSpacing: '-0.01em',
            }}>
              "{t('whyPage.quoteText')}<br />
              <span style={{
                background: 'linear-gradient(90deg, #79ACDC, #b8d9f5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{t('whyPage.quoteHighlight')}"</span>
            </div>

            <p style={{
              fontSize: 16, color: 'rgba(219,238,255,0.65)',
              lineHeight: 1.7, marginBottom: 44, maxWidth: 560, margin: '0 auto 44px',
            }}>
              {t('whyPage.quoteBody')}
            </p>

            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/iletisim#demo-form"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 32px', borderRadius: 10,
                  fontSize: 15, fontWeight: 700,
                  background: '#fff', color: '#003C75',
                  textDecoration: 'none',
                  transition: 'transform 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = '' }}
              >
                {t('whyPage.quoteDemoBtn')} <ArrowRightIcon />
              </Link>
              <Link
                to="/moduller/pdks"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 32px', borderRadius: 10,
                  fontSize: 15, fontWeight: 600,
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  color: '#fff',
                  textDecoration: 'none',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.16)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.10)' }}
              >
                {t('whyPage.quoteModulesBtn')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RESPONSIVE STİLLER
      ══════════════════════════════════════════ */}
      <style>{`
        @media (max-width: 1024px) {
          .why-page-hero-shell {
            padding: 0 24px !important;
          }
          .why-page-hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .why-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .why-stats-grid > div:nth-child(2n) {
            border-right: none !important;
          }
          .why-stats-grid > div:nth-child(-n + 2) {
            border-bottom: 1px solid #e8f0f9 !important;
          }
          .why-pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .why-page-hero-shell {
            padding: 0 16px !important;
          }
          .why-page-hero-stats {
            grid-template-columns: 1fr !important;
          }
          .why-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .why-stats-grid > div {
            border-right: none !important;
            border-bottom: 1px solid #e8f0f9 !important;
          }
          .why-compare-scroll {
            overflow-x: auto !important;
            overflow-y: hidden !important;
            padding-bottom: 6px !important;
            -webkit-overflow-scrolling: touch !important;
          }
          .why-compare-head,
          .why-compare-table,
          .why-compare-row {
            min-width: 520px !important;
          }
          .why-compare-head {
            margin-bottom: 0 !important;
          }
          .why-compare-table {
            border-radius: 0 0 18px 18px !important;
            overflow: hidden !important;
            box-shadow: 0 8px 28px rgba(0,60,117,0.08) !important;
          }
          .why-compare-row {
            grid-template-columns: minmax(240px, 1fr) 140px 140px !important;
          }
          .why-compare-feature {
            padding: 16px !important;
            gap: 10px !important;
          }
          .why-compare-value {
            padding: 16px 14px !important;
          }
        }
        @media (max-width: 520px) {
          .why-pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .why-hero-grid {
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  )
}
