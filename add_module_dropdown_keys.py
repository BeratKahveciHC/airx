import json

tr_path = r'src/i18n/locales/tr.json'
en_path = r'src/i18n/locales/en.json'

with open(tr_path, 'r', encoding='utf-8') as f:
    tr = json.load(f)

with open(en_path, 'r', encoding='utf-8') as f:
    en = json.load(f)

# Dropdown header/footer strings
tr['nav']['dropdownHeader'] = 'Tüm Modüller'
tr['nav']['dropdownTitle'] = 'AiRX ile her İK sürecini dijitalleştirin'
tr['nav']['dropdownFooter'] = '14 modül · Tek entegre platform'
tr['nav']['dropdownPricing'] = 'Fiyatları incele'
tr['nav']['dropdownDemo'] = 'Demo talep et'

en['nav']['dropdownHeader'] = 'All Modules'
en['nav']['dropdownTitle'] = 'Digitalize every HR process with AiRX'
en['nav']['dropdownFooter'] = '14 modules · One integrated platform'
en['nav']['dropdownPricing'] = 'View pricing'
en['nav']['dropdownDemo'] = 'Request a demo'

# Module labels and descriptions
modules_tr = {
    'pdks':              ('PDKS',               'Giriş-çıkış takibi'),
    'ozluk':             ('Özlük Dosyası',      'Dijital personel arşivi'),
    'izin':              ('İzin Yönetimi',      'Onay akışlı izin takibi'),
    'puantaj':           ('Puantaj',            'Otomatik puantaj cetveli'),
    'erisim':            ('Erişim Kontrolü',    'Bölge bazlı yetkilendirme'),
    'ziyaretci':         ('Ziyaretçi Yönetimi', 'QR ile ziyaretçi kaydı'),
    'yemekhane':         ('Yemekhane',          'Yemek hakkı kontrolü'),
    'anket':             ('Anket',              'Personel geri bildirimi'),
    'sureli':            ('Süreli Evraklar',    'Son kullanma tarihi takibi'),
    'egitim':            ('Eğitim Planlama',    'Eğitim katılım takibi'),
    'hukuki':            ('Hukuki Evraklar',    'İhtar ve savunma yönetimi'),
    'yanHaklar':         ('Yan Haklar',         'Görev bazlı yan hak takibi'),
    'periyodik':         ('Periyodik Görev',    'Lokasyon doğrulamalı görev'),
    'isZekasi':          ('İş Zekası',          'Veri görselleştirme'),
}

modules_en = {
    'pdks':              ('Attendance',           'Entry-exit tracking'),
    'ozluk':             ('Employee Records',     'Digital employee archive'),
    'izin':              ('Leave Management',     'Approval-flow leave tracking'),
    'puantaj':           ('Timesheet',            'Automated timesheet'),
    'erisim':            ('Access Control',       'Zone-based authorization'),
    'ziyaretci':         ('Visitor Management',   'QR visitor registration'),
    'yemekhane':         ('Cafeteria',            'Meal entitlement control'),
    'anket':             ('Survey',               'Employee feedback'),
    'sureli':            ('Expiring Documents',   'Expiry date tracking'),
    'egitim':            ('Training Planning',    'Training attendance tracking'),
    'hukuki':            ('Legal Documents',      'Warning & defense management'),
    'yanHaklar':         ('Fringe Benefits',      'Role-based benefit tracking'),
    'periyodik':         ('Periodic Tasks',       'Location-verified task'),
    'isZekasi':          ('Business Intelligence','Data visualization'),
}

for key, (label, desc) in modules_tr.items():
    tr['nav'][f'mod_{key}_label'] = label
    tr['nav'][f'mod_{key}_desc'] = desc

for key, (label, desc) in modules_en.items():
    en['nav'][f'mod_{key}_label'] = label
    en['nav'][f'mod_{key}_desc'] = desc

with open(tr_path, 'w', encoding='utf-8') as f:
    json.dump(tr, f, ensure_ascii=False, indent=2)

with open(en_path, 'w', encoding='utf-8') as f:
    json.dump(en, f, ensure_ascii=False, indent=2)

print('Module dropdown keys added successfully.')
