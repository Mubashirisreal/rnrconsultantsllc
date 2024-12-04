import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-secondary' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center text-white"
            >
              <img src="/rnr 2 trans.png" alt="RNR Logo" className="h-32 w-32" />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden ${scrolled ? 'bg-secondary' : 'bg-black/60 backdrop-blur-sm'}`}>
          <div className="container-padding py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-white text-lg font-medium block py-3 hover:text-gray-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}