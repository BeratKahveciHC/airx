import BlogPage from '../../../src/views/BlogPage'

const SITE_URL = 'https://airx.com.tr'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const isTr = locale === 'tr'

  return {
    title: isTr
      ? 'Blog — İK Yönetimi, KVKK ve Dijital Dönüşüm | AiRX'
      : 'Blog — HR Management, Compliance & Digital Transformation | AiRX',
    description: isTr
      ? 'AiRX blog: İK süreçleri, PDKS, KVKK uyumu, çalışan deneyimi ve dijital İK dönüşümü hakkında uzman içerikler.'
      : 'AiRX blog: Expert content on HR processes, attendance, compliance, employee experience and digital HR transformation.',
    alternates: {
      canonical: isTr ? `${SITE_URL}/tr/blog` : `${SITE_URL}/en/blog`,
      languages: {
        'tr': `${SITE_URL}/tr/blog`,
        'en': `${SITE_URL}/en/blog`,
      },
    },
    openGraph: {
      title: isTr ? 'Blog — AiRX' : 'Blog — AiRX',
      description: isTr
        ? 'İK yönetimi, KVKK ve dijital dönüşüm hakkında uzman içerikler.'
        : 'Expert content on HR management, compliance and digital transformation.',
      url: isTr ? `${SITE_URL}/tr/blog` : `${SITE_URL}/en/blog`,
      siteName: 'AiRX',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  }
}

export default function Blog() {
  return <BlogPage />
}
