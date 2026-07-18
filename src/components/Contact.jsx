import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CONTACT_LINKS } from '../data';

export default function Contact() {
  const ref = useRef(null);
  const headingRef = useRef(null);
  const linksRef = useRef(null);
  const cvRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      gsap.from('.contact-tag', {
        x: -20, opacity: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });

      // Staggered word-by-word reveal matching Moblinks tagline style
      if (!reduce && headingRef.current) {
        const words = headingRef.current.querySelectorAll('.word');
        gsap.fromTo(words,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.0,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 80%',
            }
          }
        );
      }

      gsap.from('.rotating-badge-container', {
        scale: 0, opacity: 0, duration: 1, ease: 'elastic.out(1, 0.4)',
        scrollTrigger: { trigger: ref.current, start: 'top 60%' },
      });

      gsap.from(linksRef.current.children, {
        x: -30, opacity: 0, stagger: 0.09, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: linksRef.current, start: 'top 85%' },
      });

      gsap.from(cvRef.current, {
        y: 50, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: cvRef.current, start: 'top 90%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const badgeText = "AVAILABLE FOR WORK • OPEN TO PROJECTS • ";

  return (
    <section ref={ref} id="contact" className="section-pad-lg relative overflow-hidden z-10 flex flex-col justify-center bg-transparent">
      {/* Dashed blueprint construction lines */}
      <div className="dashed-line-h" style={{ top: '50%' }} />
      <div className="dashed-line-v" style={{ left: '25%' }} />
      <div className="crosshair" style={{ left: 'calc(25% - 6px)', top: 'calc(50% - 6px)' }}>
        <span className="arm-h left" /><span className="arm-h right" />
        <span className="arm-v top" /><span className="arm-v bottom" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        <div className="contact-tag chapter-header w-full">
          <div className="chapter-header-title">Get In Touch</div>
          <div className="mono-font text-[10px] text-text-secondary">Status // Available</div>
        </div>

        {/* Massive CTA heading with rotating badge */}
        <div className="relative mb-16">
          <span className="pointer-events-none absolute -top-10 right-0 lg:right-10 ghost-num text-[9rem] lg:text-[13rem] leading-none text-stroke opacity-[0.05] select-none z-0">07</span>
          <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-text-muted mb-5">Contact — 07</div>
          <h2 ref={headingRef} className="massive-text text-[clamp(2.8rem,8vw,6.5rem)] font-black uppercase text-text-primary leading-[0.9]">
            <span className="word block">LET'S BUILD</span>
            <span className="word block text-stroke">THE FUTURE</span>
            <span className="word block">TOGETHER.</span>
          </h2>

          {/* Rotating SVG circular badge */}
          <div className="rotating-badge-container absolute top-0 right-0 md:right-[10%] w-[120px] h-[120px] md:w-[160px] md:h-[160px]">
            <svg className="rotating-badge w-full h-full" viewBox="0 0 200 200">
              <defs>
                <path id="circlePath" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" />
              </defs>
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  {badgeText}
                </textPath>
              </text>
              <circle cx="100" cy="100" r="6" fill="var(--color-accent)" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact links */}
          <div ref={linksRef} className="space-y-4">
            {CONTACT_LINKS.map((link) => (
              <a key={link.label} href={link.href}
                target={link.label !== 'Location' && link.label !== 'Email' ? '_blank' : undefined}
                rel="noopener"
                className="group glass flex items-center justify-between py-5 px-6 relative overflow-hidden offset-hover"
                style={{ borderColor: 'rgba(var(--color-text-primary-rgb), 0.08)' }}>
                <div className="accent-line" />
                <div className="flex items-center gap-4 relative z-10">
                  <span className="heading-font text-sm font-bold uppercase tracking-wide group-hover:text-text-primary transition-colors duration-300"
                    style={{ color: 'var(--color-text-secondary)' }}>
                    {link.label}
                  </span>
                </div>
                <div className="flex items-center gap-2 relative z-10">
                  <span className="text-sm transition-colors duration-300 font-light"
                    style={{ color: 'var(--color-text-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                    {link.value}
                  </span>
                  <span className="group-hover:translate-x-1 transition-all duration-300" style={{ color: 'var(--color-text-muted)' }}>→</span>
                </div>
              </a>
            ))}
          </div>

          {/* CV Card */}
          <div ref={cvRef}>
            <div className="glass p-8 relative overflow-hidden group h-full offset-hover"
              style={{ borderColor: 'rgba(var(--color-text-primary-rgb), 0.08)' }}>
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: 'var(--gradient-brand)' }} />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 -skew-x-12"
                  style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.015) 50%, transparent 100%)', animation: 'shimmer 2s ease-in-out infinite' }} />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl"
                  style={{ background: 'rgba(var(--color-accent-rgb), 0.06)', border: '1px solid rgba(var(--color-accent-rgb), 0.2)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="mono-font text-[9px] tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--color-accent)' }}>Download</div>
                <h3 className="heading-font text-2xl font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--color-text-primary)' }}>
                  Resume / CV
                </h3>
                <p className="text-sm mb-6 leading-relaxed font-light" style={{ color: 'var(--color-text-secondary)' }}>
                  A full overview of my skills, experience, and featured projects.
                </p>

                {/* Blob CTA for CV Download */}
                <a href="/CV_Youssef_Adlani.pdf" download className="blob-cta group relative inline-flex items-center justify-center">
                  <svg viewBox="0 0 200 70" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                    <path 
                      d="M15,8 C65,1 135,11 185,6 C198,15, 194,48, 185,58 C145,67, 55,59, 15,62 C3,54, 7,16, 15,8 Z" 
                      fill="var(--color-accent)"
                    />
                  </svg>
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
