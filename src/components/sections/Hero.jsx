'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '../../i18n/navigation'
import logo from '../../assets/logo.png'

const MODULES_DATA = [
  { slug: 'pdks', name: 'PDKS', desc: 'Giriş-çıkış takibi', color: '#0ea5e9', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { slug: 'ozluk-dosyasi', name: 'Özlük Dosyası', desc: 'Dijital personel arşivi', color: '#a78bfa', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { slug: 'izin-yonetimi', name: 'İzin Yönetimi', desc: 'Onay akışlı izin takibi', color: '#34d399', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { slug: 'puantaj', name: 'Puantaj', desc: 'Otomatik puantaj cetveli', color: '#fbbf24', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg> },
  { slug: 'erisim-kontrolu', name: 'Erişim Kontrolü', desc: 'Bölge bazlı yetkilendirme', color: '#f87171', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
  { slug: 'ziyaretci-yonetimi', name: 'Ziyaretçi Yönetimi', desc: 'QR ile ziyaretçi kaydı', color: '#22d3ee', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { slug: 'yemekhane', name: 'Yemekhane', desc: 'Yemek hakkı kontrolü', color: '#fb923c', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg> },
  { slug: 'anket', name: 'Anket', desc: 'Personel geri bildirimi', color: '#a3e635', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> },
  { slug: 'sureli-evraklar', name: 'Süreli Evraklar', desc: 'Son kullanma tarihi takibi', color: '#f472b6', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg> },
  { slug: 'egitim-planlama', name: 'Eğitim Planlama', desc: 'Eğitim katılım takibi', color: '#60a5fa', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> },
  { slug: 'hukuki-evraklar', name: 'Hukuki Evraklar', desc: 'İhtar ve savunma yönetimi', color: '#818cf8', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 6-8 4-4-2V4l4 2 8-4 4 2v4l-4-2z"/><path d="M8 10v10"/><path d="M16 6v10"/></svg> },
  { slug: 'yan-haklar', name: 'Yan Haklar', desc: 'Görev bazlı yan hak takibi', color: '#2dd4bf', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/></svg> },
  { slug: 'periyodik-gorev', name: 'Periyodik Görev', desc: 'Lokasyon doğrulamalı görev', color: '#c084fc', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg> },
  { slug: 'is-zekasi', name: 'İş Zekası', desc: 'Veri görselleştirme', color: '#79ACDC', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
]

/* ── Dashboard Ekran 1: Anasayfa ── */
function DashboardHome() {
  return (
    <>
      {/* 2×3 Stat kartları */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }} className="hero-dashboard-stats">
        {[
          { value: 48, label: 'Aktif Personeller', sub: 'Puantaja Dahil Değil: 2', color: '#3b82f6',
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
          { value: 31, label: 'Gelenler', color: '#22c55e',
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> },
          { value: 5, label: 'Mesaidekiler', color: '#8b5cf6',
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> },
          { value: 8, label: 'Gelmeyenler', color: '#ef4444',
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> },
          { value: 3, label: 'Geç Gelenler', color: '#f59e0b',
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
          { value: 2, label: 'İzinliler', color: '#0ea5e9',
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 21 4s-2 0-3.5 1.5L14 9l-8.2-1.8L4 9l7 3-2 3.5L6 17l-1 3 3-1 1.5-3 3.5-2 3 7z"/></svg> },
        ].map(s => (
          <div key={s.label} style={{ background: '#fff', borderRadius: 10, border: '1px solid #e8f0f9', padding: '12px 14px', boxShadow: '0 1px 3px rgba(0,30,80,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: s.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {s.icon}
              </div>
              <span style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</span>
            </div>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#475569' }}>{s.label}</div>
            {s.sub && <div style={{ fontSize: 8.5, color: '#94a3b8', marginTop: 2 }}>{s.sub}</div>}
          </div>
        ))}
      </div>

      <DashboardTables />
    </>
  )
}

/* ── Dashboard Ekran 2: Modüller ── */
function DashboardModules() {
  return (
    <>
      {/* Başlık */}
      <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e8f0f9', padding: '14px 18px 12px' }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: '#0ea5e9', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>TÜM MODÜLLER</div>
        <div style={{ fontSize: 14, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em' }}>AiRX ile her İK sürecini dijitalleştirin</div>
      </div>

      {/* Modül kartları 7x2 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }} className="hero-modules-grid">
        {MODULES_DATA.map(mod => (
          <Link key={mod.name} href={`/moduller/${mod.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{
              background: '#fff', borderRadius: 10, border: '1px solid #e8f0f9',
              padding: '12px 10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6,
              boxShadow: '0 1px 3px rgba(0,30,80,0.04)',
              cursor: 'pointer', transition: 'border-color 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = mod.color + '55'
              e.currentTarget.style.boxShadow = `0 3px 10px ${mod.color}20`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#e8f0f9'
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,30,80,0.04)'
            }}
            >
              <div style={{
                width: 28, height: 28, borderRadius: 8,
                background: mod.color + '15', color: mod.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {mod.icon}
              </div>
              <div>
                <div style={{ fontSize: 9.5, fontWeight: 700, color: '#0f172a', lineHeight: 1.2, marginBottom: 2 }}>{mod.name}</div>
                <div style={{ fontSize: 7.5, color: '#64748b', lineHeight: 1.3 }}>{mod.desc}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Alt bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16, padding: '8px 18px',
        background: '#fff', borderRadius: 10, border: '1px solid #e8f0f9',
      }}>
        <span style={{ fontSize: 9, color: '#94a3b8', fontWeight: 500 }}>14 modül · Tek entegre platform</span>
        <span style={{ fontSize: 9, fontWeight: 700, color: '#003C75' }}>Fiyatları incele →</span>
        <span style={{ fontSize: 9, fontWeight: 700, color: '#003C75' }}>Demo talep et →</span>
      </div>

      <DashboardTables />
    </>
  )
}

/* ── Paylaşılan Tablolar ── */
function DashboardTables() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '5fr 4fr 4fr', gap: 10 }} className="hero-dashboard-tables">
      {/* Puantaj Kontrol */}
      <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e8f0f9', overflow: 'hidden' }}>
        <div style={{ padding: '8px 14px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#1e293b' }}>Puantaj Kontrol</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
        <div style={{ padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid #f1f5f9' }}>
          <span style={{ fontSize: 9, background: '#0ea5e9', color: '#fff', borderRadius: 4, padding: '2px 8px', fontWeight: 600 }}>2026-04-11</span>
          <span style={{ fontSize: 8.5, color: '#94a3b8' }}>Tüm Şubeler</span>
          <span style={{ fontSize: 8.5, color: '#94a3b8' }}>Tüm Departmanlar</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              {['Ad Soyad', 'Konum', 'Durum', 'İşlemler'].map(h => (
                <th key={h} style={{ padding: '5px 10px', fontWeight: 600, color: '#475569', textAlign: 'left' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Serap Gözel', konum: 'MERKEZ', durum: 'Gelmedi' },
              { name: 'Gizem Gün', konum: 'Merkez', durum: 'Gelmedi' },
              { name: 'Devrim Özver', konum: 'MERKEZ', durum: 'Gelmedi' },
              { name: 'Baran Güngör', konum: 'Merkez', durum: 'Gelmedi' },
              { name: 'Bilal Bakır', konum: 'MERKEZ', durum: 'Gelmedi' },
            ].map((r, i) => (
              <tr key={i} style={{ borderTop: '1px solid #f1f5f9' }}>
                <td style={{ padding: '4px 10px', color: '#334155', fontWeight: 500 }}>{r.name}</td>
                <td style={{ padding: '4px 10px', color: '#64748b' }}>{r.konum}</td>
                <td style={{ padding: '4px 10px', color: '#64748b' }}>{r.durum}</td>
                <td style={{ padding: '4px 10px' }}>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <div style={{ width: 18, height: 18, borderRadius: 4, background: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </div>
                    <div style={{ width: 18, height: 18, borderRadius: 4, background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ padding: '5px 10px', display: 'flex', justifyContent: 'center', gap: 3 }}>
          {['«','‹'].map(c => <span key={c} style={{ width: 16, height: 16, borderRadius: 4, border: '1px solid #e2e8f0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#94a3b8' }}>{c}</span>)}
          <span style={{ width: 16, height: 16, borderRadius: 4, background: '#0ea5e9', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700 }}>1</span>
          {['2','3'].map(c => <span key={c} style={{ width: 16, height: 16, borderRadius: 4, border: '1px solid #e2e8f0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#64748b' }}>{c}</span>)}
          {['›','»'].map(c => <span key={c} style={{ width: 16, height: 16, borderRadius: 4, border: '1px solid #e2e8f0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#94a3b8' }}>{c}</span>)}
        </div>
      </div>

      {/* Şu Anda Molada Olanlar */}
      <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e8f0f9', overflow: 'hidden' }}>
        <div style={{ padding: '8px 14px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#1e293b' }}>Şu Anda Molada Olanlar</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              {['Ad Soyad', 'Başlangıç', 'Bitiş', 'Mola Tipi'].map(h => (
                <th key={h} style={{ padding: '5px 8px', fontWeight: 600, color: '#475569', textAlign: 'left' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Ayşe Kara', baslangic: '09:15', bitis: '09:30', tip: 'Çay Molası', tipColor: '#f59e0b' },
              { name: 'Murat Demir', baslangic: '10:42', bitis: '11:00', tip: 'Öğle Arası', tipColor: '#0ea5e9' },
              { name: 'Fatma Yıldız', baslangic: '12:00', bitis: '13:00', tip: 'Öğle Arası', tipColor: '#0ea5e9' },
              { name: 'Kerem Arslan', baslangic: '14:30', bitis: '', tip: 'İhtiyaç Molası', tipColor: '#8b5cf6' },
              { name: 'Selin Çelik', baslangic: '15:10', bitis: '15:25', tip: 'Çay Molası', tipColor: '#f59e0b' },
            ].map((r, i) => (
              <tr key={i} style={{ borderTop: '1px solid #f1f5f9' }}>
                <td style={{ padding: '4px 8px', color: '#334155', fontWeight: 500 }}>{r.name}</td>
                <td style={{ padding: '4px 8px', color: '#64748b', fontSize: 9 }}>{r.baslangic}</td>
                <td style={{ padding: '4px 8px', color: '#64748b', fontSize: 9 }}>{r.bitis || <span style={{ color: '#cbd5e1' }}>—</span>}</td>
                <td style={{ padding: '4px 8px' }}>
                  <span style={{
                    fontSize: 8, fontWeight: 600, color: r.tipColor,
                    background: r.tipColor + '15', borderRadius: 4,
                    padding: '2px 6px', whiteSpace: 'nowrap',
                  }}>{r.tip}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ padding: '5px 10px', display: 'flex', justifyContent: 'center', gap: 3 }}>
          {['«','‹'].map(c => <span key={c} style={{ width: 16, height: 16, borderRadius: 4, border: '1px solid #e2e8f0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#94a3b8' }}>{c}</span>)}
          <span style={{ width: 16, height: 16, borderRadius: 4, background: '#0ea5e9', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700 }}>1</span>
          {['›','»'].map(c => <span key={c} style={{ width: 16, height: 16, borderRadius: 4, border: '1px solid #e2e8f0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#94a3b8' }}>{c}</span>)}
        </div>
      </div>

      {/* Çalışma Saati Eklenmemişler */}
      <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e8f0f9', overflow: 'hidden' }}>
        <div style={{ padding: '8px 14px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#1e293b' }}>Çalışma Saati Eklenmemişler</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              {['Ad Soyad', 'Departman'].map(h => (
                <th key={h} style={{ padding: '5px 10px', fontWeight: 600, color: '#475569', textAlign: 'left' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Salih İnci', dept: 'AFET İŞLERİ MÜDÜRLÜĞÜ' },
              { name: 'Beyza Ayhan', dept: 'Yazılım Ekibi' },
              { name: 'NİHAN AYTEKİN', dept: 'Yazılım Ekibi' },
              { name: 'HATİCE MERAL', dept: 'DEPARTMAN' },
              { name: 'YAKUP ALİ ERKEN', dept: 'DEPARTMAN' },
              { name: 'telsa ik', dept: 'Yazılım Ekibi' },
            ].map((r, i) => (
              <tr key={i} style={{ borderTop: '1px solid #f1f5f9' }}>
                <td style={{ padding: '4px 10px', color: '#334155', fontWeight: 500 }}>{r.name}</td>
                <td style={{ padding: '4px 10px', color: '#64748b' }}>{r.dept}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ padding: '5px 10px', display: 'flex', justifyContent: 'center', gap: 3 }}>
          {['«','‹'].map(c => <span key={c} style={{ width: 16, height: 16, borderRadius: 4, border: '1px solid #e2e8f0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#94a3b8' }}>{c}</span>)}
          <span style={{ width: 16, height: 16, borderRadius: 4, background: '#0ea5e9', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700 }}>1</span>
          {['2'].map(c => <span key={c} style={{ width: 16, height: 16, borderRadius: 4, border: '1px solid #e2e8f0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#64748b' }}>{c}</span>)}
          {['›','»'].map(c => <span key={c} style={{ width: 16, height: 16, borderRadius: 4, border: '1px solid #e2e8f0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#94a3b8' }}>{c}</span>)}
        </div>
      </div>
    </div>
  )
}

/* ── Telefon Ekran 3: Giriş Menüsü ── */
function PhoneGirisMenusuScreen() {
  const methods = [
    {
      label: 'Beacon',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a7 7 0 0 1 7 7c0 4-7 13-7 13S5 13 5 9a7 7 0 0 1 7-7z"/>
          <circle cx="12" cy="9" r="2.5" fill="#fff" stroke="none"/>
        </svg>
      ),
    },
    {
      label: 'NFC',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3"/>
          <path d="M8.5 8.5h3a4 4 0 0 1 0 8H8.5V8.5z"/>
          <path d="M8.5 12.5h3"/>
        </svg>
      ),
    },
    {
      label: 'Wi - Fi',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
          <circle cx="12" cy="20" r="1" fill="#fff" stroke="none"/>
        </svg>
      ),
    },
    {
      label: 'Remote',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5" fill="#fff" stroke="none"/>
        </svg>
      ),
    },
    {
      label: 'QR Kod',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/>
          <rect x="5" y="5" width="3" height="3" fill="#fff" stroke="none"/>
          <rect x="16" y="5" width="3" height="3" fill="#fff" stroke="none"/>
          <rect x="5" y="16" width="3" height="3" fill="#fff" stroke="none"/>
          <rect x="14" y="14" width="3" height="3" fill="#fff" stroke="none"/>
          <rect x="18" y="14" width="3" height="3" fill="#fff" stroke="none"/>
          <rect x="14" y="18" width="3" height="3" fill="#fff" stroke="none"/>
          <rect x="18" y="18" width="3" height="3" fill="#fff" stroke="none"/>
        </svg>
      ),
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f5f7fa' }}>
      <div style={{ background: '#fff', padding: '6px 10px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #e8f0f9' }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src={logo.src} alt="AiRX" style={{ height: 14, width: 'auto', objectFit: 'contain' }} />
        </div>
      </div>
      <div style={{ margin: '8px 8px 0', background: 'linear-gradient(135deg, #003C75, #00508f)', borderRadius: 10, padding: '7px 10px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,60,117,0.3)' }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: '#fff', marginBottom: 2 }}>Giriş Menüsü</div>
        <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>Lütfen size uygun olan giriş yapma seçeneğine tıklayınız</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, padding: '8px 8px 0', flex: 1 }}>
        {methods.map((m) => (
          <div key={m.label} style={{
            background: 'linear-gradient(145deg, #1a5296, #003C75)',
            borderRadius: 12,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 6, padding: '14px 8px',
            boxShadow: '0 3px 10px rgba(0,60,117,0.35), inset 0 1px 0 rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {m.icon}
            <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>{m.label}</span>
          </div>
        ))}
        <div style={{ background: 'linear-gradient(145deg, #1a5296, #003C75)', borderRadius: 12, opacity: 0.25 }} />
      </div>
      <div style={{ height: 8 }} />
    </div>
  )
}

/* ── Telefon Ekran 4: Çıkış Menüsü ── */
function PhoneCikisMenusuScreen() {
  const methods = [
    {
      label: 'Beacon',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a7 7 0 0 1 7 7c0 4-7 13-7 13S5 13 5 9a7 7 0 0 1 7-7z"/>
          <circle cx="12" cy="9" r="2.5" fill="#fff" stroke="none"/>
        </svg>
      ),
    },
    {
      label: 'NFC',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3"/>
          <path d="M8.5 8.5h3a4 4 0 0 1 0 8H8.5V8.5z"/>
          <path d="M8.5 12.5h3"/>
        </svg>
      ),
    },
    {
      label: 'Wi - Fi',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
          <circle cx="12" cy="20" r="1" fill="#fff" stroke="none"/>
        </svg>
      ),
    },
    {
      label: 'Remote',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5" fill="#fff" stroke="none"/>
        </svg>
      ),
    },
    {
      label: 'QR Kod',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/>
          <rect x="5" y="5" width="3" height="3" fill="#fff" stroke="none"/>
          <rect x="16" y="5" width="3" height="3" fill="#fff" stroke="none"/>
          <rect x="5" y="16" width="3" height="3" fill="#fff" stroke="none"/>
          <rect x="14" y="14" width="3" height="3" fill="#fff" stroke="none"/>
          <rect x="18" y="14" width="3" height="3" fill="#fff" stroke="none"/>
          <rect x="14" y="18" width="3" height="3" fill="#fff" stroke="none"/>
          <rect x="18" y="18" width="3" height="3" fill="#fff" stroke="none"/>
        </svg>
      ),
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f5f7fa' }}>
      {/* header */}
      <div style={{ background: '#fff', padding: '6px 10px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #e8f0f9' }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src={logo.src} alt="AiRX" style={{ height: 14, width: 'auto', objectFit: 'contain' }} />
        </div>
      </div>

      {/* banner */}
      <div style={{ margin: '8px 8px 0', background: 'linear-gradient(135deg, #b91c1c, #991b1b)', borderRadius: 10, padding: '7px 10px', textAlign: 'center', boxShadow: '0 2px 8px rgba(185,28,28,0.3)' }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: '#fff', marginBottom: 2 }}>Çıkış Menüsü</div>
        <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>Lütfen size uygun olan çıkış yapma seçeneğine tıklayınız</div>
      </div>

      {/* grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, padding: '8px 8px 0', flex: 1 }}>
        {methods.map((m) => (
          <div key={m.label} style={{
            background: 'linear-gradient(145deg, #c41e1e, #991b1b)',
            borderRadius: 12,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 6, padding: '14px 8px',
            boxShadow: '0 3px 10px rgba(153,27,27,0.35), inset 0 1px 0 rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {m.icon}
            <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>{m.label}</span>
          </div>
        ))}
        {/* boş slot */}
        <div style={{
          background: 'linear-gradient(145deg, #c41e1e, #991b1b)',
          borderRadius: 12, opacity: 0.25,
          boxShadow: '0 3px 10px rgba(153,27,27,0.2)',
        }} />
      </div>
      <div style={{ height: 8 }} />
    </div>
  )
}

/* ── Telefon Ekran 1: Anasayfa ── */
function PhoneHomeScreen() {
  return (
    <>
      {/* header */}
      <div style={{ background: '#fff', padding: '8px 10px 6px', borderBottom: '1px solid #e8f0f9' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 6 }}>
          <div>
            <div style={{ fontSize: 7, color: '#64748b' }}>Günaydın,</div>
            <div style={{ fontSize: 9, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Berat Kaan SEVEN</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 6.5, color: '#64748b' }}>Toplam Çalışılan Süre</div>
            <div style={{ fontSize: 11, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>03s 12dk</div>
          </div>
        </div>
      </div>

      {/* durum */}
      <div style={{ background: '#fff', margin: '6px 6px 0', borderRadius: 8, border: '1px solid #e2e8f0', padding: '6px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 6.5, fontWeight: 700, color: '#334155', marginBottom: 3 }}>Mevcut Durum</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: 8, fontWeight: 700, color: '#0f172a' }}>Çalışıyor</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 6, color: '#64748b', marginBottom: 3 }}>Son Hareket: <strong style={{ color: '#0f172a' }}>08.02</strong></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, justifyContent: 'flex-end' }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="5" y="5" width="3" height="3" fill="#003C75" stroke="none"/><rect x="16" y="5" width="3" height="3" fill="#003C75" stroke="none"/><rect x="5" y="16" width="3" height="3" fill="#003C75" stroke="none"/></svg>
            <span style={{ fontSize: 7, fontWeight: 700, color: '#003C75' }}>QR ile Giriş</span>
          </div>
        </div>
      </div>

      {/* butonlar */}
      <div style={{ display: 'flex', gap: 5, padding: '6px 6px 0' }}>
        <div style={{ flex: 1, height: 30, background: '#22c55e', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8.5, fontWeight: 800, color: '#fff', boxShadow: '0 2px 8px rgba(34,197,94,0.35)' }}>Giriş Yap</div>
        <div style={{ flex: 1, height: 30, background: '#ef4444', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8.5, fontWeight: 800, color: '#fff', boxShadow: '0 2px 8px rgba(239,68,68,0.35)' }}>Çıkış Yap</div>
      </div>
      <div style={{ margin: '5px 6px 0', height: 28, background: '#f59e0b', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, fontSize: 8, fontWeight: 800, color: '#fff', boxShadow: '0 2px 8px rgba(245,158,11,0.35)' }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Mola Başlat
      </div>

      {/* vardiya */}
      <div style={{ background: '#fff', margin: '6px 6px 0', borderRadius: 8, border: '1px solid #e2e8f0', padding: '6px 8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
          <span style={{ fontSize: 7.5, fontWeight: 800, color: '#0f172a' }}>Bugünkü Vardiya</span>
          <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 20, padding: '1px 6px', display: 'flex', alignItems: 'center', gap: 3 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 4, height: 4, borderRadius: 2, background: '#fff' }} />
            </div>
            <span style={{ fontSize: 6, fontWeight: 700, color: '#c2410c' }}>Ekstra</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          <div style={{ flex: 1, background: '#f8fafc', borderRadius: 6, padding: '4px 6px', textAlign: 'center' }}>
            <div style={{ fontSize: 6, color: '#64748b', marginBottom: 1 }}>Başlangıç</div>
            <div style={{ fontSize: 9, fontWeight: 800, color: '#0f172a' }}>08:00</div>
          </div>
          <div style={{ flex: 1, background: '#f8fafc', borderRadius: 6, padding: '4px 6px', textAlign: 'center' }}>
            <div style={{ fontSize: 6, color: '#64748b', marginBottom: 1 }}>Bitiş</div>
            <div style={{ fontSize: 9, fontWeight: 800, color: '#0f172a' }}>19:00</div>
          </div>
        </div>
      </div>

      {/* görevlerim */}
      <div style={{ margin: '6px 6px 6px', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', padding: '6px 8px' }}>
        <div style={{ fontSize: 7.5, fontWeight: 800, color: '#0f172a', marginBottom: 5 }}>Görevlerim</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[
            { label: 'Reyonlar düzenlenicek', color: '#ef4444' },
            { label: 'Market Arabaları Sıraya Dizilecek', color: '#22c55e' },
            { label: 'Z Raporu Oluşturulacak', color: '#22c55e' },
            { label: 'Aylık Tahsilat Raporu Hazırlanacak', color: '#ef4444' },
            { label: 'Sunumlar hazırlanacak', color: '#eab308' },
          ].map((g, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: g.color, flexShrink: 0 }} />
              <span style={{ fontSize: 6.5, color: '#334155', lineHeight: 1.3 }}>{g.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

/* ── Telefon Ekran 2: Mola Menüsü ── */
function PhoneMolaScreen() {
  return (
    <>
      {/* header */}
      <div style={{ background: '#0ea5e9', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src={logo.src} alt="AiRX" style={{ height: 13, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
        </div>
      </div>

      {/* Mola Menüsü banner */}
      <div style={{ margin: '6px 6px 0', background: 'linear-gradient(135deg, #22c55e, #16a34a)', borderRadius: 10, padding: '8px 10px', textAlign: 'center' }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: '#fff' }}>Mola Menüsü</div>
        <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>Lütfen size uygun olan mola seçeneğine tıklayınız</div>
      </div>

      {/* Durum */}
      <div style={{ margin: '5px 6px 0', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', padding: '6px 8px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginBottom: 2 }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span style={{ fontSize: 8, fontWeight: 800, color: '#0f172a' }}>Durum</span>
        </div>
        <div style={{ background: '#f1f5f9', borderRadius: 6, padding: '3px 8px', fontSize: 6.5, color: '#475569' }}>Şu an yemek molasındasın.</div>
      </div>

      {/* Yemek Molası */}
      <div style={{ margin: '5px 6px 0', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', padding: '7px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
            <span style={{ fontSize: 10 }}>🍴</span>
            <span style={{ fontSize: 8, fontWeight: 800, color: '#0f172a' }}>Yemek Molası</span>
          </div>
          <div style={{ background: '#f1f5f9', borderRadius: 6, padding: '2px 6px', fontSize: 6, color: '#64748b', display: 'inline-block' }}>Önerilen: 1 Saat</div>
        </div>
        <div style={{ background: '#22c55e', borderRadius: 8, padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 3, boxShadow: '0 2px 6px rgba(34,197,94,0.3)' }}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span style={{ fontSize: 7, fontWeight: 800, color: '#fff' }}>Başlat</span>
        </div>
      </div>

      {/* İhtiyaç Molası */}
      <div style={{ margin: '5px 6px 0', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', padding: '7px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span style={{ fontSize: 8, fontWeight: 800, color: '#0f172a' }}>İhtiyaç Molası</span>
          </div>
          <div style={{ background: '#f1f5f9', borderRadius: 6, padding: '2px 6px', fontSize: 6, color: '#64748b', display: 'inline-block' }}>Önerilen: 15 Dakika</div>
        </div>
        <div style={{ background: '#22c55e', borderRadius: 8, padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 3, boxShadow: '0 2px 6px rgba(34,197,94,0.3)' }}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span style={{ fontSize: 7, fontWeight: 800, color: '#fff' }}>Başlat</span>
        </div>
      </div>

      {/* Molanın Bitmesine Kalan Süre */}
      <div style={{ margin: '5px 6px 0', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', padding: '7px 8px', textAlign: 'center' }}>
        <div style={{ fontSize: 7, fontWeight: 600, color: '#334155', marginBottom: 5 }}>Molanın Bitmesine Kalan Süre</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
          {[{ v: '00', l: 'Saat' }, { v: '12', l: 'Dakika' }, { v: '30', l: 'Saniye' }].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {i > 0 && <span style={{ fontSize: 12, fontWeight: 800, color: '#334155' }}>:</span>}
              <div>
                <div style={{ width: 30, height: 26, background: '#f1f5f9', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#0f172a', border: '1px solid #e2e8f0' }}>{t.v}</div>
                <div style={{ fontSize: 5, color: '#94a3b8', textAlign: 'center', marginTop: 1 }}>{t.l}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ margin: '6px 0 2px', background: '#ef4444', borderRadius: 6, padding: '5px 0', fontSize: 7, fontWeight: 800, color: '#fff', letterSpacing: '0.05em' }}>MOLA BİTİR</div>
      </div>

      {/* Mola Raporu */}
      <div style={{ margin: '5px 6px 6px', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', padding: '7px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span style={{ fontSize: 8, fontWeight: 800, color: '#0f172a' }}>Mola Raporu</span>
          </div>
          <div style={{ display: 'flex', gap: 0, borderRadius: 6, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: 5.5, padding: '2px 6px', background: '#fff', color: '#64748b', fontWeight: 600 }}>Günlük</span>
            <span style={{ fontSize: 5.5, padding: '2px 6px', background: '#334155', color: '#fff', fontWeight: 700 }}>Haftalık</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
          {[{ v: '02', l: 'Saat', color: '#ef4444' }, { v: '42', l: 'Dakika', color: '#0ea5e9' }, { v: '12', l: 'Saniye', color: '#64748b' }].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {i > 0 && <span style={{ fontSize: 12, fontWeight: 800, color: '#334155' }}>:</span>}
              <div>
                <div style={{ width: 30, height: 26, background: t.color + '15', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: t.color, border: `1px solid ${t.color}30` }}>{t.v}</div>
                <div style={{ fontSize: 5, color: '#94a3b8', textAlign: 'center', marginTop: 1 }}>{t.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const SCREEN_COUNT = 2

export default function Hero() {
  const t = useTranslations()
  const [activeScreen, setActiveScreen] = useState(0)


  return (
    <>
      <section id="urun" style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f4f8fd 100%)',
        overflowX: 'clip',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '56px 40px 72px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }} className="hero-wrapper">

          {/* ── Başlık ── */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 'clamp(30px, 3.6vw, 48px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: '#0f172a',
              textAlign: 'center',
              margin: '0 0 16px',
            }}
          >
            {t('hero.title')}{' '}
            <span style={{ color: '#003C75' }}>{t('hero.titleHighlight')}</span>
          </motion.h1>

          {/* ── Alt metin ── */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: '#64748b',
              textAlign: 'center',
              margin: '0 0 28px',
              maxWidth: 460,
              fontWeight: 400,
            }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* ── Giriş Yöntemleri ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.22 }}
            style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}
          >
            {[
              {
                label: t('hero.entryWifi'),
                color: '#0ea5e9',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>
                  </svg>
                ),
              },
              {
                label: t('hero.entryNfc'),
                color: '#8b5cf6',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 15a6 6 0 1 0 12 0 6 6 0 0 0-12 0"/><path d="M9.5 15a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/><path d="M3 15a9 9 0 0 1 9-9"/><path d="M21 15a9 9 0 0 0-9-9"/>
                  </svg>
                ),
              },
              {
                label: t('hero.entryRemote'),
                color: '#003C75',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/>
                  </svg>
                ),
              },
              {
                label: t('hero.entryQr'),
                color: '#10b981',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="3" height="3" rx="0.5"/><rect x="18" y="14" width="3" height="3" rx="0.5"/><rect x="14" y="18" width="3" height="3" rx="0.5"/><rect x="18" y="18" width="3" height="3" rx="0.5"/>
                  </svg>
                ),
              },
              {
                label: t('hero.entryBeacon'),
                color: '#f59e0b',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a7 7 0 0 1 7 7c0 4-7 13-7 13S5 13 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2.5" fill="currentColor" stroke="none"/>
                  </svg>
                ),
              },
            ].map((method) => (
              <div
                key={method.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                  padding: '18px 22px',
                  background: '#fff',
                  border: `1.5px solid ${method.color}22`,
                  borderRadius: 16,
                  boxShadow: '0 2px 12px rgba(0,40,100,0.06)',
                  minWidth: 110,
                  transition: 'box-shadow 0.18s, border-color 0.18s, transform 0.18s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 6px 24px ${method.color}28`
                  e.currentTarget.style.borderColor = `${method.color}55`
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,40,100,0.06)'
                  e.currentTarget.style.borderColor = `${method.color}22`
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: `${method.color}12`,
                  color: method.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {method.icon}
                </div>
                <span style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: '#1e293b',
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}>
                  {method.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* ── Dashboard + Phone Mockup ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: '100%', position: 'relative', padding: '0 80px' }}
            className="hero-mockup-wrapper"
          >
            {/* ── Telefon Mockup 2 (sol) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="hero-phone-mockup"
              style={{
                position: 'absolute',
                top: -28,
                left: -90,
                zIndex: 10,
              }}
            >
              <div style={{
                width: 170,
                height: 360,
                borderRadius: 32,
                background: 'linear-gradient(160deg, #e8f2fc 0%, #c2d9f0 100%)',
                border: '5px solid #8fb8dc',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.7), inset 0 0 0 1px rgba(255,255,255,0.4), 0 32px 64px rgba(0,30,80,0.30), 0 8px 20px rgba(0,60,117,0.18)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', left: -6, top: 54, width: 3, height: 16, background: '#003C75', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', left: -6, top: 76, width: 3, height: 16, background: '#003C75', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', right: -6, top: 68, width: 3, height: 28, background: '#003C75', borderRadius: '0 2px 2px 0' }} />

                <div style={{ borderRadius: 27, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#f8fafc', height: '100%' }}>
                  <div style={{ height: 24, background: '#b8d3ec', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', flexShrink: 0 }}>
                    <span style={{ fontSize: 7.5, fontWeight: 700, color: '#002850' }}>09:41</span>
                    <div style={{ width: 40, height: 11, borderRadius: 6, background: '#003C75' }} />
                    <div style={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                      {[3,5,7,9].map((h,i) => <div key={i} style={{ width: 1.5, height: h, borderRadius: 1, background: i < 3 ? '#002850' : 'rgba(0,40,80,0.3)' }} />)}
                    </div>
                  </div>
                  <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeScreen}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                      >
                        {activeScreen === 0 && <PhoneGirisMenusuScreen />}
                        {activeScreen === 1 && <PhoneCikisMenusuScreen />}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div style={{ background: '#fff', borderTop: '1px solid #e8f0f9', display: 'flex', justifyContent: 'space-around', padding: '5px 0 7px', flexShrink: 0 }}>
                    {[
                      { label: 'Anasayfa', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
                      { label: 'Talepler', active: true, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="9" x2="9" y2="21"/></svg> },
                      { label: 'Gelen Kutusu', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                      { label: 'Profil', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
                    ].map(item => (
                      <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: item.active ? '#003C75' : 'rgba(0,60,117,0.3)' }}>
                        {item.icon}
                        <span style={{ fontSize: 5.5, fontWeight: item.active ? 700 : 500 }}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Telefon Mockup (sağ) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hero-phone-mockup"
              style={{
                position: 'absolute',
                top: -28,
                right: -90,
                zIndex: 10,
              }}
            >
              <div style={{
                width: 170,
                height: 360,
                borderRadius: 32,
                background: 'linear-gradient(160deg, #e8f2fc 0%, #c2d9f0 100%)',
                border: '5px solid #8fb8dc',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.7), inset 0 0 0 1px rgba(255,255,255,0.4), 0 32px 64px rgba(0,30,80,0.30), 0 8px 20px rgba(0,60,117,0.18)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* yan butonlar */}
                <div style={{ position: 'absolute', left: -6, top: 54, width: 3, height: 16, background: '#003C75', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', left: -6, top: 76, width: 3, height: 16, background: '#003C75', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', right: -6, top: 68, width: 3, height: 28, background: '#003C75', borderRadius: '0 2px 2px 0' }} />

                <div style={{ borderRadius: 27, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#f8fafc', height: '100%' }}>
                  {/* status bar */}
                  <div style={{ height: 24, background: '#b8d3ec', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', flexShrink: 0 }}>
                    <span style={{ fontSize: 7.5, fontWeight: 700, color: '#002850' }}>09:41</span>
                    <div style={{ width: 40, height: 11, borderRadius: 6, background: '#003C75' }} />
                    <div style={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                      {[3,5,7,9].map((h,i) => <div key={i} style={{ width: 1.5, height: h, borderRadius: 1, background: i < 3 ? '#002850' : 'rgba(0,40,80,0.3)' }} />)}
                    </div>
                  </div>

                  <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeScreen}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                      >
                        {activeScreen === 0 && <PhoneHomeScreen />}
                        {activeScreen === 1 && <PhoneMolaScreen />}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* bottom nav */}
                  <div style={{ background: '#fff', borderTop: '1px solid #e8f0f9', display: 'flex', justifyContent: 'space-around', padding: '5px 0 7px', flexShrink: 0 }}>
                    {[
                      { label: 'Anasayfa', active: activeScreen === 0, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
                      { label: 'Talepler', active: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="9" x2="9" y2="21"/></svg> },
                      { label: 'Gelen Kutusu', active: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                      { label: 'Profil', active: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
                    ].map(item => (
                      <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: item.active ? '#003C75' : 'rgba(0,60,117,0.3)' }}>
                        {item.icon}
                        <span style={{ fontSize: 5.5, fontWeight: item.active ? 700 : 500 }}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div style={{
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
              boxShadow: '0 25px 80px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.06)',
              background: '#fff',
              aspectRatio: '16/10',
              display: 'flex',
              flexDirection: 'column',
            }} className="hero-dashboard-shell">

              {/* Browser chrome */}
              <div style={{ background: '#f8fafc', borderBottom: '1px solid #e8ecf2', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['#ff6058','#ffbd2e','#28c840'].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div style={{ flex: 1, maxWidth: 280, margin: '0 auto', background: '#e8ecf2', borderRadius: 6, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 500 }}>panel.AiRX.com.tr</span>
                </div>
              </div>

              {/* App top navbar */}
              <div style={{ background: '#fff', borderBottom: '1px solid #e8f0f9', padding: '0 20px', height: 48, display: 'flex', alignItems: 'center', gap: 14 }}>
                <img src={logo.src} alt="AiRX" style={{ height: 18, width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
                <div style={{ display: 'flex', gap: 2, flex: 1 }}>
                  {[
                    { label: 'Anasayfa', active: true, chevron: false },
                    { label: 'Tanımlamalar', active: false, chevron: true },
                    { label: 'Personel', active: false, chevron: true },
                    { label: 'Modüller', active: false, chevron: true },
                    { label: 'Raporlar', active: false, chevron: true },
                  ].map(item => (
                    <div key={item.label} style={{ padding: '6px 10px', borderRadius: 6, background: item.active ? 'rgba(0,60,117,0.07)' : 'transparent', display: 'flex', alignItems: 'center', gap: 3, whiteSpace: 'nowrap' }}>
                      <span style={{ fontSize: 12, fontWeight: item.active ? 700 : 500, color: item.active ? '#003C75' : '#64748b' }}>{item.label}</span>
                      {item.chevron && (
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                  <span style={{ fontSize: 13 }}>🇹🇷</span>
                  <span style={{ fontSize: 11, color: '#64748b' }}>Türkçe</span>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>

              {/* Ana içerik — dönen ekranlar */}
              <div className="hero-dashboard-body" style={{ background: '#f5f8fc', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden', position: 'relative', flex: 1 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
                  >
                    {activeScreen === 0 && <DashboardHome />}
                    {activeScreen === 1 && <DashboardModules />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ── Ekran Kontrol Noktaları ── */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginTop: 20 }}>
              {[
                { index: 0, label: 'Genel Bakış' },
                { index: 1, label: 'Modüller' },
              ].map(({ index, label }) => (
                <button
                  key={index}
                  onClick={() => setActiveScreen(index)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '6px 14px', borderRadius: 20,
                    border: 'none', cursor: 'pointer',
                    background: activeScreen === index ? '#003C75' : 'rgba(0,60,117,0.08)',
                    color: activeScreen === index ? '#fff' : '#64748b',
                    fontSize: 12, fontWeight: activeScreen === index ? 700 : 500,
                    transition: 'background 0.2s, color 0.2s',
                  }}
                >
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: activeScreen === index ? '#79ACDC' : '#cbd5e1',
                    flexShrink: 0,
                  }} />
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-wrapper { padding: 40px 20px 56px !important; }
          .hero-dashboard-stats { grid-template-columns: repeat(3, 1fr) !important; }
          .hero-dashboard-tables { grid-template-columns: 1fr 1fr !important; }
          .hero-phone-mockup { display: none !important; }
          .hero-phone-mockup-left { display: none !important; }
          .hero-modules-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .hero-mockup-wrapper { padding: 0 !important; }
        }
        @media (max-width: 480px) {
          .hero-wrapper { padding: 32px 16px 40px !important; }
          .hero-dashboard-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-modules-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </>
  )
}
