import ReferencesPage from '../../../src/views/ReferencesPage'

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }]
}

const SITE_URL = 'https://airx.com.tr'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const isTr = locale === 'tr'

  return {
    title: isTr
      ? 'Referanslarımız — AiRX ile Dijitalleşen Markalar'
      : 'Our References — Brands That Digitalized with AiRX',
    description: isTr
      ? 'Biolustre, Akfen, Missha, Tohum Holding ve daha fazlası. 150\'den fazla kurumun güvendiği AiRX ile İK süreçlerinizi dijitalleştirin.'
      : 'Biolustre, Akfen, Missha, Tohum Holding and more. Digitalize your HR processes with AiRX, trusted by 150+ institutions.',
    alternates: {
      canonical: isTr ? `${SITE_URL}/tr/referanslar` : `${SITE_URL}/en/referanslar`,
      languages: {
        tr: `${SITE_URL}/tr/referanslar`,
        en: `${SITE_URL}/en/referanslar`,
      },
    },
    openGraph: {
      title: isTr ? 'Referanslarımız — AiRX' : 'Our References — AiRX',
      description: isTr
        ? '150\'den fazla kurumun güvendiği AiRX platformunu kullanan öncü markalar.'
        : 'Leading brands using the AiRX platform, trusted by 150+ institutions.',
      url: isTr ? `${SITE_URL}/tr/referanslar` : `${SITE_URL}/en/referanslar`,
      siteName: 'AiRX',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  }
}

export default function Referanslar() {
  return <ReferencesPage />
}
