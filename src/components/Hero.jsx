import { hero, site } from '../config'
import { CountUp, Reveal, Slant } from './ui'
import Header from './Header'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary">
      {/* Background photo + dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpeg"
          alt=""
          className="animate-kenburns h-full w-full object-cover object-[60%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#1b1b1d]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      </div>

      <div className="relative">
        <Header />

        <div className="container-site pt-36 pb-28 sm:pt-44 lg:pt-[210px] lg:pb-[150px]">
          <div className="max-w-[600px] lg:ml-[50px]">
            <Reveal>
              <span className="pill border-white/25 bg-white/10 text-white backdrop-blur-sm">
                <img src="/images/hello.webp" alt="" className="h-5 w-5" />
                {hero.badge}
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 text-[40px] leading-[1.15] font-semibold tracking-[-0.045em] sm:text-[54px] lg:text-[64px]">
                <span className="block text-white">{hero.titleTop}</span>
                <span className="text-grad-light block">{hero.titleBottom}</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-[555px] text-[17px] leading-[1.75] font-normal text-white/75 lg:text-lg">{hero.text}</p>
            </Reveal>

            <Reveal delay={300}>
              <a
                href="/register"
                className="mt-11 inline-flex items-center rounded-md bg-white/40 px-8 py-[18px] text-base leading-none font-semibold tracking-[-0.025em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-accent"
              >
                {hero.cta}
              </a>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-[100px] grid grid-cols-3 border-t border-white/20 pt-12 sm:max-w-[593px]">
                {hero.stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`pb-5 ${i > 0 ? 'border-l border-white/20 pl-4 sm:pl-8' : 'pr-3'}`}
                  >
                    <div className="text-grad-light flex items-baseline text-[30px] leading-none font-medium tracking-[-0.05em] sm:text-[44px]">
                      {s.prefix}
                      <CountUp value={s.value} decimals={s.decimals} />
                      <span className="ml-1 text-[18px] sm:text-[26px]">{s.suffix}</span>
                    </div>
                    <p className="mt-3 text-[13px] leading-snug font-medium text-white/80 sm:text-base">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Slant fill="#f3f4fb" className="absolute right-0 bottom-0 left-0" />
    </section>
  )
}
