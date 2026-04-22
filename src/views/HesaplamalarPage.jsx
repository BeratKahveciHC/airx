'use client'

import { useState, useMemo } from 'react'

// ═══════════════════════════════════════════════════════════════
// VERGİ VERİLERİ
// ═══════════════════════════════════════════════════════════════

const TAX_BRACKETS = {
  2024: [
    [0,        110000,   0.15],
    [110000,   230000,   0.20],
    [230000,   580000,   0.27],
    [580000,  3000000,   0.35],
    [3000000, Infinity,  0.40],
  ],
  2025: [
    [0,        158000,   0.15],
    [158000,   330000,   0.20],
    [330000,   870000,   0.27],
    [870000,  4300000,   0.35],
    [4300000, Infinity,  0.40],
  ],
  // Kaynak: GİB Gelir Vergisi Tarifesi 2026, yeniden değerleme oranı %25,49
  2026: [
    [0,         190000,  0.15],
    [190000,    400000,  0.20],
    [400000,   1500000,  0.27],
    [1500000,  5300000,  0.35],
    [5300000,  Infinity, 0.40],
  ],
}

// Aylık asgari ücret (brüt) — Kaynak: ÇSGB
const MIN_WAGE = {
  2024: m => m <= 6 ? 17002.12 : 20002.50,
  2025: ()  => 22104.00,
  2026: ()  => 33030.00,  // 1 Ocak 2026 — ÇSGB açıklaması
}

// Engelli indirimi (aylık, gelir vergisi matrahından düşülür) — GVK Md. 31
const DISABILITY_DED = {
  2024: { 0: 0, 1: 5750,  2: 3000, 3: 1500 },
  2025: { 0: 0, 1: 7188,  2: 3750, 3: 1875 },
  2026: { 0: 0, 1: 12000, 2: 7000, 3: 3000 },
}

// SGK tavan katsayısı: 2026'dan itibaren 9× (öncesi 7,5×)
const SGK_TAVAN_X = { 2024: 7.5, 2025: 7.5, 2026: 9 }

// SGK işveren tam oran (teşviksiz) — 5510 Md. 81 öncesi
// 2024-2025: MYÖ %11 + KVS %2 + GSS %7,5 = %20,5
// 2026: MYÖ %12 + KVS %2,25 + GSS %7,5 = %21,75
const SGK_ISVEREN_FULL = { 2024: 0.205, 2025: 0.205, 2026: 0.2175 }

const SGK_ISCI      = 0.14
const ISSIZLIK_ISCI = 0.01
const ISSIZLIK_ISV  = 0.02
const DAMGA         = 0.00759

// ═══════════════════════════════════════════════════════════════
// HESAP FONKSİYONLARI
// ═══════════════════════════════════════════════════════════════

function progressiveTax(cumBase, brackets) {
  let tax = 0
  for (const [lo, hi, rate] of brackets) {
    if (cumBase <= lo) break
    tax += (Math.min(cumBase, hi) - lo) * rate
  }
  return tax
}

