import { useEffect, useRef, useState } from 'react';

export default function MagneticCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });

  const [cursorText, setCursorText] = useState('');
  const [hasText, setHasText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [ringState, setRingState] = useState('default');

  useEffect(() => {
    const checkMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
    setIsMobile(checkMobile);
    if (checkMobile) return;

    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    const animate = () => {
      dotPos.current.x += (pos.current.x - dotPos.current.x) * 0.2;
      dotPos.current.y += (pos.current.y - dotPos.current.y) * 0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        const size = hasText ? 64 : 32;
        ringRef.current.style.transform = `translate(${dotPos.current.x - size / 2}px, ${dotPos.current.y - size / 2}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    const frame = requestAnimationFrame(animate);

    const handleEnter = (e) => {
      const text = e.currentTarget.getAttribute('data-cursor-text');
      if (text) {
        setCursorText(text);
        setHasText(true);
        setRingState('text');
      } else {
        setRingState('hover');
      }
    };

    const handleLeave = () => {
      setCursorText('');
      setHasText(false);
      setRingState('default');
    };

    const targets = document.querySelectorAll('a, button, [data-magnetic], [data-cursor-text]');
    targets.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [hasText]);

  if (isMobile) return null;

  const ringSize = hasText ? 64 : ringState === 'hover' ? 48 : 32;

  return (
    <div className={hasText ? 'magnetic-cursor-active' : ''}>
      {/* Dot */}
      <div ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-cursor transition-opacity duration-300 ${hasText ? 'opacity-0' : 'opacity-100'}`}
        style={{ background: 'var(--gradient-brand)' }} />
      {/* Ring */}
      <div ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[400] flex items-center justify-center overflow-hidden transition-[width,height] duration-300"
        style={{
          width: ringSize,
          height: ringSize,
          border: ringState === 'text'
            ? 'none'
            : `1px solid ${ringState === 'hover' ? 'rgba(var(--color-accent-rgb),0.5)' : 'rgba(255,255,255,0.12)'}`,
          background: ringState === 'text' ? 'rgba(var(--color-accent-rgb),0.8)' : 'transparent',
        }} />
      <span className="cursor-badge-text">{cursorText}</span>
    </div>
  );
}
