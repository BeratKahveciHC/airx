import { motion } from 'framer-motion'
import { BrowserMockup, VisualSection } from './shared'

const STATS = [
  { icon: '👤', value: 48, label: 'Aktif Personeller', sub: 'Puantaja Dahil Değil: 2', color: '#3b82f6' },
  { icon: '→', value: 31, label: 'Gelenler', color: '#22c55e' },
  { icon: '⊞', value: 5, label: 'Müsaitlikler', color: '#8b5cf6' },
  { icon: '✕', value: 8, label: 'Gelmeyenler', color: '#ef4444' },
  { icon: '⏰', value: 3, label: 'Geç Gelenler', color: '#f59e0b' },
  { icon: '✈', value: 2, label: 'İzinde', color: '#0ea5e9' },
]

const IZIN_TALEPLERI = [
  { name: 'Ahmet Kaya', tip: 'Yıllık İzin', dept: 'Yazılım Ekibi' },
  { name: 'Zeynep Arslan', tip: 'Ücretsiz İzin', dept: 'Pazarlama' },
  { name: 'Mustafa Demir', tip: 'Yıllık İzin', dept: 'İkitelli Merkez' },
  { name: 'Elif Yıldız', tip: 'Yıllık İzin', dept: 'Satış' },
]

const GELMEYENLER = [
  { name: 'Serkan Çelik', dept: 'Yazılım Ekibi' },
  { name: 'Fatma Öztürk', dept: 'Yazılım Ekibi' },
  { name: 'Hüseyin Şahin', dept: 'Yazılım Ekibi' },
  { name: 'Merve Aydın', dept: 'Yazılım Ekibi' },
  { name: 'Burak Koç', dept: 'Yazılım Ekibi' },
]

const SON_EYLEMLER = [
  { name: 'Ahmet Kaya', tip: 'Giriş', zaman: '26-03-2025 08:54:12', renk: '#22c55e' },
  { name: 'Zeynep Arslan', tip: 'Çıkış', zaman: '25-03-2025 18:02:38', renk: '#ef4444' },
  { name: 'Mustafa Demir', tip: 'Giriş', zaman: '25-03-2025 09:11:47', renk: '#22c55e' },
  { name: 'Elif Yıldız', tip: 'Çıkış', zaman: '24-03-2025 17:57:23', renk: '#ef4444' },
  { name: 'Serkan Çelik', tip: 'Giriş', zaman: '24-03-2025 08:44:09', renk: '#22c55e' },
]

const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
)

