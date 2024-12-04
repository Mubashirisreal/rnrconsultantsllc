import React from 'react';
import { ServiceCard } from './ServiceCard';
import type { ServiceGroup as ServiceGroupType } from '../../types/service';

interface ServiceGroupProps {
  serviceGroup: ServiceGroupType;
  index: number;
}

export function ServiceGroup({ serviceGroup, index }: ServiceGroupProps) {
  return (
    <div className="relative animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-6 bg-accent/20 rounded-2xl mb-8 backdrop-blur-sm group hover:bg-accent/30 transition-colors">
          <serviceGroup.icon className="h-16 w-16 text-accent group-hover:scale-110 transition-transform" />
        </div>
        <h3 className="text-5xl font-extrabold text-white mb-6 font-sans">{serviceGroup.title}</h3>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto font-medium">{serviceGroup.description}</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {serviceGroup.items.map((service, serviceIndex) => (
          <ServiceCard 
            key={service.title} 
            service={service} 
            index={serviceIndex} 
          />
        ))}
      </div>
    </div>
  );
}