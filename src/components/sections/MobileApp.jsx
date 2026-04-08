'use client'

﻿import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const BULLET_ICONS = [
  { color: '#003C75', bg: 'rgba(0,60,117,0.07)', icon: <><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></> },
  { color: '#0369a1', bg: 'rgba(3,105,161,0.07)', icon: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></> },
  { color: '#7c3aed', bg: 'rgba(124,58,237,0.07)', icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></> },
  { color: '#15803d', bg: 'rgba(34,197,94,0.07)', icon: <><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.56 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></> },
]

function PhoneMockup() {
  return (
    <div style={{ position: 'relative', flexShrink: 0 }}>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '55%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          height: 500,
          background: 'radial-gradient(ellipse, rgba(121,172,220,0.22) 0%, rgba(121,172,220,0.1) 45%, transparent 70%)',
          filter: 'blur(48px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '35%',
          top: '22%',
          transform: 'translate(-50%, -50%)',
          width: 180,
          height: 180,
          background: 'radial-gradient(circle, rgba(255,255,255,0.75) 0%, transparent 70%)',
          filter: 'blur(28px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: 24, y: -8 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mobile-floating-note"
        style={{
          position: 'absolute',
          top: 80,
          right: -104,
          zIndex: 20,
          background: 'rgba(255,255,255,0.98)',
          borderRadius: 16,
          padding: '10px 14px',
          boxShadow: '0 16px 48px rgba(0,30,80,0.14), 0 1px 0 rgba(255,255,255,0.92) inset',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          width: 172,
          border: '1px solid rgba(0,60,117,0.06)',
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            flexShrink: 0,
            background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>İzin Onaylandı</div>
          <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 2 }}>Az önce</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -24, y: 8 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mobile-floating-stat"
        style={{
          position: 'absolute',
          bottom: 128,
          left: -100,
          zIndex: 20,
          background: 'linear-gradient(135deg, #ffffff 0%, #eaf4ff 100%)',
          borderRadius: 16,
          padding: '12px 16px',
          boxShadow: '0 16px 40px rgba(0,60,117,0.14), 0 1px 0 rgba(255,255,255,0.82) inset',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          width: 158,
          border: '1px solid rgba(121,172,220,0.22)',
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 9,
            flexShrink: 0,
            background: 'rgba(121,172,220,0.12)',
            border: '1px solid rgba(121,172,220,0.16)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4e86bb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 10, color: '#64748b', fontWeight: 500, marginBottom: 2 }}>Aktif Personel</div>
          <div style={{ fontSize: 17, fontWeight: 800, color: '#003C75', letterSpacing: '-0.02em' }}>1.284</div>
        </div>
      </motion.div>

      <div style={{ perspective: '1200px' }}>
        <motion.div
          initial={{ rotateY: -8, rotateX: 2 }}
          whileInView={{ rotateY: [-8, 180, 352], rotateX: [2, -1, 2] }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.4, 0, 0.15, 1] }}
          className="mobile-phone-shell"
          style={{
            width: 268,
            height: 548,
            borderRadius: 52,
            background: 'linear-gradient(160deg, #e8f2fc 0%, #c2d9f0 100%)',
            border: '7.5px solid #8fb8dc',
            position: 'relative',
            zIndex: 1,
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.75),
              inset 0 0 0 1px rgba(255,255,255,0.55),
              0 56px 110px rgba(0,30,80,0.34),
              0 12px 40px rgba(0,60,117,0.26),
              0 0 0 0.5px rgba(0,60,117,0.18)
            `,
          }}
        >
          <div style={{ position: 'absolute', left: -10, top: 92, width: 3.5, height: 26, background: '#003C75', borderRadius: '2px 0 0 2px' }} />
          <div style={{ position: 'absolute', left: -10, top: 128, width: 3.5, height: 26, background: '#003C75', borderRadius: '2px 0 0 2px' }} />
          <div style={{ position: 'absolute', left: -10, top: 164, width: 3.5, height: 26, background: '#003C75', borderRadius: '2px 0 0 2px' }} />
          <div style={{ position: 'absolute', right: -10, top: 118, width: 3.5, height: 50, background: '#003C75', borderRadius: '0 2px 2px 0' }} />

          <div style={{ position: 'absolute', inset: 2, borderRadius: 46, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
            {/* status bar */}
            <div style={{ height: 48, background: 'linear-gradient(180deg, #b8d3ec 0%, #9fc0e0 100%)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 22px 10px', flexShrink: 0, position: 'relative' }}>
              <span style={{ color: '#002850', fontSize: 11, fontWeight: 700 }}>09:41</span>
              <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 90, height: 26, borderRadius: 13, background: '#003C75', zIndex: 5 }} />
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 1.5, alignItems: 'flex-end' }}>
                  {[4,6,8,10].map((h,i) => <div key={i} style={{ width: 2.5, height: h, borderRadius: 1, background: i < 3 ? '#334155' : 'rgba(51,65,85,0.25)' }} />)}
                </div>
                <div style={{ width: 18, height: 9, borderRadius: 2, border: '1.5px solid rgba(51,65,85,0.35)', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 1.5, top: 1.5, width: '65%', bottom: 1.5, background: 'rgba(51,65,85,0.65)', borderRadius: 0.5 }} />
                </div>
              </div>
            </div>

            {/* header */}
            <div style={{ background: '#fff', padding: '12px 16px 10px', borderBottom: '1px solid #e8f0f9', flexShrink: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 11, color: '#64748b' }}>Günaydın,</div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em' }}>Berat Kaan SEVEN</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 10, color: '#64748b' }}>Toplam Çalışılan Süre</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>03s 12dk</div>
                </div>
              </div>
            </div>

            {/* durum */}
            <div style={{ background: '#fff', margin: '10px 10px 0', borderRadius: 12, border: '1px solid #e2e8f0', padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#334155', marginBottom: 5 }}>Mevcut Durum</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Çalışıyor</span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 10, color: '#64748b', marginBottom: 5 }}>Son Hareket: <strong style={{ color: '#0f172a' }}>08.02</strong></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'flex-end' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="5" y="5" width="3" height="3" fill="#003C75" stroke="none"/><rect x="16" y="5" width="3" height="3" fill="#003C75" stroke="none"/><rect x="5" y="16" width="3" height="3" fill="#003C75" stroke="none"/></svg>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#003C75' }}>QR ile Giriş</span>
                </div>
              </div>
            </div>

            {/* butonlar */}
            <div style={{ display: 'flex', gap: 8, padding: '10px 10px 0', flexShrink: 0 }}>
              <div style={{ flex: 1, height: 46, background: '#22c55e', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, color: '#fff', boxShadow: '0 3px 12px rgba(34,197,94,0.35)' }}>Giriş Yap</div>
              <div style={{ flex: 1, height: 46, background: '#ef4444', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, color: '#fff', boxShadow: '0 3px 12px rgba(239,68,68,0.35)' }}>Çıkış Yap</div>
            </div>
            <div style={{ margin: '8px 10px 0', height: 42, background: '#f59e0b', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, fontSize: 13, fontWeight: 800, color: '#fff', boxShadow: '0 3px 12px rgba(245,158,11,0.35)', flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Mola Başlat
            </div>

            {/* vardiya */}
            <div style={{ background: '#fff', margin: '10px 10px 0', borderRadius: 12, border: '1px solid #e2e8f0', padding: '10px 12px', flexShrink: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: '#0f172a' }}>Bugünkü Vardiya</span>
                <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 20, padding: '2px 8px', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 5, background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: 5, height: 5, borderRadius: 3, background: '#fff' }} /></div>
                  <span style={{ fontSize: 9, fontWeight: 700, color: '#c2410c' }}>Ekstra</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{ flex: 1, background: '#f8fafc', borderRadius: 8, padding: '7px 10px', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, color: '#64748b', marginBottom: 2 }}>Başlangıç</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#0f172a' }}>08:00</div>
                </div>
                <div style={{ flex: 1, background: '#f8fafc', borderRadius: 8, padding: '7px 10px', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, color: '#64748b', marginBottom: 2 }}>Bitiş</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#0f172a' }}>19:00</div>
                </div>
              </div>
            </div>

            {/* görevlerim */}
            <div style={{ margin: '10px 10px 0', background: '#fff', borderRadius: 12, border: '1px solid #e2e8f0', padding: '10px 12px', flex: 1, overflow: 'hidden' }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>Görevlerim</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { label: 'Reyonlar düzenlenicek', color: '#ef4444' },
                  { label: 'Market Arabaları Sıraya Dizilecek', color: '#22c55e' },
                  { label: 'Z Raporu Oluşturulacak', color: '#22c55e' },
                  { label: 'Aylık Tahsilat Raporu Hazırlanacak', color: '#ef4444' },
                  { label: 'Sunumlar hazırlanacak', color: '#eab308' },
                ].map((g, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: g.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 11, color: '#334155' }}>{g.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* bottom nav */}
            <div style={{ height: 52, background: '#c8ddf0', borderTop: '1px solid rgba(0,60,117,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 4, flexShrink: 0 }}>
              {[
                { label: 'Anasayfa', active: true, svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
                { label: 'Talepler', active: false, svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="9" x2="9" y2="21"/></svg> },
                { label: 'Gelen Kutusu', active: false, svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                { label: 'Profil', active: false, svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
              ].map((item) => (
                <div key={item.label} style={{ color: item.active ? '#003C75' : 'rgba(0,60,117,0.35)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                  {item.svg}
                  {item.active && <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#003C75' }} />}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function MobileApp() {
  const t = useTranslations()
  const BULLETS = BULLET_ICONS.map((b, i) => ({ ...b, text: t(`mobileApp.feature${i + 1}`) }))
  return (
    <section id="mobil" style={{ padding: '96px 24px', background: 'linear-gradient(180deg, #f4f8fd 0%, #ffffff 100%)', overflow: 'hidden' }}>
      <div style={{
        maxWidth: 1160,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: 80,
      }} className="mobile-split">

        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1, minWidth: 280 }}
        >
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700, color: '#003C75',
            margin: '0 0 18px', lineHeight: 1.15,
          }}>
            {t('mobileApp.sectionTitle')}
          </h2>

          <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.72, marginBottom: 32, maxWidth: 420 }}>
            {t('mobileApp.sectionSubtitle')}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 36 }}>
            {BULLETS.map((b, i) => (
              <motion.div
                key={b.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                style={{ display: 'flex', alignItems: 'center', gap: 12 }}
              >
                <div style={{
                  width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                  background: b.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {b.icon}
                  </svg>
                </div>
                <span style={{ fontSize: 15, color: '#374151', fontWeight: 500 }}>{b.text}</span>
              </motion.div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }} className="mobile-actions">
            <button onClick={() => { window.location.href = '/iletisim' }} className="btn-glass" style={{ fontSize: 15, padding: '13px 28px', cursor: 'pointer', borderRadius: 9999 }}>
              {t('mobileApp.exploreButton')}
            </button>
            <button onClick={() => { window.location.href = '/iletisim#demo-form' }} className="btn-outline" style={{ fontSize: 15, padding: '13px 24px', cursor: 'pointer', borderRadius: 9999 }}>
              {t('mobileApp.demoButton')}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', justifyContent: 'center', paddingRight: 56, paddingLeft: 20 }}
          className="mobile-device-col"
        >
          <PhoneMockup />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .mobile-split {
            flex-direction: column !important;
            gap: 60px !important;
            text-align: center;
          }
          .mobile-actions {
            justify-content: center !important;
          }
          .mobile-split > div:last-child {
            padding-right: 0 !important;
            padding-left: 0 !important;
          }
          .mobile-floating-note {
            right: -32px !important;
            top: 92px !important;
            transform: scale(0.92) !important;
            transform-origin: top right !important;
          }
          .mobile-floating-stat {
            left: -28px !important;
            bottom: 132px !important;
            transform: scale(0.92) !important;
            transform-origin: bottom left !important;
          }
        }
        @media (max-width: 860px) {
          .mobile-floating-note,
          .mobile-floating-stat {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .mobile-phone-shell {
            width: 232px !important;
            height: 476px !important;
            border-radius: 44px !important;
            border-width: 6px !important;
          }
          .mobile-actions > * {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 420px) {
          .mobile-phone-shell {
            width: 216px !important;
            height: 442px !important;
          }
        }
      `}</style>
    </section>
  )
}
