"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Heart, MessageCircle, Calendar, CreditCard, Car } from 'lucide-react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="relative text-jade-800 overflow-hidden" style={{ backgroundColor: '#fef3c7' }}>
      {/* Decorative Mexican Pattern Background - Simplified */}
      <div className="absolute inset-0 opacity-10">
        {/* Papel Picado Pattern */}
        <div className="absolute top-8 right-8">
          <svg width="30" height="40" viewBox="0 0 30 40" fill="none">
            <path d="M6 4 L12 10 L6 16 L0 10 Z" fill="#E4007C" opacity="0.7"/>
            <path d="M18 4 L24 10 L18 16 L12 10 Z" fill="#FF6B4A" opacity="0.7"/>
          </svg>
        </div>
        
        {/* Mexican Plate Pattern */}
        <div className="absolute bottom-12 left-8">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
            <circle cx="17" cy="17" r="15" stroke="#00A693" strokeWidth="2" fill="none" opacity="0.6"/>
            <path d="M17 10 L20 17 L17 24 L14 17 Z" fill="#FF6B4A" opacity="0.6"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center">
          
          {/* Restaurant Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="relative">
                <Image
                  src="/logo-restaurante.png"
                  alt="La Cocina de María Logo"
                  width={40}
                  height={40}
                  className="rounded-full shadow-warm"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-jade-800">
                La Cocina de María
              </h3>
            </div>
            
            <p className="text-jade-700 leading-relaxed max-w-lg mx-auto text-sm">
              Auténticos sabores mexicanos con tradiciones culinarias de México.
            </p>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 pt-6 border-t border-jade-700/20"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start space-x-3 mb-4 md:mb-0">
              <a 
                href="#" 
                className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                title="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
                title="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://wa.me/5215512345678" 
                className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <a 
                href="https://wa.me/5215512345678?text=Hola, me gustaría hacer una reservación"
                className="bg-gradient-to-r from-coral-500 to-pink-500 hover:from-coral-600 hover:to-pink-600 text-white px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                🍽️ ¡RESERVA AHORA!
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 pt-4 border-t border-jade-700/20 text-center"
        >
          <div className="flex flex-col space-y-2">
            <p className="text-jade-700 text-xs">
              © 2024 Restaurante La Cocina de María. Todos los derechos reservados.
            </p>
            <p className="text-jade-600 text-xs">
              Featured by NovaLabss
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};