import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { MODULES_DATA, getModuleBySlug } from '../../../../src/data/modules'
import ModulePage from '../../../../src/views/ModulePage'

const SITE_URL = 'https://airx.com.tr'

export async function generateStaticParams() {
  const locales = ['tr', 'en']
  return locales.flatMap(locale =>
    MODULES_DATA.map(m => ({ locale, slug: m.slug }))
  )
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  const mod = getModuleBySlug(slug)
  if (!mod) return {}

  const isTr = locale === 'tr'
  const title = `${mod.name} - ${mod.tagline} | AiRX`
  const description = `${mod.description} AiRX ${mod.name} modülü ile İK süreçlerinizi dijitalleştirin.`
  const url = `${SITE_URL}/${locale}/moduller/${slug}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'tr': `${SITE_URL}/tr/moduller/${slug}`,
        'en': `${SITE_URL}/en/moduller/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'AiRX',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  }
}

export default async function ModulePageRoute({ params }) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const mod = getModuleBySlug(slug)
  if (!mod) notFound()

  return <ModulePage slug={slug} />
}
