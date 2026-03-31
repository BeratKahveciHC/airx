/**
 * Basit frontmatter parser — gray-matter'ın tarayıcı uyumsuzluğunu önler.
 * --- ile çevrili YAML bloğunu parse eder, geri kalanı content olarak döner.
 */
export function parseMd(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/m)

  if (!match) return { data: {}, content: raw }

  const frontmatter = match[1]
  const content = match[2]

  const data = {}
  frontmatter.split('\n').forEach(line => {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) return
    const key = line.slice(0, colonIdx).trim()
    let value = line.slice(colonIdx + 1).trim()
    // Tırnak işaretlerini temizle
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    data[key] = value
  })

  return { data, content }
}
