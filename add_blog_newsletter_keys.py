import json

tr_path = r'src/i18n/locales/tr.json'
en_path = r'src/i18n/locales/en.json'

with open(tr_path, 'r', encoding='utf-8') as f:
    tr = json.load(f)

with open(en_path, 'r', encoding='utf-8') as f:
    en = json.load(f)

# Add missing blog newsletter keys
tr['blog']['newsletterTitle'] = 'Yeni yazıları kaçırmayın'
tr['blog']['newsletterSubtitle'] = 'İK mevzuatı ve sektör içgörüleri doğrudan e-postanıza gelsin.'
tr['blog']['newsletterPlaceholder'] = 'e-posta adresiniz'
tr['blog']['newsletterBtn'] = 'Abone Ol'
tr['blog']['newsletterNote'] = 'İstediğiniz zaman abonelikten çıkabilirsiniz.'

en['blog']['newsletterTitle'] = 'Don\'t miss new posts'
en['blog']['newsletterSubtitle'] = 'HR regulations and industry insights delivered directly to your inbox.'
en['blog']['newsletterPlaceholder'] = 'your email address'
en['blog']['newsletterBtn'] = 'Subscribe'
en['blog']['newsletterNote'] = 'You can unsubscribe at any time.'

with open(tr_path, 'w', encoding='utf-8') as f:
    json.dump(tr, f, ensure_ascii=False, indent=2)

with open(en_path, 'w', encoding='utf-8') as f:
    json.dump(en, f, ensure_ascii=False, indent=2)

print('Blog newsletter keys added successfully.')
