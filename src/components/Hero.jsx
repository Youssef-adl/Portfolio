import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  const ref = useRef(null);
  const stageWrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const youssefRef = useRef(null);
  const adlaniRef = useRef(null);
  const portraitRef = useRef(null);
  const auraRef = useRef(null);
  const qRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(auraRef.current, { opacity: 0, duration: 1.5 }, 0)
        .from('.hero-eyebrow', { y: 10, opacity: 0, duration: 0.8 }, 0.2)
        .from('.hero-youssef-line', { yPercent: 100, duration: 1.2, ease: 'power4.out', skewY: 4 }, 0.3)
        .from('.hero-adlani-line', { yPercent: 100, duration: 1.2, ease: 'power4.out', skewY: 4 }, 0.45)
        .from(portraitRef.current, { opacity: 0, duration: 1.5, ease: 'power2.out' }, 0.6)
        .from('.hero-info', { y: 20, opacity: 0, duration: 1, stagger: 0.1 }, 0.8)
        .from('.hero-cta', { y: 20, opacity: 0, duration: 1 }, 1.0);

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduce) {
        gsap.to(stageWrapperRef.current, {
          opacity: 1, // Changed from 0.3
          yPercent: 0, // Changed from -8
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: 1 },
        });
        gsap.killTweensOf([youssefRef.current, adlaniRef.current, portraitRef.current]);
      }
    }, ref);

    qRef.current = {
      youssef: { x: gsap.quickTo(youssefRef.current, 'x', { duration: 0.5, ease: 'power3' }), y: gsap.quickTo(youssefRef.current, 'y', { duration: 0.5, ease: 'power3' }) },
      adlani: { x: gsap.quickTo(adlaniRef.current, 'x', { duration: 0.7, ease: 'power3' }), y: gsap.quickTo(adlaniRef.current, 'y', { duration: 0.7, ease: 'power3' }) },
      portrait: {
        rx: gsap.quickTo(portraitRef.current, 'rotationX', { duration: 0.6, ease: 'power3' }),
        ry: gsap.quickTo(portraitRef.current, 'rotationY', { duration: 0.6, ease: 'power3' }),
      },
    };

    return () => ctx.revert();
  }, [isMobile]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const q = qRef.current;
    if (!q) return;
    const dx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const dy = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

    q.youssef.x(dx * -60); q.youssef.y(dy * -30);
    q.adlani.x(dx * 36); q.adlani.y(dy * 22);

    const p = portraitRef.current;
    if (p) {
      const prect = p.getBoundingClientRect();
      const px = e.clientX - prect.left - prect.width / 2;
      const py = e.clientY - prect.top - prect.height / 2;
      q.portrait.ry(px * 0.05);
      q.portrait.rx(-py * 0.05);
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    const q = qRef.current;
    if (q) Object.values(q).forEach((layer) => Object.values(layer).forEach((s) => s(0)));
  };

  return (
    <section
      ref={ref}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden bg-[#f5e3cd] text-[#1A1A1A]"
    >
      <div className="absolute inset-0 noise-overlay z-0" />
      <div ref={stageWrapperRef} className="relative max-w-[1500px] w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-32 pb-20">
        <div className="lg:col-span-8">
          <div className="hero-eyebrow text-[12px] tracking-[0.4em] uppercase text-[#800020] mb-8 font-medium">
             Full Stack Developer — Rabat, Maroc
          </div>

          <h1 className="leading-[0.8] tracking-[-0.04em]">
            <span className="block overflow-hidden">
              <span className="hero-youssef-line block font-bold uppercase text-[clamp(4rem,14vw,11rem)]" ref={youssefRef}>
                Youssef
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-adlani-line block font-bold uppercase text-[clamp(4rem,14vw,11rem)] text-[#800020]" ref={adlaniRef}>
                Adlani
              </span>
            </span>
          </h1>

          <p className="hero-info mt-12 text-2xl md:text-4xl font-medium max-w-2xl text-[#1A1A1A]/90 italic leading-[1.4]">
            Je construis des expériences web modernes, minimalistes et immersives — React, Next.js, Three.js, Node.js &amp; ASP.NET Core.
          </p>

          <div className="mt-12 flex flex-wrap gap-6">
            <a href="#projects" className="px-8 py-4 bg-[#1A1A1A] text-[#f5e3cd] rounded-full text-sm uppercase tracking-[0.2em] font-medium hover:bg-[#800020] transition-colors">
              Découvrir mes travaux
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div ref={portraitRef} className="bg-transparent rotate-[2deg] p-3 w-80 h-80">
            <img src="/adlani.png" alt="Youssef Adlani" className="w-full h-full object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
