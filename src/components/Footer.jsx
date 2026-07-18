import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Footer() {
  const ref = useRef(null);
  const colsRef = useRef(null);
  const bottomRef = useRef(null);
  const footerCtaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!reduce && footerCtaRef.current) {
        const words = footerCtaRef.current.querySelectorAll('.word');
        gsap.fromTo(words,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: footerCtaRef.current,
              start: 'top 85%',
            }
          }
        );
      }

      gsap.from(colsRef.current.children, {
        y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      });
      gsap.from(bottomRef.current, {
        y: 20, opacity: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: bottomRef.current, start: 'top 95%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden z-10 bg-transparent">
      
      {/* Triple line top separator */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute top-[3px] left-0 right-0 h-px opacity-30" style={{ background: 'rgba(var(--color-accent-rgb), 0.1)' }} />

      {/* Large Backdrop Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
         <span className="font-serif-display italic font-light uppercase leading-none tracking-[0.05em] whitespace-nowrap opacity-[0.025] text-[clamp(6rem,20vw,18rem)] text-text-primary">
           ADLANI
         </span>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 mt-12">
        {/* Cinematic finale CTA with Moblinks Tagline reveal */}
        <div className="text-center mb-20">
          <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-text-muted mb-6">End of transmission — 07</div>
          <a href="#contact" className="group inline-block" ref={footerCtaRef}>
            <h2 className="massive-text text-[clamp(3rem,11vw,8.5rem)] leading-[0.85] text-text-primary transition-colors duration-500 group-hover:text-stroke">
              <span className="word block">LET'S WORK</span>
              <span className="word block">TOGETHER</span>
            </h2>
          </a>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="mono-font text-[10px] tracking-[0.2em] uppercase text-text-secondary">Available for freelance</span>
          </div>
        </div>

        <div ref={colsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="heading-font text-3xl font-black uppercase tracking-wider mb-2">
                <span className="gradient-text">Y.</span>
                <span className="text-text-primary">Adlani</span>
              </div>
              <div className="mono-font text-[9px] tracking-[0.25em] text-text-muted uppercase mb-6">
                Full-Stack Developer
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
              <span className="mono-font text-[9px] tracking-[0.15em] text-text-secondary uppercase">Available for freelance</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2.5">
            <span className="mono-font text-[9px] tracking-[0.25em] text-accent uppercase mb-3">Navigation</span>
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="mono-font text-[10px] text-text-secondary hover:text-text-primary hover:translate-x-2 transition-all duration-300 uppercase tracking-wider flex items-center gap-2.5 group">
                 <span className="w-4 h-px transition-all duration-300 group-hover:w-6"
                  style={{ background: 'var(--gradient-brand)' }} />
                {item}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2.5">
            <span className="mono-font text-[9px] tracking-[0.25em] text-warm uppercase mb-3">Connect</span>
            {[
              { label: 'GitHub', href: 'https://github.com/youssef-adl' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/youssef-adlani' },
              { label: 'Email', href: 'mailto:youssoufadlani@gmail.com' },
            ].map((link) => (
              <a key={link.label} href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel="noopener"
                className="mono-font text-[10px] text-text-secondary hover:text-text-primary hover:translate-x-2 transition-all duration-300 uppercase tracking-wider flex items-center gap-2.5 group">
                <span className="w-4 h-px transition-all duration-300 group-hover:w-6"
                  style={{ background: 'var(--gradient-brand)' }} />
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div ref={bottomRef}
          className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4"
          style={{ borderTop: '1px solid rgba(var(--color-text-primary-rgb), 0.05)' }}>
          <span className="mono-font text-[9px] tracking-[0.15em] text-text-muted uppercase">
            © {new Date().getFullYear()} Youssef Adlani. All rights reserved.
          </span>
          <div className="flex items-center gap-3">
            <span className="w-6 h-px" style={{ background: 'var(--gradient-brand)' }} />
            <span className="mono-font text-[9px] tracking-[0.15em] text-text-muted uppercase">
              Designed for performance & impact
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
