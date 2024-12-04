import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="currentColor" fillOpacity="0.1"/>
      <path
        d="M14 12H26C27.1046 12 28 12.8954 28 14V19C28 20.1046 27.1046 21 26 21H20L24 28H20L16 21H14V28H12V14C12 12.8954 12.8954 12 14 12Z"
        fill="currentColor"
      />
    </svg>
  );
}