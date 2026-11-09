import { useState } from 'react'
import { Clock, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import PageHero from '../components/PageHero'
import { Reveal, Slant } from '../components/ui'
import { usePageTitle } from '../components/Layout'
import { contactPage as c } from '../content'
import { site } from '../config'

const field =
  'w-full rounded-lg border border-line bg-softer px-4 py-3.5 text-[15px] text-primary placeholder:text-[#9a9cad] outline-none transition focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10'

function InfoCard({ icon: Icon, title, children, href }) {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag
      href={href}
      className="flex items-start gap-4 rounded-xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(1,6,48,0.08)]"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-chip text-ink">
        <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
      </span>
      <span className="min-w-0">
        <span className="block text-[18px] font-semibold tracking-[-0.025em] text-primary">{title}</span>
        <span className="mt-1 block text-[14px] leading-snug break-words text-body">{children}</span>
      </span>
    </Tag>
  )
}

export default function Contact() {
  usePageTitle('Contact')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // No backend yet: open the visitor's email app with the message filled in.
  const submit = (e) => {
    e.preventDefault()
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(form.subject || 'Website enquiry')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHero title={[c.titleWhite, c.titleGradient]} text={c.text} centered>
        <div className="h-24 lg:h-[200px]" />
        <Slant fill="#f3f4fb" className="absolute right-0 -bottom-px left-0" />
      </PageHero>

      <section className="relative bg-gradient-to-b from-soft to-white pb-24 lg:pb-[130px]">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[480px_1fr] lg:gap-[60px]">
          <Reveal className="relative z-10 -mt-24 lg:-mt-48">
            <form
              onSubmit={submit}
              className="rounded-2xl border border-line/70 bg-white p-7 shadow-[0_30px_70px_rgba(1,6,48,0.10)] sm:p-9"
            >
              <h2 className="text-[22px] font-semibold tracking-[-0.03em] text-primary">{c.formTitle}</h2>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-primary">Name</span>
                  <input required className={field} placeholder="Your Name" value={form.name} onChange={set('name')} autoComplete="name" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-primary">Email</span>
                  <input
                    required
                    type="email"
                    className={field}
                    placeholder="Your Email"
                    value={form.email}
                    onChange={set('email')}
                    autoComplete="email"
                  />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-semibold text-primary">Subject</span>
                <input className={field} placeholder="Subject" value={form.subject} onChange={set('subject')} />
              </label>
              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-semibold text-primary">Message</span>
                <textarea
                  required
                  rows={5}
                  className={`${field} resize-y`}
                  placeholder="Message"
                  value={form.message}
                  onChange={set('message')}
                />
              </label>
              <button
                type="submit"
                className="mt-7 inline-flex items-center gap-2.5 rounded-md bg-ink px-7 py-[15px] text-base leading-none font-semibold tracking-[-0.025em] text-white transition-colors hover:bg-accent"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
              {sent && (
                <p className="mt-4 text-sm text-body" role="status">
                  Your email app should open with the message ready to send. If it doesn’t, email us at{' '}
                  <a href={`mailto:${site.email}`} className="font-semibold text-accent">
                    {site.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="heading-xl text-grad-dark">
                {c.infoTitle[0]} {c.infoTitle[1]}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <Reveal delay={80}>
                <InfoCard icon={MapPin} title="Office">
                  {site.address}
                </InfoCard>
              </Reveal>
              <Reveal delay={160}>
                <InfoCard icon={MessageCircle} title="Call Us" href={site.phoneHref}>
                  {site.phone}
                </InfoCard>
              </Reveal>
              <Reveal delay={240}>
                <InfoCard icon={Clock} title="Work Hours">
                  {site.hours}
                </InfoCard>
              </Reveal>
              <Reveal delay={320}>
                <InfoCard icon={Mail} title="Email" href={`mailto:${site.email}`}>
                  {site.email}
                </InfoCard>
              </Reveal>
            </div>
            <div className="mt-10 border-t border-line" />
          </div>
        </div>
      </section>
    </>
  )
}
