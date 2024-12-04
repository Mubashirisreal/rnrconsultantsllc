import { ShieldCheck, LineChart, CheckCircle2, TrendingUp, Brain, PieChart, FileText, Database, BarChart } from 'lucide-react';
import type { ServiceGroup } from '../types/service';

export const services: ServiceGroup[] = [
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