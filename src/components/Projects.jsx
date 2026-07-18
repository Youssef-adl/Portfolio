import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../data';
import Tilt from './Tilt';

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll('.project-card');
      cards?.forEach((card) => {
        const img = card.querySelector('.project-img');
        gsap.fromTo(card,
          { y: 80, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%', once: true },
          }
        );
        if (img && !reduce) {
          gsap.fromTo(img,
            { scale: 1.25 },
            {
              scale: 1, ease: 'none',
              scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1 },
            }
          );
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="section-pad-lg relative overflow-hidden bg-transparent">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] glow-accent opacity-15 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="chapter-header">
          <div className="chapter-header-title">Projets — 04</div>
          <div className="mono-font text-[10px] text-text-muted">4 en production</div>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {PROJECTS.map((project, index) => (
            <div key={project.title} className={`project-card grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:col-start-6' : ''}`}>
                <div className="relative overflow-hidden aspect-[4/3] group cursor-none">
                  <img src={project.image} alt={project.title} className="project-img w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
              <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:col-start-1' : ''} space-y-6`}>
                <h3 className="heading-font text-6xl font-bold uppercase tracking-tight">{project.title}</h3>
                <p className="text-xl leading-relaxed text-text-primary/70">{project.tagline}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="mono-font text-[10px] tracking-[0.1em] uppercase px-4 py-2 border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noopener" className="inline-block text-sm uppercase tracking-[0.2em] font-medium border-b border-white pb-1 hover:text-warm hover:border-warm transition-all">
                  Voir le projet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
