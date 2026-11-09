import { ArrowUpRight, Check, ChevronRight, Info } from 'lucide-react'
import PageHero from '../components/PageHero'
import Services from '../components/Services'
import Icon from '../components/Icon'
import { Reveal, Slant } from '../components/ui'
import { usePageTitle } from '../components/Layout'
import { guidesPage as g } from '../content'

const stepColors = ['#3c52ff', '#c2742f', '#8b5cf6', '#22c55e']

function Guide({ guide, i }) {
  const warn = guide.id === 'redflags'
  return (
    <Reveal as="article" id={guide.id} delay={(i % 2) * 100} className="scroll-mt-10">
      <div
        className={`h-full rounded-2xl border p-8 sm:p-10 ${
          warn ? 'border-amber-200 bg-amber-50/60' : 'border-line bg-white shadow-[0_10px_30px_rgba(1,6,48,0.04)]'
        }`}
      >
        <div className="flex items-center gap-4">
          <span className={`grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full text-white ${warn ? 'bg-amber-500' : 'bg-ink'}`}>
            <Icon name={guide.icon} className="h-6 w-6" strokeWidth={1.7} />
          </span>
          <h3 className="text-[24px] leading-tight font-semibold tracking-[-0.035em] text-primary">{guide.title}</h3>
        </div>
        <p className="mt-5 text-base leading-[1.65] text-body">{guide.intro}</p>

        <h4 className="mt-7 text-[13px] font-semibold tracking-[0.08em] text-slate uppercase">
          {warn ? 'Warning signs' : 'What to do'}
        </h4>
        <ol className="mt-4 space-y-3.5">
          {guide.steps.map((s, si) => (
            <li key={si} className="flex gap-3.5 text-[15px] leading-[1.6] text-body">
              <span
                className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-[12px] font-semibold ${
                  warn ? 'bg-amber-100 text-amber-700' : 'bg-chip text-primary'
                }`}
              >
                {si + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>

        <div className={`mt-7 space-y-3 rounded-xl p-5 ${warn ? 'bg-white' : 'bg-soft'}`}>
          {guide.rules.map((r, ri) => (
            <p key={ri} className="flex gap-3 text-[14px] leading-[1.6] text-primary">
              {warn ? <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" /> : <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />}
              {r}
            </p>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default function ServicesPage() {
  usePageTitle('Services')
  return (
    <>
      <PageHero title={g.heroTitle} text={g.heroText} />

      <Services className="bg-gradient-to-b from-soft to-white lg:!pt-[90px]" />

      {/* Detailed guides */}
      <section className="pb-20 lg:pb-[120px]">
        <div className="container-site">
          <div className="grid gap-[30px] lg:grid-cols-2">
            {g.guides.map((guide, i) => (
              <Guide key={guide.id} guide={guide} i={i} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate">
            Rules and time limits vary by country, provider and situation. Always confirm with your bank or card provider.
          </p>
        </div>
      </section>

      {/* Dark 4-step process band */}
      <section className="relative">
        <Slant fill="#1b1b1d" />
        <div className="bg-[radial-gradient(ellipse_at_center,#232326_0%,#18181a_70%)] py-20 lg:py-[110px]">
          <div className="container-site">
            <div className="text-center">
              <Reveal>
                <h2 className="heading-xl text-grad-light">{g.stepsTitle}</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-4 text-[15px] font-medium text-white/60">{g.stepsSubtitle}</p>
              </Reveal>
            </div>
            <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {g.steps.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 120}>
                  <div className="flex items-center gap-4">
                    <span
                      className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full border-2 text-[16px] font-semibold text-white"
                      style={{ borderColor: stepColors[i], background: `${stepColors[i]}33` }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {i < g.steps.length - 1 && <span className="hidden h-px flex-1 bg-white/15 lg:block" />}
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

      {/* Where to report, by country */}
      <section id="report" className="scroll-mt-10 pt-16 pb-24 lg:pt-[80px] lg:pb-[140px]">
        <div className="container-site">
          <div className="mx-auto max-w-[640px] text-center">
            <Reveal>
              <h2 className="heading-xl text-grad-dark">{g.reportTitle}</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 text-base leading-[1.65] text-body">{g.reportText}</p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">
            {g.report.map((group, gi) => (
              <Reveal key={group.title} delay={(gi % 3) * 100}>
                <h3 className="border-b border-line pb-4 text-[19px] font-semibold tracking-[-0.03em] text-primary">{group.title}</h3>
                <ul className="mt-5 space-y-3.5">
                  {group.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-3 text-[15px] text-body">
                      <span
                        className="grid h-5 w-5 shrink-0 place-items-center rounded-full"
                        style={{ background: `${group.color}1f`, color: group.color }}
                      >
                        <ChevronRight className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                        >
                          {item.label}
                          <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                        </a>
                      ) : (
                        item.label
                      )}
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
