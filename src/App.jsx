import Hero from './components/Hero'
import Impact from './components/Impact'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Impact />
        <Services />
        <About />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
