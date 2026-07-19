import React from 'react';

const MarqueeSection = () => {
  const keywords = [
    'React 19', 'Node.js', 'PHP / Laravel', 'Python', 'MySQL',
    'MongoDB', 'Tailwind CSS', 'Vite', 'Git', 'GSAP',
    'Three.js', 'Clean Code', 'Bauhaus', 'Full Stack'
  ];

  return (
    <section
      className="py-4 bg-ln-lime overflow-hidden relative"
      aria-label="Compétences techniques"
    >
      <div className="flex whitespace-nowrap" aria-hidden="true">
        {[0, 1].map((setIdx) => (
          <div
            key={setIdx}
            className="flex items-center flex-shrink-0 animate-[marquee_25s_linear_infinite]"
          >
            {keywords.map((word, j) => (
              <React.Fragment key={j}>
                <span className="text-ln-dark-green font-impact text-3xl md:text-5xl uppercase tracking-tighter mx-6 py-2 select-none">
                  {word}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-ln-dark-green/30 flex-shrink-0 mx-2" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      <ul className="sr-only">
        {keywords.map((k) => <li key={k}>{k}</li>)}
      </ul>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_25s_linear_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default MarqueeSection;
