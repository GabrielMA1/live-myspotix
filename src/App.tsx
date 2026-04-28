import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import WhoItsFor from './sections/WhoItsFor'
import Pricing from './sections/Pricing'
import HowItWorks from './sections/HowItWorks'
import CoverageMap from './sections/CoverageMap'
import Comparison from './sections/Comparison'
import LastMonthCard from './sections/LastMonthCard'
import WhatToExpect from './sections/WhatToExpect'
import WhySpotix from './sections/WhySpotix'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import StickyMobileCTA from './sections/StickyMobileCTA'

function App() {
  return (
    <div className="bg-spotix-black min-h-screen">
      <Navbar />
      <Hero />
      <WhoItsFor />
      <Pricing />
      <HowItWorks />
      <CoverageMap />
      <Comparison />
      <LastMonthCard />
      <WhatToExpect />
      <WhySpotix />
      <FAQ />
      <Contact />
      <Footer />
      <StickyMobileCTA />
      {/* Spacer for sticky mobile CTA */}
      <div className="h-16 md:hidden" />
    </div>
  )
}

export default App
