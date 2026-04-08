'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link, useRouter } from '../../i18n/navigation'
import logo from '../../assets/logo.png'
import hcLogo from '../../assets/logos/hc-logo.webp'

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.62 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.53 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6 6l.76-.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </svg>
)



function FooterLink({ label, href }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={href || '#'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? '#79ACDC' : 'rgba(255,255,255,0.55)',
        fontSize: 14,
        display: 'block',
        marginBottom: 11,
        textDecoration: 'none',
        transition: 'color 0.18s',
        lineHeight: 1.4,
      }}
    >
      {label}
    </Link>
  )
}

function SocialButton({ Icon }) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 36,
        height: 52,
        borderRadius: 10,
        background: hovered ? 'rgba(121,172,220,0.18)' : 'rgba(255,255,255,0.07)',
        border: `1px solid ${hovered ? 'rgba(121,172,220,0.35)' : 'rgba(255,255,255,0.1)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.2s, border-color 0.2s',
        color: hovered ? '#79ACDC' : 'rgba(255,255,255,0.55)',
      }}
    >
      <Icon />
    </button>
  )
}

export default function Footer() {
  const t = useTranslations()
  const router = useRouter()

  const MODULES = [
    { key: 'pdks', href: '/moduller/pdks' },
    { key: 'ozlukDosyasi', href: '/moduller/ozluk-dosyasi' },
    { key: 'izinYonetimi', href: '/moduller/izin-yonetimi' },
    { key: 'puantaj', href: '/moduller/puantaj' },
    { key: 'erisimKontrolu', href: '/moduller/erisim-kontrolu' },
    { key: 'ziyaretciYonetimi', href: '/moduller/ziyaretci-yonetimi' },
    { key: 'yemekhane', href: '/moduller/yemekhane' },
  ]

  const COMPANY_LINKS = [
    { labelKey: 'footer.about', href: '/hakkimizda' },
    { labelKey: 'footer.blog', href: '/blog' },
    { labelKey: 'footer.career', href: '#' },
    { labelKey: 'footer.contact', href: '/iletisim' },
    { labelKey: 'footer.why', href: '/neden-airx' },
  ]

  const SUPPORT_LINKS = [
    { labelKey: 'footer.requestDemo', href: '/iletisim#demo-form' },
    { labelKey: 'footer.pricing', href: '/fiyatlar' },
    { labelKey: 'footer.privacy', href: '/gizlilik' },
    { labelKey: 'footer.terms', href: '/kullanim-kosullari' },
    { labelKey: 'footer.kvkk', href: '/kvkk' },
  ]

  return (
    <footer
      style={{
        background: '#00112e',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(121,172,220,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(121,172,220,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 800,
          height: 400,
          background: 'radial-gradient(ellipse at center bottom, rgba(0,60,117,0.45) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '40px 24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
          }}
          className="footer-cta"
        >
          <div>
            <div
              style={{
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                color: '#79ACDC',
                marginBottom: 6,
              }}
            >
              {t('footer.ready')}
            </div>
            <div style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
              {t('footer.cta')}
            </div>
          </div>

          <motion.button
            whileHover={{ y: -2, boxShadow: '0 10px 32px rgba(121,172,220,0.25)' }}
            whileTap={{ scale: 0.97 }}
            className="footer-cta-action"
            onClick={() => router.push('/iletisim#demo-form')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: '#fff',
              color: '#003C75',
              border: 'none',
              borderRadius: 9999,
              fontWeight: 700,
              fontSize: 15,
              padding: '14px 28px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              flexShrink: 0,
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              transition: 'box-shadow 0.2s',
            }}
          >
            {t('footer.freeDemo')}
            <ArrowIcon />
          </motion.button>
        </div>
      </div>

      <div style={{ padding: '56px 24px 0', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
              gap: 48,
              marginBottom: 48,
            }}
            className="footer-grid"
          >
            <div>
              <div style={{ marginBottom: 16 }}>
                <img
                  className="footer-logo"
                  src={logo.src}
                  alt="AiRX"
                  style={{
                    height: 52,
                    width: 'auto',
                    filter: 'brightness(0) invert(1)',
                    objectFit: 'contain',
                    opacity: 0.9,
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: 24,
                  lineHeight: 1.7,
                  maxWidth: 240,
                }}
              >
                {t('footer.description')}
              </p>

              <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <MailIcon />
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>info@AiRX.com.tr</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <PhoneIcon />
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>+90 (212) 000 00 00</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                <SocialButton Icon={LinkedInIcon} />
              </div>

              <img
                src={hcLogo.src}
                alt="HC Dijital"
                style={{
                  marginTop: 22,
                  height: 44,
                  width: 'auto',
                  display: 'block',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.9,
                }}
              />

              <div
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  lineHeight: 1.6,
                  letterSpacing: '0.02em',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {t('footer.hcDescription')}
              </div>
            </div>

            <div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.35)',
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 18,
                }}
              >
                {t('footer.modulesLabel')}
              </div>
              {MODULES.map((l) => (
                <FooterLink key={l.key} label={t(`modules.${l.key}`)} href={l.href} />
              ))}
            </div>

            <div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.35)',
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 18,
                }}
              >
                {t('footer.company')}
              </div>
              {COMPANY_LINKS.map((l) => (
                <FooterLink key={l.labelKey} label={t(l.labelKey)} href={l.href} />
              ))}
            </div>

            <div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.35)',
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 18,
                }}
              >
                {t('footer.support')}
              </div>
              {SUPPORT_LINKS.map((l) => (
                <FooterLink key={l.labelKey} label={t(l.labelKey)} href={l.href} />
              ))}
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.07)',
              padding: '20px 0 28px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 12,
            }}
            className="footer-bottom"
          >
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
              © 2025 {t('footer.copyright')}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
                {t('footer.madeIn')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 901px) {
          .footer-logo { height: 60px !important; }
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-cta { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .footer-bottom { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-cta-action {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  )
}

