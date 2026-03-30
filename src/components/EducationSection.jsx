import React, { useState } from 'react';

/* ─────────────────────
   Data
───────────────────── */
const education = [
  {
    period: '2024 — 2026',
    school: 'ISTA Témara — OFPPT',
    degree: 'Développement Digital',
    sub: 'Technicien Spécialisé',
    desc: 'Technicien Spécialisé, option Web Full-Stack. Maîtrise des architectures MVC, API REST et frameworks modernes (React 19, Laravel).',
    current: true,
    icon: 'fa-graduation-cap',
  },
  {
    period: '2024',
    school: 'Lycée El-Hassan II',
    degree: 'Baccalauréat Scientifique',
    sub: 'Science Physique et Chimique',
    desc: "Science Physique et Chimique. Solides bases en mathématiques et logique de résolution de problèmes.",
    current: false,
    icon: 'fa-scroll',
  },
];

const languages = [
  { lang: 'Arabe',   flag: '🇲🇦', level: 'Langue Maternelle', pct: 100, color: '#D2FF00' },
  { lang: 'Français',flag: '🇫🇷', level: 'Niveau B1 (Indépendant Intermédiaire)', pct: 65,  color: '#61DAFB' },
  { lang: 'Anglais', flag: '🇬🇧', level: 'Niveau A2 (Élémentaire)', pct: 45,  color: '#F29111' },
];

const interests = [
  { icon: 'fa-microchip', label: 'IA & Web3'         },
  { icon: 'fa-code-branch', label: 'Open Source'        },
  { icon: 'fa-users-between-lines', label: 'Pair Programming'   },
  { icon: 'fa-bolt-lightning', label: 'Agile / Scrum'      },
  { icon: 'fa-gamepad', label: 'Gaming Stratégie'   },
  { icon: 'fa-person-swimming', label: 'Natation'           },
  { icon: 'fa-mountain-sun', label: 'Randonnée'          },
];

