export type ProposalTransform = {
  eyebrow: string
  title: string
  /** Parágrafos de abertura — o primeiro sai com peso maior */
  lead: string[]
  searchLabel: string
  searchQuery: string
  journeyIntro: string
  journey: string[]
  quote: string
  /** support[0..1] soltos na coluna; support[2] introduz os bullets */
  support: string[]
  bullets: string[]
  objectiveTitle: string
  objectiveText: string
  /** Fecho em marquee: "Mais visibilidade", "Mais autoridade"... */
  pillars: string[]
}

export type ProposalOpportunity = {
  eyebrow: string
  title: string
  body: string[]
  /** Frase de impacto: lead em ink + accent em gradiente */
  kickerLead: string
  kickerAccent: string
}

export type ProposalSolution = {
  eyebrow: string
  title: string
  site: {
    title: string
    paragraphs: string[]
    /** SEO / AEO / GEO — sigla em destaque + tagline + texto */
    features: Array<{ label: string; tagline: string; text: string }>
  }
  google: {
    title: string
    intro: string
    bullets: string[]
    /** Item de destaque (QR Code) — sai do grid e vira linha acentuada */
    qrHighlight: string
    goal: string
  }
  monthly: {
    title: string
    intro: string[]
    /** Cadeia de métricas: acessam → vêm → visitam → interesse → contato */
    funnel: string[]
    toolsNote: string
    tools: string[]
    improvementsIntro: string
    improvements: string[]
    closingLead: string
    /** Parte riscada ("Não criar e abandonar.") */
    closingMuted: string
    /** Parte em gradiente ("Criar, medir, entender...") */
    closingAccent: string
  }
}

export type ProposalDeliverables = {
  eyebrow: string
  title: string
  site: {
    number: string
    title: string
    badge: string
    items: string[]
    tags: string[]
  }
  google: {
    number: string
    title: string
    badge: string
    items: string[]
    qrHighlight: string
  }
  analytics: {
    number: string
    title: string
    badge: string
    items: string[]
    tools: string[]
  }
  evolution: {
    number: string
    title: string
    badge: string
    lead: string
    cycle: string[]
    outcome: string
  }
  domainNote: {
    label: string
    title: string
    subtitle: string
    lead: string
    exampleLabel: string
    exampleDomain: string
    exampleNote: string
    registerNote: string
    helpNote: string
    pricingTitle: string
    pricing: Array<{ period: string; price: string }>
    paymentNote: string
    disclaimer: string
    renewalNote: string
    ownershipTitle: string
    ownershipBody: string
  }
}

export type ProposalProcessStep = {
  number: string
  title: string
  day: string
  description: string
  items?: string[]
  note?: string
}

export type ProposalProcess = {
  eyebrow: string
  title: string
  lead: string
  steps: ProposalProcessStep[]
  scheduleSummary: {
    flow: string[]
    highlight: string
    subhighlight: string
    disclaimer: string
  }
}

export type ProposalPricingModule = {
  number: string
  title: string
  description: string
  price: string
  cadence?: string
}

export type ProposalPricing = {
  eyebrow: string
  title: string
  lead: string[]
  kicker: string
  modules: ProposalPricingModule[]
  special: {
    eyebrow: string
    title: string
    comboLabel: string
    setupFrom: string
    setupTo: string
    monthlyLead: string
    monthlyFrom: string
    monthlyTo: string
  }
  why: {
    title: string
    body: string[]
    quote: string
    close: string[]
    guarantees: string[]
  }
}

export type Proposal = {
  slug: string
  heroEyebrow: string
  heroTitle: string
  /** Segunda parte do H1 em gradiente (opcional). */
  heroTitleAccent?: string
  heroDescription: string
  clientLabel: string
  preparedBy: string
  aboutEyebrow: string
  aboutTitle: string
  aboutText: string
  aboutPhotoLabel: string
  aboutPhotoCaption: string
  aboutHighlights: Array<{ title: string; text: string }>
  transform: ProposalTransform
  opportunity: ProposalOpportunity
  solution: ProposalSolution
  deliverables: ProposalDeliverables
  process: ProposalProcess
  pricing: ProposalPricing
  ctaTitle: string
  ctaDescription: string
  ctaPrimaryLabel: string
  nextSteps: string[]
}
