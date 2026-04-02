import json

tr_path = r'src/i18n/locales/tr.json'
en_path = r'src/i18n/locales/en.json'

with open(tr_path, 'r', encoding='utf-8') as f:
    tr = json.load(f)
with open(en_path, 'r', encoding='utf-8') as f:
    en = json.load(f)

tr['security'] = {
  "title": "Verileriniz Her Zaman Güvende",
  "subtitle": "Kurumsal düzeyde güvenlik altyapısı, yasal uyumluluk ve şeffaf veri yönetimi.",
  "cardTitle": "Gizliliğiniz Bizim Önceliğimiz",
  "cert1": "Biyometrik veri toplanmaz",
  "cert2": "KVKK'ya tam uyumluluk",
  "cert3": "Türkiye'de veri depolama",
  "cert4": "256-bit SSL şifreleme",
  "cert5": "7/24 sistem izleme",
  "stat1Value": "%99.9",
  "stat1Label": "Uptime",
  "stat2Value": "2",
  "stat2Label": "Veri Merkezi",
  "stat3Value": "256",
  "stat3Label": "bit Şifreleme",
  "pillar1Title": "Biyometrik Veri Toplanmaz",
  "pillar1Desc": "Parmak izi, yüz tanıma veya retina verisi hiçbir zaman işlenmez veya saklanmaz.",
  "pillar2Title": "KVKK Tam Uyumlu",
  "pillar2Desc": "Kişisel Verilerin Korunması Kanunu kapsamında tüm veri işleme süreçleri yasal gerekliliklerle uyumludur.",
  "pillar3Title": "256-bit SSL Şifreleme",
  "pillar3Desc": "Tüm veri aktarımları uçtan uca SSL/TLS şifreleme ile korunur. Açık metin iletimi kesinlikle engellenir.",
  "pillar4Title": "Türkiye'de Veri Depolama",
  "pillar4Desc": "Tüm veriler Türkiye'deki güvenli veri merkezlerinde saklanır. Yurt dışına aktarım gerçekleşmez.",
  "trust1": "Güvenilir Altyapı",
  "trust2": "KVKK Uyumlu",
  "trust3": "Türkiye'de Veri",
  "trust4": "7/24 İzleme"
}

en['security'] = {
  "title": "Your Data Is Always Secure",
  "subtitle": "Enterprise-grade security infrastructure, legal compliance, and transparent data management.",
  "cardTitle": "Your Privacy Is Our Priority",
  "cert1": "No biometric data collected",
  "cert2": "Full GDPR/KVKK compliance",
  "cert3": "Data stored in Turkey",
  "cert4": "256-bit SSL encryption",
  "cert5": "24/7 system monitoring",
  "stat1Value": "99.9%",
  "stat1Label": "Uptime",
  "stat2Value": "2",
  "stat2Label": "Data Centers",
  "stat3Value": "256",
  "stat3Label": "bit Encryption",
  "pillar1Title": "No Biometric Data Collected",
  "pillar1Desc": "Fingerprints, facial recognition, or retina data are never processed or stored.",
  "pillar2Title": "Fully GDPR/KVKK Compliant",
  "pillar2Desc": "All data processing activities comply with legal requirements under the Personal Data Protection Law.",
  "pillar3Title": "256-bit SSL Encryption",
  "pillar3Desc": "All data transfers are protected with end-to-end SSL/TLS encryption. Plain-text transmission is strictly prevented.",
  "pillar4Title": "Data Stored in Turkey",
  "pillar4Desc": "All data is stored in secure data centers in Turkey. No transfer outside the country takes place.",
  "trust1": "Trusted Infrastructure",
  "trust2": "GDPR/KVKK Compliant",
  "trust3": "Data in Turkey",
  "trust4": "24/7 Monitoring"
}

with open(tr_path, 'w', encoding='utf-8') as f:
    json.dump(tr, f, ensure_ascii=False, indent=2)
with open(en_path, 'w', encoding='utf-8') as f:
    json.dump(en, f, ensure_ascii=False, indent=2)
print('Security translations added.')
