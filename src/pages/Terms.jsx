import PageHero from '../components/PageHero'
import { Reveal } from '../components/ui'
import { usePageTitle } from '../components/Layout'
import { terms, termsAreTemplate, termsIntro, termsUpdated } from '../content'

export default function Terms() {
  usePageTitle('Terms & Conditions')
  return (
    <>
      <PageHero title={['Terms &', 'Conditions']} text={termsIntro} />

      <section className="bg-gradient-to-b from-soft to-white pt-12 pb-24 lg:pt-[70px] lg:pb-[130px]">
        <div className="container-site">
          <div className="mx-auto max-w-[900px]">
            <Reveal>
              <p className="text-sm font-medium text-slate">Last updated: {termsUpdated}</p>
              {termsAreTemplate && (
                <p className="mt-4 rounded-lg border border-[#f5d48a] bg-[#fff8e6] px-4 py-3 text-sm text-[#7a5a12]">
                  Template text. Have these terms reviewed by a qualified legal professional before publishing.
                </p>
              )}
            </Reveal>

            {/* Quick links */}
            <Reveal delay={80}>
              <nav aria-label="Sections" className="mt-8 flex flex-wrap gap-2">
                {terms.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-medium text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    {t.title.replace(/^\d+\.\s*/, '')}
                  </a>
                ))}
              </nav>
            </Reveal>

            <div className="mt-12 space-y-12">
              {terms.map((t) => (
                <Reveal key={t.id} as="article" id={t.id} className="scroll-mt-28">
                  <h2 className="text-[24px] leading-tight font-semibold tracking-[-0.03em] text-primary sm:text-[28px]">
                    {t.title}
                  </h2>
                  {t.body.map((p, i) => (
                    <p key={i} className="mt-4 text-base leading-[1.75] text-body">
                      {p}
                    </p>
                  ))}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
