import React from 'react';

/**
 * @typedef {Object} ImpactStat
 * @property {string} label - Statistic label.
 * @property {string} value - Statistic value (e.g., "99%", "2s").
 * @property {string} desc - Statistic description.
 */

/**
 * ImpactSection
 * Showcases the tangible technical impact and performance achievements of the developer.
 * 
 * @returns {JSX.Element} The rendered impact section.
 */
const ImpactSection = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-ln-dark-green overflow-hidden" aria-label="About">
      <div className="ln-container">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image Column */}
          <div className="w-full lg:w-5/12 relative aspect-square group flex-shrink-0">
            <div className="absolute inset-0 bg-ln-lime overflow-hidden rounded-2xl">
              <img
                src="/images/hero.png"
                alt="Youssouf Adlani — Developer portrait"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter] duration-700"
              />
            </div>
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-ln-lime opacity-50" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-ln-lime opacity-50" aria-hidden="true" />
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-7/12">
            <div className="flex items-center gap-3 mb-8">
              <div className="ln-divider" aria-hidden="true" />
              <span className="ln-label">À Propos de Moi</span>
            </div>

            <h2 className="font-impact text-5xl md:text-6xl lg:text-7xl font-400 mb-8 leading-none tracking-tight text-ln-white uppercase">
              Développeur<br />
              <span className="text-ln-lime">Full Stack</span>
            </h2>

            <p className="font-display text-ln-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-lg uppercase tracking-tight">
              Passionné par le Clean Code et l'innovation technologique. 
              Spécialisé dans la création d'interfaces performantes et bien architecturées, 
              combinant une maîtrise rigoureuse de React 19, Node.js et PHP avec un sens aigu du design (inspiration Bauhaus).
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 border-t border-ln-white/10 mb-10">
              <div>
                <p className="ln-label mb-3">Front-end</p>
                <p className="font-display text-ln-white/60 text-[10px] uppercase tracking-widest leading-relaxed">React 19, Vite, JavaScript (ES6+), HTML5, CSS3, Bootstrap 5</p>
              </div>
              <div>
                <p className="ln-label mb-3">Backend</p>
                <p className="font-display text-ln-white/60 text-[10px] uppercase tracking-widest leading-relaxed">Node.js, PHP, Python, RESTful APIs, Google OAuth 2.0, PayPal SDK</p>
              </div>
              <div>
                <p className="ln-label mb-3">Bases de données</p>
                <p className="font-display text-ln-white/60 text-[10px] uppercase tracking-widest leading-relaxed">MySQL, MongoDB</p>
              </div>
              <div>
                <p className="ln-label mb-3">Outils</p>
                <p className="font-display text-ln-white/60 text-[10px] uppercase tracking-widest leading-relaxed">Git/GitHub, VS Code, Agile (Scrum/Kanban)</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mb-10">
              <div>
                <p className="font-display text-4xl font-700 text-ln-lime">2</p>
                <p className="font-display text-ln-white/40 text-[9px] uppercase tracking-widest mt-1">Grands Projets</p>
              </div>
              <div>
                <p className="font-display text-4xl font-700 text-ln-white">2026</p>
                <p className="font-display text-ln-white/40 text-[9px] uppercase tracking-widest mt-1">Diplôme ISTA (En cours)</p>
              </div>
            </div>

            <a href="#contact" className="btn-ln-primary">
              Me Contacter
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
