import { useRef, useState, useEffect } from 'react'
import logo from '../../assets/logo.png'

const ChevronIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const NAV_ITEMS = ['Anasayfa', 'Tanımlamalar', 'Personel', 'Modüller', 'Raporlar']

function useScaledMockup(maxWidth) {
  const outerRef = useRef(null)
  const innerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState(undefined)

  useEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    const measure = () => {
      const ow = outer.offsetWidth
      const s = Math.min(1, ow / maxWidth)
      setScale(s)
      setHeight(s < 1 ? inner.offsetHeight * s : undefined)
    }

    const ro = new ResizeObserver(measure)
    ro.observe(outer)
    // inner height may change after content renders
    ro.observe(inner)
    measure()
    // re-measure after paint in case fonts/images shift layout
    const t = setTimeout(measure, 100)
    return () => { ro.disconnect(); clearTimeout(t) }
  }, [maxWidth])

  return { outerRef, innerRef, scale, height }
}

export function BrowserMockup({ children, url, activeNav, maxWidth = 780 }) {
  const { outerRef, innerRef, scale, height } = useScaledMockup(maxWidth)

  return (
    /* outer: measures available width, clips visual overflow */
    <div
      ref={outerRef}
      style={{
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        height: height !== undefined ? height : undefined,
      }}
    >
      {/* inner: fixed mockup width, scales from top-center */}
      <div
        ref={innerRef}
        style={{
          flexShrink: 0,
          width: maxWidth,
          transform: scale < 1 ? `scale(${scale})` : undefined,
          transformOrigin: 'top center',
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 48px 100px rgba(0,30,80,0.28), 0 12px 36px rgba(0,60,117,0.18)',
          border: '1px solid rgba(0,60,117,0.12)',
        }}
      >
        {/* browser chrome */}
        <div style={{
          height: 36,
          background: 'linear-gradient(180deg, #e8eef6 0%, #dde6f0 100%)',
          borderBottom: '1px solid rgba(0,60,117,0.1)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 14px',
          gap: 10,
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', gap: 5, flexShrink: 0 }}>
            {['#ff6058', '#ffbd2e', '#28c840'].map(c => (
              <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
            ))}
          </div>
          <div style={{
            flex: 1,
            maxWidth: 340,
            margin: '0 auto',
            height: 20,
            background: 'rgba(255,255,255,0.75)',
            borderRadius: 5,
            border: '1px solid rgba(0,60,117,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
            overflow: 'hidden',
          }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span style={{ fontSize: 9, color: '#64748b', fontWeight: 500, whiteSpace: 'nowrap' }}>
              panel.airx.com.tr{url ? `/${url}` : ''}
            </span>
          </div>
        </div>

        {/* app navbar */}
        <div style={{
          background: '#fff',
          borderBottom: '1px solid #e8eef7',
          display: 'flex',
          alignItems: 'center',
          padding: '0 14px',
          height: 44,
        }}>
          <div style={{ marginRight: 16, flexShrink: 0 }}>
            <img src={logo} alt="AirX" style={{ height: 20, width: 'auto', objectFit: 'contain' }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
            {NAV_ITEMS.map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  padding: '5px 7px',
                  borderRadius: 6,
                  fontSize: 9.5,
                  fontWeight: item === activeNav ? 700 : 500,
                  color: item === activeNav ? '#003C75' : '#64748b',
                  background: item === activeNav ? 'rgba(0,60,117,0.06)' : 'transparent',
                  whiteSpace: 'nowrap',
                }}
              >
                {item}
                {['Tanımlamalar', 'Personel', 'Modüller', 'Raporlar'].includes(item) && (
                  <span style={{ color: '#94a3b8', marginLeft: 1 }}><ChevronIcon /></span>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0, marginLeft: 8 }}>
            <span style={{ fontSize: 10 }}>🇹🇷</span>
            <span style={{ fontSize: 9, color: '#64748b', fontWeight: 500 }}>Türkçe</span>
            <span style={{ color: '#94a3b8' }}><ChevronIcon /></span>
          </div>
        </div>

        {children}
      </div>
    </div>
  )
}

export function VisualSection({ children, accent }) {
  return (
    <section style={{ padding: '0 24px 96px', background: '#fff' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{
          position: 'relative',
          borderRadius: 32,
          background: 'linear-gradient(160deg, #eef5ff 0%, #dbeeff 55%, #e4f0fd 100%)',
          border: '1px solid rgba(0,60,117,0.07)',
          boxShadow: '0 24px 80px rgba(0,40,100,0.08)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '64px 48px',
        }}>
          <div style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, background: 'radial-gradient(ellipse, rgba(121,172,220,0.15) 0%, transparent 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -80, right: -80, width: 360, height: 360, borderRadius: '50%', background: `radial-gradient(circle, ${accent}14 0%, transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: -60, left: -60, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,60,117,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          {children}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          /* VisualSection padding */
          section.visual-section { padding: 0 16px 64px !important; }
        }
      `}</style>
    </section>
  )
}
