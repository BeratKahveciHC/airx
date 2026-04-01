import { motion } from 'framer-motion'

const ENTRY_METHODS = [
  {
    label: 'Beacon',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M6.9 6.9a6 6 0 0 0 0 10.2" />
        <path d="M17.1 6.9a6 6 0 0 1 0 10.2" />
        <path d="M4 4a10 10 0 0 0 0 16" />
        <path d="M20 4a10 10 0 0 1 0 16" />
      </svg>
    ),
  },
  {
    label: 'NFC',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-3.92-8.4-5.33-16.75-3.43" />
      </svg>
    ),
  },
  {
    label: 'Wi - Fi',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="#fff" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Remote',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'QR Kod',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="5" y="5" width="3" height="3" fill="#fff" stroke="none" />
        <rect x="16" y="5" width="3" height="3" fill="#fff" stroke="none" />
        <rect x="5" y="16" width="3" height="3" fill="#fff" stroke="none" />
        <path d="M14 14h3v3h-3z" />
        <path d="M17 17h4" />
        <path d="M17 21v-4" />
      </svg>
    ),
  },
  { label: null },
]

const NAV_ITEMS = [
  {
    label: 'Anasayfa',
    active: true,
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  },
  {
    label: 'Talepler',
    active: false,
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="9" x2="9" y2="21" /></svg>,
  },
  {
    label: 'Gelen Kutusu',
    active: false,
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  },
  {
    label: 'Profil',
    active: false,
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  },
]

function AirXLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
      <svg width="52" height="18" viewBox="0 0 120 36" fill="none">
        <text x="0" y="28" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="28" fill="#003C75" letterSpacing="-1">AiRX</text>
      </svg>
    </div>
  )
}