/* ─────────────────────
   Interest chip
───────────────────── */
const InterestChip = ({ icon, label }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-default select-none transition-all duration-300"
      style={{
        background: hov ? 'rgba(210,255,0,0.1)' : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hov ? 'rgba(210,255,0,0.4)' : 'rgba(255,255,255,0.08)'}`,
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov ? '0 8px 20px rgba(210,255,0,0.08)' : 'none',
      }}
    >
      {icon === 'fa-microchip' && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>}
      {icon === 'fa-code-branch' && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h1M8 7H6a2 2 0 00-2 2v2a2 2 0 002 2h1M18 15v2a2 2 0 01-2 2h-1m2-2h-1" /></svg>}
      {icon === 'fa-users-between-lines' && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
      {icon === 'fa-bolt-lightning' && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
      {icon === 'fa-gamepad' && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 10l-2 2m0 0l2 2m-2-2h4.5M18 10l2 2m0 0l-2 2m2-2h-4.5M12 12m-4.5 0c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5zM12 12v0" /></svg>}
      {icon === 'fa-person-swimming' && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} { /* Placeholder swim */ }
      {icon === 'fa-mountain-sun' && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18M3 10l6-6 6 6m-5 0l5 5 5-5" /></svg>}
      <span
        className="font-display text-[10px] font-700 uppercase tracking-[0.15em] transition-colors duration-300"
        style={{ color: hov ? '#D2FF00' : 'rgba(255,255,255,0.45)' }}
      >
        {label}
      </span>
    </div>
  );
};

/* ─────────────────────
   Language bar
───────────────────── */
const LangBar = ({ lang, flag, level, pct, color }) => (
  <div className="flex flex-col gap-2 group">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-lg leading-none">{flag}</span>
        <span className="font-display text-base font-700 text-white group-hover:text-ln-lime transition-colors duration-300">
          {lang}
        </span>
      </div>
      <span className="font-display text-[9px] uppercase tracking-[0.25em] text-white/30">{level}</span>
    </div>
    <div className="h-[3px] bg-white/8 rounded-full overflow-hidden w-full relative">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{
          width: `${pct}%`,
          background: `linear-gradient(90deg, ${color}99, ${color})`,
          boxShadow: `0 0 8px ${color}66`,
        }}
      />
    </div>
  </div>
);

/* ─────────────────────
   Timeline item
───────────────────── */
const TimelineItem = ({ item, index, total }) => {
  const [hov, setHov] = useState(false);
  return (
    <li className="relative pl-12 pb-10 last:pb-0">
      {/* Connector line */}
      {index < total - 1 && (
        <div
          className="absolute left-[17px] top-6 bottom-0 w-[2px]"
          style={{
            background: 'linear-gradient(180deg, rgba(210,255,0,0.4) 0%, rgba(210,255,0,0.05) 100%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Dot */}
      <div
        className="absolute left-0 top-1 w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all duration-300"
        style={{
          background: item.current
            ? 'rgba(210,255,0,0.15)'
            : 'rgba(255,255,255,0.04)',
          border: `2px solid ${item.current ? '#D2FF00' : 'rgba(255,255,255,0.15)'}`,
          boxShadow: item.current ? '0 0 16px rgba(210,255,0,0.25)' : 'none',
        }}
        aria-hidden="true"
      >
        {item.icon === 'fa-graduation-cap' && (
          <svg className="w-5 h-5 text-ln-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 14zm0 0v7m-7-7a12.083 12.083 0 01.665-6.479L12 14l-5.335 2.521A12.083 12.083 0 005 21V14z" />
          </svg>
        )}
        {item.icon === 'fa-scroll' && (
          <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )}
      </div>

      {/* Card */}
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="p-5 rounded-xl transition-all duration-300 cursor-default"
        style={{
          background: hov ? 'rgba(210,255,0,0.04)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${hov ? 'rgba(210,255,0,0.2)' : 'rgba(255,255,255,0.06)'}`,
        }}
      >
        {/* Period + badge */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-display text-[9px] tracking-[0.3em] uppercase text-white/30">
            {item.period}
          </span>
          {item.current && (
            <span
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full font-display text-[8px] font-700 uppercase tracking-wider"
              style={{ background: 'rgba(210,255,0,0.15)', color: '#D2FF00', border: '1px solid rgba(210,255,0,0.3)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ln-lime animate-pulse" />
              En cours
            </span>
          )}
        </div>

        {/* Degree */}
        <h3 className="font-display text-lg md:text-xl font-700 text-white leading-tight mb-0.5">
          {item.degree}
        </h3>
        <p className="font-display text-[11px] uppercase tracking-[0.2em] text-ln-lime mb-1">{item.sub}</p>
        <p className="font-body text-[10px] uppercase tracking-widest text-white/30 mb-3">{item.school}</p>
        <p className="font-body text-sm leading-relaxed text-white/50">{item.desc}</p>
      </div>
    </li>
  );
};

/* ─────────────────────
   Main component
───────────────────── */
const EducationSection = () => (
  <section
    id="experience"
    className="py-24 md:py-36 relative overflow-hidden"
    style={{ background: 'linear-gradient(160deg, #0b0f06 0%, #13180d 50%, #0e1209 100%)' }}
    aria-label="Formation et parcours"
  >
    {/* BG accent */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(210,255,0,0.025) 0%, transparent 65%)' }}
      aria-hidden="true"
    />

    <div className="ln-container relative z-10">

      {/* ── Section header ── */}
      <div className="flex items-center gap-3 mb-5 reveal-on-scroll">
        <div className="ln-divider" aria-hidden="true" />
        <span className="ln-label">Formation & Parcours</span>
      </div>
      <h2 className="font-display text-5xl md:text-7xl font-700 leading-none tracking-tight text-white mb-20 reveal-on-scroll">
        Mon <span className="text-ln-lime">Parcours</span>
      </h2>

      {/* ── Two-column grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* LEFT — Timeline */}
        <div className="reveal-on-scroll flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-4 h-4 text-ln-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-white/40">Éducation</span>
          </div>

          <ol className="flex flex-col">
            {education.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} total={education.length} />
            ))}
          </ol>
        </div>

        {/* RIGHT — Languages + Interests */}
        <div className="flex flex-col gap-14">
          
          {/* Languages */}
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-4 h-4 text-ln-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5c-1.383 4.417-4.14 8.167-7.751 11" /></svg>
              <span className="font-display text-[10px] uppercase tracking-[0.3em] text-white/40">Langues</span>
            </div>
            <div
              className="p-6 rounded-xl flex flex-col gap-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {languages.map((l) => (
                <LangBar key={l.lang} {...l} />
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-4 h-4 text-ln-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              <span className="font-display text-[10px] uppercase tracking-[0.3em] text-white/40">Centres d'intérêt</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <InterestChip key={item.label} {...item} />
              ))}
            </div>
          </div>

          {/* Bottom decorative stat */}
          <div
            className="p-6 rounded-xl flex items-center gap-6 mt-auto"
            style={{
              background: 'rgba(210,255,0,0.05)',
              border: '1px solid rgba(210,255,0,0.15)',
            }}
          >
            <div>
              <p className="font-display text-4xl font-700 text-ln-lime leading-none">3</p>
              <p className="font-display text-[9px] uppercase tracking-[0.25em] text-white/30 mt-1">Langues</p>
            </div>
            <div className="h-10 w-[1px] bg-white/10" aria-hidden="true" />
            <p className="font-body text-sm text-white/40 leading-relaxed">
              Arabe natif, Français courant et Anglais technique pour la lecture de documentation.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default EducationSection;
