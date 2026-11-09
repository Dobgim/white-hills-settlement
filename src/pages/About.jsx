import { Check, Compass, X } from 'lucide-react'
import PageHero from '../components/PageHero'
import Icon from '../components/Icon'
import { CountUp, Reveal } from '../components/ui'
import { usePageTitle } from '../components/Layout'
import { aboutPage as a } from '../content'
import { site } from '../config'

export default function About() {
  usePageTitle('About')
  return (
    <>
      <PageHero title={a.heroTitle} text={a.heroText} />

      {/* Intro: photo + vision/mission + facts */}
      <section className="bg-gradient-to-b from-soft to-white pt-14 pb-20 lg:pt-[80px] lg:pb-[130px]">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-[100px]">
          <div>
            <Reveal className="relative">
              <img
                src="/images/team.jpg"
                alt="A group of people celebrating in an office"
                className="aspect-[608/418] w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <span className="animate-float absolute top-1/2 left-1/2 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/90 shadow-[0_0_0_10px_rgba(60,82,255,0.2)] sm:block" />
            </Reveal>
            <div className="mt-14 grid grid-cols-3 gap-4">
              {a.facts.map((s, i) => (
                <Reveal key={s.label} delay={i * 100}>
                  <div className="text-grad-dark flex items-baseline text-[30px] leading-none font-medium tracking-[-0.05em] sm:text-[44px]">
                    {s.prefix}
                    <CountUp value={s.value} />
                    <span className="ml-0.5 text-[18px] sm:text-[26px]">{s.suffix}</span>
                  </div>
                  <p className="mt-3 text-[13px] font-medium text-body sm:text-[15px]">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h2 className="text-[30px] leading-[1.2] font-semibold tracking-[-0.04em] text-primary sm:text-[40px]">
                {a.closerTitle}{' '}
                <span className="relative inline-block">
                  <span className="text-grad-muted">{site.shortName}</span>
                  <svg
                    viewBox="0 0 140 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 h-3 w-full text-accent"
                    aria-hidden="true"
                  >
                    <path d="M2 8 C 40 3, 100 3, 138 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 text-base leading-[1.7] text-body">{a.closerText}</p>
            </Reveal>
            <div className="mt-9 grid gap-8 sm:grid-cols-2">
              {[a.vision, a.mission].map((v, i) => (
                <Reveal key={v.title} delay={150 + i * 100}>
                  <h3 className="flex items-center gap-3 text-[18px] font-semibold tracking-[-0.025em] text-primary">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-chip">
                      {i === 0 ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : <Compass className="h-3.5 w-3.5" strokeWidth={2.5} />}
                    </span>
                    {v.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-body">{v.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={300}>
              <div className="mt-10 border-t border-line pt-7">
                <p className="font-['Mrs_Saint_Delafield',cursive] text-[40px] leading-none text-primary/70">{site.name}</p>
                <p className="mt-1 text-sm font-medium text-body">Free &amp; independent</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story + timeline */}
      <section className="pb-20 lg:pb-[130px]">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-[90px]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="heading-xl text-grad-dark max-w-[480px]">{a.storyTitle}</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 max-w-[460px] text-base leading-[1.7] text-body">{a.storyText}</p>
            </Reveal>
          </div>
          <ol className="relative space-y-10 border-l border-line pl-10">
            {a.timeline.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 80} className="relative">
                <span className="absolute top-1 -left-[51px] h-[21px] w-[21px] rounded-full border-2 border-[#9fa1b3] bg-white" />
                <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-primary">{t.title}</h3>
                <p className="mt-2 text-base leading-[1.65] text-body">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Values + methodology + what we never do */}
      <section className="pb-20 lg:pb-[120px]">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-[90px]">
          <div>
            <Reveal>
              <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-primary">{a.valuesTitle}</h3>
            </Reveal>
            <div className="mt-6 space-y-5">
              {a.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 100}>
                  <div className="flex gap-5 rounded-xl border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(1,6,48,0.08)]">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-chip text-primary">
                      <Icon name={v.icon} className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h4 className="text-[18px] font-semibold tracking-[-0.025em] text-primary">{v.title}</h4>
                      <p className="mt-2 text-[15px] leading-[1.65] text-body">{v.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:pt-6">
            <Reveal>
              <h2 className="heading-xl text-grad-dark">{a.methodTitle}</h2>
            </Reveal>
            <Reveal delay={100}>
              <h3 className="mt-6 text-[17px] font-semibold text-primary">{a.methodSubtitle}</h3>
              <p className="mt-3 max-w-[480px] text-base leading-[1.7] text-body">{a.methodText}</p>
              <a
                href="/contact"
                className="mt-9 inline-flex items-center rounded-md bg-ink px-7 py-[16px] text-base leading-none font-semibold tracking-[-0.025em] text-white transition-colors hover:bg-accent"
              >
                Contact Us
              </a>
            </Reveal>

            <div className="mt-14 border-t border-line pt-10">
              <Reveal>
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-body">{a.neverTitle}</h3>
              </Reveal>
              <ul className="mt-6 space-y-4">
                {a.never.map((n, i) => (
                  <Reveal as="li" key={n} delay={i * 80} className="flex items-center gap-3 text-[16px] font-medium text-primary">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-red-50 text-red-500">
                      <X className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {n}
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
