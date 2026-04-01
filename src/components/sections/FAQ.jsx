import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: 'Kurulum süreci ne kadar sürer?',
    a: 'AirX kurulumu ortalama 1 iş günü içinde tamamlanır. Ekibimiz, organizasyon yapınızı ve personel bilgilerini sisteme aktarmanızda size destek sağlar. Herhangi bir donanım satın almanıza gerek yoktur.',
  },
  {
    q: 'Biyometrik cihaz satın almam gerekiyor mu?',
    a: 'Hayır. AirX, biyometrik cihaz gerektirmez. Personelleriniz giriş-çıkış işlemlerini akıllı telefonlarındaki uygulama üzerinden QR kod veya NFC ile gerçekleştirebilir.',
  },
  {
    q: 'Kaç kullanıcı için uygundur?',
    a: 'AirX, 10 kişilik küçük işletmelerden 10.000+ çalışana sahip büyük kurumlara kadar tüm ölçeklerde kullanılabilir. Kullanıcı sayısına göre esnek fiyatlandırma seçeneklerimiz mevcuttur.',
  },
  {
    q: 'KVKK uyumluluğu nasıl sağlanıyor?',
    a: "AirX, kişisel veri işleme süreçlerinde KVKK'ya tam uyumlu çalışır. Biyometrik veri toplanmaz, tüm veriler Türkiye'deki güvenli veri merkezlerinde saklanır ve veri işleme sözleşmesi imzalanır.",
  },
  {
    q: 'Mobil uygulama hangi cihazlarda çalışır?',
    a: 'AirX mobil uygulaması iOS (iPhone) ve Android cihazlarda çalışır. Web paneline ise herhangi bir tarayıcıdan erişilebilir.',
  },
  {
    q: 'Mevcut HR sistemimizden geçiş yapabilir miyiz?',
    a: 'Evet. Ekibimiz, mevcut sisteminizden veri aktarımı ve geçiş sürecinde size destek sağlar. Excel ve CSV formatındaki personel verileriniz kolayca sisteme aktarılabilir.',
  },
]

function AccordionItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      style={{
        borderBottom: '1px solid rgba(0,60,117,0.08)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '22px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 16,
          fontFamily: 'inherit',
        }}
      >
        <span style={{
          fontSize: 16,
          fontWeight: 600,
          color: isOpen ? '#003C75' : '#0f172a',
          lineHeight: 1.5,
          transition: 'color 0.2s',
        }}>
          {item.q}
        </span>
        <div style={{
          width: 32,
          height: 32,
          flexShrink: 0,
          borderRadius: 8,
          background: isOpen ? '#003C75' : 'rgba(0,60,117,0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.25s',
        }}>
          <svg
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            stroke={isOpen ? '#fff' : '#003C75'}
            strokeWidth="2.2" strokeLinecap="round"
            style={{
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.25s ease',
            }}
          >
            <line x1="7" y1="2" x2="7" y2="12"/>
            <line x1="2" y1="7" x2="12" y2="7"/>
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontSize: 15,
              color: '#64748b',
              lineHeight: 1.75,
              paddingBottom: 22,
              margin: 0,
              paddingRight: 48,
            }} className="faq-answer">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ChatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
  </svg>
)

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (index) => {
    setOpenIndex(prev => prev === index ? null : index)
  }

  return (
    <section id="sss" style={{
      padding: '96px 24px',
      background: 'linear-gradient(180deg, #f8fbff 0%, #fff 100%)',
      position: 'relative',
    }}>

      {/* ── Top fade bridge (dark → light transition) ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 80,
        background: 'linear-gradient(180deg, #001e45 0%, rgba(0,30,69,0) 100%)',
        pointerEvents: 'none', zIndex: 2,
        opacity: 0.35,
      }} />

      {/* Subtle dot pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(rgba(0,60,117,0.06) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
      }} />

      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Başlık ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 'clamp(22px, 3vw, 32px)',
            color: '#79ACDC',
            marginBottom: 14,
            letterSpacing: '-0.01em',
          }}>
            Sık Sorulan Sorular
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            color: '#003C75',
            margin: '0 0 14px',
            lineHeight: 1.15,
          }}>
            Aklınızdaki Soruları{' '}
            <span style={{ color: '#79ACDC' }}>Yanıtlayalım</span>
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
            AirX hakkında merak ettiklerinizi derledik.
          </p>
        </motion.div>

        {/* ── Split Layout ── */}
        <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start' }} className="faq-split">

          {/* Sol — Yardım kartı */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: '0 0 300px', position: 'sticky', top: 100 }}
            className="faq-sidebar"
          >
            {/* Stat kart */}
            <div style={{
              background: '#003C75',
              borderRadius: 24,
              padding: '36px 28px',
              marginBottom: 16,
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* deco */}
              <div style={{ position: 'absolute', right: -40, top: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(121,172,220,0.1)', pointerEvents: 'none' }} />

              <div style={{
                width: 52, height: 52, borderRadius: 15,
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
              }}>
                <ChatIcon />
              </div>

              <div style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: 15,
                color: 'rgba(219,238,255,0.7)',
                marginBottom: 8,
                lineHeight: 1.5,
              }}>
                Burada bulamadınız mı?
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>
                Uzmanlarımızla Konuşun
              </div>
              <p style={{ fontSize: 13, color: 'rgba(219,238,255,0.6)', lineHeight: 1.65, margin: '0 0 24px' }}>
                Özel durumunuzu ekibimizle görüşün, size en uygun çözümü birlikte bulalım.
              </p>

              <button
                onClick={() => { window.location.href = '/iletisim#demo-form' }}
                style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: '#fff',
                color: '#003C75',
                border: 'none',
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: 14,
                padding: '12px 22px',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }} className="faq-help-button">
                Demo Talep Et
                <ArrowIcon />
              </button>
            </div>

            {/* Küçük bilgi kutusu */}
            <div style={{
              background: '#fff',
              border: '1px solid rgba(0,60,117,0.08)',
              borderRadius: 16,
              padding: '20px 22px',
              boxShadow: '0 2px 12px rgba(0,60,117,0.05)',
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(0,60,117,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                Ortalama
              </div>
              {[
                { value: '1 gün', label: 'Kurulum süresi' },
                { value: '7/24', label: 'Teknik destek' },
                { value: '%99.9', label: 'Uptime garantisi' },
              ].map((s, i, arr) => (
                <div key={s.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: i < arr.length - 1 ? '1px solid rgba(0,60,117,0.06)' : 'none',
                }}>
                  <span style={{ fontSize: 13, color: '#64748b', fontWeight: 500 }}>{s.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: '#003C75' }}>{s.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sağ — Accordion */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-split {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .faq-sidebar {
            position: static !important;
            flex: none !important;
            width: 100% !important;
          }
          .faq-answer {
            padding-right: 0 !important;
          }
          .faq-help-button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  )
}