function hesaplaAylik(brut, ay, yil, opts, prev = {}) {
  const { engel, minUcretIstisna, bes, iki } = opts
  const brackets  = TAX_BRACKETS[yil]    ?? TAX_BRACKETS[2026]
  const minUcret  = (MIN_WAGE[yil]       ?? MIN_WAGE[2026])(ay)
  const tavanX    = SGK_TAVAN_X[yil]     ?? SGK_TAVAN_X[2026]
  const fullRate  = SGK_ISVEREN_FULL[yil] ?? SGK_ISVEREN_FULL[2026]
  const isverenOran = fullRate - (bes ? 0.05 : 0) - (iki ? 0.02 : 0)
  const sgkTavan  = minUcret * tavanX

  const sgkMatrah    = Math.min(brut, sgkTavan)
  const sgkIsci      = sgkMatrah * SGK_ISCI
  const issizlikIsci = sgkMatrah * ISSIZLIK_ISCI

  const engelDed = (DISABILITY_DED[yil] ?? DISABILITY_DED[2026])[engel] ?? 0
  const matrah   = Math.max(0, brut - sgkIsci - issizlikIsci - engelDed)

  // Kümülatif vergi
  const prevCumMatrah   = prev.cumMatrah ?? 0
  const cumMatrah       = prevCumMatrah + matrah
  const hesaplananVergi = progressiveTax(cumMatrah, brackets) - progressiveTax(prevCumMatrah, brackets)

  // Asgari ücret istisnası (GVK Geçici Md. 67 — gelir vergisi + damga vergisi)
  let istisna = 0
  let mwMatrah = 0
  const prevMinUcretCumMatrah = prev.minUcretCumMatrah ?? 0
  let minUcretCumMatrah = prevMinUcretCumMatrah
  if (minUcretIstisna) {
    const mwSGK    = Math.min(minUcret, sgkTavan) * SGK_ISCI
    const mwIssiz  = Math.min(minUcret, sgkTavan) * ISSIZLIK_ISCI
    mwMatrah = Math.max(0, minUcret - mwSGK - mwIssiz)
    minUcretCumMatrah += mwMatrah
    istisna = progressiveTax(minUcretCumMatrah, brackets) - progressiveTax(prevMinUcretCumMatrah, brackets)
  }
  // Kesilecek gelir vergisi
  const kesilecekVergi = Math.max(0, hesaplananVergi - istisna)

  // Damga vergisi — asgari ücret miktarı muaf (2022+)
  const damgaMatrah      = minUcretIstisna ? Math.max(0, brut - minUcret) : brut
  const damgaVergisi     = damgaMatrah * DAMGA
  const damgaVergisiFull = brut * DAMGA
  const damgaIstisnasi   = damgaVergisiFull - damgaVergisi

  // Tablo sütunları için ayrıştırılmış değerler
  const gvIstisnasi   = Math.min(istisna, hesaplananVergi)
  // "Net" sütunu: istisnalar UYGULANMADAN önceki net
  const netOnceIstisnasiz = brut - sgkIsci - issizlikIsci - hesaplananVergi - damgaVergisiFull

  const toplamKesinti = sgkIsci + issizlikIsci + kesilecekVergi + damgaVergisi
  const netUcret      = brut - toplamKesinti

  // İşveren maliyeti
  const sgkIsveren      = sgkMatrah * isverenOran
  const issizlikIsveren = sgkMatrah * ISSIZLIK_ISV
  const isverenMaliyet  = brut + sgkIsveren + issizlikIsveren

  return {
    brutUcret: brut, sgkIsci, issizlikIsci, matrah, cumMatrah,
    hesaplananVergi, istisna, gvIstisnasi,
    kesilecekVergi, damgaVergisiFull, damgaVergisi, damgaIstisnasi,
    netOnceIstisnasiz, toplamKesinti, netUcret,
    sgkIsveren, issizlikIsveren, isverenMaliyet,
    minUcret, sgkTavan, engelDed, isverenOran,
    minUcretMatrahi: mwMatrah, minUcretCumMatrah,
  }
}

function bruttenNeteTakvim(brut, yil, opts, aySayisi) {
  const rows = []
  let prev = { cumMatrah: 0, minUcretCumMatrah: 0 }

  for (let ay = 1; ay <= aySayisi; ay++) {
    const row = hesaplaAylik(brut, ay, yil, opts, prev)
    rows.push(row)
    prev = { cumMatrah: row.cumMatrah, minUcretCumMatrah: row.minUcretCumMatrah }
  }

  return rows
}

function nettenBruteTakvim(hedefNet, yil, opts, aySayisi) {
  const rows = []
  let prev = { cumMatrah: 0, minUcretCumMatrah: 0 }

  for (let ay = 1; ay <= aySayisi; ay++) {
    let lo = hedefNet * 0.8
    let hi = hedefNet * 3

    for (let i = 0; i < 250; i++) {
      const mid = (lo + hi) / 2
      const row = hesaplaAylik(mid, ay, yil, opts, prev)
      if (Math.abs(row.netUcret - hedefNet) < 0.005) {
        lo = mid
        hi = mid
        break
      }
      row.netUcret < hedefNet ? (lo = mid) : (hi = mid)
    }

    const row = {
      ...hesaplaAylik((lo + hi) / 2, ay, yil, opts, prev),
      hedefNet,
    }

    rows.push(row)
    prev = { cumMatrah: row.cumMatrah, minUcretCumMatrah: row.minUcretCumMatrah }
  }

  return rows
}

function nettenBrute(hedefNet, ay, yil, opts) {
  return nettenBruteTakvim(hedefNet, yil, opts, ay)[ay - 1] ?? null
}

function fmt(n, dec = 2) {
  if (typeof n !== 'number' || !isFinite(n)) return '—'
  return n.toLocaleString('tr-TR', { minimumFractionDigits: dec, maximumFractionDigits: dec })
}

// ═══════════════════════════════════════════════════════════════
// STATIK VERİ
// ═══════════════════════════════════════════════════════════════

const AYLAR = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık']

// ═══════════════════════════════════════════════════════════════
// UI YARDIMCI BİLEŞENLER
// ═══════════════════════════════════════════════════════════════

