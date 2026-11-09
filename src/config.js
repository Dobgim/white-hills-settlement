/**
 * All business content for the site lives here.
 *
 * "Northgate Advisory" is a placeholder brand. Before going live, replace:
 *   - name, contact details, address
 *   - stats (use only numbers you can back up)
 *   - testimonials (use real client quotes, with their permission) and then
 *     set `testimonialsAreSamples` to false so the "sample" caption disappears
 *   - partner logos in /public/images (u.webp, vivio.webp ...) with real ones
 */

export const site = {
  name: 'Northgate Advisory',
  shortName: 'Northgate',
  tagline: 'Accounting, tax and advisory for growing businesses.',
  announcement: 'Now booking consultations for the 2027 tax season.',
  phone: '+1 (555) 010-2040',
  phoneHref: 'tel:+15550102040',
  email: 'hello@northgate-advisory.example',
  address: '120 Placeholder Street, Suite 400, Your City',
  hours: 'Mon – Fri, 8 am – 6 pm',
  bookingUrl: '/contact',
  // Set this to your real client-portal sign-in URL when you have one.
  // While it is empty, the Login / Register forms show a "not connected yet" notice.
  portalUrl: '',
  year: new Date().getFullYear(),
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  {
    label: 'Client Portal',
    href: '/login',
    children: [
      { label: 'Login', href: '/login' },
      { label: 'Register', href: '/register' },
    ],
  },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Contact', href: '/contact' },
]

export const hero = {
  badge: "Hi, Let's work together",
  titleTop: 'Clear Numbers,',
  titleBottom: 'Confident Decisions',
  text: 'We help small businesses, freelancers and families keep tidy books, file accurate taxes on time and plan their next move with a clear view of their finances.',
  cta: 'Get Started',
  // Sample figures for layout. Replace with your own verified numbers.
  stats: [
    { value: 15, decimals: 0, prefix: '', suffix: '+', label: 'Years of Experience' },
    { value: 1.2, decimals: 1, prefix: '', suffix: 'K', label: 'Returns Filed' },
    { value: 350, decimals: 0, prefix: '', suffix: '+', label: 'Active Clients' },
  ],
}

export const impact = {
  before: 'We’ve supported over',
  highlight: '350+',
  after: 'small businesses and families with their books, taxes and plans',
  logos: [
    { src: '/images/u.webp', alt: 'Partner logo' },
    { src: '/images/vivio.webp', alt: 'Partner logo' },
    { src: '/images/rech.webp', alt: 'Partner logo' },
    { src: '/images/hightech.webp', alt: 'Partner logo' },
    { src: '/images/minty.webp', alt: 'Partner logo' },
  ],
}

export const services = {
  titleTop: 'We Handle the Numbers,',
  titleBottom: 'You Run the Business',
  text: 'Receipts in a shoebox? Deadlines creeping up? Send us what you have and we take it from there. We organise your records, prepare your filings, keep you on the right side of deadlines and explain everything in plain language, so you always know where you stand.',
  items: [
    {
      icon: 'wallet',
      title: 'Bookkeeping',
      text: 'Monthly reconciliation, categorised transactions and clean ledgers, so your books are always current and ready when you need them.',
    },
    {
      icon: 'landmark',
      title: 'Payroll',
      text: 'Accurate, on-time payroll runs with payslips, deductions and year-end summaries handled for you and your team.',
    },
    {
      icon: 'arrows',
      title: 'Tax Preparation',
      text: 'Personal and business returns prepared carefully and filed on time, with every deduction you are entitled to.',
    },
    {
      icon: 'scale',
      title: 'Compliance Support',
      text: 'Help understanding and meeting your filing, reporting and registration obligations as your business grows.',
    },
    {
      icon: 'file',
      title: 'Financial Planning',
      text: 'Budgets, cash-flow forecasts and management reports that help you plan, control and monitor your resources.',
    },
  ],
  cta: {
    title: 'Find out more about our services',
    text: 'Not sure what you need? Book a free first consultation and we will point you in the right direction.',
    button: 'Request Service',
  },
}

export const about = {
  titleTop: 'Clarity You',
  titleBottom: 'Can Count On',
  text: [
    'Choosing an accountant is about trust. We keep things simple with ',
    { bold: 'full transparency' },
    ': fixed, upfront pricing, plain-language reports and a named accountant who knows your file.',
  ],
  listTitle: 'Who we work with',
  list: [
    'Small Businesses',
    'Startups',
    'Freelancers & Contractors',
    'Non-profits',
    'Property Owners',
    'Individuals & Families',
  ],
  button: 'Book a Consultation',
  callLabel: 'Or Call Us',
}

export const quote = {
  text: 'We started this firm on one principle: every client deserves accurate numbers, honest advice and an accountant who picks up the phone.',
  name: 'Your Name',
  role: 'Founder',
}

// Set to false once these are replaced with real client quotes.
export const testimonialsAreSamples = true

