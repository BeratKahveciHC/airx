'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import logo from '../../assets/logo.png'

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

export default function Hero() {
  const t = useTranslations()
  const STATS = [
    { target: 150, suffix: '+',  label: t('hero.stat1Label') },
    { target: 15,  suffix: 'K+', label: t('hero.stat2Label') },
    { target: 14,  suffix: '',   label: t('hero.stat3Label') },
    { target: 99,  prefix: '%',  label: t('hero.stat4Label') },
  ]
  const MARQUEE_MODS = [
    { key: 'pdks',      nameKey: 'nav.mod_pdks_label',      accent: '#38bdf8', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
    { key: 'ozluk',     nameKey: 'nav.mod_ozluk_label',     accent: '#a78bfa', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
    { key: 'izin',      nameKey: 'nav.mod_izin_label',      accent: '#34d399', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
    { key: 'puantaj',   nameKey: 'nav.mod_puantaj_label',   accent: '#fbbf24', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
    { key: 'erisim',    nameKey: 'nav.mod_erisim_label',    accent: '#f87171', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
    { key: 'ziyaretci', nameKey: 'nav.mod_ziyaretci_label', accent: '#22d3ee', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
    { key: 'yemekhane', nameKey: 'nav.mod_yemekhane_label', accent: '#fb923c', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg> },
    { key: 'anket',     nameKey: 'nav.mod_anket_label',     accent: '#a3e635', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> },
    { key: 'sureli',    nameKey: 'nav.mod_sureli_label',    accent: '#f472b6', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><circle cx="11" cy="14" r="2"/><path d="M11 16v4"/></svg> },
    { key: 'egitim',    nameKey: 'nav.mod_egitim_label',    accent: '#60a5fa', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> },
    { key: 'hukuki',    nameKey: 'nav.mod_hukuki_label',    accent: '#818cf8', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 6-8 4-4-2V4l4 2 8-4 4 2v4l-4-2z"/><path d="M8 10v10"/><path d="M16 6v10"/><path d="M4 8v10l4 2 8-4 4 2V8"/></svg> },
    { key: 'yanHaklar', nameKey: 'nav.mod_yanHaklar_label', accent: '#2dd4bf', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg> },
    { key: 'periyodik', nameKey: 'nav.mod_periyodik_label', accent: '#c084fc', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg> },
    { key: 'isZekasi',  nameKey: 'nav.mod_isZekasi_label',  accent: '#79ACDC', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
  ]
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
          gap: 120,
        }} className="hero-split">

          {/* ── SOL: Metin ── */}
          <div style={{ flex: '1 1 0', minWidth: 0 }} className="hero-content-col">

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
              {t('hero.title')}{' '}
              <span style={{ color: '#003C75' }}>{t('hero.titleHighlight')}</span>
              <br />
              {t('hero.titleLine2')}
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
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}
              className="hero-actions"
            >
              <a
                href="/iletisim#demo-form"
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
                {t('hero.demoButton')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
                </svg>
              </a>
              <a
                href="/iletisim"
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
                {t('hero.contactButton')}
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
            style={{ flex: '1.85 1 0', minWidth: 0, position: 'relative', marginRight: '-40px', paddingTop: 112 }}
            className="hero-mockup-col"
          >
            {/* ── Telefon Mockup (sol alt köşe, absolute) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hero-phone-mockup"
              style={{
                position: 'absolute',
                bottom: -24,
                left: -72,
                zIndex: 10,
              }}
            >
              <div style={{
                width: 160,
                height: 340,
                borderRadius: 32,
                background: 'linear-gradient(160deg, #e8f2fc 0%, #c2d9f0 100%)',
                border: '5px solid #8fb8dc',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.7), inset 0 0 0 1px rgba(255,255,255,0.4), 0 32px 64px rgba(0,30,80,0.30), 0 8px 20px rgba(0,60,117,0.18)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* yan butonlar */}
                <div style={{ position: 'absolute', left: -6, top: 54, width: 3, height: 16, background: '#003C75', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', left: -6, top: 76, width: 3, height: 16, background: '#003C75', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', right: -6, top: 68, width: 3, height: 28, background: '#003C75', borderRadius: '0 2px 2px 0' }} />

                <div style={{ borderRadius: 27, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#f8fafc', height: '100%' }}>
                  {/* status bar */}
                  <div style={{ height: 24, background: '#b8d3ec', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', flexShrink: 0 }}>
                    <span style={{ fontSize: 7.5, fontWeight: 700, color: '#002850' }}>09:41</span>
                    <div style={{ width: 40, height: 11, borderRadius: 6, background: '#003C75' }} />
                    <div style={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                      {[3,5,7,9].map((h,i) => <div key={i} style={{ width: 1.5, height: h, borderRadius: 1, background: i < 3 ? '#002850' : 'rgba(0,40,80,0.3)' }} />)}
                    </div>
                  </div>

                  {/* header */}
                  <div style={{ background: '#fff', padding: '8px 10px 6px', borderBottom: '1px solid #e8f0f9' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 6 }}>
                      <div>
                        <div style={{ fontSize: 7, color: '#64748b' }}>Günaydın,</div>
                        <div style={{ fontSize: 9, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Berat Kaan SEVEN</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 6.5, color: '#64748b' }}>Toplam Çalışılan Süre</div>
                        <div style={{ fontSize: 11, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>03s 12dk</div>
                      </div>
                    </div>
                  </div>

                  {/* durum */}
                  <div style={{ background: '#fff', margin: '6px 6px 0', borderRadius: 8, border: '1px solid #e2e8f0', padding: '6px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: 6.5, fontWeight: 700, color: '#334155', marginBottom: 3 }}>Mevcut Durum</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                        <span style={{ fontSize: 8, fontWeight: 700, color: '#0f172a' }}>Çalışıyor</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 6, color: '#64748b', marginBottom: 3 }}>Son Hareket: <strong style={{ color: '#0f172a' }}>08.02</strong></div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 3, justifyContent: 'flex-end' }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="5" y="5" width="3" height="3" fill="#003C75" stroke="none"/><rect x="16" y="5" width="3" height="3" fill="#003C75" stroke="none"/><rect x="5" y="16" width="3" height="3" fill="#003C75" stroke="none"/></svg>
                        <span style={{ fontSize: 7, fontWeight: 700, color: '#003C75' }}>QR ile Giriş</span>
                      </div>
                    </div>
                  </div>

                  {/* butonlar */}
                  <div style={{ display: 'flex', gap: 5, padding: '6px 6px 0' }}>
                    <div style={{ flex: 1, height: 30, background: '#22c55e', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8.5, fontWeight: 800, color: '#fff', boxShadow: '0 2px 8px rgba(34,197,94,0.35)' }}>Giriş Yap</div>
                    <div style={{ flex: 1, height: 30, background: '#ef4444', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8.5, fontWeight: 800, color: '#fff', boxShadow: '0 2px 8px rgba(239,68,68,0.35)' }}>Çıkış Yap</div>
                  </div>
                  <div style={{ margin: '5px 6px 0', height: 28, background: '#f59e0b', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, fontSize: 8, fontWeight: 800, color: '#fff', boxShadow: '0 2px 8px rgba(245,158,11,0.35)' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    Mola Başlat
                  </div>

                  {/* vardiya */}
                  <div style={{ background: '#fff', margin: '6px 6px 0', borderRadius: 8, border: '1px solid #e2e8f0', padding: '6px 8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                      <span style={{ fontSize: 7.5, fontWeight: 800, color: '#0f172a' }}>Bugünkü Vardiya</span>
                      <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 20, padding: '1px 6px', display: 'flex', alignItems: 'center', gap: 3 }}>
                        <div style={{ width: 8, height: 8, borderRadius: 4, background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ width: 4, height: 4, borderRadius: 2, background: '#fff' }} />
                        </div>
                        <span style={{ fontSize: 6, fontWeight: 700, color: '#c2410c' }}>Ekstra</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 5 }}>
                      <div style={{ flex: 1, background: '#f8fafc', borderRadius: 6, padding: '4px 6px', textAlign: 'center' }}>
                        <div style={{ fontSize: 6, color: '#64748b', marginBottom: 1 }}>Başlangıç</div>
                        <div style={{ fontSize: 9, fontWeight: 800, color: '#0f172a' }}>08:00</div>
                      </div>
                      <div style={{ flex: 1, background: '#f8fafc', borderRadius: 6, padding: '4px 6px', textAlign: 'center' }}>
                        <div style={{ fontSize: 6, color: '#64748b', marginBottom: 1 }}>Bitiş</div>
                        <div style={{ fontSize: 9, fontWeight: 800, color: '#0f172a' }}>19:00</div>
                      </div>
                    </div>
                  </div>

                  {/* görevlerim */}
                  <div style={{ margin: '6px 6px 6px', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', padding: '6px 8px' }}>
                    <div style={{ fontSize: 7.5, fontWeight: 800, color: '#0f172a', marginBottom: 5 }}>Görevlerim</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {[
                        { label: 'Reyonlar düzenlenicek', color: '#ef4444' },
                        { label: 'Market Arabaları Sıraya Dizilecek', color: '#22c55e' },
                        { label: 'Z Raporu Oluşturulacak', color: '#22c55e' },
                        { label: 'Aylık Tahsilat Raporu Hazırlanacak', color: '#ef4444' },
                        { label: 'Sunumlar hazırlanacak', color: '#eab308' },
                      ].map((g, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: g.color, flexShrink: 0 }} />
                          <span style={{ fontSize: 6.5, color: '#334155', lineHeight: 1.3 }}>{g.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* bottom nav */}
                  <div style={{ background: '#fff', borderTop: '1px solid #e8f0f9', display: 'flex', justifyContent: 'space-around', padding: '5px 0 7px' }}>
                    {[
                      { label: 'Anasayfa', active: true, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
                      { label: 'Talepler', active: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="9" x2="9" y2="21"/></svg> },
                      { label: 'Gelen Kutusu', active: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                      { label: 'Profil', active: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
                    ].map(item => (
                      <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: item.active ? '#003C75' : 'rgba(0,60,117,0.3)' }}>
                        {item.icon}
                        <span style={{ fontSize: 5.5, fontWeight: item.active ? 700 : 500 }}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Giriş Yöntemi Floating Badges (3×2 grid, mockup üstü) ── */}
            <div
              className="hero-feature-badges"
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 8,
                zIndex: 20,
              }}
            >
              {[
                {
                  label: t('hero.entryMobilePdks'),
                  color: '#003C75', bg: '#e8f2fc',
                  delay: 0.68,
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1"/></svg>,
                },
                {
                  label: t('hero.entryQr'),
                  color: '#7c3aed', bg: '#f3eeff',
                  delay: 0.76,
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="5" y="5" width="3" height="3" fill="currentColor" stroke="none"/><rect x="16" y="5" width="3" height="3" fill="currentColor" stroke="none"/><rect x="5" y="16" width="3" height="3" fill="currentColor" stroke="none"/><path d="M16 14h2v2h-2zM18 16h2v2h-2zM14 18h2v2h-2z"/></svg>,
                },
                {
                  label: 'WiFi Giriş',
                  color: '#0891b2', bg: '#e0f9ff',
                  delay: 0.84,
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/></svg>,
                },
                {
                  label: 'GPS Giriş',
                  color: '#059669', bg: '#ecfdf5',
                  delay: 0.92,
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                },
                {
                  label: 'Remote Giriş',
                  color: '#d97706', bg: '#fffbeb',
                  delay: 1.00,
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
                },
                {
                  label: 'Kontrol Noktası',
                  color: '#dc2626', bg: '#fef2f2',
                  delay: 1.08,
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>,
                },
              ].map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: badge.delay, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 12px 8px 8px',
                    background: '#fff',
                    borderRadius: 10,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  <div style={{
                    width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                    background: badge.bg, color: badge.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {badge.icon}
                  </div>
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: '#1e293b', whiteSpace: 'nowrap' }}>{badge.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Dashboard */}
            <div style={{
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
              boxShadow: '0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)',
              background: '#fff',
            }} className="hero-dashboard-shell">

              {/* Browser chrome */}
              <div style={{ background: '#f8fafc', borderBottom: '1px solid #e8ecf2', padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 4 }}>
                  {['#ff6058','#ffbd2e','#28c840'].map(c => (
                    <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div style={{ flex: 1, maxWidth: 200, margin: '0 auto', background: '#e8ecf2', borderRadius: 4, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  <span style={{ fontSize: 9, color: '#94a3b8' }}>panel.AiRX.com.tr</span>
                </div>
              </div>

              {/* App top navbar */}
              <div style={{ background: '#fff', borderBottom: '1px solid #e8f0f9', padding: '0 14px', height: 38, display: 'flex', alignItems: 'center', gap: 10 }}>
                <img src={logo.src} alt="AiRX" style={{ height: 15, width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
                <div style={{ display: 'flex', gap: 1, flex: 1 }}>
                  {[
                    { label: 'Anasayfa', active: true, chevron: false },
                    { label: 'Tanımlamalar', active: false, chevron: true },
                    { label: 'Personel', active: false, chevron: true },
                    { label: 'Modüller', active: false, chevron: true },
                    { label: 'Raporlar', active: false, chevron: true },
                  ].map(item => (
                    <div key={item.label} style={{ padding: '4px 6px', borderRadius: 4, background: item.active ? 'rgba(0,60,117,0.07)' : 'transparent', display: 'flex', alignItems: 'center', gap: 2, whiteSpace: 'nowrap' }}>
                      <span style={{ fontSize: 9, fontWeight: item.active ? 700 : 500, color: item.active ? '#003C75' : '#64748b' }}>{item.label}</span>
                      {item.chevron && (
                        <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
                  <span style={{ fontSize: 10 }}>🇹🇷</span>
                  <span style={{ fontSize: 9, color: '#64748b' }}>Türkçe</span>
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>

              {/* Ana içerik */}
              <div className="hero-dashboard-body" style={{ background: '#f5f8fc', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>

                {/* 2×3 Stat kartları */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 7 }} className="hero-dashboard-stats">
                  {[
                    { value: 48, label: 'Aktif Personeller', sub: 'Puantaja Dahil Değil: 2', color: '#3b82f6',
                      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
                    { value: 31, label: 'Gelenler', color: '#22c55e',
                      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> },
                    { value: 5, label: 'Mesaidekiler', color: '#8b5cf6',
                      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> },
                    { value: 8, label: 'Gelmeyenler', color: '#ef4444',
                      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> },
                    { value: 3, label: 'Geç Gelenler', color: '#f59e0b',
                      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
                    { value: 2, label: 'İzinliler', color: '#0ea5e9',
                      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 21 4s-2 0-3.5 1.5L14 9l-8.2-1.8L4 9l7 3-2 3.5L6 17l-1 3 3-1 1.5-3 3.5-2 3 7z"/></svg> },
                  ].map(s => (
                    <div key={s.label} style={{ background: '#fff', borderRadius: 7, border: '1px solid #e8f0f9', padding: '9px 10px', boxShadow: '0 1px 3px rgba(0,30,80,0.04)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                        <div style={{ width: 24, height: 24, borderRadius: 6, background: s.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {s.icon}
                        </div>
                        <span style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</span>
                      </div>
                      <div style={{ fontSize: 8, fontWeight: 600, color: '#475569' }}>{s.label}</div>
                      {s.sub && <div style={{ fontSize: 7, color: '#94a3b8', marginTop: 1 }}>{s.sub}</div>}
                    </div>
                  ))}
                </div>

                {/* Alt tablolar */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }} className="hero-dashboard-tables">
                  {/* Onay Bekleyen İzin Talepleri */}
                  <div style={{ background: '#fff', borderRadius: 7, border: '1px solid #e8f0f9', overflow: 'hidden' }}>
                    <div style={{ padding: '6px 10px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ fontSize: 9, fontWeight: 700, color: '#1e293b' }}>Onay Bekleyen İzin Talepleri</span>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 8 }}>
                      <thead>
                        <tr style={{ background: '#f8fafc' }}>
                          {['Ad Soyad', 'İzin Tipi', 'Departman'].map(h => (
                            <th key={h} style={{ padding: '4px 8px', fontWeight: 600, color: '#475569', textAlign: 'left' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Ahmet Kaya',    tip: 'Yıllık İzin',   dept: 'Yazılım Ekibi' },
                          { name: 'Zeynep Arslan', tip: 'Ücretsiz İzin', dept: 'Pazarlama' },
                          { name: 'Mustafa Demir', tip: 'Yıllık İzin',   dept: 'Satış' },
                          { name: 'Elif Yıldız',   tip: 'Yıllık İzin',   dept: 'İkitelli Merkez' },
                        ].map((r, i) => (
                          <tr key={i} style={{ borderTop: '1px solid #f8fafc' }}>
                            <td style={{ padding: '4px 8px', color: '#1e7bbf', fontWeight: 500 }}>{r.name}</td>
                            <td style={{ padding: '4px 8px', color: '#1e7bbf' }}>{r.tip}</td>
                            <td style={{ padding: '4px 8px', color: '#64748b' }}>{r.dept}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Gelmeyenler */}
                  <div style={{ background: '#fff', borderRadius: 7, border: '1px solid #e8f0f9', overflow: 'hidden' }}>
                    <div style={{ padding: '6px 10px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ fontSize: 9, fontWeight: 700, color: '#1e293b' }}>Gelmeyenler</span>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 8 }}>
                      <thead>
                        <tr style={{ background: '#f8fafc' }}>
                          {['Ad Soyad', 'Departman'].map(h => (
                            <th key={h} style={{ padding: '4px 8px', fontWeight: 600, color: '#475569', textAlign: 'left' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Serkan Çelik',  dept: 'Yazılım Ekibi' },
                          { name: 'Fatma Öztürk',  dept: 'Yazılım Ekibi' },
                          { name: 'Burak Koç',     dept: 'Pazarlama' },
                          { name: 'Elif Şahin',    dept: 'Satış' },
                          { name: 'Hasan Çelik',   dept: 'İdari İşler' },
                        ].map((r, i) => (
                          <tr key={i} style={{ borderTop: '1px solid #f8fafc' }}>
                            <td style={{ padding: '4px 8px', color: '#334155', fontWeight: 500 }}>{r.name}</td>
                            <td style={{ padding: '4px 8px', color: '#64748b' }}>{r.dept}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Modül Marquee ── */}
            <div style={{ marginTop: 14, overflow: 'hidden', borderRadius: 10 }}>
              <div className="hero-marquee-track">
                {['a', 'b'].map(suffix => (
                  <div key={suffix} className="hero-marquee-row" aria-hidden={suffix === 'b' ? true : undefined}>
                    {MARQUEE_MODS.map(mod => (
                      <div key={mod.key + suffix} style={{
                        display: 'inline-flex', alignItems: 'center', gap: 7,
                        padding: '6px 14px 6px 10px',
                        background: '#fff',
                        border: '1px solid #e8f0f9',
                        borderRadius: 8,
                        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                        flexShrink: 0,
                      }}>
                        <div style={{
                          width: 24, height: 24, borderRadius: 6, flexShrink: 0,
                          background: mod.accent + '20', color: mod.accent,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          {mod.icon}
                        </div>
                        <span style={{ fontSize: 11.5, fontWeight: 600, color: '#1e293b', whiteSpace: 'nowrap' }}>
                          {t(mod.nameKey)}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <style>{`
        @media (max-width: 1180px) {
          .hero-split {
            flex-direction: column !important;
            gap: 56px !important;
            padding: 56px 28px 64px !important;
          }
          .hero-content-col { text-align: center !important; }
          .hero-content-col p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-actions { justify-content: center !important; }
          .hero-stats { justify-content: center !important; }
          .hero-mockup-col {
            width: 100% !important;
            max-width: 760px !important;
            margin-right: 0 !important;
          }
          .hero-phone-mockup { display: none !important; }
          .hero-feature-badges { display: none !important; }
        }
        @media (max-width: 640px) {
          .hero-split { padding: 36px 16px 44px !important; }
          .hero-stats { gap: 20px !important; }
          .hero-alert-card, .hero-active-card { display: none !important; }
          .hero-dashboard-shell {
            aspect-ratio: 1.58 / 1 !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .hero-dashboard-body {
            flex: 1 !important;
            min-height: 0 !important;
            overflow: hidden !important;
          }
          .hero-dashboard-stats { grid-template-columns: repeat(3, 1fr) !important; }
          .hero-dashboard-tables { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .hero-stats { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
        }
      `}</style>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .hero-marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .hero-marquee-track:hover { animation-play-state: paused; }
        .hero-marquee-row {
          display: flex;
          gap: 8px;
          padding-right: 8px;
        }
      `}</style>
    </>
  )
}
