import React from 'react';
import { Building2, Shield, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  { name: 'Finance', icon: Building2, description: 'Strengthening financial security while navigating regulatory complexities.' },
  { name: 'Telecommunications', icon: Shield, description: 'Optimizing risk management and cybersecurity protocols for data-sensitive operations.' },
  { name: 'Healthcare', icon: Briefcase, description: 'Ensuring compliance with stringent data protection standards and improving financial decision-making.' },
];

export function About() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-4xl text-gray-900 mb-6">Who We Are</h2>
          <p className="text-xl leading-relaxed text-gray-600 font-regular">
            The consultants at rnrconsultants have been empowering businesses for over 15 years with deep expertise in Contracts Management, Cybersecurity, Governance, Risk, and Compliance (GRC) and Financial Modeling. We partner with organizations across diverse sectors to deliver impactful solutions that drive real business outcomes.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, index) => (
            <motion.div 
              key={industry.name} 
              className="bg-gray-50 p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <industry.icon className="h-12 w-12 text-secondary mb-4" />
              <h3 className="font-medium text-xl mb-3">{industry.name}</h3>
              <p className="text-lg text-gray-600 font-regular">{industry.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="bg-gray-50 p-8 text-center shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-bold text-3xl text-gray-900 mb-4">Our Promise</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-regular">
            We connect technical excellence with your business objectives to deliver practical, results-driven solutions that not only meet compliance but also create lasting, value-driven outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}