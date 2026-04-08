'use client'
import SEO from '../components/SEO'
import { Link } from '../i18n/navigation'


const SECTIONS = [
  {
    title: '1. Genel Hükümler',
    content: (
      <p>
        HC Dijital'in resmi web sitesi olan hcdijital.com.tr, kullanıcılarına bilgi sunmak ve hizmetlerini
        tanıtmak amacıyla faaliyet göstermektedir. Siteyi kullanan herkes bu koşulları ve ilgili tüm yasal
        düzenlemeleri kabul etmiş sayılır.
      </p>
    ),
  },
  {
    title: '2. İçerik Kullanımı',
    content: (
      <>
        <p>
          Web sitemizde yer alan tüm yazılı, görsel ve dijital içerikler HC Dijital'e aittir veya yasal
          kullanım hakları alınmıştır.
        </p>
        <ul>
          <li>İçerikler izinsiz olarak kopyalanamaz, çoğaltılamaz veya ticari amaçlarla kullanılamaz.</li>
          <li>Alıntı yapılması durumunda kaynak gösterilmesi zorunludur.</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Kullanıcı Yükümlülükleri',
    content: (
      <>
        <p>
          Kullanıcı, siteyi yalnızca yasal amaçlarla kullanacağını ve herhangi bir şekilde sistemin
          çalışmasını engelleyecek veya bozacak girişimlerde bulunmayacağını taahhüt eder.
        </p>
        <ul>
          <li>Sitemiz aracılığıyla paylaşılan kişisel bilgiler doğru ve güncel olmalıdır.</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Veri Güvenliği ve Gizlilik',
    content: (
      <p>
        Sitemizi kullanarak{' '}
        <Link href="/gizlilik" style={{ color: '#003C75' }}>Gizlilik Bildirimi</Link>,{' '}
        <Link href="/kvkk" style={{ color: '#003C75' }}>KVKK Politikası</Link> hükümlerini kabul etmiş
        sayılırsınız. Kullanıcıların paylaştığı bilgiler, yalnızca belirtilen amaçlar doğrultusunda
        saklanır ve korunur.
      </p>
    ),
  },
  {
    title: '5. Bağlantılar ve Üçüncü Taraf Siteler',
    content: (
      <p>
        Web sitemiz üzerinden üçüncü taraf sitelere yönlendiren bağlantılar bulunabilir. Bu sitelerin
        içeriklerinden HC Dijital sorumlu değildir. Bu tür bağlantılar kullanıcıya kolaylık sağlamak
        amacıyla sunulmaktadır.
      </p>
    ),
  },
  {
    title: '6. Sorumluluğun Sınırlandırılması',
    content: (
      <p>
        HC Dijital, sitenin kesintisiz veya hatasız çalışacağını garanti etmez. Sitede yer alan bilgi ve
        hizmetlerden yararlanma tamamen kullanıcı sorumluluğundadır.
      </p>
    ),
  },
  {
    title: '7. Değişiklik Hakkı',
    content: (
      <p>
        HC Dijital, bu kullanım koşullarını önceden bildirimde bulunmaksızın değiştirme hakkını saklı
        tutar. Güncellenmiş koşullar sitede yayınlandığı anda yürürlüğe girer.
      </p>
    ),
  },
  {
    title: '8. Uygulanacak Hukuk ve Yetki',
    content: (
      <p>
        Bu koşullar, Türkiye Cumhuriyeti kanunlarına tabidir. Taraflar, doğabilecek uyuşmazlıklarda
        İstanbul Mahkemeleri ve İcra Dairelerinin yetkili olduğunu kabul eder.
      </p>
    ),
  },
]

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Kullanım Koşulları | AiRX"
        description="AiRX web sitesinin kullanım koşulları. HC Dijital tarafından sunulan hizmetlerin yasal çerçevesini öğrenin."
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Yasal
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, margin: '0 0 16px' }}>
            Kullanım Koşulları
          </h1>
          <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, margin: 0 }}>
            Bu sayfayı ve hizmetlerimizi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.
            Lütfen dikkatlice okuyunuz.
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
