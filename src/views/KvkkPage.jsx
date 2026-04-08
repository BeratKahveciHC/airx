'use client'
import SEO from '../components/SEO'


const SECTIONS = [
  {
    title: '1. Veri Sorumlusu',
    content: (
      <p>
        KVKK uyarınca, kişisel verileriniz aşağıda belirtilen veri sorumlusu tarafından işlenmektedir:
        <br /><br />
        <strong>Veri Sorumlusu:</strong> HC Dijital<br />
        <strong>İletişim:</strong>{' '}
        <a href="mailto:info@hcdijital.com.tr" style={{ color: '#003C75' }}>info@hcdijital.com.tr</a>
      </p>
    ),
  },
  {
    title: '2. Toplanan Kişisel Veriler',
    content: (
      <>
        <p>Aşağıdaki kişisel veriler, web sitemiz üzerinden çeşitli kanallarla toplanabilmektedir:</p>
        <ul>
          <li>Ad, soyad</li>
          <li>E-posta adresi</li>
          <li>Telefon numarası</li>
          <li>IP adresi ve trafik verileri</li>
          <li>Konum verisi (mobil kullanımda)</li>
          <li>Geri bildirim ve destek talepleri</li>
          <li>Form doldurma içerikleri</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Kişisel Verilerin İşlenme Amaçları',
    content: (
      <>
        <p>Toplanan veriler aşağıdaki amaçlarla işlenmektedir:</p>
        <ul>
          <li>Hizmetlerimiz hakkında bilgilendirme</li>
          <li>İletişim taleplerinin karşılanması</li>
          <li>Kullanıcı deneyimini iyileştirme</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          <li>Güvenlik süreçlerinin sağlanması</li>
          <li>İstatistiksel analiz ve raporlama</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Verilerin Saklanma Süresi',
    content: (
      <p>
        Kişisel veriler, işleme amacının gerektirdiği süre boyunca saklanır. Süre bitiminde,
        veriler güvenli yöntemlerle silinir, yok edilir veya anonim hale getirilir.
      </p>
    ),
  },
  {
    title: '5. Verilerin Aktarımı',
    content: (
      <>
        <p>
          Kişisel veriler, yasal zorunluluklar veya hizmetin gereklilikleri doğrultusunda
          aşağıdakilerle sınırlı olarak ve KVKK'ya uygun şekilde paylaşılabilir:
        </p>
        <ul>
          <li>Yetkili kamu kurumları</li>
          <li>Sunucu ve altyapı sağlayıcıları</li>
          <li>İş ortakları ve çözüm sağlayıcılar</li>
        </ul>
      </>
    ),
  },
  {
    title: '6. İlgili Kişinin Hakları (KVKK Madde 11)',
    content: (
      <>
        <p>Veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
        <ul>
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme</li>
          <li>İşlenme amacını ve uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içi veya yurt dışı üçüncü kişilere aktarılmışsa bunu öğrenme</li>
          <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
          <li>Kanuni şartlar dâhilinde verilerin silinmesini veya yok edilmesini isteme</li>
          <li>Otomatik sistemlerle analiz sonucu aleyhinize bir sonucun çıkmasına itiraz etme</li>
          <li>Maddi/manevi zarar halinde tazminat talep etme</li>
        </ul>
        <p style={{ marginTop: 16 }}>
          Haklarınızı kullanmak için{' '}
          <a href="mailto:info@hcdijital.com.tr" style={{ color: '#003C75' }}>info@hcdijital.com.tr</a>
          {' '}adresine yazabilirsiniz.
        </p>
      </>
    ),
  },
]

export default function KvkkPage() {
  return (
    <>
      <SEO
        title="KVKK Aydınlatma Metni | AiRX"
        description="HC Dijital olarak 6698 sayılı KVKK kapsamında kişisel verilerinizin nasıl işlendiğine dair aydınlatma metni."
      />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, #f4f8fd 0%, #ffffff 100%)', padding: '72px 24px 56px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#e8f2fc', borderRadius: 20, padding: '6px 14px',
            fontSize: 13, fontWeight: 600, color: '#003C75', marginBottom: 20,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            KVKK
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, margin: '0 0 16px' }}>
            Kişisel Verilerin Korunması Kanunu<br />Hakkında Aydınlatma Metni
          </h1>
          <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, margin: 0 }}>
            HC Dijital olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında,
            kullanıcılarımızın kişisel verilerinin gizliliğini ve güvenliğini en üst düzeyde korumayı taahhüt ederiz.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '56px 24px 96px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {SECTIONS.map((section) => (
            <div
              key={section.title}
              style={{
                marginBottom: 40,
                paddingBottom: 40,
                borderBottom: '1px solid #f1f5f9',
              }}
            >
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', marginBottom: 16 }}>
                {section.title}
              </h2>
              <div style={{ fontSize: 15, color: '#475569', lineHeight: 1.8 }}>
                {section.content}
              </div>
            </div>
          ))}

          <p style={{ fontSize: 13, color: '#94a3b8', marginTop: 8 }}>
            Son güncelleme: Nisan 2026
          </p>
        </div>
      </section>

      <style>{`
        ul { padding-left: 20px; margin: 12px 0 0; }
        ul li { margin-bottom: 8px; }
      `}</style>
    </>
  )
}
