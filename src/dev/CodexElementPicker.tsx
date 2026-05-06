import { useCallback, useEffect, useRef, useState } from 'react'

type OverlayRect = {
  top: number
  left: number
  width: number
  height: number
}

type ElementSnapshot = {
  tag: string
  id: string | null
  cssClasses: string[]
  textVisibleResumo: string | null
  ariaLabel: string | null
  role: string | null
  dataCodexIdDoElemento: string | null
  dataCodexIdMaisProximo: string | null
  domPathAproximado: string
  retanguloViewport: {
    widthPx: number
    heightPx: number
    topPx: number
    leftPx: number
  }
  retanguloPagina: {
    topPx: number
    leftPx: number
  }
  dicaParaLocalizarNoCodigo: string
}

const HIGH_Z_INDEX = 2147483647
const MAX_TEXT_LENGTH = 240

export function CodexElementPicker() {
  const [active, setActive] = useState(false)
  const [overlayRect, setOverlayRect] = useState<OverlayRect | null>(null)
  const [copied, setCopied] = useState(false)
  const activeRef = useRef(false)
  const hoveredElementRef = useRef<Element | null>(null)

  const updateOverlayFromElement = useCallback((element: Element | null) => {
    if (!element) {
      setOverlayRect(null)
      return
    }

    const rect = element.getBoundingClientRect()

    if (rect.width <= 0 || rect.height <= 0) {
      setOverlayRect(null)
      return
    }

    setOverlayRect({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    })
  }, [])

  useEffect(() => {
    activeRef.current = active

    if (active) {
      document.body.classList.add('codex-element-picker-active')
      setCopied(false)
      return
    }

    document.body.classList.remove('codex-element-picker-active')
    hoveredElementRef.current = null
    setOverlayRect(null)

    return () => {
      document.body.classList.remove('codex-element-picker-active')
    }
  }, [active])

  useEffect(() => {
    if (!copied) return

    const timer = window.setTimeout(() => {
      setCopied(false)
    }, 2600)

    return () => window.clearTimeout(timer)
  }, [copied])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isShortcut = event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'x'

      if (isShortcut) {
        event.preventDefault()
        setActive((current) => !current)
        return
      }

      if (event.key === 'Escape') {
        setActive(false)
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!activeRef.current) return

      const target = event.target

      if (!(target instanceof Element) || isPickerUiElement(target)) {
        hoveredElementRef.current = null
        setOverlayRect(null)
        return
      }

      hoveredElementRef.current = target
      updateOverlayFromElement(target)
    }

    const handleClick = (event: MouseEvent) => {
      if (!activeRef.current) return

      const target = event.target

      if (!(target instanceof Element) || isPickerUiElement(target)) {
        return
      }

      event.preventDefault()
      event.stopPropagation()
      event.stopImmediatePropagation()

      const snapshot = createElementSnapshot(target)
      const selectorPayload = JSON.stringify(snapshot, null, 2)

      void copyText(selectorPayload).finally(() => {
        setCopied(true)
        setActive(false)
      })
    }

    const refreshOverlay = () => {
      if (!activeRef.current) return
      updateOverlayFromElement(hoveredElementRef.current)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousemove', handleMouseMove, true)
    document.addEventListener('click', handleClick, true)
    window.addEventListener('resize', refreshOverlay)
    window.addEventListener('scroll', refreshOverlay, true)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousemove', handleMouseMove, true)
      document.removeEventListener('click', handleClick, true)
      window.removeEventListener('resize', refreshOverlay)
      window.removeEventListener('scroll', refreshOverlay, true)
    }
  }, [updateOverlayFromElement])

  if (!import.meta.env.DEV) {
    return null
  }

  return (
    <>
      <style>
        {`
          body.codex-element-picker-active,
          body.codex-element-picker-active * {
            cursor: crosshair !important;
          }
        `}
      </style>

      <button
        type="button"
        data-codex-picker-ui="true"
        onClick={() => setActive((current) => !current)}
        style={{
          position: 'fixed',
          right: 16,
          bottom: 16,
          zIndex: HIGH_Z_INDEX,
          border: active ? '1px solid rgba(56, 189, 248, 0.95)' : '1px solid rgba(148, 163, 184, 0.45)',
          borderRadius: 999,
          background: active ? 'rgba(14, 116, 144, 0.95)' : 'rgba(15, 23, 42, 0.88)',
          boxShadow: active ? '0 0 22px rgba(56, 189, 248, 0.45)' : '0 10px 30px rgba(15, 23, 42, 0.28)',
          color: '#ffffff',
          fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontSize: 13,
          fontWeight: 700,
          lineHeight: '18px',
          padding: '10px 14px',
          pointerEvents: 'auto',
        }}
      >
        Selecionar para Codex
      </button>

      {overlayRect && active ? (
        <div
          aria-hidden
          data-codex-picker-ui="true"
          style={{
            position: 'fixed',
            top: overlayRect.top,
            left: overlayRect.left,
            width: overlayRect.width,
            height: overlayRect.height,
            zIndex: HIGH_Z_INDEX - 1,
            border: '2px solid #38bdf8',
            borderRadius: 4,
            boxShadow: '0 0 0 1px rgba(14, 165, 233, 0.7) inset, 0 0 24px rgba(56, 189, 248, 0.75)',
            pointerEvents: 'none',
            transition: 'top 80ms ease, left 80ms ease, width 80ms ease, height 80ms ease',
          }}
        />
      ) : null}

      {copied ? (
        <div
          role="status"
          data-codex-picker-ui="true"
          style={{
            position: 'fixed',
            right: 16,
            bottom: 68,
            zIndex: HIGH_Z_INDEX,
            maxWidth: 300,
            border: '1px solid rgba(56, 189, 248, 0.45)',
            borderRadius: 12,
            background: 'rgba(15, 23, 42, 0.94)',
            boxShadow: '0 16px 36px rgba(15, 23, 42, 0.32)',
            color: '#ffffff',
            fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize: 13,
            fontWeight: 700,
            lineHeight: '18px',
            padding: '10px 12px',
            pointerEvents: 'none',
          }}
        >
          Seletor copiado. Cole no chat do Codex.
        </div>
      ) : null}
    </>
  )
}

