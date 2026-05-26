import { lazy, Suspense } from 'react'
import { Background } from './components/Background'
import { ScrollProgress } from './components/ScrollProgress'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { getLocalizedPath, getRouteInfo, setStoredLocale } from './i18n/routes'

const About = lazy(() => import('./components/About').then((module) => ({ default: module.About })))
const ValueDashboard = lazy(() =>
  import('./components/ValueDashboard').then((module) => ({ default: module.ValueDashboard })),
)
const Skills = lazy(() => import('./components/Skills').then((module) => ({ default: module.Skills })))
const Experience = lazy(() =>
  import('./components/Experience').then((module) => ({ default: module.Experience })),
)
const Projects = lazy(() => import('./components/Projects').then((module) => ({ default: module.Projects })))
const Education = lazy(() => import('./components/Education').then((module) => ({ default: module.Education })))
const Contact = lazy(() => import('./components/Contact').then((module) => ({ default: module.Contact })))
const Footer = lazy(() => import('./components/Footer').then((module) => ({ default: module.Footer })))
const ProjectDetailPage = lazy(() =>
  import('./components/ProjectPages').then((module) => ({ default: module.ProjectDetailPage })),
)
const ProjectsArchivePage = lazy(() =>
  import('./components/ProjectPages').then((module) => ({ default: module.ProjectsArchivePage })),
)
const LinksPage = lazy(() =>
  import('./components/LinksPage').then((module) => ({ default: module.LinksPage })),
)

function LazyFallback() {
  return <div className="min-h-24" aria-hidden="true" />
}

export default function App() {
  const pathname = typeof window === 'undefined' ? '/' : window.location.pathname
  const { locale, explicitLocale, internalPath } = getRouteInfo(pathname)

  if (typeof window !== 'undefined') {
    setStoredLocale(locale)
    if (!explicitLocale) {
      const localizedPath = `${getLocalizedPath(pathname, locale)}${window.location.hash}`
      window.history.replaceState(null, '', localizedPath)
    }
  }

  const projectId = internalPath.match(/^\/projetos\/([^/]+)$/)?.[1]
  const isProjectsArchive = internalPath === '/projetos'
  const isLinksPage = internalPath === '/links-contatos'

  if (isLinksPage) {
    return (
      <div className="relative isolate min-h-screen overflow-x-hidden bg-bg text-ink">
        <Background />
        <ScrollProgress />
        <Suspense fallback={<LazyFallback />}>
          <LinksPage />
        </Suspense>
        <FloatingWhatsApp variant="static" />
      </div>
    )
  }

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-bg text-ink">
      <Background />
      <ScrollProgress />
      <Navbar />
      {projectId ? (
        <Suspense fallback={<LazyFallback />}>
          <ProjectDetailPage projectId={decodeURIComponent(projectId)} />
        </Suspense>
      ) : isProjectsArchive ? (
        <Suspense fallback={<LazyFallback />}>
          <ProjectsArchivePage />
        </Suspense>
      ) : (
        <main className="relative z-10 w-full max-w-full overflow-x-hidden">
          <Hero />
          <Suspense fallback={<LazyFallback />}>
            <Projects />
            <Skills />
            <Experience />
            <About />
            <ValueDashboard />
            <Education />
            <Contact />
          </Suspense>
        </main>
      )}
      <div className="relative z-10">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
      <FloatingWhatsApp />

    </div>
  )
}
