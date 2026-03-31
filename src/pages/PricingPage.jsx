import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MONTHLY = { Küçük: 130, Orta: 125, Büyük: 120, Mega: 59 }
const ANNUAL  = { Küçük: 110, Orta: 105, Büyük: 100, Mega: 49 }

const PLANS = [
  {
    id: 'kucuk',
    name: 'Küçük',
    cap: '20 personele kadar',
    featured: false,
    badge: null,
    coreFeatures: [
      'Özlük bilgileri',
      'Evraklar yönetimi',
      'PDKS',
      'Score modülü',
      'Eğitim planlama',
      'Personel anketleri',
      'İzin yönetimi & takip',
    ],
    extras: [],
  },
  {
    id: 'orta',
    name: 'Orta',
    cap: '100 personele kadar',
    featured: false,
    badge: null,
    coreFeatures: [
      'Özlük bilgileri',
      'Evraklar yönetimi',
      'PDKS',
      'Score modülü',
      'Eğitim planlama',
      'Personel anketleri',
      'İzin yönetimi & takip',
    ],
    extras: ['1 adet beacon cihaz', '2 adet NFC panel'],
  },
  {
    id: 'buyuk',
    name: 'Büyük',
    cap: '300 personele kadar',
    featured: true,
    badge: 'En Çok Tercih Edilen',
    coreFeatures: [
      'Özlük bilgileri',
      'Evraklar yönetimi',
      'PDKS',
      'Score modülü',
      'Eğitim planlama',
      'Personel anketleri',
      'İzin yönetimi & takip',
      '3 farklı giriş-çıkış yöntemi',
      'Ziyaretçi yönetimi',
      'Yemekhane hakediş yönetimi',
    ],
    extras: ['2 adet beacon cihaz', '4 adet NFC panel'],
  },
  {
    id: 'mega',
    name: 'Mega',
    cap: '1000+ personel',
    featured: false,
    badge: null,
    coreFeatures: [
      'Özlük bilgileri',
      'Evraklar yönetimi',
      'PDKS',
      'Score modülü',
      'Eğitim planlama',
      'Personel anketleri',
      'İzin yönetimi & takip',
      '5 farklı giriş-çıkış yöntemi',
      'Ziyaretçi yönetimi',
      'Yemekhane hakediş yönetimi',
      'Görev yönetimi',
    ],
    extras: ['2 adet beacon cihaz', '4 adet NFC panel'],
  },
]

const COMPARISON = [
  {
    category: 'Temel Modüller',
    rows: [
      { label: 'Özlük bilgileri', vals: [true, true, true, true] },
      { label: 'Evraklar yönetimi', vals: [true, true, true, true] },
      { label: 'PDKS', vals: [true, true, true, true] },
      { label: 'Score modülü', vals: [true, true, true, true] },
      { label: 'Eğitim planlama', vals: [true, true, true, true] },
      { label: 'Personel anketleri', vals: [true, true, true, true] },
      { label: 'İzin yönetimi', vals: [true, true, true, true] },
    ],
  },
  {
    category: 'Giriş-Çıkış & Donanım',
    rows: [
      { label: 'Beacon cihaz', vals: [null, '1 adet', '2 adet', '2 adet'] },
      { label: 'NFC panel', vals: [null, '2 adet', '4 adet', '4 adet'] },
      { label: 'Giriş-çıkış yöntemi', vals: [null, null, '3 yöntem', '5 yöntem'] },
      { label: 'Ziyaretçi yönetimi', vals: [false, false, true, true] },
      { label: 'Yemekhane yönetimi', vals: [false, false, true, true] },
    ],
  },
  {
    category: 'Gelişmiş Özellikler',
    rows: [
      { label: 'Görev yönetimi', vals: [false, false, false, true] },
    ],
  },
]

