import { motion } from 'framer-motion'
import { BrowserMockup, VisualSection } from './shared'

const TABLE_DATA = [
  { ad: 'Bilgisayar', aciklama: 'HP Laptop 14" i7', geriAlinacak: true },
  { ad: 'Telefon', aciklama: 'iPhone 14 Pro', geriAlinacak: true },
  { ad: 'Araç Tahsisi', aciklama: 'Şirket aracı kullanım hakkı', geriAlinacak: true },
  { ad: 'Yemek Kartı', aciklama: 'Aylık 2.000 ₺ yemek yardımı', geriAlinacak: false },
  { ad: 'Sağlık Sigortası', aciklama: 'Özel sağlık sigortası poliçesi', geriAlinacak: false },
  { ad: 'Servis Hakkı', aciklama: 'Personel servis güzergahı', geriAlinacak: false },
]

const SearchIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
)
const EditIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)
const TrashIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
)
const CheckCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="#22c55e" />
    <path d="m9 12 2 2 4-4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const XCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="#ef4444" />
    <path d="m15 9-6 6M9 9l6 6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export default function YanHaklarVisual({ accent = '#0ea5e9', inline }) {
  return (
    <VisualSection accent={accent} inline={inline}>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={inline ? { opacity: 1, y: 0, scale: 1 } : undefined}
        whileInView={!inline ? { opacity: 1, y: 0, scale: 1 } : undefined}
        viewport={!inline ? { once: true } : undefined}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <BrowserMockup url="yan-haklar" activeNav="Tanımlamalar">
          <div style={{ background: '#f1f5f9', padding: '14px' }}>
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,30,80,0.06)' }}>

              <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1e293b' }}>Yan Haklar - Zimmet</span>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <div style={{ display: 'flex', border: '1.5px solid #cbd5e1', borderRadius: 6, overflow: 'hidden', height: 28 }}>
                    <input readOnly style={{ width: 160, padding: '0 8px', fontSize: 10, border: 'none', outline: 'none', background: '#fff' }} />
                    <div style={{ width: 28, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><SearchIcon /></div>
                  </div>
                  <div style={{ height: 28, padding: '0 12px', background: accent, borderRadius: 6, display: 'flex', alignItems: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>
                    İşlemler
                  </div>
                </div>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <th style={{ padding: '8px 14px', fontWeight: 700, color: '#475569', textAlign: 'center' }}>Yan Hak - Zimmet Adı</th>
                    <th style={{ padding: '8px 14px', fontWeight: 700, color: '#475569', textAlign: 'center' }}>Açıklama</th>
                    <th style={{ padding: '8px 14px', fontWeight: 700, color: '#475569', textAlign: 'center', lineHeight: 1.3 }}>Geri Alınacak<br />mı?</th>
                    <th style={{ padding: '8px 14px', fontWeight: 700, color: '#475569', textAlign: 'center' }}>İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_DATA.map((row, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: 0.2 + i * 0.07 }}
                      style={{ borderBottom: i < TABLE_DATA.length - 1 ? '1px solid #f1f5f9' : 'none' }}
                    >
                      <td style={{ padding: '9px 14px', color: accent, fontWeight: 500, textAlign: 'center' }}>{row.ad}</td>
                      <td style={{ padding: '9px 14px', color: '#64748b', textAlign: 'center' }}>{row.aciklama}</td>
                      <td style={{ padding: '9px 14px', textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex' }}>
                          {row.geriAlinacak ? <CheckCircleIcon /> : <XCircleIcon />}
                        </div>
                      </td>
                      <td style={{ padding: '9px 14px' }}>
                        <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
                          <div style={{ width: 24, height: 24, background: '#f59e0b', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><EditIcon /></div>
                          <div style={{ width: 24, height: 24, background: '#ef4444', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><TrashIcon /></div>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>

              <div style={{ padding: '10px', display: 'flex', justifyContent: 'center', gap: 4, borderTop: '1px solid #f1f5f9' }}>
                {['«', '‹', '1', '›', '»'].map((p, i) => (
                  <div key={i} style={{ width: 20, height: 20, borderRadius: '50%', background: p === '1' ? accent : 'transparent', border: p === '1' ? 'none' : '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: p === '1' ? 700 : 500, color: p === '1' ? '#fff' : '#94a3b8' }}>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BrowserMockup>
      </motion.div>
    </VisualSection>
  )
}