function Row({ label, value, sub, highlight, dimmed, separator }) {
  if (separator) return (
    <tr><td colSpan={2} style={{ padding: '2px 0' }}>
      <div style={{ height: 1, background: '#e9eef5' }} />
    </td></tr>
  )
  return (
    <tr style={{
      background: highlight ? '#f0fdf4' : 'transparent',
    }}>
      <td style={{
        padding: '9px 12px 9px 0',
        fontSize: highlight ? 14 : 13,
        fontWeight: highlight ? 700 : 500,
        color: dimmed ? '#94a3b8' : highlight ? '#15803d' : '#374151',
        lineHeight: 1.3,
        verticalAlign: 'top',
      }}>
        {label}
        {sub && <div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 400, marginTop: 1 }}>{sub}</div>}
      </td>
      <td style={{
        padding: '9px 0 9px 12px',
        fontSize: highlight ? 14 : 13,
        fontWeight: highlight ? 700 : 600,
        color: dimmed ? '#94a3b8' : highlight ? '#15803d' : '#0f172a',
        textAlign: 'right',
        whiteSpace: 'nowrap',
        verticalAlign: 'top',
      }}>
        {value}
      </td>
    </tr>
  )
}

function Th({ children, left, green, purple, sep }) {
  return (
    <th style={{
      padding: '9px 10px',
      fontSize: 11,
      fontWeight: 700,
      color: green ? '#15803d' : purple ? '#6b21a8' : '#64748b',
      textAlign: left ? 'left' : 'right',
      borderBottom: '2px solid #e9eef5',
      borderLeft: sep ? '1px solid #e9eef5' : 'none',
      background: green ? '#f0fdf4' : purple ? '#faf5ff' : 'transparent',
      whiteSpace: 'nowrap',
      lineHeight: 1.4,
      verticalAlign: 'bottom',
    }}>
      {children}
    </th>
  )
}

function SectionHead({ title }) {
  return (
    <tr>
      <td colSpan={2} style={{ paddingTop: 20, paddingBottom: 6 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#79ACDC', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          {title}
        </span>
      </td>
    </tr>
  )
}

function InputRow({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 12.5, fontWeight: 600, color: '#374151', letterSpacing: '0.01em' }}>{label}</label>
      {children}
    </div>
  )
}

function Select({ value, onChange, children, small }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        width: '100%',
        padding: small ? '7px 10px' : '10px 12px',
        borderRadius: 8,
        border: '1.5px solid #d1d9e6',
        fontSize: small ? 13 : 14,
        color: '#0f172a',
        background: '#fff',
        outline: 'none',
        cursor: 'pointer',
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 10px center',
        paddingRight: 32,
        fontFamily: 'inherit',
      }}
    >
      {children}
    </select>
  )
}

function Toggle({ checked, onChange, label }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
      <div
        onClick={() => onChange(!checked)}
        style={{
          width: 40,
          height: 22,
          borderRadius: 11,
          background: checked ? '#003C75' : '#d1d9e6',
          position: 'relative',
          flexShrink: 0,
          transition: 'background 0.2s',
          cursor: 'pointer',
        }}
      >
        <div style={{
          position: 'absolute',
          top: 3,
          left: checked ? 21 : 3,
          width: 16,
          height: 16,
          borderRadius: 8,
          background: '#fff',
          transition: 'left 0.2s',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        }} />
      </div>
      <span style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>{label}</span>
    </label>
  )
}

// ═══════════════════════════════════════════════════════════════
// ANA HESAPLAMA FORMU
// ═══════════════════════════════════════════════════════════════

