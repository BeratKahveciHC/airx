import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getModuleBySlug, MODULES_DATA } from '../data/modules'
import { MODULE_OVERRIDES } from '../data/moduleOverrides'
import { MODULE_VISUALS } from '../data/moduleVisuals'
import SEO from '../components/SEO'

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </svg>
)

const ArrowLeftIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5" />
    <path d="m11 5-7 7 7 7" />
  </svg>
)

const FEATURE_SUMMARIES = [
  'Operasyon akisini standartlastirir ve gunluk kontrol yukunu azaltir.',
  'Takibi gorunur hale getirir ve ekipler icin hizli aksiyon alani acar.',
  'Surecleri olculebilir hale getirir ve yonetsel karar kalitesini destekler.',
]

export default function ModulePage() {
  const { slug } = useParams()
  const baseMod = getModuleBySlug(slug)
  const mod = baseMod ? { ...baseMod, ...(MODULE_OVERRIDES[slug] || {}) } : null
  const VisualComponent = MODULE_VISUALS[slug] || null

  if (!mod) {
    return (
      <div style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h1 style={{ color: '#003C75' }}>Modul bulunamadi</h1>
        <Link to="/" style={{ color: '#79ACDC' }}>Ana sayfaya don</Link>
      </div>
    )
  }

  const currentIndex = MODULES_DATA.findIndex((m) => m.slug === slug)

  const otherMods = []
  const indices = [currentIndex - 1, currentIndex + 1, currentIndex + 2]

  indices.forEach((i) => {
    const idx = ((i % MODULES_DATA.length) + MODULES_DATA.length) % MODULES_DATA.length
    if (idx !== currentIndex && !otherMods.find((m) => m.slug === MODULES_DATA[idx].slug)) {
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
        title={`${mod.name} - ${mod.tagline} | AirX`}
        description={`${mod.description} AirX ${mod.name} modulu ile IK sureclerinizi dijitallestirin.`}
        canonical={`/moduller/${slug}`}
        jsonLd={moduleSchema}
      />

      <section
        style={{
          background: 'linear-gradient(135deg, #001e45 0%, #003C75 60%, #004d99 100%)',
          padding: '80px 24px 100px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage:
              'linear-gradient(rgba(121,172,220,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(121,172,220,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${mod.accent}22 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40 }}
          >
            <Link
              to="/#moduller"
              style={{
                fontSize: 13,
                color: 'rgba(219,238,255,0.55)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <ArrowLeftIcon />
              Tum Moduller
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
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: `${mod.accent}20`,
                  border: `1px solid ${mod.accent}40`,
                  borderRadius: 100,
                  padding: '5px 14px',
                  marginBottom: 24,
                }}
              >
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: mod.accent }} />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: mod.accent,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {mod.tagline}
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(36px, 5vw, 60px)',
                  fontWeight: 800,
                  color: '#fff',
                  margin: '0 0 20px',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                }}
              >
                {mod.name}
              </h1>

              <p
                style={{
                  fontSize: 18,
                  color: 'rgba(219,238,255,0.72)',
                  lineHeight: 1.72,
                  maxWidth: 520,
                  marginBottom: 40,
                }}
              >
                {mod.description}
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link
                  to="/#demo"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: '#fff',
                    color: '#003C75',
                    padding: '13px 28px',
                    borderRadius: 9999,
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                  }}
                >
                  Ucretsiz Demo Al <ArrowIcon />
                </Link>
                <Link
                  to="/#moduller"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'rgba(255,255,255,0.1)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)',
                    padding: '13px 24px',
                    borderRadius: 9999,
                    fontWeight: 500,
                    fontSize: 15,
                    textDecoration: 'none',
                  }}
                >
                  Tum Moduller
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
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 20,
                    padding: '24px 32px',
                    backdropFilter: 'blur(12px)',
                    minWidth: 200,
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(28px, 3vw, 38px)',
                      fontWeight: 900,
                      color: '#fff',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(219,238,255,0.55)', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 80 }}
          >
            <div
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                color: '#79ACDC',
                marginBottom: 12,
              }}
            >
              Ozellikler
            </div>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 700,
                color: '#003C75',
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              {mod.name} ile neler yapabilirsiniz?
            </h2>
            <p
              style={{
                maxWidth: 760,
                margin: '18px auto 0',
                fontSize: 16,
                lineHeight: 1.8,
                color: '#64748b',
              }}
            >
              Her bir alan, ekibinizin is akisinda daha net kontrol, daha guclu gorunurluk ve daha hizli uygulama deneyimi sunmak icin tasarlandi.
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 24,
            }}
            className="features-premium-grid"
          >
            {mod.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'relative',
                  minHeight: 320,
                  padding: '28px 28px 26px',
                  borderRadius: 26,
                  background: `linear-gradient(180deg, #ffffff 0%, ${mod.accent}08 100%)`,
                  border: `1px solid ${mod.accent}22`,
                  boxShadow: '0 20px 55px rgba(2, 28, 67, 0.07)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -64,
                    right: -18,
                    width: 170,
                    height: 170,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${mod.accent}18 0%, transparent 72%)`,
                    pointerEvents: 'none',
                  }}
                />

                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: 16,
                      marginBottom: 24,
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '6px 12px',
                        borderRadius: 9999,
                        background: mod.accent + '12',
                        border: `1px solid ${mod.accent}28`,
                      }}
                    >
                      <div style={{ width: 7, height: 7, borderRadius: '50%', background: mod.accent }} />
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: mod.accent,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Alan {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div
                      style={{
                        fontSize: 54,
                        lineHeight: 0.9,
                        fontWeight: 900,
                        letterSpacing: '-0.06em',
                        color: mod.accent + '20',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(22px, 2vw, 28px)',
                      fontWeight: 800,
                      color: '#0f172a',
                      margin: '0 0 14px',
                      lineHeight: 1.18,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 15.5,
                      color: '#64748b',
                      lineHeight: 1.82,
                      margin: 0,
                    }}
                  >
                    {feature.desc}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: 24 }}>
                    <div
                      style={{
                        height: 1,
                        width: '100%',
                        background: `linear-gradient(90deg, ${mod.accent}33 0%, rgba(226, 232, 240, 0.45) 100%)`,
                        marginBottom: 18,
                      }}
                    />

                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#94a3b8',
                        marginBottom: 8,
                      }}
                    >
                      Ne Saglar
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: '#334155', fontWeight: 500 }}>
                      {FEATURE_SUMMARIES[i % FEATURE_SUMMARIES.length]}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {VisualComponent && <VisualComponent accent={mod.accent} />}

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
              <div
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  color: '#79ACDC',
                  marginBottom: 12,
                }}
              >
                Neden {mod.name}?
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#003C75', margin: '0 0 16px', lineHeight: 1.15 }}>
                Somut farki hissedin
              </h2>
              <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.72, marginBottom: 36 }}>
                AirX {mod.name} modulu, gunluk operasyonel yuku azaltirken hata riskini minimuma indirir.
              </p>
              <Link
                to="/#demo"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#003C75',
                  color: '#fff',
                  padding: '13px 28px',
                  borderRadius: 9999,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(0,60,117,0.3)',
                }}
              >
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
                {mod.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      background: '#fff',
                      border: '1px solid #e8eef7',
                      borderRadius: 14,
                      padding: '18px 20px',
                      boxShadow: '0 2px 8px rgba(0,40,100,0.04)',
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        flexShrink: 0,
                        background: mod.accent + '18',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: mod.accent,
                      }}
                    >
                      <CheckIcon />
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 500, color: '#1e293b' }}>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '80px 24px',
          background: 'linear-gradient(135deg, #001e45 0%, #003C75 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(121,172,220,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(121,172,220,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            pointerEvents: 'none',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}
        >
          <div
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: 'italic',
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              color: '#79ACDC',
              marginBottom: 16,
            }}
          >
            Hemen Baslayin
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>
            {mod.name} modulunu
            <br />
            ucretsiz deneyin.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(219,238,255,0.65)', marginBottom: 36, lineHeight: 1.65 }}>
            Kurulum gerektirmez. Ayni gun aktif. Kredi karti gerekmez.
          </p>
          <Link
            to="/#demo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#fff',
              color: '#003C75',
              padding: '15px 36px',
              borderRadius: 9999,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}
          >
            Ucretsiz Demo Al <ArrowIcon />
          </Link>
        </motion.div>
      </section>

      <section style={{ padding: '72px 24px', background: '#f8fafd', borderTop: '1px solid #e8eef7' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div
              style={{
                fontSize: 12,
                color: '#94a3b8',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 8,
              }}
            >
              Diger Moduller
            </div>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#003C75', margin: 0 }}>
              Kesfetmeye devam edin
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="other-mods-grid">
            {displayMods.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link to={`/moduller/${item.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div
                    style={{
                      background: '#fff',
                      border: '1px solid #e8eef7',
                      borderRadius: 20,
                      padding: '28px',
                      transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = item.accent + '55'
                      e.currentTarget.style.boxShadow = `0 12px 40px ${item.accent}18`
                      e.currentTarget.style.transform = 'translateY(-3px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e8eef7'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        marginBottom: 20,
                        background: item.accent + '18',
                        border: `1px solid ${item.accent}33`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: item.accent }} />
                    </div>

                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: item.accent,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: 8,
                      }}
                    >
                      {item.tagline}
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: '0 0 10px', lineHeight: 1.2 }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65, margin: '0 0 20px' }}>
                      {item.description.slice(0, 110)}...
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: item.accent, fontWeight: 600, fontSize: 13 }}>
                      Incele <ArrowIcon />
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
          .features-premium-grid { grid-template-columns: 1fr 1fr !important; }
          .benefits-split { flex-direction: column !important; gap: 40px !important; }
          .other-mods-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .module-hero-stats { flex-direction: column !important; }
          .features-premium-grid { grid-template-columns: 1fr !important; }
          .other-mods-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
