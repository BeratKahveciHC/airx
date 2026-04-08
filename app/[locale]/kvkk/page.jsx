import KvkkPage from '../../../src/views/KvkkPage'

const SITE_URL = 'https://airx.com.tr'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return {
    title: 'KVKK Aydınlatma Metni | AiRX',
    description: 'HC Dijital olarak 6698 sayılı KVKK kapsamında kişisel verilerinizin nasıl işlendiğine dair aydınlatma metni.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/kvkk`,
    },
    robots: { index: false, follow: false },
  }
}

export default function Kvkk() {
  return <KvkkPage />
}
