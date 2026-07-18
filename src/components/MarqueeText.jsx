import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MarqueeText() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const words1 = ['FULL-STACK DEVELOPER', 'CREATIVE CODER', 'UI ENGINEER', '3D EXPERIENCES', 'CLEAN ARCHITECTURE'];
  const words2 = ['REACT · THREE.JS', 'NODE.JS · POSTGRESQL', 'GSAP · LENIS', 'DOCKER · AWS', 'TYPESCRIPT · VITE'];

  const marquee1 = Array(6).fill(words1).flat();
  const marquee2 = Array(6).fill(words2).flat();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (row1Ref.current) {
        gsap.to(row1Ref.current, {
          xPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: row1Ref.current.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      }
      if (row2Ref.current) {
        gsap.to(row2Ref.current, {
          xPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: row2Ref.current.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative py-10 overflow-hidden select-none z-10 marquee-fade-mask"
      style={{ borderTop: '1px solid rgba(var(--color-text-primary-rgb), 0.06)', borderBottom: '1px solid rgba(var(--color-text-primary-rgb), 0.06)', background: 'var(--color-bg-secondary)' }}>

      {/* Row 1 — scrolls left */}
      <div className="overflow-hidden mb-3">
        <div ref={row1Ref} className="flex whitespace-nowrap gap-6" style={{ width: 'max-content' }}>
          <div className="flex animate-[marquee-scroll_30s_linear_infinite] gap-6">
            {marquee1.map((word, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <span className="heading-font text-stroke-accent text-3xl md:text-5xl font-black uppercase tracking-wider">
                  {word}
                </span>
                <span className="w-2 h-2 rounded-full inline-block shrink-0"
                  style={{ background: 'rgba(var(--color-accent-rgb), 0.35)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — scrolls right (reverse) */}
      <div className="overflow-hidden">
        <div ref={row2Ref} className="flex whitespace-nowrap gap-6" style={{ width: 'max-content' }}>
          <div className="flex animate-[marquee-scroll-reverse_35s_linear_infinite] gap-6">
            {marquee2.map((word, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <span className="mono-font text-xl md:text-2xl font-bold uppercase tracking-[0.15em]"
                  style={{ color: 'rgba(var(--color-warm-rgb), 0.2)' }}>
                  {word}
                </span>
                <span className="w-1.5 h-1.5 rounded-full inline-block shrink-0"
                  style={{ background: 'rgba(var(--color-warm-rgb), 0.2)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
