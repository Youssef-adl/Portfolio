import React, { useState } from 'react';

/* ─────────────────────────────────────────────
   SVG ICONS (inline, zero deps)
───────────────────────────────────────────── */
const Icon = ({ children, size = 40 }) => (
  <svg viewBox="0 0 128 128" width={size} height={size} aria-hidden="true">
    {children}
  </svg>
);

const ICONS = {
  react: <Icon size={38}><circle cx="64" cy="64" r="11.4" fill="#61DAFB"/><g fill="none" stroke="#61DAFB" strokeWidth="5.5"><ellipse rx="44" ry="17" cx="64" cy="64"/><ellipse rx="44" ry="17" cx="64" cy="64" transform="rotate(60 64 64)"/><ellipse rx="44" ry="17" cx="64" cy="64" transform="rotate(120 64 64)"/></g></Icon>,
  vite: <Icon size={38}><path d="M120.4 12.5L67.2 119.2c-1.1 2.1-4.1 2.1-5.2 0L7 12.5c-1.2-2.3.8-5 3.4-4.5l52.7 9.8c.6.1 1.2.1 1.8 0l51.1-9.8c2.6-.5 4.6 2.2 3.4 4.5z" fill="#BD34FE"/><path d="M87.5 8.3l-38 7c-.7.1-1.2.7-1.2 1.4l-2.5 48.7c0 .8.8 1.4 1.6 1.2l10.6-2.4c.8-.2 1.6.5 1.5 1.4l-3.2 22.3c-.1.9.8 1.5 1.6 1.2l6.6-2c.8-.3 1.7.3 1.6 1.2l-5.1 35.2c-.2 1.2 1.4 1.8 2.1.8l1.1-1.7L104 38.9c.5-.8-.1-1.8-1.1-1.7l-10.9 2.1c-.8.2-1.6-.5-1.4-1.3l6.1-28.3c.2-.8-.5-1.5-1.3-1.4H87.5z" fill="#FFD62E"/></Icon>,
  js: <Icon size={38}><rect width="128" height="128" rx="6" fill="#F7DF1E"/><path d="M109 97c0 10.2-6 16.5-14.8 16.5-7.9 0-12.5-4.1-14.8-9.1l8-4.8c1.5 2.7 2.9 5 6.3 5 3.2 0 5.2-1.2 5.2-6V60.2h9.1V97zM74.2 96c0 8.4-4.9 15-13.5 15-8 0-12.7-4.2-15-10.3l8-4.6c2 3.3 4.1 5.8 8 5.8 3.3 0 5.4-1.6 5.4-6.2V60.2h7.1V96z"/></Icon>,
  html: <Icon size={38}><path d="M19.4 111.3L8.8 0h110.4l-10.7 111.3L64 126z" fill="#E44D26"/><path d="M64 117.7l36.6-10.1 9.1-102H64z" fill="#F16529"/><path d="M64 52.5H45.5l-1.3-14.5H64V24H28.7l.3 3.7 3.5 39.3H64zm0 41.6l-.1.1-15.3-4.1-.9-11H34.1l1.9 21 28 7.8.1-.1z" fill="#EBEBEB"/><path d="M64 52.5v13.5h17.3l-1.6 18.2L64 88.1v14l28.1-7.8.2-2.4 3.2-36.1.3-3.3H64zm0-28.5v14h33.4l.3-3.2.6-7.3.3-3.5z" fill="#fff"/></Icon>,
  css: <Icon size={38}><path d="M19.4 111.3L8.8 0h110.4l-10.7 111.3L64 126z" fill="#1572B6"/><path d="M64 117.7l36.6-10.1 9.1-102H64z" fill="#33A9DC"/><path d="M64 52.5H45.5l1.3 14.5H64V52.5zM64 24H28.7l.3 3.7 1.3 13.8H64V24z" fill="#fff"/><path d="M64 88.1l-.1.1-15.3-4.1-.9-11H34.1l1.9 21 28 7.8.1-.1V88.1z" fill="#EBEBEB"/><path d="M64 67h17.3l-1.6 18.2L64 88.1v13l28.1-7.8.2-2.4 3.2-36.1.3-3.3H64V67zm0-43h33.4l.3-3.2.6-7.3.3-3.5H64v14z" fill="#fff"/></Icon>,
  bootstrap: <Icon size={38}><rect width="128" height="128" rx="14" fill="#6f42c1"/><path d="M28 24h43c8 0 13.5 1.3 17 4 3.4 2.6 5.2 6.8 5.2 12.3 0 5-1.3 8.7-3.9 11.3-1.6 1.6-4.1 3-7.2 4.1 4.7 1.1 8.2 3 10.5 5.8 2.4 2.8 3.6 6.6 3.6 11.3 0 4-1 7.5-3.1 10.5-2 3-4.9 5.2-8.8 6.7-2.4.9-5.2 1.4-8.5 1.5l-.3.1H28V24zm13.5 24.5h24.8c3.5-.1 6-.8 7.7-2.1 1.7-1.3 2.5-3.3 2.5-5.9 0-2.6-.9-4.6-2.6-5.8-1.7-1.2-4.4-1.8-8.2-1.8H41.5v15.6zm0 25.4h27c3.7-.2 6.5-.9 8.2-2.3 1.8-1.4 2.6-3.5 2.6-6.3 0-2.7-.9-4.7-2.8-6.1-1.9-1.4-5-2.1-9.2-2.1H41.5v16.8z" fill="#fff"/></Icon>,
  nodejs: <Icon size={38}><path d="M116.6 66.7L64.1 97.8 11.4 66.7V35.5L64.1 4.4l52.5 31.1v31.2z" fill="#3C873A"/><path fill="#fff" d="M65.6 68.7V23.4l15.8 9.1V59l14.3-8.3V14.3L64.1 2.2 32.3 20.3v53.7L64 92.2l33.3-19.2v-7.6l-14.5 8.4L65.6 68.7z"/><path fill="#fff" d="M64.1 92.2L32.3 74V20.3l14.3 8.3v35.5l17.5 10.1V92.2z"/></Icon>,
  php: <Icon size={38}><ellipse cx="64" cy="64" rx="62" ry="38" fill="#6181B6"/><path d="M34 46l-8 36h10l3-12h10c10 0 19-7 21-16 1-6-4-8-10-8H34zm12 10h8c3 0 5 1 4 5-1 3-4 5-7 5h-8l3-10zM76 46l-8 36h10l3-12h10c10 0 19-7 21-16 1-6-4-8-10-8H76zm12 10h8c3 0 5 1 4 5-1 3-4 5-7 5h-8l3-10zM52 58l-3 12H37l3-12h12z" fill="#fff"/></Icon>,
  python: <Icon size={38}><path d="M63.4 8C45.2 8 33 16 33 28v12h31v4H22C10 44 2 55 2 68s8 24 20 28l1 .3v-12c0-10 11-18 26-18h30c15 0 27-11 27-25V25C106 14 86 8 63.4 8zm-14.6 11a7 7 0 110 14 7 7 0 010-14z" fill="#3670A0"/><path d="M103 44l-1-.3v12c0 10-11 18-26 18H46c-15 0-27 11-27 25v15c0 11 20 17 42.6 17C79.8 121 92 113 92 101V89H61v-4h51c12 0 20-11 20-24s-8-24-20-28l-1-.3-7.7.3zm-18.4 60a7 7 0 110 14 7 7 0 010-14z" fill="#FFD43B"/></Icon>,
  mysql: <Icon size={38}><path d="M116 67c-4-1-7-1-10 1l-3 1s-.4-4-3-6l-1-1 1-2c1-3 1-9-2-15-2-5-8-8-14-8-5 0-10 2-13 5a23 23 0 00-6 14c-5 1-10 5-12 9a23 23 0 00-1 22c2 4 6 7 10 9 3 1 7 2 11 2h14c3 0 7-1 10-3l2-1s2 3 6 4c3 1 7 1 9-1h1l2-1c1 0 2-2 3-3 1-2 2-5 1-8 0-4-2-7-5-9z" fill="#00758F"/><path d="M116 67c-4-1-7-1-10 1-3 1-4 3-4 6s2 5 4 6l9 2c3 0 5-1 6-3 1-1 1-3 0-5-1-3-2-5-5-7z" fill="#F29111"/></Icon>,
  mongodb: <Icon size={38}><path d="M105.5 56.5C101 26 81 15.8 65 15.1c-1.2 17-4.6 25.5-10.5 37-9 17.4-9.5 37-2 55 5.5 13 16 22 29 25 5-17.5 12.5-38.5 13.5-57.5.3-6.4.7-12.2.5-18.1z" fill="#10AA50"/><path d="M64 121c-3-4-6-8-7.5-14 2 .5 5 0 7.5-1.5v15.5z" fill="#B8C4C2"/><path d="M45 107c-10-15-13-35-8-55C42.5 29.4 54 22.8 64 15c0 0 0 91-19 92z" fill="#12924F"/></Icon>,
  git: <Icon size={38}><path d="M124.7 58.3L69.7 3.3a11.3 11.3 0 00-16 0l-11.3 11.3 14.3 14.3a13.4 13.4 0 0117 17.1L87.5 59.7a13.4 13.4 0 11-7.7 7.6L66.5 54v35.4a13.4 13.4 0 11-11 0V52.7a13.4 13.4 0 01-7.2-17.6L34 20.7 3.4 51.3a11.3 11.3 0 000 16l55 55a11.3 11.3 0 0016 0l50.3-50.3a11.3 11.3 0 000-13.7z" fill="#F34F29"/></Icon>,
  github: <Icon size={38}><path fillRule="evenodd" clipRule="evenodd" d="M64 6C31.3 6 5 32.3 5 65c0 26.1 16.9 48.2 40.4 56 3 .5 4-1.3 4-2.8v-10c-16.5 3.6-20-7.9-20-7.9-2.7-6.8-6.6-8.6-6.6-8.6-5.4-3.7.4-3.6.4-3.6 6 .4 9.2 6.2 9.2 6.2 5.3 9.1 14 6.5 17.4 5 .5-3.8 2.1-6.5 3.8-8-13.2-1.5-27.1-6.6-27.1-29.4 0-6.5 2.3-11.8 6.1-15.9-.6-1.5-2.6-7.5.6-15.7 0 0 5-1.6 16.3 6.1A56.7 56.7 0 0164 37.4c5.1 0 10.2.7 15 2.1 11.3-7.7 16.3-6.1 16.3-6.1 3.2 8.2 1.2 14.2.6 15.7 3.8 4.1 6.1 9.4 6.1 15.9 0 22.8-13.9 27.9-27.2 29.3 2.1 1.8 4 5.5 4 11.1v16.5c0 1.6 1 3.4 4.1 2.8C106.1 113.2 123 91.1 123 65c0-32.7-26.3-59-59-59z" fill="#fff"/></Icon>,
  vscode: <Icon size={38}><clipPath id="vsc"><path d="M90 4.3L48.7 44.1 25 25.3 4.7 31.7v64.6L25 102.7l23.7-18.8L90 123.7l33.3-12.1V16.4L90 4.3z"/></clipPath><linearGradient id="vscg" x1="64" y1="4.3" x2="64" y2="123.7" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1A86FD"/><stop offset="1" stopColor="#0065A9"/></linearGradient><path clipPath="url(#vsc)" d="M90 4.3L48.7 44.1 25 25.3 4.7 31.7v64.6L25 102.7l23.7-18.8L90 123.7l33.3-12.1V16.4L90 4.3z" fill="url(#vscg)"/></Icon>,
  google: <Icon size={38}><path d="M120 64c0-3.4-.3-6.7-.8-9.9H64v18.7h31.4c-1.4 7.3-5.5 13.5-11.7 17.7v14.7h19C113.8 95.2 120 80.1 120 64z" fill="#4285F4"/><path d="M64 122c15.8 0 29-5.2 38.7-14.1L83.7 93.2c-5.2 3.5-11.9 5.6-19.7 5.6-15.1 0-27.9-10.2-32.5-23.9H11.4v15.2C21.1 110.1 41.1 122 64 122z" fill="#34A853"/><path d="M31.5 74.9c-1.2-3.5-1.8-7.2-1.8-11s.7-7.5 1.8-11V37.7H11.4A57.8 57.8 0 006 64c0 9.3 2.2 18.1 6.1 26l19.4-15.1z" fill="#FBBC05"/><path d="M64 26.1c8.5 0 16.1 2.9 22.1 8.7l16.5-16.5C93 8.8 79.8 3 64 3 41.1 3 21.1 14.9 11.4 37.7l20.1 15.6C36.1 39.3 48.9 26.1 64 26.1z" fill="#EA4335"/></Icon>,
  paypal: <Icon size={38}><path d="M107 32c-2-12-12-18-26-18H37a4 4 0 00-4 3L19 115a2.4 2.4 0 002.4 2.8h17.3l4.3-28h13.9c22.6 0 39-11.5 42.7-33.4.6-3.5.7-6.7.4-9.9V32z" fill="#009EE3"/><path d="M54 50h15c7 0 12 1.4 15 4.3C86 62 82 72 72 74H57l-3 20H39l-4 23H18l14-98h29c14 0 24 6 26 18" fill="#113984"/></Icon>,
};