export const testimonials = [
  {
    rating: 4.9,
    text: 'Our books were a year behind when we reached out. Within a few weeks everything was reconciled and we finally understood our cash flow.',
    name: 'Andy James',
    handle: '@andyjames',
    avatar: '/images/handsome-caucasian-man-smiling-with-arms-crossed-1.webp',
  },
  {
    rating: 5,
    text: 'As a freelancer I dreaded tax season. They walked me through what I needed, filed on time and explained every line of my return.',
    name: 'Ned Barnett',
    handle: '@nedbarnet',
    avatar: '/images/young-woman-smiling-cheerful-concept.webp',
  },
  {
    rating: 4.8,
    text: 'Payroll used to take me a full day every month. Now it just happens, and my team gets their payslips without me chasing anything.',
    name: 'Henry Ballard',
    handle: '@henryblrd',
    avatar: '/images/young-man-with-redhead-beard-and-cap.webp',
  },
  {
    rating: 4.9,
    text: 'Responsive, organised and easy to talk to. The monthly reports are short and clear, which is exactly what I wanted.',
    name: 'Shana Matthews',
    handle: '@shana.mtw',
    avatar: '/images/portrait-of-a-woman.webp',
  },
  {
    rating: 4.8,
    text: 'They built a cash-flow forecast that helped us decide when to hire. Having real numbers behind the decision made all the difference.',
    name: 'Malcolm Miller',
    handle: '@mc.miller',
    avatar: '/images/young-african-american-man-smiling.webp',
  },
  {
    rating: 5,
    text: 'Switching accountants felt like a hassle, but the onboarding was smooth and they handled the handover with our previous firm.',
    name: 'Lincoln Smith',
    handle: '@smlincoln',
    avatar: '/images/handsome-man-smiling-in-the-park.webp',
  },
  {
    rating: 5,
    text: 'Clear fixed pricing and no surprise invoices. I always know what I am paying for and what I am getting.',
    name: 'Warwick Blake',
    handle: '@wrblake',
    avatar: '/images/handsome-cool-african-man-smiling-against-red-back.webp',
  },
  {
    rating: 4.9,
    text: 'Fast, professional and transparent. They kept me informed throughout our year-end and delivered exactly what they promised.',
    name: 'Tara Dean',
    handle: '@tara.dean',
    avatar: '/images/beautiful-blond-woman-smiling.webp',
  },
  {
    rating: 5,
    text: 'Our non-profit needed help with reporting for a new grant. They got our records in order and the report went in well before the deadline.',
    name: 'Grace Osborne',
    handle: '@grace.or',
    avatar: '/images/portrait-of-an-african-woman-smiling.webp',
  },
]

export const process = {
  title: "It's easy to work with Us",
  text: 'Northgate Advisory is a full-service accounting and advisory practice. From monthly bookkeeping to year-end accounts and tax returns, we handle the detail securely and transparently, so you can focus on your work.',
  steps: ['Book a Call', 'Share Your Documents', 'Get Your Plan'],
}

// Placeholder prices. Set your own.
export const plans = [
  {
    name: 'Standard',
    price: '$42.00',
    unit: 'per hour',
    features: [
      'Monthly bookkeeping',
      'Free first consultation',
      'Basic reporting and analytics',
      'Secure document portal',
      'Year-end summary',
    ],
    popular: false,
  },
  {
    name: 'Premium+',
    price: '$64.00',
    unit: 'per hour',
    features: [
      'Premium+ reporting and analytics',
      'Free first consultation',
      'Priority chat and email support',
      'Tax planning sessions',
      'Dedicated accountant',
    ],
    popular: true,
  },
]

export const planNote = 'Tax & other services quoted separately.'

export const faqs = [
  {
    q: 'What services does Northgate Advisory offer?',
    a: 'We provide bookkeeping, payroll, personal and business tax preparation, compliance support and financial planning, including budgets, forecasts and management reports.',
  },
  {
    q: 'How does getting started work?',
    a: 'Book a free consultation, tell us about your situation and share your existing records. We then send a fixed quote and a simple onboarding checklist, and assign you a dedicated accountant.',
  },
  {
    q: 'Can you help if my books are behind?',
    a: 'Yes. Catch-up bookkeeping is one of the most common things we do. We will bring your records up to date first, then keep them current month by month.',
  },
  {
    q: 'Do you work with clients remotely?',
    a: 'Yes. Most of our clients work with us entirely online through our secure document portal, email and video calls. In-person meetings are available on request.',
  },
  {
    q: 'How is pricing calculated?',
    a: 'Ongoing work is priced at the hourly rates shown above, and we agree an estimate with you before starting. Larger one-off projects receive a fixed quote.',
  },
  {
    q: 'What information do I need to provide?',
    a: 'Usually bank statements, receipts and invoices, payroll records and last year’s returns. We will send a tailored checklist after your first call.',
  },
]

export const cta = {
  badge: 'We’re here to help',
  titleWhite: 'Need Assistance ?',
  titleGradient: "Let's Talk",
  text: 'Tell us where your books are today and we will show you a clear path forward.',
}

export const footerLinks = {
  useful: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Account', href: '/login' },
    { label: 'Services', href: '/services' },
  ],
  getStarted: [
    { label: 'Privacy Policy', href: '/terms-and-conditions#privacy' },
    { label: 'Terms & Condition', href: '/terms-and-conditions' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/contact' },
  ],
}
