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

      {/* Ambient glow — arkası */}
      <div style={{
        position: 'absolute',
        left: '50%', top: '55%',
        transform: 'translate(-50%, -50%)',
        width: 400, height: 500,
        background: 'radial-gradient(ellipse, rgba(0,60,117,0.28) 0%, rgba(121,172,220,0.1) 45%, transparent 70%)',
        filter: 'blur(48px)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        left: '35%', top: '22%',
        transform: 'translate(-50%, -50%)',
        width: 180, height: 180,
        background: 'radial-gradient(circle, rgba(121,172,220,0.2) 0%, transparent 70%)',
        filter: 'blur(28px)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Yüzen bildirim kartı — sağ üst */}
      <motion.div
        initial={{ opacity: 0, x: 24, y: -8 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: 80, right: -104,
          zIndex: 20,
          background: 'rgba(255,255,255,0.97)',
          borderRadius: 16,
          padding: '10px 14px',
          boxShadow: '0 16px 48px rgba(0,0,0,0.14), 0 1px 0 rgba(255,255,255,0.9) inset',
          display: 'flex', alignItems: 'center', gap: 10,
          width: 172,
          border: '1px solid rgba(0,60,117,0.05)',
        }}
      >
        <div style={{
          width: 36, height: 36, borderRadius: 10, flexShrink: 0,
          background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>İzin Onaylandı</div>
          <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 2 }}>Az önce</div>
        </div>
      </motion.div>

      {/* Yüzen stat kartı — sol alt */}
      <motion.div
        initial={{ opacity: 0, x: -24, y: 8 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          bottom: 128, left: -100,
          zIndex: 20,
          background: 'linear-gradient(135deg, #002e5c 0%, #004d99 100%)',
          borderRadius: 16,
          padding: '12px 16px',
          boxShadow: '0 16px 40px rgba(0,60,117,0.5), 0 1px 0 rgba(255,255,255,0.08) inset',
          display: 'flex', alignItems: 'center', gap: 10,
          width: 158,
          border: '1px solid rgba(121,172,220,0.18)',
        }}
      >
        <div style={{
          width: 32, height: 32, borderRadius: 9, flexShrink: 0,
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(219,238,255,0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 10, color: 'rgba(219,238,255,0.6)', fontWeight: 500, marginBottom: 2 }}>Aktif Personel</div>
          <div style={{ fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>1.284</div>
        </div>
      </motion.div>

      {/* Telefon gövdesi */}
      <div style={{ perspective: '1200px' }}>
      <motion.div
        initial={{ rotateY: -8, rotateX: 2 }}
        whileInView={{ rotateY: [-8, 180, 352], rotateX: [2, -1, 2] }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.85, ease: [0.4, 0, 0.15, 1] }}
        style={{
          width: 268,
          height: 548,
          borderRadius: 52,
          background: 'linear-gradient(160deg, #1c2438 0%, #0d1117 100%)',
          border: '7.5px solid #1a2540',
          position: 'relative',
          zIndex: 1,
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.07),
            inset 0 0 0 1px rgba(255,255,255,0.04),
            0 48px 96px rgba(0,0,0,0.55),
            0 8px 32px rgba(0,60,117,0.3),
            0 0 0 0.5px rgba(121,172,220,0.12)
          `,
        }}>

        {/* Sol — ses butonları */}
        <div style={{ position: 'absolute', left: -10, top: 92,  width: 3.5, height: 26, background: '#1e2940', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -10, top: 128, width: 3.5, height: 26, background: '#1e2940', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -10, top: 164, width: 3.5, height: 26, background: '#1e2940', borderRadius: '2px 0 0 2px' }} />

        {/* Sağ — güç butonu */}
        <div style={{ position: 'absolute', right: -10, top: 118, width: 3.5, height: 50, background: '#1e2940', borderRadius: '0 2px 2px 0' }} />

        {/* Ekran */}
        <div style={{
          position: 'absolute', inset: 2,
          borderRadius: 46,
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          background: '#0f172a',
        }}>

          {/* Status bar */}
          <div style={{
            height: 48,
            background: 'linear-gradient(180deg, #001428 0%, #001e40 100%)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '0 22px 10px',
            flexShrink: 0,
            position: 'relative',
          }}>
            <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 11, fontWeight: 700, letterSpacing: '0.02em' }}>09:41</span>

            {/* Dynamic Island */}
            <div style={{
              position: 'absolute',
              top: 8, left: '50%',
              transform: 'translateX(-50%)',
              width: 90, height: 26,
              borderRadius: 13,
              background: '#000',
              zIndex: 5,
            }} />

            <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: 1.5, alignItems: 'flex-end' }}>
                {[4, 6, 8, 10].map((h, i) => (
                  <div key={i} style={{
                    width: 2.5, height: h, borderRadius: 1,
                    background: i < 3 ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.22)',
                  }} />
                ))}
              </div>
              <div style={{ width: 18, height: 9, borderRadius: 2, border: '1.5px solid rgba(255,255,255,0.4)', position: 'relative' }}>
                <div style={{ position: 'absolute', left: 1.5, top: 1.5, width: '65%', bottom: 1.5, background: 'rgba(255,255,255,0.7)', borderRadius: 0.5 }} />
              </div>
            </div>
          </div>

          {/* App header */}
          <div style={{
            background: 'linear-gradient(180deg, #001e40 0%, #001530 100%)',
            padding: '10px 18px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}>
            <div>
              <div style={{ fontSize: 11, color: 'rgba(121,172,220,0.6)', fontWeight: 500, letterSpacing: '0.03em' }}>Hoş geldin</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>Ahmet Yılmaz</div>
            </div>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'linear-gradient(135deg, #003C75 0%, #1a6aaa 100%)',
              border: '2px solid rgba(121,172,220,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 13, fontWeight: 800,
            }}>A</div>
          </div>

          {/* Content */}
          <div style={{ flex: 1, background: '#0f172a', padding: '11px 11px 0', display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden' }}>

            {/* Giriş kartı */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0,60,117,0.65) 0%, rgba(0,35,80,0.65) 100%)',
              borderRadius: 16,
              padding: '12px 14px',
              border: '1px solid rgba(121,172,220,0.16)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 9 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px rgba(34,197,94,0.7)' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#4ade80' }}>Çevrimiçi</span>
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 700, color: '#79ACDC',
                  background: 'rgba(121,172,220,0.12)',
                  padding: '3px 8px', borderRadius: 6,
                  border: '1px solid rgba(121,172,220,0.18)',
                }}>08:30</span>
              </div>
              <div style={{ fontSize: 11, color: 'rgba(219,238,255,0.45)', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 5 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(219,238,255,0.45)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Merkez Ofis · İstanbul
              </div>
              <button style={{
                width: '100%',
                background: 'linear-gradient(135deg, #003C75 0%, #005cb5 100%)',
                color: '#fff', border: 'none',
                borderRadius: 10, padding: '9px 0',
                fontSize: 12, fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(0,60,117,0.55)',
                letterSpacing: '0.02em',
              }}>
                Giriş Yap
              </button>
            </div>

            {/* Hızlı işlemler */}
            <div>
              <div style={{ fontSize: 9.5, fontWeight: 700, color: 'rgba(121,172,220,0.4)', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.09em' }}>
                Hızlı İşlemler
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
                {[
                  { label: 'İzin', bg: 'rgba(14,165,233,0.1)', border: 'rgba(14,165,233,0.18)', color: '#38bdf8',
                    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg> },
                  { label: 'Görevler', bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.18)', color: '#4ade80',
                    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
                  { label: 'Vardiya', bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.18)', color: '#c084fc',
                    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg> },
                  { label: 'Raporlar', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.18)', color: '#fbbf24',
                    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg> },
                ].map(a => (
                  <div key={a.label} style={{
                    background: a.bg,
                    border: `1px solid ${a.border}`,
                    borderRadius: 12,
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

          {/* Bottom nav */}
          <div style={{
            height: 52,
            background: '#0a1120',
            borderTop: '1px solid rgba(121,172,220,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingBottom: 4,
            flexShrink: 0,
          }}>
            {[
              { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, active: true },
              { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, active: false },
              { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, active: false },
              { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>, active: false },
            ].map((item, i) => (
              <div key={i} style={{
                color: item.active ? '#79ACDC' : 'rgba(255,255,255,0.22)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
              }}>
                {item.svg}
                {item.active && <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#79ACDC' }} />}
              </div>
            ))}
          </div>

        </div>
      </motion.div>
      </div>
    </div>
  )
}

export default function MobileApp() {
  return (
    <section id="mobil" style={{ padding: '96px 24px', background: 'linear-gradient(180deg, #f4f8fd 0%, #ffffff 100%)', overflow: 'hidden' }}>
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
