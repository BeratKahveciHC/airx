import { motion } from 'framer-motion'

const ENTRY_METHODS_TR = [
  {
    label: 'Beacon',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M6.9 6.9a6 6 0 0 0 0 10.2" />
        <path d="M17.1 6.9a6 6 0 0 1 0 10.2" />
        <path d="M4 4a10 10 0 0 0 0 16" />
        <path d="M20 4a10 10 0 0 1 0 16" />
      </svg>
    ),
  },
  {
    label: 'NFC',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-3.92-8.4-5.33-16.75-3.43" />
      </svg>
    ),
  },
  {
    label: 'Wi - Fi',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="#fff" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Remote',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" fill="#fff" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'QR Kod',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="5" y="5" width="3" height="3" fill="#fff" stroke="none" />
        <rect x="16" y="5" width="3" height="3" fill="#fff" stroke="none" />
        <rect x="5" y="16" width="3" height="3" fill="#fff" stroke="none" />
        <path d="M14 14h3v3h-3z" />
        <path d="M17 17h4" />
        <path d="M17 21v-4" />
      </svg>
    ),
  },
]

const ENTRY_METHODS_EN = ENTRY_METHODS_TR.map(m => m.label === 'QR Kod' ? { ...m, label: 'QR Code' } : m)

const PHONE_NAV_ITEMS_TR = [
  {
    label: 'Anasayfa',
    active: true,
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  },
  {
    label: 'Talepler',
    active: false,
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="9" x2="9" y2="21" /></svg>,
  },
  {
    label: 'Gelen Kutusu',
    active: false,
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  },
  {
    label: 'Profil',
    active: false,
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  },
]

const PHONE_NAV_ITEMS_EN = [
  {
    label: 'Home',
    active: true,
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  },
  {
    label: 'Requests',
    active: false,
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="9" x2="9" y2="21" /></svg>,
  },
  {
    label: 'Inbox',
    active: false,
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  },
  {
    label: 'Profile',
    active: false,
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  },
]

const PHONE_WIDTH = 236
const PHONE_HEIGHT = 510

const CARD_COLORS = {
  blue: 'linear-gradient(145deg, #1a4f8c 0%, #003C75 100%)',
  red: 'linear-gradient(145deg, #d13232 0%, #bb2020 100%)',
}

function PhoneStatusBar() {
  return (
    <div style={{ height: 34, background: 'linear-gradient(180deg, #b8d3ec 0%, #a8c6e4 100%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px', flexShrink: 0 }}>
      <span style={{ fontSize: 10, fontWeight: 700, color: '#002850' }}>09:41</span>
      <div style={{ width: 70, height: 20, borderRadius: 10, background: '#003C75' }} />
      <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
          {[3, 5, 7, 9].map((h, i) => (
            <div key={i} style={{ width: 2, height: h, borderRadius: 1, background: i < 3 ? '#002850' : 'rgba(0,40,80,0.3)' }} />
          ))}
        </div>
        <div style={{ width: 16, height: 8, borderRadius: 2, border: '1.5px solid rgba(0,40,80,0.4)', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 1.5, top: 1.5, width: '60%', bottom: 1.5, background: 'rgba(0,40,80,0.6)', borderRadius: 0.5 }} />
        </div>
      </div>
    </div>
  )
}

