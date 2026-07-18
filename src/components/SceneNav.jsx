import { useEffect, useState } from 'react';

const SCENES = [
  { id: 'hero', n: '01', label: 'INTRO' },
  { id: 'about', n: '02', label: 'ABOUT' },
  { id: 'skills', n: '03', label: 'SKILLS' },
  { id: 'projects', n: '04', label: 'WORKS' },
  { id: 'experience', n: '05', label: 'EXPERIENCE' },
  { id: 'education', n: '06', label: 'EDUCATION' },
  { id: 'contact', n: '07', label: 'CONTACT' },
];

export default function SceneNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    SCENES.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-[120] hidden lg:flex flex-col items-end gap-4 mono-font select-none text-right">
      {/* Plus marker at the top */}
      <span className="text-[10px] text-text-muted mb-2 pr-1 opacity-60">+</span>
      
      {SCENES.map((s) => {
        const on = active === s.id;
        return (
          <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-2">
            {on ? (
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-accent tracking-[0.1em]">
                  {s.n} {s.label}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
            ) : (
              <span className="text-[11px] text-text-muted/60 hover:text-text-secondary transition-colors duration-300 pr-3">
                {s.n}
              </span>
            )}
          </a>
        );
      })}
    </nav>
  );
}
