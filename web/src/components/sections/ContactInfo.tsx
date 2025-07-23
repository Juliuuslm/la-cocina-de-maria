"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, Car, CreditCard, MessageCircle, Bus, Navigation } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { RESTAURANT_INFO, getWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';

const InfoCard = ({ title, children, delay }: {
  title: string;
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <Card variant="feature" className="h-full bg-amber-50 border-2 border-yellow-600 p-8 text-center">
      <div className="flex flex-col items-center mb-6">
        <h3 className="text-4xl font-serif font-bold text-black">
          {title}
        </h3>
      </div>
      <div className="text-black">
        {children}
      </div>
    </Card>
  </motion.div>
);

export const ContactInfo: React.FC = () => {
  return (
    <section id="contacto" className="py-[75px] relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-16 h-16 bg-coral-500 rounded-full flex items-center justify-center shadow-warm">
              <Phone className="w-9 h-9 text-white" />
            </div>
            <div className="h-px bg-gold-400 flex-1 max-w-32"></div>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-serif font-medium mb-4 relative z-10">
            <span className="text-jade-800">Información</span> <span className="text-pink-500">y Contacto</span>
          </h2>
          <p className="text-base text-jade-600 max-w-2xl mx-auto font-normal relative z-10">
            Te esperamos en el corazón de Roma Norte. Encuentra toda la información que necesitas para visitarnos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Contacto */}
          <InfoCard title="Contacto" delay={0.1}>
            <div className="space-y-4">
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-6 h-6 text-coral-600" />
                <div className="text-center">
                  <span className="block text-lg font-bold">
                    {RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.neighborhood}, {RESTAURANT_INFO.address.city} {RESTAURANT_INFO.address.zipCode}
                  </span>
                  <a href="https://maps.google.com" className="text-pink-500 text-base hover:text-coral-600 transition-colors">
                    Ver en Google Maps →
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MessageCircle className="w-6 h-6 text-green-500" />
                <a href={getWhatsAppUrl(RESTAURANT_INFO.whatsapp, DEFAULT_WHATSAPP_MESSAGE)} className="hover:text-green-600 transition-colors text-lg font-bold">
                  WhatsApp: {RESTAURANT_INFO.whatsapp}
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-6 h-6 text-coral-600" />
                <span className="text-lg font-bold">{RESTAURANT_INFO.email}</span>
              </div>
            </div>
          </InfoCard>

          {/* Horarios */}
          <InfoCard title="Horarios" delay={0.2}>
            <div className="space-y-4">
              <div className="text-center">
                <h5 className="font-bold text-2xl mb-3">Lunes - Jueves</h5>
                <p className="text-xl font-semibold">{RESTAURANT_INFO.hours.monday}</p>
              </div>
              <div className="text-center">
                <h5 className="font-bold text-2xl mb-3">Viernes - Sábado</h5>
                <p className="text-xl font-semibold">{RESTAURANT_INFO.hours.friday}</p>
              </div>
              <div className="text-center">
                <h5 className="font-bold text-2xl mb-3">Domingo</h5>
                <p className="text-xl font-semibold">{RESTAURANT_INFO.hours.sunday}</p>
              </div>
              <div className="pt-4 border-t border-amber-200 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Calendar className="w-5 h-5 text-coral-600" />
                  <span className="text-pink-500 font-bold text-base">Horarios especiales:</span>
                </div>
                <p className="text-base">Días festivos: Consultar horarios especiales</p>
              </div>
            </div>
          </InfoCard>

          {/* Cómo Llegar */}
          <InfoCard title="Cómo Llegar" delay={0.3}>
            <div className="space-y-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Car className="w-6 h-6 text-coral-600" />
                  <h5 className="font-bold text-xl">En Auto</h5>
                </div>
                <p className="text-base leading-relaxed">
                  Estacionamiento gratuito disponible en Roma Norte
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Bus className="w-6 h-6 text-coral-600" />
                  <h5 className="font-bold text-xl">Transporte</h5>
                </div>
                <p className="text-base leading-relaxed mb-2">
                  <strong>Metro:</strong> Insurgentes (L1)
                </p>
                <p className="text-base leading-relaxed">
                  <strong>Metrobús:</strong> Álvaro Obregón
                </p>
              </div>
              
              <div className="pt-4 border-t border-amber-200 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <CreditCard className="w-5 h-5 text-coral-600" />
                  <span className="text-pink-500 font-bold text-base">Métodos de Pago:</span>
                </div>
                <p className="text-base">Efectivo, tarjetas y pagos digitales</p>
              </div>
            </div>
          </InfoCard>
        </div>
        
        {/* Espaciado adicional abajo */}
        <div className="py-8"></div>
      </div>
    </section>
  );
};