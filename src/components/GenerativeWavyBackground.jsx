import React, { useMemo } from 'react';

/**
 * GenerativeWavyBackground
 * A high-end, Bauhaus-inspired generative SVG pattern.
 * Creates rhythmic, organic topographic lines similar to the requested aesthetic.
 * 
 * @param {Object} props
 * @param {string} [props.className] - Optional CSS classes for the container.
 * @returns {JSX.Element} The rendered generative background.
 */
const GenerativeWavyBackground = ({ className = "" }) => {
  const lineCount = 12;
  
  /** @typedef {Object} WavyPath */
  /** @property {string} d - SVG path definition. */
  /** @property {number} opacity - Stroke opacity. */
  /** @property {number} strokeWidth - Stroke width. */
  /** @property {number} delay - Animation delay in seconds. */

  // Memoize the paths so they stay consistent per render unless manually refreshed
  const paths = useMemo(() => {
    return Array.from({ length: lineCount }).map((_, i) => {
      const offset = i * 40;
      const opacity = 0.05 + (i * 0.02);
      const strokeWidth = 1 + (i * 0.5);
      
      // Create a complex wavy path
      // M x y Q x1 y1 x2 y2 T x3 y3 ...
      return {
        d: `M -100,${200 + offset} 
            Q 200,${150 + offset} 400,${250 + offset} 
            T 800,${200 + offset} 
            T 1200,${300 + offset} 
            T 1600,${150 + offset} 
            T 2000,${250 + offset}`,
        opacity,
        strokeWidth,
        delay: i * 0.2
      };
    });
  }, []);

  return (
    <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}>
      <svg 
        viewBox="0 0 1600 800" 
        preserveAspectRatio="xMidYMid slice" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="#D2FF00" strokeLinecap="round">
          {paths.map((path, idx) => (
            <path
              key={idx}
              d={path.d}
              strokeOpacity={path.opacity}
              strokeWidth={path.strokeWidth}
              className="wavy-line"
              style={{
                animation: `wavy-float 20s infinite ease-in-out alternate`,
                animationDelay: `${path.delay}s`
              }}
            />
          ))}
        </g>
      </svg>
      
      <style jsx>{`
        @keyframes wavy-float {
          0% { transform: translateY(0) scaleX(1); }
          50% { transform: translateY(-30px) scaleX(1.05); }
          100% { transform: translateY(20px) scaleX(0.95); }
        }
        .wavy-line {
          transition: stroke-opacity 0.5s ease;
        }
      `}</style>
    </div>
  );
};

export default GenerativeWavyBackground;
