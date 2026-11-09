import { useEffect, useRef, useState } from 'react'
import { site } from '../config'

function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return [ref, inView]
}

/** Fades and lifts its children into view once, when scrolled to. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Counts from 0 to `value` when it enters the viewport. */
export function CountUp({ value, decimals = 0, duration = 1800 }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value)
      return
    }
    let raf
    const start = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration)
      setN(value * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])
  return (
    <span ref={ref}>
      {n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
    </span>
  )
}

/** Brand mark: arch "gate" emblem + wordmark, silver like the original logo. */
export function Logo({ className = '', compact = false }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-12 w-12 shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="lg-silver" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#8d8fa3" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="29" fill="none" stroke="url(#lg-silver)" strokeWidth="2.5" />
        <path d="M18 47V29a14 14 0 0 1 28 0v18" fill="none" stroke="url(#lg-silver)" strokeWidth="4" strokeLinecap="round" />
        <path d="M39 30h-9a6 6 0 0 0 0 12h7M35 26l4 4-4 4" fill="none" stroke="url(#lg-silver)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-grad-light text-[20px] font-bold tracking-[0.1em]">{site.logoTop}</span>
          <span className="mt-1 text-[9px] font-semibold tracking-[0.42em] text-white/60">{site.logoBottom}</span>
        </span>
      )}
    </span>
  )
}

/** Five stars, with the last one partially filled for ratings like 4.8. */
export function Stars({ rating }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - i))
        return (
          <span key={i} className="relative inline-block text-[13px] leading-none text-[#d9d9e0]">
            ★
            <span className="absolute inset-0 overflow-hidden text-star" style={{ width: `${fill * 100}%` }}>
              ★
            </span>
          </span>
        )
      })}
    </span>
  )
}

/** Full-width slanted edge used between sections. */
export function Slant({ fill, flip = false, className = '' }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={`pointer-events-none block h-[40px] w-full md:h-[90px] ${flip ? '-scale-x-100' : ''} ${className}`}
      aria-hidden="true"
    >
      <polygon points="0,90 1440,0 1440,90" fill={fill} />
    </svg>
  )
}
