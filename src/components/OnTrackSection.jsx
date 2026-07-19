import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '15+', label: 'Technologies' },
  { value: '2', label: 'Projets Majeurs' },
  { value: '3', label: 'Langues' },
  { value: '2026', label: 'Diplôme' },
];

const skills = [
  { name: 'React 19', level: 92 },
  { name: 'Node.js', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'PHP / Laravel', level: 78 },
  { name: 'Three.js', level: 70 },
  { name: 'Python', level: 75 },
  { name: 'MySQL', level: 82 },
  { name: 'MongoDB', level: 76 },
];

const results = [
  { title: 'LexiGam E-Commerce', status: 'Terminé', year: '2024', desc: 'Plateforme complète avec PayPal SDK & Google OAuth' },
  { title: 'Smart Veo — Bauhaus', status: 'Terminé', year: '2025', desc: 'Interface 3D premium avec Three.js & GSAP' },
];

const OnTrackSection = () => {
  const sectionRef = useRef(null);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.stats-row', start: 'top 80%' }
      });
      gsap.from('.result-row', {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.results-list', start: 'top 75%' }
      });
      gsap.from('.skill-bar-row', {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.skills-bars', start: 'top 80%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-28 md:py-40 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080a04 0%, #0c0f06 50%, #080a04 100%)' }}
    >
      {/* BG texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, #D2FF00 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} aria-hidden="true" />

      <div className="ln-container relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 reveal-on-scroll">
          <div className="section-divider" />
          <span className="section-label">Résultats & Performance</span>
        </div>
        <h2 className="font-display text-6xl md:text-8xl font-700 tracking-tight text-white leading-none mb-4 reveal-on-scroll">
          ON <span className="text-ln-lime">TRACK</span>
        </h2>
        <p className="font-body text-white/35 text-sm max-w-md mb-16 reveal-on-scroll">
          Données de carrière, stack technique et projets livrés. Chaque ligne de code compte.
        </p>

        {/* Stats Row */}
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-20 reveal-on-scroll">
          {stats.map((s) => (
            <div key={s.label} className="stat-item flex flex-col items-center justify-center py-10 px-6 bg-[#080a04]">
              <span className="stat-number">{s.value}</span>
              <span className="font-display text-[9px] uppercase tracking-[0.3em] text-white/30 mt-2">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Two Column: Skills + Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Skills Bars */}
          <div>
            <h3 className="font-display text-[10px] uppercase tracking-[0.4em] text-white/30 font-700 mb-8">Stack Technique</h3>
            <div className="skills-bars flex flex-col gap-5">
              {skills.map((skill, i) => (
                <div
                  key={skill.name}
                  className="skill-bar-row group"
                  onMouseEnter={() => setActiveSkill(i)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className={`font-display text-xs font-600 uppercase tracking-[0.15em] transition-colors duration-300 ${activeSkill === i ? 'text-ln-lime' : 'text-white/60'}`}>
                      {skill.name}
                    </span>
                    <span className="font-display text-[10px] text-white/30 font-600">{skill.level}%</span>
                  </div>
                  <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${skill.level}%`,
                        background: activeSkill === i
                          ? 'linear-gradient(90deg, #D2FF00, #fff)'
                          : 'linear-gradient(90deg, rgba(210,255,0,0.4), rgba(210,255,0,0.8))',
                        boxShadow: activeSkill === i ? '0 0 12px rgba(210,255,0,0.5)' : 'none'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="font-display text-[10px] uppercase tracking-[0.4em] text-white/30 font-700 mb-8">Derniers Résultats</h3>
            <div className="results-list flex flex-col gap-4">
              {results.map((r, i) => (
                <div
                  key={i}
                  className="result-row pillar-card p-6 rounded-xl flex flex-col gap-3 cursor-default"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[9px] tracking-[0.2em] uppercase text-ln-lime font-700">{r.year}</span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[8px] font-700 uppercase tracking-wider"
                      style={{ background: 'rgba(210,255,0,0.1)', color: '#D2FF00', border: '1px solid rgba(210,255,0,0.2)' }}>
                      <span className="w-1 h-1 rounded-full bg-ln-lime" />
                      {r.status}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-700 text-white">{r.title}</h4>
                  <p className="font-body text-xs text-white/40">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* Education mini */}
            <div className="mt-8 p-5 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-ln-lime" />
                <span className="font-display text-[9px] uppercase tracking-[0.3em] text-white/40">Formation</span>
              </div>
              <p className="font-display text-base font-600 text-white">ISTA Témara — OFPPT</p>
              <p className="font-body text-xs text-white/40 mt-1">Développement Digital • 2024 — 2026</p>
              <p className="font-body text-xs text-white/30 mt-2">Technicien Spécialisé, option Web Full-Stack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnTrackSection;
