'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const CalendarCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <path d="m9 16 2 2 4-4"/>
  </svg>
)

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
)

const CheckCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

/* ── Kartın giriş animasyonları — her biri farklı ── */
const CARD_VARIANTS = [
  {
    hidden:  { opacity: 0, x: -56, rotate: -5 },
    visible: { opacity: 1, x: 0,   rotate: 0  },
  },
  {
    hidden:  { opacity: 0, y: 56, scale: 0.88 },
    visible: { opacity: 1, y: 0,  scale: 1    },
  },
  {
    hidden:  { opacity: 0, x: 56, rotate: 5 },
    visible: { opacity: 1, x: 0,  rotate: 0 },
  },
]

/* ── Aralarındaki animasyonlu çizgi ── */
const AnimatedConnector = ({ delay }) => (
  <div className="how-connector" style={{
    flex: '0 0 52px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    paddingBottom: 8,
  }}>
    <div style={{ position: 'relative', width: 44, height: 2 }}>
      {/* Zemin çizgi */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,60,117,0.10)', borderRadius: 2,
      }} />
      {/* Animasyonlu dolgu */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.3, ease: 'easeOut' }}
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, #003C75, #79ACDC)',
          borderRadius: 2,
          transformOrigin: 'left',
        }}
      />
      {/* Ok başı */}
      <motion.div
        initial={{ opacity: 0, x: -6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, delay: delay + 0.8 }}
        style={{
          position: 'absolute', right: -7, top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <svg width="8" height="12" viewBox="0 0 8 12">
          <path d="M0 0 L8 6 L0 12 Z" fill="#79ACDC"/>
        </svg>
      </motion.div>
    </div>
  </div>
)

export default function HowItWorks() {
  const t = useTranslations()

  const STEPS = [
    {
      num: t('howItWorks.step1Num'),
      Icon: CalendarCheckIcon,
      title: t('howItWorks.step1Title'),
      desc: t('howItWorks.step1Desc'),
      tag: t('howItWorks.step1Tag'),
      tagColor: '#15803d',
      tagBg: 'rgba(34,197,94,0.09)',
    },
    {
      num: t('howItWorks.step2Num'),
      Icon: SettingsIcon,
      title: t('howItWorks.step2Title'),
      desc: t('howItWorks.step2Desc'),
      tag: t('howItWorks.step2Tag'),
      tagColor: '#0369a1',
      tagBg: 'rgba(3,105,161,0.08)',
    },
    {
      num: t('howItWorks.step3Num'),
      Icon: CheckCircleIcon,
      title: t('howItWorks.step3Title'),
      desc: t('howItWorks.step3Desc'),
      tag: t('howItWorks.step3Tag'),
      tagColor: '#7c3aed',
      tagBg: 'rgba(124,58,237,0.08)',
    },
  ]

  return (
    <section id="nasil-calisir" style={{ padding: '96px 24px', background: 'linear-gradient(180deg, #ffffff 0%, #f4f8fd 100%)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>

        {/* ── Başlık ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700, color: '#003C75',
            margin: '0 0 14px', lineHeight: 1.15,
          }}>
            {t('howItWorks.sectionTitle')}
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 420, margin: '0 auto', lineHeight: 1.65 }}>
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        {/* ── Adımlar ── */}
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 0 }} className="how-steps-row">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.num}>
              <motion.div
                key={step.num}
                variants={CARD_VARIANTS[i]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ default: { duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }, y: { duration: 0.2, ease: 'easeOut' }, boxShadow: { duration: 0.2, ease: 'easeOut' } }}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(0,60,117,0.13)' }}
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: '#fff',
                  border: '1px solid rgba(0,60,117,0.09)',
                  borderRadius: 22,
                  padding: '36px 30px 30px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(0,60,117,0.06)',
                  cursor: 'default',
                }}
              >
                {/* Üst gradyan çizgi */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: 'linear-gradient(90deg, #003C75, #79ACDC)',
                  borderRadius: '22px 22px 0 0',
                }} />

                {/* Numara badge */}
                <div style={{
                  position: 'absolute', right: 24, top: 24,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 48, height: 48, borderRadius: 14,
                  background: 'linear-gradient(135deg, #003C75, #1a6aaa)',
                  color: '#fff', fontSize: 17, fontWeight: 800,
                  boxShadow: '0 4px 14px rgba(0,60,117,0.28)',
                }}>
                  {step.num}
                </div>

                {/* İkon */}
                <div style={{
                  width: 50, height: 50, borderRadius: 14,
                  background: 'linear-gradient(135deg, rgba(0,60,117,0.07), rgba(121,172,220,0.14))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <step.Icon />
                </div>

                <h3 style={{ fontSize: 19, fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.72, color: '#64748b', margin: '0 0 20px' }}>
                  {step.desc}
                </p>

                {/* Alt tag */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: step.tagBg,
                  padding: '5px 12px', borderRadius: 100,
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: step.tagColor }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: step.tagColor }}>
                    {step.tag}
                  </span>
                </div>
              </motion.div>

              {/* Connector */}
              {i < STEPS.length - 1 && (
                <AnimatedConnector key={`c-${i}`} delay={i * 0.15} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .how-steps-row {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .how-connector {
            display: none !important;
          }
          .how-steps-row > div {
            flex: none !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
