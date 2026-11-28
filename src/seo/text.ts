export function cleanProjectTitle(title: string) {
  return title.replace(/^Em breve:\s*/i, '').trim()
}

export function collapseWs(text: string) {
  return text.replace(/\s+/g, ' ').trim()
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function fitRange(text: string, min: number, max: number, extras: string[] = []): string {
  let value = collapseWs(text)
  if (value.length < min) {
    for (const extra of extras) {
      const piece = collapseWs(extra)
      if (!piece) continue
      const next = collapseWs(`${value} ${piece}`)
      if (next.length > max && value.length >= min) break
      value = next
      if (value.length >= min) break
    }
  }
  if (value.length <= max && value.length >= min) return value
  if (value.length < min) return value
  let cut = value.slice(0, max)
  const sp = cut.lastIndexOf(' ')
  if (sp >= min) cut = cut.slice(0, sp)
  return cut.replace(/[.,;:–—\s]+$/g, '')
}

export function fitTitle(name: string, extras: string[] = []): string {
  const cleaned = cleanProjectTitle(name)
  const brand = 'Mateus Bonette'
  const candidates = [
    cleaned,
    `${cleaned} | ${brand}`,
    ...extras.map((extra) => `${cleaned} | ${extra}`),
  ]
  for (const candidate of candidates) {
    const value = collapseWs(candidate)
    if (value.length >= 50 && value.length <= 60) return value
  }
  const withBrand = collapseWs(`${cleaned} | ${brand}`)
  if (withBrand.length > 60) return fitRange(withBrand, 50, 60)
  for (const extra of extras) {
    const value = collapseWs(`${cleaned} | ${extra}`)
    if (value.length > 60) return fitRange(value, 50, 60)
    if (value.length >= 50) return value
  }
  return fitRange(withBrand.length >= 50 ? withBrand : collapseWs(`${withBrand}, São Paulo, Brazil`), 50, 60)
}

export function fitDescription(text: string, extras: string[] = []): string {
  return fitRange(text, 150, 160, extras)
}
