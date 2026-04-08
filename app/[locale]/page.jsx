import Home from '../../src/views/Home'

const SITE_URL = 'https://airx.com.tr'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const isTr = locale === 'tr'

  return {
    title: isTr
      ? 'Mobil İK Yönetim Platformu — PDKS, İzin, Puantaj | AiRX'
      : 'Mobile HR Management Platform — Attendance, Leave, Payroll | AiRX',
    description: isTr
      ? 'AiRX ile İK süreçlerinizi dijitalleştirin. PDKS, izin yönetimi, puantaj, özlük dosyası ve 14 modül tek platformda. Biyometrik cihaz gerekmez, 1 günde kurulum.'
      : 'Digitize your HR processes with AiRX. Attendance, leave management, payroll, personnel files and 14 modules in one platform. No biometric device required.',
    alternates: {
      canonical: isTr ? `${SITE_URL}/tr` : `${SITE_URL}/en`,
      languages: {
        'tr': `${SITE_URL}/tr`,
        'en': `${SITE_URL}/en`,
        'x-default': `${SITE_URL}/tr`,
      },
    },
    openGraph: {
      title: isTr ? 'AiRX — Mobil İK Yönetim Platformu' : 'AiRX — Mobile HR Management Platform',
      description: isTr
        ? 'PDKS, izin yönetimi, puantaj ve 14 modül tek platformda.'
        : 'Attendance, leave management, payroll and 14 modules in one platform.',
      url: isTr ? `${SITE_URL}/tr` : `${SITE_URL}/en`,
      siteName: 'AiRX',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@airxhr',
      title: isTr ? 'AiRX — Mobil İK Yönetim Platformu' : 'AiRX — Mobile HR Management Platform',
      description: isTr
        ? 'PDKS, izin yönetimi, puantaj ve 14 modül tek platformda.'
        : 'Attendance, leave management, payroll and 14 modules in one platform.',
      images: [`${SITE_URL}/og-image.jpg`],
    },
  }
}

export default function HomePage() {
  return <Home />
}
