import HesaplamalarPage from '../../../src/views/HesaplamalarPage'

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }]
}

const SITE_URL = 'https://airx.com.tr'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const isTr = locale === 'tr'

  return {
    title: isTr
      ? 'Hesaplamalar — AiRX İK Yönetim Platformu'
      : 'Calculations — AiRX HR Management Platform',
    description: isTr
      ? 'Maaş hesaplama, brütten nete ve netten brüte hesaplayın. SGK, gelir vergisi, AGİ ve damga vergisi dahil güncel 2025 yasal oranlarıyla.'
      : 'Salary calculator for Turkey. Calculate gross to net and net to gross with current 2025 tax rates including SSI, income tax, and stamp tax.',
    alternates: {
      canonical: isTr ? `${SITE_URL}/tr/hesaplamalar` : `${SITE_URL}/en/hesaplamalar`,
      languages: {
        tr: `${SITE_URL}/tr/hesaplamalar`,
        en: `${SITE_URL}/en/hesaplamalar`,
      },
    },
    openGraph: {
      title: isTr ? 'Hesaplamalar — AiRX' : 'Calculations — AiRX',
      description: isTr
        ? 'Güncel yasal oranlarla maaş hesaplama aracı.'
        : 'Salary calculator with current Turkish tax rates.',
      url: isTr ? `${SITE_URL}/tr/hesaplamalar` : `${SITE_URL}/en/hesaplamalar`,
      siteName: 'AiRX',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  }
}

export default function Hesaplamalar() {
  return <HesaplamalarPage />
}
