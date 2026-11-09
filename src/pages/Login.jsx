import { useState } from 'react'
import { Eye, EyeOff, Lock, LogIn, Mail, UserPlus } from 'lucide-react'
import AuthShell, { PortalNotice, inputCls } from './AuthShell'
import Icon from '../components/Icon'
import { usePageTitle } from '../components/Layout'
import { portal } from '../content'
import { site } from '../config'

export default function Login() {
  usePageTitle('Client Login')
  const [show, setShow] = useState(false)
  const [notice, setNotice] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (site.portalUrl) window.location.href = site.portalUrl
    else setNotice(true)
  }

  return (
    <AuthShell
      title={portal.loginTitle}
      text={portal.loginText}
      aside={
        <ul className="mx-auto grid max-w-[420px] grid-cols-2 gap-x-6 gap-y-5 text-left">
          {portal.loginFeatures.map((f) => (
            <li key={f.label} className="flex items-center gap-3 text-[15px] font-semibold">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/20">
                <Icon name={f.icon} className="h-4 w-4" strokeWidth={2} />
              </span>
              {f.label}
            </li>
          ))}
        </ul>
      }
    >
      <div className="mx-auto max-w-[440px]">
        <form onSubmit={submit} className="rounded-2xl bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-8">
          <h2 className="text-[24px] font-bold tracking-[-0.02em] text-slate-900">Sign In to {site.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Access your client portal using your email and password.
          </p>

          <label className="mt-6 block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Email Address</span>
            <span className="relative block">
              <Mail className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input type="email" required autoComplete="email" placeholder="name@email.com" className={`${inputCls} pl-10`} />
            </span>
          </label>

          <label className="mt-5 block">
            <span className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
              Password
              <a href="/contact" className="text-sm font-medium text-sky-600 hover:underline">
                Forgot Password?
              </a>
            </span>
            <span className="relative block">
              <Lock className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type={show ? 'text' : 'password'}
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className={`${inputCls} px-10`}
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label={show ? 'Hide password' : 'Show password'}
              >
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </span>
          </label>

          <label className="mt-5 flex items-center gap-2.5 text-sm text-slate-700">
            <input type="checkbox" defaultChecked className="h-4 w-4 rounded accent-sky-600" />
            Stay signed in for 30 days
          </label>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-sky-500 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-sky-600"
          >
            <LogIn className="h-4 w-4" /> Sign In
          </button>
          <a
            href="/register"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 py-3 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-200"
          >
            <UserPlus className="h-4 w-4" /> Not a client yet? Create Account
          </a>

          {notice && <PortalNotice />}
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          By signing in, you agree to our{' '}
          <a href="/terms-and-conditions" className="text-sky-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/terms-and-conditions#privacy" className="text-sky-600 hover:underline">
            Privacy Policy
          </a>
        </p>
        <p className="mt-3 text-center text-sm">
          <a href="/" className="text-slate-500 hover:text-slate-800">
            ← Back to website
          </a>
        </p>
      </div>
    </AuthShell>
  )
}
