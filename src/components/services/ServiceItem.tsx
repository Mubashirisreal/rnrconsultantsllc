import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Typography } from '../ui/Typography';

interface ServiceItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceItem({ title, description, icon: Icon }: ServiceItemProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <Icon className="h-6 w-6 text-secondary" />
      </div>
      <Typography 
        variant="h4" 
        className="text-lg font-medium text-gray-900 mb-2"
      >
        {title}
      </Typography>
      <Typography 
        variant="p" 
        className="text-sm text-gray-600 leading-relaxed font-regular"
      >
        {description}
      </Typography>
    </div>
  );
}