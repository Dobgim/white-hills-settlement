import { useMemo, useState } from 'react'
import { AlertTriangle, CalendarClock, Info } from 'lucide-react'
import ToolShell, { Field, inputCls } from './ToolShell'
import Icon from '../components/Icon'
import { usePageTitle } from '../components/Layout'
import { deadlineTool as t } from '../content'

const addDays = (d, n) => new Date(d.getTime() + n * 86400000)
const addMonths = (d, n) => {
  const r = new Date(d)
  r.setMonth(r.getMonth() + n)
  return r
}
const fmt = (d) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

const regions = [
  ['us', 'United States'],
  ['uk', 'United Kingdom'],
  ['eu', 'European Union'],
  ['other', 'Somewhere else'],
]
const methods = [
  ['credit', 'Credit card'],
  ['debit', 'Debit card'],
  ['transfer', 'Bank transfer'],
  ['paypal', 'PayPal'],
  ['crypto', 'Cryptocurrency'],
]
const problems = [
  ['purchase', 'Problem with a purchase (not received, faulty, refund refused)'],
  ['billing', 'Billing error (double charge, wrong amount)'],
  ['unauthorised', 'Payment I didn’t make or authorise'],
  ['scam', 'I was tricked into paying a scammer'],
]

/**
 * Typical, widely published time limits. These are guides, not guarantees:
 * providers can have different or more generous rules.
 */
function deadlines({ region, method, problem }, date) {
  const out = []
  const push = (label, when, note, tone = 'info') => out.push({ label, when, note, tone })
  const card = method === 'credit' || method === 'debit'

  if (problem === 'unauthorised' || problem === 'scam') {
    push('Contact your bank or provider', null, 'Today. Call the number on your card or in your banking app, and freeze the card.', 'urgent')
  }

  if (method === 'crypto') {
    push(
      'Report it',
      null,
      'Crypto payments usually can’t be reversed. Report to the exchange or platform and the authorities, and ignore anyone offering paid “recovery”.',
      'warn',
    )
    return out
  }

  if (card && (problem === 'purchase' || problem === 'billing' || problem === 'scam')) {
    push(
      'Typical card chargeback window',
      addDays(date, 120),
      'Card-network limits are often around 120 days from the transaction or expected delivery date. Ask your provider for theirs.',
    )
  }

  if (region === 'us') {
    if (method === 'credit' && (problem === 'billing' || problem === 'purchase' || problem === 'unauthorised')) {
      push(
        'Fair Credit Billing Act written dispute',
        addDays(date, 60),
        'Your written dispute must reach the issuer within 60 days after the statement showing the charge was sent. Use the statement date above for this one.',
      )
    }
    if (method === 'credit' && problem === 'unauthorised') {
      push('Your maximum liability', null, 'For unauthorised credit card use, US law caps your liability at $50, and many issuers offer $0.')
    }
    if ((method === 'debit' || method === 'transfer') && problem === 'unauthorised') {
      push('Lowest liability ($50)', null, 'Report within 2 business days of learning your card or details were lost or stolen.', 'urgent')
      push(
        '60 days after the statement',
        addDays(date, 60),
        'Report unauthorised transfers within 60 days of the statement date. After that, your liability for later transfers can be unlimited.',
      )
    }
  }

  if ((region === 'uk' || region === 'eu') && problem === 'unauthorised' && method !== 'paypal') {
    push(
      'Unauthorised payment claim',
      addMonths(date, 13),
      'Under UK and EU payment rules, report without undue delay and no later than 13 months after the payment left your account.',
    )
  }

  if (region === 'uk' && method === 'credit' && problem === 'purchase') {
    push(
      'Section 75 claim (purchases £100–£30,000)',
      addMonths(date, 72),
      'Your credit card provider can be jointly liable with the seller. Claims are generally limited to 6 years (5 in Scotland).',
    )
  }

  if (region === 'uk' && method === 'transfer' && problem === 'scam') {
    push(
      'APP scam reimbursement claim',
      addMonths(date, 13),
      'Most Faster Payments and CHAPS scams are covered up to £85,000. Claims are generally due within 13 months of the last payment. Use the date of your last payment above.',
    )
  }

  if (method === 'transfer' && !(region === 'uk' && problem === 'scam') && problem !== 'unauthorised') {
    push(
      'Ask your bank to recall the payment',
      null,
      'There is usually no fixed right to reverse a transfer, so contact your bank as soon as possible while funds may still be traceable.',
      'warn',
    )
  }

  if (method === 'paypal') {
    push('PayPal dispute', addDays(date, 180), 'PayPal Buyer Protection disputes generally need to be opened within 180 days of the payment.')
  }

  if (!out.length) {
    push('Contact the merchant and your provider', null, 'Act as soon as you can, and ask your provider which time limits apply to your case.')
  }
  return out
}

