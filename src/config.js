/**
 * Shared site details and Home-page content.
 * Inner-page content lives in content.js.
 *
 * RefundRight is a free, independent information site. It never charges
 * fees, never holds money and never asks for card or bank details. Keep it
 * that way: anyone charging up-front fees to "recover" money is a red flag.
 */

export const site = {
  name: 'RefundRight',
  shortName: 'RefundRight',
  logoTop: 'REFUNDRIGHT',
  logoBottom: 'CONSUMER GUIDE',
  tagline: 'Free, independent guidance on getting your money back the right way.',
  announcement: 'Free guidance, always. We never charge fees or ask for your bank details.',
  email: 'hello@refundright.example',
  hours: 'We reply to emails Mon – Fri',
  disclaimer: 'General information only, not legal or financial advice.',
  year: new Date().getFullYear(),
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  {
    label: 'Refund',
    href: '/dispute-letter',
    children: [
      { label: 'Dispute Letter', href: '/dispute-letter' },
      { label: 'Deadline Checker', href: '/deadline-checker' },
    ],
  },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Contact', href: '/contact' },
]

export const headerCta = { label: 'Refund', href: '/dispute-letter' }

export const hero = {
  badge: "Hi, let's get your money back",
  titleTop: 'Get Your Money',
  titleBottom: 'Back the Right Way',
  text: 'Charged twice, sold something that never arrived, or hit by a payment you didn’t make? Learn how refunds, disputes and chargebacks work, and claim directly through your own bank or card provider, for free.',
  cta: 'Start Here',
  ctaHref: '/services',
  // Well-known reference figures (US rules shown; see the Guides page for details).
  stats: [
    { value: 60, decimals: 0, prefix: '', suffix: 'days', label: 'To dispute a US credit card billing error' },
    { value: 0, decimals: 0, prefix: '$', suffix: '', label: 'What our guides and tools cost' },
    { value: 2, decimals: 0, prefix: '', suffix: 'days', label: 'To report a lost debit card for the lowest US liability' },
  ],
}

export const impact = {
  before: 'Most refunds are won through',
  highlight: 'your own bank',
  after: 'and the official complaint routes, not paid middlemen',
  methods: [
    { icon: 'card', label: 'Credit card' },
    { icon: 'wallet', label: 'Debit card' },
    { icon: 'landmark', label: 'Bank transfer' },
    { icon: 'phone', label: 'PayPal & wallets' },
    { icon: 'repeat', label: 'Subscriptions' },
  ],
}

export const services = {
  titleTop: 'We Explain the Process,',
  titleBottom: 'You Stay in Control',
  text: 'Refund rules are scattered across bank terms, card-network rules and consumer law. We put them in plain language, show you which route fits your situation and help you write to the right people. You deal with your bank directly and you never pay anyone a recovery fee.',
  items: [
    {
      icon: 'card',
      title: 'Card Chargebacks',
      text: 'How to ask your card provider to reverse a payment when goods never arrived, were not as described or a refund was refused.',
      href: '/services#card',
    },
    {
      icon: 'shield',
      title: 'Unauthorised Payments',
      text: 'What to do in the first hours after spotting a payment you didn’t make, and why reporting quickly limits your losses.',
      href: '/services#unauthorised',
    },
    {
      icon: 'landmark',
      title: 'Bank Transfer Scams',
      text: 'Paid someone by bank transfer who turned out to be a scammer? How recall requests and reimbursement schemes work.',
      href: '/services#transfer',
    },
    {
      icon: 'repeat',
      title: 'Subscriptions & Billing',
      text: 'Cancelling unwanted subscriptions, fixing double charges and disputing billing errors with the merchant and your bank.',
      href: '/services#billing',
    },
    {
      icon: 'scale',
      title: 'Escalating a Complaint',
      text: 'If your bank says no, how to complain formally and take your case to the free ombudsman or regulator in your country.',
      href: '/services#escalate',
    },
  ],
  cta: {
    title: 'Not sure where to start?',
    text: 'Build a dispute letter in a few minutes. It runs entirely in your browser and nothing you type is sent to us.',
    button: 'Write a Letter',
    href: '/dispute-letter',
  },
}

export const about = {
  titleTop: 'Trust in a',
  titleBottom: 'Sea of Doubt',
  text: [
    'After losing money, it is easy to be targeted again by “recovery” firms that promise results for a fee. We work with ',
    { bold: 'full transparency' },
    ': no fees, no accounts, no deposits, and every route we describe goes directly through your bank or an official body.',
  ],
  listTitle: 'What we can help you understand',
  list: [
    'Card Chargebacks',
    'Billing Errors',
    'Unauthorised Payments',
    'Bank Transfer Scams',
    'Subscription Traps',
    'Formal Complaints',
  ],
  button: 'Read the Guides',
  buttonHref: '/services',
  sideLabel: 'Lost money to a scam?',
  sideValue: 'See where to report it',
  sideHref: '/services#report',
}

export const quote = {
  text: 'If someone asks for a fee to recover your money, stop. Your bank, card provider and the official agencies handle refunds and complaints for free.',
  name: 'The RefundRight Team',
  role: 'Our first rule',
}

