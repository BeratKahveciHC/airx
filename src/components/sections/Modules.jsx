'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'

/* ── İkon sistemi ── */
const Ic = ({ d, d2, d3, d4, size, color, circle, poly, rect, line, line2, line3 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {circle && <circle cx={circle[0]} cy={circle[1]} r={circle[2]}/>}
    {d  && <path d={d}/>}
    {d2 && <path d={d2}/>}
    {d3 && <path d={d3}/>}
    {d4 && <path d={d4}/>}
    {poly && <polyline points={poly}/>}
    {rect && <rect x={rect[0]} y={rect[1]} width={rect[2]} height={rect[3]} rx={rect[4]||0}/>}
    {line  && <line x1={line[0]}  y1={line[1]}  x2={line[2]}  y2={line[3]}/>}
    {line2 && <line x1={line2[0]} y1={line2[1]} x2={line2[2]} y2={line2[3]}/>}
    {line3 && <line x1={line3[0]} y1={line3[1]} x2={line3[2]} y2={line3[3]}/>}
  </svg>
)

const ClockIcon     = (p) => <Ic {...p} circle={[12,12,10]} d="M12 6v6l4 2"/>
const UserIcon      = (p) => <Ic {...p} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" circle={[12,7,4]}/>
const CalCheckIcon  = (p) => <Ic {...p} rect={[3,4,18,18,2]} d="M16 2v4M8 2v4M3 10h18m-9 6 2 2 4-4"/>
const TableIcon     = (p) => <Ic {...p} rect={[3,3,18,18,2]} line={[3,9,21,9]} line2={[3,15,21,15]} line3={[9,3,9,21]}/>
const KeyIcon       = (p) => <Ic {...p} circle={[7.5,15.5,5.5]} d="m21 2-9.6 9.6m0 0 3 3L22 7l-3-3"/>
const UserCheckIcon = (p) => <Ic {...p} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" circle={[9,7,4]} poly="16 11 18 13 22 9"/>
const UtensilsIcon  = (p) => <Ic {...p} d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
const ClipboardIcon = (p) => <Ic {...p} rect={[8,2,8,4,1]} d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" d2="M12 11h4M12 16h4M8 11h.01M8 16h.01"/>
const FileClockIcon = (p) => <Ic {...p} d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" d2="M14 2v4a2 2 0 0 0 2 2h4" circle={[8,16,6]} d3="M9.5 17.5 8 16.25V14"/>
const BookOpenIcon  = (p) => <Ic {...p} d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" d2="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
const ScaleIcon     = (p) => <Ic {...p} d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" d2="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" d3="M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
const GiftIcon      = (p) => <Ic {...p} poly="20 12 20 22 4 22 4 12" rect={[2,7,20,5]} d="M12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" d2="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
const RefreshCwIcon = (p) => <Ic {...p} d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5" d2="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5"/>
const BarChartIcon  = (p) => <Ic {...p} line={[18,20,18,10]} line2={[12,20,12,4]} line3={[6,20,6,14]} d="M2 20h20"/>

const MODULE_KEYS = [
  { Icon: ClockIcon,     slug: 'pdks',               key: 'pdks',               accent: '#38bdf8' },
  { Icon: UserIcon,      slug: 'ozluk-dosyasi',      key: 'ozlukDosyasi',       accent: '#a78bfa' },
  { Icon: CalCheckIcon,  slug: 'izin-yonetimi',      key: 'izinYonetimi',       accent: '#34d399' },
  { Icon: TableIcon,     slug: 'puantaj',             key: 'puantaj',            accent: '#fbbf24' },
  { Icon: KeyIcon,       slug: 'erisim-kontrolu',    key: 'erisimKontrolu',     accent: '#f87171' },
  { Icon: UserCheckIcon, slug: 'ziyaretci-yonetimi', key: 'ziyaretciYonetimi',  accent: '#22d3ee' },
  { Icon: UtensilsIcon,  slug: 'yemekhane',           key: 'yemekhane',          accent: '#fb923c' },
  { Icon: ClipboardIcon, slug: 'anket',               key: 'anket',              accent: '#a3e635' },
  { Icon: FileClockIcon, slug: 'sureli-evraklar',     key: 'sureligEvraklar',    accent: '#f472b6' },
  { Icon: BookOpenIcon,  slug: 'egitim-planlama',     key: 'egitimPlanlama',     accent: '#60a5fa' },
  { Icon: ScaleIcon,     slug: 'hukuki-evraklar',     key: 'hukukiEvraklar',     accent: '#818cf8' },
  { Icon: GiftIcon,      slug: 'yan-haklar',          key: 'yanHaklar',          accent: '#2dd4bf' },
  { Icon: RefreshCwIcon, slug: 'periyodik-gorev',     key: 'periyodikGorev',     accent: '#c084fc' },
  { Icon: BarChartIcon,  slug: 'is-zekasi',           key: 'isZekasi',           accent: '#79ACDC' },
]
const hexRgba = (hex, a) => {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16)
  return `rgba(${r},${g},${b},${a})`
}

