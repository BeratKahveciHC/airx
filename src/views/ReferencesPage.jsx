'use client'

import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'

import biolustre from '../assets/logos/biolustre.png'
import untdInsaat from '../assets/logos/untd-insaat.png'
import koyuncu from '../assets/logos/koyuncu.png'
import suadiye from '../assets/logos/suadiye-anaokulu.png'
import viromed from '../assets/logos/viromed.png'
import acacia from '../assets/logos/acacia.png'
import tohumHolding from '../assets/logos/Tohum-Holding-logo-beyaz.png'
import decofis from '../assets/logos/decofis.png'
import akfen from '../assets/logos/akfen.png'
import missha from '../assets/logos/Missha_logo.png'
import unitedGroup from '../assets/logos/united-group.png'

const REFERENCES = [
  {
    src: biolustre,
    alt: 'Biolustre',
    invert: false,
    url: 'https://biolustre.com.tr',
    sector: { tr: 'Kozmetik & Üretim', en: 'Cosmetics & Manufacturing' },
    tr: 'Kozmetik üretiminde personel takibini ve izin yönetimini AiRX ile dijitalleştiren Biolustre, sahada ve ofiste kesintisiz İK operasyonu sağlıyor.',
    en: 'Biolustre digitalized personnel tracking and leave management in cosmetics production with AiRX, ensuring seamless HR operations across field and office.',
  },
  {
    src: untdInsaat,
    alt: 'UNTD İnşaat',
    invert: true,
    url: 'https://www.untdinsaat.com.tr',
    sector: { tr: 'İnşaat & Gayrimenkul', en: 'Construction & Real Estate' },
    tr: 'Farklı şantiyelerdeki personelini AiRX üzerinden merkezi olarak yöneten UNTD İnşaat, PDKS ve puantaj modülleriyle işçilik maliyetlerini optimize etti.',
    en: 'UNTD İnşaat centrally manages its personnel across multiple construction sites via AiRX, optimizing labor costs with time-tracking and timesheet modules.',
  },
  {
    src: koyuncu,
    alt: 'Koyuncu',
    invert: false,
    url: 'https://koyuncu.com',
    sector: { tr: 'Ticaret & Dağıtım', en: 'Trade & Distribution' },
    tr: 'Koyuncu, geniş ekiplerinin giriş-çıkış takibini ve periyodik görev atamalarını AiRX ile kolaylaştırarak yönetim yükünü önemli ölçüde azalttı.',
    en: 'Koyuncu streamlined attendance tracking and periodic task assignments for its large teams with AiRX, significantly reducing management overhead.',
  },
  {
    src: suadiye,
    alt: 'Suadiye Anaokulları',
    invert: false,
    url: 'https://suadiyeanaokullari.com.tr',
    sector: { tr: 'Eğitim', en: 'Education' },
    tr: 'Suadiye Anaokulları, eğitim kadrosunun özlük dosyaları ve izin takibini AiRX ile düzenliyor; mobil uygulama entegrasyonu iletişimi hızlandırıyor.',
    en: 'Suadiye Anaokulları manages staff personnel files and leave tracking with AiRX; mobile app integration speeds up communication.',
  },
  {
    src: viromed,
    alt: 'ViroMed',
    invert: false,
    url: 'https://www.viromed.com.tr',
    sector: { tr: 'Sağlık & Laboratuvar', en: 'Healthcare & Laboratory' },
    tr: 'ViroMed, sağlık sektörünün yoğun temposunda personel planlamasını AiRX ile profesyonelleştirdi; vardiya ve erişim kontrolünü tek sistemde topladı.',
    en: 'ViroMed professionalized staff scheduling in the fast-paced healthcare sector with AiRX, consolidating shift management and access control in one system.',
  },
  {
    src: acacia,
    alt: 'Acacia',
    invert: false,
    url: 'https://www.acacia.com.tr',
    sector: { tr: 'Profesyonel Hizmetler', en: 'Professional Services' },
    tr: 'Acacia, büyüyen ekibinin İK süreçlerini AiRX ile ölçekli biçimde yönetiyor. Anket ve eğitim planlama modülleri çalışan memnuniyetini artırdı.',
    en: 'Acacia manages its growing team\'s HR processes at scale with AiRX. Survey and training planning modules boosted employee satisfaction.',
  },
  {
    src: tohumHolding,
    alt: 'Tohum Holding',
    invert: true,
    url: 'https://tohumholding.com.tr',
    sector: { tr: 'Holding & Yatırım', en: 'Holding & Investment' },
    tr: 'Tohum Holding, bünyesindeki şirketlerin personel operasyonlarını AiRX ile merkezi yapıya taşıdı; tüm grup verisi tek ekranda izlenebiliyor.',
    en: 'Tohum Holding moved personnel operations of its subsidiaries to a centralized structure with AiRX; all group data is visible on a single screen.',
  },
  {
    src: decofis,
    alt: 'Decofis',
    invert: false,
    url: 'https://www.decofis.com.tr',
    sector: { tr: 'İç Mimarlık & Dekorasyon', en: 'Interior Design & Decoration' },
    tr: 'Decofis, iç mekan projelerinde görev alan ekiplerinin ziyaretçi ve erişim yönetimini AiRX ile güvence altına alarak saha güvenlik standartlarını yükseltti.',
    en: 'Decofis secured visitor and access management for its interior project teams with AiRX, raising on-site security standards.',
  },
  {
    src: akfen,
    alt: 'Akfen',
    invert: false,
    url: 'https://www.akfen.com.tr',
    sector: { tr: 'Holding & Altyapı', en: 'Holding & Infrastructure' },
    tr: 'Akfen, farklı sektörlerdeki iştirakleri için AiRX\'in çok şirketli yapısını tercih etti; hukuki evrak ve yan haklar modülleriyle İK uyumluluğunu merkezi sağlıyor.',
    en: 'Akfen chose AiRX\'s multi-company structure for its subsidiaries, centrally ensuring HR compliance through legal documents and fringe benefits modules.',
  },
  {
    src: missha,
    alt: 'Missha',
    invert: false,
    url: 'https://www.missha.com/en/index',
    sector: { tr: 'Güzellik & Perakende', en: 'Beauty & Retail' },
    tr: 'Missha Türkiye, mağaza personelinin PDKS ve yemekhane yönetimini AiRX ile otomatikleştirdi; mobil yapı sayesinde saha ekiplerinin erişimi kolaylaştı.',
    en: 'Missha Turkey automated store staff time attendance and cafeteria management with AiRX; the mobile-first structure simplified field team access.',
  },
  {
    src: unitedGroup,
    alt: 'United Group',
    invert: true,
    url: 'https://www.unitedgroup.com.tr',
    sector: { tr: 'Grup Şirketleri', en: 'Group Companies' },
    tr: 'United Group, büyük ölçekli iş gücünün özlük, puantaj ve izin süreçlerini AiRX ile entegre ederek operasyonel verimliliğini önemli ölçüde artırdı.',
    en: 'United Group significantly increased operational efficiency by integrating its large workforce\'s personnel, timesheet, and leave processes with AiRX.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ReferencesPage() {
  const locale = useLocale()
  const isTr = locale === 'tr'

  return (
    <main style={{ background: '#f0f6fc', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(150deg, #000e24 0%, #001f45 45%, #002d6b 100%)',
        padding: '120px 24px 100px',
        overflow: 'hidden',
      }}>
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(121,172,220,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(121,172,220,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }} />
        {/* Glow blobs */}
        <div style={{
          position: 'absolute', top: -120, right: -80, width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(121,172,220,0.15) 0%, transparent 70%)',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', bottom: -100, left: -60, width: 380, height: 380,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,112,204,0.18) 0%, transparent 70%)',
          zIndex: 0,
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)', fontWeight: 800,
              color: '#ffffff', lineHeight: 1.1, marginBottom: 22,
              letterSpacing: '-0.02em',
            }}
          >
            {isTr ? 'Referanslarımız' : 'Our References'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            style={{
              fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(219,238,255,0.78)',
              lineHeight: 1.75, maxWidth: 560, margin: '0 auto',
            }}
          >
            {isTr
              ? 'Küçük işletmelerden büyük holdinglere kadar her ölçekten kurum, İK süreçlerini AiRX ile dönüştürüyor.'
              : 'From small businesses to large holdings, organizations of every scale are transforming their HR processes with AiRX.'}
          </motion.p>
        </div>
      </section>

      {/* ── CARDS ── */}
      <section style={{ maxWidth: 1220, margin: '0 auto', padding: '80px 24px 100px' }}>

<div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 24,
        }}>
          {REFERENCES.map((ref, i) => (
            <motion.a
              key={ref.alt}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeUp}
              className="ref-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: '#fff',
                borderRadius: 20,
                border: '1px solid rgba(0,60,117,0.08)',
                boxShadow: '0 1px 4px rgba(0,40,100,0.06), 0 4px 16px rgba(0,40,100,0.05)',
                overflow: 'hidden',
                textDecoration: 'none',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              {/* Top accent gradient bar */}
              <div className="ref-card-bar" style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: 'linear-gradient(90deg, #003C75 0%, #79ACDC 100%)',
                opacity: 0,
              }} />

              {/* Logo row */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '28px 28px 22px',
                borderBottom: '1px solid rgba(0,60,117,0.06)',
              }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', minHeight: 52 }}>
                  <img
                    src={ref.src.src}
                    alt={ref.alt}
                    style={{
                      maxHeight: 50, maxWidth: 160,
                      width: 'auto', height: 'auto',
                      objectFit: 'contain',
                      filter: ref.invert ? 'brightness(0)' : 'none',
                    }}
                  />
                </div>
                <div style={{
                  width: 34, height: 34, borderRadius: 9,
                  background: '#EFF6FF', flexShrink: 0, marginLeft: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#79ACDC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '20px 28px 26px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{
                  display: 'inline-flex', alignSelf: 'flex-start',
                  background: '#EFF6FF', borderRadius: 6,
                  padding: '3px 10px',
                }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#003C75', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    {isTr ? ref.sector.tr : ref.sector.en}
                  </span>
                </div>

                <h2 style={{ fontSize: 16, fontWeight: 700, color: '#0a1929', margin: 0 }}>
                  {ref.alt}
                </h2>

                <p style={{ fontSize: 14, color: '#5a6a7e', lineHeight: 1.78, margin: 0, flex: 1 }}>
                  {isTr ? ref.tr : ref.en}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <style>{`
        .ref-card {
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          will-change: transform;
        }
        .ref-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 48px rgba(0,60,117,0.14) !important;
        }
        .ref-card:hover .ref-card-bar {
          opacity: 1;
        }
        .ref-card-bar {
          transition: opacity 0.22s ease;
        }
      `}</style>

    </main>
  )
}
