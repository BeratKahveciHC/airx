'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '../../i18n/navigation'
import logo from '../../assets/logo.png'

const MODULES_DATA = [
  { slug: 'pdks', name: 'PDKS', nameEn: 'Time & Attendance', desc: 'Giriş-çıkış takibi', descEn: 'Entry-exit tracking', color: '#0ea5e9', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { slug: 'ozluk-dosyasi', name: 'Özlük Dosyası', nameEn: 'Employee File', desc: 'Dijital personel arşivi', descEn: 'Digital personnel archive', color: '#a78bfa', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { slug: 'izin-yonetimi', name: 'İzin Yönetimi', nameEn: 'Leave Management', desc: 'Onay akışlı izin takibi', descEn: 'Approval-flow leave tracking', color: '#34d399', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { slug: 'puantaj', name: 'Puantaj', nameEn: 'Timekeeping', desc: 'Otomatik puantaj cetveli', descEn: 'Automatic timesheet', color: '#fbbf24', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg> },
  { slug: 'erisim-kontrolu', name: 'Erişim Kontrolü', nameEn: 'Access Control', desc: 'Bölge bazlı yetkilendirme', descEn: 'Zone-based authorization', color: '#f87171', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
  { slug: 'ziyaretci-yonetimi', name: 'Ziyaretçi Yönetimi', nameEn: 'Visitor Management', desc: 'QR ile ziyaretçi kaydı', descEn: 'QR visitor registration', color: '#22d3ee', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { slug: 'yemekhane', name: 'Yemekhane', nameEn: 'Canteen', desc: 'Yemek hakkı kontrolü', descEn: 'Meal entitlement control', color: '#fb923c', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg> },
  { slug: 'anket', name: 'Anket', nameEn: 'Survey', desc: 'Personel geri bildirimi', descEn: 'Staff feedback', color: '#a3e635', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> },
  { slug: 'sureli-evraklar', name: 'Süreli Evraklar', nameEn: 'Timed Documents', desc: 'Son kullanma tarihi takibi', descEn: 'Expiry date tracking', color: '#f472b6', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg> },
  { slug: 'egitim-planlama', name: 'Eğitim Planlama', nameEn: 'Training Planning', desc: 'Eğitim katılım takibi', descEn: 'Training attendance tracking', color: '#60a5fa', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> },
  { slug: 'hukuki-evraklar', name: 'Hukuki Evraklar', nameEn: 'Legal Documents', desc: 'İhtar ve savunma yönetimi', descEn: 'Warning & defense management', color: '#818cf8', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 6-8 4-4-2V4l4 2 8-4 4 2v4l-4-2z"/><path d="M8 10v10"/><path d="M16 6v10"/></svg> },
  { slug: 'yan-haklar', name: 'Yan Haklar', nameEn: 'Benefits', desc: 'Görev bazlı yan hak takibi', descEn: 'Role-based benefit tracking', color: '#2dd4bf', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/></svg> },
  { slug: 'periyodik-gorev', name: 'Periyodik Görev', nameEn: 'Periodic Task', desc: 'Lokasyon doğrulamalı görev', descEn: 'Location-verified task', color: '#c084fc', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg> },
  { slug: 'is-zekasi', name: 'İş Zekası', nameEn: 'Business Intelligence', desc: 'Veri görselleştirme', descEn: 'Data visualization', color: '#79ACDC', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
]

/* ── Dashboard Ekran 1: Anasayfa ── */
function DashboardHome({ locale }) {
  const en = locale === 'en'
  return (
    <>
      {/* 2×3 Stat kartları */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }} className="hero-dashboard-stats">
        {[
          { value: 48, label: en ? 'Active Employees' : 'Aktif Personeller', sub: en ? 'Not in Timesheet: 2' : 'Puantaja Dahil Değil: 2', color: '#3b82f6',
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
          { value: 31, label: en ? 'Present' : 'Gelenler', color: '#22c55e',
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> },
          { value: 5, label: en ? 'On Overtime' : 'Mesaidekiler', color: '#8b5cf6',
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> },
          { value: 8, label: en ? 'Absent' : 'Gelmeyenler', color: '#ef4444',
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> },
          { value: 3, label: en ? 'Late Arrivals' : 'Geç Gelenler', color: '#f59e0b',
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
          { value: 2, label: en ? 'On Leave' : 'İzinliler', color: '#0ea5e9',
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

      <DashboardTables locale={locale} />
    </>
  )
}

/* ── Dashboard Ekran 2: Modüller ── */
function DashboardModules({ locale }) {
  const en = locale === 'en'
  return (
    <>
      

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
                <div style={{ fontSize: 9.5, fontWeight: 700, color: '#0f172a', lineHeight: 1.2, marginBottom: 2 }}>{en ? mod.nameEn : mod.name}</div>
                <div style={{ fontSize: 7.5, color: '#64748b', lineHeight: 1.3 }}>{en ? mod.descEn : mod.desc}</div>
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
        <span style={{ fontSize: 9, color: '#94a3b8', fontWeight: 500 }}>{en ? '14 modules · Single integrated platform' : '14 modül · Tek entegre platform'}</span>
        <span style={{ fontSize: 9, fontWeight: 700, color: '#003C75' }}>{en ? 'View pricing →' : 'Fiyatları incele →'}</span>
        <span style={{ fontSize: 9, fontWeight: 700, color: '#003C75' }}>{en ? 'Request a demo →' : 'Demo talep et →'}</span>
      </div>

      <DashboardTables locale={locale} />
    </>
  )
}

/* ── Paylaşılan Tablolar ── */
function DashboardTables({ locale }) {
  const en = locale === 'en'
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '5fr 4fr 4fr', gap: 10 }} className="hero-dashboard-tables">
      {/* Puantaj Kontrol */}
      <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e8f0f9', overflow: 'hidden' }}>
        <div style={{ padding: '8px 14px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#1e293b' }}>{en ? 'Timesheet Control' : 'Puantaj Kontrol'}</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
        <div style={{ padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid #f1f5f9' }}>
          <span style={{ fontSize: 9, background: '#0ea5e9', color: '#fff', borderRadius: 4, padding: '2px 8px', fontWeight: 600 }}>2026-04-11</span>
          <span style={{ fontSize: 8.5, color: '#94a3b8' }}>{en ? 'All Branches' : 'Tüm Şubeler'}</span>
          <span style={{ fontSize: 8.5, color: '#94a3b8' }}>{en ? 'All Departments' : 'Tüm Departmanlar'}</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              {(en ? ['Full Name', 'Location', 'Status', 'Actions'] : ['Ad Soyad', 'Konum', 'Durum', 'İşlemler']).map(h => (
                <th key={h} style={{ padding: '5px 10px', fontWeight: 600, color: '#475569', textAlign: 'left' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Serap Gözel', konum: 'Merkez' },
              { name: 'Gizem Gün', konum: 'Merkez' },
              { name: 'Devrim Özver', konum: 'Merkez' },
              { name: 'Baran Güngör', konum: 'Merkez' },
              { name: 'Bilal Bakır', konum: 'Merkez' },
            ].map((r, i) => (
              <tr key={i} style={{ borderTop: '1px solid #f1f5f9' }}>
                <td style={{ padding: '4px 10px', color: '#334155', fontWeight: 500 }}>{r.name}</td>
                <td style={{ padding: '4px 10px', color: '#64748b' }}>{r.konum}</td>
                <td style={{ padding: '4px 10px', color: '#64748b' }}>{en ? 'Absent' : 'Gelmedi'}</td>
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
          <span style={{ fontSize: 11, fontWeight: 700, color: '#1e293b' }}>{en ? 'Currently on Break' : 'Şu Anda Molada Olanlar'}</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              {(en ? ['Full Name', 'Start', 'End', 'Break Type'] : ['Ad Soyad', 'Başlangıç', 'Bitiş', 'Mola Tipi']).map(h => (
                <th key={h} style={{ padding: '5px 8px', fontWeight: 600, color: '#475569', textAlign: 'left' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Ayşe Kara', baslangic: '09:15', bitis: '09:30', tip: en ? 'Tea Break' : 'Çay Molası', tipColor: '#f59e0b' },
              { name: 'Murat Demir', baslangic: '10:42', bitis: '11:00', tip: en ? 'Lunch Break' : 'Öğle Arası', tipColor: '#0ea5e9' },
              { name: 'Fatma Yıldız', baslangic: '12:00', bitis: '13:00', tip: en ? 'Lunch Break' : 'Öğle Arası', tipColor: '#0ea5e9' },
              { name: 'Kerem Arslan', baslangic: '14:30', bitis: '', tip: en ? 'Personal Break' : 'İhtiyaç Molası', tipColor: '#8b5cf6' },
              { name: 'Selin Çelik', baslangic: '15:10', bitis: '15:25', tip: en ? 'Tea Break' : 'Çay Molası', tipColor: '#f59e0b' },
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
          <span style={{ fontSize: 11, fontWeight: 700, color: '#1e293b' }}>{en ? 'Missing Work Hours' : 'Çalışma Saati Eklenmemişler'}</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              {(en ? ['Full Name', 'Department'] : ['Ad Soyad', 'Departman']).map(h => (
                <th key={h} style={{ padding: '5px 10px', fontWeight: 600, color: '#475569', textAlign: 'left' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Salih İnci', dept: en ? 'Software Team' : 'Yazılım Ekibi' },
              { name: 'Beyza Ayhan', dept: en ? 'Software Team' : 'Yazılım Ekibi' },
              { name: 'Nihan Aytekin', dept: en ? 'Software Team' : 'Yazılım Ekibi' },
              { name: 'Hatice Meral', dept: en ? 'IT Team' : 'Bilgi İşlem Ekibi' },
              { name: 'Yakup Ali Erken', dept: en ? 'IT Team' : 'Bilgi İşlem Ekibi' },
              { name: 'Mehmet Kaya', dept: en ? 'Software Team' : 'Yazılım Ekibi' },
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
function PhoneGirisMenusuScreen({ locale }) {
  const en = locale === 'en'
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
      label: en ? 'QR Code' : 'QR Kod',
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
        <div style={{ fontSize: 10, fontWeight: 800, color: '#fff', marginBottom: 2 }}>{en ? 'Check-In Menu' : 'Giriş Menüsü'}</div>
        <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>{en ? 'Please select your preferred check-in method' : 'Lütfen size uygun olan giriş yapma seçeneğine tıklayınız'}</div>
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
function PhoneCikisMenusuScreen({ locale }) {
  const en = locale === 'en'
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
      label: en ? 'QR Code' : 'QR Kod',
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
        <div style={{ fontSize: 10, fontWeight: 800, color: '#fff', marginBottom: 2 }}>{en ? 'Check-Out Menu' : 'Çıkış Menüsü'}</div>
        <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>{en ? 'Please select your preferred check-out method' : 'Lütfen size uygun olan çıkış yapma seçeneğine tıklayınız'}</div>
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
function PhoneHomeScreen({ locale }) {
  const en = locale === 'en'
  return (
    <>
      {/* header */}
      <div style={{ background: '#fff', padding: '8px 10px 6px', borderBottom: '1px solid #e8f0f9' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 6 }}>
          <div>
            <div style={{ fontSize: 7, color: '#64748b' }}>{en ? 'Good morning,' : 'Günaydın,'}</div>
            <div style={{ fontSize: 9, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Berat Kaan SEVEN</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 6.5, color: '#64748b' }}>{en ? 'Total Hours Worked' : 'Toplam Çalışılan Süre'}</div>
            <div style={{ fontSize: 11, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>{en ? '03h 12m' : '03s 12dk'}</div>
          </div>
        </div>
      </div>

      {/* durum */}
      <div style={{ background: '#fff', margin: '6px 6px 0', borderRadius: 8, border: '1px solid #e2e8f0', padding: '6px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 6.5, fontWeight: 700, color: '#334155', marginBottom: 3 }}>{en ? 'Current Status' : 'Mevcut Durum'}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: 8, fontWeight: 700, color: '#0f172a' }}>{en ? 'Working' : 'Çalışıyor'}</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 6, color: '#64748b', marginBottom: 3 }}>{en ? 'Last Activity: ' : 'Son Hareket: '}<strong style={{ color: '#0f172a' }}>08.02</strong></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, justifyContent: 'flex-end' }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#003C75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="5" y="5" width="3" height="3" fill="#003C75" stroke="none"/><rect x="16" y="5" width="3" height="3" fill="#003C75" stroke="none"/><rect x="5" y="16" width="3" height="3" fill="#003C75" stroke="none"/></svg>
            <span style={{ fontSize: 7, fontWeight: 700, color: '#003C75' }}>{en ? 'Check-In via QR' : 'QR ile Giriş'}</span>
          </div>
        </div>
      </div>

      {/* butonlar */}
      <div style={{ display: 'flex', gap: 5, padding: '6px 6px 0' }}>
        <div style={{ flex: 1, height: 30, background: '#22c55e', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8.5, fontWeight: 800, color: '#fff', boxShadow: '0 2px 8px rgba(34,197,94,0.35)' }}>{en ? 'Check In' : 'Giriş Yap'}</div>
        <div style={{ flex: 1, height: 30, background: '#ef4444', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8.5, fontWeight: 800, color: '#fff', boxShadow: '0 2px 8px rgba(239,68,68,0.35)' }}>{en ? 'Check Out' : 'Çıkış Yap'}</div>
      </div>
      <div style={{ margin: '5px 6px 0', height: 28, background: '#f59e0b', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, fontSize: 8, fontWeight: 800, color: '#fff', boxShadow: '0 2px 8px rgba(245,158,11,0.35)' }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        {en ? 'Start Break' : 'Mola Başlat'}
      </div>

      {/* vardiya */}
      <div style={{ background: '#fff', margin: '6px 6px 0', borderRadius: 8, border: '1px solid #e2e8f0', padding: '6px 8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
          <span style={{ fontSize: 7.5, fontWeight: 800, color: '#0f172a' }}>{en ? "Today's Shift" : 'Bugünkü Vardiya'}</span>
          <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 20, padding: '1px 6px', display: 'flex', alignItems: 'center', gap: 3 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 4, height: 4, borderRadius: 2, background: '#fff' }} />
            </div>
            <span style={{ fontSize: 6, fontWeight: 700, color: '#c2410c' }}>{en ? 'Extra' : 'Ekstra'}</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          <div style={{ flex: 1, background: '#f8fafc', borderRadius: 6, padding: '4px 6px', textAlign: 'center' }}>
            <div style={{ fontSize: 6, color: '#64748b', marginBottom: 1 }}>{en ? 'Start' : 'Başlangıç'}</div>
            <div style={{ fontSize: 9, fontWeight: 800, color: '#0f172a' }}>08:00</div>
          </div>
          <div style={{ flex: 1, background: '#f8fafc', borderRadius: 6, padding: '4px 6px', textAlign: 'center' }}>
            <div style={{ fontSize: 6, color: '#64748b', marginBottom: 1 }}>{en ? 'End' : 'Bitiş'}</div>
            <div style={{ fontSize: 9, fontWeight: 800, color: '#0f172a' }}>19:00</div>
          </div>
        </div>
      </div>

      {/* görevlerim */}
      <div style={{ margin: '6px 6px 6px', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', padding: '6px 8px' }}>
        <div style={{ fontSize: 7.5, fontWeight: 800, color: '#0f172a', marginBottom: 5 }}>{en ? 'My Tasks' : 'Görevlerim'}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {(en ? [
            { label: 'Arrange the shelves', color: '#ef4444' },
            { label: 'Line up the shopping carts', color: '#22c55e' },
            { label: 'Generate Z Report', color: '#22c55e' },
            { label: 'Prepare Monthly Collection Report', color: '#ef4444' },
            { label: 'Prepare presentations', color: '#eab308' },
          ] : [
            { label: 'Reyonlar düzenlenicek', color: '#ef4444' },
            { label: 'Market Arabaları Sıraya Dizilecek', color: '#22c55e' },
            { label: 'Z Raporu Oluşturulacak', color: '#22c55e' },
            { label: 'Aylık Tahsilat Raporu Hazırlanacak', color: '#ef4444' },
            { label: 'Sunumlar hazırlanacak', color: '#eab308' },
          ]).map((g, i) => (
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
function PhoneMolaScreen({ locale }) {
  const en = locale === 'en'
  return (
    <>
      {/* header */}
      <div style={{ background: '#0ea5e9', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src={logo.src} alt="AiRX" style={{ height: 13, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
        </div>
      </div>

      {/* banner */}
      <div style={{ margin: '6px 6px 0', background: 'linear-gradient(135deg, #22c55e, #16a34a)', borderRadius: 10, padding: '8px 10px', textAlign: 'center' }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: '#fff' }}>{en ? 'Break Menu' : 'Mola Menüsü'}</div>
        <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>{en ? 'Please select your preferred break option' : 'Lütfen size uygun olan mola seçeneğine tıklayınız'}</div>
      </div>

      {/* Durum */}
      <div style={{ margin: '5px 6px 0', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', padding: '6px 8px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginBottom: 2 }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span style={{ fontSize: 8, fontWeight: 800, color: '#0f172a' }}>{en ? 'Status' : 'Durum'}</span>
        </div>
        <div style={{ background: '#f1f5f9', borderRadius: 6, padding: '3px 8px', fontSize: 6.5, color: '#475569' }}>{en ? 'You are currently on a meal break.' : 'Şu an yemek molasındasın.'}</div>
      </div>

      {/* Yemek Molası */}
      <div style={{ margin: '5px 6px 0', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', padding: '7px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
            <span style={{ fontSize: 10 }}>🍴</span>
            <span style={{ fontSize: 8, fontWeight: 800, color: '#0f172a' }}>{en ? 'Meal Break' : 'Yemek Molası'}</span>
          </div>
          <div style={{ background: '#f1f5f9', borderRadius: 6, padding: '2px 6px', fontSize: 6, color: '#64748b', display: 'inline-block' }}>{en ? 'Recommended: 1 Hour' : 'Önerilen: 1 Saat'}</div>
        </div>
        <div style={{ background: '#22c55e', borderRadius: 8, padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 3, boxShadow: '0 2px 6px rgba(34,197,94,0.3)' }}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span style={{ fontSize: 7, fontWeight: 800, color: '#fff' }}>{en ? 'Start' : 'Başlat'}</span>
        </div>
      </div>

      {/* İhtiyaç Molası */}
      <div style={{ margin: '5px 6px 0', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', padding: '7px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span style={{ fontSize: 8, fontWeight: 800, color: '#0f172a' }}>{en ? 'Personal Break' : 'İhtiyaç Molası'}</span>
          </div>
          <div style={{ background: '#f1f5f9', borderRadius: 6, padding: '2px 6px', fontSize: 6, color: '#64748b', display: 'inline-block' }}>{en ? 'Recommended: 15 Minutes' : 'Önerilen: 15 Dakika'}</div>
        </div>
        <div style={{ background: '#22c55e', borderRadius: 8, padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 3, boxShadow: '0 2px 6px rgba(34,197,94,0.3)' }}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span style={{ fontSize: 7, fontWeight: 800, color: '#fff' }}>{en ? 'Start' : 'Başlat'}</span>
        </div>
      </div>

      {/* Kalan Süre */}
      <div style={{ margin: '5px 6px 0', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', padding: '7px 8px', textAlign: 'center' }}>
        <div style={{ fontSize: 7, fontWeight: 600, color: '#334155', marginBottom: 5 }}>{en ? 'Time Remaining for Break' : 'Molanın Bitmesine Kalan Süre'}</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
          {[{ v: '00', l: en ? 'Hour' : 'Saat' }, { v: '12', l: en ? 'Min' : 'Dakika' }, { v: '30', l: en ? 'Sec' : 'Saniye' }].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {i > 0 && <span style={{ fontSize: 12, fontWeight: 800, color: '#334155' }}>:</span>}
              <div>
                <div style={{ width: 30, height: 26, background: '#f1f5f9', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#0f172a', border: '1px solid #e2e8f0' }}>{t.v}</div>
                <div style={{ fontSize: 5, color: '#94a3b8', textAlign: 'center', marginTop: 1 }}>{t.l}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ margin: '6px 0 2px', background: '#ef4444', borderRadius: 6, padding: '5px 0', fontSize: 7, fontWeight: 800, color: '#fff', letterSpacing: '0.05em' }}>{en ? 'END BREAK' : 'MOLA BİTİR'}</div>
      </div>

      {/* Mola Raporu */}
      <div style={{ margin: '5px 6px 6px', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', padding: '7px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span style={{ fontSize: 8, fontWeight: 800, color: '#0f172a' }}>{en ? 'Break Report' : 'Mola Raporu'}</span>
          </div>
          <div style={{ display: 'flex', gap: 0, borderRadius: 6, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: 5.5, padding: '2px 6px', background: '#fff', color: '#64748b', fontWeight: 600 }}>{en ? 'Daily' : 'Günlük'}</span>
            <span style={{ fontSize: 5.5, padding: '2px 6px', background: '#334155', color: '#fff', fontWeight: 700 }}>{en ? 'Weekly' : 'Haftalık'}</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
          {[{ v: '02', l: en ? 'Hour' : 'Saat', color: '#ef4444' }, { v: '42', l: en ? 'Min' : 'Dakika', color: '#0ea5e9' }, { v: '12', l: en ? 'Sec' : 'Saniye', color: '#64748b' }].map((t, i) => (
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

/* ── Giriş Yöntemi Görselleri ── */
function WifiVisual({ color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, width: '100%' }}>
      {/* Sol: Router */}
      <div style={{ width: 56, height: 40, borderRadius: 10, background: '#fff', border: `2px solid ${color}40`, boxShadow: `0 4px 16px ${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, padding: '0 10px' }}>
        {[1,2,3].map(i => <div key={i} style={{ width: 3, height: 12 + i * 4, borderRadius: 2, background: color, opacity: 0.4 + i * 0.2 }} />)}
      </div>
      {/* Orta: Sinyal dalgaları */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {[0.25, 0.5, 0.75, 1].map((op, i) => (
          <div key={i} style={{ width: 2.5, height: 16 + i * 8, borderRadius: 2, background: color, opacity: op }} />
        ))}
      </div>
      {/* Sağ: Telefon */}
      <div style={{ width: 38, height: 64, borderRadius: 10, background: '#fff', border: `2px solid ${color}`, boxShadow: `0 4px 20px ${color}30`, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ height: 8, background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 10, height: 3, borderRadius: 2, background: `${color}60` }} />
        </div>
        <div style={{ flex: 1, padding: '6px 5px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ width: '100%', height: 3, borderRadius: 2, background: `${color}30` }} />
          <div style={{ width: '80%', height: 3, borderRadius: 2, background: `${color}20` }} />
          <div style={{ margin: '4px 0', width: '100%', height: 14, borderRadius: 4, background: `${color}15`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
          </div>
          <div style={{ width: '60%', height: 3, borderRadius: 2, background: `${color}20` }} />
        </div>
      </div>
    </div>
  )
}

function NfcVisual({ color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, width: '100%' }}>
      {/* Kart */}
      <div style={{ width: 90, height: 58, borderRadius: 10, background: `linear-gradient(135deg, ${color}22 0%, ${color}08 100%)`, border: `2px solid ${color}50`, boxShadow: `0 4px 16px ${color}20`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '8px 10px', flexShrink: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ width: 20, height: 14, borderRadius: 3, background: `${color}30`, border: `1px solid ${color}40` }} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><path d="M6 15a6 6 0 1 0 12 0 6 6 0 0 0-12 0"/><path d="M9.5 15a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/></svg>
        </div>
        <div>
          <div style={{ width: 36, height: 3, borderRadius: 2, background: `${color}50`, marginBottom: 3 }} />
          <div style={{ width: 24, height: 3, borderRadius: 2, background: `${color}30` }} />
        </div>
      </div>
      {/* Dalga efekti */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, margin: '0 12px' }}>
        {[1, 0.6, 0.3].map((op, i) => (
          <div key={i} style={{ width: 2, height: 24 + i * 8, borderRadius: 2, background: color, opacity: op }} />
        ))}
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: `${color}20`, border: `1.5px solid ${color}50` }} />
        {[0.3, 0.6, 1].map((op, i) => (
          <div key={i} style={{ width: 2, height: 16 + i * 8, borderRadius: 2, background: color, opacity: op }} />
        ))}
      </div>
      {/* Telefon */}
      <div style={{ width: 38, height: 64, borderRadius: 10, background: '#fff', border: `2px solid ${color}`, boxShadow: `0 4px 20px ${color}30`, display: 'flex', flexDirection: 'column', overflow: 'hidden', flexShrink: 0 }}>
        <div style={{ height: 8, background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 10, height: 3, borderRadius: 2, background: `${color}60` }} />
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${color}15`, border: `2px solid ${color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function RemoteVisual({ color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, width: '100%' }}>
      {/* Yönetici telefonu */}
      <div style={{ width: 38, height: 64, borderRadius: 10, background: '#fff', border: `2px solid ${color}`, boxShadow: `0 4px 20px ${color}30`, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ height: 8, background: `${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 10, height: 3, borderRadius: 2, background: `${color}80` }} />
        </div>
        <div style={{ flex: 1, padding: '5px 4px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ width: '100%', height: 3, borderRadius: 2, background: `${color}30` }} />
          <div style={{ width: '100%', height: 20, borderRadius: 4, background: `${color}12`, border: `1px solid ${color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
        </div>
      </div>
      {/* Bağlantı çizgisi */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          {[...Array(5)].map((_, i) => <div key={i} style={{ width: 6, height: 2, borderRadius: 1, background: color, opacity: i % 2 === 0 ? 0.8 : 0.3 }} />)}
        </div>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: `${color}20`, border: `1.5px solid ${color}50` }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          {[...Array(5)].map((_, i) => <div key={i} style={{ width: 6, height: 2, borderRadius: 1, background: color, opacity: i % 2 === 0 ? 0.3 : 0.8 }} />)}
        </div>
      </div>
      {/* Personel telefonu */}
      <div style={{ width: 38, height: 64, borderRadius: 10, background: '#fff', border: `2px solid ${color}60`, boxShadow: `0 4px 16px ${color}20`, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ height: 8, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 10, height: 3, borderRadius: 2, background: `${color}40` }} />
        </div>
        <div style={{ flex: 1, padding: '5px 4px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ width: '100%', height: 3, borderRadius: 2, background: `${color}20` }} />
          <div style={{ width: '80%', height: 3, borderRadius: 2, background: `${color}15` }} />
          <div style={{ margin: '3px 0', width: '100%', height: 14, borderRadius: 4, background: '#f0fdf4', border: '1px solid #86efac', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function QrVisual({ color }) {
  const cells = [
    [1,1,1,0,1,1,1],[1,0,1,0,1,0,1],[1,0,1,0,1,0,1],[0,0,0,0,0,0,0],[1,0,1,0,1,0,1],[1,0,1,0,1,0,1],[1,1,1,0,1,1,1],
  ]
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, width: '100%' }}>
      {/* QR Kod */}
      <div style={{ padding: 10, borderRadius: 12, background: '#fff', border: `2px solid ${color}40`, boxShadow: `0 4px 16px ${color}20`, position: 'relative' }}>
        {[{top:2,left:2},{top:2,right:2},{bottom:2,left:2}].map((pos,i) => (
          <div key={i} style={{ position: 'absolute', ...pos, width: 14, height: 14, borderRadius: 2, border: `2.5px solid ${color}`, borderRight: i === 0 || i === 2 ? 'none' : `2.5px solid ${color}`, borderBottom: i === 0 ? 'none' : i === 1 ? 'none' : `2.5px solid ${color}`, borderLeft: i === 1 ? 'none' : `2.5px solid ${color}`, borderTop: i === 2 ? 'none' : `2.5px solid ${color}` }} />
        ))}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 7px)', gap: 1.5 }}>
          {cells.flat().map((cell, i) => (
            <div key={i} style={{ width: 7, height: 7, borderRadius: 1.5, background: cell ? color : 'transparent', opacity: cell ? (0.5 + Math.random() * 0.5) : 0 }} />
          ))}
        </div>
        <div style={{ position: 'absolute', left: 6, right: 6, top: '45%', height: 1.5, background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0.7 }} />
      </div>
      {/* Ok */}
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
        <path d="M0 8h24M18 2l6 6-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {/* Telefon kamera */}
      <div style={{ width: 44, height: 72, borderRadius: 12, background: '#fff', border: `2px solid ${color}`, boxShadow: `0 4px 20px ${color}30`, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ height: 9, background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
          <div style={{ width: 12, height: 3, borderRadius: 2, background: `${color}60` }} />
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: `${color}60` }} />
        </div>
        <div style={{ flex: 1, margin: 5, borderRadius: 6, background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          {[{top:3,left:3},{top:3,right:3},{bottom:3,left:3},{bottom:3,right:3}].map((pos,i) => (
            <div key={i} style={{ position: 'absolute', ...pos, width: 6, height: 6, borderTop: i < 2 ? `2px solid ${color}` : 'none', borderBottom: i >= 2 ? `2px solid ${color}` : 'none', borderLeft: i % 2 === 0 ? `2px solid ${color}` : 'none', borderRight: i % 2 === 1 ? `2px solid ${color}` : 'none' }} />
          ))}
          <div style={{ width: 16, height: 16, borderRadius: 2, border: `1px solid ${color}60`, opacity: 0.6 }} />
        </div>
      </div>
    </div>
  )
}

function BeaconVisual({ color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, width: '100%' }}>
      {/* Beacon cihazı */}
      <div style={{ position: 'relative', width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {[60, 44, 28].map((size, i) => (
          <div key={i} style={{ position: 'absolute', width: size, height: size, borderRadius: '50%', border: `1.5px solid ${color}`, opacity: 0.15 + i * 0.2 }} />
        ))}
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 0 4px ${color}20, 0 4px 12px ${color}40`, zIndex: 1 }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2a7 7 0 0 1 7 7c0 4-7 13-7 13S5 13 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2.5" fill="white" stroke="none"/></svg>
        </div>
      </div>
      {/* Sinyal dalgaları */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {[0.25, 0.5, 0.75, 1].map((op, i) => (
          <div key={i} style={{ width: 2.5, height: 16 + i * 8, borderRadius: 2, background: color, opacity: op }} />
        ))}
      </div>
      {/* Telefon */}
      <div style={{ width: 38, height: 64, borderRadius: 10, background: '#fff', border: `2px solid ${color}`, boxShadow: `0 4px 20px ${color}30`, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ height: 8, background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 10, height: 3, borderRadius: 2, background: `${color}60` }} />
        </div>
        <div style={{ flex: 1, padding: '5px 4px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ width: '100%', height: 3, borderRadius: 2, background: `${color}30` }} />
          <div style={{ margin: '3px 0', width: '100%', height: 18, borderRadius: 4, background: `${color}12`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: color }} />
          </div>
          <div style={{ width: '70%', height: 3, borderRadius: 2, background: `${color}20` }} />
        </div>
      </div>
    </div>
  )
}

function MultiLangVisual({ color }) {
  const nodes = [
    { angle: -70, r: 80, size: 10, opacity: 1,   ring: true  },
    { angle: -30, r: 90, size: 8,  opacity: 0.85, ring: false },
    { angle:  10, r: 85, size: 10, opacity: 0.9,  ring: true  },
    { angle:  50, r: 88, size: 7,  opacity: 0.7,  ring: false },
    { angle:  85, r: 78, size: 9,  opacity: 0.8,  ring: true  },
  ]
  const cx = 110, cy = 90
  return (
    <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
      {/* Halkalar */}
      <circle cx={cx} cy={cy} r="38" stroke={color} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.2"/>
      <circle cx={cx} cy={cy} r="58" stroke={color} strokeWidth="0.5" strokeDasharray="2 5" opacity="0.12"/>

      {/* Bağlantı çizgileri */}
      {nodes.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180
        const nx = cx + n.r * Math.cos(rad)
        const ny = cy + n.r * Math.sin(rad)
        const ex = cx + 30 * Math.cos(rad)
        const ey = cy + 30 * Math.sin(rad)
        return (
          <line key={i} x1={ex} y1={ey} x2={nx} y2={ny}
            stroke={color} strokeWidth="1" opacity={n.opacity * 0.35}
            strokeDasharray="3 3"
          />
        )
      })}

      {/* Node'lar */}
      {nodes.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180
        const nx = cx + n.r * Math.cos(rad)
        const ny = cy + n.r * Math.sin(rad)
        return (
          <g key={i} opacity={n.opacity}>
            {n.ring && <circle cx={nx} cy={ny} r={n.size + 5} stroke={color} strokeWidth="1" fill="none" opacity="0.25"/>}
            <circle cx={nx} cy={ny} r={n.size} fill={color} opacity="0.85"/>
            <circle cx={nx} cy={ny} r={n.size * 0.4} fill="#fff" opacity="0.7"/>
          </g>
        )
      })}

      {/* Merkez globe */}
      <circle cx={cx} cy={cy} r="30" fill={`${color}12`} stroke={color} strokeWidth="1.5" opacity="0.9"/>
      <ellipse cx={cx} cy={cy} rx="14" ry="30" stroke={color} strokeWidth="1" opacity="0.5"/>
      <line x1={cx - 30} y1={cy} x2={cx + 30} y2={cy} stroke={color} strokeWidth="1" opacity="0.5"/>
      <line x1={cx} y1={cy - 30} x2={cx} y2={cy + 30} stroke={color} strokeWidth="1" opacity="0.3"/>
      <circle cx={cx} cy={cy} r="4" fill={color}/>
    </svg>
  )
}

function AiVisual({ color }) {
  const metrics = [
    { value: 87, alert: true },
    { value: 62, alert: false },
    { value: 91, alert: false },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 260, margin: '0 auto' }}>
      {metrics.map((m, i) => (
        <div key={i} style={{ background: '#fff', border: `1px solid ${color}20`, borderRadius: 10, padding: '8px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 4, marginBottom: 5 }}>
            {m.alert && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b' }} />}
            <span style={{ fontSize: 11, fontWeight: 700, color: m.alert ? '#f59e0b' : color }}>{m.value}%</span>
          </div>
          <div style={{ height: 4, borderRadius: 4, background: `${color}12`, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${m.value}%`, borderRadius: 4, background: m.alert ? '#f59e0b' : color }} />
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '6px 12px', borderRadius: 10, background: `${color}08`, border: `1px solid ${color}20` }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        </svg>
      </div>
    </div>
  )
}

export default function Hero() {
  const locale = useLocale()
  const t = useTranslations()
  const [activeScreen, setActiveScreen] = useState(1)
  const [selectedEntryMethod, setSelectedEntryMethod] = useState(null)

  const entryMethods = [
    {
      key: 'ai',
      label: t('hero.entryAi'),
      description: t('hero.entryAiInfo'),
      color: '#a855f7',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
        </svg>
      ),
    },
    {
      key: 'wifi-beacon',
      label: `${t('hero.entryWifi')} & ${t('hero.entryBeacon')}`,
      description: t('hero.entryWifiBeaconInfo'),
      color: '#0ea5e9',
      items: [
        {
          label: t('hero.entryWifi'),
          color: '#0ea5e9',
          icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>,
        },
        {
          label: t('hero.entryBeacon'),
          color: '#f59e0b',
          icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 4-7 13-7 13S5 13 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2.5" fill="currentColor" stroke="none"/></svg>,
        },
      ],
    },
    {
      key: 'qr-nfc',
      label: `${t('hero.entryQr')} & ${t('hero.entryNfc')}`,
      description: t('hero.entryQrNfcInfo'),
      color: '#10b981',
      items: [
        {
          label: t('hero.entryQr'),
          color: '#10b981',
          icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="3" height="3" rx="0.5"/><rect x="18" y="14" width="3" height="3" rx="0.5"/><rect x="14" y="18" width="3" height="3" rx="0.5"/><rect x="18" y="18" width="3" height="3" rx="0.5"/></svg>,
        },
        {
          label: t('hero.entryNfc'),
          color: '#8b5cf6',
          icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 15a6 6 0 1 0 12 0 6 6 0 0 0-12 0"/><path d="M9.5 15a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/><path d="M3 15a9 9 0 0 1 9-9"/><path d="M21 15a9 9 0 0 0-9-9"/></svg>,
        },
      ],
    },
    {
      key: 'gps-remote',
      label: `${t('hero.entryGps')} & ${t('hero.entryRemote')}`,
      description: t('hero.entryGpsRemoteInfo'),
      color: '#003C75',
      items: [
        {
          label: t('hero.entryGps'),
          color: '#003C75',
          icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/></svg>,
        },
        {
          label: t('hero.entryRemote'),
          color: '#79ACDC',
          icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>,
        },
      ],
    },
    {
      key: 'multilang',
      label: t('hero.entryMultiLang'),
      description: t('hero.entryMultiLangInfo'),
      color: '#22c55e',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
    },
  ]

  useEffect(() => {
    if (!selectedEntryMethod) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedEntryMethod(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedEntryMethod])


  return (
    <>
      <section id="urun" style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f4f8fd 100%)',
        overflowX: 'clip',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '28px 40px 72px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }} className="hero-wrapper">

          {/* ── Başlık ── */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-title"
            style={{
              fontSize: locale === 'tr' ? 'clamp(22px, 2.8vw, 38px)' : 'clamp(28px, 3.6vw, 48px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: '#0f172a',
              textAlign: 'center',
              margin: '0 0 8px',
              whiteSpace: locale === 'tr' ? 'nowrap' : 'normal',
            }}
          >
            {t('hero.title')}{' '}
            <span style={{ color: '#003C75' }}>{t('hero.titleHighlight')}</span>
          </motion.h1>

          {/* ── Alt metin ── */}
          {/* ── Giriş Yöntemleri ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.22 }}
            className="hero-entry-methods"
            style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center', flexWrap: 'nowrap', marginBottom: 48 }}
          >
            {entryMethods.map((method) => (
              <button
                key={method.key}
                type="button"
                onClick={() => setSelectedEntryMethod(method)}
                className="hero-entry-btn"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  padding: '16px 20px',
                  background: '#fff',
                  border: `1.5px solid ${method.color}22`,
                  borderRadius: 16,
                  boxShadow: '0 2px 12px rgba(0,40,100,0.06)',
                  minWidth: 120,
                  minHeight: 108,
                  transition: 'box-shadow 0.18s, border-color 0.18s, transform 0.18s',
                  cursor: 'pointer',
                  appearance: 'none',
                  textAlign: 'center',
                  fontFamily: 'inherit',
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
                {method.items ? (
                  <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <span style={{
                      fontSize: 9.5, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase',
                      color: method.color, opacity: 0.85, marginBottom: 9, textAlign: 'left',
                    }}>
                      {method.label}
                    </span>
                    {method.items.map((item, idx) => (
                      <div key={idx}>
                        {idx > 0 && (
                          <div style={{ height: 1, background: `${method.color}18`, borderRadius: 1, margin: '7px 0' }} />
                        )}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                          <div style={{
                            width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                            background: `linear-gradient(135deg, ${item.color}18, ${item.color}0a)`,
                            color: item.color,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: `0 1px 4px ${item.color}22`,
                          }}>
                            {item.icon}
                          </div>
                          <span style={{ fontSize: 12, fontWeight: 700, color: '#1e293b', lineHeight: 1.25 }}>
                            {item.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div style={{
                      width: 44, height: 44, borderRadius: 13,
                      background: `linear-gradient(135deg, ${method.color}18, ${method.color}0a)`,
                      color: method.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: `0 2px 8px ${method.color}28`,
                    }}>
                      {method.icon}
                    </div>
                    <span style={{ fontSize: 12.5, fontWeight: 700, color: '#1e293b', textAlign: 'center', lineHeight: 1.3 }}>
                      {method.label}
                    </span>
                  </>
                )}
              </button>
            ))}
          </motion.div>

          {/* ── Dashboard + Phone Mockup ── */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.26 }}
            style={{
            margin: '-28px 0 40px',
            fontSize: 15,
            lineHeight: 1.4,
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#64748b',
            textAlign: 'center',
          }}>
            {locale === 'en' ? 'Our Check-In & Check-Out Methods' : 'Giriş Çıkış Yöntemlerimiz'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: '100%', position: 'relative', padding: '0 80px' }}
            className="hero-mockup-wrapper"
          >
            {/* ── Telefon Mockup 2 (sağ) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
                        {activeScreen === 0 && <PhoneCikisMenusuScreen locale={locale} />}
                        {activeScreen === 1 && <PhoneGirisMenusuScreen locale={locale} />}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div style={{ background: '#fff', borderTop: '1px solid #e8f0f9', display: 'flex', justifyContent: 'space-around', padding: '5px 0 7px', flexShrink: 0 }}>
                    {[
                      { label: locale === 'en' ? 'Home' : 'Anasayfa', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
                      { label: locale === 'en' ? 'Requests' : 'Talepler', active: true, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="9" x2="9" y2="21"/></svg> },
                      { label: locale === 'en' ? 'Inbox' : 'Gelen Kutusu', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                      { label: locale === 'en' ? 'Profile' : 'Profil', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
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

            {/* ── Telefon Mockup (sol) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
                        {activeScreen === 0 && <PhoneMolaScreen locale={locale} />}
                        {activeScreen === 1 && <PhoneHomeScreen locale={locale} />}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* bottom nav */}
                  <div style={{ background: '#fff', borderTop: '1px solid #e8f0f9', display: 'flex', justifyContent: 'space-around', padding: '5px 0 7px', flexShrink: 0 }}>
                    {[
                      { label: locale === 'en' ? 'Home' : 'Anasayfa', active: activeScreen === 0, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
                      { label: locale === 'en' ? 'Requests' : 'Talepler', active: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="9" x2="9" y2="21"/></svg> },
                      { label: locale === 'en' ? 'Inbox' : 'Gelen Kutusu', active: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                      { label: locale === 'en' ? 'Profile' : 'Profil', active: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
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

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              {[
                { index: 1, label: locale === 'en' ? 'Modules' : 'Modüller' },
                { index: 0, label: locale === 'en' ? 'Overview' : 'Genel Bakış' },
              ].map(({ index }) => (
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
                  {index === 0 ? (locale === 'en' ? 'Overview' : 'Genel Bakış') : (locale === 'en' ? 'Modules' : 'Modüller')}
                </button>
              ))}
            </div>

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
                  {(locale === 'en'
                    ? [
                        { label: 'Home', active: true, chevron: false },
                        { label: 'Definitions', active: false, chevron: true },
                        { label: 'Personnel', active: false, chevron: true },
                        { label: 'Modules', active: false, chevron: true },
                        { label: 'Reports', active: false, chevron: true },
                      ]
                    : [
                        { label: 'Anasayfa', active: true, chevron: false },
                        { label: 'Tanımlamalar', active: false, chevron: true },
                        { label: 'Personel', active: false, chevron: true },
                        { label: 'Modüller', active: false, chevron: true },
                        { label: 'Raporlar', active: false, chevron: true },
                      ]
                  ).map(item => (
                    <div key={item.label} style={{ padding: '6px 10px', borderRadius: 6, background: item.active ? 'rgba(0,60,117,0.07)' : 'transparent', display: 'flex', alignItems: 'center', gap: 3, whiteSpace: 'nowrap' }}>
                      <span style={{ fontSize: 12, fontWeight: item.active ? 700 : 500, color: item.active ? '#003C75' : '#64748b' }}>{item.label}</span>
                      {item.chevron && (
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                  <span style={{ fontSize: 13 }}>{locale === 'en' ? '🇬🇧' : '🇹🇷'}</span>
                  <span style={{ fontSize: 11, color: '#64748b' }}>{locale === 'en' ? 'English' : 'Türkçe'}</span>
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
                    {activeScreen === 0 && <DashboardHome locale={locale} />}
                    {activeScreen === 1 && <DashboardModules locale={locale} />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedEntryMethod && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setSelectedEntryMethod(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: 'rgba(15,23,42,0.42)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              style={{
                width: 'min(100%, 700px)',
                background: '#fff',
                border: `1px solid ${selectedEntryMethod.color}33`,
                borderRadius: 24,
                boxShadow: '0 30px 80px rgba(15,23,42,0.22)',
                overflow: 'hidden',
              }}
            >
              <div style={{
                padding: '22px 24px 18px',
                background: `linear-gradient(180deg, ${selectedEntryMethod.color}12 0%, rgba(255,255,255,0) 100%)`,
                borderBottom: '1px solid rgba(148,163,184,0.16)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: 18,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 54,
                    height: 54,
                    borderRadius: 16,
                    background: `${selectedEntryMethod.color}14`,
                    color: selectedEntryMethod.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {selectedEntryMethod.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#94a3b8',
                      marginBottom: 6,
                    }}>
                      {t('hero.entryModalLabel')}
                    </div>
                    <div style={{
                      fontSize: 22,
                      fontWeight: 800,
                      lineHeight: 1.25,
                      color: '#0f172a',
                    }}>
                      {selectedEntryMethod.label}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedEntryMethod(null)}
                  aria-label={t('hero.entryModalClose')}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    border: '1px solid rgba(148,163,184,0.22)',
                    background: '#fff',
                    color: '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              <div style={{ padding: '22px 24px 0' }}>
                <p style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: '#475569',
                }}>
                  {selectedEntryMethod.description}
                </p>
              </div>

              {/* Giriş yöntemi görseli */}
              <div style={{
                margin: '20px 24px 24px',
                borderRadius: 16,
                background: `${selectedEntryMethod.color}08`,
                border: `1px solid ${selectedEntryMethod.color}20`,
                padding: '28px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 160,
                overflow: 'hidden',
                position: 'relative',
              }}>
                {selectedEntryMethod.key === 'wifi-beacon' && <WifiVisual color={selectedEntryMethod.color} />}
                {selectedEntryMethod.key === 'qr-nfc' && <QrVisual color={selectedEntryMethod.color} />}
                {selectedEntryMethod.key === 'gps-remote' && <RemoteVisual color={selectedEntryMethod.color} />}
                {selectedEntryMethod.key === 'multilang' && <MultiLangVisual color={selectedEntryMethod.color} />}
                {selectedEntryMethod.key === 'ai' && <AiVisual color={selectedEntryMethod.color} />}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hero-wrapper { padding: 40px 20px 56px !important; }
          .hero-dashboard-stats { grid-template-columns: repeat(3, 1fr) !important; }
          .hero-dashboard-tables { grid-template-columns: 1fr 1fr !important; }
          .hero-phone-mockup { display: none !important; }
          .hero-phone-mockup-left { display: none !important; }
          .hero-modules-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .hero-mockup-wrapper { padding: 0 !important; }
          .hero-entry-btn { min-width: 100px !important; padding: 14px 16px !important; }
        }
        @media (max-width: 600px) {
          .hero-entry-methods { flex-direction: row !important; flex-wrap: wrap !important; justify-content: center !important; }
          .hero-entry-row { flex-wrap: wrap !important; justify-content: center !important; }
          .hero-entry-btn { min-width: calc(50% - 5px) !important; flex: 1 1 calc(50% - 5px) !important; max-width: calc(50% - 5px) !important; padding: 14px 12px !important; min-height: 96px !important; }
        }
        @media (max-width: 480px) {
          .hero-wrapper { padding: 32px 16px 40px !important; }
          .hero-dashboard-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-modules-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .hero-entry-btn { min-width: calc(50% - 5px) !important; flex: 1 1 calc(50% - 5px) !important; max-width: calc(50% - 5px) !important; }
        }
      `}</style>
    </>
  )
}
