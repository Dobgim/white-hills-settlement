import { ArrowUpRight } from 'lucide-react'
import { services } from '../config'
import Icon from './Icon'
import { Reveal } from './ui'

// Staggered vertical offsets, as in the original grid
const offsets = ['lg:mt-0', 'lg:mt-10', 'lg:mt-[60px]', 'lg:mt-0', 'lg:mt-[10px]']

function ServiceCard({ item, className, delay }) {
  return (
    <Reveal delay={delay} className={className}>
      <a href={item.href} className="group block h-full rounded-xl border border-line bg-white p-9 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_24px_60px_rgba(1,6,48,0.10)]">
        <span className="grid h-[60px] w-[60px] place-items-center rounded-full bg-ink text-white transition-colors duration-500 group-hover:bg-accent">
          <Icon name={item.icon} className="h-7 w-7" strokeWidth={1.6} />
        </span>
        <h3 className="mt-[42px] text-[22px] leading-[1.1] font-semibold tracking-[-0.035em] text-primary">{item.title}</h3>
        <p className="mt-3 text-base leading-[1.6] text-body">{item.text}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-primary transition-colors group-hover:text-accent">
          Read the guide <ArrowUpRight className="h-4 w-4" />
        </span>
      </a>
    </Reveal>
  )
}

export default function Services({ className = "" }) {
  return (
    <section id="guides" className={`pt-10 pb-24 lg:pt-[60px] lg:pb-[140px] ${className}`}>
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 className="heading-xl text-grad-dark max-w-[600px]">
              {services.titleTop}
              <br className="hidden sm:block" /> {services.titleBottom}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-base leading-[1.6] text-body lg:pt-1">{services.text}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-[30px] sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:items-start">
          {services.items.map((item, i) => (
            <ServiceCard key={item.title} item={item} className={offsets[i]} delay={(i % 3) * 120} />
          ))}

          {/* Dark call-to-action card */}
          <Reveal delay={240} className="sm:col-span-2 lg:col-span-1">
            <div className="relative overflow-hidden rounded-xl bg-[radial-gradient(at_top_right,#bcbcbc_0%,#000_77%)] p-9 transition-transform duration-500 hover:-translate-y-2">
              <h3 className="text-grad-light text-[24px] leading-[1.1] font-semibold tracking-[-0.035em]">
                {services.cta.title}
              </h3>
              <p className="mt-4 text-base leading-[1.65] font-medium text-white/80">{services.cta.text}</p>
              <a
                href={services.cta.href}
                className="mt-12 inline-flex items-center rounded-md bg-white px-6 py-[17px] text-base leading-none font-semibold tracking-[-0.025em] text-primary transition-colors hover:bg-accent hover:text-white"
              >
                {services.cta.button}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
