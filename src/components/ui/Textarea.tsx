import React from 'react';
import { cn } from '../../utils/cn';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, className, id, ...props }: TextareaProps) {
  return (
    <div>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-bold text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "w-full rounded-lg border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary",
          className
        )}
        {...props}
      />
    </div>
  );
}