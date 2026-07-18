import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const NAV_ITEMS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const overlayRef = useRef(null);
  const linksRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.querySelector(item.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!overlayRef.current) return;
    const tl = gsap.timeline();

    if (open) {
      document.body.style.overflow = 'hidden';
      tl.set(overlayRef.current, { autoAlpha: 1 })
        .fromTo(overlayRef.current,
          { clipPath: 'circle(0% at calc(100% - 3rem) 2rem)' },
          { clipPath: 'circle(150% at calc(100% - 3rem) 2rem)', duration: 0.8, ease: 'power4.inOut' }
        )
        .fromTo(linksRef.current?.children || [],
          { y: '110%', opacity: 0 },
          { y: '0%', opacity: 1, stagger: 0.06, duration: 0.7, ease: 'power4.out' },
          0.3
        );
    } else {
      tl.to(linksRef.current?.children || [],
          { y: '-80%', opacity: 0, stagger: 0.03, duration: 0.3, ease: 'power3.in' }
        )
        .to(overlayRef.current,
          { clipPath: 'circle(0% at calc(100% - 3rem) 2rem)', duration: 0.6, ease: 'power4.inOut' }
        )
        .set(overlayRef.current, { autoAlpha: 0 });
      document.body.style.overflow = '';
    }

    return () => tl.kill();
  }, [open]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-nav flex items-center justify-between h-[78px] w-auto md:min-w-[720px] max-w-[calc(100vw-32px)] px-6 rounded-full glass-strong border border-white/10 transition-all duration-700"
      >
        <a href="#hero" className="relative flex items-center gap-2 group px-2 pr-[70px]">
          <div className="w-8 h-8 flex items-center justify-center text-sm font-black heading-font"
            style={{
              background: 'var(--gradient-brand-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
            YA
          </div>
          <span className="heading-font text-xs font-bold tracking-[0.15em] uppercase hidden sm:block transition-colors duration-300"
            style={{ color: 'var(--color-text-muted)' }}>
            Adlani
          </span>
        </a>

        <div className="hidden md:flex items-center gap-[42px] mr-[60px]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a key={item.label} href={item.href}
                className={`relative mono-font text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-2 transition-all duration-500 text-slide-hover ${
                  isActive
                    ? 'text-text-primary'
                    : ''
                }`}
                style={{ color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-muted)' }}>
                {isActive && (
                  <span className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                )}
                <span className="slide-out">
                  {item.label}
                </span>
                <span className="slide-in" style={{ color: 'var(--color-accent)' }}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        <a href="#contact" className="nav-hire-btn" aria-label="Contact me">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
          Hire Me
        </a>

        <button onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full z-[999] ml-2"
          style={{ background: open ? 'rgba(var(--color-accent-rgb), 0.12)' : 'transparent' }}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu">
          <span className={`block h-[1.5px] w-5 transition-all duration-500 ${open ? 'rotate-45 translate-y-[3px]' : ''}`}
            style={{ background: 'var(--gradient-brand-text)' }} />
          <span className={`block h-[1.5px] transition-all duration-500 mt-1.5 ${open ? '-rotate-45 -translate-y-[4.5px] w-5' : 'w-3.5 ml-auto'}`}
            style={{ background: 'var(--gradient-brand-text)' }} />
        </button>
      </nav>

      <div ref={overlayRef} id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation mobile"
        className="fixed inset-0 z-overlay flex flex-col items-center justify-center menu-overlay-bg"
        style={{
          visibility: 'hidden', opacity: 0,
          backdropFilter: 'blur(40px)',
          clipPath: 'circle(0% at calc(100% - 3rem) 2rem)',
        }}>

        {/* Floating Decorators (Moblinks style) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full border border-dashed border-accent" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full border border-dashed border-accent" />
        </div>

        <div className="absolute top-6 right-6">
          <button onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:rotate-90"
            style={{ border: '1px solid rgba(var(--color-text-primary-rgb), 0.1)' }}
            aria-label="Close menu">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div ref={linksRef} className="flex flex-col items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}
              className="clip-reveal group menu-link-pill">
              {/* Rotating background pill on hover */}
              <div 
                className="pill-bg"
                style={{ 
                  backgroundColor: i % 2 === 0 ? 'rgba(var(--color-accent-rgb), 0.25)' : 'rgba(var(--color-warm-rgb), 0.25)',
                  transformOrigin: 'center center'
                }} 
              />
              <span className="relative z-10 block heading-font text-[clamp(2.2rem,8vw,4.5rem)] font-black tracking-[0.08em] uppercase transition-all duration-500"
                style={{ color: 'var(--color-text-secondary)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
                <span className="mono-font text-[12px] mr-4 font-normal tracking-[0.2em]"
                  style={{ color: 'rgba(var(--color-accent-rgb), 0.5)' }}>
                  0{i + 1}
                </span>
                {item.label}
              </span>
            </a>
          ))}
        </div>

        <div className="absolute bottom-8 flex items-center gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/youssef-adl' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/youssef-adlani' },
            { label: 'Email', href: 'mailto:youssoufadlani@gmail.com' },
          ].map((link) => (
            <a key={link.label} href={link.href} target={link.label !== 'Email' ? '_blank' : undefined} rel="noopener"
              className="mono-font text-[9px] tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
