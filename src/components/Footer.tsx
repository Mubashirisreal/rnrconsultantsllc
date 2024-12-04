import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from './ui/Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 font-regular hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 font-regular hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 font-regular hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 font-regular hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 font-regular hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 font-regular hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-center text-gray-400 font-regular">
            © {new Date().getFullYear()} RNR Consultants. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}