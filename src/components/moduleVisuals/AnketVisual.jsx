import { motion } from 'framer-motion'
import { BrowserMockup, VisualSection } from './shared'

const PEOPLE = ['Ahmet Kaya', 'Zeynep Arslan', 'Mustafa Demir', 'Elif Yıldız']


const ChevronIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

function PieChart({ segments }) {
  const stops = segments.reduce((acc, seg, i) => {
    const prev = i === 0 ? 0 : acc[i - 1].end
    const end = prev + seg.pct
    acc.push({ ...seg, start: prev, end })
    return acc
  }, [])

  const gradient = stops.map(s => `${s.color} ${s.start}% ${s.end}%`).join(', ')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{
        width: 90,
        height: 90,
        borderRadius: '50%',
        background: `conic-gradient(${gradient})`,
        boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
      }} />
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        {segments.map(seg => (
          <div key={seg.label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: seg.color }} />
            <span style={{ fontSize: 8.5, color: '#475569' }}>{seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AnketVisual({ accent = '#0ea5e9', inline, isTr = true }) {
  const QUESTIONS_DATA = [
    {
      soru: isTr ? 'Şirket içi iletişimden memnun musunuz?' : 'Are you satisfied with internal communication?',
      segments: [
        { label: isTr ? 'Evet' : 'Yes', pct: 75, color: '#2563eb' },
        { label: isTr ? 'Hayır' : 'No', pct: 25, color: '#22c55e' },
      ],
      cevaplar: isTr ? ['Evet', 'Evet', 'Evet', 'Hayır'] : ['Yes', 'Yes', 'Yes', 'No'],
    },
    {
      soru: isTr ? 'Haftada kaç gün ofiste çalışmayı tercih edersiniz?' : 'How many days a week do you prefer to work in the office?',
      segments: [
        { label: '5', pct: 75, color: '#2563eb' },
        { label: '3', pct: 25, color: '#22c55e' },
      ],
      cevaplar: ['5', '5', '5', '3'],
    },
    {
      soru: isTr ? 'Hangi iletişim aracını tercih edersiniz?' : 'Which communication tool do you prefer?',
      segments: [
        { label: isTr ? 'E-posta' : 'E-mail', pct: 50, color: '#2563eb' },
        { label: isTr ? 'Mesajlaşma' : 'Messaging', pct: 50, color: '#22c55e' },
      ],
      cevaplar: isTr ? ['E-posta', 'Mesajlaşma', 'E-posta', 'Mesajlaşma'] : ['E-mail', 'Messaging', 'E-mail', 'Messaging'],
    },
  ]

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
        <BrowserMockup url="anket-raporu" activeNav="Modüller" isTr={isTr}>
          <div style={{ background: '#f1f5f9', padding: '14px', display: 'flex', flexDirection: 'column', gap: 12 }}>

            {/* filtre */}
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: '12px 16px', boxShadow: '0 2px 8px rgba(0,30,80,0.04)', display: 'flex', alignItems: 'flex-end', gap: 12 }}>
              <div>
                <div style={{ fontSize: 9, fontWeight: 600, color: '#64748b', marginBottom: 4 }}>{isTr ? 'Anket' : 'Survey'}</div>
                <div style={{ border: '1px solid #cbd5e1', borderRadius: 5, height: 34, padding: '0 10px', display: 'flex', alignItems: 'center', minWidth: 140, background: '#fff' }}>
                  <span style={{ fontSize: 9.5, color: '#334155', lineHeight: 1.3 }}>{isTr ? <>Çalışan Memnuniyet<br />Anketi</> : <>Employee Satisfaction<br />Survey</>}</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 600, color: '#64748b', marginBottom: 4 }}>{isTr ? 'Personel' : 'Personnel'}</div>
                <div style={{ border: '1px solid #cbd5e1', borderRadius: 5, height: 34, padding: '0 10px', display: 'flex', alignItems: 'center', gap: 6, minWidth: 130 }}>
                  <span style={{ fontSize: 9.5, color: '#94a3b8', flex: 1 }}>{isTr ? 'Seçiniz...' : 'Select...'}</span>
                  <ChevronIcon />
                </div>
              </div>
              <div style={{ height: 34, padding: '0 16px', background: '#475569', borderRadius: 5, display: 'flex', alignItems: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>
                {isTr ? 'Filtrele' : 'Filter'}
              </div>
            </div>

            {/* rapor */}
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,30,80,0.06)' }}>
              <div style={{ padding: '10px 16px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#1e293b' }}>{isTr ? 'Anket Raporu' : 'Survey Report'}</span>
              </div>

              {QUESTIONS_DATA.map((q, qi) => (
                <motion.div
                  key={qi}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + qi * 0.1 }}
                  style={{ borderBottom: qi < QUESTIONS_DATA.length - 1 ? '1px solid #e2e8f0' : 'none' }}
                >
                  {/* soru başlığı */}
                  <div style={{ padding: '10px 14px 0', background: '#fafafa', borderBottom: '1px solid #f1f5f9' }}>
                    <span style={{ fontSize: 10, fontWeight: 600, color: '#334155' }}>{q.soru}</span>
                  </div>

                  {/* grafik + tablo */}
                  <div className="anket-row" style={{ display: 'flex', gap: 0, padding: '16px 14px', alignItems: 'flex-start' }}>
                    {/* pie */}
                    <div style={{ flexShrink: 0, paddingRight: 32 }}>
                      <PieChart segments={q.segments} />
                    </div>

                    {/* tablo */}
                    <div style={{ flex: 1 }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 9.5 }}>
                        <thead>
                          <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                            <th style={{ padding: '5px 10px', fontWeight: 600, color: '#475569', textAlign: 'left' }}>{isTr ? 'Ad Soyad' : 'Full Name'}</th>
                            <th style={{ padding: '5px 10px', fontWeight: 600, color: '#475569', textAlign: 'left' }}>{isTr ? 'Cevap' : 'Answer'}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {PEOPLE.map((name, pi) => (
                            <tr key={pi} style={{ borderBottom: pi < PEOPLE.length - 1 ? '1px solid #f8fafc' : 'none' }}>
                              <td style={{ padding: '5px 10px', color: accent }}>{name}</td>
                              <td style={{ padding: '5px 10px', color: '#475569' }}>{q.cevaplar[pi]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </BrowserMockup>
      </motion.div>
      <style>{`
        @media (max-width: 560px) {
          .anket-row { flex-direction: column !important; align-items: center !important; }
          .anket-row > div:first-child { padding-right: 0 !important; padding-bottom: 12px !important; }
        }
      `}</style>
    </VisualSection>
  )
}
