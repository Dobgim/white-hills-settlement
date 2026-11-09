import { Info } from 'lucide-react'
import { site } from '../config'
import { Logo } from '../components/ui'

/** Split layout used by the Login and Register pages. */
export default function AuthShell({ title, text, aside, children }) {
  return (
    <div className="grid min-h-screen bg-softer lg:grid-cols-2">
      <aside className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0ea5e9] via-[#0284c7] to-[#075985] px-6 py-14 text-white lg:py-10">
        {/* soft decorative circles */}
        <span className="absolute top-[18%] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-white/10" />
        <span className="absolute bottom-[14%] left-[30%] h-[160px] w-[160px] rounded-full bg-white/10" />

        <div className="relative w-full max-w-[460px] text-center">
          <a href="/" className="inline-flex" aria-label={`${site.name} home`}>
            <Logo />
          </a>
          <h1 className="mt-6 text-[32px] leading-tight font-bold tracking-[-0.03em] sm:text-[38px]">{title}</h1>
          <p className="mx-auto mt-4 max-w-[420px] text-[17px] leading-[1.55] text-white/85">{text}</p>
          <div className="mt-10">{aside}</div>
        </div>
      </aside>

      <main className="flex items-center justify-center px-5 py-12 sm:px-8">
        <div className="w-full max-w-[560px]">{children}</div>
      </main>
    </div>
  )
}

/** Shown on submit while no real portal is connected (site.portalUrl is empty). */
export function PortalNotice() {
  return (
    <div role="status" className="mt-5 flex gap-3 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-900">
      <Info className="mt-0.5 h-4 w-4 shrink-0" />
      <p>
        The client portal isn’t connected yet. Please{' '}
        <a href="/contact" className="font-semibold underline">
          contact us
        </a>{' '}
        or call{' '}
        <a href={site.phoneHref} className="font-semibold underline">
          {site.phone}
        </a>{' '}
        and we’ll get you set up.
      </p>
    </div>
  )
}

export const inputCls =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15'
