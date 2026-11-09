import { useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { faqs } from '../config'
import { Reveal } from './ui'

function Item({ faq, open, onToggle, id }) {
  return (
    <div
      className={`rounded-xl border bg-white transition-all duration-300 ${
        open ? 'border-line shadow-[0_18px_45px_rgba(1,6,48,0.06)]' : 'border-line hover:border-[#c9cbe0]'
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-btn`}
          className="flex w-full items-center justify-between gap-6 px-6 py-7 text-left sm:px-7"
        >
          <span className="text-[17px] leading-snug font-semibold tracking-[-0.025em] text-primary sm:text-[20px]">
            {faq.q}
          </span>
          <span className="shrink-0 text-ink">
            {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />}
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={`grid transition-[grid-template-rows] duration-400 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-8 text-base leading-[1.6] text-body sm:px-7">{faq.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="pb-24 lg:pb-[145px]">
      <div className="container-site">
        <Reveal>
          <h2 className="heading-xl text-grad-dark text-center">Frequently asked questions</h2>
        </Reveal>
        <div className="mx-auto mt-10 max-w-[830px] space-y-5 lg:mt-11">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <Item faq={f} id={`faq-${i}`} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
