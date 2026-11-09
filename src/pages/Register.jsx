import { useState } from 'react'
import { Check, ChevronLeft, ChevronRight, Contact, Eye, EyeOff, KeyRound, UserRound } from 'lucide-react'
import AuthShell, { PortalNotice, inputCls } from './AuthShell'
import { usePageTitle } from '../components/Layout'
import { portal } from '../content'
import { site } from '../config'

const steps = [
  { label: 'Personal Info', icon: UserRound, title: 'Personal Information', text: 'Tell us who you are.' },
  { label: 'Contact Details', icon: Contact, title: 'Contact Information', text: 'How should your accountant reach you?' },
  { label: 'Security', icon: KeyRound, title: 'Secure Your Account', text: 'Choose a strong password for your portal.' },
]

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  )
}

export default function Register() {
  usePageTitle('Create Account')
  const [step, setStep] = useState(0)
  const [show, setShow] = useState(false)
  const [notice, setNotice] = useState(false)
  const [error, setError] = useState('')
  const [d, setD] = useState({
    first: '',
    last: '',
    company: '',
    email: '',
    phone: '',
    type: '',
    password: '',
    confirm: '',
    terms: false,
  })
  const set = (k) => (e) => setD({ ...d, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })

  const next = (e) => {
    e.preventDefault()
    setError('')
    if (step < steps.length - 1) {
      setStep(step + 1)
      return
    }
    if (d.password.length < 8) return setError('Password must be at least 8 characters.')
    if (d.password !== d.confirm) return setError('Passwords do not match.')
    if (site.portalUrl) window.location.href = site.portalUrl
    else setNotice(true)
  }

  const S = steps[step]
  const progress = ((step + 1) / steps.length) * 100

  return (
    <AuthShell
      title={portal.registerTitle}
      text={portal.registerText}
      aside={
        <ul className="mx-auto max-w-[400px] space-y-4 text-left">
          {portal.registerFeatures.map((f) => (
            <li key={f.title} className="flex gap-3 text-[15px] leading-snug">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/20">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span>
                <strong className="font-semibold">{f.title}</strong>
                <span className="text-white/80"> – {f.text}</span>
              </span>
            </li>
          ))}
        </ul>
      }
    >
      <form onSubmit={next} className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
        <div className="border-b border-slate-100 bg-slate-50/60 px-6 pt-6 pb-5 sm:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-[24px] font-bold tracking-[-0.02em] text-slate-900">Create Your Account</h2>
            <span className="text-sm text-slate-500">
              Step {step + 1} of {steps.length}
            </span>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-sky-500 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <ol className="mt-3 flex justify-between text-xs">
            {steps.map((s, i) => (
              <li key={s.label} className={i <= step ? 'font-medium text-sky-600' : 'text-slate-500'}>
                {s.label}
              </li>
            ))}
          </ol>
        </div>

        <div className="px-6 py-7 sm:px-8">
          <div className="text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sky-500 text-white">
              <S.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">{S.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{S.text}</p>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {step === 0 && (
              <>
                <Field label="First Name" required>
                  <input required className={inputCls} placeholder="John" value={d.first} onChange={set('first')} autoComplete="given-name" />
                </Field>
                <Field label="Last Name" required>
                  <input required className={inputCls} placeholder="Smith" value={d.last} onChange={set('last')} autoComplete="family-name" />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Business Name (optional)">
                    <input className={inputCls} placeholder="Smith Design Studio" value={d.company} onChange={set('company')} autoComplete="organization" />
                  </Field>
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <Field label="Email Address" required>
                  <input required type="email" className={inputCls} placeholder="name@email.com" value={d.email} onChange={set('email')} autoComplete="email" />
                </Field>
                <Field label="Phone Number" required>
                  <input required type="tel" className={inputCls} placeholder="+1 555 000 0000" value={d.phone} onChange={set('phone')} autoComplete="tel" />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="I am a…" required>
                    <select required className={inputCls} value={d.type} onChange={set('type')}>
                      <option value="">Select one</option>
                      {portal.businessTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <Field label="Password" required>
                  <span className="relative block">
                    <input
                      required
                      type={show ? 'text' : 'password'}
                      className={`${inputCls} pr-10`}
                      placeholder="At least 8 characters"
                      value={d.password}
                      onChange={set('password')}
                      autoComplete="new-password"
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
                </Field>
                <Field label="Confirm Password" required>
                  <input
                    required
                    type={show ? 'text' : 'password'}
                    className={inputCls}
                    placeholder="Repeat password"
                    value={d.confirm}
                    onChange={set('confirm')}
                    autoComplete="new-password"
                  />
                </Field>
                <label className="flex items-start gap-2.5 text-sm text-slate-700 sm:col-span-2">
                  <input required type="checkbox" checked={d.terms} onChange={set('terms')} className="mt-0.5 h-4 w-4 accent-sky-600" />
                  <span>
                    I agree to the{' '}
                    <a href="/terms-and-conditions" className="text-sky-600 hover:underline">
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a href="/terms-and-conditions#privacy" className="text-sky-600 hover:underline">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </>
            )}
          </div>

          {error && (
            <p role="alert" className="mt-5 text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center gap-1 rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-600 hover:bg-slate-100"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </button>
            ) : (
              <span />
            )}
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500 px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-sky-600"
            >
              {step < steps.length - 1 ? (
                <>
                  Next <ChevronRight className="h-4 w-4" />
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </div>

          {notice && <PortalNotice />}

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-sky-600 hover:underline">
              Sign in instead
            </a>
          </p>
        </div>
      </form>
      <p className="mt-5 text-center text-sm">
        <a href="/" className="text-slate-500 hover:text-slate-800">
          ← Back to website
        </a>
      </p>
    </AuthShell>
  )
}
