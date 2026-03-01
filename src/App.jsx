import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-impact-darker text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="h-8 md:h-12 bg-impact-darker" />
      <About />
      <div className="h-8 md:h-12 bg-impact-darker" />
      <Services />
      <div className="h-8 md:h-12 bg-impact-darker" />
      <Pricing />
      <div className="h-8 md:h-12 bg-impact-darker" />
      <Gallery />
      <div className="h-8 md:h-12 bg-impact-darker" />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App