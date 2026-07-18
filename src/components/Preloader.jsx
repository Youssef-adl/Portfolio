import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    
    const tl = gsap.timeline({
      onComplete: () => onComplete()
    });

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power3.inOut',
      delay: 0.5
    });

    return () => tl.kill();
  }, [started, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] select-none flex items-center justify-center bg-[#f5e3cd] text-[#1A1A1A]"
    >
      {!started ? (
        <button 
          onClick={() => setStarted(true)}
          className="mono-font text-[12px] tracking-[0.3em] uppercase border border-[#1A1A1A] px-10 py-4 hover:bg-[#1A1A1A] hover:text-[#f5e3cd] transition-all"
        >
          Sound On — Enter
        </button>
      ) : (
        <div className="flex flex-col items-center opacity-0 animate-in fade-in duration-1000">
          <div className="text-[10px] tracking-[0.5em] uppercase font-medium text-[#800020] mb-4">
            Youssef Adlani presents
          </div>
          <div className="text-6xl font-bold uppercase tracking-tight">
            A House that we shaped
          </div>
        </div>
      )}
    </div>
  );
}
