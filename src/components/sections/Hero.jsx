import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0  },
}

function CountUp({ target, prefix = '', suffix = '', duration = 1600, delay = 0 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
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


export default function Hero() {
  return (
    <section id="urun" style={{
      background: '#e8f3fc',
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
    }}>

      {/* ── Izgara desen ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(0,60,117,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,60,117,0.07) 1px, transparent 1px)
        `,
        backgroundSize: '52px 52px',
        maskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 75%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 75%)',
      }} />

      {/* ── Gradient overlay (ızgaranın üstünde) ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        background: `
          radial-gradient(ellipse 70% 55% at 50% 0%, rgba(232,243,252,1) 0%, rgba(232,243,252,0) 100%),
          radial-gradient(ellipse 50% 60% at 0% 40%, rgba(121,172,220,0.35) 0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 100% 40%, rgba(121,172,220,0.35) 0%, transparent 60%),
          radial-gradient(ellipse 80% 40% at 50% 110%, rgba(0,60,117,0.12) 0%, transparent 60%)
        `,
      }} />


      {/* ── Üst metin alanı ── */}
      <div className="hero-text-container" style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center',
        padding: '108px 24px 48px',
        maxWidth: 860, margin: '0 auto', width: '100%',
      }}>

        {/* H1 */}
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.55, delay: 0.08 }}
          style={{
            fontSize: 'clamp(36px, 5.8vw, 68px)',
            fontWeight: 800, lineHeight: 1.08,
            letterSpacing: '-0.03em',
            margin: '0 auto 20px',
          }}
        >
          <span style={{ color: '#79ACDC' }}>Tüm İK Süreçleriniz</span>
          <br />
          <span style={{ color: '#003C75', position: 'relative', display: 'inline-block' }}>
            Tek Ekranda.
            <svg viewBox="0 0 300 12" style={{
              position: 'absolute', bottom: -6, left: 0, width: '100%', overflow: 'visible',
            }}>
              <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#79ACDC" strokeWidth="3"
                fill="none" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </span>
        </motion.h1>

        {/* Açıklama */}
        <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.55, delay: 0.14 }}
          style={{
            fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.75,
            color: '#64748b', maxWidth: 520, margin: '0 auto 36px', fontWeight: 400,
          }}
        >
          Giriş-çıkış, izin, vardiya, görev ve personel yönetimini
          mobil uyumlu tek platformda toplayın. Biyometrik veri gerektirmez.
        </motion.p>

        {/* CTA butonlar */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.55, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}
        >
          <a href="#demo" className="btn-glass" style={{
            padding: '13px 28px', borderRadius: 9999,
            fontSize: 15, fontWeight: 700, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Ücretsiz Demo Talep Et
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
            </svg>
          </a>
          <a href="#moduller" className="btn-outline" style={{
            padding: '13px 24px', borderRadius: 9999,
            fontSize: 15, fontWeight: 500, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Modülleri İncele
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"/>
            </svg>
          </a>
        </motion.div>

        {/* Sosyal kanıt istatistikler */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.55, delay: 0.28 }}
          className="hero-stats-bar"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}
        >
          {[
            { target: 150, prefix: '',  suffix: '+',  label: 'Kurum',     delay: 0   },
            { target: 15,  prefix: '',  suffix: 'K+', label: 'Kullanıcı', delay: 120 },
            { target: 14,  prefix: '',  suffix: '',   label: 'Modül',     delay: 240 },
            { target: 99,  prefix: '%', suffix: '',   label: 'Uptime',    delay: 360 },
          ].map((stat, i) => (
            <div key={stat.label} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                padding: '10px 28px', textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(0,60,117,0.10)' : 'none',
              }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#003C75', lineHeight: 1 }}>
                  <CountUp target={stat.target} prefix={stat.prefix} suffix={stat.suffix} delay={stat.delay} />
                </div>
                <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 3, fontWeight: 500 }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* ── Ürün mockup — ekranın geri kalanını doldurur ── */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.3 }}
        style={{
          position: 'relative', zIndex: 2,
          flex: 1,
          padding: '0 24px',
          display: 'flex', alignItems: 'flex-end',
        }}
      >
        <div style={{
          width: '100%', maxWidth: 1160, margin: '0 auto',
          borderRadius: '20px 20px 0 0',
          overflow: 'hidden',
          border: '1px solid rgba(0,60,117,0.10)',
          borderBottom: 'none',
          boxShadow: '0 -4px 40px rgba(0,60,117,0.10), 0 0 0 1px rgba(121,172,220,0.08)',
          background: '#fff',
        }}>

          {/* Tarayıcı bar */}
          <div style={{
            background: '#f8fafc',
            borderBottom: '1px solid #e8f0f9',
            padding: '10px 16px',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <div style={{ display: 'flex', gap: 5 }}>
              {['#fca5a5','#fcd34d','#86efac'].map(c => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{
              flex: 1, maxWidth: 260, margin: '0 auto',
              background: '#eef4fb', borderRadius: 6, height: 22,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, color: '#94a3b8',
            }}>
              panel.airx.com.tr
            </div>
          </div>

          {/* Panel içerik */}
          <div style={{ display: 'flex', minHeight: 480 }}>

            {/* Sidebar */}
            <div className="hero-browser-sidebar" style={{
              width: 210, flexShrink: 0,
              borderRight: '1px solid #eef4fb',
              background: '#f8fafd',
              padding: '16px 0',
            }}>
              <div style={{ padding: '0 14px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 26, height: 26, borderRadius: 7,
                  background: '#003C75',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 800, fontSize: 11,
                }}>A</div>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#003C75' }}>AIRX Panel</span>
              </div>

              {[
                { icon: '▦',  label: 'Dashboard',       active: true  },
                { icon: '👤', label: 'Personel',        active: false },
                { icon: '✓',  label: 'PDKS',            active: false },
                { icon: '📅', label: 'İzin Yönetimi',  active: false },
                { icon: '📋', label: 'Görevler',        active: false },
                { icon: '📊', label: 'Raporlar',        active: false },
                { icon: '🏢', label: 'Lokasyonlar',     active: false },
                { icon: '⚙',  label: 'Ayarlar',         active: false },
              ].map(item => (
                <div key={item.label} style={{
                  padding: '8px 14px',
                  display: 'flex', alignItems: 'center', gap: 9,
                  background: item.active ? 'rgba(0,60,117,0.07)' : 'transparent',
                  borderLeft: item.active ? '3px solid #003C75' : '3px solid transparent',
                  fontSize: 13,
                  color: item.active ? '#003C75' : '#94a3b8',
                  fontWeight: item.active ? 600 : 400,
                }}>
                  <span style={{ fontSize: 13, width: 16, textAlign: 'center' }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Ana içerik */}
            <div style={{ flex: 1, padding: '20px 24px', background: '#fff', overflowX: 'auto' }}>

              {/* Başlık */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#0f172a' }}>Genel Bakış</div>
                  <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 2 }}>27 Mart 2026, Cuma</div>
                </div>
                <div style={{
                  background: '#003C75', color: '#fff',
                  borderRadius: 8, padding: '7px 14px',
                  fontSize: 12, fontWeight: 600,
                }}>
                  + Personel Ekle
                </div>
              </div>

              {/* Stat kartları */}
              <div className="hero-stat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 20 }}>
                {[
                  { label: 'Toplam Personel', value: '1.284', trend: '+2.5%', up: true  },
                  { label: 'Devam Oranı',     value: '%97.3', trend: '+1.1%', up: true  },
                  { label: 'Bekleyen Onay',   value: '18',    trend: '3 Yeni', up: false },
                  { label: 'Aktif Görev',     value: '143',   trend: '+6.2%', up: true  },
                ].map(stat => (
                  <div key={stat.label} style={{
                    background: '#f8fafc',
                    border: '1px solid #e8f0f9',
                    borderRadius: 12, padding: '14px 16px',
                  }}>
                    <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 6 }}>{stat.label}</div>
                    <div style={{ fontSize: 24, fontWeight: 800, color: '#0f172a' }}>{stat.value}</div>
                    <div style={{ fontSize: 11, color: stat.up ? '#22c55e' : '#f59e0b', marginTop: 4, fontWeight: 500 }}>
                      {stat.up ? '↑' : '●'} {stat.trend}
                    </div>
                  </div>
                ))}
              </div>

              {/* Alt grid */}
              <div className="hero-bottom-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 12 }}>

                {/* Bar chart */}
                <div className="hero-chart" style={{
                  background: '#f8fafc', border: '1px solid #e8f0f9',
                  borderRadius: 12, padding: '16px 18px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#0f172a' }}>Haftalık Devam</div>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Bu Hafta ▾</div>
                  </div>
                  <div style={{ display: 'flex', gap: 5, alignItems: 'flex-end', height: 80 }}>
                    {[
                      { h: 72, label: 'Pzt' },
                      { h: 88, label: 'Sal' },
                      { h: 65, label: 'Çar' },
                      { h: 92, label: 'Per' },
                      { h: 78, label: 'Cum' },
                      { h: 45, label: 'Cmt' },
                      { h: 20, label: 'Paz' },
                    ].map((d, i) => (
                      <div key={d.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                        <div style={{
                          width: '100%', borderRadius: '4px 4px 0 0',
                          height: `${d.h}%`,
                          background: i === 4
                            ? 'linear-gradient(180deg, #79ACDC, #003C75)'
                            : 'rgba(121,172,220,0.25)',
                        }} />
                        <div style={{ fontSize: 10, color: '#94a3b8' }}>{d.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bekleyen işlemler */}
                <div style={{
                  background: '#f8fafc', border: '1px solid #e8f0f9',
                  borderRadius: 12, padding: '16px 18px',
                }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#0f172a', marginBottom: 14 }}>Bekleyen İşlemler</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      { label: 'İzin Talepleri',   count: 12, color: '#003C75', bg: '#dbeeff' },
                      { label: 'Vardiya Değişimi', count: 4,  color: '#0284c7', bg: '#e0f2fe' },
                      { label: 'Evrak Onayı',      count: 2,  color: '#7c3aed', bg: '#ede9fe' },
                    ].map(row => (
                      <div key={row.label} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        background: row.bg, borderRadius: 8, padding: '8px 12px',
                      }}>
                        <span style={{ fontSize: 12, color: row.color, fontWeight: 500 }}>{row.label}</span>
                        <span style={{
                          background: row.color, color: '#fff',
                          borderRadius: 9999, width: 22, height: 22,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 11, fontWeight: 700,
                        }}>{row.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── 3 CTA bandı ── */}
      <div style={{
        background: 'transparent',
        padding: '40px 24px 56px',
        position: 'relative', zIndex: 2,
      }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16,
        }} className="cta-strip">

          {/* Demo İste — ana CTA */}
          <a href="#demo" style={{
            textDecoration: 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12,
            background: 'linear-gradient(145deg, #002040 0%, #002e5c 60%, #003570 100%)',
            borderRadius: 20, padding: '24px 24px 20px',
            position: 'relative', overflow: 'hidden', isolation: 'isolate',
            boxShadow: '0 8px 32px rgba(0,60,117,0.28)',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,60,117,0.16)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,60,117,0.08)'
          }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.82v6.36a1 1 0 0 1-1.447.889L15 14"/><rect x="3" y="6" width="12" height="12" rx="2"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Demo İste</div>
              <div style={{ fontSize: 13, color: 'rgba(219,238,255,0.75)', lineHeight: 1.5 }}>Ürünü Canlı Görün, Soruları Birlikte Yanıtlayalım</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#79ACDC', fontSize: 13, fontWeight: 600, marginTop: 4 }}>
              Hemen Başla
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
              </svg>
            </div>
          </a>

          {/* İletişime Geçin */}
          <a href="/iletisim" style={{
            textDecoration: 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12,
            background: '#fff',
            border: '1.5px solid rgba(0,60,117,0.12)',
            borderRadius: 20, padding: '24px 24px 20px',
            boxShadow: '0 4px 20px rgba(0,60,117,0.07)',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,60,117,0.14)'
            e.currentTarget.style.borderColor = 'rgba(0,60,117,0.25)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,60,117,0.07)'
            e.currentTarget.style.borderColor = 'rgba(0,60,117,0.12)'
          }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'rgba(0,60,117,0.07)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#003C75', marginBottom: 4 }}>İletişime Geçin</div>
              <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>Uzman Ekibimiz Size Özel Çözüm Sunar</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#003C75', fontSize: 13, fontWeight: 600, marginTop: 4 }}>
              Bize Ulaşın
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
              </svg>
            </div>
          </a>

          {/* Modüllerimiz */}
          <a href="#moduller" style={{
            textDecoration: 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12,
            background: '#fff',
            border: '1.5px solid rgba(0,60,117,0.12)',
            borderRadius: 20, padding: '24px 24px 20px',
            boxShadow: '0 4px 20px rgba(0,60,117,0.07)',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,60,117,0.14)'
            e.currentTarget.style.borderColor = 'rgba(0,60,117,0.25)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,60,117,0.07)'
            e.currentTarget.style.borderColor = 'rgba(0,60,117,0.12)'
          }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'rgba(0,60,117,0.07)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#003C75', marginBottom: 4 }}>Modüllerimiz</div>
              <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>14 Farklı Modülle Tam Kapsamlı İK Yönetimi</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#003C75', fontSize: 13, fontWeight: 600, marginTop: 4 }}>
              Tümünü Keşfet
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
              </svg>
            </div>
          </a>

        </div>
      </div>

      <style>{`
        /* ── Tablet & küçük laptop (≤ 1024px) ── */
        @media (max-width: 1024px) {
          .hero-browser-sidebar { display: none !important; }
          .hero-stat-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-bottom-grid { grid-template-columns: 1fr !important; }
          .hero-chart { display: none !important; }
          .cta-strip { grid-template-columns: 1fr 1fr !important; }
        }
        /* ── Mobil (≤ 640px) ── */
        @media (max-width: 640px) {
          .hero-text-container { padding: 88px 16px 32px !important; }
          .hero-stats-bar { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 0 !important; }
          .hero-stats-bar > div { border-right: none !important; }
          .hero-stats-bar > div > div { padding: 10px 12px !important; border-right: none !important; border-bottom: 1px solid rgba(0,60,117,0.08) !important; }
          .hero-stats-bar > div:nth-child(1) > div,
          .hero-stats-bar > div:nth-child(3) > div { border-right: 1px solid rgba(0,60,117,0.08) !important; }
          .hero-stats-bar > div:nth-child(3) > div,
          .hero-stats-bar > div:nth-child(4) > div { border-bottom: none !important; }
          .cta-strip { grid-template-columns: 1fr !important; }
        }
        /* ── Çok küçük ekranlar (≤ 400px) ── */
        @media (max-width: 400px) {
          .hero-text-container { padding: 80px 12px 24px !important; }
        }
      `}</style>
    </section>
  )
}
