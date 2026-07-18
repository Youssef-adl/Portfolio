import { useRef } from 'react';
import { TECH_STACK, PROFILE } from '../data';

export default function About() {
  const ref = useRef(null);

  return (
    <section ref={ref} id="about" className="section-pad-lg relative overflow-hidden bg-transparent">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] glow-warm opacity-20 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="chapter-header">
          <div className="chapter-header-title">À propos — 02</div>
          <div className="mono-font text-[10px] text-text-muted">Profil</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <div className="glass p-3 offset-hover">
              <div className="accent-line" />
              <img src="/adlani.png" alt="Youssef Adlani"
                className="w-full aspect-square object-cover rounded-2xl" />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="glass p-8 md:p-10 mb-8 offset-hover relative overflow-hidden">
              <div className="accent-line" />
              <p className="heading-font text-2xl md:text-3xl leading-snug font-medium text-text-primary">
                {PROFILE}
              </p>
            </div>

            <div className="glass p-8 md:p-10">
              <div className="mono-font text-[10px] tracking-[0.25em] uppercase text-warm mb-5">Stack Principale</div>
              <div className="flex flex-wrap gap-3">
                {TECH_STACK.map((t) => (
                  <span key={t}
                    className="mono-font text-[11px] tracking-[0.05em] uppercase px-4 py-2 rounded-full border border-white/10 text-text-secondary">
                    {t}
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
