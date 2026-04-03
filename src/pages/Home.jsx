import Hero from '../components/sections/Hero'
import References from '../components/sections/References'
import Modules from '../components/sections/Modules'
import WhyAirX from '../components/sections/WhyAirX'
import HowItWorks from '../components/sections/HowItWorks'
import MobileApp from '../components/sections/MobileApp'
import Security from '../components/sections/Security'
import CTASection from '../components/sections/CTASection'
import FAQ from '../components/sections/FAQ'
import SEO from '../components/SEO'

const HOME_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AiRX',
    url: 'https://airx.com.tr',
    logo: 'https://airx.com.tr/og-image.jpg',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@airx.com.tr',
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: 'Turkish',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AiRX',
    url: 'https://airx.com.tr',
    description: 'Mobil öncelikli İK yönetim platformu — PDKS, izin yönetimi, puantaj ve daha fazlası.',
    inLanguage: 'tr-TR',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AiRX İK Yönetim Platformu',
    operatingSystem: 'iOS, Android, Web',
    applicationCategory: 'BusinessApplication',
    description: 'Mobil öncelikli İK yönetim platformu. PDKS, izin yönetimi, puantaj, özlük dosyası ve 14 modül tek abonelikte.',
    offers: { '@type': 'Offer', price: '254', priceCurrency: 'TRY' },
    provider: { '@type': 'Organization', name: 'AiRX', url: 'https://airx.com.tr' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Kurulum ne kadar sürer?', acceptedAnswer: { '@type': 'Answer', text: 'AiRX kurulumu ortalama 1 iş günü içinde tamamlanır. Ekibimiz, organizasyon yapınızı ve personel bilgilerini sisteme aktarmanızda size destek sağlar. Herhangi bir donanım satın almanıza gerek yoktur.' } },
      { '@type': 'Question', name: 'Biyometrik cihaz satın almam gerekiyor mu?', acceptedAnswer: { '@type': 'Answer', text: 'Hayır. AiRX, biyometrik cihaz gerektirmez. Personelleriniz giriş-çıkış işlemlerini akıllı telefonlarındaki uygulama üzerinden QR kod veya NFC ile gerçekleştirebilir.' } },
      { '@type': 'Question', name: 'Kaç kullanıcı için uygundur?', acceptedAnswer: { '@type': 'Answer', text: 'AiRX, 10 kişilik küçük işletmelerden 10.000+ çalışana sahip büyük kurumlara kadar tüm ölçeklerde kullanılabilir. Kullanıcı sayısına göre esnek fiyatlandırma seçeneklerimiz mevcuttur.' } },
      { '@type': 'Question', name: 'KVKK uyumluluğu nasıl sağlanıyor?', acceptedAnswer: { '@type': 'Answer', text: 'AiRX, kişisel veri işleme süreçlerinde KVKK\'ya tam uyumlu çalışır. Biyometrik veri toplanmaz, tüm veriler Türkiye\'deki güvenli veri merkezlerinde saklanır ve veri işleme sözleşmesi imzalanır.' } },
      { '@type': 'Question', name: 'Mobil uygulama hangi cihazlarda çalışır?', acceptedAnswer: { '@type': 'Answer', text: 'AiRX mobil uygulaması iOS (iPhone) ve Android cihazlarda çalışır. Web paneline ise herhangi bir tarayıcıdan erişilebilir.' } },
      { '@type': 'Question', name: 'Mevcut HR sistemimizden geçiş yapabilir miyiz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Ekibimiz, mevcut sisteminizden veri aktarımı ve geçiş sürecinde size destek sağlar. Excel ve CSV formatındaki personel verileriniz kolayca sisteme aktarılabilir.' } },
    ],
  },
]

export default function Home() {
  return (
    <main>
      <SEO
        title="Mobil İK Yönetim Platformu — PDKS, İzin, Puantaj"
        description="AiRX ile İK süreçlerinizi dijitalleştirin. PDKS, izin yönetimi, puantaj, özlük dosyası ve 14 modül tek platformda. Biyometrik cihaz gerekmez, 1 günde kurulum."
        canonical="/"
        jsonLd={HOME_JSON_LD}
      />
      <Hero />
      <References />
      <Modules />
      <WhyAirX />
      <HowItWorks />
      <MobileApp />
      <Security />
      <CTASection />
      <FAQ />
    </main>
  )
}
