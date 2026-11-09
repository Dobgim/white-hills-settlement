/**
 * Content for the inner pages (About, Services, Contact, Client Portal, Terms).
 * Home-page content and shared business details live in config.js.
 */

/* ------------------------------------------------------------------ */
/*  About page                                                        */
/* ------------------------------------------------------------------ */
export const aboutPage = {
  heroTitle: ['About Northgate', 'Accounting & Advisory', 'You Can Rely On'],
  heroText:
    'Northgate Advisory was set up with a simple aim: give small businesses and families the kind of careful, plain-spoken accounting support that is usually reserved for large companies.',
  closerTitle: 'Get closer with',
  closerText:
    'We use modern cloud accounting tools and secure document sharing so your records are always organised and easy to reach. Every file is handled carefully and confidentially, and you always know who is working on it.',
  vision: {
    title: 'Our Vision',
    text: 'To be the first call for small businesses that want clear numbers and honest advice.',
  },
  mission: {
    title: 'Our Mission',
    text: 'To keep every client’s books accurate, filings on time and decisions grounded in real figures.',
  },
  // Sample figures for layout. Replace with your own verified numbers.
  stats: [
    { value: 15, decimals: 0, suffix: '+', label: 'Years of Experience' },
    { value: 1.2, decimals: 1, suffix: 'K', label: 'Returns Filed' },
    { value: 350, decimals: 0, suffix: '+', label: 'Active Clients' },
  ],
  founderName: 'Your Name',
  founderRole: 'CEO & Founder',
  storyTitle: 'Supporting Businesses in an Uncertain Financial Landscape',
  storyText:
    'Rules change, deadlines move and cash flow is rarely predictable. We exist to take the admin and the guesswork off your plate, so you can spend your time on the work you actually enjoy.',
  timeline: [
    {
      title: 'Your First Step',
      text: 'Book a free consultation. We review where your books are today and agree a clear, fixed scope of work.',
    },
    {
      title: 'Why Northgate Stands Apart',
      text: 'You get a named accountant who knows your file, not a ticket number in a queue.',
    },
    {
      title: 'Peace of Mind All Year',
      text: 'We track your deadlines and remind you well in advance, so nothing is left to the last minute.',
    },
    {
      title: 'The Northgate Advantage',
      text: 'No two businesses are the same. We tailor our reporting to the numbers you actually use to make decisions.',
    },
    {
      title: 'Turning Numbers into Decisions',
      text: 'Budgets, forecasts and plain-language reports that help you decide when to hire, invest or hold back.',
    },
  ],
  valuesTitle: 'Our core values',
  values: [
    {
      icon: 'zap',
      title: 'Responsiveness',
      text: 'We reply quickly, explain clearly and never leave you wondering where your file stands.',
    },
    {
      icon: 'target',
      title: 'Accuracy',
      text: 'Every reconciliation and return is reviewed by a second accountant before it leaves our office.',
    },
    {
      icon: 'shield',
      title: 'Confidentiality',
      text: 'Your financial information is stored securely and shared only with your permission.',
    },
  ],
  methodTitle: 'Our Proven Methodology',
  methodSubtitle: 'Reach Out To Us',
  methodText:
    'Our team includes qualified accountants and bookkeepers who work with small businesses every day. Every engagement follows the same clear process: understand, organise, report and advise.',
  // Sample figures for layout. Replace with your own, or set `barsAreSamples` false once real.
  barsTitle: 'Our numbers talk',
  barsAreSamples: true,
  bars: [
    { label: 'Returns filed before the deadline', value: 98 },
    { label: 'Monthly books closed by day 10', value: 95 },
    { label: 'Clients with us for 3+ years', value: 82 },
    { label: 'Queries answered within 1 business day', value: 96 },
  ],
}

