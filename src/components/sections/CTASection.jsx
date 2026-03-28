import { motion } from 'framer-motion'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
)

const STATS = [
  { value: '150+',   label: 'Aktif Kurum'   },
  { value: '15.000+',label: 'Kullanıcı'     },
  { value: '%99,9',  label: 'Uptime Garantisi' },
]

const PROMISES = [
  'Kredi kartı gerekmez',
  'Aynı gün kurulum',
  'Ücretsiz destek',
]

export default function CTASection() {
  return (
    <section id="demo" style={{
      padding: '100px 24px',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(140deg, #001428 0%, #002a55 35%, #003C75 65%, #00509e 100%)',
    }}>

      {/* ── Top divider glow ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent 0%, rgba(121,172,220,0.5) 25%, rgba(121,172,220,0.5) 75%, transparent 100%)',
        boxShadow: '0 0 18px 2px rgba(121,172,220,0.18)',
        pointerEvents: 'none', zIndex: 2,
      }} />

      {/* ── Grid desen ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(121,172,220,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(121,172,220,0.07) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
      }} />

      {/* ── Radyal glow'lar ── */}
      <div style={{
        position: 'absolute', top: -160, right: -160, width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(121,172,220,0.12) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: -120, left: -120, width: 420, height: 420,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,80,158,0.35) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ── İçerik ── */}
      <div style={{
        maxWidth: 1160, margin: '0 auto',
        position: 'relative', zIndex: 1,
        display: 'flex', alignItems: 'center', gap: 64,
      }} className="cta-split">

        {/* Sol — Metin & Butonlar */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: 1, minWidth: 0 }}
        >
          {/* Eyebrow */}
          <div style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            color: '#79ACDC',
            marginBottom: 16,
            letterSpacing: '-0.01em',
          }}>
            Hemen Başlayın
          </div>

          <h2 style={{
            fontSize: 'clamp(30px, 4.5vw, 52px)',
            fontWeight: 800,
            color: '#fff',
            margin: '0 0 20px',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}>
            İK Yönetimini
            <br />
            <span style={{ color: '#79ACDC' }}>Dijitalleştirin.</span>
          </h2>

          <p style={{
            fontSize: 17,
            color: 'rgba(219,238,255,0.70)',
            lineHeight: 1.72,
            margin: '0 0 36px',
            maxWidth: 460,
          }}>
            150'den fazla kurum AirX ile tüm İK süreçlerini tek platformda yönetiyor.
            Ücretsiz demo ile siz de keşfedin.
          </p>

          {/* Butonlar */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 28 }}>
            <motion.button
              whileHover={{ y: -3, boxShadow: '0 14px 40px rgba(0,0,0,0.25)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: '#fff',
                color: '#003C75',
                border: 'none',
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: 15,
                padding: '14px 32px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                transition: 'box-shadow 0.2s',
              }}
            >
              Ücretsiz Demo Al
              <ArrowIcon />
            </motion.button>

            <motion.button
              whileHover={{ y: -3, background: 'rgba(255,255,255,0.16)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'rgba(255,255,255,0.10)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: 9999,
                fontWeight: 600,
                fontSize: 15,
                padding: '14px 28px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                backdropFilter: 'blur(8px)',
                transition: 'background 0.2s',
              }}
            >
              İletişime Geç
            </motion.button>
          </div>

          {/* Küçük garantiler */}
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {PROMISES.map(p => (
              <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{
                  width: 18, height: 18, borderRadius: '50%',
                  background: 'rgba(121,172,220,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#79ACDC', flexShrink: 0,
                }}>
                  <CheckIcon />
                </div>
                <span style={{ fontSize: 13, color: 'rgba(219,238,255,0.65)', fontWeight: 500 }}>{p}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sağ — Sosyal Kanıt Paneli */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{
            flex: '0 0 320px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: 28,
            padding: '40px 36px',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Üst label */}
          <div style={{
            fontSize: 11, fontWeight: 700,
            color: 'rgba(219,238,255,0.45)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: 28,
          }}>
            Neden Tercih Ediliyor
          </div>

          {/* İstatistikler */}
          {STATS.map((s, i) => (
            <div key={s.label}>
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                style={{ padding: '16px 0' }}
              >
                <div style={{
                  fontSize: 'clamp(28px, 3.5vw, 38px)',
                  fontWeight: 900,
                  color: '#fff',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  marginBottom: 6,
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 13, color: 'rgba(219,238,255,0.55)', fontWeight: 500 }}>
                  {s.label}
                </div>
              </motion.div>
              {i < STATS.length - 1 && (
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
              )}
            </div>
          ))}

          {/* Instrument Serif alıntı */}
          <div style={{
            marginTop: 28,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: 'italic',
              fontSize: 15,
              color: 'rgba(219,238,255,0.65)',
              lineHeight: 1.65,
              marginBottom: 12,
            }}>
              "Kurulum sürecimiz 1 günden az sürdü. Artık tüm İK işlemlerimizi telefondan yönetiyoruz."
            </div>
            <div style={{ fontSize: 12, color: 'rgba(219,238,255,0.4)', fontWeight: 600 }}>
              — İK Müdürü, Lojistik Firması
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .cta-split {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .cta-split > div:last-child {
            flex: none !important;
            width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .cta-split { padding: 0 !important; }
          .cta-split > div:first-child > div { flex-direction: column !important; }
        }
      `}</style>
    </section>
  )
}
