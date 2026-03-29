import React from 'react';

const MarqueeSection = () => {
  const keywords = [
    'React 19', 'Node.js', 'PHP / Laravel', 'Python', 'MySQL',
    'MongoDB', 'Tailwind CSS', 'Vite', 'Git', 'GSAP',
    'Three.js', 'Spline', 'PayPal SDK', 'Google OAuth 2.0'
  ];


  return (
    <section
      className="bg-ln-lime overflow-hidden border-t-2 border-b-2 border-ln-dark-green/10"
      aria-label="Compétences techniques"
    >
      <div className="flex whitespace-nowrap" aria-hidden="true">
        {[0, 1].map((setIdx) => (
          <div
            key={setIdx}
            className="flex items-center flex-shrink-0 animate-[marquee_30s_linear_infinite]"
          >
            {keywords.map((word, j) => (
              <React.Fragment key={j}>
                <span className="text-ln-dark-green font-impact text-5xl md:text-7xl uppercase tracking-tighter mx-8 py-4 select-none">
                  {word}
                </span>
                <span className="w-2 h-2 rounded-full bg-ln-dark-green/40 flex-shrink-0 mx-2" />
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
          .animate-\\[marquee_30s_linear_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default MarqueeSection;
