import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, id, ...props }: InputProps) {
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
      <input
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