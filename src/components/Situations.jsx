import { ArrowUpRight } from 'lucide-react'
import { situations } from '../config'
import { Reveal, Slant } from './ui'

const tagColors = {
  Urgent: 'bg-red-50 text-red-600',
  Warning: 'bg-amber-50 text-amber-700',
}

function Card({ s, delay }) {
  return (
    <Reveal delay={delay}>
      <a
        href={s.href}
        className="group block rounded-xl border border-line/70 bg-white p-8 shadow-[0_10px_30px_rgba(1,6,48,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(1,6,48,0.10)] sm:p-10"
      >
        <span className={`inline-block rounded-full px-3 py-1 text-[12px] font-semibold tracking-[0.02em] ${tagColors[s.tag] ?? 'bg-chip text-primary'}`}>
          {s.tag}
        </span>
        <h3 className="mt-5 text-[21px] leading-[1.25] font-semibold tracking-[-0.03em] text-primary">{s.title}</h3>
        <p className="mt-4 text-[17px] leading-[1.7] tracking-[-0.01em] text-body">{s.text}</p>
        <span className="mt-7 inline-flex items-center gap-1.5 text-[15px] font-semibold text-primary transition-colors group-hover:text-accent">
          What to do <ArrowUpRight className="h-4 w-4" />
        </span>
      </a>
    </Reveal>
  )
}

/** "Which one sounds like you?" — same masonry card layout as the original testimonials. */
export default function Situations() {
  const cols = [[], [], []]
  situations.items.forEach((s, i) => cols[i % 3].push(s))
  const colOffset = [
    'lg:pt-[100px]',
    'lg:pt-0',
    'md:col-span-2 md:grid md:grid-cols-2 lg:col-span-1 lg:flex lg:pt-[150px]',
  ]

  return (
    <section className="relative bg-softer">
      <Slant fill="#f3f4fb" />
      <div className="bg-soft pt-16 pb-24 lg:pt-[110px] lg:pb-[100px]">
        <div className="container-site">
          <div className="relative text-center">
            <img src="/images/thumbs.webp" alt="" className="animate-float absolute top-0 left-[4%] hidden w-[86px] lg:block" loading="lazy" />
            <img
              src="/images/nice.webp"
              alt=""
              className="animate-float absolute top-6 right-[4%] hidden w-[96px] [animation-delay:1.2s] lg:block"
              loading="lazy"
            />
            <Reveal>
              <span className="pill border-line bg-white text-primary">
                <img src="/images/pencil.webp" alt="" className="h-5 w-5" />
                {situations.badge}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="heading-xl text-grad-dark mt-4">{situations.title}</h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3 lg:items-start">
            {cols.map((col, ci) => (
              <div key={ci} className={`flex flex-col gap-[30px] ${colOffset[ci]}`}>
                {col.map((s, i) => (
                  <Card key={s.title} s={s} delay={i * 100 + ci * 80} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Slant fill="#ffffff" className="-mt-px bg-soft" />
    </section>
  )
}
