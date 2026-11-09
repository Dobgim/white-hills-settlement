import Header from './Header'
import { Reveal, Slant } from './ui'

/**
 * Dark page header used on inner pages (About, Services, Terms, Contact).
 * `title` is an array of lines; the last line gets the light gradient.
 * `centered` gives the Contact-page layout.
 */
export default function PageHero({ title, text, centered = false, slantFill = '#f3f4fb', children, className = '' }) {
  const lines = Array.isArray(title) ? title : [title]
  return (
    <section
      className={`relative bg-[radial-gradient(ellipse_at_top_left,#2c2c2f_0%,#1a1a1c_55%,#141416_100%)] ${className}`}
    >
      <Header />
      <div
        className={`container-site relative pt-36 sm:pt-44 lg:pt-[230px] ${
          children ? 'pb-10' : 'pb-28 lg:pb-[190px]'
        }`}
      >
        {centered ? (
          <div className="mx-auto max-w-[720px] text-center">
            <Reveal>
              <h1 className="text-[38px] leading-[1.1] font-semibold tracking-[-0.045em] text-white sm:text-[50px] lg:text-[60px]">
                {lines.map((l, i) => (
                  <span key={i} className={i === lines.length - 1 ? 'text-grad-light' : ''}>
                    {l}
                    {i < lines.length - 1 ? ' ' : ''}
                  </span>
                ))}
              </h1>
            </Reveal>
            {text && (
              <Reveal delay={120}>
                <p className="mx-auto mt-5 max-w-[600px] text-[17px] leading-[1.6] font-medium text-white/65">{text}</p>
              </Reveal>
            )}
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <Reveal>
              <h1 className="text-[38px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[50px] lg:text-[60px]">
                {lines.map((l, i) => (
                  <span key={i} className={`block ${i === lines.length - 1 ? 'text-grad-light' : 'text-white'}`}>
                    {l}
                  </span>
                ))}
              </h1>
            </Reveal>
            {text && (
              <Reveal delay={120} className="lg:pt-[100px]">
                <p className="text-[17px] leading-[1.75] text-white/65">{text}</p>
              </Reveal>
            )}
          </div>
        )}
      </div>
      {children}
      {!children && <Slant fill={slantFill} className="absolute right-0 -bottom-px left-0" />}
    </section>
  )
}
