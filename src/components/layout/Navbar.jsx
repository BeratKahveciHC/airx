import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/logo.png'

const MOBILE_NAV_BREAKPOINT = 1180

const NAV_LINKS_CONFIG = [
  { labelKey: 'nav.why', href: '/neden-airx' },
  { labelKey: 'nav.pricing', href: '/fiyatlar' },
  { labelKey: 'nav.blog', href: '/blog' },
  { labelKey: 'nav.about', href: '/hakkimizda' },
  { labelKey: 'nav.contact', href: '/iletisim' },
]

const MODULE_DROPDOWN = [
  {
    labelKey: 'nav.mod_pdks_label',
    descKey: 'nav.mod_pdks_desc',
    href: '/moduller/pdks',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z',
    accent: '#38bdf8',
  },
  {
    labelKey: 'nav.mod_ozluk_label',
    descKey: 'nav.mod_ozluk_desc',
    href: '/moduller/ozluk-dosyasi',
    icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    accent: '#a78bfa',
  },
  {
    labelKey: 'nav.mod_izin_label',
    descKey: 'nav.mod_izin_desc',
    href: '/moduller/izin-yonetimi',
    icon: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm7 9 2 2 4-4',
    accent: '#34d399',
  },
  {
    labelKey: 'nav.mod_puantaj_label',
    descKey: 'nav.mod_puantaj_desc',
    href: '/moduller/puantaj',
    icon: 'M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18',
    accent: '#fbbf24',
  },
  {
    labelKey: 'nav.mod_erisim_label',
    descKey: 'nav.mod_erisim_desc',
    href: '/moduller/erisim-kontrolu',
    icon: 'M21 2l-9.6 9.6m0 0 3 3L22 7l-3-3M7.5 21a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z',
    accent: '#f87171',
  },
  {
    labelKey: 'nav.mod_ziyaretci_label',
    descKey: 'nav.mod_ziyaretci_desc',
    href: '/moduller/ziyaretci-yonetimi',
    icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm9 4 2 2 4-4',
    accent: '#22d3ee',
  },
  {
    labelKey: 'nav.mod_yemekhane_label',
    descKey: 'nav.mod_yemekhane_desc',
    href: '/moduller/yemekhane',
    icon: 'M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7',
    accent: '#fb923c',
  },
  {
    labelKey: 'nav.mod_anket_label',
    descKey: 'nav.mod_anket_desc',
    href: '/moduller/anket',
    icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
    accent: '#a3e635',
  },
  {
    labelKey: 'nav.mod_sureli_label',
    descKey: 'nav.mod_sureli_desc',
    href: '/moduller/sureli-evraklar',
    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 15a3 3 0 1 0 6 0M12 12v3',
    accent: '#f472b6',
  },
  {
    labelKey: 'nav.mod_egitim_label',
    descKey: 'nav.mod_egitim_desc',
    href: '/moduller/egitim-planlama',
    icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
    accent: '#60a5fa',
  },
  {
    labelKey: 'nav.mod_hukuki_label',
    descKey: 'nav.mod_hukuki_desc',
    href: '/moduller/hukuki-evraklar',
    icon: 'm16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Zm-14 0 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1ZM7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2',
    accent: '#818cf8',
  },
  {
    labelKey: 'nav.mod_yanHaklar_label',
    descKey: 'nav.mod_yanHaklar_desc',
    href: '/moduller/yan-haklar',
    icon: 'M20 12V22H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z',
    accent: '#2dd4bf',
  },
  {
    labelKey: 'nav.mod_periyodik_label',
    descKey: 'nav.mod_periyodik_desc',
    href: '/moduller/periyodik-gorev',
    icon: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M3 21v-5h5',
    accent: '#c084fc',
  },
  {
    labelKey: 'nav.mod_isZekasi_label',
    descKey: 'nav.mod_isZekasi_desc',
    href: '/moduller/is-zekasi',
    icon: 'M18 20V10M12 20V4M6 20v-6',
    accent: '#79ACDC',
  },
]

