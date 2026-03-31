import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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

/* ── Karşılaştırma Verileri ── */
const COMPARE_ROWS = [
  { feature: 'Biyometrik veri gerektirmez', airx: true, others: false, note: 'KVKK tam uyum' },
  { feature: 'Türkçe yerel destek ekibi', airx: true, others: false, note: 'Türkiye\'de yerleşik' },
  { feature: 'Donanım satın almadan kurulum', airx: true, others: false, note: '1 günde hazır' },
  { feature: '14 modül tek platformda', airx: true, others: false, note: 'Tümü dahil' },
  { feature: 'Mobil QR kod ile yoklama', airx: true, others: false, note: 'iOS & Android' },
  { feature: 'Gerçek zamanlı analitik', airx: true, others: true, note: '' },
  { feature: 'Özelleştirilebilir iş akışları', airx: true, others: false, note: '' },
  { feature: 'Yemekhane & fiziksel erişim entegrasyonu', airx: true, others: false, note: '' },
  { feature: 'SaaS — ekstra lisans maliyeti yok', airx: true, others: false, note: '' },
]

/* ── Öne Çıkan Özellik Kartları ── */
const PILLARS = [
  {
    icon: <ShieldIcon />,
    label: 'Gizlilik Önce',
    title: 'Biyometrik Veri Yok, Tam KVKK Uyumu',
    body: 'Parmak izi, yüz taraması veya retina verisi sisteme hiç girmez. Mobil QR kod her şeyi halleder; çalışanlarınızın mahremiyeti korunur.',
    accent: '#003C75',
  },
  {
    icon: <ZapIcon />,
    label: 'Hızlı Başlangıç',
    title: '24 Saat İçinde Canlıda',
    body: 'Ekstra donanım sipariş etmenize gerek yok. Sisteminizi bir iş günü içinde kurun, aynı gün kullanmaya başlayın. Diğer çözümler haftalarca sürer.',
    accent: '#1d4ed8',
  },
  {
    icon: <LayersIcon />,
    label: 'Her Şey Dahil',
    title: '14 Modül, Tek Abonelik',
    body: 'PDKS\'ten yemekhanesine, izin yönetiminden iş zekasına — ayrı lisanslar için ayrı bütçe harcamadan tüm İK süreçlerinizi tek platformda yönetin.',
    accent: '#7c3aed',
  },
  {
    icon: <HeadphonesIcon />,
    label: 'Gerçek Destek',
    title: 'Türkçe, Yerli, Hızlı',
    body: 'Yabancı destek portallarında kaybolmak yok. Türkçe konuşan, Türkiye\'de yerleşik destek ekibimiz anında yanınızda.',
    accent: '#0d9488',
  },
  {
    icon: <TrendingUpIcon />,
    label: 'Büyüyen Yapı',
    title: '10\'dan 10.000\'e Kadar',
    body: 'Küçük işletmeden büyük kuruma aynı platform, aynı deneyim. Ekibiniz büyüdükçe AirX de büyür — yeniden kurulum gerekmez.',
    accent: '#dc2626',
  },
  {
    icon: <GlobeIcon />,
    label: 'Yerel Uzmanlık',
    title: 'Türkiye\'ye Özgün Tasarım',
    body: 'SGK, KVKK, yerel mevzuat — hepsi baştan düşünülmüş. Yabancı yazılımları yerele uyarlamakla zaman kaybetmezsiniz.',
    accent: '#ea7c1f',
  },
]

const STATS = [
  { target: 150, suffix: '+', label: 'Aktif Kurum', sub: 'Türkiye genelinde' },
  { target: 15, suffix: 'K+', label: 'Kullanıcı', sub: 'Aktif çalışan' },
  { target: 14, suffix: '', label: 'Modül', sub: 'Tek platformda' },
  { target: 99, prefix: '%', label: 'Uptime', sub: 'SLA garantisi' },
]

