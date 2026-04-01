import { motion } from 'framer-motion'
import { BrowserMockup, VisualSection } from './shared'

const TABLE_DATA = [
  { type: 'img', name: 'Ahmet Kaya', evrak: 'Sağlık Raporu', gecerlilik: '2024-03-15', tamamlandi: false },
  { type: 'img', name: 'Zeynep Arslan', evrak: 'İş Sözleşmesi', gecerlilik: '2024-06-30', tamamlandi: false },
  { type: 'pdf', name: 'Mustafa Demir', evrak: 'SGK Bildirimi', gecerlilik: '2024-08-01', tamamlandi: false },
  { type: 'img', name: 'Elif Yıldız', evrak: 'Kimlik Fotokopisi', gecerlilik: '2025-01-20', tamamlandi: false },
  { type: 'pdf', name: 'Serkan Çelik', evrak: 'Diploma Sureti', gecerlilik: '2025-04-10', tamamlandi: false },
]

const EditIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)
const TrashIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
)
const XCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#ef4444" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" fill="#ef4444" />
    <path d="m15 9-6 6" stroke="#fff" /><path d="m9 9 6 6" stroke="#fff" />
  </svg>
)
const SearchIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
)
const ChevronIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

function FileThumb({ type }) {
  if (type === 'pdf') {
    return (
      <div style={{ width: 32, height: 36, background: '#fff', border: '1px solid #e2e8f0', borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
        <div style={{ width: '100%', background: '#ef4444', padding: '2px 0', textAlign: 'center' }}>
          <span style={{ fontSize: 6, fontWeight: 800, color: '#fff', letterSpacing: '0.05em' }}>PDF</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, padding: '2px 4px' }}>
          {[1, 2, 3].map(i => <div key={i} style={{ height: 1.5, background: '#e2e8f0', borderRadius: 1 }} />)}
        </div>
      </div>
    )
  }
  return (
    <div style={{ width: 32, height: 36, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  )
}

export default function SureliEvraklarVisual({ accent = '#0ea5e9' }) {
  return (
    <VisualSection accent={accent}>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <BrowserMockup url="sureli-evraklar" activeNav="Personel">
          <div style={{ background: '#f1f5f9', padding: '14px', display: 'flex', flexDirection: 'column', gap: 12 }}>

            {/* filtre */}
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: '14px 16px', boxShadow: '0 2px 8px rgba(0,30,80,0.04)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px', marginBottom: 10 }}>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 600, color: '#0ea5e9', marginBottom: 4 }}>Durum</div>
                  <div style={{ border: '1px solid #cbd5e1', borderRadius: 5, height: 28, padding: '0 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 9.5, color: '#94a3b8' }}>Seçiniz...</span>
                    <ChevronIcon />
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 600, color: '#0ea5e9', marginBottom: 4 }}>Çalışma Durumu</div>
                  <div style={{ border: '1px solid #cbd5e1', borderRadius: 5, height: 28, padding: '0 10px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: 9.5, color: '#334155' }}>Aktif Personeller</span>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 9, fontWeight: 600, color: '#475569', marginBottom: 4 }}>Personel</div>
                <div style={{ border: '1px solid #cbd5e1', borderRadius: 5, height: 28, padding: '0 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 9.5, color: '#94a3b8' }}>Seçiniz...</span>
                  <ChevronIcon />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ height: 28, padding: '0 16px', background: '#475569', borderRadius: 5, display: 'flex', alignItems: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>
                  Filtrele
                </div>
              </div>
            </div>

            {/* tablo */}
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,30,80,0.06)' }}>
              <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1e293b' }}>Süreli Evrak</span>
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
                    {['Evrak', 'Adı', 'Evrak Adı', 'Geçerlilik Süresi', 'Tamamlandı mı?', 'İşlemler'].map(col => (
                      <th key={col} style={{ padding: '7px 12px', fontWeight: 700, color: '#475569', textAlign: ['Tamamlandı mı?', 'İşlemler'].includes(col) ? 'center' : col === 'Adı' || col === 'Evrak Adı' ? 'center' : 'left', fontSize: 10 }}>{col}</th>
                    ))}
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
                      <td style={{ padding: '8px 12px' }}>
                        <FileThumb type={row.type} />
                      </td>
                      <td style={{ padding: '8px 12px', color: accent, fontWeight: 500, textAlign: 'center' }}>{row.name}</td>
                      <td style={{ padding: '8px 12px', color: accent, textAlign: 'center' }}>{row.evrak}</td>
                      <td style={{ padding: '8px 12px', color: '#f59e0b', fontWeight: 600, textAlign: 'center' }}>{row.gecerlilik}</td>
                      <td style={{ padding: '8px 12px', textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex' }}><XCircleIcon /></div>
                      </td>
                      <td style={{ padding: '8px 12px' }}>
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
