import { useMemo, useState } from 'react'
import { Check, ClipboardCopy, Download, FileText, Printer } from 'lucide-react'
import ToolShell, { Field, inputCls } from './ToolShell'
import { usePageTitle } from '../components/Layout'
import { letterTool as t } from '../content'

const today = () => new Date().toISOString().slice(0, 10)

const fmtDate = (iso) =>
  iso ? new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : '[date]'

const reasonText = {
  'Goods or services not received': 'I paid for goods/services that I have not received.',
  'Item not as described or faulty': 'The goods/services I received were not as described or were faulty.',
  'Charged twice / duplicate charge': 'I was charged more than once for the same purchase.',
  'Charged the wrong amount': 'I was charged a different amount from the one I agreed to pay.',
  'Charged after I cancelled': 'I was charged after I had cancelled the agreement/subscription.',
  'Refund promised but not received': 'I was promised a refund that I have not received.',
  'Payment I did not authorise': 'I did not make or authorise this payment.',
}

function buildLetter(d) {
  const toBank = d.recipient === 'bank'
  const amount = d.amount ? `${d.currency}${d.amount}` : '[amount]'
  const ref = d.reference ? ` (reference: ${d.reference})` : ''
  const card = d.last4 ? ` ending ${d.last4}` : ''
  const lines = [
    d.name || '[Your name]',
    d.address || '[Your address]',
    d.email || '[Your email]',
    '',
    fmtDate(d.letterDate),
    '',
    toBank ? `To: ${d.bank || '[Your bank / card provider]'}` : `To: ${d.merchant || '[Merchant name]'}`,
    '',
    toBank
      ? `Subject: Dispute of a ${d.method.toLowerCase()} payment to ${d.merchant || '[merchant]'}`
      : `Subject: Request for a refund — order/payment of ${amount}`,
    '',
    `Dear Sir or Madam,`,
    '',
    toBank
      ? `I am writing to dispute a payment of ${amount} made on ${fmtDate(d.date)} to ${d.merchant || '[merchant]'} using my ${d.method.toLowerCase()}${card}${ref}.`
      : `I am writing about my payment of ${amount} made on ${fmtDate(d.date)}${ref}.`,
    '',
    reasonText[d.reason] || '',
    d.details ? '' : null,
    d.details || null,
    '',
    toBank
      ? d.contacted
        ? `I contacted the merchant on ${fmtDate(d.contactedDate)} to resolve this, but the matter has not been resolved.`
        : null
      : null,
    toBank ? 'Please investigate this transaction and reverse/refund the payment. I am happy to provide any further information or evidence you need.' : `Please refund ${amount} to my original payment method within 14 days of the date of this letter.`,
    '',
    toBank
      ? 'Please confirm in writing that you have received this dispute and let me know the next steps.'
      : 'If I do not hear from you, I will ask my bank or card provider to dispute the payment.',
    '',
    'I have attached copies of the relevant receipts and correspondence.',
    '',
    'Yours faithfully,',
    '',
    d.name || '[Your name]',
  ]
  return lines
    .filter((l) => l !== null)
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
}

