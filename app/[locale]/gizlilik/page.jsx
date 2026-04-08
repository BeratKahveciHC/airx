import PrivacyPage from '../../../src/views/PrivacyPage'

const SITE_URL = 'https://airx.com.tr'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return {
    title: 'Gizlilik Politikası | AiRX',
    description: "AiRX ve HC Dijital'in gizlilik politikası. Kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu öğrenin.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/gizlilik`,
    },
    robots: { index: false, follow: false },
  }
}

export default function Gizlilik() {
  return <PrivacyPage />
}
