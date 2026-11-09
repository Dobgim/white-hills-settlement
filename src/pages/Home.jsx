import Hero from '../components/Hero'
import Impact from '../components/Impact'
import Services from '../components/Services'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import { usePageTitle } from '../components/Layout'

export default function Home() {
  usePageTitle('')
  return (
    <>
      <Hero />
      <Impact />
      <Services />
      <About />
      <Testimonials />
      <Pricing />
      <Faq />
    </>
  )
}
