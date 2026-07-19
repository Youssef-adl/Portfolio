import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: '2024', label: 'Baccalauréat', location: 'Lycée El-Hassan II' },
  { year: '2024', label: 'ISTA — Dév Digital', location: 'Témara, OFPPT' },
  { year: '2024', label: 'E-Commerce LexiGam', location: 'Full Stack Project' },
  { year: '2025', label: 'Smart Veo — Bauhaus', location: 'Three.js / GSAP' },
  { year: '2026', label: 'Diplôme Technicien', location: 'Spécialisé Web' },
];

const ManifesteSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.manifesto-line', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.manifesto-wrapper',
          start: 'top 75%',
        }
      });
      gsap.from('.chrono-item', {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.chrono-list',
          start: 'top 80%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-28 md:py-40 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060804 0%, #0a0d04 100%)' }}
    >
      <div className="ln-container">
        <div className="flex items-center gap-3 mb-6 reveal-on-scroll">
          <div className="section-divider" />
          <span className="section-label">Mon Manifeste</span>
        </div>

        <div className="manifesto-wrapper max-w-4xl mb-24">
          <p className="manifesto-text">
            <span className="manifesto-line">Passionné par l'innovation, je </span>
            <span className="manifesto-line manifesto-bold">redéfinis les limites</span>
            <span className="manifesto-line"> du développement web. Avec une </span>
            <span className="manifesto-line manifesto-bold">rigueur technique</span>
            <span className="manifesto-line"> et une empathie utilisateur, je </span>
            <span className="manifesto-line manifesto-bold">me bats pour créer</span>
            <span className="manifesto-line"> des expériences digitales qui </span>
            <span className="manifesto-line manifesto-bold">marquent l'héritage</span>
            <span className="manifesto-line"> de demain.</span>
          </p>
        </div>

        {/* Chronology */}
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-20">
          <div className="flex-shrink-0">
            <h3 className="font-display text-[10px] uppercase tracking-[0.4em] text-white/30 font-700 mb-8">
              Chronologie
            </h3>
          </div>
          <div className="chrono-list flex flex-col gap-0 flex-1">
            {milestones.map((m, i) => (
              <div key={i} className="chrono-item flex items-start gap-6 py-5 border-b border-white/5 group hover:border-ln-lime/20 transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <div className="chrono-dot flex-shrink-0" />
                  <span className="font-display text-xs font-700 tracking-[0.15em] text-ln-lime w-12">{m.year}</span>
                </div>
                <div>
                  <span className="font-display text-base md:text-lg font-600 text-white group-hover:text-ln-lime transition-colors duration-300">{m.label}</span>
                  <span className="block font-body text-xs text-white/30 mt-0.5">{m.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifesteSection;
