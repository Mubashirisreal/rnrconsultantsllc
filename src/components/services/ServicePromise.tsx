import React from 'react';
import { Shield, TrendingUp, FileText } from 'lucide-react';

const promisePoints = [
  {
    icon: Shield,
    title: 'Security Excellence',
    description: 'Industry-leading cybersecurity solutions that protect your assets'
  },
  {
    icon: TrendingUp,
    title: 'Growth Focus',
    description: 'Data-driven strategies that drive sustainable business growth'
  },
  {
    icon: FileText,
    title: 'Seamless Management',
    description: 'Efficient contract management that streamlines operations'
  }
];

export function ServicePromise() {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12 mt-24">
      <h3 className="text-4xl font-extrabold text-white text-center mb-12 font-sans">Our Promise</h3>
      <div className="grid md:grid-cols-3 gap-12">
        {promisePoints.map((point) => (
          <div key={point.title} className="text-center group">
            <div className="inline-block p-4 rounded-full bg-accent/20 mb-6 group-hover:bg-accent/30 transition-colors">
              <point.icon className="h-12 w-12 text-accent group-hover:scale-110 transition-transform" />
            </div>
            <h4 className="text-2xl font-extrabold text-white mb-4 font-sans">{point.title}</h4>
            <p className="text-gray-300 text-lg font-medium">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}