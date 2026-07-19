import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const interests = [
  { icon: '🤖', label: 'Intelligence Artificielle & Web3', desc: 'Exploration des technologies émergentes' },
  { icon: '🌐', label: 'Open Source', desc: 'Contribution active à la communauté' },
  { icon: '👥', label: 'Pair Programming', desc: 'Collaboration et partage de savoir' },
  { icon: '⚡', label: 'Agile / Scrum', desc: 'Méthodologies modernes de gestion' },
  { icon: '🎮', label: 'Gaming & Stratégie', desc: 'Esprit analytique et réflexes' },
  { icon: '🏊', label: 'Natation & Randonnée', desc: 'Équilibre entre code et nature' },
];

const campaigns = [
  { title: 'LexiGam Store', type: 'E-Commerce', year: '2024', tags: ['React 19', 'PayPal SDK', 'Google OAuth'] },
  { title: 'Smart Veo', type: '3D / Creative', year: '2025', tags: ['Three.js', 'GSAP', 'Bauhaus Design'] },
  { title: 'Portfolio V2', type: 'Personal Brand', year: '2026', tags: ['React', 'Tailwind', 'GSAP'] },
];

const OffTrackSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.interest-card', {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.interests-grid', start: 'top 80%' }
      });
      gsap.from('.campaign-item', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.campaigns-list', start: 'top 75%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-40 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060804 0%, #080b04 100%)' }}
    >
      <div className="ln-container relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 reveal-on-scroll">
          <div className="section-divider" />
          <span className="section-label">Lifestyle & Créativité</span>
        </div>
        <h2 className="font-display text-6xl md:text-8xl font-700 tracking-tight text-white leading-none mb-4 reveal-on-scroll">
          OFF <span className="text-white/20">TRACK</span>
        </h2>
        <p className="font-body text-white/35 text-sm max-w-md mb-16 reveal-on-scroll">
          Au-delà du code : passions, intérêts et campagnes créatives qui définissent mon univers.
        </p>

        {/* Interests Grid */}
        <div className="mb-24">
          <h3 className="font-display text-[10px] uppercase tracking-[0.4em] text-white/30 font-700 mb-8">Centres d'intérêt</h3>
          <div className="interests-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {interests.map((item, i) => (
              <div
                key={i}
                className="interest-card pillar-card p-6 rounded-xl flex flex-col gap-3 cursor-default group"
              >
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-display text-sm font-700 text-white group-hover:text-ln-lime transition-colors duration-300 uppercase tracking-wide">
                  {item.label}
                </h4>
                <p className="font-body text-xs text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campaigns / Editorial */}
        <div>
          <h3 className="font-display text-[10px] uppercase tracking-[0.4em] text-white/30 font-700 mb-8">Campagnes & Créations</h3>
          <div className="campaigns-list flex flex-col gap-0">
            {campaigns.map((c, i) => (
              <div
                key={i}
                className="campaign-item flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-white/5 hover:border-ln-lime/20 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-6">
                  <span className="font-display text-[9px] tracking-[0.2em] uppercase text-white/20 font-700 w-12">0{i+1}</span>
                  <div>
                    <h4 className="font-display text-lg font-700 text-white group-hover:text-ln-lime transition-colors duration-300">
                      {c.title}
                    </h4>
                    <span className="font-body text-xs text-white/30">{c.type} • {c.year}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3 md:mt-0">
                  {c.tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-display uppercase tracking-wider text-white/40 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll">
          {[
            { lang: 'Arabe', flag: '🇲🇦', level: 'Langue Maternelle', pct: 100 },
            { lang: 'Français', flag: '🇫🇷', level: 'B1 — Intermédiaire', pct: 65 },
            { lang: 'Anglais', flag: '🇬🇧', level: 'A2 — Élémentaire', pct: 45 },
          ].map((l) => (
            <div key={l.lang} className="p-5 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">{l.flag}</span>
                <span className="font-display text-sm font-700 text-white">{l.lang}</span>
              </div>
              <span className="font-body text-[10px] text-white/30 uppercase tracking-wider">{l.level}</span>
              <div className="h-[2px] bg-white/5 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-ln-lime/60 rounded-full" style={{ width: `${l.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffTrackSection;
