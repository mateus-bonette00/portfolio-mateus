import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data/portfolio'

export function ProjectDetailPage({ projectId }: { projectId: string }) {
  const project = PROJECTS.find((item) => item.id === projectId)

  if (!project) {
    return (
      <main className="relative z-10 min-h-[70svh] pt-36">
        <div className="container-1200">
          <a href="/#projects" className="btn-ghost">
            <ArrowLeft size={16} />
            Voltar para projetos
          </a>
          <div className="mt-10 max-w-3xl">
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-ink-mute">
              Projeto não encontrado
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Esse projeto ainda não existe.
            </h1>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="relative z-10 min-h-[70svh] pt-36">
      <section className="section">
        <div className="container-1200">
          <a href="/#projects" className="btn-ghost">
            <ArrowLeft size={16} />
            Voltar para projetos
          </a>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-ink-mute">
                Projeto
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-gradient-static sm:text-6xl">
                {project.title.replace(/^Em breve:\s*/i, '')}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-dim">
                {project.description}
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <article className="liquid-card rounded-2xl p-6 sm:p-8">
              <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-ink-mute">
                Conteúdo em construção
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold text-ink">
                Espaço reservado para o case completo.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim sm:text-base">
                Aqui pode entrar problema, solução, imagens, resultado, links, aprendizados e qualquer material específico desse projeto.
              </p>
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
                  Abrir repositório
                  <ArrowUpRight size={16} />
                </a>
              )}
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export function ProjectsArchivePage() {
  return (
    <main className="relative z-10 min-h-[70svh] pt-36">
      <section className="section">
        <div className="container-1200">
          <a href="/#projects" className="btn-ghost">
            <ArrowLeft size={16} />
            Voltar para o portfólio
          </a>

          <div className="mt-10">
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-ink-mute">
              Todos os projetos
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-gradient-static sm:text-6xl">
              Projetos cadastrados.
            </h1>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={project.link ?? `/projetos/${project.id}`}
                className="liquid-card liquid-hover rounded-2xl p-6"
              >
                <span className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-ink-mute">
                  {project.year ?? '2025'}
                </span>
                <h2 className="mt-3 font-display text-xl font-bold text-ink">
                  {project.title.replace(/^Em breve:\s*/i, '')}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
