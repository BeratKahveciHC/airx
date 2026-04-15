import { motion } from 'framer-motion'
import { BrowserMockup, VisualSection } from './shared'

const VISITORS = [
  { tarih: '20-06-2022 15:18', name: 'Mehmet Kaya', tel: '532 345 67 89', sirket: 'Delta Teknoloji', ziyaretEdilen: 'Ahmet Demir', aktif: false },
  { tarih: '21-06-2022 17:27', name: 'Zeynep Arslan', tel: '533 456 78 90', sirket: 'Nolto Yazılım', ziyaretEdilen: 'Ahmet Demir', aktif: true },
  { tarih: '15-10-2022 09:44', name: 'Burak Yılmaz', tel: '534 567 89 01', sirket: 'Global Sistemler', ziyaretEdilen: 'Fatma Öztürk', aktif: false },
  { tarih: '05-11-2022 15:51', name: 'Selin Erdoğan', tel: '538 678 90 12', sirket: 'Kariyer Pro', ziyaretEdilen: 'Ahmet Demir', aktif: true },
  { tarih: '01-09-2023 17:13', name: 'Hasan Çelik', tel: '535 789 01 23', sirket: 'Procom A.Ş.', ziyaretEdilen: 'Ahmet Demir', aktif: true },
  { tarih: '20-02-2024 13:03', name: 'Aydın Koç', tel: '507 890 12 34', sirket: 'Şahıs', ziyaretEdilen: 'Ahmet Demir', aktif: true },
  { tarih: '27-02-2024 15:46', name: 'Elif Şahin', tel: '531 901 23 45', sirket: 'Maxim Teknoloji', ziyaretEdilen: 'Fatma Öztürk', aktif: true },
]

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const MinusIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

const CalendarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
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

