"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading
    document.body.style.overflow = 'hidden';
    
    // Start the loading sequence
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Re-enable scrolling after animation completes
      setTimeout(() => {
        document.body.style.overflow = 'unset';
        onComplete();
      }, 500); // Wait for fade out animation
    }, 1500); // Total loading time: 1.5 seconds

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: '#fef3c7' }}
        >
          <div className="text-center space-y-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div className="relative">
                <Image
                  src="/logo-restaurante.png"
                  alt="La Cocina de María Logo"
                  width={80}
                  height={80}
                  className="rounded-full shadow-warm"
                />
              </div>
            </motion.div>

            {/* Restaurant Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-jade-800">
                La Cocina de María
              </h1>
              <p className="text-jade-600 font-medium">
                Auténtica cocina mexicana
              </p>
            </motion.div>

            {/* Subtle loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="flex justify-center"
            >
              <div className="flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-2 h-2 bg-coral-500 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};