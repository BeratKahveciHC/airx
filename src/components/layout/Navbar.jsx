import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../../assets/logo.png'

const NAV_LINKS = [
  { label: 'Neden AirX',   href: '/neden-airx'    },
  { label: 'Fiyatlar',     href: '/fiyatlar'      },
  { label: 'Blog',         href: '/blog'          },
  { label: 'Hakkımızda',   href: '/hakkimizda'    },
  { label: 'İletişim',     href: '/iletisim'      },
]

const MODULE_DROPDOWN = [
  { label: 'PDKS',               href: '/moduller/pdks',               icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z',               accent: '#38bdf8', desc: 'Giriş-çıkış takibi' },
  { label: 'Özlük Dosyası',      href: '/moduller/ozluk-dosyasi',      icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',               accent: '#a78bfa', desc: 'Dijital personel arşivi' },
  { label: 'İzin Yönetimi',      href: '/moduller/izin-yonetimi',      icon: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm7 9 2 2 4-4',               accent: '#34d399', desc: 'Onay akışlı izin takibi' },
  { label: 'Puantaj',            href: '/moduller/puantaj',            icon: 'M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18',               accent: '#fbbf24', desc: 'Otomatik puantaj cetveli' },
  { label: 'Erişim Kontrolü',    href: '/moduller/erisim-kontrolu',    icon: 'M21 2l-9.6 9.6m0 0 3 3L22 7l-3-3M7.5 21a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z',               accent: '#f87171', desc: 'Bölge bazlı yetkilendirme' },
  { label: 'Ziyaretçi Yönetimi', href: '/moduller/ziyaretci-yonetimi', icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm9 4 2 2 4-4',               accent: '#22d3ee', desc: 'QR ile ziyaretçi kaydı' },
  { label: 'Yemekhane',          href: '/moduller/yemekhane',          icon: 'M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7',               accent: '#fb923c', desc: 'Yemek hakkı kontrolü' },
  { label: 'Anket',              href: '/moduller/anket',              icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',               accent: '#a3e635', desc: 'Personel geri bildirimi' },
  { label: 'Süreli Evraklar',    href: '/moduller/sureli-evraklar',    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 15a3 3 0 1 0 6 0M12 12v3',               accent: '#f472b6', desc: 'Son kullanma tarihi takibi' },
  { label: 'Eğitim Planlama',    href: '/moduller/egitim-planlama',    icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',               accent: '#60a5fa', desc: 'Eğitim katılım takibi' },
  { label: 'Hukuki Evraklar',    href: '/moduller/hukuki-evraklar',    icon: 'm16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Zm-14 0 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1ZM7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2',               accent: '#818cf8', desc: 'İhtar ve savunma yönetimi' },
  { label: 'Yan Haklar',         href: '/moduller/yan-haklar',         icon: 'M20 12V22H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z',               accent: '#2dd4bf', desc: 'Görev bazlı yan hak takibi' },
  { label: 'Periyodik Görev',    href: '/moduller/periyodik-gorev',    icon: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M3 21v-5h5',               accent: '#c084fc', desc: 'Lokasyon doğrulamalı görev' },
  { label: 'İş Zekası',          href: '/moduller/is-zekasi',          icon: 'M18 20V10M12 20V4M6 20v-6',               accent: '#79ACDC', desc: 'Veri görselleştirme' },
]

const SECTION_IDS = ['urun', 'moduller', 'guvenlik', 'fiyatlar']

export default function Navbar() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [activeId, setActiveId]       = useState('')
  const [scrolled, setScrolled]       = useState(false)
  const [modulesOpen, setModulesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = []
    const visible = new Set()
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) visible.add(id)
          else visible.delete(id)
          setActiveId(SECTION_IDS.find(s => visible.has(s)) || '')
        },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [menuOpen])

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: '#fff',
        borderBottom: `1px solid ${scrolled && !modulesOpen ? '#e2e8f0' : modulesOpen ? 'transparent' : '#f1f5f9'}`,
        boxShadow: scrolled && !modulesOpen ? '0 1px 12px rgba(0,0,0,0.07)' : 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 40px',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 40,
        }}>

          {/* Logo */}
          <a href="/" style={{
            textDecoration: 'none',
            display: 'flex', alignItems: 'center',
            flexShrink: 0,
          }}>
            <img src={logo} alt="AirX" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
          </a>

          {/* Desktop Nav */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            flex: 1,
          }} className="nav-desktop">

            {/* Modüller mega-menu trigger */}
            <div
              style={{ position: 'static' }}
              onMouseEnter={() => setModulesOpen(true)}
              onMouseLeave={() => setModulesOpen(false)}
            >
              <button style={{
                fontSize: 14,
                fontWeight: modulesOpen ? 600 : 500,
                color: modulesOpen ? '#003C75' : '#374151',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                whiteSpace: 'nowrap',
                transition: 'color 0.15s',
              }}>
                Modüller
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ transition: 'transform 0.2s', transform: modulesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>

            {NAV_LINKS.map(link => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: isActive ? '#003C75' : '#374151',
                    textDecoration: 'none',
                    padding: '8px 16px',
                    borderRadius: 6,
                    transition: 'color 0.15s',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#003C75' }}
                  onMouseLeave={e => { e.currentTarget.style.color = isActive ? '#003C75' : '#374151' }}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: 0, left: 16, right: 16,
                      height: 2,
                      background: '#003C75',
                      borderRadius: 2,
                    }} />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Desktop CTAs */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0,
          }} className="nav-desktop">
            <a
              href="/intranet"
              style={{
                padding: '8px 18px',
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                color: '#374151',
                border: '1px solid #d1d5db',
                background: '#fff',
                transition: 'border-color 0.15s, background 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#9ca3af'; e.currentTarget.style.background = '#f9fafb' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.background = '#fff' }}
            >
              Giriş Yap
            </a>
            <a
              href="#demo"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '8px 20px',
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                color: '#fff',
                background: '#003C75',
                transition: 'background 0.15s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#002e5c' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#003C75' }}
            >
              Demo Talep Et
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="nav-hamburger"
            aria-label="Menü"
            style={{
              display: 'none',
              width: 38, height: 38,
              borderRadius: 6,
              background: 'transparent',
              border: '1px solid #e2e8f0',
              alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: '#374151',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {menuOpen
                ? <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>
                : <><path d="M4 7h16"/><path d="M4 17h16"/></>
              }
            </svg>
          </button>
        </div>

        {/* ── Mega Menu ── */}
        <AnimatePresence>
          {modulesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onMouseEnter={() => setModulesOpen(true)}
              onMouseLeave={() => setModulesOpen(false)}
              style={{
                borderTop: '1px solid #f0f4fa',
                background: '#fff',
                boxShadow: '0 20px 60px rgba(0,30,80,0.12)',
              }}
            >
              <div style={{
                maxWidth: 1200,
                margin: '0 auto',
                padding: '32px 40px 36px',
              }}>
                {/* Başlık */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 24,
                }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#79ACDC', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>
                      Tüm Modüller
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: '#0f172a' }}>
                      AirX ile her İK sürecini dijitalleştirin
                    </div>
                  </div>
                  <a href="/moduller" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 13, fontWeight: 600, color: '#003C75',
                    textDecoration: 'none',
                    padding: '8px 16px',
                    borderRadius: 8,
                    border: '1px solid #dbeeff',
                    background: '#f0f7ff',
                    transition: 'background 0.15s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#dbeeff' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#f0f7ff' }}
                  >
                    Tüm modülleri gör
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
                    </svg>
                  </a>
                </div>

                {/* Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  gap: 6,
                }}>
                  {MODULE_DROPDOWN.map(m => (
                    <a
                      key={m.label}
                      href={m.href}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        padding: '14px 14px',
                        borderRadius: 10,
                        textDecoration: 'none',
                        border: '1px solid transparent',
                        transition: 'background 0.15s, border-color 0.15s, transform 0.15s',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#f8fbff'
                        e.currentTarget.style.borderColor = '#dbeeff'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.borderColor = 'transparent'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      {/* Icon */}
                      <div style={{
                        width: 36, height: 36,
                        borderRadius: 9,
                        background: m.accent + '18',
                        border: `1px solid ${m.accent}33`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={m.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d={m.icon}/>
                        </svg>
                      </div>

                      {/* Text */}
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#0f172a', marginBottom: 2, lineHeight: 1.3 }}>
                          {m.label}
                        </div>
                        <div style={{ fontSize: 11.5, color: '#64748b', lineHeight: 1.4 }}>
                          {m.desc}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Alt çizgi */}
                <div style={{
                  marginTop: 24,
                  paddingTop: 20,
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 24,
                }}>
                  <span style={{ fontSize: 12.5, color: '#94a3b8' }}>
                    14 modül · Tek entegre platform
                  </span>
                  <a href="/fiyatlar" style={{ fontSize: 12.5, fontWeight: 600, color: '#003C75', textDecoration: 'none' }}
                    onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                    onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
                  >
                    Fiyatları incele →
                  </a>
                  <a href="/iletisim" style={{ fontSize: 12.5, fontWeight: 600, color: '#003C75', textDecoration: 'none' }}
                    onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                    onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
                  >
                    Demo talep et →
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden', borderTop: '1px solid #f1f5f9', background: '#fff' }}
            >
              <div style={{ padding: '8px 24px 20px' }}>
                <a href="/moduller" onClick={() => setMenuOpen(false)} style={{
                  display: 'block', padding: '12px 0',
                  borderBottom: '1px solid #f1f5f9',
                  fontSize: 15, fontWeight: 500, color: '#374151', textDecoration: 'none',
                }}>Modüller</a>
                {NAV_LINKS.map((link, i) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'block',
                      padding: '12px 0',
                      borderBottom: i < NAV_LINKS.length - 1 ? '1px solid #f1f5f9' : 'none',
                      fontSize: 15, fontWeight: 500,
                      color: '#374151',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <a href="/intranet" style={{
                    padding: '11px', borderRadius: 6,
                    fontSize: 14, fontWeight: 500, textDecoration: 'none', textAlign: 'center',
                    color: '#374151', border: '1px solid #d1d5db',
                  }}>Giriş Yap</a>
                  <a href="#demo" onClick={() => setMenuOpen(false)} style={{
                    padding: '11px', borderRadius: 6,
                    fontSize: 14, fontWeight: 600, textDecoration: 'none', textAlign: 'center',
                    color: '#fff', background: '#003C75',
                  }}>Demo Talep Et</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div style={{ height: 68 }} />

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (max-width: 480px) {
          header > div { padding: 0 20px !important; }
        }
      `}</style>
    </>
  )
}