const CYCLE_DURATION   = 3500
const USER_PAUSE_DURATION = 8000

export default function Modules() {
  const t = useTranslations()
  const MODULES = MODULE_KEYS.map(m => ({
    ...m,
    name: t(`moduleDetail.${m.key}.name`),
    desc: t(`moduleDetail.${m.key}.desc`),
    features: [t(`moduleDetail.${m.key}.f1`), t(`moduleDetail.${m.key}.f2`), t(`moduleDetail.${m.key}.f3`), t(`moduleDetail.${m.key}.f4`)],
  }))
  const [active, setActive]       = useState(0)
  const [direction, setDirection] = useState(1)
  const [progressKey, setProgressKey] = useState(0)
  const pauseRef      = useRef(false)
  const pauseTimerRef = useRef(null)
  const cycleTimerRef = useRef(null)

  const goTo = (index, dir) => {
    const d = dir !== undefined ? dir : (index > active ? 1 : -1)
    setDirection(d)
    setActive(index)
    setProgressKey(k => k + 1)
  }

  const handleUserClick = (index) => {
    pauseRef.current = true
    goTo(index)
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    pauseTimerRef.current = setTimeout(() => { pauseRef.current = false }, USER_PAUSE_DURATION)
  }

  useEffect(() => {
    const tick = () => {
      if (!pauseRef.current) {
        setActive(prev => {
          const next = (prev + 1) % MODULES.length
          setDirection(1)
          setProgressKey(k => k + 1)
          return next
        })
      }
      cycleTimerRef.current = setTimeout(tick, CYCLE_DURATION)
    }
    cycleTimerRef.current = setTimeout(tick, CYCLE_DURATION)
    return () => { clearTimeout(cycleTimerRef.current); clearTimeout(pauseTimerRef.current) }
  }, [])

  const mod = MODULES[active]

  return (
    <section id="moduller" style={{
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #f4f8fd 0%, #edf4ff 50%, #f4f8fd 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle dot pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(0,60,117,0.07) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
      }} />

      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>

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
            fontWeight: 700,
            color: '#003C75',
            margin: '0 0 14px',
            lineHeight: 1.15,
          }}>
            {t('modulesSection.title')}{' '}
            <span style={{ color: '#79ACDC' }}>{t('modulesSection.titleHighlight')}</span>
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 500, margin: '0 auto', lineHeight: 1.65 }}>
            {t('modulesSection.subtitle')}
          </p>
        </motion.div>

        {/* ── Explorer kutusu — Laptop Mockup ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            borderRadius: 18,
            overflow: 'hidden',
            boxShadow: '0 0 0 1px rgba(0,30,80,0.10), 0 8px 24px rgba(0,30,80,0.08), 0 32px 80px rgba(0,30,80,0.18)',
            background: 'transparent',
          }}
        >
          {/* Browser chrome */}
          <div style={{
            background: 'linear-gradient(180deg, #f5f7fa 0%, #edf0f5 100%)',
            borderBottom: '1px solid rgba(0,30,80,0.10)',
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <div style={{ display: 'flex', gap: 5 }}>
              {['#ff6058', '#ffbd2e', '#28c840'].map(c => (
                <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, boxShadow: `0 1px 2px ${c}66` }} />
              ))}
            </div>
            <div style={{ flex: 1, maxWidth: 240, margin: '0 auto', background: 'rgba(0,30,80,0.07)', borderRadius: 6, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, border: '1px solid rgba(0,30,80,0.07)' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span style={{ fontSize: 9.5, color: '#94a3b8', letterSpacing: '0.01em' }}>panel.AiRX.com.tr</span>
            </div>
          </div>

          {/* Modules Explorer */}
          <div
            style={{
              display: 'flex',
              background: '#001f45',
            }}
            className="modules-explorer"
          >

          {/* ── Sol Panel — Lacivert ── */}
          <div
            className="modules-left-panel"
            style={{
              width: 240,
              minWidth: 240,
              background: 'linear-gradient(180deg, #001833 0%, #002855 100%)',
              borderRight: '1px solid rgba(255,255,255,0.06)',
              maxHeight: 540,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{
              padding: '18px 18px 10px',
              fontSize: 10,
              fontWeight: 700,
              color: 'rgba(121,172,220,0.5)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              {t('modulesSection.panelHeader')} — {MODULES.length}
            </div>

            {MODULES.map((m, i) => (
              <button
                key={m.name}
                onClick={() => handleUserClick(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '9px 14px 9px 16px',
                  background: active === i ? hexRgba(m.accent, 0.12) : 'transparent',
                  border: 'none',
                  borderLeft: `3px solid ${active === i ? m.accent : 'transparent'}`,
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  outline: 'none',
                }}
                onMouseEnter={e => { if (active !== i) e.currentTarget.style.background = 'rgba(121,172,220,0.06)' }}
                onMouseLeave={e => { if (active !== i) e.currentTarget.style.background = 'transparent' }}
              >
                <span style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: active === i ? hexRgba(m.accent, 0.18) : 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.2s',
                  border: active === i ? `1px solid ${hexRgba(m.accent, 0.35)}` : '1px solid transparent',
                }}>
                  <m.Icon size={15} color={active === i ? m.accent : 'rgba(255,255,255,0.35)'} />
                </span>
                <span style={{
                  fontSize: 13,
                  fontWeight: active === i ? 600 : 400,
                  color: active === i ? m.accent : 'rgba(255,255,255,0.45)',
                  transition: 'all 0.2s',
                  lineHeight: 1.3,
                }}>
                  {m.name}
                </span>
              </button>
            ))}
          </div>

          {/* ── Sağ Panel — #79ACDC ── */}
          <div
            className="modules-right-panel"
            style={{
              flex: 1,
              position: 'relative',
              overflow: 'hidden',
              minHeight: 500,
              background: 'linear-gradient(135deg, #1a4a7a 0%, #2a6090 50%, #1e527e 100%)',
            }}
          >
            {/* Progress bar */}
            <motion.div
              key={`pb-${progressKey}`}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: CYCLE_DURATION / 1000, ease: 'linear' }}
              style={{
                position: 'absolute', top: 0, left: 0, height: 2, zIndex: 10,
                background: `linear-gradient(90deg, ${mod.accent}, ${hexRgba(mod.accent, 0.4)})`,
              }}
            />

            {/* Watermark numara */}
            <div
              className="modules-watermark"
              style={{
              position: 'absolute', right: -10, bottom: -20,
              fontSize: 200, fontWeight: 900, lineHeight: 1,
              color: 'rgba(255,255,255,0.04)',
              userSelect: 'none', pointerEvents: 'none',
              fontVariantNumeric: 'tabular-nums',
              letterSpacing: '-0.04em',
            }}
            >
              {String(active + 1).padStart(2, '0')}
            </div>

            {(() => {
              const ActiveIcon = MODULES[active].Icon
              return (
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={{
                      enter: (d) => ({ opacity: 0, x: d * 40 }),
                      center: { opacity: 1, x: 0 },
                      exit: (d) => ({ opacity: 0, x: d * -24, transition: { duration: 0.18 } }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    style={{ padding: '44px 52px 40px', height: '100%', position: 'relative', zIndex: 1 }}
                    className="modules-right-content"
                  >
                    {/* Modül badge */}
                    <div
                      className="modules-badge"
                      style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: 'rgba(255,255,255,0.12)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: 100,
                      padding: '4px 12px',
                      marginBottom: 24,
                    }}
                    >
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: mod.accent }} />
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#e8f3fc', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {t('modulesSection.panelHeader')} {String(active + 1).padStart(2, '0')} / {MODULES.length}
                      </span>
                    </div>

                    {/* İkon + Başlık */}
                    <div className="modules-title-row" style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 20 }}>
                      <div style={{
                        width: 64, height: 64, borderRadius: 20, flexShrink: 0,
                        background: hexRgba(mod.accent, 0.18),
                        border: `1px solid ${hexRgba(mod.accent, 0.4)}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        position: 'relative',
                        boxShadow: `0 0 32px ${hexRgba(mod.accent, 0.25)}`,
                      }}>
                        <ActiveIcon size={28} color="#fff" />
                      </div>
                      <h3 style={{
                        fontSize: 'clamp(22px, 2.5vw, 30px)',
                        fontWeight: 800,
                        color: '#fff',
                        margin: 0,
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                      }}>
                        {mod.name}
                      </h3>
                    </div>

                    {/* Açıklama */}
                    <p className="modules-desc" style={{
                      fontSize: 15,
                      color: 'rgba(232,243,252,0.75)',
                      lineHeight: 1.75,
                      marginBottom: 28,
                      maxWidth: 520,
                    }}>
                      {mod.desc}
                    </p>

                    {/* Özellik chips */}
                    <div className="modules-features" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
                      {mod.features.map(f => (
                        <div key={f} style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          background: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.18)',
                          borderRadius: 8,
                          padding: '7px 14px',
                        }}>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke={mod.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span style={{ fontSize: 13, color: 'rgba(232,243,252,0.9)', fontWeight: 500 }}>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Detay butonu */}
                    <div style={{ marginBottom: 24 }}>
                      <a
                        href={`/moduller/${mod.slug}`}
                        className="modules-detail-link"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 8,
                          padding: '10px 22px',
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 600,
                          textDecoration: 'none',
                          color: '#1a4a7a',
                          background: '#fff',
                          border: '1px solid rgba(255,255,255,0.3)',
                          boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
                          transition: 'transform 0.15s, box-shadow 0.15s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)' }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15)' }}
                      >
                      {t('modulesSection.viewDetails')}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
                        </svg>
                      </a>
                    </div>

                    {/* Navigation dots */}
                    <div className="modules-dots" style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                      {MODULES.map((m, i) => (
                        <button
                          key={i}
                          onClick={() => handleUserClick(i)}
                          style={{
                            width: active === i ? 22 : 6,
                            height: 6,
                            borderRadius: 100,
                            background: active === i ? mod.accent : 'rgba(255,255,255,0.25)',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            transition: 'all 0.3s ease',
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              )
            })()}
          </div>

          </div>{/* /modules-explorer */}

        </motion.div>
      </div>

      <style>{`
        .modules-left-panel::-webkit-scrollbar { width: 4px; }
        .modules-left-panel::-webkit-scrollbar-track { background: transparent; }
        .modules-left-panel::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 4px; }

        @media (max-width: 1024px) {
          .modules-explorer { flex-direction: column !important; }
          .modules-left-panel {
            width: 100% !important; min-width: unset !important;
            max-height: none !important;
            flex-direction: row !important;
            overflow-x: auto !important; overflow-y: hidden !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06) !important;
            padding: 10px 8px !important; gap: 6px;
          }
          .modules-left-panel > div:first-child { display: none !important; }
          .modules-left-panel button {
            flex-direction: column !important;
            padding: 8px 10px !important;
            border-left: none !important;
            border-bottom: 2px solid transparent;
            white-space: nowrap;
            min-width: fit-content;
            border-radius: 10px !important;
            align-items: center;
          }
          .modules-right-panel {
            min-height: 0 !important;
            aspect-ratio: 1.5 / 1 !important;
          }
          .modules-right-content { padding: 28px 24px !important; }
          .modules-right-content {
            overflow: hidden !important;
          }
        }
        @media (max-width: 768px) {
          .modules-left-panel {
            gap: 8px !important;
            padding: 10px 10px !important;
          }
          .modules-left-panel button {
            padding: 8px 12px !important;
          }
          .modules-right-panel {
            aspect-ratio: auto !important;
            min-height: auto !important;
          }
          .modules-right-content {
            padding: 24px 18px 24px !important;
            overflow: visible !important;
            height: auto !important;
          }
          .modules-watermark {
            display: none !important;
          }
          .modules-badge {
            margin-bottom: 18px !important;
          }
          .modules-title-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
            margin-bottom: 16px !important;
          }
          .modules-desc {
            font-size: 14px !important;
            line-height: 1.65 !important;
            margin-bottom: 20px !important;
            max-width: none !important;
          }
          .modules-features {
            gap: 6px !important;
            margin-bottom: 22px !important;
          }
          .modules-features > div {
            padding: 6px 10px !important;
          }
          .modules-features span {
            font-size: 12px !important;
          }
          .modules-detail-link {
            width: 100% !important;
            justify-content: center !important;
          }
          .modules-dots {
            justify-content: center !important;
            flex-wrap: wrap !important;
          }
        }
        @media (max-width: 560px) {
          .modules-right-panel {
            min-height: auto !important;
          }
          .modules-right-content {
            padding: 22px 16px 22px !important;
          }
          .modules-left-panel {
            padding: 8px 8px !important;
            gap: 6px !important;
          }
          .modules-left-panel button {
            min-width: 88px !important;
            padding: 8px 10px !important;
          }
          .modules-left-panel button span:last-child {
            font-size: 12px !important;
          }
        }
      `}</style>
    </section>
  )
}
