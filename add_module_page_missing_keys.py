import json

tr_path = r'src/i18n/locales/tr.json'
en_path = r'src/i18n/locales/en.json'

with open(tr_path, 'r', encoding='utf-8') as f:
    tr = json.load(f)

with open(en_path, 'r', encoding='utf-8') as f:
    en = json.load(f)

# Add missing modulePage keys
tr['modulePage']['otherModulesHeading'] = 'Keşfetmeye devam edin'
tr['modulePage']['exploreBtn'] = 'İncele'

en['modulePage']['otherModulesHeading'] = 'Keep Exploring'
en['modulePage']['exploreBtn'] = 'Explore'

with open(tr_path, 'w', encoding='utf-8') as f:
    json.dump(tr, f, ensure_ascii=False, indent=2)

with open(en_path, 'w', encoding='utf-8') as f:
    json.dump(en, f, ensure_ascii=False, indent=2)

print('Missing modulePage keys added successfully.')
