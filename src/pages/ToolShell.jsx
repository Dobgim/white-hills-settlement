import { site } from '../config'
import { Logo } from '../components/ui'

/** Split-screen layout for the free tools (same look as the original app pages). */
export default function ToolShell({ title, text, aside, children, wide = false }) {
  return (
    <div className="grid min-h-screen bg-softer lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <aside className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0ea5e9] via-[#0284c7] to-[#075985] px-6 py-14 text-white lg:sticky lg:top-0 lg:h-screen lg:py-10">
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
        <div className={`w-full ${wide ? 'max-w-[620px]' : 'max-w-[560px]'}`}>
          {children}
          <p className="mt-6 text-center text-sm">
            <a href="/" className="text-slate-500 hover:text-slate-800">
              ← Back to website
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}

export const inputCls =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15'

export function Field({ label, required, hint, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
      {hint && <span className="mt-1.5 block text-xs text-slate-500">{hint}</span>}
    </label>
  )
}
