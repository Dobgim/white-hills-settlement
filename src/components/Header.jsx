import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ChevronDown, Menu, UserRound, X } from 'lucide-react'
import { nav, site } from '../config'
import { Logo } from './ui'

function isActive(item, pathname) {
  if (item.children) return item.children.some((c) => c.href === pathname)
  return item.href === pathname
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile drawer whenever the page changes
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      {/* Announcement bar */}
      <div className="relative z-30 bg-white/10 py-[18px] text-center text-[13px] font-medium tracking-[-0.01em] text-white backdrop-blur-sm sm:text-sm">
        <div className="container-site">{site.announcement}</div>
      </div>

      {/* Main header: transparent over the top section; scrolls away with the page */}
      <header className="absolute top-[56px] left-0 z-40 w-full">
        <div className="container-site flex items-stretch">
          <a
            href="/"
            className="flex shrink-0 items-center border-b border-white/20 py-5 pr-10 lg:w-[200px]"
            aria-label={`${site.name} home`}
          >
            <Logo />
          </a>

          <div className="ml-auto flex flex-1 items-center justify-end border-white/20 lg:ml-0 lg:border-b lg:pl-10">
            <nav className="hidden flex-1 items-center justify-center lg:flex lg:border-l lg:border-white/20 lg:pl-6">
              <ul className="flex items-center gap-1 xl:gap-3">
                {nav.map((item) => (
                  <li key={item.label} className="group relative">
                    <a
                      href={item.href}
                      className={`flex items-center gap-1.5 px-3 py-3 text-[15px] leading-[1.05] font-semibold tracking-[-0.02em] transition-colors hover:text-white xl:px-4 xl:text-base ${
                        isActive(item, pathname) ? 'text-white' : 'text-white/80'
                      } ${item.label.length > 14 ? 'max-w-[110px]' : ''}`}
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" strokeWidth={1.5} />
                      )}
                    </a>
                    {item.children && (
                      <ul className="invisible absolute top-full left-0 min-w-[220px] translate-y-3 rounded-xl bg-white p-2 opacity-0 shadow-[0_20px_50px_rgba(1,6,48,0.18)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <a
                              href={c.href}
                              className="block rounded-lg px-4 py-2.5 text-[15px] font-medium text-primary transition-colors hover:bg-soft hover:text-accent"
                            >
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="/login"
              className="group hidden shrink-0 items-center gap-5 rounded-lg bg-black py-1.5 pr-1.5 pl-5 text-base font-semibold tracking-[-0.02em] text-white transition-colors hover:bg-accent sm:flex"
            >
              Client Login
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-primary transition-transform group-hover:rotate-12">
                <UserRound className="h-4 w-4" strokeWidth={1.75} />
              </span>
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="ml-3 grid h-11 w-11 place-items-center rounded-lg border border-white/25 text-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-primary p-6 transition-transform duration-500 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-white/15 pb-5">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/25 text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="mt-4 flex-1 overflow-y-auto">
          {nav.map((item) => (
            <li key={item.label} className="border-b border-white/10">
              <a href={item.href} onClick={() => setOpen(false)} className="block py-4 text-lg font-semibold text-white">
                {item.label}
              </a>
              {item.children && (
                <ul className="-mt-2 pb-3 pl-4">
                  {item.children.map((c) => (
                    <li key={c.label}>
                      <a href={c.href} onClick={() => setOpen(false)} className="block py-1.5 text-[15px] text-white/65">
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <a href="/login" onClick={() => setOpen(false)} className="btn-accent mt-6 w-full">
          Client Login
        </a>
        <a href={site.phoneHref} className="mt-4 block text-center text-sm text-white/60">
          {site.phone}
        </a>
      </aside>
    </>
  )
}