export default function DisputeLetter() {
  usePageTitle('Dispute Letter Builder')
  const [copied, setCopied] = useState(false)
  const [d, setD] = useState({
    recipient: 'bank',
    name: '',
    address: '',
    email: '',
    letterDate: today(),
    merchant: '',
    bank: '',
    method: t.methods[0],
    last4: '',
    currency: '$',
    amount: '',
    date: '',
    reference: '',
    reason: t.reasons[0],
    details: '',
    contacted: true,
    contactedDate: '',
  })
  const set = (k) => (e) => {
    let v = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    if (k === 'last4') v = v.replace(/\D/g, '').slice(0, 4) // never more than the last 4 digits
    setD({ ...d, [k]: v })
  }
  const letter = useMemo(() => buildLetter(d), [d])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(letter)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked: the user can select the text manually */
    }
  }
  const download = () => {
    const url = URL.createObjectURL(new Blob([letter], { type: 'text/plain' }))
    const a = Object.assign(document.createElement('a'), { href: url, download: 'dispute-letter.txt' })
    a.click()
    URL.revokeObjectURL(url)
  }
  const print = () => {
    const w = window.open('', '_blank')
    if (!w) return
    w.document.write(
      `<pre style="font:15px/1.6 Georgia,serif;white-space:pre-wrap;max-width:680px;margin:40px auto">${letter
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')}</pre>`,
    )
    w.document.close()
    w.print()
  }

  return (
    <ToolShell
      wide
      title={t.title}
      text={t.text}
      aside={
        <ul className="mx-auto max-w-[400px] space-y-4 text-left">
          {t.features.map((f) => (
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
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
        <div className="border-b border-slate-100 bg-slate-50/60 px-6 pt-6 pb-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-sky-500 text-white">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-[22px] font-bold tracking-[-0.02em] text-slate-900">Your letter details</h2>
              <p className="text-sm text-slate-500">Fill in what you know. Gaps show as [brackets].</p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2 rounded-lg bg-slate-200/60 p-1 text-sm font-medium">
            {[
              ['bank', 'To my bank / card provider'],
              ['merchant', 'To the merchant'],
            ].map(([v, label]) => (
              <button
                key={v}
                type="button"
                onClick={() => setD({ ...d, recipient: v })}
                className={`rounded-md px-3 py-2 transition ${d.recipient === v ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 px-6 py-7 sm:grid-cols-2 sm:px-8">
          <Field label="Your name">
            <input className={inputCls} value={d.name} onChange={set('name')} placeholder="Jane Doe" autoComplete="name" />
          </Field>
          <Field label="Your email">
            <input className={inputCls} type="email" value={d.email} onChange={set('email')} placeholder="jane@email.com" autoComplete="email" />
          </Field>
          <Field label="Your address" className="sm:col-span-2">
            <input className={inputCls} value={d.address} onChange={set('address')} placeholder="Street, city, postcode" autoComplete="street-address" />
          </Field>
          <Field label="Merchant / seller">
            <input className={inputCls} value={d.merchant} onChange={set('merchant')} placeholder="Shop name" />
          </Field>
          {d.recipient === 'bank' ? (
            <Field label="Bank / card provider">
              <input className={inputCls} value={d.bank} onChange={set('bank')} placeholder="Your bank's name" />
            </Field>
          ) : (
            <Field label="Order / payment reference">
              <input className={inputCls} value={d.reference} onChange={set('reference')} placeholder="e.g. #12345" />
            </Field>
          )}
          <Field label="How you paid">
            <select className={inputCls} value={d.method} onChange={set('method')}>
              {t.methods.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </Field>
          <Field label="Card: last 4 digits only" hint="Never write your full card number in a letter.">
            <input className={inputCls} inputMode="numeric" value={d.last4} onChange={set('last4')} placeholder="1234" />
          </Field>
          <Field label="Amount">
            <div className="flex">
              <select
                className={`${inputCls} w-[76px] rounded-r-none border-r-0`}
                value={d.currency}
                onChange={set('currency')}
                aria-label="Currency"
              >
                {['$', '£', '€', 'C$', 'A$'].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <input className={`${inputCls} rounded-l-none`} inputMode="decimal" value={d.amount} onChange={set('amount')} placeholder="49.99" />
            </div>
          </Field>
          <Field label="Payment date">
            <input className={inputCls} type="date" value={d.date} onChange={set('date')} />
          </Field>
          <Field label="Reason" className="sm:col-span-2">
            <select className={inputCls} value={d.reason} onChange={set('reason')}>
              {t.reasons.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </Field>
          <Field label="What happened (short and factual)" className="sm:col-span-2">
            <textarea
              rows={3}
              className={`${inputCls} resize-y`}
              value={d.details}
              onChange={set('details')}
              placeholder="e.g. I ordered a jacket on 2 March. It was due by 10 March but has not arrived. I emailed the seller on 15 and 22 March and received no reply."
            />
          </Field>
          {d.recipient === 'bank' && (
            <>
              <label className="flex items-center gap-2.5 text-sm text-slate-700">
                <input type="checkbox" checked={d.contacted} onChange={set('contacted')} className="h-4 w-4 accent-sky-600" />
                I already contacted the merchant
              </label>
              {d.contacted && (
                <Field label="Date you contacted them">
                  <input className={inputCls} type="date" value={d.contactedDate} onChange={set('contactedDate')} />
                </Field>
              )}
            </>
          )}
        </div>

        <div className="border-t border-slate-100 px-6 py-7 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-900">Your letter</h3>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={copy} className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600">
                {copied ? <Check className="h-4 w-4" /> : <ClipboardCopy className="h-4 w-4" />} {copied ? 'Copied' : 'Copy'}
              </button>
              <button type="button" onClick={download} className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
                <Download className="h-4 w-4" /> Download
              </button>
              <button type="button" onClick={print} className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
                <Printer className="h-4 w-4" /> Print
              </button>
            </div>
          </div>
          <pre className="mt-4 max-h-[460px] overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-5 font-serif text-[14px] leading-[1.65] whitespace-pre-wrap text-slate-800">
            {letter}
          </pre>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            This is a general template, not legal advice. Check it is accurate before sending, attach copies (not originals) of your evidence, and keep a copy for yourself.
          </p>
        </div>
      </div>
    </ToolShell>
  )
}
