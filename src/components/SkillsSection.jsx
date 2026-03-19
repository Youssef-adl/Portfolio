import React from 'react';

/**
 * @typedef {Object} SkillTech
 * @property {string} name - Technology name.
 * @property {number} level - Proficiency level (0-100).
 */

/**
 * @typedef {Object} SkillCategory
 * @property {string} category - Category title (Frontend, Backend, etc.).
 * @property {string} color - Tailwind color class for the heading.
 * @property {SkillTech[]} techs - List of technologies in this category.
 */

/** @type {SkillCategory[]} */
const skills = [
  {
    category: 'Front-end',
    color: 'text-ln-lime',
    techs: [
      { name: 'React 19', level: 92 },
      { name: 'Vite', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Bootstrap 5', level: 88 },
    ]
  },
  {
    category: 'Backend',
    color: 'text-white',
    techs: [
      { name: 'Node.js', level: 88 },
      { name: 'PHP', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'RESTful APIs', level: 90 },
    ]
  },
  {
    category: 'Services & SDK',
    color: 'text-ln-lime',
    techs: [
      { name: 'Google OAuth 2.0', level: 85 },
      { name: 'PayPal SDK', level: 82 },
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 85 },
    ]
  },
  {
    category: 'Outils & Méthodes',
    color: 'text-white',
    techs: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'VS Code', level: 98 },
      { name: 'Agile (Scrum)', level: 90 },
      { name: 'Design (Bauhaus)', level: 80 },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-ln-grey-2 relative overflow-hidden" aria-label="Compétences">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: 'linear-gradient(#D2FF00 1px, transparent 1px), linear-gradient(90deg, #D2FF00 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="ln-container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 reveal-on-scroll">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="ln-divider" aria-hidden="true" />
              <span className="ln-label text-ln-lime">Expertise</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-700 leading-none tracking-tight text-white">
              Stack<br /><span className="text-ln-lime">Technique</span>
            </h2>
          </div>
          <p className="font-body text-white/40 text-sm md:text-base leading-relaxed max-w-xs">
            Un ensemble d'outils modernes pour bâtir des solutions robustes et évolutives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {skills.map((group, groupIdx) => (
            <div key={group.category} className="bg-ln-grey-2 p-8 md:p-10 flex flex-col gap-8 reveal-on-scroll" style={{ transitionDelay: `${groupIdx * 100}ms` }}>
              <h3 className={`font-display text-[11px] uppercase tracking-[0.3em] font-700 ${group.color} mb-2 flex items-center gap-2`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {group.category}
              </h3>
              <ul className="flex flex-col gap-7">
                {group.techs.map((tech) => (
                  <li key={tech.name} className="group/skill">
                    <div className="flex justify-between items-end mb-3">
                      <span className="font-body text-white/80 text-sm group-hover/skill:text-ln-lime transition-colors duration-300">
                        {tech.name}
                      </span>
                      <span className="font-display text-[10px] text-white/20 tracking-widest">{tech.level}%</span>
                    </div>
                    <div className="h-[1px] bg-white/5 w-full relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-ln-lime/40 group-hover/skill:bg-ln-lime transition-all duration-700"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