function MaasHesaplama() {
  const [tip, setTip]             = useState('brutten')  // 'brutten' | 'netten'
  const [yil, setYil]             = useState(2026)
  const [ay, setAy]               = useState(1)
  const [ucret, setUcret]         = useState('')
  const [engel, setEngel]         = useState(0)          // 0 | 1 | 2 | 3
  const [istisna, setIstisna]     = useState(true)
  const [bes, setBes]             = useState(true)   // 5 puanlık işveren teşviki
  const [iki, setIki]             = useState(false)  // 2 puanlık işveren teşviki
  const [showYillik, setShowYillik] = useState(false)

  const ucretNum = parseFloat(String(ucret).replace(/\./g, '').replace(',', '.')) || 0

  const opts = { engel, minUcretIstisna: istisna, bes, iki }

  const hesapTakvimi = useMemo(() => {
    if (!ucretNum || ucretNum <= 0) return null
    const aySayisi = showYillik ? 12 : ay
    return tip === 'brutten'
      ? bruttenNeteTakvim(ucretNum, yil, opts, aySayisi)
      : nettenBruteTakvim(ucretNum, yil, opts, aySayisi)
  }, [ucretNum, ay, yil, tip, engel, istisna, bes, iki, showYillik])

  const sonuc = useMemo(() => {
    if (!hesapTakvimi) return null
    return hesapTakvimi[ay - 1] ?? null
  }, [hesapTakvimi, ay])

  const yillikDetay = useMemo(() => {
    if (!showYillik || !hesapTakvimi) return null
    return hesapTakvimi
  }, [showYillik, hesapTakvimi])

  const handleUcretChange = (val) => {
    // Sadece rakam ve virgüle izin ver
    const cleaned = val.replace(/[^0-9,]/g, '')
    setUcret(cleaned)
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(300px, 380px) 1fr',
      gap: 24,
      alignItems: 'start',
    }}
    className="maas-grid"
    >
      {/* ── Sol: Form ── */}
      <div style={{
        background: '#fff',
        borderRadius: 16,
        border: '1px solid #e2eaf3',
        boxShadow: '0 2px 12px rgba(0,60,117,0.06)',
        overflow: 'hidden',
      }}>
        {/* Tip seçici */}
        <div style={{ display: 'flex', borderBottom: '1px solid #e2eaf3' }}>
          {[
            { value: 'brutten', label: 'Brütten Nete' },
            { value: 'netten',  label: 'Netten Brüte' },
          ].map(t => (
            <button
              key={t.value}
              type="button"
              onClick={() => setTip(t.value)}
              style={{
                flex: 1,
                padding: '14px 0',
                border: 'none',
                background: 'none',
                fontSize: 13.5,
                fontWeight: 600,
                cursor: 'pointer',
                color: tip === t.value ? '#003C75' : '#64748b',
                borderBottom: `2px solid ${tip === t.value ? '#003C75' : 'transparent'}`,
                marginBottom: -1,
                transition: 'color 0.15s',
                fontFamily: 'inherit',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* Yıl + Ay */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <InputRow label="Yıl">
              <Select value={yil} onChange={v => setYil(Number(v))}>
                <option value={2026}>2026</option>
                <option value={2025}>2025</option>
                <option value={2024}>2024</option>
              </Select>
            </InputRow>
            <InputRow label="Ay">
              <Select value={ay} onChange={v => setAy(Number(v))}>
                {AYLAR.map((a, i) => (
                  <option key={i} value={i + 1}>{a}</option>
                ))}
              </Select>
            </InputRow>
          </div>

          {/* Ücret */}
          <InputRow label={tip === 'brutten' ? 'Brüt Ücret' : 'Net Ücret'}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                inputMode="decimal"
                value={ucret}
                onChange={e => handleUcretChange(e.target.value)}
                placeholder="0,00"
                style={{
                  width: '100%',
                  padding: '10px 44px 10px 12px',
                  borderRadius: 8,
                  border: '1.5px solid #d1d9e6',
                  fontSize: 14,
                  color: '#0f172a',
                  fontWeight: 600,
                  outline: 'none',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                }}
              />
              <span style={{
                position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                fontSize: 13, fontWeight: 700, color: '#94a3b8',
              }}>₺</span>
            </div>
          </InputRow>

          <div style={{ height: 1, background: '#f1f5f9' }} />

          {/* Engel durumu */}
          <InputRow label="Engellilik Durumu">
            <Select value={engel} onChange={v => setEngel(Number(v))}>
              <option value={0}>Engelli Değil</option>
              <option value={1}>1. Derece Engelli</option>
              <option value={2}>2. Derece Engelli</option>
              <option value={3}>3. Derece Engelli</option>
            </Select>
          </InputRow>

          <div style={{ height: 1, background: '#f1f5f9' }} />

          {/* Seçenekler — İşçi */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Toggle checked={istisna} onChange={setIstisna} label="Asgari ücret gelir vergisi istisnası" />
          </div>

          <div style={{ height: 1, background: '#f1f5f9' }} />

          {/* Seçenekler — İşveren teşvikleri */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: '#79ACDC', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>
              İşveren Teşvikleri
            </div>
            <Toggle
              checked={bes}
              onChange={setBes}
              label="5 puanlık indirim (5510 Md. 81/ı)"
            />
            <Toggle
              checked={iki}
              onChange={setIki}
              label="2 puanlık indirim (sektör teşviki)"
            />
            {(bes || iki) && (
              <div style={{
                padding: '7px 10px',
                borderRadius: 7,
                background: '#f0f6ff',
                border: '1px solid #c7ddf8',
                fontSize: 11.5,
                color: '#3b6fa5',
              }}>
                Efektif SGK işveren oranı:{' '}
                <strong>
                  %{(((SGK_ISVEREN_FULL[yil] ?? SGK_ISVEREN_FULL[2026]) - (bes ? 0.05 : 0) - (iki ? 0.02 : 0)) * 100).toFixed(2).replace('.', ',')}
                </strong>
                {' '}(tam oran %{((SGK_ISVEREN_FULL[yil] ?? SGK_ISVEREN_FULL[2026]) * 100).toFixed(2).replace('.', ',')})
              </div>
            )}
          </div>

          {/* Hesapla butonu (visible cue) */}
          <div style={{
            marginTop: 4,
            padding: '10px 16px',
            borderRadius: 8,
            background: '#f0f6ff',
            border: '1px solid #c7ddf8',
            fontSize: 12,
            color: '#3b6fa5',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
            </svg>
            Ücret girdiğinizde sonuçlar otomatik hesaplanır.
          </div>
        </div>
      </div>

      {/* ── Sağ: Sonuçlar ── */}
      <div style={{ minWidth: 0, overflow: 'hidden' }}>
        {!sonuc ? (
          <div style={{
            background: '#fff',
            borderRadius: 16,
            border: '1px solid #e2eaf3',
            padding: '60px 32px',
            textAlign: 'center',
            color: '#94a3b8',
          }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8d8ea" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 16px' }}>
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
              <path d="M7 8h4M7 12h2M13 12l2 2 4-4"/>
            </svg>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#64748b', margin: 0 }}>Hesaplamak için ücret girin</p>
            <p style={{ fontSize: 13, margin: '6px 0 0', color: '#94a3b8' }}>Sol taraftaki formu doldurun</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Özet kartlar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }} className="summary-cards">
              {[
                { label: 'Net Ücret', value: fmt(sonuc.netUcret) + ' ₺', color: '#15803d', bg: '#f0fdf4', border: '#bbf7d0' },
                { label: 'Brüt Ücret', value: fmt(sonuc.brutUcret) + ' ₺', color: '#003C75', bg: '#f0f6ff', border: '#c7ddf8' },
                { label: 'İşveren Maliyeti', value: fmt(sonuc.isverenMaliyet) + ' ₺', color: '#6b21a8', bg: '#faf5ff', border: '#e9d5ff' },
              ].map(c => (
                <div key={c.label} style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  borderRadius: 12,
                  padding: '14px 16px',
                }}>
                  <div style={{ fontSize: 11.5, fontWeight: 600, color: c.color, opacity: 0.7, marginBottom: 4 }}>{c.label}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: c.color, lineHeight: 1.2 }}>{c.value}</div>
                </div>
              ))}
            </div>

            {/* Detay tablo */}
            <div style={{
              background: '#fff',
              borderRadius: 16,
              border: '1px solid #e2eaf3',
              boxShadow: '0 2px 12px rgba(0,60,117,0.06)',
              overflow: 'hidden',
            }}>
              {/* Başlık */}
              <div style={{
                padding: '16px 24px',
                borderBottom: '1px solid #f1f5f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>
                    Hesap Detayı
                  </span>
                  <span style={{ fontSize: 12, color: '#94a3b8', marginLeft: 10 }}>
                    {AYLAR[ay - 1]} {yil} · {tip === 'brutten' ? 'Brütten Nete' : 'Netten Brüte'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowYillik(p => !p)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 7,
                    border: '1.5px solid #d1d9e6',
                    background: showYillik ? '#003C75' : '#fff',
                    color: showYillik ? '#fff' : '#374151',
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.15s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                  </svg>
                  Aylık Tablo
                </button>
              </div>

              <div style={{ padding: '4px 24px 24px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    <SectionHead title="İşçi Kesintileri" />
                    <Row label="Brüt Ücret" value={`${fmt(sonuc.brutUcret)} ₺`} />
                    <Row
                      label="SGK İşçi Payı"
                      sub={`%14 · SGK tavan: ${fmt(sonuc.sgkTavan, 2)} ₺`}
                      value={`− ${fmt(sonuc.sgkIsci)} ₺`}
                    />
                    <Row
                      label="İşsizlik Sig. İşçi Payı"
                      sub="%1"
                      value={`− ${fmt(sonuc.issizlikIsci)} ₺`}
                    />
                    {sonuc.engelDed > 0 && (
                      <Row label="Engelli İndirimi" value={`− ${fmt(sonuc.engelDed)} ₺`} />
                    )}
                    <Row separator />
                    <Row label="Gelir Vergisi Matrahı" value={`${fmt(sonuc.matrah)} ₺`} />
                    <Row
                      label="Kümülatif Vergi Matrahı"
                      sub={`${ay}. ay birikimli`}
                      value={`${fmt(sonuc.cumMatrah)} ₺`}
                    />
                    <Row label="Hesaplanan Gelir Vergisi" value={`${fmt(sonuc.hesaplananVergi)} ₺`} />
                    {sonuc.istisna > 0 && (
                      <Row label="Asg. Ücret İstisna Tutarı" value={`− ${fmt(sonuc.istisna)} ₺`} dimmed />
                    )}
                    <Row label="Kesilecek Gelir Vergisi" value={`− ${fmt(sonuc.kesilecekVergi)} ₺`} />
                    <Row
                      label="Damga Vergisi"
                      sub="%0.759"
                      value={`− ${fmt(sonuc.damgaVergisi)} ₺`}
                    />
                    <Row separator />
                    <Row label="Toplam Kesinti" value={`${fmt(sonuc.toplamKesinti)} ₺`} />
                    <Row label="NET ÜCRET" value={`${fmt(sonuc.netUcret)} ₺`} highlight />

                    <SectionHead title="İşveren Maliyeti" />
                    <Row label="Brüt Ücret" value={`${fmt(sonuc.brutUcret)} ₺`} />
                    <Row
                      label="SGK İşveren Payı (tam)"
                      sub={`%${((SGK_ISVEREN_FULL[yil] ?? SGK_ISVEREN_FULL[2026]) * 100).toFixed(2).replace('.', ',')}`}
                      value={`${fmt(sonuc.brutUcret * (SGK_ISVEREN_FULL[yil] ?? SGK_ISVEREN_FULL[2026]))} ₺`}
                    />
                    {bes && (
                      <Row label="5 puanlık indirim (5510 Md. 81/ı)" value={`− ${fmt(sonuc.brutUcret * 0.05)} ₺`} dimmed />
                    )}
                    {iki && (
                      <Row label="2 puanlık indirim (sektör teşviki)" value={`− ${fmt(sonuc.brutUcret * 0.02)} ₺`} dimmed />
                    )}
                    <Row
                      label="SGK İşveren Payı (net)"
                      sub={`%${(sonuc.isverenOran * 100).toFixed(2).replace('.', ',')}`}
                      value={`+ ${fmt(sonuc.sgkIsveren)} ₺`}
                    />
                    <Row label="İşsizlik İşveren Payı" sub="%2" value={`+ ${fmt(sonuc.issizlikIsveren)} ₺`} />
                    <Row separator />
                    <Row
                      label="TOPLAM İŞVEREN MALİYETİ"
                      value={`${fmt(sonuc.isverenMaliyet)} ₺`}
                      highlight
                    />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Aylık tablo */}
            {showYillik && yillikDetay && (
              <div style={{
                background: '#fff',
                borderRadius: 16,
                border: '1px solid #e2eaf3',
                boxShadow: '0 2px 12px rgba(0,60,117,0.06)',
                overflow: 'hidden',
              }}>
                <div style={{ padding: '16px 24px', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>
                    {yil} Yılı Aylık Dağılım
                  </span>
                  <span style={{ fontSize: 12, color: '#94a3b8', marginLeft: 8 }}>
                    {fmt(ucretNum)} ₺ {tip === 'brutten' ? 'brüt' : 'net'} sabit maaş
                  </span>
                </div>
                <div style={{ overflowX: 'auto', width: '100%' }}>
                  <table style={{ borderCollapse: 'collapse', minWidth: 1600 }}>
                    <thead>
                      <tr style={{ background: '#f8faff' }}>
                        {/* Ay */}
                        <Th left>Ay</Th>
                        {tip === 'netten' && (
                          <>
                            <Th>Net</Th>
                            <Th>SSK<br/>İşçi</Th>
                            <Th>İşsizlik<br/>İşçi</Th>
                            <Th>Aylık<br/>Gelir Vergisi</Th>
                            <Th>Damga<br/>Vergisi</Th>
                            <Th sep>Kümülatif<br/>Vergi Matrahı</Th>
                            <Th>Brüt</Th>
                            <Th>Asgari Ücret<br/>G.V. İstisnası</Th>
                            <Th sep>Asgari Ücret<br/>D.V. İstisnası</Th>
                            <Th green>Toplam Net<br/>Ele Geçen</Th>
                            <Th sep>SSK<br/>İşveren</Th>
                            <Th>İşsizlik<br/>İşveren</Th>
                            <Th purple>Toplam<br/>Maliyet</Th>
                          </>
                        )}
                        {tip !== 'netten' && (
                          <>
                        {/* İşçi kesintileri */}
                        <Th>Brüt</Th>
                        <Th>SSK<br/>İşçi</Th>
                        <Th>İşsizlik<br/>İşçi</Th>
                        <Th>Aylık<br/>Gelir Vergisi</Th>
                        <Th>Damga<br/>Vergisi</Th>
                        <Th sep>Kümülatif<br/>Vergi Matrahı</Th>
                        {/* Net + istisnalar */}
                        <Th>Net</Th>
                        <Th>Asgari Ücret<br/>G.V. İstisnası</Th>
                        <Th sep>Asgari Ücret<br/>D.V. İstisnası</Th>
                        <Th green>Toplam Net<br/>Ele Geçen</Th>
                        {/* İşveren */}
                        <Th sep>SSK<br/>İşveren</Th>
                        <Th>İşsizlik<br/>İşveren</Th>
                        <Th purple>Toplam<br/>Maliyet</Th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {yillikDetay.map((r, i) => {
                        const cols = tip === 'netten'
                          ? [
                              { v: r.hedefNet ?? ucretNum },
                              { v: r.sgkIsci },
                              { v: r.issizlikIsci },
                              { v: r.hesaplananVergi },
                              { v: r.damgaVergisiFull },
                              { v: r.cumMatrah, sep: true },
                              { v: r.brutUcret },
                              { v: r.gvIstisnasi },
                              { v: r.damgaIstisnasi, sep: true },
                              { v: r.netUcret, green: true },
                              { v: r.sgkIsveren, sep: true },
                              { v: r.issizlikIsveren },
                              { v: r.isverenMaliyet, purple: true },
                            ]
                          : [
                              { v: r.brutUcret },
                              { v: r.sgkIsci },
                              { v: r.issizlikIsci },
                              { v: r.hesaplananVergi },
                              { v: r.damgaVergisiFull },
                              { v: r.cumMatrah, sep: true },
                              { v: r.netOnceIstisnasiz },
                              { v: r.gvIstisnasi },
                              { v: r.damgaIstisnasi, sep: true },
                              { v: r.netUcret, green: true },
                              { v: r.sgkIsveren, sep: true },
                              { v: r.issizlikIsveren },
                              { v: r.isverenMaliyet, purple: true },
                            ]
                        return (
                          <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafbff', borderBottom: '1px solid #f1f5f9' }}>
                            <td style={{ padding: '8px 12px', fontSize: 12.5, fontWeight: 600, color: '#374151', whiteSpace: 'nowrap' }}>
                              {AYLAR[i]}
                            </td>
                            {cols.map((c, j) => (
                              <td key={j} style={{
                                padding: '8px 10px',
                                fontSize: 12,
                                textAlign: 'right',
                                fontWeight: c.green || c.purple ? 700 : 500,
                                color: c.green ? '#15803d' : c.purple ? '#6b21a8' : '#0f172a',
                                whiteSpace: 'nowrap',
                                borderLeft: c.sep ? '1px solid #e9eef5' : 'none',
                              }}>
                                {fmt(c.v)} ₺
                              </td>
                            ))}
                          </tr>
                        )
                      })}
                    </tbody>
                    <tfoot>
                      <tr style={{ background: '#f0f6ff', borderTop: '2px solid #c7ddf8' }}>
                        <td style={{ padding: '9px 12px', fontSize: 12, fontWeight: 700, color: '#003C75' }}>TOPLAM</td>
                        {(tip === 'netten'
                          ? [
                              { v: yillikDetay.reduce((s,r)=>s+(r.hedefNet ?? ucretNum),0) },
                              { v: yillikDetay.reduce((s,r)=>s+r.sgkIsci,0) },
                              { v: yillikDetay.reduce((s,r)=>s+r.issizlikIsci,0) },
                              { v: yillikDetay.reduce((s,r)=>s+r.hesaplananVergi,0) },
                              { v: yillikDetay.reduce((s,r)=>s+r.damgaVergisiFull,0) },
                              { v: yillikDetay[yillikDetay.length - 1]?.cumMatrah ?? 0, sep: true },
                              { v: yillikDetay.reduce((s,r)=>s+r.brutUcret,0) },
                              { v: yillikDetay.reduce((s,r)=>s+r.gvIstisnasi,0) },
                              { v: yillikDetay.reduce((s,r)=>s+r.damgaIstisnasi,0), sep: true },
                              { v: yillikDetay.reduce((s,r)=>s+r.netUcret,0), green: true },
                              { v: yillikDetay.reduce((s,r)=>s+r.sgkIsveren,0), sep: true },
                              { v: yillikDetay.reduce((s,r)=>s+r.issizlikIsveren,0) },
                              { v: yillikDetay.reduce((s,r)=>s+r.isverenMaliyet,0), purple: true },
                            ]
                          : [
                              { v: yillikDetay.reduce((s,r)=>s+r.brutUcret,0) },
                              { v: yillikDetay.reduce((s,r)=>s+r.sgkIsci,0) },
                              { v: yillikDetay.reduce((s,r)=>s+r.issizlikIsci,0) },
                              { v: yillikDetay.reduce((s,r)=>s+r.hesaplananVergi,0) },
                              { v: yillikDetay.reduce((s,r)=>s+r.damgaVergisiFull,0) },
                              { v: yillikDetay[yillikDetay.length - 1]?.cumMatrah ?? 0, sep: true },
                              { v: yillikDetay.reduce((s,r)=>s+r.netOnceIstisnasiz,0) },
                              { v: yillikDetay.reduce((s,r)=>s+r.gvIstisnasi,0) },
                              { v: yillikDetay.reduce((s,r)=>s+r.damgaIstisnasi,0), sep: true },
                              { v: yillikDetay.reduce((s,r)=>s+r.netUcret,0), green: true },
                              { v: yillikDetay.reduce((s,r)=>s+r.sgkIsveren,0), sep: true },
                              { v: yillikDetay.reduce((s,r)=>s+r.issizlikIsveren,0) },
                              { v: yillikDetay.reduce((s,r)=>s+r.isverenMaliyet,0), purple: true },
                            ]).map((c, j) => (
                          <td key={j} style={{
                            padding: '9px 10px',
                            fontSize: 12,
                            textAlign: 'right',
                            fontWeight: 700,
                            color: c.green ? '#15803d' : c.purple ? '#6b21a8' : '#003C75',
                            whiteSpace: 'nowrap',
                            borderLeft: c.sep ? '1px solid #c7ddf8' : 'none',
                          }}>
                            {fmt(c.v)} ₺
                          </td>
                        ))}
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            )}

            {/* Yasal uyarı */}
            <div style={{
              padding: '12px 16px',
              borderRadius: 10,
              background: '#fffbeb',
              border: '1px solid #fde68a',
              fontSize: 12,
              color: '#92400e',
              display: 'flex',
              gap: 8,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <span>Bu hesaplama araçları bilgi amaçlıdır. Kesin sonuçlar için muhasebeci veya SMMM'ye danışınız. Hesaplamalar {yil} yılı yasal oranlarına göre yapılmaktadır. 2026: asgari ücret 33.030 ₺, SGK tavan 297.270 ₺, gelir vergisi dilimleri GİB tarifesine göre güncellenmiştir.</span>
            </div>
          </div>
        )}
      </div>

      {/* Responsive styles */}
      <style>{`
        .maas-grid > * { min-width: 0; }
        @media (max-width: 900px) {
          .maas-grid {
            grid-template-columns: 1fr !important;
          }
          .summary-cards {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .summary-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
// SAYFA
// ═══════════════════════════════════════════════════════════════

const CALC_TABS = [
  { id: 'maas', label: 'Maaş Hesaplama', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm11-7v6M17 8h6' },
]

export default function HesaplamalarPage() {
  const [activeTab, setActiveTab] = useState('maas')

  return (
    <main style={{ background: '#f6f9fc', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(145deg, #03101f 0%, #08294d 36%, #0F5D91 72%, #3EA7D8 100%)',
        padding: '72px 0 64px',
      }}>
        <div className="container">
          <div style={{ maxWidth: 640 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(121,172,220,0.15)',
              border: '1px solid rgba(121,172,220,0.3)',
              borderRadius: 100,
              padding: '5px 14px',
              marginBottom: 20,
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#79ACDC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                <path d="M7 8h4M7 12h2M13 12l2 2 4-4"/>
              </svg>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#79ACDC', letterSpacing: '0.05em' }}>
                İK HESAPLAMA ARAÇLARI
              </span>
            </div>
            <h1 style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#fff',
              margin: '0 0 16px',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}>
              Hesaplamalar
            </h1>
            <p style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.75)',
              margin: 0,
              lineHeight: 1.6,
              maxWidth: 520,
            }}>
              Maaş, kıdem ve diğer İK hesaplamalarını güncel yasal oranlarla yapın.
            </p>
          </div>
        </div>
      </section>

      {/* Tab seçici */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e2eaf3', position: 'sticky', top: 104, zIndex: 10 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 0, overflowX: 'auto' }}>
            {CALC_TABS.map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '14px 20px',
                  border: 'none',
                  background: 'none',
                  fontSize: 13.5,
                  fontWeight: 600,
                  cursor: 'pointer',
                  color: activeTab === tab.id ? '#003C75' : '#64748b',
                  borderBottom: `2px solid ${activeTab === tab.id ? '#003C75' : 'transparent'}`,
                  whiteSpace: 'nowrap',
                  transition: 'color 0.15s',
                  fontFamily: 'inherit',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={tab.icon}/>
                </svg>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* İçerik */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          {activeTab === 'maas' && <MaasHesaplama />}
        </div>
      </section>
    </main>
  )
}
