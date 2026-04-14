import WhyAirXPage from '../../../src/views/WhyAirXPage'

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }]
}

const SITE_URL = 'https://airx.com.tr'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const isTr = locale === 'tr'

  return {
    title: isTr
      ? 'Neden AiRX — Diğerleri Vaad Eder, AiRX Teslim Eder'
      : 'Why AiRX — Others Promise, AiRX Delivers',
    description: isTr
      ? 'Biyometrik veri riski yok, donanım maliyeti yok. AiRX ile KVKK uyumlu, mobil öncelikli İK yönetimi. 150+ kurumun tercih ettiği platform.'
      : 'No biometric data risk, no hardware cost. KVKK compliant, mobile-first HR management with AiRX. Trusted by 150+ institutions.',
    alternates: {
      canonical: isTr ? `${SITE_URL}/tr/neden-airx` : `${SITE_URL}/en/neden-airx`,
      languages: {
        'tr': `${SITE_URL}/tr/neden-airx`,
        'en': `${SITE_URL}/en/neden-airx`,
      },
    },
    openGraph: {
      title: isTr ? 'Neden AiRX' : 'Why AiRX',
      description: isTr
        ? 'KVKK uyumlu, biyometrik veri gerektirmez, 150+ kurumun tercihi.'
        : 'KVKK compliant, no biometric data required, trusted by 150+ institutions.',
      url: isTr ? `${SITE_URL}/tr/neden-airx` : `${SITE_URL}/en/neden-airx`,
      siteName: 'AiRX',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  }
}

export default function NedenAirX() {
  return <WhyAirXPage />
}
