"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { 
  slideInFromTop, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer,
  hoverScale,
  buttonPress 
} from '@/lib/animations';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Initialize scroll state
    setIsScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '#about', label: 'Nosotros' },
    { href: '#menu', label: 'Menú' },
    { href: '#testimonials', label: 'Testimonios' },
    { href: '#chefs', label: 'Chefs' },
  ];

  const handleReservation = () => {
    window.open('https://wa.me/5215512345678?text=Hola, me gustaría hacer una reservación', '_blank');
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Pequeño delay para que se cierre el menú primero
    setTimeout(() => {
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        const headerHeight = 80; // Altura del header fijo
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };


  return (
    <motion.header
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'shadow-warm-lg backdrop-blur-sm' 
          : 'backdrop-blur-sm'
      }`}
      style={{ 
        backgroundColor: isScrolled ? '#fef3c7' : 'rgba(254, 243, 199, 0.95)' 
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 w-full max-w-full overflow-hidden">
        <div className="flex items-center justify-between py-4 w-full min-w-0 safe-area-x">
          
          {/* Logo */}
          <motion.div
            variants={fadeInLeft}
            className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 min-w-0"
          >
            <div className="relative">
              <Image
                src="/logo-restaurante.png"
                alt="La Cocina de María Logo"
                width={48}
                height={48}
                className="rounded-full shadow-warm"
              />
            </div>
            <div className="min-w-0 flex-shrink">
              <h1 className="text-lg sm:text-xl font-serif font-bold text-jade-800 truncate">
                La Cocina de María
              </h1>
              <p className="text-xs text-jade-700 font-medium truncate">
                Auténtica cocina mexicana
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                variants={fadeInRight}
                onClick={() => handleNavClick(item.href)}
                className="text-jade-800 hover:text-pink-500 font-medium transition-colors duration-300 relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-coral-400 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </motion.nav>

          {/* Contact Info & Actions */}
          <motion.div
            variants={fadeInRight}
            className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0"
          >
            {/* Contact Info - Hidden on mobile */}
            <div className="hidden xl:flex flex-col items-end text-sm">
              <div className="flex items-center space-x-2 text-jade-800">
                <Phone className="w-4 h-4 text-jade-800" />
                <span className="font-semibold">+52 55 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-jade-700 mt-1">
                <MapPin className="w-3 h-3 text-jade-700" />
                <span className="text-xs">Col. Centro, CDMX</span>
              </div>
            </div>


            {/* Reservation Button */}
            <motion.div
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div variants={buttonPress}>
                <Button
                  onClick={handleReservation}
                  variant="primary"
                  size="sm"
                  className="hidden md:flex bg-pink-500 hover:bg-white text-white hover:text-black font-bold px-6 py-2 shadow-warm-lg hover:shadow-xl transition-all duration-300 border border-pink-500 hover:border-black"
                >
                  Reservar Mesa
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 text-jade-800 hover:text-pink-500 transition-colors duration-300"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MenuIcon className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-jade-700/20 py-4"
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className="text-jade-800 hover:text-pink-500 font-medium transition-colors duration-300 py-2 text-left"
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-jade-700/20">
                  <div className="flex items-center space-x-2 text-jade-800 mb-2">
                    <Phone className="w-4 h-4 text-jade-800" />
                    <span className="font-semibold">+52 55 1234 5678</span>
                  </div>
                  <div className="flex items-center space-x-2 text-jade-700 mb-4">
                    <MapPin className="w-4 h-4 text-jade-700" />
                    <span>Av. Revolución 1234, Col. Centro, CDMX</span>
                  </div>
                  
                  {/* Mobile Reservation Button */}
                  <motion.div
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.div variants={buttonPress}>
                      <Button
                        onClick={handleReservation}
                        variant="primary"
                        size="sm"
                        className="w-full bg-pink-500 hover:bg-white text-white hover:text-black font-bold border border-pink-500 hover:border-black transition-all duration-300"
                      >
                        Reservar Mesa
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </motion.header>
  );
};