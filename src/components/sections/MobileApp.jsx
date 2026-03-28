import { motion } from 'framer-motion'

const BULLETS = [
  { text: 'Tek tuşla giriş-çıkış',         color: '#003C75', bg: 'rgba(0,60,117,0.07)'   },
  { text: 'Anlık push bildirimleri',        color: '#0369a1', bg: 'rgba(3,105,161,0.07)'  },
  { text: 'Konum doğrulamalı işlemler',     color: '#7c3aed', bg: 'rgba(124,58,237,0.07)' },
  { text: 'Offline mod desteği',            color: '#15803d', bg: 'rgba(34,197,94,0.07)'  },
]

function PhoneMockup() {
  return (
    <div style={{ position: 'relative', flexShrink: 0 }}>

      {/* Arka glow */}
      <div style={{
        position: 'absolute',
        left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 340, height: 420,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,60,117,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'blur(24px)',
      }} />

      {/* Yüzen bildirim kartı */}
      <motion.div
        initial={{ opacity: 0, x: 24, y: -8 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: 72, right: -88,
          zIndex: 20,
          background: '#fff',
          borderRadius: 18,
          padding: '10px 14px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.13), 0 1px 0 rgba(255,255,255,0.8) inset',
          display: 'flex', alignItems: 'center', gap: 10,
          width: 168,
          border: '1px solid rgba(0,60,117,0.06)',
        }}
      >
        <div style={{
          width: 34, height: 34, borderRadius: 10, flexShrink: 0,
          background: 'rgba(34,197,94,0.10)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16,
        }}>✅</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>İzin Onaylandı</div>
          <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 2 }}>Az önce</div>
        </div>
      </motion.div>

      {/* Yüzen badge — alt sol */}
      <motion.div
        initial={{ opacity: 0, x: -24, y: 8 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          bottom: 110, left: -80,
          zIndex: 20,
          background: '#003C75',
          borderRadius: 14,
          padding: '10px 14px',
          boxShadow: '0 8px 24px rgba(0,60,117,0.35)',
          display: 'flex', alignItems: 'center', gap: 8,
          width: 148,
        }}
      >
        <div style={{
          width: 28, height: 28, borderRadius: 8, flexShrink: 0,
          background: 'rgba(255,255,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13,
        }}>👥</div>
        <div>
          <div style={{ fontSize: 10, color: 'rgba(219,238,255,0.7)', fontWeight: 500 }}>Aktif Personel</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#fff' }}>1.284</div>
        </div>
      </motion.div>

      {/* Telefon gövdesi */}
      <div style={{
        width: 264,
        height: 540,
        borderRadius: 54,
        background: '#0d1117',
        border: '7px solid #1a2540',
        position: 'relative',
        zIndex: 1,
        boxShadow: `
          0 0 0 1px rgba(255,255,255,0.06),
          inset 0 0 0 1px rgba(255,255,255,0.04),
          0 40px 80px rgba(0,0,0,0.45),
          0 8px 32px rgba(0,60,117,0.25)
        `,
        transform: 'perspective(1100px) rotateY(-10deg) rotateX(3deg)',
      }}>

        {/* Sol — ses butonları */}
        <div style={{ position: 'absolute', left: -9, top: 90,  width: 3.5, height: 28, background: '#1a2540', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -9, top: 130, width: 3.5, height: 28, background: '#1a2540', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -9, top: 170, width: 3.5, height: 28, background: '#1a2540', borderRadius: '2px 0 0 2px' }} />

        {/* Sağ — güç butonu */}
        <div style={{ position: 'absolute', right: -9, top: 115, width: 3.5, height: 52, background: '#1a2540', borderRadius: '0 2px 2px 0' }} />

        {/* Ekran */}
        <div style={{
          position: 'absolute', inset: 2,
          borderRadius: 48,
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          background: '#f0f4f8',
        }}>

          {/* Status bar */}
          <div style={{
            height: 46,
            background: '#003C75',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '0 22px 9px',
            flexShrink: 0,
            position: 'relative',
          }}>
            <span style={{ color: 'rgba(255,255,255,0.95)', fontSize: 11, fontWeight: 700 }}>09:41</span>

            {/* Dynamic Island */}
            <div style={{
              position: 'absolute',
              top: 8, left: '50%',
              transform: 'translateX(-50%)',
              width: 96, height: 26,
              borderRadius: 13,
              background: '#0d1117',
              zIndex: 5,
            }} />

            <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: 1.5, alignItems: 'flex-end' }}>
                {[4, 6, 8, 10].map((h, i) => (
                  <div key={i} style={{
                    width: 2.5, height: h, borderRadius: 1,
                    background: i < 3 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                  }} />
                ))}
              </div>
              <div style={{ width: 18, height: 9, borderRadius: 2, border: '1.5px solid rgba(255,255,255,0.55)', position: 'relative' }}>
                <div style={{ position: 'absolute', left: 1.5, top: 1.5, width: '65%', bottom: 1.5, background: 'rgba(255,255,255,0.8)', borderRadius: 0.5 }} />
              </div>
            </div>
          </div>

          {/* App header */}
          <div style={{
            background: '#003C75',
            padding: '8px 18px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}>
            <div>
              <div style={{ fontSize: 11, color: 'rgba(219,238,255,0.65)', fontWeight: 500 }}>Merhaba,</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>Ahmet Yılmaz</div>
            </div>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(121,172,220,0.2)',
              border: '2px solid rgba(121,172,220,0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#79ACDC', fontSize: 14, fontWeight: 800,
            }}>A</div>
          </div>

          {/* Content */}
          <div style={{ flex: 1, padding: '12px 12px 0', display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden' }}>

            {/* Giriş kartı */}
            <div style={{
              background: '#fff',
              borderRadius: 18,
              padding: '14px 14px 12px',
              boxShadow: '0 2px 12px rgba(0,60,117,0.08)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#15803d' }}>Çevrimiçi</span>
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 700, color: '#003C75',
                  background: 'rgba(0,60,117,0.07)',
                  padding: '3px 8px', borderRadius: 6,
                }}>08:30</span>
              </div>
              <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 11 }}>📍 Merkez Ofis · İstanbul</div>
              <button style={{
                width: '100%',
                background: 'linear-gradient(135deg, #003C75 0%, #1a6aaa 100%)',
                color: '#fff', border: 'none',
                borderRadius: 11, padding: '10px 0',
                fontSize: 13, fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0,60,117,0.32)',
              }}>
                Giriş Yap
              </button>
            </div>

            {/* Hızlı işlemler */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#94a3b8', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                Hızlı İşlemler
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
                {[
                  { label: 'İzin',     bg: 'rgba(14,165,233,0.09)',  color: '#0369a1',
                    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg> },
                  { label: 'Görev',    bg: 'rgba(34,197,94,0.09)',   color: '#15803d',
                    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
                  { label: 'Vardiya',  bg: 'rgba(168,85,247,0.09)',  color: '#7c3aed',
                    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg> },
                  { label: 'Raporlar', bg: 'rgba(0,60,117,0.07)',    color: '#003C75',
                    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg> },
                ].map(a => (
                  <div key={a.label} style={{
                    background: a.bg, borderRadius: 12,
                    padding: '10px 8px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
                  }}>
                    {a.svg}
                    <span style={{ fontSize: 10, color: a.color, fontWeight: 700 }}>{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default function MobileApp() {
  return (
    <section id="mobil" style={{ padding: '96px 24px', background: 'transparent', overflow: 'hidden' }}>
      <div style={{
        maxWidth: 1160,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: 80,
      }} className="mobile-split">

        {/* Sol — Metin */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1, minWidth: 280 }}
        >
          <div style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 'clamp(22px, 3vw, 32px)',
            color: '#79ACDC',
            marginBottom: 14,
            letterSpacing: '-0.01em',
          }}>
            Mobil Uygulama
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700, color: '#003C75',
            margin: '0 0 18px', lineHeight: 1.15,
          }}>
            Her Şey Cebinizde
          </h2>

          <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.72, marginBottom: 32, maxWidth: 420 }}>
            iOS ve Android uygulaması ile personelleriniz giriş-çıkış yapabilir, izin talep edebilir, görevlerini görebilir. Yöneticiler tüm onayları mobilden verebilir.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 36 }}>
            {BULLETS.map((b, i) => (
              <motion.div
                key={b.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                style={{ display: 'flex', alignItems: 'center', gap: 12 }}
              >
                <div style={{
                  width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                  background: b.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                <span style={{ fontSize: 15, color: '#374151', fontWeight: 500 }}>{b.text}</span>
              </motion.div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn-glass" style={{ fontSize: 15, padding: '13px 28px', cursor: 'pointer', borderRadius: 9999 }}>
              Uygulamayı İncele
            </button>
            <button className="btn-outline" style={{ fontSize: 15, padding: '13px 24px', cursor: 'pointer', borderRadius: 9999 }}>
              Demo Talep Et
            </button>
          </div>
        </motion.div>

        {/* Sağ — Telefon */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', justifyContent: 'center', paddingRight: 56, paddingLeft: 20 }}
        >
          <PhoneMockup />
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .mobile-split {
            flex-direction: column !important;
            gap: 60px !important;
            text-align: center;
          }
          .mobile-split > div:last-child {
            padding-right: 0 !important;
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
