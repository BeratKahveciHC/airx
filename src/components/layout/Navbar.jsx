import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Ürün',       href: '/#urun'     },
  { label: 'Modüller',   href: '/#moduller' },
  { label: 'Neden Airx', href: '/#neden'    },
  { label: 'Blog',       href: '/blog'      },
  { label: 'İletişim',   href: '/iletisim'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? '#001d3d' : '#002952',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 24px rgba(0,20,60,0.18)' : 'none',
      transition: 'background 0.3s ease, box-shadow 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 76,
      }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36,
            borderRadius: 10,
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 800, fontSize: 16, letterSpacing: '-0.5px',
          }}>
            A
          </div>
          <span style={{ fontWeight: 800, fontSize: 19, color: '#fff', letterSpacing: '-0.4px' }}>
            AIRX
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 14, fontWeight: 500,
                color: 'rgba(219,238,255,0.80)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'rgba(219,238,255,0.80)'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="desktop-nav">
          <a
            href="/intranet"
            style={{
              padding: '9px 20px',
              borderRadius: 9999,
              fontSize: 14, fontWeight: 500,
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center',
              color: 'rgba(219,238,255,0.85)',
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.07)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.14)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
          >
            Giriş Yap
          </a>
          <a
            href="/#demo"
            className="btn-glass"
            style={{
              padding: '9px 22px',
              borderRadius: 9999,
              fontSize: 14, fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 7,
            }}
          >
            Demo Talep Et
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="mobile-menu-btn"
          style={{
            background: 'rgba(255,255,255,0.10)',
            border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: 10, padding: 8, cursor: 'pointer',
            color: '#fff',
            display: 'none',
          }}
          aria-label="Menü"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen
              ? <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>
              : <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobil menü */}
      {menuOpen && (
        <div style={{
          background: '#002952',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '12px 24px 20px',
        }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                display: 'block',
                padding: '13px 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                fontSize: 15, fontWeight: 500,
                color: 'rgba(219,238,255,0.80)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="/intranet" style={{
              padding: '12px 20px', borderRadius: 9999,
              fontSize: 14, fontWeight: 500, textDecoration: 'none', textAlign: 'center',
              color: 'rgba(219,238,255,0.85)',
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.07)',
            }}>
              Giriş Yap
            </a>
            <a href="/#demo" className="btn-glass" style={{
              padding: '12px 20px', borderRadius: 9999,
              fontSize: 14, fontWeight: 700, textDecoration: 'none', textAlign: 'center',
              justifyContent: 'center',
            }}>
              Demo Talep Et
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (max-width: 1024px) {
          .desktop-nav nav { gap: 20px !important; }
        }
      `}</style>
    </header>
  )
}
