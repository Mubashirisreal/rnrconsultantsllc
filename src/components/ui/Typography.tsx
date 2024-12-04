import React from 'react';
import { cn } from '../../utils/cn';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  className?: string;
  children: React.ReactNode;
}

export function Typography({ 
  variant = 'p', 
  className, 
  children 
}: TypographyProps) {
  const variants = {
    h1: "text-5xl md:text-6xl lg:text-7xl font-medium leading-tight",
    h2: "text-4xl md:text-5xl lg:text-6xl font-medium",
    h3: "text-2xl md:text-3xl font-medium",
    h4: "text-xl font-medium",
    p: "text-base leading-relaxed font-regular"
  };

  const Component = variant;

  return (
    <Component
      className={cn(
        variants[variant],
        className
      )}
    >
      {children}
    </Component>
  );
}