export default function ZiyaretciYonetimiVisual({ accent = '#0ea5e9', inline, isTr = true }) {
  const COL_HEADERS = isTr
    ? ['Tarih', 'Adı Soyadı', 'Telefon', 'Şirket Adı', 'Ziyaret Edilen', 'Giriş', 'Çıkış', 'Aktif/Pasif']
    : ['Date', 'Full Name', 'Phone', 'Company Name', 'Visited Person', 'Check-in', 'Check-out', 'Active/Passive']
  const centerCols = isTr ? ['Giriş', 'Çıkış', 'Aktif/Pasif'] : ['Check-in', 'Check-out', 'Active/Passive']
  const dateLabels = isTr
    ? ['Başlangıç tarihini seçiniz', 'Bitiş tarihini seçiniz']
    : ['Select start date', 'Select end date']
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
        <BrowserMockup url="ziyaretci-yonetimi" activeNav="Modüller" maxWidth={860} isTr={isTr}>
          <div style={{ background: '#f1f5f9', padding: '14px', display: 'flex', flexDirection: 'column', gap: 12 }}>

            {/* filtre */}
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: '14px 16px', boxShadow: '0 2px 8px rgba(0,30,80,0.04)' }}>
              <div className="ziyaretci-filtre-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginBottom: 8 }}>
                {dateLabels.map(label => (
                  <div key={label}>
                    <div style={{ fontSize: 9, fontWeight: 600, color: '#64748b', marginBottom: 4 }}>{label}</div>
                    <div style={{ border: '1px solid #cbd5e1', borderRadius: 5, height: 26, padding: '0 8px', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CalendarIcon />
                      <span style={{ fontSize: 9, color: '#94a3b8' }}>{isTr ? 'Tarih Seçilmedi' : 'No Date Selected'}</span>
                    </div>
                  </div>
                ))}
                <div>
                  <div style={{ fontSize: 9, fontWeight: 600, color: '#64748b', marginBottom: 4 }}>{isTr ? 'Ad Soyad' : 'Full Name'}</div>
                  <div style={{ border: '1px solid #cbd5e1', borderRadius: 5, height: 26 }} />
                </div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 600, color: '#64748b', marginBottom: 4 }}>{isTr ? 'Çıkış Durumu' : 'Check-out Status'}</div>
                  <div style={{ border: '1px solid #cbd5e1', borderRadius: 5, height: 26, padding: '0 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 9, color: '#94a3b8' }}>{isTr ? 'Seçiniz...' : 'Select...'}</span>
                    <ChevronIcon />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, maxWidth: '48%' }}>
                  <div style={{ fontSize: 9, fontWeight: 600, color: '#64748b', marginBottom: 4 }}>{isTr ? 'Şube' : 'Branch'}</div>
                  <div style={{ border: '1px solid #cbd5e1', borderRadius: 5, height: 26, padding: '0 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 9, color: '#94a3b8' }}>{isTr ? 'Seçiniz...' : 'Select...'}</span>
                    <ChevronIcon />
                  </div>
                </div>
                <div style={{ height: 26, padding: '0 16px', background: '#475569', borderRadius: 5, display: 'flex', alignItems: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>
                  {isTr ? 'Filtrele' : 'Filter'}
                </div>
              </div>
            </div>

            {/* ziyaretçiler */}
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,30,80,0.06)' }}>
              <div style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#1e293b' }}>{isTr ? 'Ziyaretçiler' : 'Visitors'}</span>
                <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
                  <div style={{ display: 'flex', border: '1.5px solid #cbd5e1', borderRadius: 5, overflow: 'hidden', height: 26 }}>
                    <input readOnly style={{ width: 140, padding: '0 8px', fontSize: 9, border: 'none', outline: 'none', background: '#fff' }} />
                    <div style={{ width: 26, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><SearchIcon /></div>
                  </div>
                  <div style={{ height: 26, padding: '0 10px', background: accent, borderRadius: 5, display: 'flex', alignItems: 'center', fontSize: 9.5, fontWeight: 700, color: '#fff' }}>{isTr ? 'İşlemler' : 'Actions'}</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {VISITORS.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 0.2 + i * 0.06 }}
                    style={{ borderBottom: i < VISITORS.length - 1 ? '1px solid #e2e8f0' : 'none' }}
                  >
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 9 }}>
                      <thead>
                        <tr style={{ background: '#f8fafc' }}>
                          {COL_HEADERS.map(h => (
                            <th key={h} style={{ padding: '5px 8px', fontWeight: 700, color: '#475569', textAlign: centerCols.includes(h) ? 'center' : 'left', borderBottom: '1px solid #f1f5f9', whiteSpace: 'nowrap' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ padding: '5px 8px', color: '#64748b', whiteSpace: 'nowrap' }}>{v.tarih}</td>
                          <td style={{ padding: '5px 8px', color: accent, fontWeight: 600, whiteSpace: 'nowrap' }}>{v.name}</td>
                          <td style={{ padding: '5px 8px', color: '#64748b', whiteSpace: 'nowrap' }}>{v.tel}</td>
                          <td style={{ padding: '5px 8px', color: accent }}>{v.sirket}</td>
                          <td style={{ padding: '5px 8px', color: '#334155' }}>{v.ziyaretEdilen}</td>
                          <td style={{ padding: '5px 8px', textAlign: 'center', color: '#94a3b8' }}>-</td>
                          <td style={{ padding: '5px 8px', textAlign: 'center', color: '#94a3b8' }}>-</td>
                          <td style={{ padding: '5px 8px', textAlign: 'center' }}>
                            <div style={{ width: 20, height: 20, borderRadius: 5, background: v.aktif ? '#dcfce7' : '#fee2e2', border: `1px solid ${v.aktif ? '#86efac' : '#fca5a5'}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: v.aktif ? '#16a34a' : '#dc2626' }}>
                              {v.aktif ? <CheckIcon /> : <MinusIcon />}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={8} style={{ padding: '4px 8px 6px', fontSize: 8.5, color: '#94a3b8', fontStyle: 'italic' }}>
                            {isTr ? 'Geçilmiş bir kapının cihazı bulunamadı' : 'No device found for the passed door'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </motion.div>
                ))}
              </div>

              {/* pagination */}
              <div style={{ padding: '10px', display: 'flex', justifyContent: 'center', gap: 4, borderTop: '1px solid #f1f5f9' }}>
                {['«', '‹', '1', '›', '»'].map((p, i) => (
                  <div key={i} style={{ width: 18, height: 18, borderRadius: '50%', background: p === '1' ? accent : 'transparent', border: p === '1' ? 'none' : '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: p === '1' ? 700 : 500, color: p === '1' ? '#fff' : '#94a3b8' }}>
                    {p}
                  </div>
                ))}
              </div>
            </div>

            {/* footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px' }}>
              <span style={{ fontSize: 9, color: '#94a3b8' }}>2026 © AiRX</span>
              <div style={{ display: 'flex', gap: 12 }}>
                {(isTr ? ['Yardım ve Destek', 'Gizlilik Bildirimi', 'Kullanıcı Sözleşmesi'] : ['Help & Support', 'Privacy Notice', 'User Agreement']).map(l => (
                  <span key={l} style={{ fontSize: 9, color: '#94a3b8' }}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </BrowserMockup>
      </motion.div>
      <style>{`
        @media (max-width: 520px) {
          .ziyaretci-filtre-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </VisualSection>
  )
}
