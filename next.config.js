import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' // IHS shared hosting için açabilirsiniz
}

export default withNextIntl(nextConfig)
