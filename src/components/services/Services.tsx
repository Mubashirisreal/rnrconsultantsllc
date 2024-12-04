import React from 'react';
import { ServiceHeader } from './ServiceHeader';
import { ServiceCategory } from './ServiceCategory';
import { Shield, LineChart, FileText, List, TrendingUp, Target, Search, BarChart } from 'lucide-react';

const services = [
  {
    title: 'Contract Management Services',
    icon: FileText,
    items: [
      {
        title: 'Contract Oversight',
        icon: Search,
        description: 'end-to-end contract management experts, from drafting to renewal to change                           orders.'
      },
      {
        title: 'Performance Tracking',
        icon: BarChart,
        description: 'Real-time monitoring of contract compliance and obligations'
      },
      {
        title: 'Automated Alerts',
        icon: Target,
        description: 'Stay informed of key contract dates, renewals, and obligations'
      }
    ]
  },
  {
    title: 'Financial Modeling Services',
    icon: LineChart,
    items: [
      {
        title: 'Growth Modeling',
        icon: TrendingUp,
        description: 'Custom financial models to forecast and optimize business growth'
      },
      {
        title: 'Decision Analysis',
        icon: Target,
        description: 'Data-driven insights to support strategic business decisions'
      },
      {
        title: 'Profitability Analysis',
        icon: BarChart,
        description: 'Detailed assessment of revenue streams and cost optimization'
      }
    ]
  },
  {
    title: 'Cybersecurity GRC Services',
    icon: Shield,
    items: [
      {
        title: 'Strategy & Governance',
        icon: List,
        description: 'Develop comprehensive security frameworks aligned with industry standards'
      },
      {
        title: 'Risk Management',
        icon: TrendingUp,
        description: 'Identify and mitigate potential security risks with advanced assessment tools'
      },
      {
        title: 'Compliance Support',
        icon: Target,
        description: 'Ensure adherence to regulatory requirements and industry standards'
      }
    ]
  }
];

export function Services() {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceHeader
          title="Our Services"
          description="Comprehensive solutions tailored to elevate your business performance"
        />
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-xl text-gray-600 font-regular leading-relaxed">
            Our comprehensive suite of services is designed to protect, optimize, and grow your business. From cybersecurity to financial modeling, we provide the expertise you need to succeed in today's dynamic business environment.
          </p>
        </div>
        
        <div className="space-y-20">
          {services.map((category) => (
            <ServiceCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}