const SECTION_IDS = ['urun', 'moduller', 'guvenlik', 'fiyatlar']

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [modulesOpen, setModulesOpen] = useState(false)
  const [mobileModulesOpen, setMobileModulesOpen] = useState(false)

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
  }

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
          setActiveId(SECTION_IDS.find(section => visible.has(section)) || '')
        },
        { threshold: 0.3 }
      )

      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(observer => observer.disconnect())
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const close = () => {
      if (window.innerWidth > MOBILE_NAV_BREAKPOINT) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', close)

    return () => window.removeEventListener('resize', close)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) setMobileModulesOpen(false)
  }, [menuOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: '#fff',
          borderBottom: `1px solid ${
            scrolled && !modulesOpen ? '#e2e8f0' : modulesOpen ? 'transparent' : '#f1f5f9'
          }`,
          boxShadow: scrolled && !modulesOpen ? '0 1px 12px rgba(0,0,0,0.07)' : 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
      >
        <div
          className="nav-shell"
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '0 24px',
            height: 68,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            position: 'relative',
          }}
        >
          <a
            className="navbar-brand"
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <img className="navbar-logo" src={logo} alt="AiRX" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
          </a>

          <nav
            className="nav-desktop nav-desktop-center"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 0,
            }}
          >
            <div
              style={{ position: 'static' }}
              onMouseEnter={() => setModulesOpen(true)}
              onMouseLeave={() => setModulesOpen(false)}
            >
              <button
                style={{
                  fontSize: 14,
                  fontWeight: modulesOpen ? 600 : 500,
                  color: modulesOpen ? '#003C75' : '#374151',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 14px',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  whiteSpace: 'nowrap',
                  transition: 'color 0.15s',
                }}
              >
                {t('nav.modules')}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transition: 'transform 0.2s',
                    transform: modulesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>

            {NAV_LINKS_CONFIG.map(link => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id

              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: isActive ? '#003C75' : '#374151',
                    textDecoration: 'none',
                    padding: '8px 14px',
                    borderRadius: 6,
                    transition: 'color 0.15s',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                  }}
                  onMouseEnter={event => {
                    event.currentTarget.style.color = '#003C75'
                  }}
                  onMouseLeave={event => {
                    event.currentTarget.style.color = isActive ? '#003C75' : '#374151'
                  }}
                >
                  {t(link.labelKey)}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 14,
                        right: 14,
                        height: 2,
                        background: '#003C75',
                        borderRadius: 2,
                      }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          <div
            className="nav-desktop nav-desktop-actions"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              flexShrink: 0,
              marginLeft: 'auto',
            }}
          >
            {/* Language Switcher */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                padding: '4px 4px',
                backgroundColor: '#f3f4f6',
                borderRadius: 6,
              }}
            >
              <button
                onClick={() => handleLanguageChange('tr')}
                title="Türkçe"
                style={{
                  padding: '4px 6px',
                  borderRadius: 4,
                  border: 'none',
                  background: i18n.language === 'tr' ? '#fff' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  boxShadow: i18n.language === 'tr' ? '0 1px 3px rgba(0,0,0,0.12)' : 'none',
                  opacity: i18n.language === 'tr' ? 1 : 0.45,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {/* Türk Bayrağı */}
                <svg viewBox="0 0 300 200" width="26" height="17" style={{ display: 'block', borderRadius: 2 }}>
                  <rect width="300" height="200" fill="#E30A17"/>
                  <circle cx="110" cy="100" r="75" fill="white"/>
                  <circle cx="140" cy="100" r="59" fill="#E30A17"/>
                  <polygon fill="white" points="190,70 197.1,90.3 218.5,90.7 201.4,103.7 207.6,124.3 190,112 172.4,124.3 178.6,103.7 161.5,90.7 182.9,90.3"/>
                </svg>
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                title="English"
                style={{
                  padding: '4px 6px',
                  borderRadius: 4,
                  border: 'none',
                  background: i18n.language === 'en' ? '#fff' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  boxShadow: i18n.language === 'en' ? '0 1px 3px rgba(0,0,0,0.12)' : 'none',
                  opacity: i18n.language === 'en' ? 1 : 0.45,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {/* UK Bayrağı */}
                <svg viewBox="0 0 60 30" width="26" height="13" style={{ display: 'block', borderRadius: 2 }}>
                  <rect width="60" height="30" fill="#012169"/>
                  <line x1="0" y1="0" x2="60" y2="30" stroke="white" strokeWidth="6"/>
                  <line x1="60" y1="0" x2="0" y2="30" stroke="white" strokeWidth="6"/>
                  <line x1="0" y1="0" x2="60" y2="30" stroke="#C8102E" strokeWidth="2"/>
                  <line x1="60" y1="0" x2="0" y2="30" stroke="#C8102E" strokeWidth="2"/>
                  <line x1="30" y1="0" x2="30" y2="30" stroke="white" strokeWidth="10"/>
                  <line x1="0" y1="15" x2="60" y2="15" stroke="white" strokeWidth="10"/>
                  <line x1="30" y1="0" x2="30" y2="30" stroke="#C8102E" strokeWidth="6"/>
                  <line x1="0" y1="15" x2="60" y2="15" stroke="#C8102E" strokeWidth="6"/>
                </svg>
              </button>
            </div>

            <a
              href="https://panel.airx.com.tr/login"
              style={{
                padding: '8px 14px',
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                color: '#374151',
                border: '1px solid #d1d5db',
                background: '#fff',
                transition: 'border-color 0.15s, background 0.15s',
              }}
              onMouseEnter={event => {
                event.currentTarget.style.borderColor = '#9ca3af'
                event.currentTarget.style.background = '#f9fafb'
              }}
              onMouseLeave={event => {
                event.currentTarget.style.borderColor = '#d1d5db'
                event.currentTarget.style.background = '#fff'
              }}
            >
              {t('nav.signIn')}
            </a>
            <a
              href="/iletisim#demo-form"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                padding: '8px 16px',
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                color: '#fff',
                background: '#003C75',
                transition: 'background 0.15s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={event => {
                event.currentTarget.style.background = '#002e5c'
              }}
              onMouseLeave={event => {
                event.currentTarget.style.background = '#003C75'
              }}
            >
              {t('nav.requestDemo')}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Mobile: flags + hamburger grouped */}
          <div
            className="nav-hamburger"
            style={{ display: 'none', alignItems: 'center', gap: 6 }}
          >
            {/* Flag switcher */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                padding: '3px 3px',
                backgroundColor: '#f3f4f6',
                borderRadius: 6,
              }}
            >
              <button
                onClick={() => handleLanguageChange('tr')}
                title="Türkçe"
                style={{
                  padding: '3px 5px',
                  borderRadius: 4,
                  border: 'none',
                  background: i18n.language === 'tr' ? '#fff' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  boxShadow: i18n.language === 'tr' ? '0 1px 3px rgba(0,0,0,0.12)' : 'none',
                  opacity: i18n.language === 'tr' ? 1 : 0.45,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <svg viewBox="0 0 300 200" width="24" height="16" style={{ display: 'block', borderRadius: 2 }}>
                  <rect width="300" height="200" fill="#E30A17"/>
                  <circle cx="110" cy="100" r="75" fill="white"/>
                  <circle cx="140" cy="100" r="59" fill="#E30A17"/>
                  <polygon fill="white" points="190,70 197.1,90.3 218.5,90.7 201.4,103.7 207.6,124.3 190,112 172.4,124.3 178.6,103.7 161.5,90.7 182.9,90.3"/>
                </svg>
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                title="English"
                style={{
                  padding: '3px 5px',
                  borderRadius: 4,
                  border: 'none',
                  background: i18n.language === 'en' ? '#fff' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  boxShadow: i18n.language === 'en' ? '0 1px 3px rgba(0,0,0,0.12)' : 'none',
                  opacity: i18n.language === 'en' ? 1 : 0.45,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <svg viewBox="0 0 60 30" width="24" height="12" style={{ display: 'block', borderRadius: 2 }}>
                  <rect width="60" height="30" fill="#012169"/>
                  <line x1="0" y1="0" x2="60" y2="30" stroke="white" strokeWidth="6"/>
                  <line x1="60" y1="0" x2="0" y2="30" stroke="white" strokeWidth="6"/>
                  <line x1="0" y1="0" x2="60" y2="30" stroke="#C8102E" strokeWidth="2"/>
                  <line x1="60" y1="0" x2="0" y2="30" stroke="#C8102E" strokeWidth="2"/>
                  <line x1="30" y1="0" x2="30" y2="30" stroke="white" strokeWidth="10"/>
                  <line x1="0" y1="15" x2="60" y2="15" stroke="white" strokeWidth="10"/>
                  <line x1="30" y1="0" x2="30" y2="30" stroke="#C8102E" strokeWidth="6"/>
                  <line x1="0" y1="15" x2="60" y2="15" stroke="#C8102E" strokeWidth="6"/>
                </svg>
              </button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(open => !open)}
              aria-label="Menü"
              style={{
                width: 38,
                height: 38,
                borderRadius: 6,
                background: 'transparent',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#374151',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
            </button>
          </div>
        </div>

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
              <div
                style={{
                  maxWidth: 1200,
                  margin: '0 auto',
                  padding: '32px 40px 36px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 24,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: '#79ACDC',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: 4,
                      }}
                    >
                      {t('nav.dropdownHeader')}
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: '#0f172a' }}>
                      {t('nav.dropdownTitle')}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, 1fr)',
                    gap: 6,
                  }}
                >
                  {MODULE_DROPDOWN.map(module => (
                    <a
                      key={module.labelKey}
                      href={module.href}
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
                      onMouseEnter={event => {
                        event.currentTarget.style.background = '#f8fbff'
                        event.currentTarget.style.borderColor = '#dbeeff'
                        event.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={event => {
                        event.currentTarget.style.background = 'transparent'
                        event.currentTarget.style.borderColor = 'transparent'
                        event.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 9,
                          background: `${module.accent}18`,
                          border: `1px solid ${module.accent}33`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={module.accent}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={module.icon} />
                        </svg>
                      </div>

                      <div>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: '#0f172a',
                            marginBottom: 2,
                            lineHeight: 1.3,
                          }}
                        >
                          {t(module.labelKey)}
                        </div>
                        <div style={{ fontSize: 11.5, color: '#64748b', lineHeight: 1.4 }}>
                          {t(module.descKey)}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: 24,
                    paddingTop: 20,
                    borderTop: '1px solid #f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 24,
                  }}
                >
                  <span style={{ fontSize: 12.5, color: '#94a3b8' }}>
                    {t('nav.dropdownFooter')}
                  </span>
                  <a
                    href="/fiyatlar"
                    style={{ fontSize: 12.5, fontWeight: 600, color: '#003C75', textDecoration: 'none' }}
                    onMouseEnter={event => {
                      event.currentTarget.style.textDecoration = 'underline'
                    }}
                    onMouseLeave={event => {
                      event.currentTarget.style.textDecoration = 'none'
                    }}
                  >
                    {t('nav.dropdownPricing')} →
                  </a>
                  <a
                    href="/iletisim#demo-form"
                    style={{ fontSize: 12.5, fontWeight: 600, color: '#003C75', textDecoration: 'none' }}
                    onMouseEnter={event => {
                      event.currentTarget.style.textDecoration = 'underline'
                    }}
                    onMouseLeave={event => {
                      event.currentTarget.style.textDecoration = 'none'
                    }}
                  >
                    {t('nav.dropdownDemo')} →
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                overflowX: 'hidden',
                overflowY: 'auto',
                maxHeight: 'calc(100vh - 68px)',
                WebkitOverflowScrolling: 'touch',
                overscrollBehavior: 'contain',
                borderTop: '1px solid #f1f5f9',
                background: '#fff',
              }}
            >
              <div style={{ padding: '8px 24px 20px' }}>
                <div style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <button
                    onClick={() => setMobileModulesOpen(open => !open)}
                    aria-expanded={mobileModulesOpen}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 12,
                      padding: '12px 0',
                      fontSize: 15,
                      fontWeight: 500,
                      color: '#374151',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span>{t('nav.modules')}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        color: '#64748b',
                        transition: 'transform 0.2s ease',
                        transform: mobileModulesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        flexShrink: 0,
                      }}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileModulesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          className="nav-mobile-modules-grid"
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 10,
                            padding: '0 0 14px',
                          }}
                        >
                          {MODULE_DROPDOWN.map(module => (
                            <a
                              key={module.labelKey}
                              href={module.href}
                              onClick={() => {
                                setMobileModulesOpen(false)
                                setMenuOpen(false)
                              }}
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: 10,
                                padding: '12px',
                                borderRadius: 12,
                                textDecoration: 'none',
                                background: '#f8fbff',
                                border: '1px solid #e7eef7',
                                minWidth: 0,
                              }}
                            >
                              <div
                                style={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: 11,
                                  background: `${module.accent}18`,
                                  border: `1px solid ${module.accent}33`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                }}
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke={module.accent}
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d={module.icon} />
                                </svg>
                              </div>

                              <div style={{ minWidth: 0 }}>
                                <div
                                  style={{
                                    fontSize: 13.5,
                                    fontWeight: 600,
                                    color: '#0f172a',
                                    lineHeight: 1.35,
                                    marginBottom: 2,
                                  }}
                                >
                                  {t(module.labelKey)}
                                </div>
                                <div
                                  style={{
                                    fontSize: 12,
                                    color: '#64748b',
                                    lineHeight: 1.45,
                                  }}
                                >
                                  {t(module.descKey)}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {NAV_LINKS_CONFIG.map((link, index) => (
                  <a
                    key={link.labelKey}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'block',
                      padding: '12px 0',
                      borderBottom: index < NAV_LINKS_CONFIG.length - 1 ? '1px solid #f1f5f9' : 'none',
                      fontSize: 15,
                      fontWeight: 500,
                      color: '#374151',
                      textDecoration: 'none',
                    }}
                  >
                    {t(link.labelKey)}
                  </a>
                ))}

                <div
                  className="nav-mobile-actions"
                  style={{
                    marginTop: 16,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 10,
                  }}
                >
                  <a
                    href="https://panel.airx.com.tr/login"
                    style={{
                      padding: '11px',
                      borderRadius: 6,
                      fontSize: 14,
                      fontWeight: 500,
                      textDecoration: 'none',
                      textAlign: 'center',
                      color: '#374151',
                      border: '1px solid #d1d5db',
                    }}
                  >
                    {t('nav.signIn')}
                  </a>
                  <a
                    href="/iletisim#demo-form"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      padding: '11px',
                      borderRadius: 6,
                      fontSize: 14,
                      fontWeight: 600,
                      textDecoration: 'none',
                      textAlign: 'center',
                      color: '#fff',
                      background: '#003C75',
                    }}
                  >
                    {t('nav.requestDemo')}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div style={{ height: 68 }} />

      <style>{`
        @media (min-width: ${MOBILE_NAV_BREAKPOINT + 1}px) {
          .navbar-logo { height: 38px !important; }
          .navbar-brand { margin-left: 75px !important; }
          .nav-desktop-center {
            position: absolute !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            justify-content: center !important;
            gap: 2px !important;
          }
        }
        @media (min-width: ${MOBILE_NAV_BREAKPOINT + 1}px) and (max-width: 1180px) {
          .nav-shell { padding: 0 18px !important; gap: 18px !important; }
        }
        @media (max-width: ${MOBILE_NAV_BREAKPOINT}px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }

        @media (max-width: 640px) {
          .nav-mobile-modules-grid,
          .nav-mobile-actions {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          header > div { padding: 0 16px !important; }
        }
      `}</style>
    </>
  )
}
