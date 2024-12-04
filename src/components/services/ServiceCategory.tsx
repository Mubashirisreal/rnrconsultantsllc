import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ServiceItem } from './ServiceItem';
import { Typography } from '../ui/Typography';

interface ServiceItemType {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ServiceCategoryProps {
  title: string;
  icon: LucideIcon;
  items: ServiceItemType[];
}

export function ServiceCategory({ title, icon: Icon, items }: ServiceCategoryProps) {
  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <Icon className="h-6 w-6 text-secondary" />
        <Typography 
          variant="h3" 
          className="font-medium text-gray-900"
        >
          {title}
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceItem
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}