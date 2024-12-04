import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../ui/Typography';

interface ServiceHeaderProps {
  title: string;
  description: string;
}

export function ServiceHeader({ title, description }: ServiceHeaderProps) {
  return (
    <motion.div 
      className="text-center mb-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Typography 
        variant="h2" 
        className="font-bold text-gray-900 mb-4"
      >
        {title}
      </Typography>
      <Typography 
        variant="p" 
        className="text-gray-600 text-lg font-regular max-w-2xl mx-auto"
      >
        {description}
      </Typography>
    </motion.div>
  );
}