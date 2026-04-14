import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { getAllBlogSlugs, getBlogPost } from '../../../../src/lib/blog.server'
import BlogPostPage from '../../../../src/views/BlogPostPage'

const SITE_URL = 'https://airx.com.tr'

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  const locales = ['tr', 'en']
  return locales.flatMap(locale =>
    slugs.map(slug => ({ locale, slug }))
  )
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  const parsed = getBlogPost(slug, locale)
  if (!parsed) return {}

  const { data } = parsed
  const title = data.title ? `${data.title} | AiRX Blog` : 'AiRX Blog'
  const description = data.excerpt || data.title || ''
  const url = `${SITE_URL}/${locale}/blog/${slug}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'tr': `${SITE_URL}/tr/blog/${slug}`,
        'en': `${SITE_URL}/en/blog/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'AiRX',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
      locale: locale === 'en' ? 'en_US' : 'tr_TR',
      type: 'article',
    },
  }
}

export default async function BlogPost({ params }) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const parsed = getBlogPost(slug, locale)

  if (!parsed) notFound()

  const post = { ...parsed.data, content: parsed.content }

  return <BlogPostPage post={post} />
}
