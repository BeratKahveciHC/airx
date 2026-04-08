import fs from 'fs'
import path from 'path'
import { parseMd } from './parseMd'

const TR_DIR = path.join(process.cwd(), 'src/content/blog')
const EN_DIR = path.join(process.cwd(), 'src/content/blog/en')

export function getAllBlogSlugs() {
  return fs
    .readdirSync(TR_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace('.md', ''))
}

export function getBlogPost(slug, locale = 'tr') {
  const dir = locale === 'en' ? EN_DIR : TR_DIR
  const filePath = path.join(dir, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    const fallback = path.join(TR_DIR, `${slug}.md`)
    if (!fs.existsSync(fallback)) return null
    const raw = fs.readFileSync(fallback, 'utf-8')
    return parseMd(raw)
  }

  const raw = fs.readFileSync(filePath, 'utf-8')
  return parseMd(raw)
}
