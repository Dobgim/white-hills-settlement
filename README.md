# RefundRight

A free, independent consumer guide to getting money back the right way: refunds, chargebacks, billing errors, unauthorised payments and bank-transfer scams. Built with React 19, Vite 7, React Router 7 and Tailwind CSS v4.

RefundRight is **information only**. It never charges fees, holds money, opens accounts or asks for card numbers, PINs or bank logins, and every route it describes goes through the reader's own bank or an official body. Keep it that way.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Guides for each payment type, the 4-step process, and where to report by country |
| `/dispute-letter` | Dispute Letter Builder (runs in the browser; copy, download or print) |
| `/deadline-checker` | Typical time limits by country, payment method and problem |
| `/terms-and-conditions` | Terms, disclaimer and privacy |
| `/contact` | Contact form (opens the visitor's email app) |

Menu: Home · About · Services · Refund ▾ (Dispute Letter, Deadline Checker) · Terms & Conditions · Contact, with the **Refund** button on the right.

## Content

- `src/config.js`: brand, menu and Home-page content
- `src/content.js`: About, Guides, tools, Contact and Terms content
- `src/pages/DeadlineChecker.jsx`: the time-limit rules (in the `deadlines()` function)

The rules and time limits are summarised from public consumer-protection guidance (US FCBA/EFTA, UK Section 75, UK and EU payment rules, UK APP reimbursement, PayPal Buyer Protection). They change. Review them regularly, and keep the "confirm with your provider" wording.

## Run

```bash
npm install
npm run dev      # http://localhost:5310
npm run build    # production build in dist/
```

Hosting: `vercel.json`, `public/_redirects` (Netlify) and `public/.htaccess` (Apache/Hostinger) make deep links like `/about` work.

## Before going live

- Set your real contact email in `src/config.js`.
- Have the Terms reviewed by a legal professional, then set `termsAreTemplate` to `false` in `src/content.js`.
- Double-check the guide and deadline figures for the countries you serve.
