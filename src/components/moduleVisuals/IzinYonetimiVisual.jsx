import { motion } from 'framer-motion'
import { BrowserMockup, VisualSection } from './shared'

const TABLE_DATA = [
  { name: 'Ahmet Kaya', dept: 'Yazılım Ekibi', type: 'Yıllık İzin', adres: 'İstanbul', baslangic: '22-05-2024 09:00', bitis: '24-05-2024 18:00' },
  { name: 'Zeynep Arslan', dept: 'Pazarlama ve Satış', type: 'Yıllık İzin', adres: 'Ankara', baslangic: '23-08-2024 08:00', bitis: '30-08-2024 18:00' },
  { name: 'Mustafa Demir', dept: 'İnsan Kaynakları', type: 'Ücretsiz İzin', adres: 'İzmir', baslangic: '12-11-2024 09:00', bitis: '13-11-2024 18:00' },
  { name: 'Elif Yıldız', dept: 'Muhasebe', type: 'Yıllık İzin', adres: 'İstanbul', baslangic: '27-01-2025 08:00', bitis: '14-02-2025 18:00' },
  { name: 'Serkan Çelik', dept: 'Operasyon', type: 'Hastalık', adres: 'İstanbul', baslangic: '24-01-2025 09:00', bitis: '31-01-2025 18:00' },
  { name: 'Fatma Öztürk', dept: 'Yazılım Ekibi', type: 'Hastalık', adres: 'Bursa', baslangic: '19-09-2025 10:00', bitis: '21-09-2025 18:00' },
  { name: 'Hüseyin Şahin', dept: 'Satış', type: 'Yıllık İzin', adres: 'Ankara', baslangic: '25-03-2026 08:00', bitis: '01-04-2026 18:00' },
]

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)
const XIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)
const EditIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)
const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)
const SearchIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
)

export default function IzinYonetimiVisual({ accent = '#0ea5e9' }) {
  return (
    <VisualSection accent={accent}>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <BrowserMockup url="izin-talepleri" activeNav="Modüller" maxWidth={920}>
          <div style={{ background: '#f1f5f9', padding: '16px' }}>
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,30,80,0.06)' }}>

              {/* header */}
              <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1e293b' }}>İzin Talepleri</span>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <div style={{ display: 'flex', border: '1.5px solid #cbd5e1', borderRadius: 6, overflow: 'hidden', height: 27 }}>
                    <input readOnly style={{ width: 160, padding: '0 8px', fontSize: 10, border: 'none', outline: 'none', color: '#64748b', background: '#fff' }} />
                    <div style={{ width: 28, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><SearchIcon /></div>
                  </div>
                  <div style={{ height: 27, padding: '0 12px', background: accent, borderRadius: 6, display: 'flex', alignItems: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>
                    İşlemler
                  </div>
                </div>
              </div>

              {/* table */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 9.5 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                      {['Adı Soyadı', 'Departman', 'İzin Tipi', 'Adres', 'Başlangıç Tarihi', 'Bitiş Tarihi', 'Onayla', 'İşlemler'].map((col) => (
                        <th key={col} style={{ padding: '7px 10px', fontWeight: 700, color: '#475569', textAlign: ['Onayla', 'İşlemler'].includes(col) ? 'center' : 'left', whiteSpace: 'nowrap', fontSize: 9.5 }}>{col}</th>
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
                        transition={{ duration: 0.25, delay: 0.2 + i * 0.05 }}
                        style={{ borderBottom: i < TABLE_DATA.length - 1 ? '1px solid #f1f5f9' : 'none' }}
                      >
                        <td style={{ padding: '7px 10px', color: '#334155', fontWeight: 500, whiteSpace: 'nowrap' }}>{row.name}</td>
                        <td style={{ padding: '7px 10px', color: accent, whiteSpace: 'nowrap' }}>{row.dept}</td>
                        <td style={{ padding: '7px 10px', color: accent, whiteSpace: 'nowrap' }}>{row.type}</td>
                        <td style={{ padding: '7px 10px', color: accent }}>{row.adres}</td>
                        <td style={{ padding: '7px 10px', color: '#64748b', whiteSpace: 'nowrap' }}>{row.baslangic}</td>
                        <td style={{ padding: '7px 10px', color: '#64748b', whiteSpace: 'nowrap' }}>{row.bitis}</td>
                        <td style={{ padding: '7px 10px', textAlign: 'center' }}>
                          <div style={{ width: 22, height: 22, background: '#fef3c7', border: '1px solid #fde68a', borderRadius: 5, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#d97706' }}>
                            <StarIcon />
                          </div>
                        </td>
                        <td style={{ padding: '7px 10px' }}>
                          <div style={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
                            <div style={{ width: 22, height: 22, background: '#10b981', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><CheckIcon /></div>
                            <div style={{ width: 22, height: 22, background: '#ef4444', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><XIcon /></div>
                            <div style={{ width: 22, height: 22, background: '#f59e0b', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><EditIcon /></div>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* pagination */}
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
