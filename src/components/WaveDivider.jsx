import React from 'react';

export default function WaveDivider({ className = '', fill = 'var(--color-bg-primary)', flip = false }) {
  return (
    <div className={`wave-section ${flip ? 'flip' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full"
      >
        <path
          d="M0,32 C240,70 480,10 720,50 C960,90 1200,30 1440,60 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
