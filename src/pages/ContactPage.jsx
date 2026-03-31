import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

/* ── Data ── */
const CHANNELS = [
  {
    eyebrow: 'E-posta',
    title: 'info@airx.com.tr',
    text: 'Genel bilgi, teklif ve demo talepleriniz için ekibimiz en kısa sürede dönüş sağlar.',
    href: 'mailto:info@airx.com.tr',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    eyebrow: 'Telefon',
    title: '+90 (216) 234 37 37',
    text: 'Hafta içi mesai saatlerinde satış ve ürün ekibimize doğrudan ulaşabilirsiniz.',
    href: 'tel:+902162343737',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.62 12 19.79 19.79 0 0 1 1.55 3.4 2 2 0 0 1 3.52 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6 6l.76-.76a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    eyebrow: 'Merkez Ofis',
    title: 'Vadi İstanbul Park 7B, Sarıyer',
    text: 'Ayazağa Mah. Kemerburgaz Cad. Vadi İstanbul Park 7B Bilişim Vadisi K:2, Sarıyer / İstanbul',
    href: '#demo-form',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

const STEPS = [
  'İhtiyacınızı ve mevcut operasyon yapınızı dinliyoruz.',
  'Size uygun modül setini ve kurulum yaklaşımını paylaşıyoruz.',
  'Demo sonrası geçiş planını birlikte netleştiriyoruz.',
]

const FAQS = [
  {
    q: 'Demo ne kadar sürer?',
    a: 'Kurum yapınıza göre değişmekle birlikte standart ürün demosu genelde 30-45 dakika içinde tamamlanır.',
  },
  {
    q: 'Kurulum için ek donanım gerekir mi?',
    a: 'Hayır. AirX donanım zorunluluğu olmadan devreye alınabilir ve mevcut süreçlerinize göre uyarlanır.',
  },
  {
    q: 'Teklif süreci nasıl ilerler?',
    a: 'İhtiyacınız olan modül, kullanıcı sayısı ve operasyon kapsamı netleştikten sonra size özel teklif hazırlanır.',
  },
  {
    q: 'Hangi sektörlerle çalışıyorsunuz?',
    a: 'Üretim, perakende, sağlık, lojistik, hizmet sektörü başta olmak üzere personel operasyonu olan her kurumla çalışıyoruz.',
  },
]

/* ── Shared input style ── */
const inputStyle = {
  width: '100%',
  border: '1.5px solid #e2e8f0',
  borderRadius: 12,
  padding: '14px 16px',
  fontSize: 15,
  color: '#0f172a',
  fontFamily: 'inherit',
  background: '#fafcff',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

function PlusIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
    </svg>
  )
}

const SIZE_OPTIONS = [
  { value: 'lt20',    label: '20 ve altı' },
  { value: '20-100',  label: '20 – 100' },
  { value: '100-300', label: '100 – 300' },
  { value: '300-1000',label: '300 – 1.000' },
  { value: 'gt1000',  label: '1.000 üzeri' },
]

const TOPIC_OPTIONS = [
  { value: 'demo',          label: 'Ürün demosu' },
  { value: 'teklif',        label: 'Fiyat / teklif' },
  { value: 'kurulum',       label: 'Kurulum süreci' },
  { value: 'entegrasyon',   label: 'Entegrasyon bilgisi' },
  { value: 'other',         label: 'Diğer' },
]

function CustomSelect({ label, options, value, onChange, placeholder = 'Seçiniz', focusedField, fieldName, setFocusedField }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const selected = options.find(o => o.value === value)

  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const isFocused = focusedField === fieldName || open

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => { setOpen(o => !o); setFocusedField(open ? null : fieldName) }}
        onBlur={() => { if (!open) setFocusedField(null) }}
        style={{
          width: '100%',
          border: `1.5px solid ${isFocused ? 'rgba(0,60,117,0.35)' : '#e2e8f0'}`,
          borderRadius: 12,
          padding: '14px 16px',
          fontSize: 15,
          color: selected ? '#0f172a' : '#94a3b8',
          fontFamily: 'inherit',
          background: '#fafcff',
          outline: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
          textAlign: 'left',
          boxShadow: isFocused ? '0 0 0 3px rgba(0,60,117,0.08)' : 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke={isFocused ? '#003C75' : '#94a3b8'} strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ flexShrink: 0, transition: 'transform 0.2s, stroke 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 6px)',
              left: 0,
              right: 0,
              background: '#fff',
              border: '1.5px solid rgba(0,60,117,0.14)',
              borderRadius: 14,
              boxShadow: '0 12px 40px rgba(0,40,100,0.13)',
              zIndex: 50,
              overflow: 'hidden',
              padding: '6px',
            }}
          >
            {options.map((opt) => {
              const isSelected = opt.value === value
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => { onChange(opt.value); setOpen(false); setFocusedField(null) }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 9,
                    border: 'none',
                    background: isSelected ? 'rgba(0,60,117,0.07)' : 'transparent',
                    color: isSelected ? '#003C75' : '#334155',
                    fontSize: 14,
                    fontWeight: isSelected ? 600 : 400,
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.12s, color 0.12s',
                  }}
                  onMouseEnter={e => { if (!isSelected) { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.color = '#003C75' } }}
                  onMouseLeave={e => { if (!isSelected) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#334155' } }}
                >
                  <span>{opt.label}</span>
                  {isSelected && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  )}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ContactPage() {
  const location = useLocation()
  const [openFaq, setOpenFaq] = useState(null)
  const [focusedField, setFocusedField] = useState(null)
  const [sizeValue, setSizeValue] = useState('')
  const [topicValue, setTopicValue] = useState('demo')

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }, [location.hash])

  const fieldStyle = (name) => ({
    ...inputStyle,
    borderColor: focusedField === name ? 'rgba(0,60,117,0.35)' : '#e2e8f0',
    boxShadow: focusedField === name ? '0 0 0 3px rgba(0,60,117,0.08)' : 'none',
  })

  return (
    <main>

      {/* ── Hero ── */}
      <section className="contact-hero-section" style={{
        background: 'linear-gradient(160deg, #001020 0%, #001e42 40%, #003C75 78%, #00509e 100%)',
        padding: '108px 24px 72px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(121,172,220,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(121,172,220,0.07) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <motion.div animate={{ scale: [1, 1.14, 1], opacity: [0.2, 0.36, 0.2] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: -140, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(121,172,220,0.17) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 24, alignItems: 'center' }} className="contact-hero-grid">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
                <div style={{ width: 28, height: 1, background: '#79ACDC', opacity: 0.55 }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: '#79ACDC', letterSpacing: '0.18em', textTransform: 'uppercase' }}>İletişim</span>
              </div>
              <h1 style={{ fontSize: 'clamp(38px, 5vw, 68px)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.03em', color: '#ffffff', margin: '0 0 22px', maxWidth: 680 }}>
                AirX ekibiyle{' '}
                <span style={{ color: '#79ACDC' }}>doğrudan</span>{' '}
                bağlantı kurun.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.78, color: 'rgba(219,238,255,0.68)', margin: '0 0 40px', maxWidth: 560 }}>
                Demo, teklif, kurulum yaklaşımı veya ürün detayları için bize ulaşın.
                İhtiyacınızı dinleyip size uygun akışı net ve hızlı şekilde paylaşalım.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <motion.a href="#demo-form" whileHover={{ y: -3, boxShadow: '0 18px 36px rgba(0,0,0,0.24)' }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 9999, background: '#fff', color: '#003C75', textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
                  Demo Talep Et
                  <ArrowIcon />
                </motion.a>
                <motion.a href="tel:+902162343737" whileHover={{ y: -3, background: 'rgba(255,255,255,0.16)' }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 24px', borderRadius: 9999, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
                  Bizi Arayın
                </motion.a>
              </div>
            </motion.div>

            {/* Right process card */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.13)', borderRadius: 24, padding: '32px 28px', backdropFilter: 'blur(12px)' }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(219,238,255,0.5)', marginBottom: 16 }}>
                Nasıl ilerliyoruz?
              </div>
              <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(18px, 2.2vw, 24px)', lineHeight: 1.3, color: '#dbeeff', marginBottom: 24 }}>
                "İlk görüşmeden demo sonrasına kadar yalın ve hızlı bir akış."
              </div>
              <div style={{ display: 'grid', gap: 10, marginBottom: 26 }}>
                {STEPS.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.35 + i * 0.07 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '11px 14px', borderRadius: 14, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.11)' }}
                  >
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(121,172,220,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#79ACDC', fontSize: 12, fontWeight: 800 }}>
                      {i + 1}
                    </div>
                    <span style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>{step}</span>
                  </motion.div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <div style={{ fontSize: 26, fontWeight: 800, lineHeight: 1, marginBottom: 4 }}>30-45 dk</div>
                  <div style={{ fontSize: 13, color: 'rgba(219,238,255,0.56)' }}>Ortalama demo süresi</div>
                </div>
                <div>
                  <div style={{ fontSize: 26, fontWeight: 800, lineHeight: 1, marginBottom: 4 }}>1 gün</div>
                  <div style={{ fontSize: 13, color: 'rgba(219,238,255,0.56)' }}>Hedef kurulum başlangıcı</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Channel Cards ── */}
      <section style={{ padding: '0 24px 80px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingTop: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="contact-channels-grid">
            {CHANNELS.map((ch, i) => (
              <motion.a
                key={ch.title}
                href={ch.href}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, boxShadow: '0 22px 48px rgba(0,60,117,0.12)' }}
                style={{
                  display: 'block', background: '#fff',
                  border: '1px solid rgba(0,60,117,0.08)',
                  borderRadius: 24, padding: '30px 26px',
                  boxShadow: '0 10px 32px rgba(15,23,42,0.06)',
                  textDecoration: 'none',
                  transition: 'box-shadow 0.25s, transform 0.25s',
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 16, background: 'linear-gradient(135deg, rgba(0,60,117,0.07), rgba(121,172,220,0.14))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#003C75', marginBottom: 18 }}>
                  {ch.icon}
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: '#79ACDC', marginBottom: 10 }}>
                  {ch.eyebrow}
                </div>
                <div style={{ fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 800, color: '#003C75', lineHeight: 1.25, marginBottom: 12 }}>
                  {ch.title}
                </div>
                <p style={{ fontSize: 14.5, color: '#64748b', lineHeight: 1.72, margin: 0 }}>{ch.text}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo Form ── */}
      <section id="demo-form" style={{ padding: '0 24px 100px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: 52 }}
          >
            <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#79ACDC', marginBottom: 12 }}>
              Demo Talebi
            </div>
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 46px)', color: '#003C75', margin: '0 0 14px', lineHeight: 1.12 }}>
              Ekibimiz size en uygun akışı paylaşsın
            </h2>
            <p style={{ fontSize: 17, color: '#64748b', lineHeight: 1.72, maxWidth: 580, margin: '0 auto' }}>
              Modül ihtiyaçlarınızı, kullanıcı yapınızı ve kurulum beklentinizi birlikte değerlendirelim.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '0.88fr 1.12fr', gap: 22, alignItems: 'start' }} className="contact-form-grid">

            {/* Left info card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              style={{
                background: 'linear-gradient(160deg, #001428 0%, #003C75 65%, #0a5ca9 100%)',
                borderRadius: 28, padding: '40px 34px',
                color: '#fff', position: 'relative', overflow: 'hidden',
                boxShadow: '0 22px 56px rgba(0,37,75,0.20)',
              }}
            >
              <div style={{ position: 'absolute', right: -60, bottom: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(121,172,220,0.10)', pointerEvents: 'none' }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(219,238,255,0.5)', marginBottom: 18 }}>
                  Demo Talebi
                </div>
                <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.26, marginBottom: 20, color: '#fff' }}>
                  Ekibimiz size en uygun akışı paylaşsın.
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.82, color: 'rgba(219,238,255,0.68)', margin: '0 0 28px' }}>
                  Formu gönderdiğinizde ürün uzmanlarımız sizinle iletişime geçer; modül
                  ihtiyaçlarınızı, kullanıcı yapınızı ve kurulum beklentinizi birlikte değerlendirir.
                </p>

                <div style={{ display: 'grid', gap: 10, marginBottom: 30 }}>
                  {['Demo planlaması', 'Kurulum yaklaşımı', 'Modül eşleştirmesi', 'Özel fiyat teklifi'].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', borderRadius: 14, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.11)' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#79ACDC', flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 22 }}>
                  <div style={{ fontSize: 13, color: 'rgba(219,238,255,0.5)', marginBottom: 10 }}>Bize doğrudan yazın</div>
                  <a href="mailto:info@airx.com.tr" style={{ fontSize: 16, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>info@airx.com.tr</a>
                </div>
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              style={{ background: '#fff', borderRadius: 28, border: '1px solid rgba(0,60,117,0.08)', boxShadow: '0 18px 48px rgba(0,60,117,0.08)', padding: '38px 34px' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="form-row">
                <label style={{ display: 'grid', gap: 7 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#334155' }}>Ad Soyad</span>
                  <input type="text" placeholder="Adınızı girin" style={fieldStyle('name')} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} />
                </label>
                <label style={{ display: 'grid', gap: 7 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#334155' }}>Şirket</span>
                  <input type="text" placeholder="Şirket adı" style={fieldStyle('company')} onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField(null)} />
                </label>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="form-row">
                <label style={{ display: 'grid', gap: 7 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#334155' }}>E-posta</span>
                  <input type="email" placeholder="ornek@firma.com" style={fieldStyle('email')} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} />
                </label>
                <label style={{ display: 'grid', gap: 7 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#334155' }}>Telefon</span>
                  <input type="tel" placeholder="+90 5xx xxx xx xx" style={fieldStyle('phone')} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} />
                </label>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="form-row">
                <div style={{ display: 'grid', gap: 7 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#334155' }}>Çalışan Sayısı</span>
                  <CustomSelect
                    options={SIZE_OPTIONS}
                    value={sizeValue}
                    onChange={setSizeValue}
                    placeholder="Seçiniz"
                    focusedField={focusedField}
                    fieldName="size"
                    setFocusedField={setFocusedField}
                  />
                </div>
                <div style={{ display: 'grid', gap: 7 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#334155' }}>Konu</span>
                  <CustomSelect
                    options={TOPIC_OPTIONS}
                    value={topicValue}
                    onChange={setTopicValue}
                    placeholder="Seçiniz"
                    focusedField={focusedField}
                    fieldName="topic"
                    setFocusedField={setFocusedField}
                  />
                </div>
              </div>
              <label style={{ display: 'grid', gap: 7, marginBottom: 24 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#334155' }}>Mesajınız</span>
                <textarea
                  rows="5"
                  placeholder="Kurum yapınızı ve ihtiyaçlarınızı kısaca paylaşabilirsiniz."
                  style={{ ...fieldStyle('message'), resize: 'vertical', minHeight: 130 }}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                />
              </label>

              <div className="form-submit-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6, margin: 0, maxWidth: 260 }}>
                  Kişisel verileriniz KVKK kapsamında korunmaktadır.
                </p>
                <motion.button
                  type="button"
                  whileHover={{ y: -3, boxShadow: '0 16px 34px rgba(0,60,117,0.24)' }}
                  whileTap={{ scale: 0.98 }}
                  className="form-submit-btn"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#003C75', color: '#fff', border: 'none', borderRadius: 9999, fontWeight: 700, fontSize: 15, padding: '14px 28px', cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 10px 26px rgba(0,60,117,0.18)' }}
                >
                  Talep Oluştur
                  <ArrowIcon />
                </motion.button>
              </div>
            </motion.div>
          </div>
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
              Sık Sorulanlar
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', color: '#003C75', margin: '0 0 12px', lineHeight: 1.14 }}>
              İletişim öncesi hızlı cevaplar
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.72, maxWidth: 520, margin: '0 auto' }}>
              İlk görüşme öncesinde en çok sorulan birkaç başlığı burada topladık.
            </p>
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
                  borderRadius: 18, overflow: 'hidden',
                  boxShadow: openFaq === index ? '0 10px 32px rgba(0,60,117,0.08)' : '0 4px 18px rgba(15,23,42,0.04)',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  style={{ width: '100%', padding: '22px 26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}
                >
                  <span style={{ fontSize: 17, fontWeight: 600, color: '#0f172a', lineHeight: 1.4 }}>{item.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ width: 30, height: 30, borderRadius: '50%', border: '1px solid rgba(0,60,117,0.15)', background: openFaq === index ? '#003C75' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: openFaq === index ? '#fff' : '#003C75', transition: 'background 0.2s' }}
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
      <section className="contact-cta" style={{
        padding: '104px 24px',
        background: 'linear-gradient(140deg, #001020 0%, #002044 35%, #003C75 65%, #00509e 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(121,172,220,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(121,172,220,0.07) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <motion.div animate={{ scale: [1, 1.14, 1], opacity: [0.2, 0.36, 0.2] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: -200, right: -100, width: 460, height: 460, borderRadius: '50%', background: 'radial-gradient(circle, rgba(121,172,220,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(22px, 3vw, 30px)', color: '#79ACDC', marginBottom: 16 }}>
              Hâlâ Karar Veremiyor musunuz?
            </div>
            <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 52px)', color: '#fff', margin: '0 0 20px', lineHeight: 1.1 }}>
              Size uygun paketi birlikte bulalım.
            </h2>
            <p style={{ maxWidth: 560, margin: '0 auto 34px', fontSize: 17, lineHeight: 1.78, color: 'rgba(219,238,255,0.68)' }}>
              Çalışan sayınızı ve ihtiyaçlarınızı paylaşın, satış ekibimiz en kısa sürede size dönüş yapsın.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <motion.a href="#demo-form" whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.24)' }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 34px', borderRadius: 9999, background: '#fff', color: '#003C75', textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
                Formu Doldur
                <ArrowIcon />
              </motion.a>
              <motion.a href="tel:+902162343737" whileHover={{ y: -4, background: 'rgba(255,255,255,0.16)' }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 28px', borderRadius: 9999, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 15, backdropFilter: 'blur(8px)' }}>
                Hemen Ara
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* ── Grid layouts ── */
        @media (max-width: 960px) {
          .contact-hero-grid, .contact-form-grid { grid-template-columns: 1fr !important; }
          .contact-channels-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .contact-channels-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }

        /* ── Hero section padding ── */
        @media (max-width: 960px) {
          .contact-hero-section { padding: 84px 24px 56px !important; }
        }
        @media (max-width: 640px) {
          .contact-hero-section { padding: 72px 20px 44px !important; }
        }
        @media (max-width: 480px) {
          .contact-hero-section { padding: 64px 16px 40px !important; }
        }

        /* ── Form submit row ── */
        @media (max-width: 580px) {
          .form-submit-row { flex-direction: column !important; align-items: stretch !important; }
          .form-submit-row p { max-width: 100% !important; }
          .form-submit-btn { width: 100% !important; }
        }

        /* ── CTA padding ── */
        @media (max-width: 768px) {
          .contact-cta { padding: 72px 24px !important; }
        }
        @media (max-width: 480px) {
          .contact-cta { padding: 56px 16px !important; }
        }
      `}</style>
    </main>
  )
}
