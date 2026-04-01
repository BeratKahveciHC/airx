import { motion } from 'framer-motion'
import { BrowserMockup, VisualSection } from './shared'

const TABLE_DATA = [
  { name: 'Ahmet Kaya', tarih: '11/2024', hak: 30, kullanilan: 18, kalan: 12 },
  { name: 'Zeynep Arslan', tarih: '01/2025', hak: 30, kullanilan: 22, kalan: 8 },
  { name: 'Mustafa Demir', tarih: '03/2025', hak: 20, kullanilan: 9, kalan: 11 },
  { name: 'Elif Yıldız', tarih: '03/2025', hak: 20, kullanilan: 0, kalan: 20 },
  { name: 'Serkan Çelik', tarih: '04/2025', hak: 30, kullanilan: 14, kalan: 16 },
  { name: 'Fatma Öztürk', tarih: '04/2025', hak: 30, kullanilan: 27, kalan: 3 },
]

const EditIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)

const SearchIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
)

export default function YemekkhaneVisual({ accent = '#0ea5e9' }) {
  return (
    <VisualSection accent={accent}>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <BrowserMockup url="yemekhane" activeNav="Modüller">
          <div style={{ background: '#f1f5f9', padding: '16px' }}>
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,30,80,0.06)' }}>

              <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1e293b' }}>Yemekhane</span>
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
                    {['Adı Soyadı', 'Tarih', 'Kullanım Hakkı', 'Kullanılan', 'Kalan', 'İşlemler'].map((col) => (
                      <th key={col} style={{ padding: '8px 14px', fontWeight: 700, color: '#475569', textAlign: col === 'Adı Soyadı' ? 'left' : 'center', fontSize: 10 }}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_DATA.map((row, i) => (
                    <motion.tr
                      key={row.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: 0.2 + i * 0.06 }}
                      style={{ borderBottom: i < TABLE_DATA.length - 1 ? '1px solid #f1f5f9' : 'none' }}
                    >
                      <td style={{ padding: '9px 14px', color: accent, fontWeight: 500 }}>{row.name}</td>
                      <td style={{ padding: '9px 14px', color: '#f59e0b', fontWeight: 600, textAlign: 'center' }}>{row.tarih}</td>
                      <td style={{ padding: '9px 14px', textAlign: 'center', color: '#334155', fontWeight: 600 }}>{row.hak}</td>
                      <td style={{ padding: '9px 14px', textAlign: 'center', color: '#64748b' }}>{row.kullanilan}</td>
                      <td style={{ padding: '9px 14px', textAlign: 'center', color: row.kalan <= 5 ? '#ef4444' : accent, fontWeight: 700 }}>{row.kalan}</td>
                      <td style={{ padding: '9px 14px', textAlign: 'center' }}>
                        <div style={{ width: 26, height: 26, background: '#f59e0b', borderRadius: 6, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                          <EditIcon />
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>

              <div style={{ padding: '10px 16px', display: 'flex', justifyContent: 'center', gap: 4, borderTop: '1px solid #f1f5f9' }}>
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
