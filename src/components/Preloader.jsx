import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const contentRef = useRef(null);
  const nameRef = useRef(null);
  const statusRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame;
    let start = null;
    const duration = 2000;

    const tick = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // Quartic ease out
      setCount(Math.round(eased * 100));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // Staggered curtain slide-out animation when loading finishes
    tl.set(containerRef.current, { autoAlpha: 1 })
      .fromTo(nameRef.current?.children || [], 
        { y: '110%', opacity: 0 }, 
        { y: '0%', opacity: 1, duration: 1.0, ease: 'power4.out', stagger: 0.1 }, 
        0.2
      )
      .fromTo(statusRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.8)
      // Once count hits 100%, animate out
      .to([nameRef.current?.children || [], statusRef.current], {
        y: -40,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.in',
        stagger: 0.05
      }, 2.1)
      .to(layer3Ref.current, {
        yPercent: -100,
        duration: 1.1,
        ease: 'power4.inOut'
      }, 2.4)
      .to(layer2Ref.current, {
        yPercent: -100,
        duration: 1.1,
        ease: 'power4.inOut'
      }, 2.55)
      .to(layer1Ref.current, {
        yPercent: -100,
        duration: 1.1,
        ease: 'power4.inOut'
      }, 2.7)
      .to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.1
      }, 3.8);

    return () => {
      cancelAnimationFrame(frame);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-preloader select-none pointer-events-none"
      style={{ visibility: 'hidden' }}
    >
      {/* Three Colored Curtain Layers */}
      <div
        ref={layer1Ref}
        className="curtain-layer bg-bg-primary"
        style={{ zIndex: 10 }}
      />
      <div
        ref={layer2Ref}
        className="curtain-layer"
        style={{ backgroundColor: 'var(--color-accent-light, #34d399)', zIndex: 9 }}
      />
      <div
        ref={layer3Ref}
        className="curtain-layer"
        style={{ backgroundColor: 'var(--color-warm, #fbbf24)', zIndex: 8 }}
      />

      {/* Content overlay inside the top layer */}
      <div 
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-auto"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-accent" />
          <div className="dashed-line-h" style={{ top: '25%' }} />
          <div className="dashed-line-h" style={{ top: '75%' }} />
          <div className="dashed-line-v" style={{ left: '25%' }} />
          <div className="dashed-line-v" style={{ left: '75%' }} />
        </div>

        {/* Text Reveal */}
        <div ref={nameRef} className="relative flex flex-col items-center overflow-hidden">
          <div className="clip-reveal">
            <span 
              className="display-text text-[clamp(3.5rem,10vw,8rem)] block font-extrabold uppercase tracking-tight"
              style={{
                background: 'var(--gradient-brand-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Youssef
            </span>
          </div>
          <div className="clip-reveal">
            <span className="display-text text-[clamp(3.5rem,10vw,8rem)] block font-extrabold uppercase tracking-tight text-text-primary">
              Adlani
            </span>
          </div>
        </div>

        {/* Status Indicator */}
        <div 
          ref={statusRef} 
          className="mt-8 mono-font text-[10px] tracking-[0.4em] uppercase text-text-muted flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          SYSTEM LOAD // {String(count).padStart(3, '0')}%
        </div>
      </div>
    </div>
  );
}

