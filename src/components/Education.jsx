import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLanguage, faCertificate, faHeart } from '@fortawesome/free-solid-svg-icons';
import { EDUCATION, LANGUAGES, INTERESTS } from '../data';
import ScrambleText from './ScrambleText';

const FOCUS = [
  { label: 'Full-Stack', detail: 'React · Node · .NET' },
  { label: 'Databases', detail: 'SQL · NoSQL · ORM' },
  { label: 'Creative', detail: 'Three.js · GSAP' },
  { label: 'Methodology', detail: 'Agile · Scrum' },
];

const CERTS = [
  { name: 'ISTA — TS Dev Web & BDD', year: '2026' },
  { name: 'Innovation Entrepreneuriale', year: '2026' },
  { name: 'Baccalauréat Sciences Physiques', year: '2024' },
];

export default function Education() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.edu-header', {
        y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });
      gsap.from('.edu-card', {
        y: 50, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      });
      gsap.from('.cert-item', {
        x: 30, opacity: 0, stagger: 0.07, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.cert-item', start: 'top 90%' },
      });
      gsap.from('.edu-aside', {
        y: 50, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 68%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="education" className="py-32 px-6 md:px-16 lg:px-24 relative bg-transparent z-10">
      {/* Dashed blueprint construction lines */}
      <div className="dashed-line-h" style={{ top: '50%' }} />
      <div className="dashed-line-v" style={{ left: '50%' }} />
      <div className="crosshair" style={{ left: 'calc(50% - 6px)', top: 'calc(50% - 6px)' }}>
        <span className="arm-h left" /><span className="arm-h right" />
        <span className="arm-v top" /><span className="arm-v bottom" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] glow-accent opacity-5 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="edu-header chapter-header w-full">
          <div className="chapter-header-title">Knowledge Foundation</div>
          <div className="mono-font text-[10px] text-text-secondary">ISTA // Temara</div>
        </div>

        <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-text-muted mb-5">Formation — 06</div>
        <h2 className="edu-header heading-font text-[clamp(1.6rem,4vw,3rem)] font-bold mb-14 uppercase">
          <span className="pointer-events-none absolute -top-6 right-0 lg:right-4 ghost-num text-[9rem] lg:text-[13rem] leading-none text-stroke opacity-[0.05] select-none z-0">06</span>
          <ScrambleText text="Knowledge " trigger="scroll" /> <ScrambleText text="Foundation" trigger="scroll" className="text-stroke" />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left — Academic record */}
          <div className="lg:col-span-7">
            <div className="mono-font text-[9px] tracking-[0.2em] uppercase mb-6 flex items-center gap-2"
              style={{ color: 'var(--color-accent)' }}>
              <span className="w-4 h-px" style={{ background: 'rgba(var(--color-accent-rgb),0.5)' }} /> Academic Record
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="w-full">
                  <div className="edu-card glass p-6 relative overflow-hidden group offset-hover"
                    style={{ borderColor: 'rgba(var(--color-accent-rgb), 0.08)' }}>
                    <div className="accent-line" />
                    <div className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: 'linear-gradient(90deg, var(--color-accent), transparent)' }} />

                    <div className="flex items-center justify-between mb-4">
                      <span className="mono-font text-[9px] px-2 py-1 tracking-[0.1em] uppercase"
                        style={{ background: 'rgba(var(--color-accent-rgb), 0.08)', border: '1px solid rgba(var(--color-accent-rgb), 0.25)', color: 'var(--color-accent-light)' }}>
                        {i === EDUCATION.length - 1 ? 'Completed' : 'Graduated'}
                      </span>
                      <span className="mono-font text-sm font-semibold gradient-text">{edu.year}</span>
                    </div>

                    <h3 className="heading-font text-sm font-bold uppercase tracking-wide mb-2 leading-snug" style={{ color: 'var(--color-text-primary)' }}>
                      {edu.degree}
                    </h3>
                    <div className="mono-font text-[9px] tracking-[0.12em] uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>
                      <FontAwesomeIcon icon={faLocationDot} className="mr-1" /> {edu.school}
                    </div>
                    <p className="text-sm leading-relaxed font-light" style={{ color: 'var(--color-text-secondary)' }}>{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications / Languages */}
            <div className="mt-10">
              <div className="mono-font text-[9px] tracking-[0.2em] uppercase mb-5 flex items-center gap-2"
                style={{ color: 'var(--color-warm)' }}>
                <FontAwesomeIcon icon={faCertificate} /> Credentials
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CERTS.map((c) => (
                  <div key={c.name} className="cert-item flex items-center justify-between glass px-4 py-3"
                    style={{ borderColor: 'rgba(var(--color-warm-rgb), 0.12)' }}>
                    <span className="text-xs font-light leading-snug" style={{ color: 'var(--color-text-secondary)' }}>{c.name}</span>
                    <span className="mono-font text-[9px] gradient-text flex-shrink-0 ml-3">{c.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Ethos aside */}
          <div className="lg:col-span-5">
            <div className="edu-aside glass p-8 relative overflow-hidden h-full flex flex-col"
              style={{ borderColor: 'rgba(var(--color-accent-rgb), 0.12)' }}>
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'var(--gradient-brand)' }} />
              <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full glow-warm opacity-20 pointer-events-none" />

              <div className="mono-font text-[9px] tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--color-accent)' }}>The Student's Ethos</div>
              <h3 className="heading-font text-2xl font-bold uppercase tracking-wide mb-5 leading-tight" style={{ color: 'var(--color-text-primary)' }}>
                Built to <span className="gradient-text">Endure</span>
              </h3>
              <p className="text-sm leading-relaxed font-light mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                My formation balances rigorous engineering with entrepreneurial thinking —
                I learn systems the way I build them: from first principles, with an eye for craft and a bias toward shipping.
              </p>

              <div className="mono-font text-[9px] tracking-[0.2em] uppercase mb-4 flex items-center gap-2"
                style={{ color: 'var(--color-text-muted)' }}>
                <FontAwesomeIcon icon={faLanguage} /> Focus Areas
              </div>
              <div className="space-y-3">
                {FOCUS.map((f) => (
                  <div key={f.label} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0">
                    <span className="heading-font text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--color-text-primary)' }}>{f.label}</span>
                    <span className="mono-font text-[9px] tracking-[0.1em]" style={{ color: 'var(--color-text-muted)' }}>{f.detail}</span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mono-font text-[9px] tracking-[0.2em] uppercase mt-8 mb-4 flex items-center gap-2"
                style={{ color: 'var(--color-jade-light)' }}>
                <FontAwesomeIcon icon={faLanguage} /> Langues
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {LANGUAGES.map((lang) => (
                  <span key={lang.name}
                    className="mono-font text-[9px] tracking-[0.08em] uppercase px-3 py-2 rounded-full"
                    style={{ background: 'rgba(var(--color-jade-rgb), 0.1)', border: '1px solid rgba(var(--color-jade-rgb), 0.25)', color: 'var(--color-text-secondary)' }}>
                    {lang.name} <span style={{ color: 'var(--color-jade-light)' }}>· {lang.level}</span>
                  </span>
                ))}
              </div>

              {/* Interests */}
              <div className="mono-font text-[9px] tracking-[0.2em] uppercase mb-4 flex items-center gap-2"
                style={{ color: 'var(--color-warm)' }}>
                <FontAwesomeIcon icon={faHeart} /> Centres d'intérêt
              </div>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span key={interest}
                    className="text-xs font-light px-3 py-2 rounded-full"
                    style={{ background: 'rgba(var(--color-warm-rgb), 0.08)', border: '1px solid rgba(var(--color-warm-rgb), 0.2)', color: 'var(--color-text-secondary)' }}>
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
