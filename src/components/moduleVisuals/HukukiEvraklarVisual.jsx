import { motion } from 'framer-motion'
import { BrowserMockup, VisualSection } from './shared'

const TABLE_DATA = [
  { name: 'Ahmet Kaya', evrak: 'İş Sözleşmesi', tip: 'Belirsiz Süreli Sözleşme', baslangic: '01.03.2022', bitis: '—' },
  { name: 'Zeynep Arslan', evrak: 'Gizlilik Sözleşmesi', tip: 'NDA', baslangic: '15.06.2022', bitis: '15.06.2025' },
  { name: 'Mustafa Demir', evrak: 'Ek Protokol', tip: 'Görev Tanımı', baslangic: '01.01.2023', bitis: '31.12.2024' },
  { name: 'Elif Yıldız', evrak: 'Uzaktan Çalışma Sözleşmesi', tip: 'Belirli Süreli Sözleşme', baslangic: '10.09.2023', bitis: '10.09.2025' },
  { name: 'Serkan Çelik', evrak: 'Rekabet Yasağı', tip: 'NDA', baslangic: '20.11.2023', bitis: '20.11.2026' },
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
const CalendarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

function PdfThumb() {
  return (
    <div style={{ width: 30, height: 34, background: '#fff', border: '1px solid #e2e8f0', borderRadius: 4, display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
      <div style={{ background: '#ef4444', padding: '2px 0', textAlign: 'center' }}>
        <span style={{ fontSize: 6, fontWeight: 800, color: '#fff', letterSpacing: '0.05em' }}>PDF</span>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, padding: '2px 4px' }}>
        {[1, 2, 3].map(i => <div key={i} style={{ height: 1.5, background: '#e2e8f0', borderRadius: 1 }} />)}
      </div>
    </div>
  )
}

export default function HukukiEvraklarVisual({ accent = '#0ea5e9', inline }) {
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
        <BrowserMockup url="hukuki-evraklar" activeNav="Personel" maxWidth={880}>
          <div style={{ background: '#f1f5f9', padding: '14px', display: 'flex', flexDirection: 'column', gap: 12 }}>

            {/* filtre */}
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: '14px 16px', boxShadow: '0 2px 8px rgba(0,30,80,0.04)' }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-end' }}>
                {[
                  { label: 'Başlangıç Tarihi', value: '1 Ocak 2024 Pazartesi' },
                  { label: 'Bitiş Tarihi', value: '1 Nisan 2025 Salı' },
                ].map(f => (
                  <div key={f.label} style={{ flex: 1 }}>
                    <div style={{ fontSize: 9, fontWeight: 600, color: '#64748b', marginBottom: 4 }}>{f.label}</div>
                    <div style={{ border: '1px solid #cbd5e1', borderRadius: 5, height: 28, padding: '0 8px', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CalendarIcon />
                      <span style={{ fontSize: 9.5, color: '#334155' }}>{f.value}</span>
                    </div>
                  </div>
                ))}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 9, fontWeight: 600, color: '#64748b', marginBottom: 4 }}>Personel</div>
                  <div style={{ border: '1px solid #cbd5e1', borderRadius: 5, height: 28, padding: '0 8px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: 9.5, color: '#334155' }}>Tüm Personel</span>
                  </div>
                </div>
                <div style={{ height: 28, padding: '0 16px', background: '#475569', borderRadius: 5, display: 'flex', alignItems: 'center', fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                  Filtrele
                </div>
              </div>
            </div>

            {/* tablo */}
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,30,80,0.06)' }}>
              <div style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1e293b' }}>Hukuki Evraklar</span>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ display: 'flex', border: '1.5px solid #cbd5e1', borderRadius: 6, overflow: 'hidden', height: 27 }}>
                    <input readOnly style={{ width: 150, padding: '0 8px', fontSize: 10, border: 'none', outline: 'none', background: '#fff' }} />
                    <div style={{ width: 27, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><SearchIcon /></div>
                  </div>
                  <div style={{ height: 27, padding: '0 12px', background: accent, borderRadius: 6, display: 'flex', alignItems: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>
                    İşlemler
                  </div>
                </div>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 9.5 }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    {['Evrak', 'Ad Soyad', 'Evrak Adı', 'Hukuki Evrak Tipi', 'Başlangıç Tarihi', 'Bitiş Tarihi', 'İşlemler'].map(col => (
                      <th key={col} style={{ padding: '7px 10px', fontWeight: 700, color: '#475569', textAlign: col === 'İşlemler' ? 'center' : 'left', whiteSpace: 'nowrap' }}>{col}</th>
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
                      <td style={{ padding: '7px 10px' }}><PdfThumb /></td>
                      <td style={{ padding: '7px 10px', color: accent, fontWeight: 500, whiteSpace: 'nowrap' }}>{row.name}</td>
                      <td style={{ padding: '7px 10px', color: '#334155', whiteSpace: 'nowrap' }}>{row.evrak}</td>
                      <td style={{ padding: '7px 10px', color: accent }}>{row.tip}</td>
                      <td style={{ padding: '7px 10px', color: '#64748b', whiteSpace: 'nowrap' }}>{row.baslangic}</td>
                      <td style={{ padding: '7px 10px', color: row.bitis === '—' ? '#94a3b8' : '#64748b', whiteSpace: 'nowrap' }}>{row.bitis}</td>
                      <td style={{ padding: '7px 10px' }}>
                        <div style={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
                          <div style={{ width: 22, height: 22, background: '#f59e0b', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><EditIcon /></div>
                          <div style={{ width: 22, height: 22, background: '#ef4444', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><TrashIcon /></div>
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
