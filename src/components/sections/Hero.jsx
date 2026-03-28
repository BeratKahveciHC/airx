import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

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
          <div style={{ flex: '1 1 0', minWidth: 0 }}>

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
            >
              <a
                href="#demo"
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
                href="tel:+902120000000"
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
            }}>
              {/* Browser chrome */}
              <div style={{
                background: '#f8fafc',
                borderBottom: '1px solid #e8ecf2',
                padding: '9px 14px',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <div style={{ display: 'flex', gap: 5 }}>
                  {['#fca5a5','#fcd34d','#86efac'].map(c => (
                    <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div style={{
                  flex: 1, maxWidth: 220, margin: '0 auto',
                  background: '#e8ecf2', borderRadius: 4, height: 20,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, color: '#94a3b8', letterSpacing: '0.02em',
                }}>
                  panel.airx.com.tr
                </div>
              </div>

              <div style={{ display: 'flex', height: 340 }}>
                {/* Sidebar */}
                <div style={{
                  width: 172, flexShrink: 0,
                  background: '#f8fafd',
                  borderRight: '1px solid #eaf0f9',
                  padding: '14px 0',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ padding: '0 12px 14px', display: 'flex', alignItems: 'center', gap: 7 }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: 6,
                      background: '#003C75',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontWeight: 800, fontSize: 10,
                    }}>A</div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#003C75' }}>AIRX Panel</span>
                  </div>
                  {[
                    { label: 'Dashboard',      active: true },
                    { label: 'Personel',       active: false },
                    { label: 'PDKS',           active: false },
                    { label: 'İzin Yönetimi', active: false },
                    { label: 'Puantaj',        active: false },
                    { label: 'Raporlar',       active: false },
                  ].map(item => (
                    <div key={item.label} style={{
                      padding: '7px 12px',
                      display: 'flex', alignItems: 'center', gap: 8,
                      background: item.active ? 'rgba(0,60,117,0.07)' : 'transparent',
                      borderLeft: item.active ? '2px solid #003C75' : '2px solid transparent',
                    }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.active ? '#003C75' : '#d1d5db', flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: item.active ? '#003C75' : '#6b7280', fontWeight: item.active ? 600 : 400 }}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Ana içerik */}
                <div style={{ flex: 1, padding: '16px 18px', background: '#fff', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#111827' }}>Genel Bakış</div>
                      <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 1 }}>29 Mart 2026, Pazar</div>
                    </div>
                    <div style={{
                      background: '#003C75', color: '#fff',
                      borderRadius: 5, padding: '5px 11px',
                      fontSize: 11, fontWeight: 600,
                    }}>+ Ekle</div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 14 }}>
                    {[
                      { label: 'Toplam Personel', value: '1.284', up: true,  trend: '+2.5%' },
                      { label: 'Devam Oranı',     value: '%97.3', up: true,  trend: '+1.1%' },
                      { label: 'Bekleyen Onay',   value: '18',    up: false, trend: '3 Yeni' },
                      { label: 'Aktif Görev',     value: '143',   up: true,  trend: '+6.2%' },
                    ].map(s => (
                      <div key={s.label} style={{
                        background: '#f8fafc', border: '1px solid #e8f0f9',
                        borderRadius: 8, padding: '10px 10px',
                      }}>
                        <div style={{ fontSize: 9, color: '#9ca3af', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.label}</div>
                        <div style={{ fontSize: 17, fontWeight: 800, color: '#111827', lineHeight: 1 }}>{s.value}</div>
                        <div style={{ fontSize: 9, color: s.up ? '#16a34a' : '#d97706', marginTop: 3, fontWeight: 600 }}>{s.up ? '↑' : '●'} {s.trend}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: '#f8fafc', border: '1px solid #e8f0f9', borderRadius: 8, padding: '12px 14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: '#111827' }}>Haftalık Devam</div>
                      <div style={{ fontSize: 10, color: '#9ca3af' }}>Bu Hafta</div>
                    </div>
                    <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 68 }}>
                      {[{h:72,l:'Pzt'},{h:88,l:'Sal'},{h:65,l:'Çar'},{h:92,l:'Per'},{h:78,l:'Cum'},{h:45,l:'Cmt'},{h:20,l:'Paz'}]
                        .map((d, i) => (
                          <div key={d.l} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                            <div style={{
                              width: '100%', borderRadius: '3px 3px 0 0', height: `${d.h}%`,
                              background: i === 4 ? '#003C75' : '#dbeafe',
                            }} />
                            <div style={{ fontSize: 8, color: '#9ca3af' }}>{d.l}</div>
                          </div>
                        ))}
                    </div>
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
          .hero-mockup-col { width: 100% !important; }
        }
        @media (max-width: 640px) {
          .hero-split { padding: 36px 16px 44px !important; }
          .hero-stats { gap: 20px !important; }
        }
        @media (max-width: 480px) {
          .hero-stats { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </>
  )
}
