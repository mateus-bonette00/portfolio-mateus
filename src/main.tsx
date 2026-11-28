import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProposalShareHead } from './components/proposal/ProposalShareHead'
import './index.css'
import { getRouteInfo } from './i18n/routes'
import { applyDocumentHead, resolveSeoPage } from './seo'

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
  applyDocumentHead(resolveSeoPage(window.location.pathname))
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {proposalSlug ? <ProposalShareHead slug={decodeURIComponent(proposalSlug)} /> : null}
    <App />
  </React.StrictMode>,
)
