import { useRef, useEffect, useState } from 'react';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#________ABCDEF0123456789';

export default function ScrambleText({
  text,
  as: Tag = 'span',
  className = '',
  trigger = 'mount',
  duration = 900,
  classNameResolved,
}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(trigger === 'mount' ? '' : text);
  const started = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setDisplay(text); return; }

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const total = text.length;
      let frame;

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const revealed = Math.floor(progress * total);
        let out = '';
        for (let i = 0; i < total; i++) {
          if (i < revealed || text[i] === ' ') {
            out += text[i];
          } else {
            out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
        }
        setDisplay(out);
        if (progress < 1) frame = requestAnimationFrame(tick);
        else setDisplay(text);
      };
      frame = requestAnimationFrame(tick);
    };

    if (trigger === 'mount') {
      run();
      return () => cancelAnimationFrame(frame);
    }

    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) run(); }),
      { threshold: 0.4 }
    );
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [text, trigger, duration]);

  return (
    <Tag ref={ref} className={`${className} ${classNameResolved || ''}`}>
      {display || ' '}
    </Tag>
  );
}
