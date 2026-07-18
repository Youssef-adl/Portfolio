import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE } from '../data';
import ScrambleText from './ScrambleText';

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.exp-card', {
        y: 60, opacity: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="experience" className="section-pad-lg relative overflow-hidden bg-transparent">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] glow-accent opacity-10 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="chapter-header">
          <div className="chapter-header-title">Expérience — 05</div>
          <div className="mono-font text-[10px] text-text-muted">
            <ScrambleText text="ECS Informatique // Rabat" trigger="scroll" />
          </div>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((entry, i) => (
            <div key={i} className="exp-card glass p-8 md:p-10 relative overflow-hidden offset-hover">
              <div className="accent-line" />
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <h3 className="heading-font text-3xl md:text-4xl font-bold uppercase tracking-wide text-text-primary">
                  {entry.title}
                </h3>
                <span className="mono-font text-[10px] tracking-[0.15em] uppercase px-4 py-2 rounded-full border border-white/10 text-warm">
                  {entry.date}
                </span>
              </div>
              <p className="mono-font text-xs tracking-[0.1em] uppercase text-warm mb-5">{entry.company}</p>
              <p className="text-base leading-relaxed text-text-secondary mb-6">{entry.description}</p>
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span key={tag} className="mono-font text-[9px] tracking-[0.08em] uppercase px-3 py-1.5 rounded-full border border-white/10 text-text-muted">
                    {tag}
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
