import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const PRICING_TIERS_BASE = [
  { id: '2-10', labelKey: 'pricing.tier1Label', min: 2, max: 10, monthly: 299, semiAnnual: 269, annual: 254 },
  { id: '11-30', labelKey: 'pricing.tier2Label', min: 11, max: 30, monthly: 269, semiAnnual: 242, annual: 228 },
  { id: '31-50', labelKey: 'pricing.tier3Label', min: 31, max: 50, monthly: 249, semiAnnual: 224, annual: 211 },
  { id: '51-100', labelKey: 'pricing.tier4Label', min: 51, max: 100, monthly: 219, semiAnnual: 198, annual: 168 },
  { id: '101-500', labelKey: 'pricing.tier5Label', min: 101, max: 500, monthly: 189, semiAnnual: 170, annual: 160 },
  { id: '500+', labelKey: 'pricing.tier6Label', min: 501, max: Infinity, monthly: null, semiAnnual: null, annual: null, custom: true },
]

const QUICK_COUNTS = [10, 25, 50, 100, 250, 500]

const PLAN_CARDS_BASE = [
  { id: 'monthly', titleKey: 'pricing.plan1Title', descKey: 'pricing.plan1Desc', accent: '#0F5D91', background: 'linear-gradient(180deg, #ffffff 0%, #f3f9fc 100%)', duration: 1, rateKey: 'monthly', badge: null },
  { id: 'semiAnnual', titleKey: 'pricing.plan2Title', descKey: 'pricing.plan2Desc', accent: '#0F7A31', background: 'linear-gradient(180deg, #ffffff 0%, #f4fbf4 100%)', duration: 6, rateKey: 'semiAnnual' },
  { id: 'annual', titleKey: 'pricing.plan3Title', descKey: 'pricing.plan3Desc', accent: '#0A6E5A', background: 'linear-gradient(180deg, #ffffff 0%, #f1faf7 100%)', duration: 12, rateKey: 'annual' },
]

function findTierBase(employeeCount) {
  return PRICING_TIERS_BASE.find((tier) => employeeCount >= tier.min && employeeCount <= tier.max) || PRICING_TIERS_BASE[0]
}

function formatCurrency(value) {
  return `${value.toLocaleString('tr-TR')} TL`
}

function formatEmployeeCount(value) {
  return `${value} personel`
}

