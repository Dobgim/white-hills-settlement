# Northgate Advisory

A multi-page website for an accounting, tax and advisory firm, built with React 19, Vite 7 and Tailwind CSS v4.

"Northgate Advisory" is a placeholder brand. Shared business details and home-page content live in [`src/config.js`](src/config.js); inner-page content lives in [`src/content.js`](src/content.js).

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/login` | Client portal sign-in |
| `/register` | Client portal sign-up (3 steps) |
| `/terms-and-conditions` | Terms & Conditions |
| `/contact` | Contact (form opens the visitor's email app) |

The Login and Register forms aren't connected to a backend. Until you set `portalUrl` in `src/config.js`, submitting them shows a "portal not connected yet" notice. No passwords are stored or sent anywhere.

Hosting: `vercel.json`, `public/_redirects` (Netlify) and `public/.htaccess` (Apache/Hostinger) make deep links like `/about` work.

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
- Have the Terms reviewed by a legal professional, then set `termsAreTemplate` to `false` in `src/content.js`.
- Replace the About-page sample figures and set `barsAreSamples` to `false`.
- Connect a real client portal and set `portalUrl`.

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
