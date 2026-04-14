import ContactPage from '../../../src/views/ContactPage'

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }]
}

const SITE_URL = 'https://airx.com.tr'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const isTr = locale === 'tr'

  return {
    title: isTr
      ? 'İletişim — Demo Talep Et | AiRX'
      : 'Contact — Request a Demo | AiRX',
    description: isTr
      ? 'AiRX demo talebi ve iletişim. Ürün uzmanlarımız en kısa sürede sizinle iletişime geçer. E-posta: info@airx.com.tr'
      : 'Request an AiRX demo. Our product experts will contact you promptly. Email: info@airx.com.tr',
    alternates: {
      canonical: isTr ? `${SITE_URL}/tr/iletisim` : `${SITE_URL}/en/iletisim`,
      languages: {
        'tr': `${SITE_URL}/tr/iletisim`,
        'en': `${SITE_URL}/en/iletisim`,
      },
    },
    openGraph: {
      title: isTr ? 'İletişim — Demo Talep Et | AiRX' : 'Contact — Request a Demo | AiRX',
      description: isTr
        ? 'Ürün uzmanlarımız en kısa sürede sizinle iletişime geçer.'
        : 'Our product experts will contact you promptly.',
      url: isTr ? `${SITE_URL}/tr/iletisim` : `${SITE_URL}/en/iletisim`,
      siteName: 'AiRX',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  }
}

export default function Iletisim() {
  return <ContactPage />
}
