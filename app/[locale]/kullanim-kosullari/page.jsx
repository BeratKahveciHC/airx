import TermsPage from '../../../src/views/TermsPage'

const SITE_URL = 'https://airx.com.tr'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return {
    title: 'Kullanım Koşulları | AiRX',
    description: 'AiRX web sitesinin kullanım koşulları. HC Dijital tarafından sunulan hizmetlerin yasal çerçevesini öğrenin.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/kullanim-kosullari`,
    },
    robots: { index: false, follow: false },
  }
}

export default function KullanimKosullari() {
  return <TermsPage />
}
