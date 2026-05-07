import { Background } from './components/Background'
import { ScrollProgress } from './components/ScrollProgress'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ValueDashboard } from './components/ValueDashboard'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { ProjectDetailPage, ProjectsArchivePage } from './components/ProjectPages'
import { CodexElementPicker } from './dev/CodexElementPicker'

export default function App() {
  const pathname = typeof window === 'undefined' ? '/' : window.location.pathname
  const projectId = pathname.match(/^\/projetos\/([^/]+)$/)?.[1]
  const isProjectsArchive = pathname === '/projetos'

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-bg text-ink">
      <Background />
      <ScrollProgress />
      <Navbar />
      {projectId ? (
        <ProjectDetailPage projectId={decodeURIComponent(projectId)} />
      ) : isProjectsArchive ? (
        <ProjectsArchivePage />
      ) : (
        <main className="relative z-10 w-full max-w-full overflow-x-hidden">
          <Hero />
          <About />
          <ValueDashboard />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
      )}
      <div className="relative z-10">
        <Footer />
      </div>
      <FloatingWhatsApp />
      {import.meta.env.DEV ? <CodexElementPicker /> : null}
    </div>
  )
}
