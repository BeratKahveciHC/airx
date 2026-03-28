import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── İkon sistemi ── */
const Ic = ({ d, d2, d3, d4, size, color, circle, poly, rect, line, line2, line3 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {circle && <circle cx={circle[0]} cy={circle[1]} r={circle[2]}/>}
    {d  && <path d={d}/>}
    {d2 && <path d={d2}/>}
    {d3 && <path d={d3}/>}
    {d4 && <path d={d4}/>}
    {poly && <polyline points={poly}/>}
    {rect && <rect x={rect[0]} y={rect[1]} width={rect[2]} height={rect[3]} rx={rect[4]||0}/>}
    {line  && <line x1={line[0]}  y1={line[1]}  x2={line[2]}  y2={line[3]}/>}
    {line2 && <line x1={line2[0]} y1={line2[1]} x2={line2[2]} y2={line2[3]}/>}
    {line3 && <line x1={line3[0]} y1={line3[1]} x2={line3[2]} y2={line3[3]}/>}
  </svg>
)

const ClockIcon     = (p) => <Ic {...p} circle={[12,12,10]} d="M12 6v6l4 2"/>
const UserIcon      = (p) => <Ic {...p} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" circle={[12,7,4]}/>
const CalCheckIcon  = (p) => <Ic {...p} rect={[3,4,18,18,2]} d="M16 2v4M8 2v4M3 10h18m-9 6 2 2 4-4"/>
const TableIcon     = (p) => <Ic {...p} rect={[3,3,18,18,2]} line={[3,9,21,9]} line2={[3,15,21,15]} line3={[9,3,9,21]}/>
const KeyIcon       = (p) => <Ic {...p} circle={[7.5,15.5,5.5]} d="m21 2-9.6 9.6m0 0 3 3L22 7l-3-3"/>
const UserCheckIcon = (p) => <Ic {...p} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" circle={[9,7,4]} poly="16 11 18 13 22 9"/>
const UtensilsIcon  = (p) => <Ic {...p} d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
const ClipboardIcon = (p) => <Ic {...p} rect={[8,2,8,4,1]} d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" d2="M12 11h4M12 16h4M8 11h.01M8 16h.01"/>
const FileClockIcon = (p) => <Ic {...p} d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" d2="M14 2v4a2 2 0 0 0 2 2h4" circle={[8,16,6]} d3="M9.5 17.5 8 16.25V14"/>
const BookOpenIcon  = (p) => <Ic {...p} d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" d2="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
const ScaleIcon     = (p) => <Ic {...p} d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" d2="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" d3="M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
const GiftIcon      = (p) => <Ic {...p} poly="20 12 20 22 4 22 4 12" rect={[2,7,20,5]} d="M12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" d2="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
const RefreshCwIcon = (p) => <Ic {...p} d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5" d2="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5"/>
const BarChartIcon  = (p) => <Ic {...p} line={[18,20,18,10]} line2={[12,20,12,4]} line3={[6,20,6,14]} d="M2 20h20"/>

const MODULES = [
  { Icon: ClockIcon,     name: 'PDKS',               accent: '#38bdf8', desc: 'Personel giriş-çıkışlarını mobil uygulama üzerinden takip edin. Biyometrik cihaz gerektirmez, QR kod ile saniyeler içinde işlem tamamlanır.',         features: ['Mobil Giriş-Çıkış', 'Otomatik Mesai Hesabı', 'Geç Kalma Bildirimleri', 'Gerçek Zamanlı Takip'] },
  { Icon: UserIcon,      name: 'Özlük Dosyası',      accent: '#a78bfa', desc: 'Personele ait tüm özlük bilgilerini dijital ortamda saklayın ve yönetin. Belge yükleme, sicil takibi ve arşivleme tek ekranda.',                         features: ['Dijital Sicil Kartı', 'Belge Yükleme & Arşiv', 'İşe Giriş-Çıkış Kaydı', 'Toplu Güncelleme'] },
  { Icon: CalCheckIcon,  name: 'İzin Yönetimi',      accent: '#34d399', desc: 'Personel izin taleplerini dijital onay akışıyla yönetin. Yıllık izin bakiyeleri otomatik hesaplanır, kağıt form süreçleri tarihe karışır.',              features: ['Online Talep & Onay', 'Otomatik Bakiye Hesabı', 'Takvim Görünümü', 'Çoklu İzin Tipi'] },
  { Icon: TableIcon,     name: 'Puantaj',             accent: '#fbbf24', desc: 'Çalışma sürelerini ve devam durumlarını aylık puantaj cetveli olarak otomatik oluşturun. Bordro hesaplamalarına hazır çıktı alın.',                       features: ['Otomatik Puantaj Cetveli', 'Mesai & Fazla Mesai', 'Bordro Entegrasyonu', 'Excel Export'] },
  { Icon: KeyIcon,       name: 'Erişim Kontrolü',    accent: '#f87171', desc: 'Bina ve bölüm girişlerini dijital olarak yönetin. Hangi personelin hangi alana erişebildiğini tanımlayın, anlık kayıt tutun.',                            features: ['Bölge Bazlı Yetkilendirme', 'Anlık Giriş Kaydı', 'Erişim Raporu', 'Mobil Doğrulama'] },
  { Icon: UserCheckIcon, name: 'Ziyaretçi Yönetimi', accent: '#22d3ee', desc: 'Kurumunuza gelen ziyaretçileri kayıt altına alın. Ziyaret nedeni, refakatçi ve süre bilgilerini dijital ortamda takip edin.',                            features: ['Dijital Ziyaretçi Kaydı', 'QR Rozet Oluşturma', 'Ziyaretçi Geçmişi', 'Anlık Bildirim'] },
  { Icon: UtensilsIcon,  name: 'Yemekhane',           accent: '#fb923c', desc: 'Personel yemek kullanımını ve menü tercihlerini dijital olarak takip edin. Yemekhane maliyetlerini analiz edin, israfı önleyin.',                          features: ['Dijital Yemek Kartı', 'Günlük Menü Yönetimi', 'Kullanım Raporları', 'Maliyet Analizi'] },
  { Icon: ClipboardIcon, name: 'Anket',               accent: '#a3e635', desc: 'Çalışan memnuniyeti, iç iletişim ve geri bildirim süreçleri için kolayca anket oluşturun. Sonuçları anlık analiz edin.',                                  features: ['Kolay Anket Oluşturma', 'Anonim Katılım Seçeneği', 'Anlık Sonuç Analizi', 'Departman Bazlı Raporlama'] },
  { Icon: FileClockIcon, name: 'Süreli Evraklar',     accent: '#f472b6', desc: 'Son kullanma tarihi olan belgeleri (ehliyet, sertifika, sözleşme vb.) takip edin. Süresi dolmadan otomatik uyarı alın.',                                  features: ['Son Tarih Takibi', 'Otomatik Hatırlatma', 'Belge Arşivi', 'Yenileme Süreci'] },
  { Icon: BookOpenIcon,  name: 'Eğitim Planlama',     accent: '#60a5fa', desc: 'Personel eğitim planlarını oluşturun, katılımları takip edin ve eğitim tamamlama raporları alın. Gelişim süreçlerini yönetin.',                            features: ['Eğitim Takvimi', 'Katılım Takibi', 'Sertifika Yönetimi', 'Eğitim Raporları'] },
  { Icon: ScaleIcon,     name: 'Hukuki Evraklar',     accent: '#818cf8', desc: 'İş sözleşmeleri, gizlilik taahhütleri ve yasal belgelerinizi güvenli dijital arşivde saklayın. İmza süreçlerini online yönetin.',                         features: ['Dijital Sözleşme Arşivi', 'E-İmza Desteği', 'Versiyon Kontrolü', 'Güvenli Erişim'] },
  { Icon: GiftIcon,      name: 'Yan Haklar',          accent: '#2dd4bf', desc: 'Personele sunulan yan hakları (özel sağlık sigortası, araç, telefon vb.) tanımlayın ve kişi bazında takip edin.',                                          features: ['Yan Hak Tanımlama', 'Kişi Bazlı Atama', 'Maliyet Takibi', 'Dönemsel Raporlama'] },
  { Icon: RefreshCwIcon, name: 'Periyodik Görev',     accent: '#c084fc', desc: 'Düzenli aralıklarla tekrar eden görevleri otomatik olarak oluşturun. Tamamlanma durumlarını takip edin, gecikmelerde uyarı alın.',                         features: ['Otomatik Görev Oluşturma', 'Tekrar Planlaması', 'Durum Takibi', 'Gecikme Bildirimleri'] },
  { Icon: BarChartIcon,  name: 'İş Zekası',           accent: '#79ACDC', desc: "Tüm İK verilerinizi tek bir dashboard'da görselleştirin. Devam, izin, performans ve maliyet analizlerini anlık olarak izleyin.",                         features: ['Anlık Dashboard', 'Özelleştirilebilir Raporlar', 'Trend Analizi', 'Excel & PDF Export'] },
]

const CYCLE_DURATION   = 3500
const USER_PAUSE_DURATION = 8000

export default function Modules() {
  const [active, setActive]       = useState(0)
  const [direction, setDirection] = useState(1)
  const [progressKey, setProgressKey] = useState(0)
  const pauseRef      = useRef(false)
  const pauseTimerRef = useRef(null)
  const cycleTimerRef = useRef(null)

  const goTo = (index, dir) => {
    const d = dir !== undefined ? dir : (index > active ? 1 : -1)
    setDirection(d)
    setActive(index)
    setProgressKey(k => k + 1)
  }

  const handleUserClick = (index) => {
    pauseRef.current = true
    goTo(index)
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    pauseTimerRef.current = setTimeout(() => { pauseRef.current = false }, USER_PAUSE_DURATION)
  }

  useEffect(() => {
    const tick = () => {
      if (!pauseRef.current) {
        setActive(prev => {
          const next = (prev + 1) % MODULES.length
          setDirection(1)
          setProgressKey(k => k + 1)
          return next
        })
      }
      cycleTimerRef.current = setTimeout(tick, CYCLE_DURATION)
    }
    cycleTimerRef.current = setTimeout(tick, CYCLE_DURATION)
    return () => { clearTimeout(cycleTimerRef.current); clearTimeout(pauseTimerRef.current) }
  }, [])

  const mod = MODULES[active]

  return (
    <section id="moduller" style={{
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #eaf3ff 0%, #f0f7ff 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle dot pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(0,60,117,0.07) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
      }} />

      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Başlık ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 'clamp(22px, 3vw, 32px)',
            color: '#79ACDC',
            marginBottom: 14,
            letterSpacing: '-0.01em',
          }}>
            14 Modül
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            color: '#003C75',
            margin: '0 0 14px',
            lineHeight: 1.15,
          }}>
            Tek Platformda{' '}
            <span style={{ color: '#79ACDC' }}>Her Şey</span>
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 500, margin: '0 auto', lineHeight: 1.65 }}>
            İnsan kaynakları yönetiminin her alanı için özel tasarlanmış modüller, tek çatı altında.
          </p>
        </motion.div>

        {/* ── Explorer kutusu ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'flex',
            borderRadius: 28,
            border: '1px solid rgba(0,60,117,0.18)',
            boxShadow: '0 32px 80px rgba(0,30,80,0.20), 0 1px 0 rgba(255,255,255,0.6) inset',
            overflow: 'hidden',
            background: 'linear-gradient(145deg, #002040 0%, #002e5c 60%, #003570 100%)',
          }}
          className="modules-explorer"
        >

          {/* ── Sol Panel ── */}
          <div
            className="modules-left-panel"
            style={{
              width: 240,
              minWidth: 240,
              background: 'rgba(0,0,0,0.18)',
              borderRight: '1px solid rgba(255,255,255,0.07)',
              maxHeight: 540,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{
              padding: '18px 18px 10px',
              fontSize: 10,
              fontWeight: 700,
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              Modüller — {MODULES.length}
            </div>

            {MODULES.map((m, i) => (
              <button
                key={m.name}
                onClick={() => handleUserClick(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '9px 14px 9px 16px',
                  background: active === i ? 'rgba(255,255,255,0.08)' : 'transparent',
                  border: 'none',
                  borderLeft: `3px solid ${active === i ? m.accent : 'transparent'}`,
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  outline: 'none',
                }}
                onMouseEnter={e => { if (active !== i) e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                onMouseLeave={e => { if (active !== i) e.currentTarget.style.background = 'transparent' }}
              >
                <span style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: active === i
                    ? `${m.accent}22`
                    : 'rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.2s',
                  border: active === i ? `1px solid ${m.accent}44` : '1px solid transparent',
                }}>
                  <m.Icon size={15} color={active === i ? m.accent : 'rgba(255,255,255,0.4)'} />
                </span>
                <span style={{
                  fontSize: 13,
                  fontWeight: active === i ? 600 : 400,
                  color: active === i ? '#fff' : 'rgba(255,255,255,0.5)',
                  transition: 'all 0.2s',
                  lineHeight: 1.3,
                }}>
                  {m.name}
                </span>
              </button>
            ))}
          </div>

          {/* ── Sağ Panel ── */}
          <div
            className="modules-right-panel"
            style={{
              flex: 1,
              position: 'relative',
              overflow: 'hidden',
              minHeight: 500,
            }}
          >
            {/* Progress bar */}
            <motion.div
              key={`pb-${progressKey}`}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: CYCLE_DURATION / 1000, ease: 'linear' }}
              style={{
                position: 'absolute', top: 0, left: 0, height: 2, zIndex: 10,
                background: `linear-gradient(90deg, ${mod.accent}, #fff)`,
              }}
            />

            {/* Watermark numara */}
            <div style={{
              position: 'absolute', right: -10, bottom: -20,
              fontSize: 200, fontWeight: 900, lineHeight: 1,
              color: 'rgba(255,255,255,0.025)',
              userSelect: 'none', pointerEvents: 'none',
              fontVariantNumeric: 'tabular-nums',
              letterSpacing: '-0.04em',
            }}>
              {String(active + 1).padStart(2, '0')}
            </div>

            {(() => {
              const ActiveIcon = MODULES[active].Icon
              return (
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={{
                      enter: (d) => ({ opacity: 0, x: d * 40 }),
                      center: { opacity: 1, x: 0 },
                      exit: (d) => ({ opacity: 0, x: d * -24, transition: { duration: 0.18 } }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    style={{ padding: '44px 52px 40px', height: '100%', position: 'relative', zIndex: 1 }}
                    className="modules-right-content"
                  >
                    {/* Modül badge */}
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: `${mod.accent}18`,
                      border: `1px solid ${mod.accent}33`,
                      borderRadius: 100,
                      padding: '4px 12px',
                      marginBottom: 24,
                    }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: mod.accent }} />
                      <span style={{ fontSize: 11, fontWeight: 700, color: mod.accent, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Modül {String(active + 1).padStart(2, '0')} / {MODULES.length}
                      </span>
                    </div>

                    {/* İkon + Başlık */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 20 }}>
                      <div style={{
                        width: 64, height: 64, borderRadius: 20, flexShrink: 0,
                        background: `${mod.accent}18`,
                        border: `1px solid ${mod.accent}33`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        position: 'relative',
                        boxShadow: `0 0 24px ${mod.accent}22`,
                      }}>
                        <ActiveIcon size={28} color={mod.accent} />
                      </div>
                      <h3 style={{
                        fontSize: 'clamp(22px, 2.5vw, 30px)',
                        fontWeight: 800,
                        color: '#fff',
                        margin: 0,
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                      }}>
                        {mod.name}
                      </h3>
                    </div>

                    {/* Açıklama */}
                    <p style={{
                      fontSize: 15,
                      color: 'rgba(219,238,255,0.65)',
                      lineHeight: 1.75,
                      marginBottom: 28,
                      maxWidth: 520,
                    }}>
                      {mod.desc}
                    </p>

                    {/* Özellik chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
                      {mod.features.map(f => (
                        <div key={f} style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.10)',
                          borderRadius: 8,
                          padding: '7px 14px',
                        }}>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke={mod.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Navigation dots */}
                    <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                      {MODULES.map((m, i) => (
                        <button
                          key={i}
                          onClick={() => handleUserClick(i)}
                          style={{
                            width: active === i ? 22 : 6,
                            height: 6,
                            borderRadius: 100,
                            background: active === i ? mod.accent : 'rgba(255,255,255,0.18)',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            transition: 'all 0.3s ease',
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              )
            })()}
          </div>

        </motion.div>
      </div>

      <style>{`
        .modules-left-panel::-webkit-scrollbar { width: 4px; }
        .modules-left-panel::-webkit-scrollbar-track { background: transparent; }
        .modules-left-panel::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 4px; }

        @media (max-width: 768px) {
          .modules-explorer { flex-direction: column !important; }
          .modules-left-panel {
            width: 100% !important; min-width: unset !important;
            max-height: none !important;
            flex-direction: row !important;
            overflow-x: auto !important; overflow-y: hidden !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06) !important;
            padding: 10px 8px !important; gap: 6px;
          }
          .modules-left-panel > div:first-child { display: none !important; }
          .modules-left-panel button {
            flex-direction: column !important;
            padding: 8px 10px !important;
            border-left: none !important;
            border-bottom: 2px solid transparent;
            white-space: nowrap;
            min-width: fit-content;
            border-radius: 10px !important;
            align-items: center;
          }
          .modules-right-content { padding: 28px 24px !important; }
        }
      `}</style>
    </section>
  )
}
