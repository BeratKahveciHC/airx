import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/config'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ModulePage from './pages/ModulePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PricingPage from './pages/PricingPage'
import WhyAirXPage from './pages/WhyAirXPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import KvkkPage from './pages/KvkkPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <HelmetProvider>
        <BrowserRouter>
          <div className="site-bg">
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fiyatlar" element={<PricingPage />} />
              <Route path="/hakkimizda" element={<AboutPage />} />
              <Route path="/iletisim" element={<ContactPage />} />
              <Route path="/neden-airx" element={<WhyAirXPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/moduller/:slug" element={<ModulePage />} />
              <Route path="/kvkk" element={<KvkkPage />} />
              <Route path="/kullanim-kosullari" element={<TermsPage />} />
              <Route path="/gizlilik" element={<PrivacyPage />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </I18nextProvider>
  )
}
