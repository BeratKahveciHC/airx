import PricingPage from '../../../src/views/PricingPage'

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }]
}

const SITE_URL = 'https://airx.com.tr'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const isTr = locale === 'tr'

  return {
    title: isTr
      ? 'Fiyatlar — AiRX İK Yönetim Platformu'
      : 'Pricing — AiRX HR Management Platform',
    description: isTr
      ? 'AiRX fiyatlandırması: personel sayısına göre esnek planlar. Aylık, 6 aylık veya yıllık abonelik seçenekleri. 14 modül tek abonelikte, ek ücret yok.'
      : 'AiRX pricing: flexible plans based on headcount. Monthly, 6-month or annual subscription options. 14 modules in one subscription, no extra fees.',
    alternates: {
      canonical: isTr ? `${SITE_URL}/tr/fiyatlar` : `${SITE_URL}/en/fiyatlar`,
      languages: {
        'tr': `${SITE_URL}/tr/fiyatlar`,
        'en': `${SITE_URL}/en/fiyatlar`,
      },
    },
    openGraph: {
      title: isTr ? 'Fiyatlar — AiRX' : 'Pricing — AiRX',
      description: isTr
        ? 'Esnek planlar, tek abonelik, 14 modül.'
        : 'Flexible plans, one subscription, 14 modules.',
      url: isTr ? `${SITE_URL}/tr/fiyatlar` : `${SITE_URL}/en/fiyatlar`,
      siteName: 'AiRX',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  }
}

export default function Fiyatlar() {
  return <PricingPage />
}
