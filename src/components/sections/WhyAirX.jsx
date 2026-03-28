import { motion } from 'framer-motion'

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
  return (
    <section id="neden" style={{ padding: '96px 24px', background: 'transparent' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>

        {/* ── Başlık ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 'clamp(22px, 3vw, 32px)',
            color: '#79ACDC',
            marginBottom: 14,
            letterSpacing: '-0.01em',
          }}>Neden AirX?</div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700, color: '#003C75',
            margin: '0 0 14px', lineHeight: 1.15,
          }}>
            Farkı Hisseden Bir Platform
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
            Gereksiz karmaşıklık yok. Kurumunuza özel, güvenli ve kullanımı kolay İK yönetimi.
          </p>
        </motion.div>

        {/* ── Bento Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto auto auto',
          gap: 14,
        }}>

          {/* Kart 1 — BÜYÜK KOYU (2 col) — Biyometrik Veri Yok */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0 }}
            style={{
              gridColumn: 'span 2',
              background: '#003C75',
              borderRadius: 22,
              padding: '36px 40px',
              display: 'flex', alignItems: 'center', gap: 36,
              position: 'relative', overflow: 'hidden',
              minHeight: 210,
            }}
          >
            {/* Dekoratif daireler */}
            <div style={{ position: 'absolute', right: -40, top: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(121,172,220,0.08)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 60, bottom: -60, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

            {/* İkon */}
            <div style={{
              width: 88, height: 88, borderRadius: 24, flexShrink: 0,
              background: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(4px)',
            }}>
              <FingerprintOffIcon size={38} color="#fff" />
            </div>

            {/* Metin */}
            <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(121,172,220,0.18)',
                border: '1px solid rgba(121,172,220,0.3)',
                color: '#79ACDC', fontSize: 12, fontWeight: 600,
                padding: '4px 12px', borderRadius: 100, marginBottom: 14,
              }}>
                <CheckIcon />
                KVKK Uyumlu
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: '#fff', margin: '0 0 10px', lineHeight: 1.2 }}>
                Biyometrik Veri Gerektirmez
              </h3>
              <p style={{ fontSize: 15, color: 'rgba(219,238,255,0.75)', lineHeight: 1.65, margin: 0, maxWidth: 400 }}>
                Parmak izi, yüz tanıma veya retina taraması yok. Çalışanlarınızın kişisel biyometrik verisi sisteme hiçbir zaman girmez. Mobil QR kod yeterli.
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
              borderRadius: 22,
              padding: '30px 28px',
              border: '1px solid rgba(0,60,117,0.08)',
              boxShadow: '0 4px 24px rgba(0,60,117,0.06)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
          >
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: 'linear-gradient(135deg, rgba(0,60,117,0.07), rgba(121,172,220,0.12))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20,
            }}>
              <SmartphoneIcon />
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>
                Tam Mobil Uyumlu
              </h3>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                iOS ve Android uygulaması ile çalışanlar tüm işlemlerini akıllı telefonlarından yapar.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 20, flexWrap: 'wrap' }}>
              {['iOS', 'Android', 'Web'].map(p => (
                <span key={p} style={{
                  fontSize: 12, fontWeight: 600, color: '#003C75',
                  background: 'rgba(0,60,117,0.06)',
                  padding: '4px 10px', borderRadius: 100,
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
              borderRadius: 22,
              padding: '30px 28px',
              border: '1px solid rgba(0,60,117,0.08)',
              boxShadow: '0 4px 24px rgba(0,60,117,0.06)',
            }}
          >
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: 'linear-gradient(135deg, rgba(0,60,117,0.07), rgba(121,172,220,0.12))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20,
            }}>
              <ZapIcon />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>
              1 Günde Kurulum
            </h3>
            <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65, margin: '0 0 20px' }}>
              Ekstra donanım gerekmez. Sistemi bir günde kurun, hemen kullanmaya başlayın.
            </p>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'rgba(34,197,94,0.08)',
              padding: '8px 14px', borderRadius: 10,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: '#15803d' }}>Donanım satın almanıza gerek yok</span>
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
              borderRadius: 22,
              padding: '30px 28px',
              border: '1px solid rgba(0,60,117,0.08)',
              boxShadow: '0 4px 24px rgba(0,60,117,0.06)',
            }}
          >
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: 'linear-gradient(135deg, rgba(0,60,117,0.07), rgba(121,172,220,0.12))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20,
            }}>
              <BarChartIcon />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>
              Gerçek Zamanlı Analitik
            </h3>
            <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65, margin: '0 0 20px' }}>
              Dashboard, grafikler ve özelleştirilebilir raporlarla anlık kararlar alın.
            </p>
            {/* Mini bar chart */}
            <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 36 }}>
              {[55, 75, 60, 90, 70, 85, 65].map((h, i) => (
                <div key={i} style={{
                  flex: 1, borderRadius: '3px 3px 0 0',
                  height: `${h}%`,
                  background: i === 3 ? '#003C75' : 'rgba(0,60,117,0.12)',
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
              background: '#fff',
              borderRadius: 22,
              padding: '30px 28px',
              border: '1px solid rgba(0,60,117,0.08)',
              boxShadow: '0 4px 24px rgba(0,60,117,0.06)',
            }}
          >
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: 'linear-gradient(135deg, rgba(0,60,117,0.07), rgba(121,172,220,0.12))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20,
            }}>
              <BuildingIcon />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>
              Her Ölçeğe Uygun
            </h3>
            <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65, margin: '0 0 20px' }}>
              10 kişilik işletmeden 10.000 kişilik kuruma. Büyüdükçe sizinle ölçeklenir.
            </p>
            {/* Scale visual */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {[
                { label: 'SMB', w: 28 },
                { label: 'Mid', w: 48 },
                { label: 'Enterprise', w: 72 },
              ].map(({ label, w }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                  <div style={{ width: w, height: 6, borderRadius: 3, background: 'rgba(0,60,117,0.15)' }}>
                    <div style={{ width: '100%', height: '100%', borderRadius: 3, background: '#003C75' }} />
                  </div>
                  <span style={{ fontSize: 10, color: '#94a3b8', fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Kart 6 — TAM GENIŞLIK — 14 Modül */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.27 }}
            style={{
              gridColumn: 'span 3',
              background: 'linear-gradient(135deg, rgba(0,60,117,0.05) 0%, rgba(121,172,220,0.10) 100%)',
              border: '1px solid rgba(0,60,117,0.10)',
              borderRadius: 22,
              padding: '36px 40px',
              display: 'flex', alignItems: 'center', gap: 48,
              position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Watermark "14" */}
            <div style={{
              position: 'absolute', right: 32, top: '50%',
              transform: 'translateY(-50%)',
              fontSize: 140, fontWeight: 900,
              color: 'rgba(0,60,117,0.05)',
              lineHeight: 1, pointerEvents: 'none',
              userSelect: 'none',
            }}>14</div>

            <div style={{ flexShrink: 0 }}>
              <div style={{
                width: 64, height: 64, borderRadius: 18,
                background: '#003C75',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 14,
              }}>
                <LayersIcon size={28} color="#fff" />
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#003C75', lineHeight: 1 }}>14</div>
              <div style={{ fontSize: 13, color: '#64748b', fontWeight: 500, marginTop: 4 }}>Entegre Modül</div>
            </div>

            <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#003C75', margin: '0 0 8px' }}>
                Tek Platformda Her Şey
              </h3>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65, margin: '0 0 20px', maxWidth: 400 }}>
                Farklı yazılımlara abone olmak yerine tüm İK süreçlerinizi tek çatı altında yönetin.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {MODULE_CHIPS.map((chip, i) => (
                  <span key={chip} style={{
                    fontSize: 12, fontWeight: 600,
                    color: i === MODULE_CHIPS.length - 1 ? '#003C75' : '#475569',
                    background: i === MODULE_CHIPS.length - 1 ? 'rgba(0,60,117,0.08)' : 'rgba(255,255,255,0.85)',
                    border: '1px solid rgba(0,60,117,0.10)',
                    padding: '5px 12px', borderRadius: 100,
                  }}>{chip}</span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #neden [style*="grid-column: span 2"],
          #neden [style*="span 2"],
          #neden [style*="span 3"] {
            grid-column: span 1 !important;
          }
          #neden > div > div:last-child {
            flex-direction: column !important;
            gap: 20px !important;
          }
          #neden [style*="repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          #neden [style*="repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #neden [style*="span 3"] {
            grid-column: span 2 !important;
          }
        }
      `}</style>
    </section>
  )
}
