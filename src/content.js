/**
 * Content for the inner pages (About, Guides, Tools, Contact, Terms).
 * Shared details and Home-page content live in config.js.
 *
 * Rules and time limits are summarised from public consumer-protection
 * guidance. They change, so review them periodically, and always tell
 * readers to confirm with their own provider.
 */

/* ------------------------------------------------------------------ */
/*  About                                                             */
/* ------------------------------------------------------------------ */
export const aboutPage = {
  heroTitle: ['About RefundRight', 'Honest Refund Help', 'That Costs Nothing'],
  heroText:
    'RefundRight was created for one reason: people who lose money are often targeted a second time by “recovery” firms that charge fees and deliver nothing. We explain the free, official routes instead.',
  closerTitle: 'Get closer with',
  closerText:
    'Everything here is written in plain language and points you to the people who can actually reverse a payment: your bank, your card provider and the official complaint services in your country. We don’t take a cut, hold money or act on your behalf.',
  vision: {
    title: 'Our Vision',
    text: 'A world where nobody pays a stranger to get their own money back.',
  },
  mission: {
    title: 'Our Mission',
    text: 'To make refund rights easy to understand and easy to use, for free.',
  },
  facts: [
    { value: 0, prefix: '$', suffix: '', label: 'Fees, ever' },
    { value: 0, prefix: '', suffix: '', label: 'Accounts to create' },
    { value: 100, prefix: '', suffix: '%', label: 'Runs in your browser' },
  ],
  storyTitle: 'Protecting People in an Uncertain Financial Landscape',
  storyText:
    'Disputed payments, surprise subscriptions and online scams are increasingly common. Your rights are real, but they are buried in fine print. We dig them out and lay out your options step by step.',
  timeline: [
    {
      title: 'Your First Step',
      text: 'Work out which situation you are in and which payment method you used. That decides which rules protect you.',
    },
    {
      title: 'Why RefundRight Is Different',
      text: 'We are not a recovery service. We never ask you to pay, deposit or hand over account access.',
    },
    {
      title: 'Peace of Mind Beyond the Refund',
      text: 'Learn how to secure your accounts and spot follow-up scams after you’ve been targeted once.',
    },
    {
      title: 'Clear, Practical Tools',
      text: 'Write a dispute letter and check typical deadlines in minutes, without signing up.',
    },
    {
      title: 'Turning Disputes into Resolutions',
      text: 'If your bank says no, we show you how to escalate to the free ombudsman or regulator.',
    },
  ],
  valuesTitle: 'Our core values',
  values: [
    {
      icon: 'shield',
      title: 'Never a Fee',
      text: 'Our guides and tools are free. We will never ask you to pay to recover money.',
    },
    {
      icon: 'target',
      title: 'Plain Language',
      text: 'No jargon. Every guide tells you what to do, who to contact and what to say.',
    },
    {
      icon: 'globe',
      title: 'Your Data Stays Yours',
      text: 'Our tools run in your browser. We don’t collect your financial details.',
    },
  ],
  methodTitle: 'Our Proven Methodology',
  methodSubtitle: 'Reach Out To Us',
  methodText:
    'Our guides are based on publicly available consumer-protection rules and guidance from regulators and official agencies. If you spot something out of date, tell us and we’ll fix it.',
  neverTitle: 'What we will never do',
  never: [
    'Charge you a fee of any kind',
    'Ask for card numbers, PINs or passwords',
    'Ask you to open an account or deposit money',
    'Contact you first by phone or social media',
    'Promise or guarantee a refund',
  ],
}

