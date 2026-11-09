import { Check, PieChart } from 'lucide-react'
import { about, quote, site } from '../config'
import { Reveal } from './ui'

export default function About() {
  return (
    <>
      <section className="relative z-10 pb-16 lg:pb-0">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[568px_1fr] lg:gap-[70px] lg:pl-[50px]">
          {/* Framed photo with floating cards; overlaps the dark band below on desktop */}
          <Reveal className="relative mx-auto w-full max-w-[568px] lg:-mb-[160px]">
            <div className="rounded-[20px] bg-softer p-3 shadow-[0_0_0_1px_rgba(1,6,48,0.03)]">
              <img
                src="/images/happy-adult-businesswoman-holding-folder-and-pencil-near-table-in-office.webp"
                alt="Accountant holding a client folder"
                className="aspect-[544/714] w-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
            <span className="animate-float absolute top-[88px] -right-4 grid h-[58px] w-[58px] place-items-center rounded-full border-4 border-white/60 bg-[#1d1e2b] shadow-xl sm:-right-7">
              <PieChart className="h-6 w-6 text-[#5df27a]" strokeWidth={2.2} />
            </span>
            <div className="absolute -right-3 bottom-14 w-[62%] max-w-[250px] rounded-xl bg-white/40 p-2.5 shadow-[0_20px_50px_rgba(1,6,48,0.18)] backdrop-blur-md sm:-right-8">
              <img src="/images/summary.webp" alt="" className="w-full rounded-md" loading="lazy" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="heading-xl text-grad-dark">
                {about.titleTop} {about.titleBottom}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 max-w-[510px] text-base leading-[1.65] text-body">
                {about.text.map((part, i) =>
                  typeof part === 'string' ? part : <strong key={i} className="font-semibold text-primary">{part.bold}</strong>,
                )}
              </p>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-14 text-base text-body">{about.listTitle}</p>
              <ul className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {about.list.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[18px] tracking-[-0.015em] text-primary">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-chip">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-11 flex flex-wrap items-center gap-5 border-t border-line pt-10 sm:gap-0">
                <a
                  href={site.bookingUrl}
                  className="inline-flex items-center rounded-md bg-black px-8 py-[18px] text-base leading-none font-semibold tracking-[-0.025em] text-white transition-colors hover:bg-accent"
                >
                  {about.button}
                </a>
                <span className="mx-5 hidden h-[52px] w-px bg-line sm:block" />
                <a href={site.phoneHref} className="group flex items-center gap-4">
                  <img src="/images/operator.webp" alt="" className="h-[52px] w-[52px] rounded-full object-cover" loading="lazy" />
                  <span>
                    <span className="block text-[15px] text-body">{about.callLabel}</span>
                    <span className="block text-[18px] font-medium tracking-[-0.02em] text-primary group-hover:text-accent">
                      {site.phone}
                    </span>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dark founder-quote band */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#232427_0%,#2b2c2f_45%,#4a4a4a_100%)] pt-20 pb-36 text-center lg:pt-[260px] lg:pb-[210px]">
        <div className="container-site relative">
          <Reveal className="mx-auto max-w-[960px]">
            <div className="mx-auto h-px w-full max-w-[520px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <blockquote className="text-grad-light mt-12 text-[24px] leading-[1.35] font-medium tracking-[-0.035em] sm:text-[32px] lg:text-[38px]">
              “{quote.text}”
            </blockquote>
            <div className="mx-auto mt-12 h-px w-full max-w-[520px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <p className="mt-8 text-[20px] font-semibold tracking-[-0.025em] text-white">{quote.name}</p>
            <p className="mt-1 text-[15px] text-white/60">
              {quote.role}, {site.name}
            </p>
          </Reveal>
        </div>

        {/* Layered chevron at the bottom edge */}
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="absolute right-0 bottom-0 left-0 h-[34px] w-full md:h-[70px]"
          aria-hidden="true"
        >
          <polygon points="0,0 720,48 1440,0 1440,70 0,70" fill="#ffffff" opacity="0.25" />
          <polygon points="0,20 720,52 1440,20 1440,70 0,70" fill="#ffffff" opacity="0.35" />
          <polygon points="0,42 720,56 1440,42 1440,70 0,70" fill="#ffffff" opacity="0.6" />
          <rect x="0" y="58" width="1440" height="12" fill="#f9f9fb" />
        </svg>
      </section>
    </>
  )
}
