import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout, { RouterEffects } from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import DisputeLetter from './pages/DisputeLetter'
import DeadlineChecker from './pages/DeadlineChecker'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <RouterEffects />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="terms-and-conditions" element={<Terms />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Free tools use the full-screen split layout, like the original app pages */}
        <Route path="dispute-letter" element={<DisputeLetter />} />
        <Route path="deadline-checker" element={<DeadlineChecker />} />
      </Routes>
    </BrowserRouter>
  )
}
