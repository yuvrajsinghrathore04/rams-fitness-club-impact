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

      <main className="flex flex-col">
        <Hero />

        <section className="py-12 md:py-20">
          <About />
        </section>

        <section className="py-12 md:py-20">
          <Services />
        </section>

        <section className="py-12 md:py-20">
          <Pricing />
        </section>

        <section className="py-12 md:py-20">
          <Gallery />
        </section>

        <section className="py-12 md:py-20">
          <Contact />
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App