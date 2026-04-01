import { motion } from 'framer-motion'
import { BrowserMockup, VisualSection } from './shared'

const PEOPLE = [
  'Ahmet Kaya',
  'Elif Yıldız',
  'Mustafa Demir',
  'Hüseyin Şahin',
  'Zeynep Arslan',
]

const DAYS = Array.from({ length: 20 }, (_, i) => i + 1)

const SUMMARY_COLS = [
  { label: 'Belli\nDeğil', color: '#1e293b' },
  { label: 'Geldi', color: '#22c55e' },
  { label: 'Gelmedi', color: '#f87171' },
  { label: 'Ücretli\nİzin', color: '#a78bfa' },
  { label: 'Mesaisi\nYok', color: '#94a3b8' },
  { label: 'Geç\nGeldi', color: '#fb923c' },
  { label: 'Geç\nÇıktı', color: '#f97316' },
  { label: 'Erken\nGeldi', color: '#84cc16' },
  { label: 'Erken\nÇıktı', color: '#ef4444' },
  { label: 'Fazla\nMesai', color: '#8b5cf6' },
  { label: 'Ücretsiz\nİzin', color: '#14b8a6' },
  { label: 'Resmi\nTatil', color: '#38bdf8' },
  { label: 'İdari\nTatil', color: '#3b82f6' },
  { label: 'Hafta\nTatili', color: '#93c5fd' },
  { label: 'Akdi\nTatil', color: '#0ea5e9' },
]

const ChevronIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const ExcelIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="15" x2="15" y2="15" />
    <line x1="9" y1="11" x2="15" y2="11" />
  </svg>
)

export default function PuantajVisual({ accent = '#0ea5e9' }) {
  return (
    <VisualSection accent={accent}>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <BrowserMockup url="puantaj-raporlari" activeNav="Raporlar" maxWidth={960}>
          <div style={{ background: '#f1f5f9', padding: '14px', display: 'flex', flexDirection: 'column', gap: 12 }}>

            {/* filtre */}
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: '12px 16px', boxShadow: '0 2px 8px rgba(0,30,80,0.04)', display: 'flex', alignItems: 'flex-end', gap: 12 }}>
              {[
                { label: 'Yıl Seçiniz', value: '2026' },
                { label: 'Ay Seçiniz', value: '4' },
                { label: 'Şube', value: 'İkitelli Merkez' },
              ].map(f => (
                <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 9, fontWeight: 600, color: '#64748b' }}>{f.label}</span>
                  <div style={{ border: '1px solid #cbd5e1', borderRadius: 5, height: 26, padding: '0 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, minWidth: 90, background: '#fff' }}>
                    <span style={{ fontSize: 10, color: '#334155' }}>{f.value}</span>
                    <ChevronIcon />
                  </div>
                </div>
              ))}
              <div style={{ height: 26, padding: '0 14px', background: '#475569', borderRadius: 5, display: 'flex', alignItems: 'center', fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                Filtrele
              </div>
            </div>

            {/* takvim tablosu */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,30,80,0.06)' }}
            >
              <div style={{ padding: '10px 14px 8px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#1e293b' }}>2026 Nisan Puantaj Raporları</span>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ borderCollapse: 'collapse', fontSize: 9 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ padding: '6px 10px', fontWeight: 700, color: '#475569', textAlign: 'left', minWidth: 110 }}>Adı Soyadı</th>
                      {DAYS.map(d => (
                        <th key={d} style={{ padding: '6px 4px', fontWeight: 600, color: '#94a3b8', textAlign: 'center', minWidth: 22 }}>{d}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PEOPLE.map((name, i) => (
                      <motion.tr
                        key={name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.3 + i * 0.05 }}
                        style={{ borderBottom: i < PEOPLE.length - 1 ? '1px solid #f1f5f9' : 'none' }}
                      >
                        <td style={{ padding: '6px 10px', color: accent, fontWeight: 500, whiteSpace: 'nowrap' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            {name}
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                          </span>
                        </td>
                        {DAYS.map(d => (
                          <td key={d} style={{ padding: '4px', textAlign: 'center' }}>
                            {d === 1 && (
                              <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#f87171', margin: '0 auto', boxShadow: '0 2px 6px rgba(248,113,113,0.4)' }} />
                            )}
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* pagination */}
              <div style={{ padding: '8px 14px', display: 'flex', justifyContent: 'center', gap: 4, borderTop: '1px solid #f1f5f9' }}>
                {['«', '‹', '1', '›', '»'].map((p, i) => (
                  <div key={i} style={{ width: 18, height: 18, borderRadius: '50%', background: p === '1' ? accent : 'transparent', border: p === '1' ? 'none' : '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: p === '1' ? 700 : 500, color: p === '1' ? '#fff' : '#94a3b8' }}>
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* özet tablo */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,30,80,0.06)' }}
            >
              <div style={{ padding: '10px 14px 8px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#1e293b' }}>2026 Nisan Puantaj Raporları</span>
                <div style={{ width: 22, height: 22, background: '#16a34a', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ExcelIcon />
                </div>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ borderCollapse: 'collapse', fontSize: 8.5 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ padding: '6px 10px', fontWeight: 700, color: '#475569', textAlign: 'left', minWidth: 100 }}>Adı Soyadı</th>
                      {SUMMARY_COLS.map(col => (
                        <th key={col.label} style={{ padding: '4px 5px', textAlign: 'center', minWidth: 36 }}>
                          <div style={{ fontSize: 7.5, fontWeight: 600, color: '#475569', lineHeight: 1.3, whiteSpace: 'pre-line', marginBottom: 3 }}>{col.label}</div>
                          <div style={{ height: 3, borderRadius: 2, background: col.color }} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PEOPLE.map((name, i) => (
                      <motion.tr
                        key={name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.45 + i * 0.04 }}
                        style={{ borderBottom: i < PEOPLE.length - 1 ? '1px solid #f1f5f9' : 'none' }}
                      >
                        <td style={{ padding: '6px 10px', color: '#334155', fontWeight: 500, whiteSpace: 'nowrap' }}>{name}</td>
                        {SUMMARY_COLS.map((col, j) => (
                          <td key={j} style={{ padding: '6px 5px', textAlign: 'center', color: j === 2 ? '#64748b' : j === 9 || j === 10 ? accent : '#64748b', fontSize: 9 }}>
                            {j === 2 ? '1' : '0'}
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 4px' }}>
              <span style={{ fontSize: 9, color: '#94a3b8' }}>2026 © Airx</span>
              <div style={{ display: 'flex', gap: 14 }}>
                {['Yardım ve Destek', 'Gizlilik Bildirimi', 'Kullanıcı Sözleşmesi'].map(l => (
                  <span key={l} style={{ fontSize: 9, color: '#94a3b8' }}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </BrowserMockup>
      </motion.div>
    </VisualSection>
  )
}