/* ─────────────────────────────────────────────
   SKILL DATA
───────────────────────────────────────────── */
const groups = [
  {
    category: 'Front-end',
    glow: '#61DAFB',
    accent: '#61DAFB22',
    border: '#61DAFB33',
    techs: [
      { name: 'React 19',       icon: ICONS.react      },
      { name: 'Vite',           icon: ICONS.vite       },
      { name: 'JavaScript',     icon: ICONS.js         },
      { name: 'HTML5',          icon: ICONS.html       },
      { name: 'CSS3',           icon: ICONS.css        },
      { name: 'Bootstrap 5',    icon: ICONS.bootstrap  },
    ],
  },
  {
    category: 'Back-end',
    glow: '#8CC84B',
    accent: '#8CC84B22',
    border: '#8CC84B33',
    techs: [
      { name: 'Node.js',        icon: ICONS.nodejs  },
      { name: 'PHP',            icon: ICONS.php     },
      { name: 'Python',         icon: ICONS.python  },
    ],
  },
  {
    category: 'Databases',
    glow: '#F29111',
    accent: '#F2911122',
    border: '#F2911133',
    techs: [
      { name: 'MySQL',          icon: ICONS.mysql    },
      { name: 'MongoDB',        icon: ICONS.mongodb  },
    ],
  },
  {
    category: 'Services',
    glow: '#FBBC05',
    accent: '#FBBC0522',
    border: '#FBBC0533',
    techs: [
      { name: 'Google OAuth',   icon: ICONS.google   },
      { name: 'PayPal SDK',     icon: ICONS.paypal   },
    ],
  },
  {
    category: 'Tools',
    glow: '#D2FF00',
    accent: '#D2FF0018',
    border: '#D2FF0033',
    techs: [
      { name: 'Git',            icon: ICONS.git     },
      { name: 'GitHub',         icon: ICONS.github  },
      { name: 'VS Code',        icon: ICONS.vscode  },
    ],
  },
];

