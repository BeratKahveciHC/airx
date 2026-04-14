import AboutPage from '../../../src/views/AboutPage'

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }]
}

const SITE_URL = 'https://airx.com.tr'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const isTr = locale === 'tr'

  return {
    title: isTr
      ? 'Hakkımızda — AiRX İK Yönetim Platformu'
      : 'About Us — AiRX HR Management Platform',
    description: isTr
      ? "AiRX, Türkiye'nin mobil öncelikli İK yönetim platformudur. 150+ aktif kurum, 15.000+ kullanıcı. Biyometrik veri gerektirmez, KVKK uyumlu, 1 günde kurulum."
      : "AiRX is Turkey's mobile-first HR management platform. 150+ active institutions, 15,000+ users. No biometric data required, KVKK compliant, 1-day setup.",
    alternates: {
      canonical: isTr ? `${SITE_URL}/tr/hakkimizda` : `${SITE_URL}/en/hakkimizda`,
      languages: {
        'tr': `${SITE_URL}/tr/hakkimizda`,
        'en': `${SITE_URL}/en/hakkimizda`,
      },
    },
    openGraph: {
      title: isTr ? 'Hakkımızda — AiRX' : 'About Us — AiRX',
      description: isTr
        ? '150+ aktif kurum, 15.000+ kullanıcı. KVKK uyumlu.'
        : '150+ active institutions, 15,000+ users. KVKK compliant.',
      url: isTr ? `${SITE_URL}/tr/hakkimizda` : `${SITE_URL}/en/hakkimizda`,
      siteName: 'AiRX',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  }
}

export default function Hakkimizda() {
  return <AboutPage />
}
