import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

/* ── İkonlar ── */
const NoFingerprintIcon = ({ size = 26, color = '#003C75' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
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

const ShieldCheckIcon = ({ size = 26, color = '#003C75' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
)

const LockIcon = ({ size = 26, color = '#003C75' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const ServerIcon = ({ size = 26, color = '#003C75' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2"/>
    <rect x="2" y="14" width="20" height="8" rx="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/>
    <line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
)

const PILLAR_META = [
  { Icon: NoFingerprintIcon, accent: '#0369a1', accentBg: 'rgba(3,105,161,0.07)', key: 'pillar1' },
  { Icon: ShieldCheckIcon,   accent: '#15803d', accentBg: 'rgba(34,197,94,0.07)',  key: 'pillar2' },
  { Icon: LockIcon,          accent: '#7c3aed', accentBg: 'rgba(124,58,237,0.07)', key: 'pillar3' },
  { Icon: ServerIcon,        accent: '#b45309', accentBg: 'rgba(180,83,9,0.07)',   key: 'pillar4' },
]

export default function Security() {
  const { t } = useTranslation()

  const CERT_ITEMS = [
    t('security.cert1'), t('security.cert2'), t('security.cert3'),
    t('security.cert4'), t('security.cert5'),
  ]

  const TRUST_STATS = [
    { value: t('security.stat1Value'), label: t('security.stat1Label') },
    { value: t('security.stat2Value'), label: t('security.stat2Label') },
    { value: t('security.stat3Value'), label: t('security.stat3Label') },
  ]

  const TRUST_BAR = [
    { labelKey: 'trust1', color: '#003C75',
      svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg> },
    { labelKey: 'trust2', color: '#15803d',
      svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
    { labelKey: 'trust3', color: '#0369a1',
      svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg> },
    { labelKey: 'trust4', color: '#7c3aed',
      svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  ]
  return (
    <section id="guvenlik" style={{ padding: '96px 24px', background: 'linear-gradient(180deg, #ffffff 0%, #f0f5fc 100%)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>

        {/* ── Başlık ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700, color: '#003C75',
            margin: '0 0 14px', lineHeight: 1.15,
          }}>
            {t('security.title')}
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 460, margin: '0 auto', lineHeight: 1.65 }}>
            {t('security.subtitle')}
          </p>
        </motion.div>

        {/* ── Split Layout ── */}
        <div style={{ display: 'flex', gap: 20, alignItems: 'stretch' }} className="security-split">

          {/* Sol — Sertifika Kartı */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              flex: '0 0 340px',
              background: '#003C75',
              borderRadius: 24,
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}
            className="security-card-primary"
          >
            {/* Dekoratif daireler */}
            <div style={{ position: 'absolute', right: -50, top: -50, width: 200, height: 200, borderRadius: '50%', background: 'rgba(121,172,220,0.08)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', left: -30, bottom: -30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

            {/* Büyük kalkan ikonu */}
            <div style={{
              width: 72, height: 72, borderRadius: 20,
              background: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.14)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 24,
            }}>
              <ShieldCheckIcon size={36} color="#fff" />
            </div>

            <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 24 }}>
              {t('security.cardTitle')}
            </div>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28, flex: 1 }}>
              {CERT_ITEMS.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                >
                  <div style={{
                    width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                    background: 'rgba(121,172,220,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#79ACDC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: 13, color: 'rgba(219,238,255,0.85)', fontWeight: 500 }}>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats üçlüsü */}
            <div style={{
              display: 'flex',
              borderTop: '1px solid rgba(255,255,255,0.10)',
              paddingTop: 20,
              gap: 0,
            }} className="security-trust-stats">
              {TRUST_STATS.map((s, i) => (
                <div key={s.label} style={{
                  flex: 1, textAlign: 'center',
                  borderRight: i < TRUST_STATS.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none',
                  padding: '0 8px',
                }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: 'rgba(219,238,255,0.5)', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sağ — 2x2 Pillar Grid */}
          <div style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 14,
          }} className="security-grid">
            {PILLAR_META.map((pillar, i) => (
              <motion.div
                key={pillar.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ default: { duration: 0.5, delay: 0.1 + i * 0.09 }, y: { duration: 0.2, ease: 'easeOut' }, boxShadow: { duration: 0.2, ease: 'easeOut' } }}
                whileHover={{ y: -4, boxShadow: '0 14px 40px rgba(0,60,117,0.11)' }}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,60,117,0.08)',
                  borderRadius: 20,
                  padding: '26px 24px',
                  boxShadow: '0 2px 14px rgba(0,60,117,0.05)',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Sol accent çizgisi */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, bottom: 0,
                  width: 3, background: pillar.accent,
                  borderRadius: '20px 0 0 20px', opacity: 0.5,
                }} />

                <div style={{
                  width: 48, height: 48, borderRadius: 13,
                  background: pillar.accentBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <pillar.Icon color={pillar.accent} />
                </div>

                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', margin: '0 0 8px', lineHeight: 1.3 }}>
                  {t(`security.${pillar.key}Title`)}
                </h3>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                  {t(`security.${pillar.key}Desc`)}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ── Trust Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            marginTop: 20,
            background: '#fff',
            border: '1px solid rgba(0,60,117,0.08)',
            borderRadius: 16,
            padding: '16px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '6px 0',
          }}
        >
          {TRUST_BAR.map((item, i, arr) => (
            <div key={item.labelKey} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                {item.svg}
                <span style={{ fontSize: 13, fontWeight: 600, color: '#475569' }}>{t(`security.${item.labelKey}`)}</span>
              </div>
              {i < arr.length - 1 && (
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(0,60,117,0.18)' }} />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .security-split {
            flex-direction: column !important;
          }
          .security-split > div:first-child {
            flex: none !important;
          }
        }
        @media (max-width: 720px) {
          .security-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .security-card-primary {
            padding: 28px 22px !important;
          }
          .security-split {
            gap: 16px !important;
          }
          .security-trust-stats {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .security-trust-stats > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.10) !important;
            padding: 0 0 12px !important;
          }
          .security-trust-stats > div:last-child {
            border-bottom: none !important;
            padding-bottom: 0 !important;
          }
        }
        @media (max-width: 480px) {
          .security-trust-stats {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  )
}
