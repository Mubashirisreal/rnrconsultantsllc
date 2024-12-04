import React from 'react';
import type { ServiceItem } from '../../types/service';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div 
      className="service-card group hover:scale-105"
      style={{
        opacity: 0,
        animation: 'fadeIn 0.6s ease-out forwards',
        animationDelay: `${index * 150}ms`
      }}
    >
      <div className="service-icon group-hover:bg-accent/20 transition-colors">
        <service.icon className="h-8 w-8 group-hover:scale-110 transition-transform" />
      </div>
      <h4 className="text-2xl font-extrabold mb-4 text-secondary">
        {service.title}
      </h4>
      <p className="text-gray-600 text-lg leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}