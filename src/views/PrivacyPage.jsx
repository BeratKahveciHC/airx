'use client'
import SEO from '../components/SEO'
import { Link } from '../i18n/navigation'


const SECTIONS = [
  {
    title: '1. Giriş',
    content: (
      <p>
        HC Dijital olarak, kullanıcılarımızın gizliliğini ciddiye alıyoruz. Bu Gizlilik Politikası,
        AiRX platformu ve hcdijital.com.tr web sitesi aracılığıyla toplanan kişisel verilerinizin
        nasıl işlendiğini, saklandığını ve korunduğunu açıklamaktadır.
      </p>
    ),
  },
  {
    title: '2. Toplanan Bilgiler',
    content: (
      <>
        <p>Aşağıdaki bilgiler çeşitli kanallar aracılığıyla toplanabilmektedir:</p>
        <ul>
          <li><strong>Kimlik bilgileri:</strong> Ad, soyad</li>
          <li><strong>İletişim bilgileri:</strong> E-posta adresi, telefon numarası</li>
          <li><strong>Teknik veriler:</strong> IP adresi, tarayıcı türü, işletim sistemi, ziyaret süreleri</li>
          <li><strong>Form verileri:</strong> İletişim ve demo talep formlarında girilen bilgiler</li>
          <li><strong>Çerez verileri:</strong> Oturum çerezleri ve tercih çerezleri</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Bilgilerin Kullanım Amacı',
    content: (
      <>
        <p>Toplanan veriler yalnızca aşağıdaki amaçlarla kullanılmaktadır:</p>
        <ul>
          <li>Demo talepleri ve iletişim formlarını yanıtlamak</li>
          <li>Hizmetlerimizi geliştirmek ve kişiselleştirmek</li>
          <li>Yasal yükümlülükleri yerine getirmek</li>
          <li>Güvenlik tehditlerini önlemek</li>
          <li>Site performansını ve kullanıcı deneyimini analiz etmek</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Çerezler (Cookies)',
    content: (
      <>
        <p>
          Web sitemiz, deneyiminizi geliştirmek amacıyla çerezler kullanmaktadır. Kullandığımız çerez türleri:
        </p>
        <ul>
          <li><strong>Zorunlu çerezler:</strong> Sitenin temel işlevselliği için gereklidir</li>
          <li><strong>Analitik çerezler:</strong> Anonim ziyaret istatistikleri toplar</li>
          <li><strong>Tercih çerezleri:</strong> Dil tercihi gibi ayarlarınızı hatırlar</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz; ancak bu durumda
          sitenin bazı özellikleri düzgün çalışmayabilir.
        </p>
      </>
    ),
  },
  {
    title: '5. Verilerin Paylaşımı',
    content: (
      <>
        <p>Kişisel verileriniz hiçbir koşulda satılmaz veya ticari amaçla üçüncü taraflarla paylaşılmaz. Verileriniz yalnızca şu durumlarda paylaşılabilir:</p>
        <ul>
          <li>Yasal zorunluluk (mahkeme kararı, kamu otoritesi talebi)</li>
          <li>Hizmetin sunulması için gerekli teknik altyapı sağlayıcıları</li>
          <li>Açık rızanızın bulunması</li>
        </ul>
      </>
    ),
  },
  {
    title: '6. Veri Güvenliği',
    content: (
      <p>
        Kişisel verileriniz, yetkisiz erişim, değiştirme, ifşa etme veya imhaya karşı korumak amacıyla
        endüstri standardı teknik ve idari güvenlik önlemleriyle korunmaktadır. Bu önlemler; SSL şifrelemesi,
        erişim kontrolü ve düzenli güvenlik denetimleri içermektedir.
      </p>
    ),
  },
  {
    title: '7. Üçüncü Taraf Bağlantılar',
    content: (
      <p>
        Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik
        uygulamalarından HC Dijital sorumlu değildir. Söz konusu siteleri ziyaret etmeden önce
        kendi gizlilik politikalarını incelemenizi öneririz.
      </p>
    ),
  },
  {
    title: '8. Haklarınız',
    content: (
      <>
        <p>Kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:</p>
        <ul>
          <li>Verilerinize erişim talep etme</li>
          <li>Yanlış verilerin düzeltilmesini isteme</li>
          <li>Verilerinizin silinmesini talep etme</li>
          <li>Veri işlemeye itiraz etme</li>
          <li>Veri taşınabilirliği talep etme</li>
        </ul>
        <p style={{ marginTop: 16 }}>
          Bu haklarınızı kullanmak için{' '}
          <a href="mailto:info@hcdijital.com.tr" style={{ color: '#003C75' }}>info@hcdijital.com.tr</a>
          {' '}adresine başvurabilirsiniz. Ayrıca KVKK kapsamındaki haklarınız için{' '}
          <Link href="/kvkk" style={{ color: '#003C75' }}>KVKK Aydınlatma Metni</Link>'ni inceleyebilirsiniz.
        </p>
      </>
    ),
  },
  {
    title: '9. Politika Güncellemeleri',
    content: (
      <p>
        Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler e-posta yoluyla
        bildirilecek veya sitede duyurulacaktır. Politikanın güncel halini düzenli olarak
        kontrol etmenizi öneririz.
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Gizlilik Politikası | AiRX"
        description="AiRX ve HC Dijital'in gizlilik politikası. Kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu öğrenin."
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
              <rect x="3" y="11" width="18" height="11" rx="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            Gizlilik
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, margin: '0 0 16px' }}>
            Gizlilik Politikası
          </h1>
          <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, margin: 0 }}>
            Verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu öğrenin.
            Gizliliğiniz bizim için en öncelikli konudur.
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
