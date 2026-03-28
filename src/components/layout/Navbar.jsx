import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../../assets/logo.png'

const NAV_LINKS = [
  { label: 'Ürün',         href: '#urun'          },
  { label: 'Modüller',     href: '#moduller'      },
  { label: 'Güvenlik',     href: '#guvenlik'      },
  { label: 'Fiyatlar',     href: '#fiyatlar'      },
  { label: 'Hakkımızda',   href: '/hakkimizda'    },
]

const SECTION_IDS = ['urun', 'moduller', 'guvenlik', 'fiyatlar']

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeId, setActiveId]   = useState('')
  const [scrolled, setScrolled]   = useState(false)

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
        borderBottom: `1px solid ${scrolled ? '#e2e8f0' : '#f1f5f9'}`,
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.07)' : 'none',
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
            <img
              src={logo}
              alt="AirX"
              style={{
                height: 32,
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </a>

          {/* Desktop Nav */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            flex: 1,
          }} className="nav-desktop">
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
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#9ca3af'
                e.currentTarget.style.background = '#f9fafb'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#d1d5db'
                e.currentTarget.style.background = '#fff'
              }}
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                overflow: 'hidden',
                borderTop: '1px solid #f1f5f9',
                background: '#fff',
              }}
            >
              <div style={{ padding: '8px 24px 20px' }}>
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
