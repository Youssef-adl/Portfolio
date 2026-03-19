import React from 'react';

const education = [
  {
    period: '2024 — 2026',
    school: 'ISTA Témara',
    degree: 'Technicien Spécialisé — Développement Web Full Stack',
    type: 'Formation',
    desc: 'Formation en développement full stack : React, Node.js, PHP, MySQL, MongoDB, API REST, Agile/Scrum. (En cours)',
    accent: 'ln-lime',
    current: true,
  },
  {
    period: '2024',
    school: 'Lycée Imam El Boukhari — Témara',
    degree: 'Baccalauréat Sciences Physiques',
    type: 'Diplôme',
    desc: "Obtention du baccalauréat avec une base solide en mathématiques et physique.",
    accent: 'ln-accent',
    current: false,
  },
];

const languages = [
  { lang: 'Arabe', level: 'Langue maternelle', pct: 100 },
  { lang: 'Français', level: 'Intermédiaire (B1)', pct: 70 },
  { lang: 'Anglais', level: 'Débutant (A2)', pct: 40 },
];

const interests = [
  'Veille technologique (IA, Web3, Open Source)',
  'Mentorat & pair programming',
  'Démarche Agile',
  'Gaming stratégie',
  'Natation',
  'Randonnée',
];

const EducationSection = () => {
  return (
    <section
      className="py-24 md:py-32 bg-ln-dark-green relative overflow-hidden"
      aria-label="Formation et parcours"
    >
      <div className="ln-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

          {/* ── Left: Education Timeline ── */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="ln-divider" aria-hidden="true" />
              <span className="ln-label">Formation</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-700 leading-none tracking-tight text-ln-white mb-14">
              Mon<br /><span className="text-ln-lime">Parcours</span>
            </h2>

            {/* Timeline */}
            <ol className="relative flex flex-col gap-0">
              {education.map((item, i) => (
                <li key={i} className="relative pl-10 pb-12 last:pb-0">
                  {/* Connector line */}
                  {i < education.length - 1 && (
                    <div className="absolute left-[7px] top-4 bottom-0 w-[1px] bg-ln-white/10" aria-hidden="true" />
                  )}
                  {/* Dot */}
                  <div
                    className={`absolute left-0 top-1 w-[15px] h-[15px] rounded-full border-2 ${item.current ? 'bg-ln-lime border-ln-lime' : 'bg-transparent border-ln-white/30'}`}
                    aria-hidden="true"
                  />

                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-display text-[10px] tracking-widest uppercase text-ln-white/30">{item.period}</span>
                      {item.current && (
                        <span className="bg-ln-lime text-ln-dark-green font-display text-[8px] font-700 uppercase tracking-wider px-2 py-0.5">En cours</span>
                      )}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-700 text-ln-white leading-tight mb-1">
                      {item.degree}
                    </h3>
                    <p className="font-body text-ln-white/40 text-xs uppercase tracking-widest mb-3">{item.school}</p>
                    <p className="font-body text-ln-white/50 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* ── Right: Languages + Interests ── */}
          <div className="flex flex-col gap-16">
            {/* Languages */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="ln-divider" aria-hidden="true" />
                <span className="ln-label">Langues</span>
              </div>
              <ul className="flex flex-col gap-6">
                {languages.map((l) => (
                  <li key={l.lang}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-display text-lg font-600 text-ln-white">{l.lang}</span>
                      <span className="font-body text-xs text-ln-white/30 uppercase tracking-widest">{l.level}</span>
                    </div>
                    <div
                      className="h-[2px] bg-ln-white/10 w-full"
                      role="progressbar"
                      aria-valuenow={l.pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${l.lang}: ${l.level}`}
                    >
                      <div
                        className="h-full bg-ln-lime transition-all duration-700"
                        style={{ width: `${l.pct}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interests */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="ln-divider" aria-hidden="true" />
                <span className="ln-label">Centres d'intérêt</span>
              </div>
              <ul className="flex flex-wrap gap-3" aria-label="Centres d'intérêt">
                {interests.map((interest) => (
                  <li
                    key={interest}
                    className="font-display text-[11px] uppercase tracking-[0.15em] text-ln-white/60 border border-ln-white/15 px-4 py-2 hover:border-ln-lime hover:text-ln-lime transition-colors duration-250 cursor-default"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
