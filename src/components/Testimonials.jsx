import { testimonials, testimonialsAreSamples } from '../config'
import { Reveal, Slant, Stars } from './ui'

function Card({ t, delay }) {
  return (
    <Reveal delay={delay}>
      <figure className="rounded-xl border border-line/70 bg-white p-8 shadow-[0_10px_30px_rgba(1,6,48,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(1,6,48,0.10)] sm:p-10">
        <div className="flex items-center gap-2.5">
          <span className="text-base text-primary">
            <strong className="font-semibold">{t.rating.toFixed(1)}</strong> <span className="text-body">Rated</span>
          </span>
          <Stars rating={t.rating} />
        </div>
        <blockquote className="mt-6 text-[18px] leading-[1.7] tracking-[-0.01em] text-body">{t.text}</blockquote>
        <figcaption className="mt-10 flex items-center gap-3">
          <img src={t.avatar} alt="" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
          <span>
            <span className="block text-base font-semibold tracking-[-0.02em] text-primary">{t.name}</span>
            <span className="block text-sm text-body">{t.handle}</span>
          </span>
        </figcaption>
      </figure>
    </Reveal>
  )
}

export default function Testimonials() {
  // Split into three columns (masonry), each column offset like the original
  const cols = [[], [], []]
  testimonials.forEach((t, i) => cols[i % 3].push(t))
  // On tablets (2 columns) the third column spans the full row as its own 2-up grid
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
            <img
              src="/images/thumbs.webp"
              alt=""
              className="animate-float absolute top-0 left-[4%] hidden w-[86px] lg:block"
              loading="lazy"
            />
            <img
              src="/images/nice.webp"
              alt=""
              className="animate-float absolute top-6 right-[4%] hidden w-[96px] [animation-delay:1.2s] lg:block"
              loading="lazy"
            />
            <Reveal>
              <span className="pill border-line bg-white text-primary">
                <img src="/images/pencil.webp" alt="" className="h-5 w-5" />
                Positive feedback
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="heading-xl text-grad-dark mt-4">See what our clients are saying</h2>
            </Reveal>
            {testimonialsAreSamples && (
              <p className="mt-4 text-sm text-slate">Sample testimonials shown for layout. Replace with real client reviews.</p>
            )}
          </div>

          <div className="mt-14 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3 lg:items-start">
            {cols.map((col, ci) => (
              <div key={ci} className={`flex flex-col gap-[30px] ${colOffset[ci]}`}>
                {col.map((t, i) => (
                  <Card key={t.name} t={t} delay={i * 100 + ci * 80} />
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
