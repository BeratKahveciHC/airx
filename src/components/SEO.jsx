import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'AiRX'
const SITE_URL = 'https://airx.com.tr'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`
const TWITTER_HANDLE = '@airxhr'

export default function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  ogImageWidth = 1200,
  ogImageHeight = 630,
  noindex = false,
  lang = 'tr',
  jsonLd = null,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Mobil İK Yönetim Platformu`
  const metaDesc = description || 'AiRX, mobil öncelikli İK yönetim platformudur. PDKS, izin yönetimi, puantaj, özlük dosyası ve daha fazlasını tek uygulamada yönetin.'
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL
  const ogLocale = lang === 'en' ? 'en_US' : 'tr_TR'
  const ogLocaleAlt = lang === 'en' ? 'tr_TR' : 'en_US'

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* hreflang alternates */}
      <link rel="alternate" hrefLang="tr" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={String(ogImageWidth)} />
      <meta property="og:image:height" content={String(ogImageHeight)} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogLocaleAlt} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {jsonLd && (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