export default function PricingPage() {
  const { t } = useTranslation()
  const [employeeCount, setEmployeeCount] = useState(30)

  const PRICING_TIERS = PRICING_TIERS_BASE.map(tier => ({ ...tier, label: t(tier.labelKey) }))
  const PLAN_CARDS = PLAN_CARDS_BASE.map(card => ({ ...card, title: t(card.titleKey), description: t(card.descKey) }))

  const safeEmployeeCount = Number.isFinite(employeeCount) ? Math.min(Math.max(employeeCount, 2), 9999) : 2
  const activeTier = findTierBase(safeEmployeeCount)
  const activeTierTranslated = PRICING_TIERS.find(t => t.id === activeTier.id) || PRICING_TIERS[0]
  const isCustomTier = Boolean(activeTier.custom)

  return (
    <main style={{ background: '#f6f9fc' }}>
      <section
        className="pricing-hero"
        style={{
          background: 'linear-gradient(145deg, #03101f 0%, #08294d 36%, #0F5D91 72%, #3EA7D8 100%)',
          padding: '104px 24px 84px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -140,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.16) 0%, transparent 72%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -180,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(62,167,216,0.22) 0%, transparent 72%)',
          }}
        />

        <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: 820 }}
          >
           

              <h1
              style={{
                fontSize: 'clamp(38px, 5.8vw, 72px)',
                lineHeight: 1.03,
                letterSpacing: '-0.04em',
                color: '#fff',
                margin: '0 0 18px',
                fontWeight: 800,
              }}
            >
              {t('pricing.heroTitle1')}
              <br />
              {t('pricing.heroTitle2')} <span style={{ color: '#BFE8FF' }}>{t('pricing.heroTitleHighlight')}</span> {t('pricing.heroTitle3')}
            </h1>

            <p
              style={{
                maxWidth: 640,
                margin: 0,
                fontSize: 18,
                lineHeight: 1.75,
                color: 'rgba(232,244,255,0.78)',
              }}
            >
              {t('pricing.heroSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '0 24px 84px', marginTop: -46, position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: '#fff',
              borderRadius: 32,
              border: '1px solid rgba(8,41,77,0.08)',
              boxShadow: '0 28px 70px rgba(5,31,56,0.10)',
              padding: '30px 28px 34px',
              marginBottom: 26,
            }}
          >
            <div className="pricing-top-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 28 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0F5D91', marginBottom: 12 }}>
                  {t('pricing.staffCountLabel')}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '16px 18px',
                    borderRadius: 22,
                    background: 'linear-gradient(180deg, #f8fbfe 0%, #eef5fb 100%)',
                    border: '1px solid rgba(15,93,145,0.10)',
                    marginBottom: 16,
                  }}
                >
                  <input
                    type="number"
                    min="2"
                    max="9999"
                    value={safeEmployeeCount}
                    onChange={(event) => {
                      const nextValue = Number(event.target.value)
                      setEmployeeCount(Number.isNaN(nextValue) ? 2 : nextValue)
                    }}
                    style={{
                      width: '100%',
                      border: 'none',
                      outline: 'none',
                      background: 'transparent',
                      fontSize: 'clamp(28px, 4vw, 42px)',
                      fontWeight: 800,
                      color: '#08294d',
                      letterSpacing: '-0.03em',
                      fontFamily: 'inherit',
                    }}
                  />
                  <div
                    style={{
                      flexShrink: 0,
                      padding: '8px 12px',
                      borderRadius: 14,
                      background: 'rgba(15,93,145,0.10)',
                      color: '#0F5D91',
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    Personel
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {QUICK_COUNTS.map((count) => (
                    <button
                      key={count}
                      onClick={() => setEmployeeCount(count)}
                      style={{
                        border: '1px solid rgba(8,41,77,0.10)',
                        background: safeEmployeeCount === count ? '#08294d' : '#fff',
                        color: safeEmployeeCount === count ? '#fff' : '#31506f',
                        borderRadius: 9999,
                        padding: '10px 14px',
                        fontSize: 13,
                        fontWeight: 700,
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        transition: 'all 0.18s',
                      }}
                    >
                      {formatEmployeeCount(count)}
                    </button>
                  ))}
                </div>
              </div>

              <div
                style={{
                  borderRadius: 24,
                  background: 'linear-gradient(160deg, #08294d 0%, #0F5D91 100%)',
                  color: '#fff',
                  padding: '22px 22px 20px',
                  boxShadow: '0 20px 44px rgba(8,41,77,0.18)',
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(191,232,255,0.78)', marginBottom: 10 }}>
                  {t('pricing.matchedTierLabel')}
                </div>
                <div style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, lineHeight: 1.08, marginBottom: 12 }}>
                  {activeTierTranslated.label}
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(232,244,255,0.78)', marginBottom: 16 }}>
                  {isCustomTier
                    ? t('pricing.customTierDesc')
                    : t('pricing.tierRangeDesc', { count: safeEmployeeCount })}
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '9px 12px',
                    borderRadius: 9999,
                    background: 'rgba(255,255,255,0.12)',
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  {isCustomTier ? t('pricing.customTierBadge') : t('pricing.perPersonBadge')}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="pricing-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 28 }}>
            {PLAN_CARDS.map((plan, index) => {
              const rate = activeTier[plan.rateKey]
              const monthlyEquivalent = rate ? rate * safeEmployeeCount : null
              const upfrontTotal = rate ? rate * safeEmployeeCount * plan.duration : null

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    borderRadius: 28,
                    background: plan.background,
                    border: `1px solid ${plan.id === 'semiAnnual' ? 'rgba(15,122,49,0.20)' : 'rgba(8,41,77,0.08)'}`,
                    boxShadow: plan.id === 'semiAnnual' ? '0 24px 60px rgba(15,122,49,0.12)' : '0 16px 44px rgba(8,41,77,0.07)',
                    padding: '24px 24px 26px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: -44,
                      right: -44,
                      width: 132,
                      height: 132,
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${plan.accent}20 0%, transparent 70%)`,
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, marginBottom: 20 }}>
                      <div>
                        <div style={{ fontSize: 22, fontWeight: 800, color: '#08294d', marginBottom: 8 }}>{plan.title}</div>
                        <div style={{ fontSize: 14, lineHeight: 1.65, color: '#5a718b', maxWidth: 290 }}>{plan.description}</div>
                      </div>
                      {plan.badge && (
                        <div
                          style={{
                            flexShrink: 0,
                            padding: '7px 10px',
                            borderRadius: 9999,
                            background: plan.accent,
                            color: '#fff',
                            fontSize: 11,
                            fontWeight: 800,
                            letterSpacing: '0.04em',
                          }}
                        >
                          {plan.badge}
                        </div>
                      )}
                    </div>

                    {isCustomTier ? (
                      <>
                        <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-0.04em', color: '#08294d', marginBottom: 10 }}>{t('pricing.customQuote')}</div>
                        <div style={{ fontSize: 14, lineHeight: 1.7, color: '#5a718b', marginBottom: 22 }}>
                          {t('pricing.customQuoteDesc')}
                        </div>
                        <a
                          href="/iletisim#demo-form"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            background: plan.accent,
                            color: '#fff',
                            fontWeight: 700,
                            padding: '13px 18px',
                            borderRadius: 14,
                          }}
                        >
                          {t('pricing.customQuoteBtn')}
                        </a>
                      </>
                    ) : (
                      <>
                        <div style={{ fontSize: 13, color: '#64809d', fontWeight: 700, marginBottom: 8 }}>{t('pricing.perPersonMonth')}</div>
                        <div style={{ fontSize: 'clamp(34px, 4vw, 46px)', lineHeight: 1, letterSpacing: '-0.05em', fontWeight: 800, color: '#08294d', marginBottom: 10 }}>
                          {formatCurrency(rate)}
                        </div>
                        <div
                          style={{
                            display: 'grid',
                            gap: 12,
                            padding: '16px 16px 14px',
                            borderRadius: 18,
                            background: 'rgba(255,255,255,0.72)',
                            border: '1px solid rgba(8,41,77,0.08)',
                            marginBottom: 18,
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                            <span style={{ fontSize: 13, color: '#5a718b' }}>{t('pricing.selectedStaff')}</span>
                            <span style={{ fontSize: 13, fontWeight: 800, color: '#08294d' }}>{safeEmployeeCount}</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                            <span style={{ fontSize: 13, color: '#5a718b' }}>{t('pricing.monthlyEquivalent')}</span>
                            <span style={{ fontSize: 13, fontWeight: 800, color: '#08294d' }}>{formatCurrency(monthlyEquivalent)}</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                            <span style={{ fontSize: 13, color: '#5a718b' }}>{plan.duration === 1 ? t('pricing.thisMonthTotal') : t('pricing.upfrontTotal', { duration: plan.duration })}</span>
                            <span style={{ fontSize: 14, fontWeight: 800, color: plan.accent }}>{formatCurrency(upfrontTotal)}</span>
                          </div>
                        </div>

                        <div style={{ fontSize: 13, lineHeight: 1.7, color: '#5a718b' }}>
                          {plan.duration === 1
                            ? t('pricing.monthlyNote')
                            : t('pricing.upfrontNote', { saving: formatCurrency(activeTier.monthly - (activeTier[plan.rateKey] || 0)) })}
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
  initial={{ opacity: 0, y: 22 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45 }}
  style={{
    background: '#fff',
    borderRadius: 28,
    border: '1px solid #c5dff2',
    overflow: 'hidden',
    boxShadow: '0 18px 48px rgba(8,41,77,0.08)',
  }}
>
  <div style={{ padding: '28px 28px 18px' }}>
    <h2 style={{ margin: 0, fontSize: 'clamp(28px, 3.8vw, 40px)', lineHeight: 1.1, color: '#08294d', letterSpacing: '-0.03em' }}>
      {t('pricing.tableSectionTitle')}
    </h2>
    <p style={{ margin: '6px 0 0', fontSize: 13, color: '#6a96b8' }}>
      {t('pricing.tableSectionSubtitle')}
    </p>
  </div>

  <div style={{ overflowX: 'auto' }}>
    <div className="pricing-matrix" style={{ minWidth: 860 }}>

      {/* Header */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr)' }}>
        <div style={{ padding: '14px 22px', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6a96b8', background: '#f0f7fd' }}>
          {t('pricing.colEmployeeCount')}
        </div>
        <div style={{ padding: '14px 16px', fontSize: 12, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', textAlign: 'center', color: '#5a8faf', background: '#f0f7fd' }}>
          {t('pricing.colMonthly')}
        </div>
        <div style={{ padding: '14px 16px', fontSize: 12, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', textAlign: 'center', color: '#3a7fab', background: '#e4f1fa' }}>
          {t('pricing.colSemiAnnual')}
          <span style={{ display: 'block', fontSize: 9, fontWeight: 500, background: 'rgba(121,172,220,0.15)', color: '#3a7fab', borderRadius: 4, padding: '2px 7px', marginTop: 3, letterSpacing: '0.06em' }}>
            {t('pricing.discountSemi')}
          </span>
        </div>
        <div style={{ padding: '14px 16px', fontSize: 12, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', textAlign: 'center', color: '#fff', background: '#79acdc' }}>
          {t('pricing.colAnnual')}
          <span style={{ display: 'block', fontSize: 9, fontWeight: 500, background: 'rgba(255,255,255,0.25)', color: '#fff', borderRadius: 4, padding: '2px 7px', marginTop: 3, letterSpacing: '0.06em' }}>
            {t('pricing.discountAnnual')}
          </span>
        </div>
      </div>

      {/* Rows */}
      {PRICING_TIERS.map((tier, index) => (
        <div
          key={tier.id}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr repeat(3, 1fr)',
            borderTop: '1px solid #dceef8',
            background: index % 2 === 0 ? '#fafcff' : '#fff',
          }}
        >
          <div style={{
            padding: '16px 22px',
            fontSize: 14,
            fontWeight: 500,
            color: '#08294d',
            background: '#eaf4fb',
            borderRight: '1px solid #dceef8',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#79acdc', flexShrink: 0, display: 'inline-block' }} />
            {tier.label}
          </div>

          {tier.custom ? (
            <>
              <div style={{ padding: '16px 12px', textAlign: 'center', fontSize: 14, fontWeight: 500, color: '#8ab5d1' }}>{t('pricing.contactUs')}</div>
              <div style={{ padding: '16px 12px', textAlign: 'center', fontSize: 14, fontWeight: 500, color: '#8ab5d1' }}>{t('pricing.contactUs')}</div>
              <div style={{ padding: '16px 12px', textAlign: 'center', fontSize: 14, fontWeight: 500, color: '#79acdc' }}>{t('pricing.contactUs')}</div>
            </>
          ) : (
            <>
              <div style={{ padding: '16px 12px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 17, fontWeight: 500, color: '#1a4f78' }}>{tier.monthly} TL</span>
                <span style={{ fontSize: 12, fontWeight: 400, color: '#8ab5d1', marginLeft: 5 }}>{t('pricing.perPerson')}</span>
              </div>
              <div style={{ padding: '16px 12px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 17, fontWeight: 500, color: '#1a4f78' }}>{tier.semiAnnual} TL</span>
                <span style={{ fontSize: 12, fontWeight: 400, color: '#8ab5d1', marginLeft: 5 }}>{t('pricing.perPerson')}</span>
              </div>
              <div style={{ padding: '16px 12px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 18, fontWeight: 500, color: '#185fa5' }}>{tier.annual} TL</span>
                <span style={{ fontSize: 12, fontWeight: 400, color: '#79acdc', marginLeft: 5 }}>{t('pricing.perPerson')}</span>
              </div>
            </>
          )}
        </div>
      ))}

    </div>
  </div>
</motion.div>
        </div>
      </section>

      <section
        className="pricing-cta"
        style={{
          padding: '96px 24px',
          background: 'linear-gradient(145deg, #03101f 0%, #08294d 36%, #0F5D91 72%, #3EA7D8 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ margin: '0 0 18px', fontSize: 'clamp(30px, 4.6vw, 52px)', lineHeight: 1.08, letterSpacing: '-0.03em', color: '#fff' }}>
              {t('pricing.ctaTitle')}
            </h2>
            <p style={{ maxWidth: 620, margin: '0 auto 30px', fontSize: 17, lineHeight: 1.75, color: 'rgba(232,244,255,0.76)' }}>
              {t('pricing.ctaSubtitle')}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <a
                href="/iletisim#demo-form"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '15px 28px',
                  borderRadius: 9999,
                  background: '#fff',
                  color: '#08294d',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: 15,
                }}
              >
                {t('pricing.ctaBtn1')}
              </a>
              <a
                href="/iletisim"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '15px 28px',
                  borderRadius: 9999,
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: 15,
                  backdropFilter: 'blur(8px)',
                }}
              >
                {t('pricing.ctaBtn2')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 980px) {
          .pricing-top-grid {
            grid-template-columns: 1fr !important;
          }
          .pricing-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .pricing-hero {
            padding: 84px 20px 74px !important;
          }
          .pricing-cta {
            padding: 72px 20px !important;
          }
        }

        @media (max-width: 540px) {
          .pricing-hero {
            padding: 72px 16px 68px !important;
          }
          .pricing-cta {
            padding: 58px 16px !important;
          }
          .pricing-matrix {
            min-width: 720px !important;
          }
        }
      `}</style>
    </main>
  )
}