export const situations = {
  badge: 'Common situations',
  title: 'Which one sounds like you?',
  items: [
    {
      tag: 'Card',
      title: 'My order never arrived',
      text: 'Contact the seller first and keep a record. If they don’t resolve it, ask your card provider for a chargeback, usually within about 120 days.',
      href: '/services#card',
    },
    {
      tag: 'Billing',
      title: 'I was charged twice',
      text: 'Ask the merchant to refund the duplicate. On a US credit card you can formally dispute a billing error in writing within 60 days of the statement.',
      href: '/services#billing',
    },
    {
      tag: 'Urgent',
      title: 'There’s a payment I didn’t make',
      text: 'Call your bank now using the number on your card, freeze the card and report it. The sooner you report, the less you can be liable for.',
      href: '/services#unauthorised',
    },
    {
      tag: 'Transfer',
      title: 'I sent money to a scammer',
      text: 'Tell your bank immediately and ask them to try to recall the payment. In the UK, many such scams are covered by a reimbursement scheme.',
      href: '/services#transfer',
    },
    {
      tag: 'Subscription',
      title: 'I can’t cancel a subscription',
      text: 'Cancel in writing, keep proof, and ask your card provider to block future payments. Charges after cancellation can be disputed.',
      href: '/services#billing',
    },
    {
      tag: 'Faulty',
      title: 'The item was not as described',
      text: 'Return it if you can and keep evidence. If the seller refuses a refund, a card dispute or a UK Section 75 claim may apply.',
      href: '/services#card',
    },
    {
      tag: 'Escalate',
      title: 'My bank rejected my claim',
      text: 'Ask for the decision in writing, make a formal complaint, then take it to your country’s free financial ombudsman or regulator.',
      href: '/services#escalate',
    },
    {
      tag: 'Warning',
      title: 'A company offered to recover my money',
      text: 'Be very careful. Recovery scams target people who have already lost money. Official bodies never charge you to get money back.',
      href: '/services#redflags',
    },
    {
      tag: 'Crypto',
      title: 'I paid in cryptocurrency',
      text: 'Crypto payments usually can’t be reversed. Report to the exchange and the authorities, and ignore anyone promising to “trace and recover” it for a fee.',
      href: '/services#report',
    },
  ],
}

export const process = {
  title: 'It’s easy to get started',
  text: 'Most disputes follow the same pattern. Gather your evidence, contact the merchant, then go to your bank or card provider. If that fails, escalate to the free official complaint service in your country.',
  steps: ['Read the Guide', 'Write Your Letter', 'Contact Your Bank'],
}

export const plans = [
  {
    name: 'RefundRight',
    price: '$0.00',
    unit: 'always free',
    good: true,
    features: [
      'Plain-language guides',
      'Dispute letter builder',
      'Deadline checker',
      'Where-to-report directory',
      'No account or sign-up needed',
    ],
    button: 'Read the Guides',
    href: '/services',
  },
  {
    name: 'Recovery Scam Red Flags',
    price: 'Stop',
    unit: 'if someone does any of these',
    good: false,
    popular: true,
    badge: 'WARNING',
    features: [
      'Asks for an up-front “recovery” fee',
      'Guarantees to get your money back',
      'Asks for card numbers, PINs or passwords',
      'Wants you to open an account or deposit funds',
      'Claims to work with police or regulators',
    ],
    button: 'Learn the warning signs',
    href: '/services#redflags',
  },
]

export const planNote = 'We never ask for card numbers, PINs or passwords.'

export const faqs = [
  {
    q: 'What is a chargeback?',
    a: 'A chargeback is when your card provider reverses a card payment after you dispute it, for example because goods never arrived or were not as described. You request it through your own bank or card provider. Time limits are set by the card networks and are often around 120 days, so ask your provider.',
  },
  {
    q: 'Do I need to pay anyone to get a refund?',
    a: 'No. Disputing a payment with your bank or card provider is free, and so are official complaint services such as financial ombudsmen and consumer agencies. Be very wary of any company that asks for an up-front fee to recover money.',
  },
  {
    q: 'What should I do first if I see a payment I didn’t make?',
    a: 'Call your bank or card provider straight away using the number on the back of your card or in your banking app, freeze or cancel the card, and change any passwords that may be compromised. How quickly you report can affect how much you are liable for.',
  },
  {
    q: 'Can I get money back from a bank transfer?',
    a: 'Sometimes. Contact your bank immediately and ask them to try to recall the payment. In the UK, many authorised push payment (APP) scams sent by Faster Payments or CHAPS are now covered by a mandatory reimbursement scheme. Rules differ by country.',
  },
  {
    q: 'What if my bank rejects my claim?',
    a: 'Ask for the decision and the reasons in writing, then make a formal complaint. If you are still unhappy, you can usually take it to a free independent service, such as the Financial Ombudsman Service in the UK, AFCA in Australia or OBSI in Canada, or file a complaint with the CFPB in the US.',
  },
  {
    q: 'Does RefundRight see my information?',
    a: 'No. Our tools run entirely in your browser, and nothing you type into them is sent to us or stored. We will never ask for your card number, PIN, passwords or bank login.',
  },
]

export const cta = {
  badge: 'We’re here to help',
  titleWhite: 'Need Assistance ?',
  titleGradient: "Let's Talk",
  text: 'Questions about our guides or tools? Send us a message. Please never include card numbers or passwords.',
}

export const footerLinks = {
  useful: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Free Tools', href: '/dispute-letter' },
  ],
  getStarted: [
    { label: 'Privacy Policy', href: '/terms-and-conditions#privacy' },
    { label: 'Terms & Condition', href: '/terms-and-conditions' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/contact' },
  ],
}
