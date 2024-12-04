import React from 'react';
import { ShieldCheck, LineChart, CheckCircle2, TrendingUp, Brain, PieChart, FileText, Database, BarChart } from 'lucide-react';

const services = [
  {
    title: 'Cybersecurity GRC Advisory Services',
    description: 'Elevate your security posture with comprehensive governance and compliance solutions',
    icon: ShieldCheck,
    items: [
      {
        title: 'Strategy & Governance',
        icon: ShieldCheck,
        description: 'Transform your cybersecurity vision into reality with frameworks that perfectly align with your organizational goals.'
      },
      {
        title: 'Risk Management & Compliance',
        icon: CheckCircle2,
        description: 'Stay ahead of threats with proactive risk management and seamless compliance with ISO 27001, PCI DSS, and NIST standards.'
      },
      {
        title: 'Certification Support',
        icon: Brain,
        description: 'Achieve and maintain industry certifications with our comprehensive compliance programs and audit preparation.'
      }
    ]
  },
  {
    title: 'Financial Modeling Services',
    description: 'Drive growth with data-driven financial strategies and insights',
    icon: LineChart,
    items: [
      {
        title: 'Tailored Models for Growth',
        icon: LineChart,
        description: 'Accelerate your business expansion with custom financial models designed for ventures and new opportunities.'
      },
      {
        title: 'Informed Decision-Making',
        icon: TrendingUp,
        description: 'Navigate complex business decisions with confidence using our comprehensive financial insights and analysis.'
      },
      {
        title: 'Profitability Analysis',
        icon: PieChart,
        description: 'Maximize returns through detailed scenario forecasting and strategic market alignment strategies.'
      }
    ]
  },
  {
    title: 'Contract Management Services',
    description: 'Streamline your contract lifecycle with intelligent management solutions',
    icon: FileText,
    items: [
      {
        title: 'Comprehensive Contract Oversight',
        icon: FileText,
        description: 'Take control of your contract lifecycle with our end-to-end management system, from drafting to renewal.'
      },
      {
        title: 'Centralized Contract Repository',
        icon: Database,
        description: 'Access and manage all your contracts efficiently through our streamlined, centralized digital platform.'
      },
      {
        title: 'Performance Tracking',
        icon: BarChart,
        description: 'Optimize contract performance with data-driven insights and strategic recommendations for improvement.'
      }
    ]
  }
];

export function Services() {
  return (
    <section className="section-padding services-background" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-bold text-white mb-8 tracking-tight">Our Services</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to elevate your business performance
          </p>
        </div>
        
        <div className="space-y-32">
          {services.map((serviceGroup, index) => (
            <div key={serviceGroup.title} className="relative animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center p-6 bg-accent/20 rounded-2xl mb-8 backdrop-blur-sm">
                  <serviceGroup.icon className="h-16 w-16 text-accent" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-6">{serviceGroup.title}</h3>
                <p className="text-gray-300 text-xl max-w-2xl mx-auto">{serviceGroup.description}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {serviceGroup.items.map((service, serviceIndex) => (
                  <div 
                    key={service.title} 
                    className="service-card"
                    style={{
                      opacity: 0,
                      animation: 'fadeIn 0.6s ease-out forwards',
                      animationDelay: `${serviceIndex * 150}ms`
                    }}
                  >
                    <div className="service-icon">
                      <service.icon />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-secondary">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}