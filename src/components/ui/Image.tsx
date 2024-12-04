import React from 'react';
import { cn } from '../../utils/cn';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: 'square' | 'video' | 'wide';
}

export function Image({ 
  aspectRatio = 'wide',
  className,
  alt,
  ...props 
}: ImageProps) {
  const aspects = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[16/9]'
  };

  return (
    <div className={cn(
      'overflow-hidden rounded-lg',
      aspects[aspectRatio],
      className
    )}>
      <img
        className="h-full w-full object-cover"
        alt={alt}
        {...props}
      />
    </div>
  );
}