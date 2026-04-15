'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'

/* ── SVG İkonlar ── */
const FingerprintOffIcon = ({ size = 28, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/>
    <path d="M14 13.12c0 2.38 0 6.38-1 8.88"/>
    <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/>
    <path d="M2 12a10 10 0 0 1 18-6"/>
    <path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/>
    <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/>
    <path d="M8.65 22c.21-.66.45-1.32.57-2"/>
    <path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>
    <line x1="2" y1="2" x2="22" y2="22"/>
  </svg>
)

const SmartphoneIcon = ({ size = 24, color = '#003C75' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
)

const ZapIcon = ({ size = 24, color = '#003C75' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const BarChartIcon = ({ size = 24, color = '#003C75' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
)

const BuildingIcon = ({ size = 24, color = '#003C75' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="1"/>
    <path d="M9 22v-4h6v4"/>
    <path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/>
    <path d="M12 10h.01"/><path d="M12 14h.01"/>
    <path d="M16 10h.01"/><path d="M16 14h.01"/>
    <path d="M8 10h.01"/><path d="M8 14h.01"/>
  </svg>
)

const LayersIcon = ({ size = 24, color = '#003C75' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 2 7l10 5 10-5-10-5z"/>
    <path d="m2 17 10 5 10-5"/>
    <path d="m2 12 10 5 10-5"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
)

/* ── Modül chips (Card 6 için) ── */
const MODULE_CHIPS = ['PDKS', 'İzin', 'Puantaj', 'Erişim Kontrolü', 'Ziyaretçi', 'Yemekhane', 'Anket', 'Eğitim', 'Yan Haklar', 'İş Zekası', '+4 daha']

export default function WhyAirX() {
  const t = useTranslations()
  const locale = useLocale()
  const isTr = locale === 'tr'
  return (
    <section id="neden" style={{ padding: '96px 24px', background: 'linear-gradient(180deg, #f4f8fd 0%, #ffffff 100%)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>

        {/* ── Başlık ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700, color: '#003C75',
            margin: '0 0 14px', lineHeight: 1.15,
          }}>
            {t('whyAirx.sectionTitle')}
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
            {t('whyAirx.sectionSubtitle')}
          </p>
        </motion.div>

        {/* ── Bento Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }} className="why-grid">

          {/* Kart 1 — BÜYÜK KOYU (2 col) — Biyometrik Veri Yok */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0 }}
            style={{
              gridColumn: 'span 2',
              background: 'linear-gradient(135deg, #001e45 0%, #003C75 60%, #0057a8 100%)',
              borderRadius: 24,
              padding: '40px 44px',
              display: 'flex', alignItems: 'center', gap: 40,
              position: 'relative', overflow: 'hidden',
              minHeight: 220,
              boxShadow: '0 20px 60px rgba(0,30,80,0.22)',
            }}
            className="why-card why-card-wide"
          >
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(121,172,220,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(121,172,220,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: -60, top: -60, width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(121,172,220,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', left: -40, bottom: -40, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,80,160,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{
              width: 80, height: 80, borderRadius: 22, flexShrink: 0,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.14)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              position: 'relative', zIndex: 1,
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}>
              <FingerprintOffIcon size={36} color="#79ACDC" />
            </div>

            <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(121,172,220,0.15)',
                border: '1px solid rgba(121,172,220,0.28)',
                color: '#79ACDC', fontSize: 11, fontWeight: 700,
                padding: '4px 12px', borderRadius: 100, marginBottom: 16,
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                <CheckIcon />
                {t('whyAirx.card1Badge')}
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: '0 0 12px', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                {t('whyAirx.card1Title')}
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(219,238,255,0.65)', lineHeight: 1.7, margin: 0, maxWidth: 420 }}>
                {t('whyAirx.card1Desc')}
              </p>
            </div>
          </motion.div>

          {/* Kart 2 — Tam Mobil Uyumlu */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.07 }}
            style={{
              background: '#fff',
              borderRadius: 24,
              padding: '32px 30px',
              border: '1px solid rgba(0,60,117,0.08)',
              boxShadow: '0 4px 32px rgba(0,60,117,0.07)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, borderRadius: '0 24px 0 100%', background: 'linear-gradient(225deg, rgba(0,60,117,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: 'linear-gradient(135deg, #003C75 0%, #1a6aaa 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
                boxShadow: '0 6px 16px rgba(0,60,117,0.25)',
              }}>
                <SmartphoneIcon color="#fff" />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                {t('whyAirx.card2Title')}
              </h3>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.68, margin: 0 }}>
                {t('whyAirx.card2Desc')}
              </p>
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 20, flexWrap: 'wrap' }}>
              {['iOS', 'Android', 'Web'].map(p => (
                <span key={p} style={{
                  fontSize: 11, fontWeight: 700, color: '#003C75',
                  background: 'rgba(0,60,117,0.07)',
                  border: '1px solid rgba(0,60,117,0.1)',
                  padding: '4px 10px', borderRadius: 100,
                  letterSpacing: '0.02em',
                }}>{p}</span>
              ))}
            </div>
          </motion.div>

          {/* Kart 3 — 1 Günde Kurulum */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            style={{
              background: '#fff',
              borderRadius: 24,
              padding: '32px 30px',
              border: '1px solid rgba(0,60,117,0.08)',
              boxShadow: '0 4px 32px rgba(0,60,117,0.07)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', right: -30, bottom: -30, width: 140, height: 140, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,60,117,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: 'linear-gradient(135deg, #003C75 0%, #1a6aaa 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20,
              boxShadow: '0 6px 16px rgba(0,60,117,0.25)',
            }}>
              <ZapIcon color="#fff" />
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
              {t('whyAirx.card3Title')}
            </h3>
            <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.68, margin: '0 0 20px' }}>
              {t('whyAirx.card3Desc')}
            </p>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'rgba(0,60,117,0.05)',
              border: '1px solid rgba(0,60,117,0.1)',
              padding: '8px 14px', borderRadius: 10,
              position: 'relative', zIndex: 1,
            }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#79ACDC', flexShrink: 0, boxShadow: '0 0 6px rgba(121,172,220,0.6)' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#003C75' }}>{t('whyAirx.card3Note')}</span>
            </div>
          </motion.div>

          {/* Kart 4 — Gerçek Zamanlı Analitik */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.17 }}
            style={{
              background: '#fff',
              borderRadius: 24,
              padding: '32px 30px',
              border: '1px solid rgba(0,60,117,0.08)',
              boxShadow: '0 4px 32px rgba(0,60,117,0.07)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #003C75, #79ACDC)', borderRadius: '24px 24px 0 0' }} />
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: 'linear-gradient(135deg, #003C75 0%, #1a6aaa 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20,
              boxShadow: '0 6px 16px rgba(0,60,117,0.25)',
            }}>
              <BarChartIcon color="#fff" />
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
              {t('whyAirx.card4Title')}
            </h3>
            <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.68, margin: '0 0 20px' }}>
              {t('whyAirx.card4Desc')}
            </p>
            <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: 40 }}>
              {[40, 65, 50, 88, 60, 80, 55].map((h, i) => (
                <div key={i} style={{
                  flex: 1, borderRadius: '4px 4px 0 0',
                  height: `${h}%`,
                  background: i === 3
                    ? 'linear-gradient(180deg, #003C75, #1a6aaa)'
                    : i === 5
                    ? 'linear-gradient(180deg, #79ACDC, #b8d4ec)'
                    : 'rgba(0,60,117,0.1)',
                  transition: 'all 0.3s',
                }} />
              ))}
            </div>
          </motion.div>

          {/* Kart 5 — Her Ölçeğe Uygun */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.22 }}
            style={{
              background: 'linear-gradient(135deg, #eef4fb 0%, #dbeeff 100%)',
              borderRadius: 24,
              padding: '32px 30px',
              border: '1px solid rgba(0,60,117,0.1)',
              boxShadow: '0 4px 32px rgba(0,60,117,0.07)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', right: -40, top: -40, width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,60,117,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: 'linear-gradient(135deg, #003C75 0%, #1a6aaa 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20,
              boxShadow: '0 6px 16px rgba(0,60,117,0.25)',
            }}>
              <BuildingIcon color="#fff" />
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
              {t('whyAirx.card5Title')}
            </h3>
            <p style={{ fontSize: 13, color: '#4a6080', lineHeight: 1.68, margin: '0 0 20px' }}>
              {t('whyAirx.card5Desc')}
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
              {[
                { label: isTr ? 'Kobi' : 'SME', h: 24, color: 'rgba(0,60,117,0.18)' },
                { label: isTr ? 'Orta' : 'Mid', h: 36, color: 'rgba(0,60,117,0.45)' },
                { label: isTr ? 'Kurumsal' : 'Enterprise', h: 48, color: '#003C75' },
              ].map(({ label, h, color }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', flex: 1 }}>
                  <div style={{ width: '100%', height: h, borderRadius: 6, background: color }} />
                  <span style={{ fontSize: 10, color: '#003C75', fontWeight: 600, opacity: 0.7 }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .why-card-wide,
          .why-card-full {
            grid-column: span 1 !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
            padding: 28px 24px !important;
          }
          .why-card-watermark { display: none !important; }
        }
        @media (max-width: 480px) {
          .why-card-wide,
          .why-card-full {
            padding: 24px 20px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .why-card-wide,
          .why-card-full { grid-column: span 2 !important; }
        }
      `}</style>
    </section>
  )
}
