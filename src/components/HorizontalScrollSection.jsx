import React, { useRef, useEffect, useState, useTransition } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * @typedef {Object} Project
 * @property {string} title - The title of the project.
 * @property {string} category - Project category (fullstack, creative, web).
 * @property {string[]} techs - List of technologies used.
 * @property {string} year - Year of completion.
 * @property {string} status - Project status (Terminé, En cours).
 * @property {string} img - Path to the project preview image.
 * @property {string} desc - Short description of the project.
 * @property {string} repo - GitHub repository URL.
 * @property {string} demo - Live demo URL.
 */

/** @type {Project[]} */
const ALL_PROJECTS = [
  {
    title: "Plateforme E-Commerce Full Stack",
    category: "fullstack",
    techs: ["React 19", "Node.js", "PayPal SDK", "Google OAuth"],
    year: "2024",
    status: "Terminé",
    img: "/lexigam.png",
    desc: "Catalogue produit dynamique avec gestion d'état avancée. Authentification Google OAuth 2.0 et intégration PayPal SDK pour transactions temps réel.",
    repo: "https://github.com/Youssef-adl/e-commerce",
    demo: "https://e-commerce-rho-six-61.vercel.app/"
  },
  {
    title: "Immersive Product Experience (Smart Veo / Bauhaus)",
    category: "creative",
    techs: ["React 19", "Three.js", "GSAP", "Vite"],
    year: "2025",
    status: "Terminé",
    img: "/SmartVeo.png",
    desc: "Interface produit premium haute-fidélité avec design minimaliste Bauhaus. Rendu 3D fluide à 60 FPS avec Three.js et animations synchronisées au scroll via GSAP.",
    repo: "https://github.com/Youssef-adl/Product",
    demo: "https://product-two-inky.vercel.app/"
  }
];

const HorizontalScrollSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState(ALL_PROJECTS);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      if (filter === 'all') {
        setProjects(ALL_PROJECTS);
      } else {
        setProjects(ALL_PROJECTS.filter(p => p.category === filter));
      }
    });
  }, [filter]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Refresh ScrollTrigger when projects change
    ScrollTrigger.refresh();

    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: `-${(projects.length - 1) * 100}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `${projects.length * 1000} top`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      }
    );

    return () => { 
      pin.kill(); 
      if (pin.scrollTrigger) pin.scrollTrigger.kill();
    };
  }, [projects]);

  return (
    <div id="projets" className="overflow-hidden bg-ln-dark-green py-20">
      <div className="ln-container mb-12 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-5">
          <div className="ln-divider" aria-hidden="true" />
          <span className="ln-label">Mes Travaux</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl font-700 leading-none tracking-tight text-ln-white text-center mb-10">
          Projets <span className="text-ln-lime">Sélectionnés</span>
        </h2>

        {/* Filters */}
        <div className={`projects-filter transition-opacity duration-300 ${isPending ? 'opacity-50' : 'opacity-100'}`}>
          {['all', 'fullstack', 'creative', 'web'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              disabled={isPending}
            >
              {cat === 'all' ? 'Tous' : cat}
            </button>
          ))}
        </div>
      </div>

      <div ref={triggerRef}>
        <div 
          ref={sectionRef} 
          className="flex flex-row relative"
          style={{ width: `${projects.length * 100}vw` }}
        >
          {projects.map((project, index) => (
            <div key={`${project.title}-${index}`} className="min-h-screen w-screen flex flex-col items-center justify-center px-10 md:px-20 lg:px-40 py-20 relative">
              {/* Decorative Blueprint Lines */}
              <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-ln-lime" />
                <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-ln-lime" />
                <div className="absolute left-1/4 top-0 w-[1px] h-full bg-ln-lime" />
                <div className="absolute right-1/4 top-0 w-[1px] h-full bg-ln-lime" />
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-24 w-full max-w-7xl mx-auto relative z-10">

                {/* Project Image Container */}
                <div
                  className="w-full lg:w-[50%] aspect-video bg-ln-grey-2 relative overflow-hidden group block reveal-on-scroll shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
                  aria-label={`Voir le projet ${project.title}`}
                >
                  {/* Decorative corners */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-ln-lime/30 z-30" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-ln-lime/30 z-30" />
                  
                  <img
                    src={project.img}
                    alt={`Aperçu du projet ${project.title}`}
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                  
                  {/* Status Tag */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="ln-glass-grain px-4 py-2 rounded-full border border-ln-lime/20 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ln-lime animate-pulse" />
                      <span className="text-ln-lime font-mono text-[10px] uppercase tracking-widest">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-6 left-6 z-20" aria-hidden="true">
                    <span className="text-ln-lime font-impact text-5xl md:text-7xl font-700 opacity-[0.07]">0{index + 1}</span>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-ln-dark-green/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center gap-6 z-10">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-ln-lime text-ln-dark-green font-impact uppercase px-8 py-3 tracking-wider hover:bg-white transition-colors">Live Demo</a>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white font-impact uppercase px-8 py-3 tracking-wider hover:bg-white/10 transition-colors">GitHub</a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full lg:w-[50%] lg:py-8 reveal-on-scroll relative">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-ln-lime font-mono text-xs leading-none opacity-50 tracking-widest uppercase">{project.year}</span>
                    <span className="block text-[10px] uppercase opacity-40 mb-1 flex items-center gap-2">
                      <svg className="w-2.5 h-2.5 text-ln-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> Spec.
                    </span>
                    <div className="h-[1px] w-12 bg-ln-lime/20" />
                    <div className="flex flex-wrap gap-1.5">
                      {project.techs.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[8px] font-mono text-white/40 uppercase tracking-tighter">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-impact text-ln-white leading-[0.9] tracking-tighter uppercase mb-6 w-full lg:min-w-[500px]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)' }}>
                    {project.title.split(' (')[0]}
                    {project.title.includes(' (') && (
                      <span className="block text-ln-lime/30 mt-2" style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}>({project.title.split(' (')[1]}</span>
                    )}
                  </h3>

                  <p className="font-body text-ln-white/50 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                    {project.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 text-ln-lime font-impact text-lg uppercase tracking-widest hover:text-white transition-colors"
                    >
                      <span>Explore Demo</span>
                      <div className="w-12 h-12 rounded-full border border-ln-lime/30 flex items-center justify-center group-hover:bg-ln-lime transition-all duration-500 group-hover:border-ln-lime">
                        <svg className="w-5 h-5 text-ln-lime group-hover:text-ln-dark-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default HorizontalScrollSection;