const FAQS = [
  {
    q: 'Fiyatlar aylık mı, kişi bazlı mı?',
    a: 'Paketler kişi başı / aylık mantığında sunuluyor. Toplam teklif, çalışan sayınıza ve seçilen pakete göre netleşiyor.',
  },
  {
    q: 'Yıllık sözleşme avantajı var mı?',
    a: 'Evet. Yıllık taahhütle kişi başı aylık fiyatta yaklaşık %15 indirim uygulanıyor. Sayfadaki "Yıllık" seçeneğine geçerek fark miktarını görebilirsiniz.',
  },
  {
    q: 'Kuruma özel teklif alınabilir mi?',
    a: 'Evet. Çalışan sayısı, giriş-çıkış altyapısı ve ek modül ihtiyaçlarına göre özel teklif hazırlanıyor. Talep formumuzu doldurmanız yeterli.',
  },
  {
    q: 'Kurulum için ek donanım şart mı?',
    a: 'Hayır. AirX donanım zorunluluğu olmadan devreye alınabilir. Beacon ve NFC paneller isteğe bağlı ek özellikler olarak paketlere dahil edilmiştir.',
  },
]

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const price = (name) => annual ? ANNUAL[name] : MONTHLY[name]
  const saving = (name) => MONTHLY[name] - ANNUAL[name]

  return (
    <main>

      {/* ── Hero ── */}
      <section className="pricing-hero" style={{
        background: 'linear-gradient(160deg, #001020 0%, #001e42 40%, #003C75 78%, #00509e 100%)',
        padding: '108px 24px 72px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(121,172,220,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(121,172,220,0.07) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        <motion.div
          animate={{ scale: [1, 1.14, 1], opacity: [0.2, 0.36, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: -140, right: -80,
            width: 520, height: 520, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(121,172,220,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', bottom: -160, left: -60,
            width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,80,158,0.30) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
              <div style={{ width: 28, height: 1, background: '#79ACDC', opacity: 0.55 }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#79ACDC', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Fiyatlandırma
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(38px, 5.2vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: '0 0 22px',
              maxWidth: 840,
            }}>
              Kurumunuzun ölçeğine göre{' '}
              <span style={{ color: '#79ACDC' }}>şekillenen</span>{' '}
              fiyat yapısı.
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.78, color: 'rgba(219,238,255,0.68)', margin: '0 0 48px', maxWidth: 600 }}>
              Çalışan sayınıza ve ihtiyaç duyduğunuz modüllere göre paket seçin.
              Yıllık taahhütle kişi başına daha fazla tasarruf edin.
            </p>

            {/* Billing Toggle */}
            <div className="pricing-toggle" style={{ display: 'inline-flex', alignItems: 'center', gap: 0, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 9999, padding: 4 }}>
              <button
                onClick={() => setAnnual(false)}
                style={{
                  padding: '11px 24px', borderRadius: 9999, border: 'none', cursor: 'pointer',
                  fontSize: 14, fontWeight: 600, fontFamily: 'inherit', transition: 'all 0.2s',
                  background: annual ? 'transparent' : 'rgba(255,255,255,0.94)',
                  color: annual ? 'rgba(255,255,255,0.55)' : '#003C75',
                }}
              >
                Aylık
              </button>
              <button
                onClick={() => setAnnual(true)}
                style={{
                  padding: '11px 24px', borderRadius: 9999, border: 'none', cursor: 'pointer',
                  fontSize: 14, fontWeight: 600, fontFamily: 'inherit', transition: 'all 0.2s',
                  background: annual ? 'rgba(255,255,255,0.94)' : 'transparent',
                  color: annual ? '#003C75' : 'rgba(255,255,255,0.55)',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}
              >
                Yıllık
                <span style={{
                  fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 9999,
                  background: annual ? '#003C75' : 'rgba(121,172,220,0.25)',
                  color: annual ? '#fff' : '#79ACDC',
                }}>
                  %15 İndirim
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Plan Cards ── */}
      <section style={{
        background: '#ffffff',
        padding: '0 24px 96px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingTop: 36 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }} className="pricing-plans-grid">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                className={plan.featured ? 'pricing-plan-featured' : undefined}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: plan.featured ? -12 : -8,
                  boxShadow: plan.featured
                    ? '0 36px 72px rgba(0,60,117,0.20)'
                    : '0 24px 50px rgba(0,60,117,0.12)',
                }}
                style={{
                  background: plan.featured
                    ? 'linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%)'
                    : '#fff',
                  border: plan.featured
                    ? '1.5px solid rgba(0,60,117,0.22)'
                    : '1px solid rgba(0,60,117,0.08)',
                  borderRadius: 28,
                  padding: '30px 24px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: plan.featured
                    ? '0 24px 60px rgba(0,60,117,0.14), 0 0 0 1px rgba(121,172,220,0.12)'
                    : '0 8px 28px rgba(15,23,42,0.06)',
                  marginTop: plan.featured ? -14 : 0,
                  zIndex: plan.featured ? 2 : 1,
                  transition: 'box-shadow 0.25s, transform 0.25s',
                }}
              >
                {/* Top accent line for featured */}
                {plan.featured && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                    background: 'linear-gradient(90deg, #79ACDC 0%, #003C75 50%, #79ACDC 100%)',
                    borderRadius: '28px 28px 0 0',
                  }} />
                )}
                {/* Ambient glow for featured */}
                {plan.featured && (
                  <div style={{
                    position: 'absolute', right: -50, top: -50,
                    width: 160, height: 160, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(121,172,220,0.22) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }} />
                )}

                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Badge */}
                  <div style={{ minHeight: 36, marginBottom: 14 }}>
                    {plan.badge && (
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        padding: '6px 12px', borderRadius: 9999,
                        background: 'linear-gradient(90deg, #003C75, #0a5ca9)',
                        color: '#fff', fontSize: 11, fontWeight: 700,
                      }}>
                        <StarIcon />
                        {plan.badge}
                      </div>
                    )}
                  </div>

                  {/* Plan name */}
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#79ACDC', letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 10 }}>
                    {plan.name}
                  </div>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 4 }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={annual ? 'ann' : 'mon'}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        style={{ fontSize: 'clamp(30px, 3vw, 42px)', fontWeight: 800, color: '#003C75', lineHeight: 1 }}
                      >
                        {price(plan.name).toLocaleString('tr-TR')},00 ₺
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 10 }}>kişi / ay</div>

                  {annual && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ fontSize: 12, color: '#16a34a', fontWeight: 600, marginBottom: 4 }}
                    >
                      Aylık {saving(plan.name)} ₺ tasarruf
                    </motion.div>
                  )}

                  {/* Cap badge */}
                  <div style={{
                    display: 'inline-block', fontSize: 12, fontWeight: 600,
                    color: '#003C75', background: 'rgba(0,60,117,0.07)',
                    padding: '4px 10px', borderRadius: 9999, marginBottom: 22,
                  }}>
                    {plan.cap}
                  </div>

                  {/* CTA */}
                  <a
                    href="/iletisim#demo-form"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: '13px', borderRadius: 12,
                      background: plan.featured ? '#003C75' : 'rgba(0,60,117,0.06)',
                      color: plan.featured ? '#fff' : '#003C75',
                      textDecoration: 'none', fontWeight: 700, fontSize: 14,
                      marginBottom: 24,
                      border: plan.featured ? 'none' : '1px solid rgba(0,60,117,0.12)',
                      boxShadow: plan.featured ? '0 8px 22px rgba(0,60,117,0.22)' : 'none',
                      transition: 'opacity 0.15s',
                    }}
                  >
                    Hemen Başvur
                  </a>

                  <div style={{ height: 1, background: 'rgba(0,60,117,0.08)', marginBottom: 20 }} />

                  {/* Features */}
                  <div style={{ display: 'grid', gap: 9 }}>
                    {plan.coreFeatures.map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                        <div style={{
                          width: 19, height: 19, borderRadius: '50%', flexShrink: 0,
                          background: 'rgba(0,60,117,0.07)', color: '#003C75',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                        }}>
                          <CheckIcon />
                        </div>
                        <span style={{ fontSize: 13, lineHeight: 1.55, color: '#475569' }}>{f}</span>
                      </div>
                    ))}
                    {plan.extras.map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                        <div style={{
                          width: 19, height: 19, borderRadius: '50%', flexShrink: 0,
                          background: 'rgba(121,172,220,0.14)', color: '#79ACDC',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                        }}>
                          <CheckIcon />
                        </div>
                        <span style={{ fontSize: 13, lineHeight: 1.55, color: '#475569', fontWeight: 500 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p style={{ marginTop: 22, fontSize: 13, color: '#94a3b8', lineHeight: 1.7, textAlign: 'center' }}>
            Net kapsam, ek cihaz adetleri ve kuruma özel indirimler teklif aşamasında kesinleştirilir. KDV dahil değildir.
          </p>
        </div>
      </section>

      {/* ── Feature Comparison Table ── */}
      <section style={{ padding: '0 24px 100px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: 48 }}
          >
            <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#79ACDC', marginBottom: 12 }}>
              Özellik Karşılaştırması
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', color: '#003C75', margin: '0 0 12px', lineHeight: 1.14 }}>
              Hangi pakette ne var?
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.72, maxWidth: 520, margin: '0 auto' }}>
              Paketin kapsadığı modülleri ve donanım detaylarını aşağıdaki tablodan karşılaştırabilirsiniz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ border: '1px solid rgba(0,60,117,0.10)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 16px 50px rgba(0,60,117,0.07)' }}
            className="comparison-table"
          >
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(4, 1fr)', background: 'linear-gradient(180deg, #f8fbff 0%, #eff5fc 100%)', borderBottom: '1px solid rgba(0,60,117,0.10)' }}>
              <div style={{ padding: '18px 24px', fontSize: 13, fontWeight: 700, color: '#64748b' }}>Özellik</div>
              {PLANS.map((p) => (
                <div
                  key={p.id}
                  style={{
                    padding: '18px 16px', textAlign: 'center',
                    fontWeight: 700, fontSize: 14,
                    color: p.featured ? '#003C75' : '#334155',
                    borderLeft: '1px solid rgba(0,60,117,0.07)',
                    background: p.featured ? 'rgba(0,60,117,0.04)' : 'transparent',
                  }}
                >
                  {p.name}
                  {p.featured && (
                    <div style={{ fontSize: 10, color: '#79ACDC', marginTop: 3, fontWeight: 600 }}>★ Popüler</div>
                  )}
                </div>
              ))}
            </div>

            {COMPARISON.map((cat, ci) => (
              <div key={cat.category}>
                <div style={{
                  padding: '11px 24px',
                  background: 'rgba(0,60,117,0.03)',
                  borderBottom: '1px solid rgba(0,60,117,0.06)',
                  fontSize: 11, fontWeight: 700, color: '#003C75',
                  letterSpacing: '0.09em', textTransform: 'uppercase',
                }}>
                  {cat.category}
                </div>
                {cat.rows.map((row, ri) => {
                  const isLast = ri === cat.rows.length - 1 && ci === COMPARISON.length - 1
                  return (
                    <div
                      key={row.label}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1.5fr repeat(4, 1fr)',
                        borderBottom: isLast ? 'none' : '1px solid rgba(0,60,117,0.05)',
                        transition: 'background 0.15s',
                      }}
                      className="comparison-row"
                    >
                      <div style={{ padding: '14px 24px', fontSize: 14, color: '#475569' }}>{row.label}</div>
                      {row.vals.map((val, pi) => (
                        <div
                          key={pi}
                          style={{
                            padding: '14px 16px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            borderLeft: '1px solid rgba(0,60,117,0.05)',
                            background: PLANS[pi].featured ? 'rgba(0,60,117,0.02)' : 'transparent',
                          }}
                        >
                          {val === true && (
                            <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(0,60,117,0.08)', color: '#003C75', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <CheckIcon />
                            </div>
                          )}
                          {val === false && (
                            <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(100,116,139,0.06)', color: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <XIcon />
                            </div>
                          )}
                          {val === null && (
                            <div style={{ width: 18, height: 1.5, background: '#e2e8f0', borderRadius: 2 }} />
                          )}
                          {typeof val === 'string' && (
                            <span style={{ fontSize: 13, fontWeight: 600, color: '#003C75' }}>{val}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '0 24px 100px', background: '#ffffff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: 44 }}
          >
            <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#79ACDC', marginBottom: 12 }}>
              Fiyatlama Notları
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', color: '#003C75', margin: '0 0 12px', lineHeight: 1.14 }}>
              Teklif sürecinde en çok sorulanlar
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gap: 10 }}>
            {FAQS.map((item, index) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                style={{
                  background: '#fff',
                  border: `1px solid ${openFaq === index ? 'rgba(0,60,117,0.18)' : 'rgba(0,60,117,0.08)'}`,
                  borderRadius: 18,
                  overflow: 'hidden',
                  boxShadow: openFaq === index ? '0 10px 32px rgba(0,60,117,0.08)' : '0 4px 18px rgba(15,23,42,0.04)',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  style={{
                    width: '100%', padding: '22px 26px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                    background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: 17, fontWeight: 600, color: '#0f172a', lineHeight: 1.4 }}>{item.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.22 }}
                    style={{
                      width: 30, height: 30, borderRadius: '50%',
                      border: '1px solid rgba(0,60,117,0.15)',
                      background: openFaq === index ? '#003C75' : 'transparent',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      color: openFaq === index ? '#fff' : '#003C75',
                      transition: 'background 0.2s',
                    }}
                  >
                    <PlusIcon />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 26px 24px', fontSize: 15.5, color: '#64748b', lineHeight: 1.8 }}>
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pricing-cta" style={{
        padding: '104px 24px',
        background: 'linear-gradient(140deg, #001020 0%, #002044 35%, #003C75 65%, #00509e 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(121,172,220,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(121,172,220,0.07) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <motion.div animate={{ scale: [1, 1.14, 1], opacity: [0.2, 0.36, 0.2] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: -200, right: -100, width: 460, height: 460, borderRadius: '50%', background: 'radial-gradient(circle, rgba(121,172,220,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.14, 0.26, 0.14] }} transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', bottom: -180, left: -80, width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,80,158,0.28) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(22px, 3vw, 30px)', color: '#79ACDC', marginBottom: 16 }}>
              Kurumunuza Özel Teklif
            </div>
            <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 52px)', color: '#fff', margin: '0 0 20px', lineHeight: 1.1 }}>
              Çalışan sayınıza ve modül ihtiyaçlarınıza
              <br className="cta-br" />
              göre birlikte netleştirelim.
            </h2>
            <p style={{ maxWidth: 580, margin: '0 auto 34px', fontSize: 17, lineHeight: 1.78, color: 'rgba(219,238,255,0.68)' }}>
              Yıllık anlaşma avantajları, cihaz kapsamı ve ek modüller için
              satış ekibimiz size özel teklif oluştursun.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <motion.a
                href="/iletisim#demo-form"
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.24)' }}
                whileTap={{ scale: 0.98 }}
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '15px 34px', borderRadius: 9999, background: '#fff', color: '#003C75', textDecoration: 'none', fontWeight: 700, fontSize: 15 }}
              >
                Teklif İste
              </motion.a>
              <motion.a
                href="/iletisim"
                whileHover={{ y: -4, background: 'rgba(255,255,255,0.16)' }}
                whileTap={{ scale: 0.98 }}
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '15px 28px', borderRadius: 9999, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 15, backdropFilter: 'blur(8px)' }}
              >
                İletişime Geç
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* ── Plans grid ── */
        @media (max-width: 1024px) {
          .pricing-plans-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .pricing-plan-featured { margin-top: 0 !important; }
        }
        @media (max-width: 640px) {
          .pricing-plans-grid { grid-template-columns: 1fr !important; }
          .comparison-table { display: none !important; }
          .cta-br { display: none !important; }
        }

        /* ── Hero padding ── */
        @media (max-width: 960px) {
          .pricing-hero { padding: 84px 24px 56px !important; }
        }
        @media (max-width: 640px) {
          .pricing-hero { padding: 72px 20px 44px !important; }
        }
        @media (max-width: 480px) {
          .pricing-hero { padding: 64px 16px 40px !important; }
        }

        /* ── CTA padding ── */
        @media (max-width: 768px) {
          .pricing-cta { padding: 72px 24px !important; }
        }
        @media (max-width: 480px) {
          .pricing-cta { padding: 56px 16px !important; }
        }

        /* ── Comparison row hover ── */
        .comparison-row:hover { background: rgba(0,60,117,0.02) !important; }
      `}</style>
    </main>
  )
}
