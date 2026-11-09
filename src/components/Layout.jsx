import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer'

/**
 * Lets plain <a href="/about"> links navigate client-side (no full reload),
 * scrolls to the top on page change, and scrolls to #hash targets.
 */
export function RouterEffects() {
  const navigate = useNavigate()
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest('a')
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return
      const href = a.getAttribute('href')
      if (!href || !href.startsWith('/') || href.startsWith('//')) return
      e.preventDefault()
      navigate(href)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

  useEffect(() => {
    if (hash) {
      // wait a frame so the new page is rendered
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

/** Sets the browser tab title for a page. */
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Northgate Advisory` : 'Northgate Advisory | Accounting, Tax & Advisory'
  }, [title])
}

/** Marketing pages: page content + shared "Let's Talk" footer. */
export default function Layout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
