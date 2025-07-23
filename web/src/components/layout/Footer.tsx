"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Utensils, Calendar, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="relative text-jade-800 overflow-hidden" style={{ backgroundColor: '#fef3c7' }}>
      <div className="container mx-auto px-4 py-16 relative z-10">
        
        {/* Main Footer Content - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Contact Section - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-sm font-semibold text-jade-600 uppercase tracking-wider mb-4">
                CONTACTO
              </h3>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-jade-800 leading-tight mb-6">
                Hablemos de tu<br />
                Próxima Visita
              </h2>
              
              {/* CTA Button */}
              <a 
                href="https://wa.me/5215512345678?text=Hola, me gustaría hacer una reservación"
                className="inline-flex items-center bg-coral-600 hover:bg-coral-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Reservar Mesa →
              </a>
            </div>
            
            {/* Email Contact */}
            <div className="pt-4">
              <p className="text-jade-600 text-sm uppercase tracking-wider mb-2">
                O ESCRÍBENOS A
              </p>
              <div className="bg-jade-800 text-jade-100 px-4 py-2 rounded-full inline-flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">contacto@lacocinademaria.mx</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links - Center Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-sm font-semibold text-jade-600 uppercase tracking-wider mb-6">
                ENLACES RÁPIDOS
              </h3>
              <nav className="space-y-4">
                <a href="#hero" className="block text-jade-700 hover:text-jade-800 transition-colors duration-200">
                  Inicio
                </a>
                <a href="#menu" className="block text-jade-700 hover:text-jade-800 transition-colors duration-200">
                  Nuestros Platillos
                </a>
                <a href="#chefs" className="block text-jade-700 hover:text-jade-800 transition-colors duration-200">
                  Nuestros Chefs
                </a>
                <a href="#testimonials" className="block text-jade-700 hover:text-jade-800 transition-colors duration-200">
                  Testimonios
                </a>
                <a href="#contact" className="block text-jade-700 hover:text-jade-800 transition-colors duration-200">
                  Contacto
                </a>
              </nav>
            </div>
          </motion.div>

          {/* Information - Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-sm font-semibold text-jade-600 uppercase tracking-wider mb-6">
                INFORMACIÓN
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-jade-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-jade-700 text-sm">
                      Av. Reforma 123, Centro Histórico<br />
                      Ciudad de México, CDMX 06000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-jade-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-jade-700 text-sm">
                      +52 55 1234 5678
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-jade-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-jade-700 text-sm">
                      Lun - Dom: 12:00 - 22:00<br />
                      Viernes y Sábados hasta 23:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-jade-700/20"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-jade-600 text-sm">
                © LA COCINA DE MARÍA 2024. TODOS LOS DERECHOS RESERVADOS.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-jade-800 hover:bg-jade-900 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-jade-800 hover:bg-jade-900 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                title="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-jade-800 hover:bg-jade-900 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/5215512345678" 
                className="w-8 h-8 bg-jade-800 hover:bg-jade-900 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};