function PhoneHeader() {
  return (
    <div style={{ background: '#daeaf8', padding: '7px 16px 9px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(0,60,117,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" /><path d="m12 5-7 7 7 7" />
        </svg>
      </div>
      <div style={{ fontSize: 13, fontWeight: 800, color: '#003C75', letterSpacing: '-0.01em' }}>AiRX</div>
      <div style={{ width: 28 }} />
    </div>
  )
}

function PhoneBottomNav({ isTr = true }) {
  const PHONE_NAV_ITEMS = isTr ? PHONE_NAV_ITEMS_TR : PHONE_NAV_ITEMS_EN
  return (
    <div style={{ background: '#7fb1df', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '8px 0 10px', flexShrink: 0, borderTop: '1px solid rgba(0,60,117,0.12)' }}>
      {PHONE_NAV_ITEMS.map((item) => (
        <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: '#fff', opacity: item.active ? 1 : 0.9 }}>
          {item.svg}
          <span style={{ fontSize: 7.5, fontWeight: item.active ? 700 : 500 }}>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

function ScreenBanner({ title, subtitle, gradient }) {
  return (
    <div style={{ padding: '10px 12px 8px', background: '#ececec', flexShrink: 0 }}>
      <div style={{ background: gradient, borderRadius: 16, border: '2px solid rgba(255,255,255,0.9)', boxShadow: '0 3px 10px rgba(15,23,42,0.16)', padding: '7px 10px 8px', textAlign: 'center' }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>{title}</div>
        <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.88)', lineHeight: 1.3, marginTop: 2 }}>{subtitle}</div>
      </div>
    </div>
  )
}

function MenuGrid({ items, variant }) {
  return (
    <div style={{ flex: 1, background: '#ececec', padding: '12px 12px 14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
      {items.map((item, i) => (
        item ? (
          <div
            key={item.label}
            style={{
              borderRadius: 16,
              background: CARD_COLORS[variant],
              border: '2px solid rgba(255,255,255,0.92)',
              boxShadow: '0 3px 10px rgba(15,23,42,0.14)',
              minHeight: 130,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            {item.svg}
            <span style={{ fontSize: 11, fontWeight: 500, color: '#fff', letterSpacing: '0.01em' }}>{item.label}</span>
          </div>
        ) : (
          <div key={i} style={{ borderRadius: 16, background: CARD_COLORS[variant], border: '2px solid rgba(255,255,255,0.92)', boxShadow: '0 3px 10px rgba(15,23,42,0.14)', minHeight: 130 }} />
        )
      ))}
    </div>
  )
}

function StatusRow({ isTr = true }) {
  return (
    <div style={{ margin: '0 12px', background: '#fff', borderRadius: 18, padding: '8px 12px 10px', boxShadow: '0 3px 12px rgba(15,23,42,0.12)', border: '1px solid rgba(15,23,42,0.06)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 4 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        <span style={{ fontSize: 13, fontWeight: 800, color: '#202020' }}>{isTr ? 'Durum' : 'Status'}</span>
      </div>
      <div style={{ height: 16, borderRadius: 999, background: '#d9d9d9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8.5, color: '#505050' }}>
        {isTr ? 'Şu an yemek molasındasın.' : 'You are currently on a meal break.'}
      </div>
    </div>
  )
}

function BreakCard({ icon, label, subtitle, isTr = true }) {
  return (
    <div style={{ margin: '0 12px', background: '#fff', borderRadius: 18, padding: '12px 14px', boxShadow: '0 3px 12px rgba(15,23,42,0.12)', border: '1px solid rgba(15,23,42,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ width: 24, display: 'flex', justifyContent: 'center', color: '#f59e0b', flexShrink: 0 }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11.5, fontWeight: 800, color: '#202020', marginBottom: 4 }}>{label}</div>
        <div style={{ height: 18, borderRadius: 999, background: '#d9d9d9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8.5, color: '#505050' }}>
          {subtitle}
        </div>
      </div>
      <div style={{ width: 80, height: 50, borderRadius: 16, background: '#2ab84f', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontWeight: 800, fontSize: 11.5, flexShrink: 0 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 4v16" />
          <path d="m18 8-8 4 8 4V8Z" />
        </svg>
        {isTr ? 'Başlat' : 'Start'}
      </div>
    </div>
  )
}

function TimerCard({ title, values, buttonText, segmented, isTr = true }) {
  return (
    <div style={{ margin: '0 12px', background: '#fff', borderRadius: 18, padding: '12px 14px', boxShadow: '0 3px 12px rgba(15,23,42,0.12)', border: '1px solid rgba(15,23,42,0.06)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          {segmented && (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 3-6.7" />
              <path d="M3 3v6h6" />
              <path d="M12 7v5l4 2" />
            </svg>
          )}
          <span style={{ fontSize: 11.5, fontWeight: 800, color: '#202020' }}>{title}</span>
        </div>
        {segmented && (
          <div style={{ display: 'flex', gap: 4 }}>
            <span style={{ fontSize: 8, padding: '3px 7px', borderRadius: 5, background: '#fff', border: '1px solid #bdbdbd', color: '#404040' }}>{isTr ? 'Günlük' : 'Daily'}</span>
            <span style={{ fontSize: 8, padding: '3px 7px', borderRadius: 5, background: '#8b8b8b', color: '#fff' }}>{isTr ? 'Haftalık' : 'Weekly'}</span>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 8, marginBottom: buttonText ? 10 : 0 }}>
        {values.map((item, index) => (
          <div key={item.labelTr} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 50, height: 44, borderRadius: 9, background: '#d9d9d9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, color: '#111827', boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.75)' }}>
                {item.value}
              </div>
              <div style={{ fontSize: 8, color: '#646464', marginTop: 4 }}>{isTr ? item.labelTr : item.labelEn}</div>
            </div>
            {index < values.length - 1 && <div style={{ fontSize: 20, fontWeight: 900, color: '#202020', marginTop: 8 }}>:</div>}
          </div>
        ))}
      </div>
      {buttonText && (
        <div style={{ height: 30, borderRadius: 999, background: '#c1272d', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10.5, fontWeight: 900, letterSpacing: '0.02em' }}>
          {buttonText}
        </div>
      )}
    </div>
  )
}

function PhoneShell({ children, isTr = true }) {
  return (
    <div
      className="pdks-phone-shell"
      style={{
        width: PHONE_WIDTH,
        height: PHONE_HEIGHT,
        borderRadius: 38,
        background: 'linear-gradient(160deg, #e8f2fc 0%, #c2d9f0 100%)',
        border: '6px solid #8fb8dc',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.7), inset 0 0 0 1px rgba(255,255,255,0.5), 0 30px 70px rgba(0,30,80,0.24), 0 10px 28px rgba(0,60,117,0.18)',
      }}
    >
      <div style={{ position: 'absolute', left: -8, top: 78, width: 3, height: 24, background: '#003C75', borderRadius: '2px 0 0 2px' }} />
      <div style={{ position: 'absolute', left: -8, top: 112, width: 3, height: 24, background: '#003C75', borderRadius: '2px 0 0 2px' }} />
      <div style={{ position: 'absolute', right: -8, top: 98, width: 3, height: 48, background: '#003C75', borderRadius: '0 2px 2px 0' }} />

      <div style={{ borderRadius: 32, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#ececec', height: '100%' }}>
        <PhoneStatusBar />
        <PhoneHeader />
        {children}
        <PhoneBottomNav isTr={isTr} />
      </div>
    </div>
  )
}

function EntryMenuScreen({ isTr = true }) {
  const ENTRY_METHODS = isTr ? ENTRY_METHODS_TR : ENTRY_METHODS_EN
  return (
    <>
      <ScreenBanner
        title={isTr ? 'Giriş Menüsü' : 'Entry Menu'}
        subtitle={isTr ? 'Lütfen size uygun olan giriş yapma seçeneğine tıklayınız' : 'Please tap the entry option that suits you'}
        gradient="linear-gradient(135deg, #0f4f8f 0%, #003C75 100%)"
      />
      <MenuGrid items={[...ENTRY_METHODS, null]} variant="blue" />
    </>
  )
}

function ExitMenuScreen({ isTr = true }) {
  const ENTRY_METHODS = isTr ? ENTRY_METHODS_TR : ENTRY_METHODS_EN
  return (
    <>
      <ScreenBanner
        title={isTr ? 'Çıkış Menüsü' : 'Exit Menu'}
        subtitle={isTr ? 'Lütfen size uygun olan çıkış yapma seçeneğine tıklayınız' : 'Please tap the exit option that suits you'}
        gradient="linear-gradient(135deg, #d33a34 0%, #b91c1c 100%)"
      />
      <MenuGrid items={[...ENTRY_METHODS, null]} variant="red" />
    </>
  )
}

function BreakMenuScreen({ isTr = true }) {
  return (
    <>
      <ScreenBanner
        title={isTr ? 'Mola Menüsü' : 'Break Menu'}
        subtitle={isTr ? 'Lütfen size uygun olan mola seçeneğine tıklayınız' : 'Please tap the break option that suits you'}
        gradient="linear-gradient(135deg, #ffa22c 0%, #ff9800 100%)"
      />
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', background: '#ececec', display: 'flex', flexDirection: 'column', gap: 12, padding: '12px 0 14px' }}>
        <StatusRow isTr={isTr} />
        <BreakCard
          isTr={isTr}
          label={isTr ? 'Yemek Molası' : 'Meal Break'}
          subtitle={isTr ? 'Önerilen: 1 Saat' : 'Recommended: 1 Hour'}
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3v9" />
              <path d="M10 3v9" />
              <path d="M6 8h4" />
              <path d="M8 12v8" />
              <path d="M15 3v18" />
              <path d="M19 3c0 5-4 6-4 6" />
            </svg>
          }
        />
        <BreakCard
          isTr={isTr}
          label={isTr ? 'İhtiyaç Molası' : 'Personal Break'}
          subtitle={isTr ? 'Önerilen: 15 Dakika' : 'Recommended: 15 Min'}
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 3-6.7" />
              <path d="M3 3v6h6" />
              <path d="M12 7v5l4 2" />
            </svg>
          }
        />
        <TimerCard
          isTr={isTr}
          title={isTr ? 'Molanın Bitmesine Kalan Süre' : 'Remaining Break Time'}
          values={[
            { value: '00', labelTr: 'Saat', labelEn: 'Hour' },
            { value: '12', labelTr: 'Dakika', labelEn: 'Min' },
            { value: '30', labelTr: 'Saniye', labelEn: 'Sec' },
          ]}
          buttonText={isTr ? 'MOLA BİTİR' : 'END BREAK'}
        />
        <TimerCard
          isTr={isTr}
          title={isTr ? 'Mola Raporu' : 'Break Report'}
          values={[
            { value: '02', labelTr: 'Saat', labelEn: 'Hour' },
            { value: '42', labelTr: 'Dakika', labelEn: 'Min' },
            { value: '12', labelTr: 'Saniye', labelEn: 'Sec' },
          ]}
          segmented
        />
      </div>
    </>
  )
}

function PhoneVariant({ children, style, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

function PhoneShowcase({ isTr = true }) {
  return (
    <div className="pdks-phone-showcase" style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', padding: '24px 0 8px' }}>
      <div className="pdks-phone-group" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 24, width: '100%', maxWidth: 820 }}>
        <PhoneVariant
          delay={0.05}
          style={{
            position: 'relative',
            zIndex: 1,
            transform: 'scale(0.94)',
            transformOrigin: 'bottom center',
          }}
        >
          <PhoneShell isTr={isTr}>
            <EntryMenuScreen isTr={isTr} />
          </PhoneShell>
        </PhoneVariant>

        <PhoneVariant
          delay={0.15}
          style={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <PhoneShell isTr={isTr}>
            <BreakMenuScreen isTr={isTr} />
          </PhoneShell>
        </PhoneVariant>

        <PhoneVariant
          delay={0.25}
          style={{
            position: 'relative',
            zIndex: 1,
            transform: 'scale(0.94)',
            transformOrigin: 'bottom center',
          }}
        >
          <PhoneShell isTr={isTr}>
            <ExitMenuScreen isTr={isTr} />
          </PhoneShell>
        </PhoneVariant>
      </div>
    </div>
  )
}

const responsiveStyles = `
  @media (max-width: 1180px) {
    .pdks-phone-showcase {
      padding: 8px 0 10px !important;
      overflow-x: auto !important;
      overflow-y: hidden !important;
      justify-content: flex-start !important;
      -webkit-overflow-scrolling: touch !important;
      touch-action: pan-x !important;
    }
    .pdks-phone-group {
      gap: 16px !important;
      width: max-content !important;
      max-width: none !important;
      padding: 0 12px 0 2px !important;
      transform: none !important;
      margin: 0 !important;
    }
  }
  @media (max-width: 900px) {
    .pdks-phone-showcase {
      padding: 8px 0 10px !important;
    }
    .pdks-phone-group {
      gap: 12px !important;
      padding: 0 10px 0 2px !important;
    }
  }
  @media (max-width: 768px) {
    .pdks-visual-section { padding: 0 16px 64px !important; }
    .pdks-visual-inner { padding: 36px 18px !important; border-radius: 20px !important; min-height: unset !important; }
  }
  @media (max-width: 480px) {
    .pdks-visual-section { padding: 0 12px 48px !important; }
    .pdks-visual-inner { padding: 24px 8px !important; border-radius: 16px !important; }
    .pdks-phone-showcase {
      padding-bottom: 8px !important;
    }
    .pdks-phone-group {
      gap: 10px !important;
      padding-inline: 8px !important;
    }
  }
`

export default function PdksVisual({ accent = '#38bdf8', inline, isTr = true }) {
  if (inline) {
    return (
      <>
        <PhoneShowcase isTr={isTr} />
        <style>{responsiveStyles}</style>
      </>
    )
  }

  return (
    <section className="pdks-visual-section" style={{ padding: '0 24px 96px', background: '#fff' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="pdks-visual-inner"
          style={{
            position: 'relative',
            borderRadius: 32,
            background: 'linear-gradient(160deg, #eef5ff 0%, #dbeeff 55%, #e4f0fd 100%)',
            border: '1px solid rgba(0,60,117,0.07)',
            boxShadow: '0 24px 80px rgba(0,40,100,0.08)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '56px 40px',
            minHeight: 620,
          }}
        >
          <div style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 880, height: 520, background: 'radial-gradient(ellipse, rgba(121,172,220,0.16) 0%, transparent 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -80, right: -80, width: 360, height: 360, borderRadius: '50%', background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: -60, left: -60, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,60,117,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <PhoneShowcase isTr={isTr} />
        </motion.div>
      </div>
      <style>{responsiveStyles}</style>
    </section>
  )
}
