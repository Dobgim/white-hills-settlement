import PageHero from '../components/PageHero'
import { usePageTitle } from '../components/Layout'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <>
      <PageHero title={['404', 'Page not found']} text="The page you’re looking for doesn’t exist or has moved." />
      <section className="bg-gradient-to-b from-soft to-white py-20 text-center">
        <a href="/" className="btn-accent">
          Back to Home
        </a>
      </section>
    </>
  )
}