export default function PdksVisual({ accent = '#38bdf8' }) {
  return (
    <section className="pdks-visual-section" style={{ padding: '0 24px 96px', background: '#fff' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="pdks-visual-inner"
          style={{
            position: 'relative',
            borderRadius: 32,
            background: 'linear-gradient(160deg, #eef5ff 0%, #dbeeff 55%, #e4f0fd 100%)',
            border: '1px solid rgba(0,60,117,0.07)',
            boxShadow: '0 24px 80px rgba(0,40,100,0.08)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '72px 40px',
            minHeight: 560,
          }}
        >
          {/* arka plan dekor */}
          <div style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse, rgba(121,172,220,0.16) 0%, transparent 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -80, right: -80, width: 360, height: 360, borderRadius: '50%', background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: -60, left: -60, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,60,117,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

          {/* telefon */}
          <div style={{ perspective: '1000px', position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ rotateY: -6, rotateX: 2 }}
              whileInView={{ rotateY: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: 260,
                borderRadius: 48,
                background: 'linear-gradient(160deg, #e8f2fc 0%, #c2d9f0 100%)',
                border: '7px solid #8fb8dc',
                position: 'relative',
                boxShadow: `
                  0 0 0 1px rgba(255,255,255,0.7),
                  inset 0 0 0 1px rgba(255,255,255,0.5),
                  0 56px 110px rgba(0,30,80,0.32),
                  0 12px 40px rgba(0,60,117,0.22)
                `,
              }}
            >
              {/* yan butonlar */}
              <div style={{ position: 'absolute', left: -9, top: 88, width: 3, height: 24, background: '#003C75', borderRadius: '2px 0 0 2px' }} />
              <div style={{ position: 'absolute', left: -9, top: 122, width: 3, height: 24, background: '#003C75', borderRadius: '2px 0 0 2px' }} />
              <div style={{ position: 'absolute', right: -9, top: 112, width: 3, height: 48, background: '#003C75', borderRadius: '0 2px 2px 0' }} />

              {/* ekran içeriği */}
              <div style={{ borderRadius: 42, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#f0f6fc' }}>

                {/* status bar */}
                <div style={{ height: 36, background: 'linear-gradient(180deg, #b8d3ec 0%, #a8c6e4 100%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px', flexShrink: 0 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#002850' }}>09:41</span>
                  <div style={{ width: 70, height: 20, borderRadius: 10, background: '#003C75' }} />
                  <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
                      {[3, 5, 7, 9].map((h, i) => (
                        <div key={i} style={{ width: 2, height: h, borderRadius: 1, background: i < 3 ? '#002850' : 'rgba(0,40,80,0.3)' }} />
                      ))}
                    </div>
                    <div style={{ width: 16, height: 8, borderRadius: 2, border: '1.5px solid rgba(0,40,80,0.4)', position: 'relative' }}>
                      <div style={{ position: 'absolute', left: 1.5, top: 1.5, width: '60%', bottom: 1.5, background: 'rgba(0,40,80,0.6)', borderRadius: 0.5 }} />
                    </div>
                  </div>
                </div>

                {/* app header */}
                <div style={{ background: '#daeaf8', padding: '8px 16px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(0,60,117,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5" /><path d="m12 5-7 7 7 7" />
                    </svg>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#003C75', letterSpacing: '-0.01em' }}>AiRX</div>
                  <div style={{ width: 28 }} />
                </div>

                {/* giriş menüsü banner */}
                <div style={{ background: 'linear-gradient(135deg, #003C75 0%, #004f9a 100%)', padding: '10px 16px', textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', marginBottom: 3, letterSpacing: '-0.01em' }}>Giriş Menüsü</div>
                  <div style={{ fontSize: 9, color: 'rgba(219,238,255,0.72)', lineHeight: 1.4 }}>Lütfen size uygun olan giriş yapma seçeneğine tıklayınız</div>
                </div>

                {/* buton grid */}
                <div style={{ flex: 1, background: '#f0f6fc', padding: '12px 10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {ENTRY_METHODS.map((method, i) =>
                    method.label ? (
                      <motion.div
                        key={method.label}
                        initial={{ opacity: 0, scale: 0.88 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          background: 'linear-gradient(145deg, #1a4f8c 0%, #003C75 100%)',
                          borderRadius: 16,
                          padding: '14px 8px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 8,
                          boxShadow: '0 4px 16px rgba(0,30,80,0.22), inset 0 1px 0 rgba(255,255,255,0.12)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          minHeight: 80,
                        }}
                      >
                        {method.svg}
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '0.01em' }}>{method.label}</span>
                      </motion.div>
                    ) : (
                      <div key={i} style={{ borderRadius: 16, background: 'rgba(0,60,117,0.06)', border: '1px dashed rgba(0,60,117,0.12)', minHeight: 80 }} />
                    )
                  )}
                </div>

                {/* bottom nav */}
                <div style={{ background: '#fff', borderTop: '1px solid rgba(0,60,117,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '8px 0 10px', flexShrink: 0 }}>
                  {NAV_ITEMS.map((item) => (
                    <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, color: item.active ? '#003C75' : 'rgba(0,60,117,0.3)' }}>
                      {item.svg}
                      <span style={{ fontSize: 8, fontWeight: item.active ? 700 : 500 }}>{item.label}</span>
                      {item.active && <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#003C75' }} />}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* sağ taraf — etiketler */}
          <div style={{ position: 'absolute', right: 80, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 16 }} className="pdks-labels">
            {['Beacon', 'NFC', 'Wi-Fi', 'Remote', 'QR Kod'].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'rgba(255,255,255,0.88)',
                  border: '1px solid rgba(0,60,117,0.1)',
                  borderRadius: 12,
                  padding: '8px 14px',
                  boxShadow: '0 4px 16px rgba(0,40,100,0.07)',
                }}
              >
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: accent, flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: '#003C75' }}>{label}</span>
                <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 500 }}>Giriş Yöntemi</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .pdks-labels { display: none !important; }
        }
        @media (max-width: 768px) {
          .pdks-visual-section { padding: 0 16px 64px !important; }
          .pdks-visual-inner { padding: 40px 24px !important; border-radius: 20px !important; min-height: unset !important; }
        }
        @media (max-width: 480px) {
          .pdks-visual-section { padding: 0 12px 48px !important; }
          .pdks-visual-inner { padding: 28px 12px !important; border-radius: 16px !important; }
          .mobile-phone-shell { width: 220px !important; height: 450px !important; border-radius: 42px !important; border-width: 6px !important; }
        }
      `}</style>
    </section>
  )
}
