import biolustre from '../../assets/logos/biolustre.png'
import untdInsaat from '../../assets/logos/untd-insaat.png'
import koyuncu from '../../assets/logos/koyuncu.png'
import suadiye from '../../assets/logos/suadiye-anaokulu.png'
import viromed from '../../assets/logos/viromed.png'
import acacia from '../../assets/logos/acacia.png'
import tohumHolding from '../../assets/logos/Tohum-Holding-logo-beyaz.png'
import decofis from '../../assets/logos/decofis.png'
import akfen from '../../assets/logos/akfen.png'
import missha from '../../assets/logos/Missha_logo.png'
import unitedGroup from '../../assets/logos/united-group.png'

const LOGOS = [
  { src: biolustre,    alt: 'Biolustre',         invert: false, maxH: 80 },
  { src: untdInsaat,   alt: 'UNTD İnşaat',       invert: true  },
  { src: koyuncu,      alt: 'Koyuncu',           invert: false },
  { src: suadiye,      alt: 'Suadiye Anaokulu',  invert: false },
  { src: viromed,      alt: 'ViroMed',           invert: false },
  { src: acacia,       alt: 'Acacia',            invert: false },
  { src: tohumHolding, alt: 'Tohum Holding',     invert: true  },
  { src: decofis,      alt: 'Decofis',           invert: false },
  { src: akfen,        alt: 'Akfen',             invert: false },
  { src: missha,       alt: 'Missha',            invert: false },
  { src: unitedGroup,  alt: 'United Group',      invert: true  },
]

export default function References() {
  return (
    <section style={{ padding: '48px 0 52px', background: 'linear-gradient(180deg, #f8fafd 0%, #eef4fb 100%)', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: '#003C75', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.6 }}>
          Güvendikleri Şirketler
        </span>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 140, background: 'linear-gradient(to right, #f0f6fc, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 140, background: 'linear-gradient(to left, #f0f6fc, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div className="ref-track">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                margin: '0 12px',
                background: '#ffffff',
                borderRadius: 14,
                border: '1px solid rgba(0,60,117,0.08)',
                boxShadow: '0 2px 12px rgba(0,40,100,0.07)',
                width: 200,
                height: 92,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 20px',
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxHeight: logo.maxH || 64,
                  maxWidth: 155,
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: logo.invert ? 'brightness(0)' : 'none',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ref-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: ref-scroll 32s linear infinite;
        }
        .ref-track:hover {
          animation-play-state: paused;
        }
        @keyframes ref-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