function isPickerUiElement(element: Element) {
  return Boolean(element.closest('[data-codex-picker-ui="true"]'))
}

function createElementSnapshot(element: Element): ElementSnapshot {
  const rect = element.getBoundingClientRect()
  const nearestCodexElement = element.closest('[data-codex-id]')
  const nearestCodexId = nearestCodexElement?.getAttribute('data-codex-id') || null

  return {
    tag: element.tagName.toLowerCase(),
    id: element.id || null,
    cssClasses: Array.from(element.classList),
    textVisibleResumo: getVisibleText(element),
    ariaLabel: element.getAttribute('aria-label'),
    role: element.getAttribute('role'),
    dataCodexIdDoElemento: element.getAttribute('data-codex-id'),
    dataCodexIdMaisProximo: nearestCodexId,
    domPathAproximado: getDomPath(element),
    retanguloViewport: {
      widthPx: roundPx(rect.width),
      heightPx: roundPx(rect.height),
      topPx: roundPx(rect.top),
      leftPx: roundPx(rect.left),
    },
    retanguloPagina: {
      topPx: roundPx(rect.top + window.scrollY),
      leftPx: roundPx(rect.left + window.scrollX),
    },
    dicaParaLocalizarNoCodigo: nearestCodexId
      ? `Procure no projeto por data-codex-id="${nearestCodexId}" e depois ajuste o componente dono desse trecho.`
      : 'Procure no projeto pelo texto, id, classes ou caminho DOM acima para encontrar o componente dono desse trecho.',
  }
}

function getVisibleText(element: Element) {
  const rawText = 'innerText' in element && typeof element.innerText === 'string'
    ? element.innerText
    : element.textContent

  const text = rawText?.replace(/\s+/g, ' ').trim()

  if (!text) {
    return null
  }

  if (text.length <= MAX_TEXT_LENGTH) {
    return text
  }

  return text.slice(0, MAX_TEXT_LENGTH).trimEnd() + '...'
}

function getDomPath(element: Element) {
  const parts: string[] = []
  let current: Element | null = element

  while (current && current !== document.body && parts.length < 8) {
    parts.unshift(getSelectorPart(current))

    if (current.id || current.hasAttribute('data-codex-id')) {
      break
    }

    current = current.parentElement
  }

  if (current === document.body) {
    parts.unshift('body')
  }

  return parts.join(' > ')
}

function getSelectorPart(element: Element) {
  const tag = element.tagName.toLowerCase()
  const codexId = element.getAttribute('data-codex-id')

  if (element.id) {
    return `${tag}#${cssEscape(element.id)}`
  }

  if (codexId) {
    return `${tag}[data-codex-id="${codexId}"]`
  }

  const classes = Array.from(element.classList)
    .filter(Boolean)
    .slice(0, 3)
    .map((className) => `.${cssEscape(className)}`)
    .join('')

  return `${tag}${classes}${getNthOfType(element)}`
}

function getNthOfType(element: Element) {
  const parent = element.parentElement

  if (!parent) {
    return ''
  }

  const siblings = Array.from(parent.children).filter((child) => child.tagName === element.tagName)

  if (siblings.length <= 1) {
    return ''
  }

  return `:nth-of-type(${siblings.indexOf(element) + 1})`
}

function cssEscape(value: string) {
  if (typeof CSS !== 'undefined' && CSS.escape) {
    return CSS.escape(value)
  }

  return value.replace(/[^a-zA-Z0-9_-]/g, '\\$&')
}

function roundPx(value: number) {
  return Math.round(value * 100) / 100
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', 'true')
    textarea.style.position = 'fixed'
    textarea.style.left = '-9999px'
    textarea.style.top = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }
}