/* ------------------------------------------------------------------ */
/*  Services page                                                     */
/* ------------------------------------------------------------------ */
export const servicesPage = {
  heroTitle: ['We offer a wide range', 'of services'],
  heroText:
    'From day-to-day bookkeeping to year-end accounts and long-term planning, here is what we can take care of for you and how each service works.',
  stepsTitle: 'Our simple 4 step process',
  stepsSubtitle: 'It’s Easy To Work With Us',
  steps: [
    { title: 'Book a Call', text: 'Tell us about your business and what you need help with.' },
    { title: 'Share Documents', text: 'Upload your records securely through our client portal.' },
    { title: 'We Do the Work', text: 'Your accountant organises, reconciles, prepares and files.' },
    { title: 'Review Together', text: 'We walk you through the results and plan the next step.' },
  ],
  catalogTitle: 'Let’s check all our services',
  catalogText:
    'Practical accounting and advisory services for individuals, freelancers and small to medium-sized businesses.',
  catalog: [
    {
      title: 'Bookkeeping Services',
      color: '#3c52ff',
      items: [
        'Monthly reconciliation',
        'Accounts payable & receivable',
        'Expense categorisation',
        'Catch-up bookkeeping',
        'Cloud software setup',
        'Management accounts',
      ],
    },
    {
      title: 'Tax Services',
      color: '#22c55e',
      items: [
        'Personal tax returns',
        'Business tax returns',
        'Sales tax / VAT returns',
        'Tax planning',
        'Estimated payments',
        'Tax notice support',
      ],
    },
    {
      title: 'Payroll Services',
      color: '#f59e0b',
      items: [
        'Payroll processing',
        'Payslips & deductions',
        'Contractor payments',
        'Year-end forms',
        'Benefits administration',
        'Payroll compliance',
      ],
    },
    {
      title: 'Advisory Services',
      color: '#ec4899',
      items: [
        'Budgeting & forecasting',
        'Cash-flow planning',
        'KPI dashboards',
        'Pricing & profitability',
        'Funding preparation',
        'Growth planning',
      ],
    },
    {
      title: 'Business Setup',
      color: '#8b5cf6',
      items: [
        'Choosing a business structure',
        'Registration support',
        'Chart of accounts',
        'Opening-balance setup',
        'Bank feed connection',
        'Process documentation',
      ],
    },
    {
      title: 'Personal Finance',
      color: '#06b6d4',
      items: [
        'Household budgeting',
        'Rental property accounts',
        'Retirement contributions',
        'Education savings',
        'Estate planning support',
        'Document organisation',
      ],
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  Contact page                                                      */
/* ------------------------------------------------------------------ */
export const contactPage = {
  titleWhite: 'Feel free to',
  titleGradient: 'get in touch',
  text: 'Questions about your books, your taxes or our services? Send us a message and we will get back to you within one business day.',
  formTitle: 'Leave your message',
  infoTitle: ['Don’t hesitate to', 'contact us'],
}

/* ------------------------------------------------------------------ */
/*  Client portal (Login / Register)                                  */
/* ------------------------------------------------------------------ */
export const portal = {
  loginTitle: 'Client Portal',
  loginText: 'Securely share documents, view your reports and message your accountant in one place.',
  loginFeatures: [
    { icon: 'shield', label: 'Secure Uploads' },
    { icon: 'zap', label: 'Quick Replies' },
    { icon: 'globe', label: 'Access Anywhere' },
    { icon: 'phone', label: 'Mobile Ready' },
  ],
  registerTitle: 'Become a Client',
  registerText:
    'Create your client portal account in a few steps and we will be in touch to schedule your first consultation.',
  registerFeatures: [
    { title: 'Secure Document Sharing', text: 'Upload receipts, statements and records safely.' },
    { title: 'Real-Time Updates', text: 'See where your books and returns stand at any time.' },
    { title: 'Direct Messaging', text: 'Talk to your accountant without long email threads.' },
  ],
  businessTypes: [
    'Sole trader / Freelancer',
    'Small business',
    'Startup',
    'Non-profit',
    'Individual / Family',
    'Other',
  ],
}

/* ------------------------------------------------------------------ */
/*  Terms & Conditions                                                */
/* ------------------------------------------------------------------ */
// Template text. Have it reviewed by a qualified legal professional in your
// jurisdiction, then set `termsAreTemplate` to false to hide the notice.
export const termsAreTemplate = true
export const termsUpdated = 'November 2026'
export const termsIntro = ['How We Work With You', 'Clear terms for our accounting and advisory services']

export const terms = [
  {
    id: 'engagement',
    title: '1. Our Engagement',
    body: [
      'These Terms & Conditions apply to all accounting, bookkeeping, payroll, tax and advisory services provided by Northgate Advisory ("we", "us"). For each client we also issue an engagement letter that sets out the specific scope, deliverables and fees. If the engagement letter and these terms differ, the engagement letter takes priority.',
    ],
  },
  {
    id: 'responsibilities',
    title: '2. Your Responsibilities',
    body: [
      'You agree to provide complete, accurate and timely information and records, and to tell us promptly about any changes that may affect your accounts or tax position.',
      'You remain responsible for the accuracy of the information you provide and for reviewing and approving any return or report before it is filed.',
    ],
  },
  {
    id: 'fees',
    title: '3. Fees and Payment',
    body: [
      'Fees are charged at the rates shown on our website or as agreed in your engagement letter. We will give you an estimate before starting any work outside the agreed scope.',
      'Invoices are payable within 14 days unless agreed otherwise. We may pause work on accounts with overdue balances, and we will tell you before doing so.',
    ],
  },
  {
    id: 'privacy',
    title: '4. Privacy, Data Security and Confidentiality',
    body: [
      'We treat all client information as confidential and use it only to provide our services. We do not sell, rent or trade your data.',
      'Documents are stored using encrypted, access-controlled systems. You may request a copy of the personal data we hold about you, or ask us to delete it where we are not legally required to keep it.',
    ],
  },
  {
    id: 'records',
    title: '5. Records Retention',
    body: [
      'We keep working papers and copies of filed returns for the period required by law. Original documents remain your property and will be returned on request.',
    ],
  },
  {
    id: 'liability',
    title: '6. Limitation of Liability',
    body: [
      'We provide our services with reasonable skill and care. To the fullest extent permitted by law, our total liability for any claim relating to our services is limited to the fees paid for the specific service that gave rise to the claim. We are not liable for losses caused by incomplete or inaccurate information provided to us.',
    ],
  },
  {
    id: 'termination',
    title: '7. Ending Our Engagement',
    body: [
      'Either party may end the engagement with 30 days’ written notice. You will be charged only for work completed up to the end date, and we will help with a smooth handover to any new adviser.',
    ],
  },
  {
    id: 'law',
    title: '8. Governing Law',
    body: ['These terms are governed by the laws of [Your State / Country], without regard to its conflict-of-law provisions.'],
  },
  {
    id: 'changes',
    title: '9. Changes to These Terms',
    body: [
      'We may update these terms from time to time. The latest version will always be published on this page with the date it was last updated.',
    ],
  },
]
