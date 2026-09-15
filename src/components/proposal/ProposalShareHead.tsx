import { useEffect } from 'react'
import { getProposalBySlug } from '../../data/proposals'

function setMetaContent(kind: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${kind}="${key}"]`
  let meta = document.querySelector<HTMLMetaElement>(selector)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(kind, key)
    document.head.appendChild(meta)
  }
  const previous = meta.content
  meta.content = content
  return () => {
    meta!.content = previous
  }
}

export function ProposalShareHead({ slug }: { slug: string }) {
  const proposal = getProposalBySlug(slug)

  useEffect(() => {
    if (!proposal) return
    const title = `Proposta ${proposal.clientLabel}`
    const description = proposal.heroDescription
    const url = `${window.location.origin}${window.location.pathname.replace(/\/$/, '')}`
    const previousTitle = document.title

    const applyTitle = () => {
      if (document.title !== title) document.title = title
    }

    const restorers = [
      setMetaContent('name', 'description', description),
      setMetaContent('property', 'og:title', title),
      setMetaContent('property', 'og:description', description),
      setMetaContent('property', 'og:url', url),
      setMetaContent('name', 'twitter:title', title),
      setMetaContent('name', 'twitter:description', description),
    ]
    applyTitle()

    const titleEl = document.querySelector('title')
    const observer = titleEl
      ? new MutationObserver(applyTitle)
      : null
    observer?.observe(titleEl!, { childList: true })

    return () => {
      observer?.disconnect()
      document.title = previousTitle
      for (const restore of restorers) restore()
    }
  }, [proposal])

  return null
}
