# Northgate Advisory

A one-page marketing site for an accounting, tax and advisory firm, built with React 19, Vite 7 and Tailwind CSS v4.

"Northgate Advisory" is a placeholder brand. All copy, contact details, prices, stats and testimonials live in [`src/config.js`](src/config.js).

## Run

```bash
npm install
npm run dev      # http://localhost:5310
npm run build    # production build in dist/
```

## Before going live

- Replace the name, phone, email and address in `src/config.js`.
- Replace the hero stats with numbers you can back up.
- Replace the sample testimonials with real client quotes (with permission), then set `testimonialsAreSamples` to `false`.
- Swap the partner logos in `public/images/` (`u.webp`, `vivio.webp`, `rech.webp`, `hightech.webp`, `minty.webp`) for real ones, or remove the strip.
- Set your own prices in `plans`.
- Point `bookingUrl` at your booking page or contact form.

## Structure

```
src/
  config.js            all site content
  index.css            theme tokens (colours, font) and shared utilities
  components/
    Header.jsx         announcement bar, nav, mobile drawer
    Hero.jsx           background photo, headline, animated stats
    Impact.jsx         headline + logo strip
    Services.jsx       service cards + CTA card
    About.jsx          framed photo, client types, founder quote band
    Testimonials.jsx   masonry review cards
    Pricing.jsx        process steps + plans
    Faq.jsx            accessible accordion
    Footer.jsx         contact CTA + footer links
    ui.jsx             Reveal, CountUp, Logo, Stars, Slant helpers
```
