import Hero from '../components/sections/Hero'
import References from '../components/sections/References'
import Modules from '../components/sections/Modules'
import WhyAirX from '../components/sections/WhyAirX'
import HowItWorks from '../components/sections/HowItWorks'
import MobileApp from '../components/sections/MobileApp'
import Security from '../components/sections/Security'
import CTASection from '../components/sections/CTASection'
import FAQ from '../components/sections/FAQ'
import Footer from '../components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <References />
      <Modules />
      <WhyAirX />
      <HowItWorks />
      <MobileApp />
      <Security />
      <CTASection />
      <FAQ />
      <Footer />
    </main>
  )
}
