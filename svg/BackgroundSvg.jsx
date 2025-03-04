import React from "react";

const BackgroundSvg = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        {/* Grid Pattern */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(0, 150, 255, 0.2)"
            strokeWidth="1"
          />
        </pattern>

        {/* Diagonal Lines */}
        <pattern
          id="diagonal"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 0 100 L 100 0"
            stroke="rgba(0, 255, 255, 0.1)"
            strokeWidth="2"
          />
        </pattern>

        {/* Glow Effect */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Apply the grid */}
      <rect width="100%" height="100%" fill="url(#grid)" filter="url(#glow)" />
      {/* Apply diagonal lines */}
      <rect width="100%" height="100%" fill="url(#diagonal)" opacity="0.3" />
    </svg>
  );
};

export default BackgroundSvg;