export default function DeadlineChecker() {
  usePageTitle('Deadline Checker')
  const [f, setF] = useState({ region: 'us', method: 'credit', problem: 'purchase', date: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const date = f.date ? new Date(f.date + 'T00:00:00') : null
  const results = useMemo(() => (date ? deadlines(f, date) : []), [f, date?.getTime()]) // eslint-disable-line react-hooks/exhaustive-deps
  const now = new Date()

  return (
    <ToolShell
      title={t.title}
      text={t.text}
      aside={
        <ul className="mx-auto grid max-w-[420px] grid-cols-2 gap-x-6 gap-y-5 text-left">
          {t.features.map((x) => (
            <li key={x.label} className="flex items-center gap-3 text-[15px] font-semibold">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/20">
                <Icon name={x.icon} className="h-4 w-4" strokeWidth={2} />
              </span>
              {x.label}
            </li>
          ))}
        </ul>
      }
    >
      <div className="rounded-2xl bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-sky-500 text-white">
            <CalendarClock className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-[22px] font-bold tracking-[-0.02em] text-slate-900">Check your time limits</h2>
            <p className="text-sm text-slate-500">Nothing you enter leaves your browser.</p>
          </div>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <Field label="Where is your bank?">
            <select className={inputCls} value={f.region} onChange={set('region')}>
              {regions.map(([v, l]) => (
                <option key={v} value={v}>
                  {l}
                </option>
              ))}
            </select>
          </Field>
          <Field label="How did you pay?">
            <select className={inputCls} value={f.method} onChange={set('method')}>
              {methods.map(([v, l]) => (
                <option key={v} value={v}>
                  {l}
                </option>
              ))}
            </select>
          </Field>
          <Field label="What happened?" className="sm:col-span-2">
            <select className={inputCls} value={f.problem} onChange={set('problem')}>
              {problems.map(([v, l]) => (
                <option key={v} value={v}>
                  {l}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Payment or statement date" required hint="The date of the payment, or of the statement that first showed it." className="sm:col-span-2">
            <input type="date" className={inputCls} value={f.date} onChange={set('date')} />
          </Field>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6" aria-live="polite">
          {!date ? (
            <p className="text-sm text-slate-500">Enter a date to see the typical deadlines.</p>
          ) : (
            <ul className="space-y-3">
              {results.map((r) => {
                const past = r.when && r.when < now
                const tone =
                  r.tone === 'urgent'
                    ? 'border-red-200 bg-red-50'
                    : r.tone === 'warn'
                      ? 'border-amber-200 bg-amber-50'
                      : past
                        ? 'border-slate-200 bg-slate-50'
                        : 'border-sky-200 bg-sky-50'
                return (
                  <li key={r.label} className={`rounded-xl border p-4 ${tone}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="flex items-center gap-2 text-[15px] font-semibold text-slate-900">
                        {r.tone === 'urgent' || r.tone === 'warn' ? (
                          <AlertTriangle className={`h-4 w-4 ${r.tone === 'urgent' ? 'text-red-600' : 'text-amber-600'}`} />
                        ) : (
                          <Info className="h-4 w-4 text-sky-600" />
                        )}
                        {r.label}
                      </span>
                      {r.when && (
                        <span className={`text-sm font-semibold ${past ? 'text-slate-500 line-through' : 'text-sky-700'}`}>
                          {fmt(r.when)}
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-700">{r.note}</p>
                    {past && (
                      <p className="mt-1.5 text-[13px] font-medium text-slate-600">
                        This typical date has passed. Ask your provider anyway, as some allow longer.
                      </p>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
          <p className="mt-6 text-xs leading-relaxed text-slate-500">
            Typical limits only, not legal advice. Your provider’s own terms, and the details of your case, decide what actually applies.
          </p>
        </div>
      </div>
    </ToolShell>
  )
}
