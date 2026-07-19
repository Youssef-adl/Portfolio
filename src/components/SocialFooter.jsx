import React from 'react';

const socials = [
  {
    name: 'GitHub',
    handle: '@Youssef-adl',
    url: 'https://github.com/Youssef-adl',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'Adlani Youssouf',
    url: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    handle: 'youssoufadlani@gmail.com',
    url: 'mailto:youssoufadlani@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const SocialFooter = () => {
  return (
    <>
      {/* What's up On Socials */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #080a04 0%, #060804 100%)' }}
      >
        <div className="ln-container">
          <div className="flex items-center gap-3 mb-4 reveal-on-scroll">
            <div className="section-divider" />
            <span className="section-label">Restons connectés</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-700 tracking-tight text-white leading-none mb-16 reveal-on-scroll">
            WHAT'S UP <span className="text-ln-lime">ON SOCIALS</span>
          </h2>

          <div className="flex flex-col gap-3 max-w-2xl reveal-on-scroll">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target={s.name !== 'Email' ? '_blank' : undefined}
                rel={s.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="social-link-item rounded-xl group"
              >
                <span className="text-white/40 group-hover:text-ln-lime transition-colors duration-300">
                  {s.icon}
                </span>
                <div className="flex-1">
                  <span className="font-display text-sm font-700 text-white group-hover:text-ln-lime transition-colors duration-300 uppercase tracking-wide">
                    {s.name}
                  </span>
                  <span className="block font-body text-xs text-white/30 mt-0.5">{s.handle}</span>
                </div>
                <svg className="w-4 h-4 text-white/20 group-hover:text-ln-lime transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 px-6 lg:px-12" style={{ background: '#040602' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <a href="mailto:youssoufadlani@gmail.com" className="font-display text-[9px] uppercase tracking-[0.3em] text-white/20 hover:text-ln-lime transition-colors">
              Contact Commercial
            </a>
            <a href="#" className="font-display text-[9px] uppercase tracking-[0.3em] text-white/20 hover:text-ln-lime transition-colors">
              Politique de Confidentialité
            </a>
          </div>
          <span className="font-display text-[9px] uppercase tracking-[0.3em] text-white/15">
            © 2026 Adlani Youssouf · Développeur Web Full Stack
          </span>
        </div>
      </footer>
    </>
  );
};

export default SocialFooter;
