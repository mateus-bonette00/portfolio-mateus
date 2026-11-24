import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProposalShareHead } from './components/proposal/ProposalShareHead'
import './index.css'
import { UI } from './data/portfolio'
import { getCurrentLocale, getLocalizedPath, getRouteInfo } from './i18n/routes'

const routeInfo = getRouteInfo()
const locale = routeInfo.locale
document.documentElement.lang = locale === 'en' ? 'en' : 'pt-BR'

const nativeReplaceState = window.history.replaceState.bind(window.history)
window.history.replaceState = (data, unused, url) => {
  if (typeof url === 'string') {
    url = url.replace(/^\/(?:pt-br|pt|en)(\/proposta\/)/, '$1')
  }
  return nativeReplaceState(data, unused, url)
}

const proposalSlug = routeInfo.internalPath.match(/^\/proposta\/([^/]+)$/)?.[1]
const isProposal = Boolean(proposalSlug)

if (proposalSlug) {
  const canonical = `/proposta/${decodeURIComponent(proposalSlug)}`
  const current = window.location.pathname.replace(/\/$/, '') || '/'
  if (current !== canonical) {
    window.history.replaceState(null, '', `${canonical}${window.location.hash}`)
  }
}

if (!isProposal) {
  document.title = UI.metadata.title

  const canonicalUrl = `https://www.mateusbonette.com.br${getLocalizedPath(window.location.pathname, locale)}`
  const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
  const ogLocale = document.querySelector<HTMLMetaElement>('meta[property="og:locale"]')
  const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
  const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
  const ogImageAlt = document.querySelector<HTMLMetaElement>('meta[property="og:image:alt"]')
  const twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')
  const twitterDescription = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')

  if (canonicalLink) canonicalLink.href = canonicalUrl
  if (ogUrl) ogUrl.content = canonicalUrl
  if (ogLocale) ogLocale.content = locale === 'en' ? 'en_US' : 'pt_BR'
  if (metaDescription) metaDescription.content = UI.metadata.description
  if (ogTitle) ogTitle.content = UI.metadata.ogTitle
  if (ogDescription) ogDescription.content = UI.metadata.description
  if (ogImageAlt) ogImageAlt.content = UI.metadata.imageAlt
  if (twitterTitle) twitterTitle.content = UI.metadata.ogTitle
  if (twitterDescription) twitterDescription.content = UI.metadata.description
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {proposalSlug ? <ProposalShareHead slug={decodeURIComponent(proposalSlug)} /> : null}
    <App />
  </React.StrictMode>,
)
