import { motion } from 'framer-motion'
import { BrowserMockup, VisualSection } from './shared'

const TABLE_DATA_TR = [
  { ad: 'Toplantı Odası Temizliği', tarih: '14-01-2025 09:00', durum: 'Aktif', onem: 1, yer: 'Toplantı Odası', sure: '08:00 - 18:00', kontroler: 'masa temizliği, projeksiyon kontrolü' },
  { ad: 'Kahve Makinesi Bakımı', tarih: '20-01-2025 07:30', durum: 'Aktif', onem: 4, yer: 'Mutfak', sure: '07:30 - 08:30', kontroler: 'makine temizliği, kahve stok kontrolü' },
  { ad: 'Ortak Alan Temizliği', tarih: '15-02-2025 09:00', durum: 'Aktif', onem: 6, yer: 'Ortak Alan', sure: '08:00 - 18:00', kontroler: 'zemin temizliği, cam silimi' },
  { ad: 'Güvenlik Sistemi Kontrolü', tarih: '01-03-2025 08:00', durum: 'Aktif', onem: 8, yer: 'Giriş Katı', sure: '00:00 - 23:59', kontroler: 'kamera kontrolü, kapı kilidi' },
  { ad: 'Server Odası Bakımı', tarih: '10-03-2025 10:00', durum: 'Aktif', onem: 10, yer: 'Server Odası', sure: '08:00 - 09:00', kontroler: 'nem kontrolü, sıcaklık ölçümü' },
  { ad: 'Yangın Tüpü Kontrolü', tarih: '20-03-2025 11:00', durum: 'Aktif', onem: 10, yer: 'Tüm Bina', sure: '09:00 - 12:00', kontroler: 'doluluk kontrolü, etiket kontrolü' },
  { ad: 'Klima Filtresi Temizliği', tarih: '05-04-2025 14:00', durum: 'Aktif', onem: 8, yer: 'Tüm Bina', sure: '09:00 - 17:00', kontroler: 'filtre temizliği, soğutucu kontrolü' },
  { ad: 'Tuvalet Temizliği', tarih: '15-04-2025 08:00', durum: 'Aktif', onem: 10, yer: 'Tuvaletler', sure: '08:00 - 20:00', kontroler: 'dezenfektan, sabun, kağıt havlu kontrolü' },
]

const TABLE_DATA_EN = [
  { ad: 'Meeting Room Cleaning', tarih: '14-01-2025 09:00', durum: 'Active', onem: 1, yer: 'Meeting Room', sure: '08:00 - 18:00', kontroler: 'table cleaning, projector check' },
  { ad: 'Coffee Machine Maintenance', tarih: '20-01-2025 07:30', durum: 'Active', onem: 4, yer: 'Kitchen', sure: '07:30 - 08:30', kontroler: 'machine cleaning, coffee stock check' },
  { ad: 'Common Area Cleaning', tarih: '15-02-2025 09:00', durum: 'Active', onem: 6, yer: 'Common Area', sure: '08:00 - 18:00', kontroler: 'floor cleaning, window wiping' },
  { ad: 'Security System Check', tarih: '01-03-2025 08:00', durum: 'Active', onem: 8, yer: 'Entry Floor', sure: '00:00 - 23:59', kontroler: 'camera check, door lock' },
  { ad: 'Server Room Maintenance', tarih: '10-03-2025 10:00', durum: 'Active', onem: 10, yer: 'Server Room', sure: '08:00 - 09:00', kontroler: 'humidity check, temperature measurement' },
  { ad: 'Fire Extinguisher Check', tarih: '20-03-2025 11:00', durum: 'Active', onem: 10, yer: 'Whole Building', sure: '09:00 - 12:00', kontroler: 'fullness check, label check' },
  { ad: 'AC Filter Cleaning', tarih: '05-04-2025 14:00', durum: 'Active', onem: 8, yer: 'Whole Building', sure: '09:00 - 17:00', kontroler: 'filter cleaning, coolant check' },
  { ad: 'Restroom Cleaning', tarih: '15-04-2025 08:00', durum: 'Active', onem: 10, yer: 'Restrooms', sure: '08:00 - 20:00', kontroler: 'disinfectant, soap, paper towel check' },
]

const SearchIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
)
const EditIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)
const TrashIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6" />
  </svg>
)

function OnemBadge({ onem }) {
  const color = onem <= 3 ? '#22c55e' : onem <= 6 ? '#f59e0b' : '#ef4444'
  return (
    <div style={{ width: 22, height: 22, borderRadius: '50%', background: color + '18', border: `1px solid ${color}33`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800, color }}>
      {onem}
    </div>
  )
}

export default function PeriyodikGorevVisual({ accent = '#0ea5e9', inline, isTr = true }) {
  const TABLE_DATA = isTr ? TABLE_DATA_TR : TABLE_DATA_EN
  const cols = isTr
    ? ['Adı', 'Başlangıç\nTarihi', 'Durumu', 'Önemi', 'Görev\nYeri', 'Görev Süresi', 'Kontroler', 'İşlemler']
    : ['Name', 'Start\nDate', 'Status', 'Priority', 'Task\nLocation', 'Task Duration', 'Controller', 'Actions']
  const centerCols = isTr
    ? ['Önemi', 'Durumu', 'İşlemler']
    : ['Priority', 'Status', 'Actions']
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
        <BrowserMockup url="periyodik-gorevler" activeNav="Modüller" maxWidth={960} isTr={isTr}>
          <div style={{ background: '#f1f5f9', padding: '14px' }}>
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,30,80,0.06)' }}>

              <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1e293b' }}>{isTr ? 'Periyodik Görevler' : 'Periodic Tasks'}</span>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ display: 'flex', border: '1.5px solid #cbd5e1', borderRadius: 6, overflow: 'hidden', height: 27 }}>
                    <input readOnly style={{ width: 150, padding: '0 8px', fontSize: 9.5, border: 'none', outline: 'none', background: '#fff' }} />
                    <div style={{ width: 27, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><SearchIcon /></div>
                  </div>
                  <div style={{ height: 27, padding: '0 12px', background: accent, borderRadius: 6, display: 'flex', alignItems: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>{isTr ? 'İşlemler' : 'Actions'}</div>
                </div>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 9 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                      {cols.map(col => (
                        <th key={col} style={{ padding: '7px 10px', fontWeight: 700, color: '#475569', textAlign: centerCols.includes(col) ? 'center' : 'left', whiteSpace: 'pre-line', lineHeight: 1.3, fontSize: 9 }}>{col}</th>
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
                        transition={{ duration: 0.22, delay: 0.15 + i * 0.05 }}
                        style={{ borderBottom: i < TABLE_DATA.length - 1 ? '1px solid #f1f5f9' : 'none' }}
                      >
                        <td style={{ padding: '7px 10px', color: accent, fontWeight: 500, whiteSpace: 'nowrap' }}>{row.ad}</td>
                        <td style={{ padding: '7px 10px', color: '#64748b', whiteSpace: 'nowrap', fontSize: 8.5 }}>{row.tarih}</td>
                        <td style={{ padding: '7px 10px', textAlign: 'center' }}>
                          <span style={{ fontSize: 8.5, fontWeight: 600, color: '#16a34a', background: '#dcfce7', borderRadius: 4, padding: '2px 6px' }}>{row.durum}</span>
                        </td>
                        <td style={{ padding: '7px 10px', textAlign: 'center' }}>
                          <OnemBadge onem={row.onem} />
                        </td>
                        <td style={{ padding: '7px 10px', color: '#475569', whiteSpace: 'nowrap' }}>{row.yer}</td>
                        <td style={{ padding: '7px 10px', color: '#64748b', whiteSpace: 'nowrap', fontSize: 8.5 }}>
                          <div style={{ fontSize: 7.5, color: '#94a3b8', marginBottom: 1 }}>{isTr ? 'Saatte Bir' : 'Hourly'}</div>
                          {row.sure}
                        </td>
                        <td style={{ padding: '7px 10px', color: accent, fontSize: 8.5, maxWidth: 200 }}>{row.kontroler}</td>
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
              </div>

              <div style={{ padding: '10px', display: 'flex', justifyContent: 'center', gap: 4, borderTop: '1px solid #f1f5f9' }}>
                {['«', '‹', '1', '2', '3', '›', '»'].map((p, i) => (
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
