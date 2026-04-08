'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
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
)

const CheckIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export default function CTASection() {
  const t = useTranslations()

  const STATS = [
    { value: t('cta.stat1Value'), label: t('cta.stat1Label') },
    { value: t('cta.stat2Value'), label: t('cta.stat2Label') },
    { value: t('cta.stat3Value'), label: t('cta.stat3Label') },
  ]

  const PROMISES = [
    t('cta.ctaPromise1'),
    t('cta.ctaPromise2'),
    t('cta.ctaPromise3'),
  ]
  return (
    <section
      id="demo"
      style={{
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(140deg, #001428 0%, #002a55 35%, #003C75 65%, #00509e 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            'linear-gradient(90deg, transparent 0%, rgba(121,172,220,0.5) 25%, rgba(121,172,220,0.5) 75%, transparent 100%)',
          boxShadow: '0 0 18px 2px rgba(121,172,220,0.18)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          backgroundImage: `
          linear-gradient(rgba(121,172,220,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(121,172,220,0.07) 1px, transparent 1px)
        `,
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: -160,
          right: -160,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(121,172,220,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -120,
          left: -120,
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,80,158,0.35) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 64,
        }}
        className="cta-split"
      >
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: 1, minWidth: 0 }}
        >
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: '#79ACDC',
              marginBottom: 12,
            }}
          >
            {t('cta.eyebrow')}
          </div>

          <h2
            style={{
              fontSize: 'clamp(30px, 4.5vw, 52px)',
              fontWeight: 800,
              color: '#fff',
              margin: '0 0 20px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {t('cta.sectionTitle')}
            <br />
            <span style={{ color: '#79ACDC' }}>{t('cta.sectionTitleHighlight')}</span>
          </h2>

          <p
            style={{
              fontSize: 17,
              color: 'rgba(219,238,255,0.70)',
              lineHeight: 1.72,
              margin: '0 0 36px',
              maxWidth: 460,
            }}
          >
            {t('cta.sectionSubtitle')}
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 28 }} className="cta-actions">
            <motion.button
              onClick={() => {
                window.location.href = '/iletisim#demo-form'
              }}
              whileHover={{ y: -3, boxShadow: '0 14px 40px rgba(0,0,0,0.25)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: '#fff',
                color: '#003C75',
                border: 'none',
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: 15,
                padding: '14px 32px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                transition: 'box-shadow 0.2s',
              }}
            >
              {t('cta.primaryButton')}
              <ArrowIcon />
            </motion.button>

            <motion.button
              onClick={() => {
                window.location.href = '/iletisim'
              }}
              whileHover={{ y: -3, background: 'rgba(255,255,255,0.16)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'rgba(255,255,255,0.10)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: 9999,
                fontWeight: 600,
                fontSize: 15,
                padding: '14px 28px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                backdropFilter: 'blur(8px)',
                transition: 'background 0.2s',
              }}
            >
              {t('cta.secondaryButton')}
            </motion.button>
          </div>

          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }} className="cta-promises">
            {PROMISES.map((p) => (
              <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: 'rgba(121,172,220,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#79ACDC',
                    flexShrink: 0,
                  }}
                >
                  <CheckIcon />
                </div>
                <span style={{ fontSize: 13, color: 'rgba(219,238,255,0.65)', fontWeight: 500 }}>{p}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{
            flex: '0 0 320px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: 28,
            padding: '40px 36px',
            backdropFilter: 'blur(16px)',
          }}
        >
          {STATS.map((s, i) => (
            <div key={s.label}>
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                style={{ padding: '16px 0' }}
              >
                <div
                  style={{
                    fontSize: 'clamp(28px, 3.5vw, 38px)',
                    fontWeight: 900,
                    color: '#fff',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    marginBottom: 6,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 13, color: 'rgba(219,238,255,0.55)', fontWeight: 500 }}>
                  {s.label}
                </div>
              </motion.div>
              {i < STATS.length - 1 && (
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
              )}
            </div>
          ))}

          <div
            style={{
              marginTop: 28,
              paddingTop: 24,
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div
              style={{
                fontSize: 15,
                color: 'rgba(219,238,255,0.65)',
                lineHeight: 1.65,
                marginBottom: 12,
              }}
            >
              {t('cta.testimonial')}
            </div>
            <div style={{ fontSize: 12, color: 'rgba(219,238,255,0.4)', fontWeight: 600 }}>
              {t('cta.testimonialAuthor')}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .cta-split {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .cta-split > div:last-child {
            flex: none !important;
            width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .cta-split {
            padding: 0 !important;
          }
          .cta-actions {
            flex-direction: column !important;
          }
          .cta-actions > * {
            width: 100% !important;
            justify-content: center !important;
          }
          .cta-promises {
            flex-direction: column !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  )
}
