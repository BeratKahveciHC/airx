import { motion } from 'framer-motion'
import { BrowserMockup, VisualSection } from './shared'

const TABLE_DATA = [
  { name: 'Ahmet Kaya', tc: '38291047562' },
  { name: 'Zeynep Arslan', tc: '54710293847' },
  { name: 'Mustafa Demir', tc: '61038274950' },
  { name: 'Elif Yıldız', tc: '29384756102' },
  { name: 'Serkan Çelik', tc: '74829103856' },
  { name: 'Fatma Öztürk', tc: '83746592013' },
  { name: 'Hüseyin Şahin', tc: '47382910564' },
  { name: 'Merve Aydın', tc: '92038471650' },
  { name: 'Burak Koç', tc: '65471038294' },
  { name: 'Selin Erdoğan', tc: '31847205693' },
]

const EyeIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const SearchIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const ChevronIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export default function OzlukDosyasiVisual({ accent = '#10b981', inline, isTr = true }) {
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
        <BrowserMockup url="ozluk-dosyalari" activeNav="Personel" isTr={isTr}>
          <div style={{ background: '#f1f5f9', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>

            {/* filtre kartı */}
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: '14px 16px', boxShadow: '0 2px 8px rgba(0,30,80,0.04)' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#475569', marginBottom: 8 }}>{isTr ? 'Çalışma Durumu' : 'Work Status'}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ flex: 1, border: '1px solid #cbd5e1', borderRadius: 6, height: 30, display: 'flex', alignItems: 'center', padding: '0 10px', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 10, color: '#64748b' }}>{isTr ? 'Tüm Personeller' : 'All Personnel'}</span>
                  <span style={{ color: '#94a3b8' }}><ChevronIcon /></span>
                </div>
                <div style={{ height: 30, padding: '0 16px', background: '#475569', borderRadius: 6, display: 'flex', alignItems: 'center', fontSize: 10, fontWeight: 600, color: '#fff', flexShrink: 0 }}>
                  {isTr ? 'Filtrele' : 'Filter'}
                </div>
              </div>
            </div>

            {/* tablo kartı */}
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,30,80,0.06)' }}>
              <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1e293b' }}>{isTr ? 'Özlük Dosyaları' : 'Personnel Files'}</span>
                <div style={{ display: 'flex', border: '1.5px solid #cbd5e1', borderRadius: 6, overflow: 'hidden', height: 28 }}>
                  <input readOnly placeholder={isTr ? 'Ara' : 'Search'} style={{ width: 160, padding: '0 10px', fontSize: 10, border: 'none', outline: 'none', color: '#64748b', background: '#fff' }} />
                  <div style={{ width: 30, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><SearchIcon /></div>
                </div>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    {(isTr
                      ? ['Adı', 'Crm Kodu', 'TC Kimlik Numarası', 'İşlemler']
                      : ['Name', 'CRM Code', 'National ID Number', 'Actions']
                    ).map((col) => (
                      <th key={col} style={{ padding: '7px 14px', fontWeight: 700, color: '#475569', textAlign: (isTr ? col === 'İşlemler' : col === 'Actions') ? 'right' : (col === 'TC Kimlik Numarası' || col === 'National ID Number' || col === 'Crm Kodu' || col === 'CRM Code') ? 'center' : 'left', fontSize: 10 }}>{col}</th>
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
                      transition={{ duration: 0.25, delay: 0.2 + i * 0.04 }}
                      style={{ borderBottom: i < TABLE_DATA.length - 1 ? '1px solid #f1f5f9' : 'none' }}
                    >
                      <td style={{ padding: '7px 14px', color: accent, fontWeight: 500 }}>{row.name}</td>
                      <td style={{ padding: '7px 14px', textAlign: 'center' }} />
                      <td style={{ padding: '7px 14px', textAlign: 'center' }}>
                        <span style={{ filter: 'blur(4px)', userSelect: 'none', color: '#64748b', letterSpacing: '0.05em' }}>{row.tc}</span>
                      </td>
                      <td style={{ padding: '7px 14px', textAlign: 'right' }}>
                        <div style={{ width: 24, height: 24, background: accent, borderRadius: 5, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><EyeIcon /></div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>

              {/* pagination */}
              <div style={{ padding: '10px 16px', display: 'flex', justifyContent: 'center', gap: 4, borderTop: '1px solid #f1f5f9' }}>
                {['«', '‹', '1', '2', '3', '4', '5', '›', '»'].map((p, i) => (
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