/* ─────────────────────────────────────────────
   SKILL BADGE
───────────────────────────────────────────── */
const SkillBadge = ({ name, icon, glow }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center gap-3 p-4 rounded-lg cursor-default select-none transition-all duration-300"
      style={{
        background: hovered ? `${glow}14` : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? glow + '55' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? `0 0 20px ${glow}22` : 'none',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="transition-all duration-300"
        style={{
          filter: hovered ? `drop-shadow(0 0 8px ${glow}cc)` : 'none',
          transform: hovered ? 'scale(1.12)' : 'scale(1)',
          display: 'block',
        }}
      >
        {icon}
      </span>
      <span
        className="font-display text-[10px] font-600 uppercase tracking-[0.15em] text-center leading-tight transition-colors duration-300"
        style={{ color: hovered ? '#fff' : 'rgba(255,255,255,0.45)' }}
      >
        {name}
      </span>
    </div>
  );
};

/* ─────────────────────────────────────────────
   GROUP CARD
───────────────────────────────────────────── */
const GroupCard = ({ group, delay }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="reveal-on-scroll rounded-xl p-6 flex flex-col gap-5 transition-all duration-500"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${group.accent}, rgba(255,255,255,0.02))`
          : 'rgba(255,255,255,0.025)',
        border: `1px solid ${hovered ? group.border : 'rgba(255,255,255,0.06)'}`,
        boxShadow: hovered ? `0 8px 40px ${group.glow}18` : 'none',
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center gap-2 pb-4" style={{ borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
        <span
          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
          style={{ background: group.glow, boxShadow: `0 0 8px ${group.glow}` }}
        />
        <h3
          className="font-display text-[11px] font-700 uppercase tracking-[0.3em]"
          style={{ color: group.glow }}
        >
          {group.category}
        </h3>
      </div>

      {/* Badges grid */}
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(${Math.min(group.techs.length, 3)}, 1fr)` }}
      >
        {group.techs.map((tech) => (
          <SkillBadge key={tech.name} {...tech} glow={group.glow} />
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
const SkillsSection = () => (
  <section
    id="skills"
    className="py-24 md:py-36 relative overflow-hidden"
    style={{ background: 'linear-gradient(180deg,#13180d 0%,#0e1208 100%)' }}
    aria-label="Compétences"
  >
    {/* Animated background dots */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.035]"
      style={{
        backgroundImage:
          'radial-gradient(circle, #D2FF00 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
      aria-hidden="true"
    />

    {/* Radial glow top-right */}
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 80% 20%, rgba(210,255,0,0.05) 0%, transparent 65%)',
      }}
      aria-hidden="true"
    />

    <div className="ln-container relative z-10">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-on-scroll">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="ln-divider" aria-hidden="true" />
            <span className="ln-label text-ln-lime">Expertise</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-700 leading-none tracking-tight text-white">
            Stack<br />
            <span className="text-ln-lime">Technique</span>
          </h2>
        </div>
        <p className="font-body text-white/35 text-sm md:text-base leading-relaxed max-w-xs">
          Des outils modernes pour bâtir des solutions robustes, évolutives et performantes.
        </p>
      </div>

      {/* ── Bento Grid Layout ── */}
      <div className="flex flex-col gap-6">

        {/* Row 1: Front-end (wide) + Backend */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Front-end — spans 3 cols */}
          <div className="lg:col-span-3">
            <GroupCard group={groups[0]} delay={0} />
          </div>
          {/* Backend — spans 2 cols */}
          <div className="lg:col-span-2">
            <GroupCard group={groups[1]} delay={80} />
          </div>
        </div>

        {/* Row 2: Databases + Services + Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <GroupCard group={groups[2]} delay={160} />
          <GroupCard group={groups[3]} delay={240} />
          <GroupCard group={groups[4]} delay={320} />
        </div>
      </div>

      {/* ── Bottom stat strip ── */}
      <div
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px border border-white/5 reveal-on-scroll"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      >
        {[
          { n: '15+',  label: 'Technologies' },
          { n: '2',    label: 'Grands Projets' },
          { n: '2026', label: 'Diplôme ISTA' },
          { n: '∞',    label: 'Passion du Code' },
        ].map(({ n, label }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center py-8 gap-1 bg-transparent hover:bg-white/3 transition-colors duration-300"
          >
            <span className="font-display text-3xl md:text-4xl font-700 text-ln-lime">{n}</span>
            <span className="font-display text-[9px] uppercase tracking-[0.3em] text-white/30">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
