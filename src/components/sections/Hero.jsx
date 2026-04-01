import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import logo from '../../assets/logo.png'

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

const STATS = [
  { target: 150, suffix: '+',  label: 'Aktif Kurum'     },
  { target: 15,  suffix: 'K+', label: 'Kullanıcı'       },
  { target: 14,  suffix: '',   label: 'Modül'            },
  { target: 99,  prefix: '%',  label: 'Uptime'          },
]


export default function Hero() {
  return (
    <>
      {/* ── Ana Hero ── */}
      <section id="urun" style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f4f8fd 100%)',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '72px 40px 80px',
          display: 'flex',
          alignItems: 'center',
          gap: 80,
        }} className="hero-split">

          {/* ── SOL: Metin ── */}
          <div style={{ flex: '1 1 0', minWidth: 0 }} className="hero-content-col">

            {/* Üst etiket */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                marginBottom: 28,
              }}
            >
              <div style={{ width: 28, height: 1, background: '#003C75', opacity: 0.4 }} />
              <span style={{
                fontSize: 12,
                fontWeight: 700,
                color: '#003C75',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                opacity: 0.75,
              }}>
                Türkiye'nin Mobil İK Platformu
              </span>
            </motion.div>

            {/* Başlık */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: 'clamp(34px, 4vw, 54px)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                color: '#0f172a',
                margin: '0 0 20px',
              }}
            >
              İK Süreçlerinizi{' '}
              <span style={{ color: '#003C75' }}>Dijitalleştirin,</span>
              <br />
              Verimliliğinizi Artırın.
            </motion.h1>

            {/* Alt metin */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: '#475569',
                margin: '0 0 36px',
                maxWidth: 480,
                fontWeight: 400,
              }}
            >
              PDKS, izin yönetimi, puantaj, erişim kontrolü ve daha fazlası.
              14 entegre modül ile tüm İK operasyonunuzu tek platformda yönetin.
              Biyometrik cihaz gerektirmez — aynı gün kurulum.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}
              className="hero-actions"
            >
              <a
                href="/iletisim#demo-form"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px',
                  background: '#003C75',
                  color: '#fff',
                  borderRadius: 6,
                  fontSize: 15, fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(0,60,117,0.22)',
                  transition: 'background 0.15s, box-shadow 0.15s',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#002e5c'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,60,117,0.32)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#003C75'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,60,117,0.22)'
                }}
              >
                Ücretsiz Demo Talep Et
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
                </svg>
              </a>
              <a
                href="/iletisim"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 24px',
                  background: '#fff',
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  borderRadius: 6,
                  fontSize: 15, fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'border-color 0.15s, background 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#9ca3af'
                  e.currentTarget.style.background = '#f9fafb'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#d1d5db'
                  e.currentTarget.style.background = '#fff'
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.62 12 19.79 19.79 0 0 1 1.55 3.4 2 2 0 0 1 3.52 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6 6l.76-.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Bizi Arayın
              </a>
            </motion.div>

            {/* İstatistikler */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}
              className="hero-stats"
            >
              {STATS.map((s, i) => (
                <div key={s.label}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#003C75', lineHeight: 1, letterSpacing: '-0.02em' }}>
                    <CountUp target={s.target} prefix={s.prefix || ''} suffix={s.suffix || ''} delay={i * 100} />
                  </div>
                  <div style={{ fontSize: 13, color: '#6b7280', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── SAĞ: Dashboard Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: '1.85 1 0', minWidth: 0, position: 'relative', marginRight: '-40px' }}
            className="hero-mockup-col"
          >
            {/* Bildirim kartı */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.4 }}
              className="hero-alert-card"
              style={{
                position: 'absolute', top: -18, right: 12, zIndex: 10,
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: 8,
                padding: '10px 16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                display: 'flex', alignItems: 'center', gap: 10,
                whiteSpace: 'nowrap',
              }}
            >
              <div style={{
                width: 30, height: 30, borderRadius: 8,
                background: '#f0fdf4',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>İzin Onaylandı</div>
                <div style={{ fontSize: 11, color: '#9ca3af' }}>Ahmet Yılmaz · Az önce</div>
              </div>
            </motion.div>

            {/* Aktif personel kartı */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="hero-active-card"
              style={{
                position: 'absolute', bottom: 32, left: -16, zIndex: 10,
                background: '#003C75',
                borderRadius: 8,
                padding: '10px 16px',
                boxShadow: '0 4px 20px rgba(0,60,117,0.28)',
                display: 'flex', alignItems: 'center', gap: 12,
                whiteSpace: 'nowrap',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
              <div>
                <div style={{ fontSize: 11, color: 'rgba(219,238,255,0.7)', fontWeight: 500 }}>Aktif Personel</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.2 }}>1.284</div>
              </div>
            </motion.div>

            {/* Dashboard */}
            <div style={{
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
              boxShadow: '0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)',
              background: '#fff',
            }} className="hero-dashboard-shell">

              {/* Browser chrome */}
              <div style={{ background: '#f8fafc', borderBottom: '1px solid #e8ecf2', padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 4 }}>
                  {['#ff6058','#ffbd2e','#28c840'].map(c => (
                    <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div style={{ flex: 1, maxWidth: 200, margin: '0 auto', background: '#e8ecf2', borderRadius: 4, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  <span style={{ fontSize: 9, color: '#94a3b8' }}>panel.airx.com.tr</span>
                </div>
              </div>

              {/* App top navbar */}
              <div style={{ background: '#fff', borderBottom: '1px solid #e8f0f9', padding: '0 14px', height: 38, display: 'flex', alignItems: 'center', gap: 10 }}>
                <img src={logo} alt="AirX" style={{ height: 15, width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
                <div style={{ display: 'flex', gap: 1, flex: 1 }}>
                  {[
                    { label: 'Anasayfa', active: true, chevron: false },
                    { label: 'Tanımlamalar', active: false, chevron: true },
                    { label: 'Personel', active: false, chevron: true },
                    { label: 'Modüller', active: false, chevron: true },
                    { label: 'Raporlar', active: false, chevron: true },
                  ].map(item => (
                    <div key={item.label} style={{ padding: '4px 6px', borderRadius: 4, background: item.active ? 'rgba(0,60,117,0.07)' : 'transparent', display: 'flex', alignItems: 'center', gap: 2, whiteSpace: 'nowrap' }}>
                      <span style={{ fontSize: 9, fontWeight: item.active ? 700 : 500, color: item.active ? '#003C75' : '#64748b' }}>{item.label}</span>
                      {item.chevron && (
                        <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
                  <span style={{ fontSize: 10 }}>🇹🇷</span>
                  <span style={{ fontSize: 9, color: '#64748b' }}>Türkçe</span>
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>

              {/* Ana içerik */}
              <div style={{ background: '#f5f8fc', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>

                {/* 2×3 Stat kartları */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 7 }} className="hero-dashboard-stats">
                  {[
                    { value: 48, label: 'Aktif Personeller', sub: 'Puantaja Dahil Değil: 2', color: '#3b82f6',
                      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
                    { value: 31, label: 'Gelenler', color: '#22c55e',
                      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> },
                    { value: 5, label: 'Mesaidekiler', color: '#8b5cf6',
                      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> },
                    { value: 8, label: 'Gelmeyenler', color: '#ef4444',
                      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> },
                    { value: 3, label: 'Geç Gelenler', color: '#f59e0b',
                      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
                    { value: 2, label: 'İzinliler', color: '#0ea5e9',
                      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 21 4s-2 0-3.5 1.5L14 9l-8.2-1.8L4 9l7 3-2 3.5L6 17l-1 3 3-1 1.5-3 3.5-2 3 7z"/></svg> },
                  ].map(s => (
                    <div key={s.label} style={{ background: '#fff', borderRadius: 7, border: '1px solid #e8f0f9', padding: '9px 10px', boxShadow: '0 1px 3px rgba(0,30,80,0.04)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                        <div style={{ width: 24, height: 24, borderRadius: 6, background: s.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {s.icon}
                        </div>
                        <span style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</span>
                      </div>
                      <div style={{ fontSize: 8, fontWeight: 600, color: '#475569' }}>{s.label}</div>
                      {s.sub && <div style={{ fontSize: 7, color: '#94a3b8', marginTop: 1 }}>{s.sub}</div>}
                    </div>
                  ))}
                </div>

                {/* Alt tablolar */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }} className="hero-dashboard-tables">
                  {/* Onay Bekleyen İzin Talepleri */}
                  <div style={{ background: '#fff', borderRadius: 7, border: '1px solid #e8f0f9', overflow: 'hidden' }}>
                    <div style={{ padding: '6px 10px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ fontSize: 9, fontWeight: 700, color: '#1e293b' }}>Onay Bekleyen İzin Talepleri</span>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 8 }}>
                      <thead>
                        <tr style={{ background: '#f8fafc' }}>
                          {['Ad Soyad', 'İzin Tipi', 'Departman'].map(h => (
                            <th key={h} style={{ padding: '4px 8px', fontWeight: 600, color: '#475569', textAlign: 'left' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Ahmet Kaya',    tip: 'Yıllık İzin',   dept: 'Yazılım Ekibi' },
                          { name: 'Zeynep Arslan', tip: 'Ücretsiz İzin', dept: 'Pazarlama' },
                          { name: 'Mustafa Demir', tip: 'Yıllık İzin',   dept: 'Satış' },
                          { name: 'Elif Yıldız',   tip: 'Yıllık İzin',   dept: 'İkitelli Merkez' },
                        ].map((r, i) => (
                          <tr key={i} style={{ borderTop: '1px solid #f8fafc' }}>
                            <td style={{ padding: '4px 8px', color: '#1e7bbf', fontWeight: 500 }}>{r.name}</td>
                            <td style={{ padding: '4px 8px', color: '#1e7bbf' }}>{r.tip}</td>
                            <td style={{ padding: '4px 8px', color: '#64748b' }}>{r.dept}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Gelmeyenler */}
                  <div style={{ background: '#fff', borderRadius: 7, border: '1px solid #e8f0f9', overflow: 'hidden' }}>
                    <div style={{ padding: '6px 10px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ fontSize: 9, fontWeight: 700, color: '#1e293b' }}>Gelmeyenler</span>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 8 }}>
                      <thead>
                        <tr style={{ background: '#f8fafc' }}>
                          {['Ad Soyad', 'Departman'].map(h => (
                            <th key={h} style={{ padding: '4px 8px', fontWeight: 600, color: '#475569', textAlign: 'left' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Serkan Çelik',  dept: 'Yazılım Ekibi' },
                          { name: 'Fatma Öztürk',  dept: 'Yazılım Ekibi' },
                          { name: 'Burak Koç',     dept: 'Pazarlama' },
                          { name: 'Elif Şahin',    dept: 'Satış' },
                          { name: 'Hasan Çelik',   dept: 'İdari İşler' },
                        ].map((r, i) => (
                          <tr key={i} style={{ borderTop: '1px solid #f8fafc' }}>
                            <td style={{ padding: '4px 8px', color: '#334155', fontWeight: 500 }}>{r.name}</td>
                            <td style={{ padding: '4px 8px', color: '#64748b' }}>{r.dept}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <style>{`
        @media (max-width: 960px) {
          .hero-split { flex-direction: column !important; gap: 48px !important; padding: 48px 24px 56px !important; }
          .hero-mockup-col { width: 100% !important; max-width: 720px !important; margin-right: 0 !important; }
        }
        @media (max-width: 640px) {
          .hero-split { padding: 36px 16px 44px !important; }
          .hero-stats { gap: 20px !important; }
          .hero-content-col { text-align: center !important; }
          .hero-content-col p { margin-left: auto !important; margin-right: auto !important; }
          .hero-actions { justify-content: center !important; }
          .hero-alert-card, .hero-active-card { display: none !important; }
          .hero-dashboard-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-dashboard-tables { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .hero-stats { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </>
  )
}
