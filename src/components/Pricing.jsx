import { Check, X } from 'lucide-react'
import { planNote, plans, process } from '../config'
import { Reveal } from './ui'

function Plan({ plan, delay }) {
  const dark = plan.popular
  return (
    <Reveal delay={delay} className={dark ? 'lg:-mt-10' : ''}>
      <div
        className={`relative rounded-2xl px-9 pt-12 pb-11 text-center transition-transform duration-500 hover:-translate-y-2 ${
          dark
            ? 'bg-[radial-gradient(at_top_center,#101e8a_0%,#010630_100%)] text-white shadow-[0_30px_70px_rgba(16,30,138,0.35)]'
            : 'border border-line bg-white shadow-[0_20px_50px_rgba(1,6,48,0.06)]'
        }`}
      >
        {plan.badge && (
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#ffd75e] px-3.5 py-1.5 text-[13px] leading-none font-semibold tracking-[0.04em] text-primary">
            {plan.badge}
          </span>
        )}
        <h3 className={`text-[22px] font-semibold tracking-[-0.03em] ${dark ? 'text-white' : 'text-primary'}`}>{plan.name}</h3>
        <p className={`mt-5 text-[48px] leading-none font-bold tracking-[-0.05em] ${dark ? 'text-white' : 'text-primary'}`}>
          {plan.price}
        </p>
        <p className={`mt-2.5 text-base ${dark ? 'text-white/60' : 'text-body'}`}>{plan.unit}</p>

        <ul className="mt-11 space-y-[18px] text-left">
          {plan.features.map((f) => (
            <li key={f} className={`flex items-center gap-3 text-base ${dark ? 'font-medium text-white' : 'text-body'}`}>
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                  plan.good ? 'bg-chip text-accent' : 'bg-[#4a1d25] text-[#ff8a9a]'
                }`}
              >
                {plan.good ? <Check className="h-3 w-3" strokeWidth={3} /> : <X className="h-3 w-3" strokeWidth={3} />}
              </span>
              {f}
            </li>
          ))}
        </ul>

        <a href={plan.href} className="btn-accent mt-12 w-full">
          {plan.button}
        </a>
        <p className={`mt-6 text-sm ${dark ? 'text-white/60' : 'text-body'}`}>
          <span className="text-red-500">*</span> {planNote}
        </p>
      </div>
    </Reveal>
  )
}

export default function Pricing() {
  return (
    <section id="free" className="pt-20 pb-20 lg:pt-[110px] lg:pb-[130px]">
      <div className="container-site grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,770px)] lg:gap-12 xl:gap-[90px]">
        <div className="lg:pt-10 lg:pl-3">
          <Reveal>
            <h2 className="text-grad-dark max-w-[360px] text-[36px] leading-[1.15] font-medium tracking-[-0.02em] lg:text-[46px]">
              {process.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-[400px] text-base leading-[1.65] text-body">{process.text}</p>
          </Reveal>
          <ol className="mt-10 space-y-6">
            {process.steps.map((step, i) => (
              <Reveal as="li" key={step} delay={150 + i * 100} className="flex items-center gap-4">
                <span className="grid h-[50px] w-[50px] place-items-center rounded-full bg-chip text-[18px] font-semibold text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[18px] font-medium tracking-[-0.02em] text-primary">{step}</span>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 sm:gap-[30px] lg:pt-10">
          {plans.map((p, i) => (
            <Plan key={p.name} plan={p} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
