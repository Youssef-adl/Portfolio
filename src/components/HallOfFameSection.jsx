import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'LexiGam',
    subtitle: 'E-Commerce Platform',
    year: '2024',
    category: 'Full Stack',
    status: 'Terminé',
    techs: ['React 19', 'Node.js', 'PayPal SDK', 'Google OAuth'],
    desc: 'Catalogue produit dynamique avec gestion d\'état avancée. Authentification Google OAuth 2.0 et intégration PayPal SDK.',
    img: '/lexigam.png',
    demo: 'https://e-commerce-rho-six-61.vercel.app/',
    repo: 'https://github.com/Youssef-adl/e-commerce',
    gradient: 'from-orange-500/20 via-red-500/10 to-transparent',
  },
  {
    title: 'Smart Veo',
    subtitle: 'Immersive 3D Experience',
    year: '2025',
    category: 'Creative / Bauhaus',
    status: 'Terminé',
    techs: ['React 19', 'Three.js', 'GSAP', 'Vite'],
    desc: 'Interface produit premium haute-fidélité avec design minimaliste Bauhaus. Rendu 3D fluide à 60 FPS.',
    img: '/SmartVeo.png',
    demo: 'https://product-two-inky.vercel.app/',
    repo: 'https://github.com/Youssef-adl/Product',
    gradient: 'from-blue-500/20 via-purple-500/10 to-transparent',
  },
  {
    title: 'Portfolio V2',
    subtitle: 'Personal Brand Website',
    year: '2026',
    category: 'Design System',
    status: 'En cours',
    techs: ['React 19', 'Tailwind CSS', 'GSAP', 'Lenis'],
    desc: 'Portfolio personnel inspiré du design automobile. Animations au scroll et identité visuelle unique.',
    img: '/images/hero.png',
    demo: '#',
    repo: 'https://github.com/Youssef-adl/Portfolio',
    gradient: 'from-ln-lime/20 via-green-500/10 to-transparent',
  },
  {
    title: 'React 19',
    subtitle: 'Frontend Architecture',
    year: '2024-25',
    category: 'Core Stack',
    status: 'Expert',
    techs: ['Hooks', 'Suspense', 'Server Components', 'Transitions'],
    desc: 'Maîtrise des nouvelles fonctionnalités React 19 avec architectures modernes et patterns avancés.',
    img: null,
    demo: null,
    repo: null,
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  {
    title: 'Three.js',
    subtitle: '3D & WebGL',
    year: '2025',
    category: 'Creative Dev',
    status: 'Avancé',
    techs: ['Scenes', 'Shaders', 'Animations', 'Post-processing'],
    desc: 'Création d\'expériences immersives en 3D avec rendu temps réel et animations fluides.',
    img: null,
    demo: null,
    repo: null,
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
  {
    title: 'GSAP',
    subtitle: 'Motion Design',
    year: '2024-26',
    category: 'Animation',
    status: 'Expert',
    techs: ['ScrollTrigger', 'Timeline', 'Stagger', 'MorphSVG'],
    desc: 'Animations haute performance pour le web : scroll-triggered, timelines complexes et micro-interactions.',
    img: null,
    demo: null,
    repo: null,
    gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
  },
];

const years = ['2024', '2025', '2026'];

const HallOfFameSection = () => {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.year.includes(activeFilter));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hall-item', {
        scale: 0.8,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.hall-grid', start: 'top 80%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projets"
      className="py-28 md:py-40 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080a04 0%, #060804 50%, #080a04 100%)' }}
    >
      <div className="ln-container relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 reveal-on-scroll">
          <div className="section-divider" />
          <span className="section-label">Galerie de Créations</span>
        </div>
        <h2 className="font-display text-6xl md:text-8xl font-700 tracking-tight text-white leading-none mb-4 reveal-on-scroll">
          HALL OF <span className="text-ln-lime">FAME</span>
        </h2>
        <p className="font-body text-white/35 text-sm max-w-md mb-10 reveal-on-scroll">
          Chaque projet est une création unique. Explorez mon univers à travers mes réalisations et technologies maîtrisées.
        </p>

        {/* Year Filter */}
        <div className="flex items-center gap-3 mb-12 reveal-on-scroll">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 font-display text-[10px] font-700 uppercase tracking-[0.2em] border transition-all duration-300 ${
              activeFilter === 'all'
                ? 'border-ln-lime text-ln-lime bg-ln-lime/10'
                : 'border-white/10 text-white/40 hover:border-white/30'
            }`}
          >
            Tous
          </button>
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setActiveFilter(y)}
              className={`px-4 py-2 font-display text-[10px] font-700 uppercase tracking-[0.2em] border transition-all duration-300 ${
                activeFilter === y
                  ? 'border-ln-lime text-ln-lime bg-ln-lime/10'
                  : 'border-white/10 text-white/40 hover:border-white/30'
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="hall-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              className="hall-item helmet-grid-item rounded-xl flex flex-col group"
              onMouseEnter={() => setHoveredItem(i)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image or gradient */}
              {project.img ? (
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060804] via-transparent to-transparent" />
                </div>
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl`} />
              )}

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col justify-between h-full p-5">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="font-display text-[8px] font-700 uppercase tracking-[0.25em] text-ln-lime bg-ln-lime/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <span className="font-display text-[9px] font-600 text-white/30">{project.year}</span>
                </div>

                {/* Bottom */}
                <div className="mt-auto pt-8">
                  <h3 className="font-display text-xl md:text-2xl font-700 text-white group-hover:text-ln-lime transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-body text-[10px] text-white/40 mt-1">{project.subtitle}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.techs.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[7px] font-display uppercase tracking-wider text-white/40 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  {project.demo && (
                    <div className={`flex items-center gap-4 mt-4 transition-all duration-500 ${hoveredItem === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="font-display text-[9px] font-700 uppercase tracking-[0.2em] text-ln-lime hover:text-white transition-colors">
                        Demo →
                      </a>
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="font-display text-[9px] font-700 uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                          GitHub →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HallOfFameSection;
