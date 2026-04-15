import { motion } from 'framer-motion'
import { BrowserMockup, VisualSection } from './shared'

const TABLE_DATA = [
  { tarih: '15.03.2024', egitim: 'İş Güvenliği Eğitimi', aciklama: 'Temel iş güvenliği', egitimci: 'Hasan Yılmaz', yer: 'Online', tamamlandi: true },
  { tarih: '22.04.2024', egitim: 'Yazılım Kullanım Eğitimi', aciklama: 'ERP sistem eğitimi', egitimci: 'Elif Kara', yer: 'İstanbul', tamamlandi: true },
  { tarih: '10.06.2024', egitim: 'Müşteri İlişkileri', aciklama: 'Satış ekibi eğitimi', egitimci: 'Ahmet Demir', yer: 'Online', tamamlandi: false },
  { tarih: '18.09.2024', egitim: 'Liderlik Gelişim', aciklama: 'Yönetici programı', egitimci: 'Serkan Yücel', yer: 'Ankara', tamamlandi: false },
  { tarih: '05.11.2024', egitim: 'Veri Güvenliği', aciklama: 'KVKK farkındalık', egitimci: 'Merve Şahin', yer: 'Online', tamamlandi: false },
]

const EditIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)
const DetailIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
)
const ExcelIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="15" x2="15" y2="15" /><line x1="9" y1="11" x2="15" y2="11" />
  </svg>
)
const XCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="#ef4444" />
    <path d="m15 9-6 6M9 9l6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="#22c55e" />
    <path d="m9 12 2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const CalendarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)
const ChevronIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

function PdfThumb() {
  return (
    <div style={{ width: 32, height: 36, background: '#fff', border: '1px solid #e2e8f0', borderRadius: 4, display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
      <div style={{ background: '#ef4444', padding: '2px 0', textAlign: 'center' }}>
        <span style={{ fontSize: 6, fontWeight: 800, color: '#fff', letterSpacing: '0.05em' }}>PDF</span>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, padding: '2px 4px' }}>
        {[1, 2, 3].map(i => <div key={i} style={{ height: 1.5, background: '#e2e8f0', borderRadius: 1 }} />)}
      </div>
    </div>
  )
}

export default function EgitimPlanlamaVisual({ accent = '#0ea5e9', inline, isTr = true }) {
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
        <BrowserMockup url="egitim-planlama" activeNav="Modüller" maxWidth={900} isTr={isTr}>
          <div style={{ background: '#f1f5f9', padding: '14px', display: 'flex', flexDirection: 'column', gap: 12 }}>

            {/* filtre */}
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: '14px 16px', boxShadow: '0 2px 8px rgba(0,30,80,0.04)' }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-end' }}>
                {[
                  { label: isTr ? 'Başlangıç Tarihi' : 'Start Date', color: accent },
                  { label: isTr ? 'Bitiş Tarihi' : 'End Date', color: accent },
                ].map(f => (
                  <div key={f.label} style={{ flex: 1 }}>
                    <div style={{ fontSize: 9, fontWeight: 600, color: f.color, marginBottom: 4 }}>{f.label}</div>
                    <div style={{ border: '1px solid #cbd5e1', borderRadius: 5, height: 28, padding: '0 8px', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CalendarIcon />
                      <span style={{ fontSize: 9.5, color: '#94a3b8' }}>{isTr ? 'Tarih Seçilmedi' : 'No Date Selected'}</span>
                    </div>
                  </div>
                ))}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 9, fontWeight: 600, color: accent, marginBottom: 4 }}>{isTr ? 'Tamamlandı mı?' : 'Completed?'}</div>
                  <div style={{ border: '1px solid #cbd5e1', borderRadius: 5, height: 28, padding: '0 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 9.5, color: '#94a3b8' }}>{isTr ? 'Seçiniz...' : 'Select...'}</span>
                    <ChevronIcon />
                  </div>
                </div>
                <div style={{ height: 28, padding: '0 16px', background: '#475569', borderRadius: 5, display: 'flex', alignItems: 'center', fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                  {isTr ? 'Filtrele' : 'Filter'}
                </div>
              </div>
            </div>

            {/* tablo */}
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,30,80,0.06)' }}>
              <div style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1e293b' }}>{isTr ? 'Eğitim' : 'Training'}</span>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <div style={{ height: 28, padding: '0 14px', background: accent, borderRadius: 6, display: 'flex', alignItems: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>
                    {isTr ? 'Yeni Oluştur' : 'Create New'}
                  </div>
                  <div style={{ width: 26, height: 26, background: '#16a34a', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ExcelIcon />
                  </div>
                </div>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 9.5 }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    {(isTr
                      ? ['Evrak', 'Eğitim Tarihi', 'Eğitim Adı', 'Açıklama', 'Eğitimci', 'Eğitim Yeri', 'Tamamlandı mı?', 'İşlemler']
                      : ['Document', 'Training Date', 'Training Name', 'Description', 'Trainer', 'Training Location', 'Completed?', 'Actions']
                    ).map(col => (
                      <th key={col} style={{ padding: '7px 10px', fontWeight: 700, color: '#475569', textAlign: (isTr ? ['Tamamlandı mı?', 'İşlemler', 'Eğitim Tarihi'] : ['Completed?', 'Actions', 'Training Date']).includes(col) ? 'center' : 'left', whiteSpace: 'nowrap', fontSize: 9.5 }}>{col}</th>
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
                      <td style={{ padding: '7px 10px', textAlign: 'center', color: '#64748b', whiteSpace: 'nowrap' }}>{row.tarih}</td>
                      <td style={{ padding: '7px 10px', color: accent, fontWeight: 500 }}>{row.egitim}</td>
                      <td style={{ padding: '7px 10px', color: '#64748b' }}>{row.aciklama}</td>
                      <td style={{ padding: '7px 10px', color: '#475569' }}>{row.egitimci}</td>
                      <td style={{ padding: '7px 10px', color: '#475569' }}>{row.yer}</td>
                      <td style={{ padding: '7px 10px', textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex' }}>
                          {row.tamamlandi ? <CheckCircleIcon /> : <XCircleIcon />}
                        </div>
                      </td>
                      <td style={{ padding: '7px 10px' }}>
                        <div style={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
                          <div style={{ width: 22, height: 22, background: '#f59e0b', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><EditIcon /></div>
                          <div style={{ width: 22, height: 22, background: accent, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><DetailIcon /></div>
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
