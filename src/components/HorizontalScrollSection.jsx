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
    demo: "https://github.com/Youssef-adl/e-commerce"
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
    demo: "https://github.com/Youssef-adl/Product"
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
            <div key={`${project.title}-${index}`} className="min-h-screen w-screen flex flex-col items-center justify-center px-10 md:px-20 lg:px-40 py-20">
              <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-32 w-full max-w-7xl mx-auto">

                {/* Project Image */}
                <div
                  className="w-full lg:w-[45%] aspect-video bg-ln-grey-2 relative overflow-hidden group block reveal-on-scroll shadow-2xl"
                  aria-label={`Voir le projet ${project.title}`}
                >
                  <img
                    src={project.img}
                    alt={`Aperçu du projet ${project.title}`}
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-ln-dark-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 z-10">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-ln-primary text-[10px] py-2 px-4 shadow-xl">Live Demo</a>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-ln-ghost text-[10px] py-2 px-4 !border-ln-lime !text-ln-lime shadow-xl">GitHub</a>
                  </div>

                  <div className="absolute top-6 left-6 z-20" aria-hidden="true">
                    <span className="text-ln-lime font-display text-4xl md:text-5xl font-700 opacity-20">0{index + 1}</span>
                  </div>
                  
                  {/* Status Tag */}
                  <div className="absolute top-6 right-6 z-20">
                    <span className="bg-ln-dark-green/80 text-ln-lime font-display text-[9px] font-700 uppercase tracking-widest px-3 py-1.5 border border-ln-lime/20">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full lg:w-[55%] lg:py-8 reveal-on-scroll">
                  <div className="flex items-center gap-4 mb-4 lg:mb-6">
                    <span className="ln-label text-[10px]">{project.year}</span>
                    <div className="w-6 h-[1px] bg-ln-white/20" aria-hidden="true" />
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((t) => (
                        <span key={t} className="font-display text-[8px] font-600 tracking-wider uppercase text-ln-white/40 border border-ln-white/10 px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                  </div>

                  <h3 className="project-slide-title font-display font-700 mb-6 tracking-tight text-ln-white uppercase break-words leading-[1.1]">
                    {project.title}
                  </h3>

                  <p className="font-body text-ln-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                    {project.desc}
                  </p>

                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ln-primary text-[10px] py-3 px-6"
                    >
                      Détails projet
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
