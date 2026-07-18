import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LINE_ONE = ['EVERY', 'PROJECT', 'IS', 'A', 'CRAFT'];
const LINE_TWO = ['HONED', 'BY', 'ITERATION,', 'BUILT', 'TO', 'ENDURE.'];

export default function Manifesto() {
  const ref = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const words = ref.current?.querySelectorAll('.mf-word');
      if (words?.length && !reduce) {
        gsap.from(words, {
          yPercent: 120,
          autoAlpha: 0,
          ease: 'power3.out',
          stagger: 0.5,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 1,
          },
        });
      }
      if (!reduce) {
        gsap.to('.mf-glow', {
          yPercent: -20, ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
        });
      }
    }, ref);
    return () => ctx.revert();
  }, []);

  const renderLine = (line, offset) =>
    line.map((w, i) => (
      <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
        <span className="mf-word inline-block">{w}</span>
      </span>
    ));

  return (
    <section ref={ref} id="manifesto"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-32 overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] glow-jade opacity-25 mf-glow pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-[1100px] mx-auto text-center relative z-10">
        <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-text-muted mb-10">
          [ Manifesto ]
        </div>
        <h2 className="display-poster text-[clamp(2.5rem,9vw,7.5rem)] text-text-primary leading-[0.9]">
          {renderLine(LINE_ONE)}
        </h2>
        <h2 className="display-poster text-[clamp(2.5rem,9vw,7.5rem)] leading-[0.9] mt-2">
          <span className="gradient-text">{renderLine(LINE_TWO)}</span>
        </h2>
      </div>
    </section>
  );
}
