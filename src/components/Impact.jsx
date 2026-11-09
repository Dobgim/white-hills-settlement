import { impact } from '../config'
import Icon from './Icon'
import { Reveal } from './ui'

export default function Impact() {
  return (
    <section className="bg-gradient-to-b from-soft to-white pt-16 pb-20 lg:pt-[100px] lg:pb-[130px]">
      <div className="container-site">
        <Reveal>
          <h2 className="mx-auto max-w-[760px] text-center text-[24px] leading-[1.4] font-semibold tracking-[-0.03em] text-primary sm:text-[28px] lg:text-[32px]">
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

        {/* Payment methods we cover (same bordered strip as the original logo row) */}
        <ul className="mx-auto mt-14 grid max-w-[720px] grid-cols-2 sm:grid-cols-3 lg:max-w-none lg:grid-cols-5">
          {impact.methods.map((m, i) => (
            <Reveal
              as="li"
              key={m.label}
              delay={i * 90}
              className="group flex h-[118px] flex-col items-center justify-center gap-3 border-l border-line px-6 first:border-l-0 lg:first:border-l"
            >
              <Icon
                name={m.icon}
                className="h-8 w-8 text-[#8d8fa0] transition-colors duration-300 group-hover:text-accent"
                strokeWidth={1.6}
              />
              <span className="text-[17px] font-semibold tracking-[-0.03em] text-[#8d8fa0] transition-colors duration-300 group-hover:text-primary">
                {m.label}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
