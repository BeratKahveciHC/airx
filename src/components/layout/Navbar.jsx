import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../assets/logo.png'

const NAV_LINKS = [
  { label: 'Modüller',    href: '#moduller'    },
  { label: 'Neden AirX',  href: '#neden-airx'  },
  { label: 'Nasıl Çalışır', href: '#nasil-calisir' },
  { label: 'Güvenlik',    href: '#guvenlik'    },
  { label: 'SSS',         href: '#sss'         },
]

const SECTION_IDS = ['moduller', 'neden-airx', 'nasil-calisir', 'guvenlik', 'sss']

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeId, setActiveId]   = useState('')

  /* ── Scroll state ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Active section via IntersectionObserver ── */
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
        { threshold: 0.25 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  /* ── Close menu on outside click / resize ── */
  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [menuOpen])

  return (
    <>
      {/* ── Floating Navbar ── */}
      <div style={{
        position: 'fixed',
        top: scrolled ? 12 : 20,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 24px)',
        maxWidth: 1120,
        zIndex: 100,
        transition: 'top 0.35s cubic-bezier(0.22,1,0.36,1)',
      }}>
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: 16,
            padding: '0 20px',
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(0, 18, 45, 0.82)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(121,172,220,0.18)',
            boxShadow: '0 8px 40px rgba(0,10,30,0.45), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >

          {/* ── Logo ── */}
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img
              src={logo}
              alt="AirX"
              style={{
                height: 38,
                width: 'auto',
                filter: 'brightness(0) invert(1)',
                objectFit: 'contain',
              }}
            />
          </a>

          {/* ── Desktop Nav ── */}
          <nav style={{
            display: 'flex', alignItems: 'center', gap: 4,
          }} className="nav-desktop">
            {NAV_LINKS.map(link => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    position: 'relative',
                    fontSize: 14,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#fff' : 'rgba(219,238,255,0.70)',
                    textDecoration: 'none',
                    padding: '6px 12px',
                    borderRadius: 8,
                    background: isActive ? 'rgba(255,255,255,0.10)' : 'transparent',
                    transition: 'color 0.2s, background 0.2s',
                    letterSpacing: '0.01em',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'rgba(219,238,255,0.70)'
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {link.label}
                  {isActive && (
                    <div style={{
                      position: 'absolute', bottom: 2, left: '50%',
                      transform: 'translateX(-50%)',
                      width: 16, height: 2,
                      borderRadius: 2,
                      background: 'linear-gradient(90deg, #79ACDC, #fff)',
                    }} />
                  )}
                </a>
              )
            })}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }} className="nav-desktop">
            <a
              href="/intranet"
              style={{
                padding: '7px 16px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                textDecoration: 'none',
                color: 'rgba(219,238,255,0.75)',
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'transparent',
                transition: 'background 0.2s, color 0.2s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.09)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'rgba(219,238,255,0.75)'
              }}
            >
              Giriş Yap
            </a>
            <a
              href="#demo"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '7px 18px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 700,
                textDecoration: 'none',
                color: '#003C75',
                background: '#fff',
                border: '1px solid rgba(255,255,255,0.9)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                transition: 'transform 0.15s, box-shadow 0.15s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)'
              }}
            >
              Demo Al
              <ArrowIcon />
            </a>
          </div>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="nav-hamburger"
            aria-label="Menü"
            style={{
              display: 'none',
              width: 36, height: 36,
              borderRadius: 8,
              background: menuOpen ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.14)',
              alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
              transition: 'background 0.2s',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {menuOpen
                ? <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>
                : <><path d="M4 8h16"/><path d="M4 16h16"/></>
              }
            </svg>
          </button>

        </motion.header>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              style={{
                marginTop: 8,
                borderRadius: 16,
                background: 'rgba(0, 18, 45, 0.95)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(121,172,220,0.18)',
                boxShadow: '0 16px 48px rgba(0,10,30,0.5)',
                padding: '12px 16px 16px',
                transformOrigin: 'top',
                overflow: 'hidden',
              }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '13px 8px',
                    borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    fontSize: 15, fontWeight: 500,
                    color: activeId === link.href.replace('#', '') ? '#79ACDC' : 'rgba(219,238,255,0.80)',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
                  </svg>
                </motion.a>
              ))}

              <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <a href="/intranet" style={{
                  padding: '11px', borderRadius: 9,
                  fontSize: 14, fontWeight: 500, textDecoration: 'none', textAlign: 'center',
                  color: 'rgba(219,238,255,0.85)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  background: 'rgba(255,255,255,0.06)',
                }}>
                  Giriş Yap
                </a>
                <a href="#demo" onClick={() => setMenuOpen(false)} style={{
                  padding: '11px', borderRadius: 9,
                  fontSize: 14, fontWeight: 700, textDecoration: 'none', textAlign: 'center',
                  color: '#003C75',
                  background: '#fff',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                }}>
                  Demo Al
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      <style>{`
        @media (max-width: 820px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
