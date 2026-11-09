import { Mail, MessageCircle } from 'lucide-react'
import { cta, footerLinks, site } from '../config'
import { Logo, Reveal } from './ui'

function LinkCol({ title, links }) {
  return (
    <div>
      <h4 className="text-[18px] font-semibold tracking-[-0.025em] text-white">{title}</h4>
      <ul className="mt-6 space-y-[18px]">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-[17px] font-medium tracking-[-0.02em] text-white/65 transition-colors hover:text-white">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[radial-gradient(at_bottom_center,#646464_0%,#232323_60%)]">
      {/* Drop-shaped notch at the top edge */}
      <svg viewBox="0 0 120 90" className="absolute top-0 left-1/2 h-[60px] w-[80px] -translate-x-1/2 md:h-[90px] md:w-[120px]" aria-hidden="true">
        <path d="M0 0 H120 C 78 0, 62 30, 60 90 C 58 30, 42 0, 0 0 Z" fill="#ffffff" />
      </svg>

      <div className="container-site pt-32 lg:pt-[145px]">
        <div className="text-center">
          <Reveal>
            <span className="pill border-white/15 bg-white/10 text-white">
              <img src="/images/toa.webp" alt="" className="h-5 w-5" />
              {cta.badge}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="heading-xl mt-4 text-white">
              {cta.titleWhite} <span className="text-grad-light">{cta.titleGradient}</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-5 max-w-[540px] text-[17px] leading-[1.55] font-medium text-white/65">{cta.text}</p>
          </Reveal>
          <Reveal delay={200} className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="btn-accent gap-2.5">
              <MessageCircle className="h-4 w-4" /> Contact Us
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-8 py-[17px] text-base leading-none font-semibold tracking-[-0.025em] text-white transition-colors hover:bg-white hover:text-primary"
            >
              <Mail className="h-4 w-4" /> Email us
            </a>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 pb-12 sm:grid-cols-2 lg:mt-[70px] lg:grid-cols-[1.4fr_1fr_1fr] lg:pl-[42px]">
          <div>
            <Logo />
            <p className="mt-6 max-w-[230px] text-[17px] leading-[1.6] font-medium text-white">{site.tagline}</p>
            <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-white/50">{site.disclaimer}</p>
          </div>
          <LinkCol title="Useful Links" links={footerLinks.useful} />
          <LinkCol title="Get Started" links={footerLinks.getStarted} />
        </div>

        <div className="border-t border-white/20 pt-10 pb-16 text-center text-[15px] font-medium text-white">
          © Copyright {site.year} {site.name}. All rights reserved.
        </div>
      </div>

      <svg viewBox="0 0 40 18" className="absolute bottom-0 left-1/2 h-[18px] w-10 -translate-x-1/2" aria-hidden="true">
        <polygon points="0,18 20,0 40,18" fill="#ffffff" />
      </svg>
    </footer>
  )
}
