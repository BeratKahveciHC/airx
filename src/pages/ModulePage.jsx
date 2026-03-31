import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getModuleBySlug, MODULES_DATA } from '../data/modules'
import SEO from '../components/SEO'

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
)
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
  </svg>
)
const ArrowLeftIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5"/><path d="m11 5-7 7 7 7"/>
  </svg>
)

/* ── Özellik görselleri — 6 farklı soyut UI mockup ── */
function FeatureVisual({ index, accent }) {
  const visuals = [
    /* 0 — Aktivite listesi + onay */
    <div style={{ width: '100%', height: '100%', padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <div style={{ width: 90, height: 10, borderRadius: 5, background: '#1e293b' }} />
        <div style={{ width: 36, height: 24, borderRadius: 6, background: accent + '22', border: `1px solid ${accent}44` }} />
      </div>
      {[92, 75, 88, 60, 95].map((w, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8, flexShrink: 0,
            background: i === 0 ? accent + '22' : '#f1f5f9',
            border: i === 0 ? `1px solid ${accent}44` : '1px solid #e2e8f0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {i === 0 && <div style={{ width: 8, height: 8, borderRadius: '50%', background: accent }} />}
          </div>
          <div style={{ flex: 1, width: `${w}%`, height: 8, borderRadius: 4, background: i === 0 ? '#1e293b' : '#e2e8f0' }} />
          <div style={{ width: 40, height: 22, borderRadius: 6, background: i < 2 ? accent + '18' : '#f1f5f9', flexShrink: 0 }} />
        </div>
      ))}
    </div>,

    /* 1 — Bar chart */
    <div style={{ width: '100%', height: '100%', padding: 28, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <div style={{ width: 60, height: 10, borderRadius: 5, background: '#1e293b' }} />
        <div style={{ flex: 1 }} />
        <div style={{ width: 40, height: 10, borderRadius: 5, background: '#e2e8f0' }} />
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 10, padding: '0 8px' }}>
        {[55, 72, 48, 90, 63, 85, 70].map((h, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{
              width: '100%',
              height: `${h}%`,
              borderRadius: '6px 6px 0 0',
              background: i === 3 ? `linear-gradient(180deg, ${accent} 0%, ${accent}88 100%)` : `linear-gradient(180deg, #dbeafe 0%, #eff6ff 100%)`,
              boxShadow: i === 3 ? `0 4px 12px ${accent}44` : 'none',
            }} />
            <div style={{ width: '60%', height: 4, borderRadius: 2, background: '#e2e8f0' }} />
          </div>
        ))}
      </div>
    </div>,

    /* 2 — Takvim */
    <div style={{ width: '100%', height: '100%', padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <div style={{ width: 70, height: 10, borderRadius: 5, background: '#1e293b' }} />
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: '#f1f5f9' }} />
          <div style={{ width: 22, height: 22, borderRadius: 6, background: '#f1f5f9' }} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 5 }}>
        {['P','S','Ç','P','C','C','P'].map((d, i) => (
          <div key={i} style={{ textAlign: 'center', fontSize: 8, fontWeight: 700, color: '#94a3b8', paddingBottom: 4 }}>{d}</div>
        ))}
        {Array.from({ length: 35 }, (_, i) => {
          const day = i - 2
          const isToday = day === 14
          const isMarked = [8, 9, 15, 21, 22].includes(day)
          const isRange = day >= 8 && day <= 9
          return (
            <div key={i} style={{
              height: 28, borderRadius: 6,
              background: isToday ? accent : isRange ? accent + '22' : isMarked ? accent + '15' : 'transparent',
              border: isMarked && !isToday ? `1px solid ${accent}33` : '1px solid transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 9, fontWeight: isToday ? 800 : 500,
              color: isToday ? '#fff' : day < 1 || day > 30 ? '#cbd5e1' : '#374151',
            }}>
              {day >= 1 && day <= 30 ? day : ''}
            </div>
          )
        })}
      </div>
    </div>,

    /* 3 — Bildirim + durum kartları */
    <div style={{ width: '100%', height: '100%', padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { label: 'Giriş Yapıldı', sub: 'Ahmet Y. · 08:32', color: '#22c55e', dot: true },
        { label: 'İzin Onaylandı', sub: 'Mehmet K. · 09:15', color: accent, dot: true },
        { label: 'Geç Kalma', sub: 'Ayşe D. · 09:47', color: '#f59e0b', dot: true },
        { label: 'Yeni Talep', sub: 'Fatma S. · 10:02', color: '#60a5fa', dot: false },
        { label: 'Rapor Hazır', sub: 'Sistem · 10:30', color: '#a78bfa', dot: false },
      ].map((item, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '10px 12px', borderRadius: 10,
          background: i < 2 ? item.color + '0d' : '#f8fafc',
          border: `1px solid ${i < 2 ? item.color + '22' : '#e2e8f0'}`,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ width: '60%', height: 8, borderRadius: 4, background: i < 2 ? '#1e293b' : '#cbd5e1', marginBottom: 4 }} />
            <div style={{ width: '40%', height: 6, borderRadius: 3, background: '#e2e8f0' }} />
          </div>
          <div style={{ width: 32, height: 20, borderRadius: 5, background: item.color + '18', border: `1px solid ${item.color}33` }} />
        </div>
      ))}
    </div>,

    /* 4 — KPI kartlar + mini chart */
    <div style={{ width: '100%', height: '100%', padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {[
          { val: '1.284', label: 'Personel', color: accent },
          { val: '%97.3', label: 'Devam', color: '#22c55e' },
          { val: '23', label: 'İzin', color: '#f59e0b' },
          { val: '4.2s', label: 'Yanıt Süresi', color: '#a78bfa' },
        ].map((k, i) => (
          <div key={i} style={{
            padding: '12px 14px', borderRadius: 12,
            background: i === 0 ? `linear-gradient(135deg, ${accent}18, ${accent}08)` : '#f8fafc',
            border: `1px solid ${i === 0 ? accent + '30' : '#e2e8f0'}`,
          }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1 }}>{k.val}</div>
            <div style={{ width: '70%', height: 6, borderRadius: 3, background: '#e2e8f0', marginTop: 6 }} />
          </div>
        ))}
      </div>
      <div style={{ flex: 1, background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0', padding: '10px 14px', display: 'flex', alignItems: 'flex-end', gap: 5 }}>
        {[40, 55, 45, 70, 60, 80, 65, 90, 75, 95, 80, 100].map((h, i) => (
          <div key={i} style={{
            flex: 1, borderRadius: '3px 3px 0 0',
            height: `${h}%`,
            background: i === 11 ? accent : accent + '33',
          }} />
        ))}
      </div>
    </div>,

    /* 5 — Form / belge görünümü */
    <div style={{ width: '100%', height: '100%', padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
        <div style={{ width: 28, height: 28, borderRadius: 7, background: accent + '22', border: `1px solid ${accent}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: accent }} />
        </div>
        <div style={{ width: 100, height: 9, borderRadius: 4, background: '#1e293b' }} />
        <div style={{ flex: 1 }} />
        <div style={{ width: 52, height: 24, borderRadius: 6, background: accent, opacity: 0.85 }} />
      </div>
      {['%80', '%100', '%65'].map((v, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: `${[55, 70, 45][i]}%`, height: 7, borderRadius: 3, background: '#cbd5e1' }} />
            <div style={{ width: 24, height: 7, borderRadius: 3, background: '#cbd5e1' }} />
          </div>
          <div style={{ width: '100%', height: 7, borderRadius: 4, background: '#f1f5f9', overflow: 'hidden' }}>
            <div style={{ width: v, height: '100%', borderRadius: 4, background: i === 1 ? accent : accent + '66' }} />
          </div>
        </div>
      ))}
      <div style={{ marginTop: 4, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {[90, 75, 55].map((w, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, background: i === 0 ? accent + '22' : '#f1f5f9', border: `1px solid ${i === 0 ? accent + '44' : '#e2e8f0'}`, flexShrink: 0 }} />
            <div style={{ width: `${w}%`, height: 7, borderRadius: 3, background: '#e2e8f0' }} />
          </div>
        ))}
      </div>
    </div>,
  ]

  return visuals[index % visuals.length]
}

export default function ModulePage() {
  const { slug } = useParams()
  const mod = getModuleBySlug(slug)

  if (!mod) {
    return (
      <div style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h1 style={{ color: '#003C75' }}>Modül bulunamadı</h1>
        <Link to="/" style={{ color: '#79ACDC' }}>Ana sayfaya dön</Link>
      </div>
    )
  }

  const currentIndex = MODULES_DATA.findIndex(m => m.slug === slug)

  // Diğer modüller — 3 komşu modül
  const otherMods = []
  const indices = [currentIndex - 1, currentIndex + 1, currentIndex + 2]
  indices.forEach(i => {
    const idx = ((i % MODULES_DATA.length) + MODULES_DATA.length) % MODULES_DATA.length
    if (idx !== currentIndex && !otherMods.find(m => m.slug === MODULES_DATA[idx].slug)) {
      otherMods.push(MODULES_DATA[idx])
    }
  })
  const displayMods = otherMods.slice(0, 3)

  const moduleSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `AirX ${mod.name}`,
    description: mod.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'iOS, Android, Web',
    provider: {
      '@type': 'Organization',
      name: 'AirX',
      url: 'https://airx.com.tr',
    },
  }

  return (
    <div style={{ background: '#fff' }}>
      <SEO
        title={`${mod.name} — ${mod.tagline} | AirX`}
        description={`${mod.description} AirX ${mod.name} modülü ile İK süreçlerinizi dijitalleştirin.`}
        canonical={`/moduller/${slug}`}
        jsonLd={moduleSchema}
      />

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001e45 0%, #003C75 60%, #004d99 100%)',
        padding: '80px 24px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `linear-gradient(rgba(121,172,220,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(121,172,220,0.06) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />
        <div style={{
          position: 'absolute', top: -100, right: -100, width: 500, height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${mod.accent}22 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40 }}
          >
            <Link to="/#moduller" style={{ fontSize: 13, color: 'rgba(219,238,255,0.55)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              <ArrowLeftIcon />
              Tüm Modüller
            </Link>
            <span style={{ color: 'rgba(219,238,255,0.25)', fontSize: 13 }}>/</span>
            <span style={{ fontSize: 13, color: 'rgba(219,238,255,0.55)' }}>{mod.name}</span>
          </motion.div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 64 }} className="module-hero-split">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: 1, minWidth: 0 }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: `${mod.accent}20`, border: `1px solid ${mod.accent}40`,
                borderRadius: 100, padding: '5px 14px', marginBottom: 24,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: mod.accent }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: mod.accent, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {mod.tagline}
                </span>
              </div>

              <h1 style={{
                fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: '#fff',
                margin: '0 0 20px', lineHeight: 1.08, letterSpacing: '-0.03em',
              }}>
                {mod.name}
              </h1>

              <p style={{ fontSize: 18, color: 'rgba(219,238,255,0.72)', lineHeight: 1.72, maxWidth: 520, marginBottom: 40 }}>
                {mod.description}
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/#demo" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#fff', color: '#003C75',
                  padding: '13px 28px', borderRadius: 9999,
                  fontWeight: 700, fontSize: 15, textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                }}>
                  Ücretsiz Demo Al <ArrowIcon />
                </Link>
                <Link to="/#moduller" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.1)', color: '#fff',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '13px 24px', borderRadius: 9999,
                  fontWeight: 500, fontSize: 15, textDecoration: 'none',
                }}>
                  Tüm Modüller
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 12 }}
              className="module-hero-stats"
            >
              {mod.hero_stats.map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 20, padding: '24px 32px', backdropFilter: 'blur(12px)', minWidth: 200,
                }}>
                  <div style={{ fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 6 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(219,238,255,0.55)', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Özellikler — görsel + metin ── */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 80 }}
          >
            <div style={{
              fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic',
              fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#79ACDC', marginBottom: 12,
            }}>
              Özellikler
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#003C75', margin: 0, lineHeight: 1.15 }}>
              {mod.name} ile neler yapabilirsiniz?
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {mod.features.map((f, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 72,
                    flexDirection: isEven ? 'row' : 'row-reverse',
                  }}
                  className="feature-row"
                >
                  {/* Metin */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: mod.accent + '12', border: `1px solid ${mod.accent}28`,
                      borderRadius: 100, padding: '4px 12px', marginBottom: 20,
                    }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: mod.accent }} />
                      <span style={{ fontSize: 11, fontWeight: 700, color: mod.accent, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 style={{
                      fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 800,
                      color: '#0f172a', margin: '0 0 16px', lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                    }}>
                      {f.title}
                    </h3>

                    <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.78, margin: '0 0 28px', maxWidth: 460 }}>
                      {f.desc}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: mod.accent, fontWeight: 600, fontSize: 14 }}>
                      <div style={{ width: 32, height: 1, background: mod.accent, opacity: 0.5 }} />
                      {mod.name}
                    </div>
                  </div>

                  {/* Görsel */}
                  <div style={{
                    flex: '0 0 460px',
                    height: 320,
                    borderRadius: 24,
                    background: `linear-gradient(135deg, #f8fafd 0%, #edf4ff 100%)`,
                    border: '1px solid #e2eaf4',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: `0 24px 64px rgba(0,40,100,0.10), 0 4px 16px rgba(0,40,100,0.06)`,
                  }} className="feature-visual">
                    {/* Accent glow */}
                    <div style={{
                      position: 'absolute', top: -40, right: -40, width: 200, height: 200,
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${mod.accent}28 0%, transparent 70%)`,
                      pointerEvents: 'none',
                    }} />
                    {/* Mockup içeriği */}
                    <div style={{
                      position: 'absolute', inset: 16,
                      background: '#fff',
                      borderRadius: 16,
                      border: '1px solid #e8eef7',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      overflow: 'hidden',
                    }}>
                      {/* Pencere chrome */}
                      <div style={{
                        height: 36, background: '#f8fafd',
                        borderBottom: '1px solid #e8eef7',
                        display: 'flex', alignItems: 'center', padding: '0 14px', gap: 6,
                      }}>
                        {['#f87171', '#fbbf24', '#4ade80'].map((c, di) => (
                          <div key={di} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
                        ))}
                        <div style={{ flex: 1, margin: '0 10px', height: 18, borderRadius: 5, background: '#e2e8f0' }} />
                        <div style={{ width: 9, height: 9, borderRadius: '50%', background: mod.accent + '55' }} />
                      </div>
                      <FeatureVisual index={i} accent={mod.accent} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Faydalar ── */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(180deg, #f4f8fd 0%, #fff 100%)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 80 }} className="benefits-split">

            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ flex: 1 }}
            >
              <div style={{
                fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic',
                fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#79ACDC', marginBottom: 12,
              }}>
                Neden {mod.name}?
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#003C75', margin: '0 0 16px', lineHeight: 1.15 }}>
                Somut farkı hissedin
              </h2>
              <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.72, marginBottom: 36 }}>
                AirX {mod.name} modülü, günlük operasyonel yükü azaltırken hata riskini minimuma indirir.
              </p>
              <Link to="/#demo" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#003C75', color: '#fff',
                padding: '13px 28px', borderRadius: 9999,
                fontWeight: 700, fontSize: 15, textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(0,60,117,0.3)',
              }}>
                Hemen Deneyin <ArrowIcon />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ flex: 1 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {mod.benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      background: '#fff', border: '1px solid #e8eef7',
                      borderRadius: 14, padding: '18px 20px',
                      boxShadow: '0 2px 8px rgba(0,40,100,0.04)',
                    }}
                  >
                    <div style={{
                      width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                      background: mod.accent + '18',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: mod.accent,
                    }}>
                      <CheckIcon />
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 500, color: '#1e293b' }}>{b}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #001e45 0%, #003C75 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(121,172,220,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(121,172,220,0.06) 1px, transparent 1px)`,
          backgroundSize: '48px 48px', pointerEvents: 'none',
        }} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}
        >
          <div style={{
            fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic',
            fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#79ACDC', marginBottom: 16,
          }}>
            Hemen Başlayın
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>
            {mod.name} modülünü<br />ücretsiz deneyin.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(219,238,255,0.65)', marginBottom: 36, lineHeight: 1.65 }}>
            Kurulum gerektirmez. Aynı gün aktif. Kredi kartı gerekmez.
          </p>
          <Link to="/#demo" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: '#003C75',
            padding: '15px 36px', borderRadius: 9999,
            fontWeight: 700, fontSize: 16, textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          }}>
            Ücretsiz Demo Al <ArrowIcon />
          </Link>
        </motion.div>
      </section>

      {/* ── Diğer Modüller — 3'lü grid ── */}
      <section style={{ padding: '72px 24px', background: '#f8fafd', borderTop: '1px solid #e8eef7' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 12, color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
              Diğer Modüller
            </div>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#003C75', margin: 0 }}>
              Keşfetmeye devam edin
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="other-mods-grid">
            {displayMods.map((m, i) => (
              <motion.div
                key={m.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  to={`/moduller/${m.slug}`}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div
                    style={{
                      background: '#fff',
                      border: '1px solid #e8eef7',
                      borderRadius: 20,
                      padding: '28px',
                      transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = m.accent + '55'
                      e.currentTarget.style.boxShadow = `0 12px 40px ${m.accent}18`
                      e.currentTarget.style.transform = 'translateY(-3px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#e8eef7'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <div style={{
                      width: 48, height: 48, borderRadius: 14, marginBottom: 20,
                      background: m.accent + '18', border: `1px solid ${m.accent}33`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: m.accent }} />
                    </div>

                    <div style={{ fontSize: 11, fontWeight: 700, color: m.accent, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                      {m.tagline}
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: '0 0 10px', lineHeight: 1.2 }}>
                      {m.name}
                    </h3>
                    <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65, margin: '0 0 20px' }}>
                      {m.description.slice(0, 110)}...
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: m.accent, fontWeight: 600, fontSize: 13 }}>
                      İncele <ArrowIcon />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .module-hero-split { flex-direction: column !important; gap: 48px !important; }
          .module-hero-stats { flex-direction: row !important; flex-wrap: wrap; }
          .module-hero-stats > div { min-width: 140px !important; flex: 1; }
          .feature-row { flex-direction: column !important; gap: 36px !important; }
          .feature-visual { flex: none !important; width: 100% !important; }
          .benefits-split { flex-direction: column !important; gap: 40px !important; }
          .other-mods-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .module-hero-stats { flex-direction: column !important; }
          .other-mods-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