function StatCard({ stat, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      style={{
        flex: 1,
        background: '#fff',
        borderRadius: 8,
        border: '1px solid #e2e8f0',
        padding: '10px 12px',
        boxShadow: '0 1px 4px rgba(0,30,80,0.05)',
        minWidth: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 6 }}>
        <div style={{ width: 28, height: 28, borderRadius: 7, background: stat.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>
          {stat.icon}
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em', lineHeight: 1 }}>
          {stat.value}
        </div>
      </div>
      <div style={{ marginTop: 8 }}>
        <div style={{ fontSize: 8.5, fontWeight: 600, color: '#475569' }}>{stat.label}</div>
        {stat.sub && <div style={{ fontSize: 7.5, color: '#94a3b8', marginTop: 2 }}>{stat.sub}</div>}
      </div>
    </motion.div>
  )
}

export default function IsZekasiVisual({ accent = '#0ea5e9', inline }) {
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
        <BrowserMockup url="anasayfa" activeNav="Anasayfa" maxWidth={920}>
          <div style={{ background: '#f1f5f9', padding: '12px', display: 'flex', flexDirection: 'column', gap: 10 }}>

            {/* stat kartlar */}
            <div className="is-zekasi-stats" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {STATS.map((s, i) => <StatCard key={s.label} stat={s} delay={0.1 + i * 0.05} />)}
            </div>

            {/* orta satır: izin talepleri + gelmeyenler */}
            <div className="is-zekasi-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>

              {/* izin talepleri */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.3 }}
                style={{ background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,30,80,0.05)' }}
              >
                <div style={{ padding: '8px 12px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#1e293b' }}>Onay Bekleyen İzin Talepleri</span>
                  <span style={{ color: accent }}><ArrowIcon /></span>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 8.5 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc' }}>
                      {['Ad Soyad', 'İzin Tipi', 'Departman'].map(h => (
                        <th key={h} style={{ padding: '5px 10px', fontWeight: 600, color: '#475569', textAlign: 'left', fontSize: 8.5 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {IZIN_TALEPLERI.map((r, i) => (
                      <tr key={i} style={{ borderTop: '1px solid #f8fafc' }}>
                        <td style={{ padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 5 }}>
                          <div style={{ width: 20, height: 20, borderRadius: '50%', background: accent + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7.5, fontWeight: 700, color: accent, flexShrink: 0 }}>
                            {r.name[0]}
                          </div>
                          <span style={{ color: '#334155', fontWeight: 500 }}>{r.name}</span>
                        </td>
                        <td style={{ padding: '5px 10px', color: accent }}>{r.tip}</td>
                        <td style={{ padding: '5px 10px', color: '#64748b' }}>{r.dept}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ padding: '6px 10px', display: 'flex', justifyContent: 'center', gap: 3, borderTop: '1px solid #f1f5f9' }}>
                  {['‹', '1', '2', '›'].map((p, i) => (
                    <div key={i} style={{ width: 16, height: 16, borderRadius: '50%', background: p === '1' ? accent : 'transparent', border: p === '1' ? 'none' : '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: p === '1' ? '#fff' : '#94a3b8', fontWeight: p === '1' ? 700 : 400 }}>{p}</div>
                  ))}
                </div>
              </motion.div>

              {/* gelmeyenler */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.35 }}
                style={{ background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,30,80,0.05)' }}
              >
                <div style={{ padding: '8px 12px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#1e293b' }}>Gelmeyenler</span>
                  <span style={{ color: accent }}><ArrowIcon /></span>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 8.5 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc' }}>
                      {['Ad Soyad', 'Departman'].map(h => (
                        <th key={h} style={{ padding: '5px 10px', fontWeight: 600, color: '#475569', textAlign: 'left', fontSize: 8.5 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {GELMEYENLER.map((r, i) => (
                      <tr key={i} style={{ borderTop: '1px solid #f8fafc' }}>
                        <td style={{ padding: '5px 10px', color: '#334155', fontWeight: 500 }}>{r.name}</td>
                        <td style={{ padding: '5px 10px', color: '#64748b' }}>{r.dept}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ padding: '6px 10px', display: 'flex', justifyContent: 'center', gap: 3, borderTop: '1px solid #f1f5f9' }}>
                  {['‹', '1', '2', '3', '4', '›'].map((p, i) => (
                    <div key={i} style={{ width: 16, height: 16, borderRadius: '50%', background: p === '1' ? accent : 'transparent', border: p === '1' ? 'none' : '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: p === '1' ? '#fff' : '#94a3b8', fontWeight: p === '1' ? 700 : 400 }}>{p}</div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* son eylemler */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.4 }}
              style={{ background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,30,80,0.05)' }}
            >
              <div style={{ padding: '8px 12px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#1e293b' }}>Son Eylemler</span>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 8.5 }}>
                <thead>
                  <tr style={{ background: '#f8fafc' }}>
                    {['Personel', 'Etkinlik Tipi', 'Zaman'].map(h => (
                      <th key={h} style={{ padding: '5px 12px', fontWeight: 600, color: '#475569', textAlign: 'left', fontSize: 8.5 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SON_EYLEMLER.map((r, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: 0.45 + i * 0.04 }}
                      style={{ borderTop: '1px solid #f8fafc' }}
                    >
                      <td style={{ padding: '5px 12px', color: '#334155', fontWeight: 500 }}>{r.name}</td>
                      <td style={{ padding: '5px 12px' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 8, fontWeight: 700, color: r.renk, background: r.renk + '12', borderRadius: 4, padding: '2px 7px' }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: r.renk, display: 'inline-block' }} />
                          {r.tip}
                        </span>
                      </td>
                      <td style={{ padding: '5px 12px', color: '#94a3b8', fontSize: 8 }}>{r.zaman}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
              <div style={{ padding: '6px 10px', display: 'flex', justifyContent: 'center', gap: 3, borderTop: '1px solid #f1f5f9' }}>
                {['‹', '1', '2', '3', '4', '›'].map((p, i) => (
                  <div key={i} style={{ width: 16, height: 16, borderRadius: '50%', background: p === '1' ? accent : 'transparent', border: p === '1' ? 'none' : '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: p === '1' ? '#fff' : '#94a3b8', fontWeight: p === '1' ? 700 : 400 }}>{p}</div>
                ))}
              </div>
            </motion.div>

          </div>
        </BrowserMockup>
      </motion.div>
      <style>{`
        @media (max-width: 700px) {
          .is-zekasi-stats > div { flex: 1 1 calc(33% - 8px) !important; min-width: 80px !important; }
          .is-zekasi-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .is-zekasi-stats > div { flex: 1 1 calc(50% - 8px) !important; }
        }
      `}</style>
    </VisualSection>
  )
}
