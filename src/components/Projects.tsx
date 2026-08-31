import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUp, ArrowUpRight, Cpu, Sparkles } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { PROJECTS, UI } from '../data/portfolio'
import type { Project } from '../types'
import { getLocalizedHref } from '../i18n/routes'

const HOME_VISIBLE_PROJECTS = 6
const visibleProjects = PROJECTS.slice(0, HOME_VISIBLE_PROJECTS)

function getDeviceType(project: Project): 'desktop' | 'mobile' {
  if (project.deviceType) return project.deviceType

  const hasOnlyMobileImage = Boolean(project.mobileImage && !project.desktopImage)
  const mobileTag = project.tags.some((tag) =>
    /mobile|flutter|android|ios|react native|swift|kotlin/i.test(tag),
  )

  return hasOnlyMobileImage || mobileTag ? 'mobile' : 'desktop'
}

function getCoverImage(project: Project) {
  return project.image ?? project.desktopImage ?? project.videoPoster ?? project.mobileImage
}

function getCleanTitle(project: Project) {
  return project.title.replace(/^Em breve:\s*/i, '').trim()
}

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

const PROMPT_STOP_WORDS = new Set([
  'de', 'do', 'da', 'dos', 'das', 'o', 'a', 'os', 'as', 'e', 'em', 'no', 'na', 'um', 'uma',
  'com', 'que', 'qual', 'quais', 'usa', 'usam', 'sobre', 'para', 'me', 'mostra', 'mostre',
  'projeto', 'projetos', 'case', 'cases', 'tem', 'ha',
  'the', 'of', 'and', 'for', 'with', 'show', 'which', 'use', 'uses', 'using', 'about',
  'project', 'projects', 'has', 'have', 'an', 'in', 'on', 'to', 'is', 'are', 'what',
])

const PROMPT_SYNONYMS: Record<string, string> = {
  ia: 'ai',
  inteligencia: 'ai',
  artificial: 'ai',
  agente: 'agent',
  agentes: 'agents',
  dado: 'data',
  dados: 'data',
  automacao: 'automation',
  automatizacao: 'automation',
  comercio: 'commerce',
  financeiro: 'finance',
  financas: 'finance',
  aprendizado: 'learning',
  llm: 'llms',
  scraping: 'playwright',
  bot: 'bot',
  analise: 'analysis',
}

export function matchesProject(project: Project, query: string) {
  const tokens = normalizeText(query)
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length >= 2 && !PROMPT_STOP_WORDS.has(token))
    .map((token) => (token.length > 3 && token.endsWith('s') ? token.slice(0, -1) : token))
    .map((token) => PROMPT_SYNONYMS[token] ?? token)
  if (tokens.length === 0) return true
  const blob = normalizeText(
    [getCleanTitle(project), project.description, ...project.tags].join(' '),
  )
  return tokens.every((token) => blob.includes(token))
}

function useTypewriter(text: string, disabled: boolean) {
  const [visibleChars, setVisibleChars] = useState(disabled ? text.length : 0)

  useEffect(() => {
    if (disabled) {
      setVisibleChars(text.length)
      return
    }
    setVisibleChars(0)
    const timer = window.setInterval(() => {
      setVisibleChars((current) => {
        if (current >= text.length) {
          window.clearInterval(timer)
          return current
        }
        return current + 3
      })
    }, 22)
    return () => window.clearInterval(timer)
  }, [text, disabled])

  const done = visibleChars >= text.length
  return { output: text.slice(0, Math.min(visibleChars, text.length)), done }
}

