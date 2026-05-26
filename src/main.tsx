import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { UI } from './data/portfolio'
import { getCurrentLocale } from './i18n/routes'

const locale = getCurrentLocale()
document.documentElement.lang = locale === 'en' ? 'en' : 'pt-BR'
document.title = UI.metadata.title

const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')
const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
const ogImageAlt = document.querySelector<HTMLMetaElement>('meta[property="og:image:alt"]')
const twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')
const twitterDescription = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')

if (metaDescription) metaDescription.content = UI.metadata.description
if (ogTitle) ogTitle.content = UI.metadata.ogTitle
if (ogDescription) ogDescription.content = UI.metadata.description
if (ogImageAlt) ogImageAlt.content = UI.metadata.imageAlt
if (twitterTitle) twitterTitle.content = UI.metadata.ogTitle
if (twitterDescription) twitterDescription.content = UI.metadata.description

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
