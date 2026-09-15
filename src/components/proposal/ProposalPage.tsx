import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, CircleDollarSign, HeartHandshake, MessageCircle, PackageCheck, Route, Sparkles, TrendingUp } from 'lucide-react'
import { PROFILE } from '../../data/portfolio'
import { getProposalBySlug } from '../../data/proposals'
import { useProposalScroll } from '../../hooks/useProposalScroll'
import { getLocalizedHref } from '../../i18n/routes'
import { ThemeToggle } from '../ThemeToggle'
import {
  ProposalAbout,
  ProposalCTA,
  ProposalDeliverables,
  ProposalFooter,
  ProposalHero,
  ProposalOpportunity,
  ProposalPricing,
  ProposalProcess,
  ProposalSolution,
  ProposalTransform,
} from './ProposalSections'

function useNoIndex() {
  useEffect(() => {
    const selector = 'meta[name="robots"]'
    const existing = document.querySelector<HTMLMetaElement>(selector)
    const previous = existing?.content
    let created = false
    let meta = existing
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'robots'
      document.head.appendChild(meta)
      created = true
    }
    meta.content = 'noindex,nofollow'
    return () => {
      if (created) meta?.remove()
      else if (previous !== undefined && meta) meta.content = previous
    }
  }, [])
}

const MINI_NAV = [
  { href: '#sobre', label: 'Sobre', Icon: HeartHandshake },
  { href: '#transformacao', label: 'Visão', Icon: TrendingUp },
  { href: '#solucao', label: 'Solução', Icon: Sparkles },
  { href: '#escopo', label: 'Escopo', Icon: PackageCheck },
  { href: '#processo', label: 'Processo', Icon: Route },
  { href: '#investimento', label: 'Investimento', Icon: CircleDollarSign },
  { href: '#contato', label: 'Contato', Icon: MessageCircle },
]

function useProposalActiveSection() {
  const [active, setActive] = useState(MINI_NAV[0]!.href)
  const scrollLockRef = useRef(false)

  useEffect(() => {
    const sections = MINI_NAV.map((item) => {
      const id = item.href.replace('#', '')
      const element = document.getElementById(id)
      return element ? { href: item.href, element } : null
    }).filter(Boolean) as Array<{ href: string; element: HTMLElement }>

    if (sections.length === 0) return

    const onScroll = () => {
      if (scrollLockRef.current) return
      const marker = window.scrollY + Math.min(window.innerHeight * 0.28, 180)
      let current = sections[0]!.href
      for (const section of sections) {
        if (section.element.offsetTop <= marker) current = section.href
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const select = (href: string) => {
    setActive(href)
    scrollLockRef.current = true
    window.setTimeout(() => {
      scrollLockRef.current = false
    }, 1200)
  }

  return { active, select }
}

export function ProposalPage({ slug }: { slug: string }) {
  const proposal = getProposalBySlug(slug)
  const mainRef = useRef<HTMLElement>(null)
  const { active, select } = useProposalActiveSection()
  useNoIndex()
  useProposalScroll(mainRef)

  useEffect(() => {
    if (!proposal) return
    const previous = document.title
    document.title = `Proposta · ${proposal.clientLabel}`
    return () => {
      document.title = previous
    }
  }, [proposal])

  if (!proposal) {
    return (
      <main className="relative z-10 min-h-[70svh] w-full max-w-full overflow-x-clip pt-28">
        <div className="container-1200 flex flex-col items-center text-center">
          <a href={getLocalizedHref('/')} className="btn-ghost">
            <ArrowLeft size={16} />
            Voltar ao portfólio
          </a>
          <h1 className="mt-8 font-display text-4xl font-bold text-ink">Proposta não encontrada</h1>
          <p className="mt-3 max-w-xl text-ink-dim">
            Verifique o link recebido. Placeholder temporário.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main ref={mainRef} className="proposal-page relative z-10 w-full max-w-full overflow-x-clip">
      <div className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
        <nav
          aria-label="Navegação da proposta"
          className="proposal-nav relative flex w-full max-w-4xl items-center justify-center rounded-full py-2 pl-2 pr-11 transition-all duration-200 sm:pl-3 sm:pr-14"
        >
          <div className="flex max-w-full items-center justify-center gap-0 overflow-x-auto sm:gap-0.5">
            {MINI_NAV.map(({ href, label, Icon }) => {
              const isActive = active === href
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => select(href)}
                  title={label}
                  aria-label={label}
                  className={`nav-link relative inline-flex shrink-0 items-center justify-center gap-1 rounded-xl border px-2 py-2 text-[11px] font-semibold transition-all duration-300 sm:gap-1.5 sm:px-2.5 sm:text-xs md:px-3 ${
                    isActive
                      ? 'nav-link-active'
                      : 'border-transparent text-ink-dim hover:text-ink dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="proposal-nav-active"
                      className="absolute inset-0 rounded-xl bg-accent/10 dark:bg-accent/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon size={14} strokeWidth={2.2} className="relative shrink-0" />
                  <span className="relative hidden truncate min-[420px]:inline">{label}</span>
                </a>
              )
            })}
          </div>
          <div className="absolute right-2 sm:right-2.5">
            <ThemeToggle />
          </div>
        </nav>
      </div>

      <ProposalHero proposal={proposal} />
      <ProposalAbout proposal={proposal} />
      <ProposalTransform proposal={proposal} />
      <ProposalOpportunity proposal={proposal} />
      <ProposalSolution proposal={proposal} />
      <ProposalDeliverables proposal={proposal} />
      <ProposalProcess proposal={proposal} />
      <ProposalPricing proposal={proposal} />
      <ProposalCTA proposal={proposal} whatsappHref={PROFILE.social.whatsapp} />
      <ProposalFooter clientLabel={proposal.clientLabel} />
    </main>
  )
}
