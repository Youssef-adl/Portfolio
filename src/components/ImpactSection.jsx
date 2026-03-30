import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImpactSection = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal cards on scroll
      gsap.from(".bento-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      });

      // Subtle float animation for the hero card
      gsap.to(".hero-glow", {
        x: "random(-20, 20)",
        y: "random(-20, 20)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 px-6 md:px-12 bg-ln-dark-green text-ln-off-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-ln-lime font-impact text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-4">
            Impact <span className="text-ln-off-white/20">&</span> Profil
          </h2>
          <div className="h-1 w-24 bg-ln-lime" />
        </div>

        {/* Bento Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]"
        >
          {/* Card 1: Main Bio (Large) */}
          <div className="md:col-span-3 md:row-span-2 bento-card ln-glass-grain p-8 rounded-3xl flex flex-col justify-between group overflow-hidden">
            <div className="hero-glow ln-bento-hero-glow -top-20 -left-20" />
            <div className="relative z-10">
              <span className="text-ln-lime font-mono text-sm uppercase tracking-widest mb-4 block">Bio / Vision</span>
              <p className="text-2xl md:text-4xl font-space font-medium leading-snug">
                Passionné par l'innovation technologique, avec un profil hybride mêlant <span className="text-ln-lime">rigueur technique</span> et empathie utilisateur. Spécialisé dans les architectures <span className="italic">Web Modernes</span>.
              </p>
            </div>
            <div className="relative z-10 mt-auto flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-ln-lime/30 flex items-center justify-center group-hover:bg-ln-lime transition-all duration-500 group-hover:border-ln-lime">
                <svg className="w-5 h-5 text-ln-lime group-hover:text-ln-dark-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <span className="font-mono text-xs uppercase tracking-tighter opacity-50">Prêt pour de nouveaux défis</span>
            </div>
          </div>

          {/* Card 2: Education (Medium) */}
          <div className="md:col-span-1 md:row-span-2 bento-card ln-glass-grain p-6 rounded-3xl flex flex-col border-white/5 bg-white/[0.02]">
            <span className="text-ln-lime font-mono text-sm uppercase mb-4 block">Formation</span>
            <div className="mt-2">
              <h3 className="text-xl font-space font-bold mb-1">ISTA Témara</h3>
              <p className="text-sm opacity-60 font-mono">Dév. Digital / 2024 — 2026</p>
              <div className="mt-6 space-y-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="block text-[10px] uppercase opacity-40 mb-1">Status</span>
                  <span className="text-sm font-medium">Diplôme en cours</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="block text-[10px] uppercase opacity-40 mb-1 flex items-center gap-2">
                    <svg className="w-2.5 h-2.5 text-ln-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> Spec.
                  </span>
                  <span className="text-sm font-medium">Full-Stack JS/PHP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Metrics (Small) */}
          <div className="md:col-span-1 bento-card ln-glass-grain p-6 rounded-3xl flex flex-col justify-center items-center text-center">
            <span className="text-4xl font-impact text-ln-lime">2+</span>
            <span className="text-[10px] uppercase tracking-widest opacity-60 mt-2">Projets Majeurs</span>
          </div>

          {/* Card 4: Tech Highlight (Small) */}
          <div className="md:col-span-1 bento-card ln-glass-grain p-6 rounded-3xl flex flex-col justify-center items-center text-center">
            <span className="text-4xl font-impact text-blue-400">R19</span>
            <span className="text-[10px] uppercase tracking-widest opacity-60 mt-2">React Architecture</span>
          </div>

          {/* Card 5: Core Stack (Medium Width) */}
          <div className="md:col-span-2 bento-card ln-glass-grain p-6 rounded-3xl flex items-center justify-between group">
            <div>
              <span className="text-ln-lime font-mono text-sm uppercase mb-2 block">Core Stack</span>
              <div className="flex gap-2 mt-3">
                {['Node.js', 'Python', 'MySQL', 'MongoDB'].map(tech => (
                  <span key={tech} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-impact opacity-20 group-hover:opacity-100 transition-opacity duration-700">2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
