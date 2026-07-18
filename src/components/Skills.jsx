import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS } from '../data';
import ScrambleText from './ScrambleText';

const CATEGORY_STYLES = {
  Frontend: { glow: 'rgba(128, 0, 32, 0.10)' },
  Backend:  { glow: 'rgba(166, 43, 65, 0.10)' },
  Database: { glow: 'rgba(197, 160, 89, 0.10)' },
  DevOps:   { glow: 'rgba(26, 10, 14, 0.10)' },
};

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = ref.current?.querySelectorAll('.bento-skill-card');
      if (cards?.length) {
        gsap.from(cards, {
          y: 50, autoAlpha: 0,
          stagger: 0.1,
          duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true },
        });
      }
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="skills" className="section-pad-lg relative overflow-hidden bg-transparent">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="chapter-header">
          <div className="chapter-header-title">Compétences — 03</div>
          <div className="mono-font text-[10px] text-text-muted">Toolkit</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(SKILLS).map(([cat, skills]) => (
            <div
              key={cat}
              className="bento-skill-card glass p-8 relative overflow-hidden offset-hover"
            >
              <div className="accent-line" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: CATEGORY_STYLES[cat]?.glow, filter: 'blur(40px)' }} />
              <h3 className="heading-font text-2xl font-bold uppercase tracking-wide mb-5 text-text-primary relative z-10">
                <ScrambleText text={cat} trigger="scroll" />
              </h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {skills.map((skill) => (
                  <span key={skill}
                    className="mono-font text-[10px] tracking-[0.05em] uppercase px-3 py-2 rounded-full border border-white/10 text-text-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
