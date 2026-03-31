export const MODULE_OVERRIDES = {
  'erisim-kontrolu': {
    name: 'Erişim Kontrolü',
    tagline: 'Yetkili Giriş Kontrolü',
    description:
      'Sadece yetkili kişilerin giriş yapabilecekleri mekanlar ya da turnikeler kontrol altında tutulur. QR cihazımız sayesinde mobil uygulama üzerinden 30 saniyede bir güncellenen QR kodları ile giriş-çıkış yetkilendirmesi yapabilir, bu kayıtları raporlayabilirsiniz.',
    hero_stats: [
      { value: 'QR', label: 'Cihaz Desteği' },
      { value: '30 sn', label: 'Kod Güncelleme' },
      { value: 'Anlık', label: 'Raporlama' },
    ],
    features: [{
        title: 'Yetkili Kişi Girişi',
        desc: 'Sadece yetkili kişilerin giriş yapabilecekleri mekanları ve turnikeleri kontrol altında tutabilirsiniz. Böylece erişim alanları net ve güvenli şekilde yönetilir.',
        icon: 'zone',
      },{
        title: 'QR Cihazı ile Yetkilendirme',
        desc: 'QR cihazımız sayesinde mobil uygulama üzerinden giriş-çıkış yetkilendirmesi yapabilirsiniz. Süreç hem hızlı hem de merkezi olarak yönetilebilir.',
        icon: 'mobile',
      },{
        title: '30 Saniyede Bir Güncellenen QR Kod',
        desc: 'Mobil uygulamadaki QR kodlar 30 saniyede bir güncellenir. Bu yapı, erişim güvenliğini artırır ve yetkisiz kullanım riskini azaltır.',
        icon: 'time',
      },],
    how_it_works: [
      {
        step: '01',
        title: 'Alanları Tanımlayın',
        desc: 'Kontrol etmek istediğiniz mekanları, kapıları ve turnikeleri sisteme tanımlayın.',
      },
      {
        step: '02',
        title: 'Yetkilendirmeyi Kurun',
        desc: 'Kimin hangi alana erişebileceğini belirleyin ve QR cihazı ile mobil doğrulama akışını devreye alın.',
      },
      {
        step: '03',
        title: 'Takip ve Raporlayın',
        desc: 'Geçiş kayıtlarını anlık izleyin, giriş-çıkış hareketlerini raporlayın ve geçmiş kayıtları inceleyin.',
      },
    ],
    benefits: [
      'Sadece yetkili kişilerin giriş yapmasını sağlayın',
      '30 saniyede güncellenen QR kodlarla güvenliği artırın',
      'Turnike ve alan geçişlerini merkezi olarak yönetin',
      'Tüm hareketleri raporlayarak denetimi kolaylaştırın',
    ],
  },
  'sureli-evraklar': {
    name: 'Süreli Evraklar',
    tagline: 'Son Geçerlilik Tarihi Takibi',
    description:
      'Son geçerlilik tarihi olan evrakları kontrol altında tutun. Sağlık kontrol belgeleri, yetki belgeleri gibi personelinize ait süreli evrakları yükleyerek süresi dolmak üzere olanlardan haberdar olabilirsiniz.',
    hero_stats: [
      { value: 'Anlık', label: 'Evrak Takibi' },
      { value: 'Önceden', label: 'Süre Uyarısı' },
      { value: 'Kolay', label: 'Belge Yükleme' },
    ],
    features: [{
        title: 'Son Geçerlilik Tarihi Takibi',
        desc: 'Geçerlilik süresi olan tüm evrakları sistem üzerinde takip edebilir, kritik belgelerin son tarihlerini kontrol altında tutabilirsiniz.',
        icon: 'deadline',
      },{
        title: 'Sağlık Kontrol Belgeleri',
        desc: 'Personelinize ait sağlık kontrol belgelerini sisteme yükleyebilir, süresi yaklaşan belgeler için önceden bilgi sahibi olabilirsiniz.',
        icon: 'archive',
      },{
        title: 'Yetki Belgeleri',
        desc: 'Görev ve sorumluluklara bağlı yetki belgelerini düzenli biçimde arşivleyebilir, süresi dolmak üzere olan belgeleri anlık takip edebilirsiniz.',
        icon: 'types',
      },],
    how_it_works: [
      {
        step: '01',
        title: 'Belgeleri Yükleyin',
        desc: 'Sağlık kontrol belgeleri, yetki belgeleri ve diğer süreli evrakları ilgili personel bazında sisteme yükleyin.',
      },
      {
        step: '02',
        title: 'Geçerlilik Tarihlerini Tanımlayın',
        desc: 'Her evrak için son geçerlilik tarihini sisteme ekleyin ve takip akışını başlatın.',
      },
      {
        step: '03',
        title: 'Süreleri Takip Edin',
        desc: 'Süresi dolmak üzere olan belgeleri görün, yenileme aksiyonlarını zamanında planlayın.',
      },
    ],
    benefits: [
      'Son geçerlilik tarihi olan evrakları tek yerden yönetin',
      'Sağlık kontrol ve yetki belgelerini düzenli takip edin',
      'Süresi dolmak üzere olan belgelerden önceden haberdar olun',
      'Belge yenileme süreçlerini daha kontrollü yönetin',
    ],
  },
  'periyodik-gorev': {
    name: 'Periyodik Görev',
    tagline: 'Lokasyon Doğrulamalı Görev Takibi',
    description:
      'Periyodik ya da tekil görevler oluşturarak bu görevlerin yapılması gereken lokasyon doğruluğunu takip edebilirsiniz. Görevlerin yapıldığını, yapılması gereken yerde yapıldığını ve kontrol listelerinin tamamlandığını uygulama üzerinden doğrulayabilirsiniz.',
    hero_stats: [
      { value: 'Periyodik', label: 'Görev Planı' },
      { value: 'Tekil', label: 'Görev Atama' },
      { value: 'Konum', label: 'Doğrulama' },
    ],
    features: [{
        title: 'Periyodik ve Tek Seferlik Görevler',
        desc: 'Periyodik ya da tek seferlik görevler oluşturabilir, bu görevleri ilgili kişilere atayabilirsiniz. Böylece tüm görev süreçleri tek panelden yönetilir.',
        icon: 'auto',
      },{
        title: 'Kişi Bazlı Atama',
        desc: 'Görevleri belirli kişilere atayabilir, hangi görevin kim tarafından ne zaman yapılacağını net biçimde planlayabilirsiniz.',
        icon: 'assign',
      },{
        title: 'Lokasyon Doğrulaması',
        desc: 'Bir görevin “yapıldı” olarak işaretlenebilmesi için görevlinin ilgili konumda olması sağlanabilir. Böylece görevlerin doğru yerde yapıldığı doğrulanır.',
        icon: 'status',
      },],
    how_it_works: [
      {
        step: '01',
        title: 'Görevi Tanımlayın',
        desc: 'Periyodik veya tek seferlik görev oluşturun; görev içeriğini, sıklığını ve gerekiyorsa kontrol listesini belirleyin.',
      },
      {
        step: '02',
        title: 'Kişi ve Konumu Atayın',
        desc: 'Görevi ilgili personele atayın ve görevin yapılması gereken lokasyonu tanımlayın.',
      },
      {
        step: '03',
        title: 'Doğrulayın ve Takip Edin',
        desc: 'Görevin doğru yerde yapıldığını, tamamlandığını ve kontrol listelerinin işaretlendiğini sistem üzerinden doğrulayın.',
      },
    ],
    benefits: [
      'Periyodik ve tekil görevleri tek sistemden yönetin',
      'Görevlerin doğru lokasyonda yapıldığını doğrulayın',
      'Kontrol listeleriyle süreç tamamlama kalitesini artırın',
      'Saha operasyonlarını uygulama üzerinden merkezi yönetin',
    ],
  },
  'ozluk-dosyasi': {
    name: 'Özlük Dosyası',
    tagline: 'Dijital Özlük Dosyası Modülü',
    description:
      'AirX ile özlük dosyalarını dijital ortamda güncel ve eksiksiz olarak güvenle saklayın. İş sözleşmesi, işe alım ve izin evrakları, finansal belgeler, çalışma süresince alınan evraklar, görevlendirme ve mesai formları gibi tüm resmi belge ve kayıtları online sistemde saklayabilirsiniz.',
    hero_stats: [
      { value: 'Dijital', label: 'Özlük Dosyası' },
      { value: 'KVKK', label: 'Uyumlu Saklama' },
      { value: 'Mobil + Web', label: 'Erişim' },
    ],
    features: [{
        title: 'Güncel ve Eksiksiz Özlük Dosyası',
        desc: 'İşe girişten çalışma sürecinin tamamına kadar tüm özlük belgelerini güncel ve eksiksiz şekilde dijital ortamda tutabilirsiniz.',
        icon: 'card',
      },{
        title: 'Resmi Belgelerin Tek Yerde Saklanması',
        desc: 'İş sözleşmesi, işe alım ve izin evrakları, finansal belgeler, görevlendirme ve mesai formları gibi tüm resmi belge ve kayıtları tek sistemde saklayabilirsiniz.',
        icon: 'upload',
      },{
        title: 'Biyometrik İmza ile Doğrulama',
        desc: 'Çalışana ait belgeler online sistemde biyometrik imza ile doğrulanmış olarak saklanabilir ve güvenilir kayıt altyapısı oluşturulur.',
        icon: 'lock',
      },],
    how_it_works: [
      {
        step: '01',
        title: 'Özlük Dosyasını Oluşturun',
        desc: 'Çalışan için işe girişte dijital özlük dosyasını oluşturun ve temel belgeleri sisteme ekleyin.',
      },
      {
        step: '02',
        title: 'Belgeleri Güncel Tutun',
        desc: 'Çalışma sürecinde oluşan izin, finans, görevlendirme ve diğer resmi belgeleri dosyaya düzenli olarak ekleyin.',
      },
      {
        step: '03',
        title: 'Her Yerden Erişin',
        desc: 'Mobil veya web üzerinden internet olan her yerden belgelere ulaşın, kayıtları güvenli şekilde yönetin.',
      },
    ],
    benefits: [
      'Özlük dosyalarını dijital ortamda güncel ve eksiksiz tutun',
      'KVKK uyumlu saklama ile kişisel bilgileri güvence altına alın',
      'Aranan belgelere hızlı erişim sağlayın',
      'İK ekipleri için zaman ve maliyet tasarrufu oluşturun',
    ],
  },
  'ziyaretci-yonetimi': {
    name: 'Ziyaretçi Yönetimi',
    tagline: 'QR ile Yetkili Ziyaretçi Geçişi',
    description:
      'Ziyaretçilerinizden kimlik alıp kart verme devrine son. Ziyaretçilerinizden sadece telefon numarası isteyerek SMS ile iletilen QR sayesinde yetkilendirildiği kapı ya da turnikeden geçiş izni verebilirsiniz.',
    hero_stats: [
      { value: 'SMS', label: 'QR Gönderimi' },
      { value: 'Telefon No', label: 'Kolay Kayıt' },
      { value: 'Kapı + Turnike', label: 'Geçiş Yetkisi' },
    ],
    features: [{
        title: 'Kimlik ve Kart Sürecine Son',
        desc: 'Ziyaretçi girişlerinde kimlik alma ve fiziksel kart verme süreçlerini ortadan kaldırarak daha hızlı ve modern bir deneyim sunabilirsiniz.',
        icon: 'register',
      },{
        title: 'Telefon Numarası ile Kayıt',
        desc: 'Ziyaretçinizden yalnızca telefon numarası alarak kayıt sürecini başlatabilirsiniz. Böylece giriş akışı çok daha pratik hale gelir.',
        icon: 'notify',
      },{
        title: 'SMS ile QR Gönderimi',
        desc: 'Ziyaretçiye SMS ile iletilen QR kod sayesinde yetkilendirilen alanlar için güvenli geçiş izni tanımlanabilir.',
        icon: 'badge',
      },],
    how_it_works: [
      {
        step: '01',
        title: 'Ziyaretçiyi Kaydedin',
        desc: 'Ziyaretçinin telefon numarasını alarak sistemde kayıt oluşturun.',
      },
      {
        step: '02',
        title: 'QR ve Yetki Tanımlayın',
        desc: 'SMS ile QR kod gönderin ve hangi kapı ya da turnikeler için geçiş izni verileceğini belirleyin.',
      },
      {
        step: '03',
        title: 'Geçişi Yönetin',
        desc: 'Ziyaretçi, yetkilendirilen alanlardan QR ile giriş yapabilir; siz de tüm geçiş akışını dijital olarak yönetirsiniz.',
      },
    ],
    benefits: [
      'Kimlik alıp kart verme sürecini ortadan kaldırın',
      'Ziyaretçi girişini sadece telefon numarası ile başlatın',
      'QR ile kapı ve turnike yetkilendirmesi yapın',
      'Standart ofis kapılarında bile kontrollü ziyaretçi geçişi sağlayın',
    ],
  },
  'egitim-planlama': {
    name: 'Eğitim Planlama',
    tagline: 'Eğitimleri Planlayın ve Duyurun',
    description:
      'Eğitimleri planlayın ve personelinize duyurun. Eğitim planlaması yapabilir, ilgili personele iletebilir ve eğitim sonrası katılım durumunu teyit edebilirsiniz.',
    hero_stats: [
      { value: 'Planlama', label: 'Eğitim Akışı' },
      { value: 'Duyuru', label: 'Personel Bildirimi' },
      { value: 'Katılım', label: 'Teyit Takibi' },
    ],
    features: [{
        title: 'Eğitim Planlama',
        desc: 'Kurum içindeki eğitimleri planlayabilir, hangi eğitimin ne zaman yapılacağını sistem üzerinden organize edebilirsiniz.',
        icon: 'calendar',
      },{
        title: 'İlgili Personele Duyuru',
        desc: 'Planlanan eğitimleri ilgili personele iletebilir, katılması gereken kişileri net biçimde belirleyebilirsiniz.',
        icon: 'attendance',
      },{
        title: 'Katılım Takibi',
        desc: 'Eğitim sonrasında personelin katılım durumunu kayıt altına alabilir ve tamamlanan eğitimleri teyit edebilirsiniz.',
        icon: 'certificate',
      },],
    how_it_works: [
      {
        step: '01',
        title: 'Eğitimi Planlayın',
        desc: 'Eğitimin tarihini, kapsamını ve ilgili personel grubunu belirleyin.',
      },
      {
        step: '02',
        title: 'Personele İletin',
        desc: 'Planlanan eğitimi ilgili personele duyurun ve katılım sürecini başlatın.',
      },
      {
        step: '03',
        title: 'Katılımı Teyit Edin',
        desc: 'Eğitim sonrasında personelin katılım durumunu kaydedin ve süreci tamamlayın.',
      },
    ],
    benefits: [
      'Eğitim planlarını düzenli şekilde yönetin',
      'İlgili personellere eğitim duyurularını kolayca iletin',
      'Eğitim sonrası katılım durumunu kayıt altına alın',
      'Planlama ve takip sürecini tek panelden yönetin',
    ],
  },
  'is-zekasi': {
    name: 'İş Zekası',
    tagline: 'Verileri Görselleştiren Dashboardlar',
    description:
      'İş zekası araçlarımız ile tüm verilerinizi görselleştirin. Verilerinizi analiz edemediğinizde şirketinizin ve çalışanlarınızın durumunu tam olarak tespit edemezsiniz; analizin en kolay yolu ise görselleştirmedir.',
    hero_stats: [
      { value: 'Dashboard', label: 'Görselleştirme' },
      { value: 'Statik + Dinamik', label: 'Veri Kaynağı' },
      { value: 'İçgörü', label: 'Analiz Sonucu' },
    ],
    features: [{
        title: 'Tüm Verileri Görselleştirin',
        desc: 'Şirketinizdeki farklı veri kaynaklarını görselleştirerek çalışanların ve organizasyonun mevcut durumunu daha net değerlendirebilirsiniz.',
        icon: 'dashboard',
      },{
        title: 'Statik ve Dinamik Verileri Birleştirin',
        desc: 'Size sunduğumuz statik verilerin yanı sıra anketler, mola verileri, giriş-çıkış verileri gibi dinamik verileri birlikte kullanabilirsiniz.',
        icon: 'custom',
      },{
        title: 'İlişkisel Dashboardlar Oluşturun',
        desc: 'Birbirinden bağımsız görünen verileri ilişkilendirerek anlamlı içgörüler sunan dashboardlar oluşturabilirsiniz.',
        icon: 'compare',
      },],
    how_it_works: [
      {
        step: '01',
        title: 'Verileri Toplayın',
        desc: 'Statik ve dinamik veri kaynaklarını sistem üzerinde bir araya getirin.',
      },
      {
        step: '02',
        title: 'Dashboardları Oluşturun',
        desc: 'Anket, mola, giriş-çıkış ve diğer verileri ilişkilendirerek görsel paneller hazırlayın.',
      },
      {
        step: '03',
        title: 'İçgörüye Dönüştürün',
        desc: 'Görselleştirilmiş veriler üzerinden anlamlı analizler yapın ve karar süreçlerini destekleyin.',
      },
    ],
    benefits: [
      'Tüm verileri görsel olarak daha anlaşılır hale getirin',
      'Statik ve dinamik verileri birlikte analiz edin',
      'Anlamlı içgörüler üreten dashboardlar oluşturun',
      'Şirket ve çalışan durumunu daha net tespit edin',
    ],
  },
  'izin-yonetimi': {
    name: 'İzin Yönetimi',
    tagline: 'Onay Mekanizmalı İzin Takibi',
    description:
      'AirX ile personel izinlerini onay mekanizmaları ile yönetin. İzin talepleri ve planlaması sırasında kağıt formlardan kurtulun, izin çakışmalarını engelleyin ve onay mekanizmalarını çalıştırın.',
    hero_stats: [
      { value: 'Onay', label: 'Mekanizma' },
      { value: 'Alarm', label: 'Çakışma Takibi' },
      { value: 'Kademeli', label: 'Yetkilendirme' },
    ],
    features: [{
        title: 'İzin Talepleri ve Planlaması',
        desc: 'Kağıt formlardan kurtularak personel izin taleplerini ve izin planlamasını dijital olarak yönetebilirsiniz.',
        icon: 'approve',
      },{
        title: 'Farklı İzin Tipleri',
        desc: 'Kullanıcı ihtiyaçlarına göre tanımlanmış izin tipleri ile ücretli, ücretsiz ve onay gerektiren tüm izin seçeneklerini sisteme uyarlayabilirsiniz.',
        icon: 'types',
      },{
        title: 'Farklı Onay Mekanizmaları',
        desc: 'Her izin tipi için farklı onay mekanizmaları tanımlayabilir, çalışan izin takiplerini kurum yapınıza uygun hale getirebilirsiniz.',
        icon: 'balance',
      },],
    how_it_works: [
      {
        step: '01',
        title: 'İzin Türlerini Tanımlayın',
        desc: 'Ücretli, ücretsiz veya onay gerektiren izin türlerini detaylı özellikleriyle sisteme ekleyin.',
      },
      {
        step: '02',
        title: 'Onay Akışını Kurun',
        desc: 'Yetkilendirme ve kademeli onay süreçlerini yapılandırın; gerekiyorsa departman veya şirket geneli çakışma alarmlarını açın.',
      },
      {
        step: '03',
        title: 'Takip ve Bildirimleri Yönetin',
        desc: 'İzin taleplerini takip edin, çakışmaları görün ve izin bitişlerinde personele otomatik mesajlar gönderin.',
      },
    ],
    benefits: [
      'Kağıt formlardan kurtularak izin sürecini dijitalleştirin',
      'Farklı izin türleri için esnek onay mekanizmaları kurun',
      'İzin çakışmalarını alarm yapısıyla önceden görün',
      'Kademeli onay ve bildirim süreçleriyle kontrolü artırın',
    ],
  },
  'yemekhane': {
    name: 'Yemekhane',
    tagline: 'Personel Yemek Hakkı Kontrolü',
    description:
      'Personel yemek hakkı kontrolü sağlayabilirsiniz. Personelinize aylık bazda yemek hakkı tanımlayarak, yemekhane turnikelerinden geçerken bu hak doğrultusunda yemekhane girişlerini takip edebilirsiniz.',
    hero_stats: [
      { value: 'Aylık', label: 'Hak Tanımı' },
      { value: 'Turnike', label: 'Geçiş Takibi' },
      { value: 'Anlık', label: 'Yemekhane Kontrolü' },
    ],
    features: [{
        title: 'Aylık Yemek Hakkı Tanımı',
        desc: 'Personelinize aylık bazda yemek hakkı tanımlayabilir, kişi bazlı kullanım limitlerini sistem üzerinden yönetebilirsiniz.',
        icon: 'card',
      },{
        title: 'Yemekhane Turnike Takibi',
        desc: 'Personelin yemekhane turnikelerinden geçişlerini tanımlanan hak doğrultusunda takip edebilir, giriş hareketlerini kayıt altına alabilirsiniz.',
        icon: 'menu',
      },{
        title: 'Hak Doğrultusunda Geçiş Kontrolü',
        desc: 'Tanımlı yemek hakkı olmayan ya da hakkını doldurmuş personelin geçişlerini kontrol altında tutabilir, kullanım kurallarını dijital olarak yönetebilirsiniz.',
        icon: 'order',
      },],
    how_it_works: [
      {
        step: '01',
        title: 'Yemek Hakkını Tanımlayın',
        desc: 'Personellere aylık bazda yemek kullanım hakkı tanımlayın ve kuralları sisteme ekleyin.',
      },
      {
        step: '02',
        title: 'Turnike Akışını Kurun',
        desc: 'Yemekhane turnikelerinde geçiş kontrolünü etkinleştirin ve personel haklarını bu akışla ilişkilendirin.',
      },
      {
        step: '03',
        title: 'Girişleri Takip Edin',
        desc: 'Personelin yemekhane girişlerini hakları doğrultusunda anlık olarak izleyin ve kayıt altına alın.',
      },
    ],
    benefits: [
      'Personel yemek hakkını aylık bazda düzenli yönetin',
      'Yemekhane turnikelerinden geçişleri dijital olarak takip edin',
      'Hak kullanımını kişi bazlı görünür hale getirin',
      'Yemekhane operasyonunu daha kontrollü yönetin',
    ],
  },
  'hukuki-evraklar': {
    name: 'Hukuki Evraklar',
    tagline: 'İhtar ve Savunmaları Dijital Ortama Taşıyın',
    description:
      'İhtar ve savunmalar dijital ortamda yönetilir. Verilen ihtarları ve alınan savunmaları kaydederek analizlerde kullanabilirsiniz.',
    hero_stats: [
      { value: 'Dijital', label: 'Kayıt Süreci' },
      { value: 'İhtar', label: 'Takip' },
      { value: 'Analiz', label: 'Kullanım' },
    ],
    features: [{
        title: 'İhtar Kayıtları',
        desc: 'Verilen ihtarları sistem üzerinde düzenli şekilde kaydedebilir ve personel bazında geçmiş kayıtları takip edebilirsiniz.',
        icon: 'archive',
      },{
        title: 'Savunma Kayıtları',
        desc: 'Alınan savunmaları dijital ortamda saklayabilir, ilgili personel kayıtlarıyla birlikte yönetebilirsiniz.',
        icon: 'esign',
      },{
        title: 'Dijital Ortamda Güvenli Saklama',
        desc: 'İhtar ve savunma belgelerini fiziksel takibe ihtiyaç duymadan dijital ortamda düzenli biçimde saklayabilirsiniz.',
        icon: 'lock',
      },],
    how_it_works: [
      {
        step: '01',
        title: 'İhtar veya Savunmayı Kaydedin',
        desc: 'Verilen ihtarları ve alınan savunmaları ilgili personel kaydıyla birlikte sisteme ekleyin.',
      },
      {
        step: '02',
        title: 'Dijital Olarak Saklayın',
        desc: 'Belgeleri dijital ortamda güvenli şekilde arşivleyin ve geçmiş kayıtları erişilebilir hale getirin.',
      },
      {
        step: '03',
        title: 'Analizlerde Değerlendirin',
        desc: 'Toplanan kayıtları rapor ve analiz süreçlerinde kullanarak daha net görünürlük elde edin.',
      },
    ],
    benefits: [
      'İhtar ve savunmaları dijital ortamda düzenli saklayın',
      'Personel bazlı hukuki evrak takibini kolaylaştırın',
      'Geçmiş kayıtları analiz süreçlerinde kullanın',
      'Merkezi kayıt yapısıyla süreç görünürlüğünü artırın',
    ],
  },
  'puantaj': {
    name: 'Puantaj',
    tagline: 'Puantaj Takip Yazılımı PDKS',
    description:
      'AirX puantaj sistemiyle çalışanların giriş-çıkış kontrollerini yaparak geç kalma, mesai, erken çıkma gibi durumlarını raporlayabilirsiniz. İzin, mesai ve esnek vardiyalarını takip edebilir; mobil uygulama üzerinden minimum temasla veri toplayarak süreci büyük ölçüde otonom hale getirebilirsiniz.',
    hero_stats: [
      { value: 'PDKS', label: 'Puantaj Altyapısı' },
      { value: 'Vardiya', label: 'Esnek Takip' },
      { value: 'Mola', label: 'Kontrol Yönetimi' },
    ],
    features: [{
        title: 'Giriş-Çıkış ve Puantaj Takibi',
        desc: 'Çalışanların giriş-çıkış kontrollerini yaparak geç kalma, mesai ve erken çıkma gibi durumları puantaj sistemine yansıtabilirsiniz.',
        icon: 'auto',
      },{
        title: 'Mobil Uygulama ile Veri Toplama',
        desc: 'AirX, personelden en az temas ile ve yüksek teknoloji kullanarak mobil uygulama üzerinden veri alımı sağlar. Böylece puantaj süreci daha otonom ilerler.',
        icon: 'overtime',
      },{
        title: 'Dijital Vardiya Yönetimi',
        desc: 'Standart mesai saatleri dışında her personel için esnek çalışma saatleri tanımlayabilir, sabit ve değişken vardiyalarda sorunsuz puantaj takibi yapabilirsiniz.',
        icon: 'integration',
      },],
    how_it_works: [
      {
        step: '01',
        title: 'PDKS ve Vardiya Yapısını Kurun',
        desc: 'Giriş-çıkış, vardiya, mola ve mesai kurallarını sisteme tanımlayın.',
      },
      {
        step: '02',
        title: 'Verileri Mobil Uygulama ile Toplayın',
        desc: 'Personel hareketleri mobil uygulama üzerinden sisteme aktarılsın; giriş-çıkış ve mola kayıtları otomatik izlenmeye başlasın.',
      },
      {
        step: '03',
        title: 'Puantajı ve Raporları Takip Edin',
        desc: 'Geç kalma, erken çıkma, vardiya uyumu ve alan bazlı süreleri raporlayarak puantaj sürecini yönetin.',
      },
    ],
    benefits: [
      'Geç kalma, mesai ve erken çıkma durumlarını raporlayın',
      'Sabit ve değişken vardiyaları sorunsuz takip edin',
      'Mola yönetimini puantaj sürecine dahil edin',
      'Alan bazlı süre verileriyle performans değerlendirmesi yapın',
    ],
  },
  'anket': {
    name: 'Anket',
    tagline: 'Personelinize Anketler Yaparak İç Görüler Oluşturun',
    description:
      'Personelinize sormak istediğiniz soruları anketlere dönüştürerek çıkan sonuçları analiz edebilirsiniz. Dilerseniz bu verileri diğer verileri analiz etmek için de kullanabilirsiniz.',
    hero_stats: [
      { value: 'Anket', label: 'Soru Dönüşümü' },
      { value: 'Analiz', label: 'Sonuç Görünürlüğü' },
      { value: 'İçgörü', label: 'Veri Kullanımı' },
    ],
    features: [{
        title: 'Soruları Ankete Dönüştürün',
        desc: 'Personelinize sormak istediğiniz soruları kolayca ankete dönüştürebilir ve düzenli geri bildirim akışı oluşturabilirsiniz.',
        icon: 'create',
      },{
        title: 'Sonuçları Analiz Edin',
        desc: 'Anketlerden çıkan sonuçları inceleyerek personel eğilimleri, beklentiler ve kurum içi durum hakkında daha net görünürlük elde edebilirsiniz.',
        icon: 'analytics',
      },{
        title: 'İçgörü Oluşturun',
        desc: 'Toplanan yanıtları kullanarak kurumunuz için anlamlı içgörüler oluşturabilir, karar süreçlerini veriyle destekleyebilirsiniz.',
        icon: 'segment',
      },],
    how_it_works: [
      {
        step: '01',
        title: 'Soruları Hazırlayın',
        desc: 'Personelinize sormak istediğiniz konuları belirleyin ve bunları anket yapısına dönüştürün.',
      },
      {
        step: '02',
        title: 'Anketi Uygulayın',
        desc: 'Anketi ilgili personele iletin ve yanıtların sistemde toplanmasını sağlayın.',
      },
      {
        step: '03',
        title: 'Sonuçları Analiz Edin',
        desc: 'Çıkan sonuçları analiz edin, gerekirse diğer verilerle birlikte kullanarak daha geniş içgörüler üretin.',
      },
    ],
    benefits: [
      'Personel sorularını ölçülebilir anketlere dönüştürün',
      'Çıkan sonuçları analiz ederek içgörüler oluşturun',
      'Anket verilerini diğer verilerle birlikte değerlendirin',
      'Karar süreçlerini çalışan geri bildirimiyle destekleyin',
    ],
  },
  'yan-haklar': {
    name: 'Yan Haklar',
    tagline: 'Yan Hak Süreçlerini Otomatikleştirin',
    description:
      'Personele verilen yan hakların verilme ve geri alınma süreçlerini otomatikleştirin. Görev bazında yan hak tanımlayabilir, işe başlayan yeni personele hangi yan hakların verilmesi gerektiğini görebilir ve verdiklerinizi işaretleyebilirsiniz.',
    hero_stats: [
      { value: 'Görev Bazlı', label: 'Tanımlama' },
      { value: 'Otomatik', label: 'Süreç Takibi' },
      { value: 'İşe Giriş + Çıkış', label: 'Hak Yönetimi' },
    ],
    features: [{
        title: 'Görev Bazında Yan Hak Tanımı',
        desc: 'Her görev için hangi yan hakların verilmesi gerektiğini tanımlayabilir, pozisyona bağlı standart hak setleri oluşturabilirsiniz.',
        icon: 'define',
      },{
        title: 'İşe Başlayan Personel için Görünürlük',
        desc: 'Yeni işe başlayan personelin görevine göre hangi yan hakların verilmesi gerektiğini sistem üzerinden görebilir, eksiksiz ilerleyebilirsiniz.',
        icon: 'assign',
      },{
        title: 'Verilen Hakları İşaretleme',
        desc: 'Personele teslim edilen yan hakları işaretleyerek süreç takibini düzenli hale getirebilir, hangi hakların verildiğini kolayca kontrol edebilirsiniz.',
        icon: 'cost',
      },],
    how_it_works: [
      {
        step: '01',
        title: 'Yan Hakları Göreve Bağlayın',
        desc: 'Her görev için verilmesi gereken yan hakları tanımlayın ve görev bazlı hak setleri oluşturun.',
      },
      {
        step: '02',
        title: 'İşe Girişte Teslim Edin',
        desc: 'Yeni başlayan personel için verilmesi gereken yan hakları görüntüleyin ve teslim edilenleri işaretleyin.',
      },
      {
        step: '03',
        title: 'İşten Çıkışta Geri Alın',
        desc: 'Zimmetli hakların listesini görüntüleyin, geri alınanları işaretleyin ve çıkış sürecini eksiksiz tamamlayın.',
      },
    ],
    benefits: [
      'Yan hak verme süreçlerini görev bazında standartlaştırın',
      'Yeni başlayan personelde eksik teslim riskini azaltın',
      'İşten çıkışta geri alınması gereken hakları görünür hale getirin',
      'Teslim ve geri alım süreçlerini dijital olarak kayıt altına alın',
    ],
  },
}