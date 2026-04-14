import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '../../src/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}
import Navbar from '../../src/components/layout/Navbar'
import Footer from '../../src/components/layout/Footer'
import { Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google'
import '../../src/styles/globals.css'

export const metadata = {
  icons: {
    icon: '/favicon.svg',
  },
}

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument-serif',
})

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params

  if (!routing.locales.includes(locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages({ locale })

  return (
    <html lang={locale} className={`${plusJakartaSans.variable} ${instrumentSerif.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="site-bg">
            <Navbar />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
