import { impact } from '../config'
import { Reveal } from './ui'

export default function Impact() {
  return (
    <section id="about" className="bg-gradient-to-b from-soft to-white pt-16 pb-20 lg:pt-[100px] lg:pb-[130px]">
      <div className="container-site">
        <Reveal>
          <h2 className="mx-auto max-w-[740px] text-center text-[24px] leading-[1.4] font-semibold tracking-[-0.03em] text-primary sm:text-[28px] lg:text-[32px]">
            {impact.before}{' '}
            <span className="relative inline-block">
              <span className="text-grad-muted">{impact.highlight}</span>
              <svg
                viewBox="0 0 140 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-[#6b6c78]"
                aria-hidden="true"
              >
                <path d="M2 8 C 40 3, 100 3, 138 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </span>{' '}
            {impact.after}
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[720px] grid-cols-2 sm:grid-cols-3 lg:max-w-none lg:grid-cols-5">
          {impact.logos.map((l, i) => (
            <Reveal
              key={l.src + i}
              delay={i * 90}
              className="flex h-[118px] items-center justify-center border-l border-line px-6 first:border-l-0 lg:first:border-l"
            >
              <img
                src={l.src}
                alt={l.alt}
                className="max-h-11 w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