export function Projects() {
  return (
    <section id="projects" className="section overflow-hidden">
      <div className="container-1200 relative z-10">
        <SectionTitle
          eyebrow={UI.projects.eyebrow}
          title={
            <>
              <span className="text-gradient-static">{UI.projects.titleStart}</span>
              <span className="text-gradient">{UI.projects.titleAccent}</span>
              <span className="text-gradient-static">{UI.projects.titleEnd}</span>
            </>
          }
          description={UI.projects.description}
          descriptionClassName="max-w-3xl projects-section-description"
        />

        <ProjectsConsole projects={visibleProjects} />

        <div className="mt-10 flex w-full justify-center">
          <motion.a
            href={getLocalizedHref('/projetos')}
            className="projects-view-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="projects-view-all__orb" aria-hidden />
            <span className="projects-view-all__text">{UI.projects.viewAll}</span>
            <ArrowUpRight
              size={30}
              className="projects-view-all__icon relative z-[2] shrink-0"
              aria-hidden
            />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

function ProjectsConsole({ projects }: { projects: Project[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [query, setQuery] = useState('')
  const [lastPrompt, setLastPrompt] = useState('')
  const shellRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const reducedMotion = useReducedMotion() ?? false

  const selectedProject = projects[selectedIndex]
  const title = getCleanTitle(selectedProject)
  const cover = getCoverImage(selectedProject)
  const isMobileShot = getDeviceType(selectedProject) === 'mobile'
  const detailsHref = getLocalizedHref(`/projetos/${selectedProject.id}`)
  const { output, done } = useTypewriter(selectedProject.description, reducedMotion)
  const visibleTags = selectedProject.tags.slice(0, 6)
  const hiddenTagsCount = Math.max(selectedProject.tags.length - visibleTags.length, 0)
  const strings = UI.projects.console

  useEffect(() => {
    const list = listRef.current
    const item = tabRefs.current[selectedIndex]
    if (!list || !item || list.scrollWidth <= list.clientWidth) return
    const target = item.offsetLeft - (list.clientWidth - item.clientWidth) / 2
    list.scrollTo({ left: Math.max(target, 0), behavior: reducedMotion ? 'auto' : 'smooth' })
  }, [selectedIndex, reducedMotion])

  function select(index: number) {
    setSelectedIndex(index)
  }

  function handleListKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const lastIndex = projects.length - 1
    const current = selectedIndex
    let next: number | null = null
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = current === lastIndex ? 0 : current + 1
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = current === 0 ? lastIndex : current - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = lastIndex
    if (next === null) return
    event.preventDefault()
    select(next)
    tabRefs.current[next]?.focus()
  }

  const matchCount = projects.filter((item) => matchesProject(item, query)).length

  function handlePromptSubmit(promptText: string) {
    const index = projects.findIndex((item) => matchesProject(item, promptText))
    if (index === -1) return
    setSelectedIndex(index)
    setLastPrompt(promptText.trim())
  }

  return (
    <motion.div
      ref={shellRef}
      className="ai-console"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="ai-console__bar">
        <span className="ai-console__dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <span className="ai-console__window-title">{strings.windowTitle}</span>
        <span className="ai-console__badge" aria-hidden>
          <span className="ai-console__pulse" />
          {strings.statusReady}
        </span>
      </div>

      <div className="ai-console__body">
        <div
          ref={listRef}
          className="ai-console__list"
          role="tablist"
          aria-label={strings.listAria}
          aria-orientation="vertical"
          onKeyDown={handleListKeyDown}
        >
          <p className="ai-console__hint" aria-hidden>
            {strings.hint}
          </p>
          {projects.map((item, index) => {
            const isActive = index === selectedIndex
            return (
              <button
                key={item.id}
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                type="button"
                role="tab"
                id={`ai-console-tab-${item.id}`}
                aria-selected={isActive}
                aria-controls="ai-console-output"
                tabIndex={isActive ? 0 : -1}
                className="ai-console__item"
                data-active={isActive ? 'true' : undefined}
                data-dim={query.trim() && !matchesProject(item, query) ? 'true' : undefined}
                data-cursor="hover"
                onClick={() => select(index)}
              >
                <span className="ai-console__item-caret" aria-hidden>
                  {isActive ? '▸' : ' '}
                </span>
                <span className="ai-console__item-number" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="ai-console__item-name">{getCleanTitle(item)}</span>
                {item.year && <span className="ai-console__item-year">{item.year}</span>}
              </button>
            )
          })}
        </div>

        <div
          id="ai-console-output"
          role="tabpanel"
          aria-labelledby={`ai-console-tab-${selectedProject.id}`}
          aria-label={strings.outputAria}
          className="ai-console__output"
        >
          <div key={`media-${selectedProject.id}`} className="ai-console__media" aria-hidden>
            {cover ? (
              <>
                {isMobileShot && (
                  <img className="ai-console__backdrop" src={cover} alt="" draggable={false} />
                )}
                <img
                  className="ai-console__cover"
                  data-fit={isMobileShot ? 'contain' : 'cover'}
                  src={cover}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </>
            ) : (
              <span className="ai-console__void">
                <Cpu size={40} strokeWidth={1.4} />
              </span>
            )}
            <span className="ai-console__scan" />
          </div>

          <div key={`text-${selectedProject.id}`} className="ai-console__readout">
            <p className="ai-console__cmdline" aria-hidden>
              <span className="ai-console__prompt">$</span> {strings.runPrefix} ./{selectedProject.id}
              {selectedProject.year ? ` --year ${selectedProject.year}` : ''}
              {lastPrompt ? ` --prompt "${lastPrompt}"` : ''}
            </p>
            <h3 className="ai-console__name">{title}</h3>
            <p className="ai-console__typed" aria-hidden>
              {output}
              {!done && <span className="ai-console__caret" />}
            </p>
            <p className="sr-only">{selectedProject.description}</p>

            <ul className="ai-console__flags" aria-label={UI.common.projectTechAria(title)}>
              {visibleTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
              {hiddenTagsCount > 0 && <li>+{hiddenTagsCount}</li>}
            </ul>

            <div className="ai-console__actions">
              <a href={detailsHref} className="btn-primary" data-cursor="hover">
                {strings.openCase}
                <ArrowUpRight size={16} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="ai-console__promptwrap">
        <PromptBar
          value={query}
          matchCount={matchCount}
          onChange={setQuery}
          onSubmit={handlePromptSubmit}
        />
      </div>

      <div className="ai-console__status" aria-hidden>
        <span className="ai-console__status-item">
          <span className="ai-console__pulse" />
          {strings.statusReady}
        </span>
        <span className="ai-console__status-item">{strings.statusLoaded(projects.length)}</span>
        <span className="ai-console__status-item ai-console__status-item--model">
          {strings.statusModel}
        </span>
      </div>
    </motion.div>
  )
}

export function ConsoleProjectCard({ project, index }: { project: Project; index: number }) {
  const title = getCleanTitle(project)
  const detailsHref = getLocalizedHref(`/projetos/${project.id}`)
  const cover = getCoverImage(project)
  const isMobileShot = getDeviceType(project) === 'mobile'
  const number = String(index + 1).padStart(2, '0')
  const visibleTags = project.tags.slice(0, 4)
  const hiddenTagsCount = Math.max(project.tags.length - visibleTags.length, 0)

  return (
    <motion.a
      href={detailsHref}
      className="console-card"
      role="listitem"
      data-cursor="hover"
      aria-label={UI.common.accessProjectAria(title)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="console-card__bar" aria-hidden>
        <span className="console-card__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="console-card__file">case-{number}.md</span>
        {project.year && <span className="console-card__year">{project.year}</span>}
      </span>

      <span className="console-card__media" aria-hidden>
        {cover ? (
          <>
            {isMobileShot && (
              <img className="console-card__backdrop" src={cover} alt="" draggable={false} />
            )}
            <img
              className="console-card__cover"
              data-fit={isMobileShot ? 'contain' : 'cover'}
              src={cover}
              alt=""
              loading={index < 3 ? 'eager' : 'lazy'}
              decoding="async"
              draggable={false}
            />
          </>
        ) : (
          <span className="console-card__void">
            <Cpu size={36} strokeWidth={1.4} />
          </span>
        )}
        <span className="console-card__scan" />
      </span>

      <span className="console-card__body">
        <span className="console-card__cmd" aria-hidden>
          $ cat ./{project.id}
        </span>
        <h3 className="console-card__title">{title}</h3>
        <p className="console-card__desc">{project.description}</p>
        <ul className="console-card__flags" aria-label={UI.common.projectTechAria(title)}>
          {visibleTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
          {hiddenTagsCount > 0 && <li>+{hiddenTagsCount}</li>}
        </ul>
        <span className="console-card__cta">
          {UI.common.viewDetails}
          <ArrowUpRight size={14} strokeWidth={2.4} aria-hidden />
        </span>
      </span>
    </motion.a>
  )
}

type PromptBarProps = {
  value: string
  matchCount: number
  onChange: (value: string) => void
  onSubmit: (query: string) => void
}

export function PromptBar({ value, matchCount, onChange, onSubmit }: PromptBarProps) {
  const strings = UI.projects.console
  const reducedMotion = useReducedMotion() ?? false
  const inputRef = useRef<HTMLInputElement>(null)
  const typingTimer = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (typingTimer.current) window.clearInterval(typingTimer.current)
    },
    [],
  )

  function stopTyping() {
    if (typingTimer.current) {
      window.clearInterval(typingTimer.current)
      typingTimer.current = null
    }
  }

  function playSuggestion(suggestion: string) {
    stopTyping()
    inputRef.current?.focus()
    if (reducedMotion) {
      onChange(suggestion)
      onSubmit(suggestion)
      return
    }
    onChange('')
    let visible = 0
    typingTimer.current = window.setInterval(() => {
      visible += 1
      onChange(suggestion.slice(0, visible))
      if (visible >= suggestion.length) {
        stopTyping()
        onSubmit(suggestion)
      }
    }, 42)
  }

  const hasQuery = value.trim().length > 0
  const isEmpty = hasQuery && matchCount === 0

  return (
    <div className="ai-prompt">
      <form
        className="ai-prompt__bar"
        onSubmit={(event) => {
          event.preventDefault()
          stopTyping()
          onSubmit(value)
        }}
      >
        <span className="ai-prompt__symbol" aria-hidden>
          ▸
        </span>
        <input
          ref={inputRef}
          value={value}
          onChange={(event) => {
            stopTyping()
            onChange(event.target.value)
          }}
          type="text"
          inputMode="search"
          autoComplete="off"
          spellCheck={false}
          enterKeyHint="send"
          className="ai-prompt__input"
          placeholder={strings.promptPlaceholder}
          aria-label={strings.promptAria}
        />
        <button
          type="submit"
          className="ai-prompt__send"
          aria-label={strings.promptSend}
          data-cursor="hover"
          disabled={!hasQuery}
        >
          <ArrowUp size={17} strokeWidth={2.6} aria-hidden />
        </button>
      </form>

      <div className="ai-prompt__meta">
        <span className="ai-prompt__chips" role="group" aria-label={strings.suggestionsLabel}>
          <Sparkles size={13} strokeWidth={2.2} className="ai-prompt__spark" aria-hidden />
          {strings.suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              className="ai-prompt__chip"
              data-cursor="hover"
              onClick={() => playSuggestion(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </span>
        <span
          className="ai-prompt__feedback"
          data-state={isEmpty ? 'empty' : undefined}
          aria-live="polite"
        >
          {hasQuery ? (isEmpty ? strings.promptEmpty(value.trim()) : strings.promptMatches(matchCount)) : ''}
        </span>
      </div>
    </div>
  )
}
