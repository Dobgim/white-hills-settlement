import { ChevronRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Services from '../components/Services'
import { Reveal, Slant } from '../components/ui'
import { usePageTitle } from '../components/Layout'
import { servicesPage as s } from '../content'

const stepColors = ['#3c52ff', '#c2742f', '#8b5cf6', '#22c55e']

export default function ServicesPage() {
  usePageTitle('Services')
  return (
    <>
      <PageHero title={s.heroTitle} text={s.heroText} />

      <Services className="bg-gradient-to-b from-soft to-white lg:!pt-[90px]" />

      {/* Dark 4-step process band */}
      <section className="relative">
        <Slant fill="#1b1b1d" />
        <div className="bg-[radial-gradient(ellipse_at_center,#232326_0%,#18181a_70%)] py-20 lg:py-[110px]">
          <div className="container-site">
            <div className="text-center">
              <Reveal>
                <h2 className="heading-xl text-grad-light">{s.stepsTitle}</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-4 text-[15px] font-medium text-white/60">{s.stepsSubtitle}</p>
              </Reveal>
            </div>
            <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {s.steps.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 120}>
                  <div className="flex items-center gap-4">
                    <span
                      className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full border-2 text-[16px] font-semibold text-white"
                      style={{ borderColor: stepColors[i], background: `${stepColors[i]}33` }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {i < s.steps.length - 1 && <span className="hidden h-px flex-1 bg-white/15 lg:block" />}
                  </div>
                  <h3 className="mt-7 text-[20px] font-semibold tracking-[-0.03em] text-white">{step.title}</h3>
                  <p className="mt-3 max-w-[260px] text-[15px] leading-[1.6] text-white/60">{step.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
        <Slant fill="#ffffff" className="-mt-px bg-[#18181a]" />
      </section>

      {/* Full service catalogue */}
      <section className="pt-16 pb-24 lg:pt-[80px] lg:pb-[140px]">
        <div className="container-site">
          <div className="mx-auto max-w-[620px] text-center">
            <Reveal>
              <h2 className="heading-xl text-grad-dark">{s.catalogTitle}</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 text-base leading-[1.65] text-body">{s.catalogText}</p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">
            {s.catalog.map((group, gi) => (
              <Reveal key={group.title} delay={(gi % 3) * 100}>
                <h3 className="border-b border-line pb-4 text-[19px] font-semibold tracking-[-0.03em] text-primary">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] text-body">
                      <span
                        className="grid h-5 w-5 shrink-0 place-items-center rounded-full"
                        style={{ background: `${group.color}1f`, color: group.color }}
                      >
                        <ChevronRight className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