/* ------------------------------------------------------------------ */
/*  Guides                                                            */
/* ------------------------------------------------------------------ */
export const guidesPage = {
  heroTitle: ['Clear guides for', 'every situation'],
  heroText:
    'How refunds, chargebacks and disputes work for each way you can pay, what to do first, and where to go if your bank says no.',
  guides: [
    {
      id: 'card',
      icon: 'card',
      title: 'Card chargebacks',
      intro: 'For card purchases where goods or services never arrived, were not as described, or a promised refund never came.',
      steps: [
        'Contact the merchant in writing and give them a reasonable chance to fix it. Keep copies.',
        'Gather evidence: receipts, order confirmations, tracking, photos and your messages with the seller.',
        'Ask your card provider to raise a chargeback (a “dispute”) through its app, website or phone line.',
        'Respond quickly if your provider asks for more information, and keep notes of every call.',
      ],
      rules: [
        'Card-network time limits are often around 120 days from the transaction or expected delivery date. Ask your provider for theirs.',
        'UK: for credit card purchases between £100 and £30,000, Section 75 of the Consumer Credit Act can make the card provider jointly liable with the seller.',
      ],
    },
    {
      id: 'unauthorised',
      icon: 'shield',
      title: 'Payments you didn’t make',
      intro: 'If money has left your account without your permission, speed matters more than anything else.',
      steps: [
        'Call your bank or card provider immediately, using the number on your card or in your banking app.',
        'Freeze or cancel the card, and change passwords for your banking and email accounts.',
        'Ask for the unauthorised transactions to be refunded, and confirm what happens next in writing.',
        'Check your statements for other unfamiliar payments over the following weeks.',
      ],
      rules: [
        'US debit cards and transfers: reporting within 2 business days of learning of a lost card generally limits your liability to $50. Wait longer and your liability can rise, and it can become unlimited after 60 days from the statement date.',
        'US credit cards: liability for unauthorised use is capped at $50, and many issuers offer $0 liability.',
      ],
    },
    {
      id: 'transfer',
      icon: 'landmark',
      title: 'Bank transfers and scams',
      intro: 'Bank transfers are harder to reverse than card payments, but acting fast can still help.',
      steps: [
        'Tell your bank straight away and ask them to try to recall the payment from the receiving bank.',
        'Report the scam to the police or national fraud reporting service and keep the reference number.',
        'Write down everything: dates, amounts, account details you paid to and how you were contacted.',
        'Stop all contact with the scammer and don’t send any more money, whatever they promise.',
      ],
      rules: [
        'UK: since October 2024, most authorised push payment (APP) scams sent by Faster Payments or CHAPS are covered by mandatory reimbursement, up to £85,000. Claims are generally due within 13 months of the last payment.',
        'Elsewhere, recovery depends on how quickly the bank acts and whether funds remain in the receiving account.',
      ],
    },
    {
      id: 'billing',
      icon: 'repeat',
      title: 'Billing errors and subscriptions',
      intro: 'Double charges, wrong amounts and charges after you cancelled a subscription.',
      steps: [
        'Ask the merchant to correct the charge and confirm cancellation in writing.',
        'Ask your card provider to block future payments to that merchant if it keeps charging.',
        'Dispute the charge with your card provider if the merchant doesn’t fix it.',
        'Check your statements for the following months to make sure it has stopped.',
      ],
      rules: [
        'US credit cards: under the Fair Credit Billing Act, send a written billing-error dispute so it arrives within 60 days of the statement that first showed the error.',
        'PayPal Buyer Protection disputes generally need to be opened within 180 days of the payment.',
      ],
    },
    {
      id: 'escalate',
      icon: 'scale',
      title: 'If your bank says no',
      intro: 'A rejected claim is not always the end of the road.',
      steps: [
        'Ask for the decision and the reasons in writing.',
        'Make a formal complaint through your bank’s complaints process, and keep the reference.',
        'If the response doesn’t resolve it, take your complaint to your country’s free independent service.',
        'Include your evidence, letters and a short timeline of what happened.',
      ],
      rules: [
        'Ombudsman and regulator complaint services are free to use. You don’t need a paid representative.',
        'Most services expect you to complain to the bank first and wait for its final response, or for a set period.',
      ],
    },
    {
      id: 'redflags',
      icon: 'alert',
      title: 'Recovery scam red flags',
      intro: 'After a loss, you may be contacted by people promising to get your money back. Many of them are scammers.',
      steps: [
        'They ask for an up-front fee, a “tax” or a “release charge” before you get your money.',
        'They guarantee results, or claim special access to banks, blockchains or law enforcement.',
        'They ask you to open an account with them, deposit funds or install remote-access software.',
        'They contact you first, often by social media, messaging apps or cold calls.',
      ],
      rules: [
        'Official agencies and regulators do not charge to help you get money back.',
        'If in doubt, hang up and call your bank using the number on your card.',
      ],
    },
  ],
  stepsTitle: 'Our simple 4 step process',
  stepsSubtitle: 'How almost every dispute works',
  steps: [
    { title: 'Gather Evidence', text: 'Receipts, statements, messages and screenshots, with dates.' },
    { title: 'Contact the Merchant', text: 'Give them a fair chance to put it right, in writing.' },
    { title: 'Go to Your Bank', text: 'Ask your bank or card provider to dispute the payment.' },
    { title: 'Escalate if Needed', text: 'Use the free ombudsman or regulator if you are still unhappy.' },
  ],
  reportTitle: 'Where to report and complain',
  reportText:
    'Always start with your own bank or card provider. These official services are free. Check each one’s website for its exact process.',
  report: [
    {
      title: 'United States',
      color: '#3c52ff',
      items: [
        { label: 'Your bank or card issuer' },
        { label: 'FTC: ReportFraud.ftc.gov', href: 'https://reportfraud.ftc.gov/' },
        { label: 'CFPB complaints', href: 'https://www.consumerfinance.gov/complaint/' },
        { label: 'FBI IC3 (online fraud)', href: 'https://www.ic3.gov/' },
        { label: 'Your State Attorney General' },
      ],
    },
    {
      title: 'United Kingdom',
      color: '#22c55e',
      items: [
        { label: 'Your bank or card provider' },
        { label: 'Financial Ombudsman Service', href: 'https://www.financial-ombudsman.org.uk/' },
        { label: 'Police fraud reporting service' },
        { label: 'Citizens Advice consumer helpline', href: 'https://www.citizensadvice.org.uk/' },
      ],
    },
    {
      title: 'European Union',
      color: '#f59e0b',
      items: [
        { label: 'Your bank or card provider' },
        { label: 'European Consumer Centres (cross-border)', href: 'https://commission.europa.eu/live-work-travel-eu/consumer-rights-and-complaints/resolve-your-consumer-complaint/european-consumer-centres-network-ecc-net_en' },
        { label: 'FIN-NET (financial disputes)', href: 'https://finance.ec.europa.eu/consumer-finance-and-payments/retail-financial-services/financial-dispute-resolution-network-fin-net_en' },
        { label: 'Your national consumer authority' },
      ],
    },
    {
      title: 'Canada',
      color: '#ec4899',
      items: [
        { label: 'Your bank or card issuer' },
        { label: 'Canadian Anti-Fraud Centre', href: 'https://antifraudcentre-centreantifraude.ca/' },
        { label: 'OBSI (banking ombudsman)', href: 'https://www.obsi.ca/' },
        { label: 'Financial Consumer Agency of Canada', href: 'https://www.canada.ca/en/financial-consumer-agency.html' },
      ],
    },
    {
      title: 'Australia',
      color: '#8b5cf6',
      items: [
        { label: 'Your bank or card issuer' },
        { label: 'AFCA (financial complaints)', href: 'https://www.afca.org.au/' },
        { label: 'Scamwatch (ACCC)', href: 'https://www.scamwatch.gov.au/' },
        { label: 'ReportCyber', href: 'https://www.cyber.gov.au/report-and-recover/report' },
      ],
    },
    {
      title: 'Crypto & Other',
      color: '#06b6d4',
      items: [
        { label: 'The exchange or platform you used' },
        { label: 'Your local police' },
        { label: 'Your national fraud reporting service' },
        { label: 'Ignore “fund tracing” offers that charge fees' },
      ],
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  Tools                                                             */
/* ------------------------------------------------------------------ */
export const letterTool = {
  title: 'Dispute Letter Builder',
  text: 'Fill in a few details and get a clear, polite dispute letter you can send to a merchant or your bank.',
  features: [
    { title: 'Runs in your browser', text: 'Nothing you type is sent to us or stored.' },
    { title: 'Copy, print or download', text: 'Use it by email, post or your bank’s secure messages.' },
    { title: 'No card numbers needed', text: 'Never include full card numbers or PINs in a letter.' },
  ],
  reasons: [
    'Goods or services not received',
    'Item not as described or faulty',
    'Charged twice / duplicate charge',
    'Charged the wrong amount',
    'Charged after I cancelled',
    'Refund promised but not received',
    'Payment I did not authorise',
  ],
  methods: ['Credit card', 'Debit card', 'Bank transfer', 'PayPal / digital wallet', 'Other'],
}

export const deadlineTool = {
  title: 'Deadline Checker',
  text: 'Enter a date and how you paid to see the typical time limits that may apply. Always confirm with your provider.',
  features: [
    { icon: 'clock', label: 'Typical time limits' },
    { icon: 'globe', label: 'US, UK & general rules' },
    { icon: 'shield', label: 'Nothing is stored' },
    { icon: 'phone', label: 'Works on mobile' },
  ],
}

/* ------------------------------------------------------------------ */
/*  Contact                                                           */
/* ------------------------------------------------------------------ */
export const contactPage = {
  titleWhite: 'Feel free to',
  titleGradient: 'get in touch',
  text: 'Questions about a guide, a tool or something we got wrong? Send us a message. We can’t act on your case, but we’ll point you in the right direction.',
  formTitle: 'Leave your message',
  infoTitle: ['Don’t hesitate to', 'contact us'],
  safety: 'Never send card numbers, PINs, passwords or bank logins, to us or to anyone who contacts you.',
}

/* ------------------------------------------------------------------ */
/*  Terms & Conditions                                                */
/* ------------------------------------------------------------------ */
// Have these reviewed by a qualified legal professional, then set
// `termsAreTemplate` to false to hide the notice.
export const termsAreTemplate = true
export const termsUpdated = 'November 2026'
export const termsIntro = 'How this site works, what it is and isn’t, and how we handle your data.'

export const terms = [
  {
    id: 'about',
    title: '1. What RefundRight Is',
    body: [
      'RefundRight is a free information website. We publish general guides and simple tools about refunds, payment disputes and consumer complaints.',
      'We are not a bank, law firm, financial adviser or recovery service. We do not act for you, contact merchants or banks on your behalf, hold money or process payments.',
    ],
  },
  {
    id: 'advice',
    title: '2. Not Legal or Financial Advice',
    body: [
      'Our content is general information and may not reflect the rules that apply to you. Laws, card-network rules and bank policies change and vary by country. Always check with your bank, card provider or a qualified professional before relying on it.',
    ],
  },
  {
    id: 'fees',
    title: '3. No Fees',
    body: [
      'Our guides and tools are free. We will never ask you to pay a fee, deposit money or open an account. If anyone claiming to represent RefundRight asks you for money, it is a scam.',
    ],
  },
  {
    id: 'privacy',
    title: '4. Privacy and Your Data',
    body: [
      'Our Dispute Letter Builder and Deadline Checker run entirely in your browser. What you type into them is not sent to us or stored by us.',
      'If you contact us, we use your name, email address and message only to reply. We do not sell or share them. You can ask us to delete your messages at any time.',
      'Please never send us card numbers, PINs, passwords or bank logins.',
    ],
  },
  {
    id: 'links',
    title: '5. External Links',
    body: [
      'We link to official agencies and other websites for your convenience. We are not responsible for their content, and you should follow their own instructions and terms.',
    ],
  },
  {
    id: 'liability',
    title: '6. Limitation of Liability',
    body: [
      'We work to keep our content accurate and up to date, but we cannot guarantee it. To the fullest extent permitted by law, we are not liable for any loss arising from use of this website or reliance on its content.',
    ],
  },
  {
    id: 'law',
    title: '7. Governing Law',
    body: ['These terms are governed by the laws of [Your State / Country].'],
  },
  {
    id: 'changes',
    title: '8. Changes to These Terms',
    body: ['We may update these terms from time to time. The latest version will always be on this page with the date it was last updated.'],
  },
]