/* ── Sayfa ── */
export default function WhyAirXPage() {
  const [hoveredRow, setHoveredRow] = useState(null)

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

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="why-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

            {/* SOL — metin */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  color: '#79ACDC',
                  marginBottom: 20,
                  letterSpacing: '-0.01em',
                }}
              >
                Neden AirX?
              </motion.div>

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
                Diğerleri
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
                vaad eder.
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
                AirX teslim eder.
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
                Biyometrik veri riski, donanım maliyeti ve yabancı destek kuyruğu olmadan
                İK yönetimi. Tam olarak böyle olmalı.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.36 }}
                style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
              >
                <Link
                  to="/iletisim"
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
                  Demo Talep Et <ArrowRightIcon />
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
                  Fiyatları İncele
                </Link>
              </motion.div>
            </div>

            {/* SAĞ — stat kartları */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
            >
              {[
                { value: '150+', label: 'Aktif Kurum', sub: 'Türkiye genelinde', icon: '🏢' },
                { value: '15K+', label: 'Kullanıcı', sub: 'Platforma bağlı', icon: '👥' },
                { value: '14', label: 'Modül', sub: 'Tek abonelikte', icon: '⚡' },
                { value: '%99.9', label: 'Uptime', sub: 'SLA garantili', icon: '🛡' },
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
                  <div style={{ fontSize: 22, marginBottom: 12 }}>{stat.icon}</div>
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
          @media (max-width: 860px) {
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
            <div style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 2.5vw, 26px)',
              color: '#79ACDC', marginBottom: 12,
            }}>Tarafsız bir karşılaştırma</div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#003C75', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              AirX vs. Diğer Çözümler
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
              Rakiplerimizi küçümsemiyoruz — sadece farkı gösteriyoruz.
            </p>
          </motion.div>

          {/* Tablo başlığı */}
          <motion.div
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
              AirX
            </div>
            <div style={{
              padding: '14px 20px', textAlign: 'center',
              background: '#f8fafc',
              borderRadius: '14px 14px 0 0',
              fontSize: 13, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.04em',
            }}>
              Diğerleri
            </div>
          </motion.div>

          {/* Tablo satırları */}
          <div style={{ borderRadius: '0 0 18px 18px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,60,117,0.08)' }}>
            {COMPARE_ROWS.map((row, i) => (
              <motion.div
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
                <div style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#1e293b', lineHeight: 1.4 }}>{row.feature}</span>
                  {row.note && (
                    <span style={{
                      fontSize: 11, fontWeight: 600, color: '#003C75',
                      background: 'rgba(0,60,117,0.07)',
                      padding: '2px 8px', borderRadius: 100, whiteSpace: 'nowrap', flexShrink: 0,
                    }}>{row.note}</span>
                  )}
                </div>

                {/* AirX sütunu */}
                <div style={{
                  padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: row.airx ? 'rgba(0,60,117,0.03)' : 'transparent',
                }}>
                  {row.airx
                    ? <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon /></div>
                    : <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(239,68,68,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><XIcon /></div>
                  }
                </div>

                {/* Diğerleri sütunu */}
                <div style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {row.others
                    ? <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon /></div>
                    : <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(239,68,68,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><XIcon /></div>
                  }
                </div>
              </motion.div>
            ))}
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
              Her Detayda Fark
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 440, margin: '0 auto', lineHeight: 1.65 }}>
              Küçük detaylar büyük fark yaratır. AirX bunu her özellikte gösterir.
            </p>
          </motion.div>

          <div className="why-pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                style={{
                  borderRadius: 20, overflow: 'hidden',
                  border: '1px solid rgba(0,60,117,0.08)',
                  background: '#fff',
                  boxShadow: '0 4px 24px rgba(0,60,117,0.05)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,60,117,0.12)' }}
              >
                {/* Renkli üst bar */}
                <div style={{ height: 4, background: pillar.accent }} />
                <div style={{ padding: '28px 28px 32px' }}>
                  {/* İkon */}
                  <div style={{
                    width: 60, height: 60, borderRadius: 16,
                    background: pillar.accent,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20,
                    boxShadow: `0 6px 20px ${pillar.accent}30`,
                  }}>
                    {pillar.icon}
                  </div>

                  {/* Etiket */}
                  <div style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: pillar.accent,
                    marginBottom: 8,
                  }}>{pillar.label}</div>

                  <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', margin: '0 0 12px', lineHeight: 1.3 }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                    {pillar.body}
                  </p>
                </div>
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
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: 'italic',
              fontSize: 'clamp(28px, 5vw, 56px)',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: 32,
              letterSpacing: '-0.01em',
            }}>
              "İK yazılımı seçmek<br />
              <span style={{
                background: 'linear-gradient(90deg, #79ACDC, #b8d9f5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>stratejik bir karardır."</span>
            </div>

            <p style={{
              fontSize: 16, color: 'rgba(219,238,255,0.65)',
              lineHeight: 1.7, marginBottom: 44, maxWidth: 560, margin: '0 auto 44px',
            }}>
              Yanlış seçim; biyometrik veri riskleri, yıllarca süren implementasyonlar ve Türkçe bilmeyen destek ekipleri demektir. AirX bu sorunları baştan çözerek tasarlanmıştır.
            </p>

            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/iletisim"
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
                Ücretsiz Demo İste <ArrowRightIcon />
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
                Modülleri Keşfet
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RESPONSIVE STİLLER
      ══════════════════════════════════════════ */}
      <style>{`
        @media (max-width: 640px) {
          .why-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .why-stats-grid > div {
            border-right: none !important;
            border-bottom: 1px solid #e8f0f9 !important;
          }
        }
        @media (max-width: 860px) {
          .why-pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .why-pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
