"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Clock } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const StatCard = ({ icon: Icon, value, label, delay }: {
  icon: React.ElementType;
  value: string;
  label: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <Card variant="feature" className="text-center h-full bg-amber-50 border-2 border-yellow-600 flex items-center justify-center">
      <div>
        <div className="text-5xl font-serif font-bold text-black mb-3">
          {value}
        </div>
        <p className="text-lg text-black font-medium">
          {label}
        </p>
      </div>
    </Card>
  </motion.div>
);

export const About: React.FC = () => {
  return (
    <section id="about" className="py-[75px] relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Mexican Decorative Element */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-6"
          >
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center shadow-warm">
              <Heart className="w-9 h-9 text-white" />
            </div>
            <div className="h-px bg-coral-400 flex-1"></div>
          </motion.div>
          
          {/* Papel Picado Background Pattern */}
          <div className="absolute -top-8 -left-8 w-40 h-32 opacity-15 pointer-events-none">
            <svg viewBox="0 0 160 128" fill="none" className="w-full h-full">
              {/* Papel picado triangular pattern */}
              <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="#E4007C"/>
              <path d="M60 0 L80 20 L60 40 L40 20 Z" fill="#F97316"/>
              <path d="M100 0 L120 20 L100 40 L80 20 Z" fill="#C4622D"/>
              <path d="M140 0 L160 20 L140 40 L120 20 Z" fill="#E4007C"/>
              
              <path d="M0 40 L20 60 L0 80 L-20 60 Z" fill="#C4622D"/>
              <path d="M40 40 L60 60 L40 80 L20 60 Z" fill="#E4007C"/>
              <path d="M80 40 L100 60 L80 80 L60 60 Z" fill="#F97316"/>
              <path d="M120 40 L140 60 L120 80 L100 60 Z" fill="#E4007C"/>
              
              <path d="M20 80 L40 100 L20 120 L0 100 Z" fill="#F97316"/>
              <path d="M60 80 L80 100 L60 120 L40 100 Z" fill="#C4622D"/>
              <path d="M100 80 L120 100 L100 120 L80 100 Z" fill="#E4007C"/>
            </svg>
          </div>

          <h2 className="text-[72px] font-serif font-medium mb-4 relative z-10">
            <span className="text-jade-800">Nuestra</span> <span className="text-pink-500">Historia</span>
          </h2>
          <p className="text-base text-jade-600 max-w-2xl mx-auto font-normal relative z-10">
            Una tradición familiar que comenzó hace 8 años en el corazón de Roma Norte
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-cream-50/90 backdrop-blur-sm p-6 rounded-2xl shadow-warm">
              <h3 className="text-2xl font-serif font-bold text-pink-600 mb-4">
                La Cocina de María
              </h3>
              <p className="text-jade-700 leading-relaxed mb-4">
                Desde 2017, María ha compartido con Roma Norte las recetas ancestrales de su familia, 
                transmitidas de generación en generación desde el estado de Puebla. Lo que comenzó como 
                un sueño de preservar la auténtica cocina mexicana, se ha convertido en un refugio 
                gastronómico donde cada platillo cuenta una historia.
              </p>
              <p className="text-jade-700 leading-relaxed">
                En nuestra cocina, cada mole se prepara con más de 20 ingredientes molidos a mano en 
                metate, cada tortilla se hace al momento, y cada salsa guarda los secretos de una 
                tradición culinaria que se niega a perderse en el tiempo.
              </p>
            </div>

            <div className="bg-jade-50/90 backdrop-blur-sm p-6 rounded-2xl shadow-warm">
              <h4 className="text-xl font-serif font-bold text-jade-800 mb-3">
                Nuestra Filosofía
              </h4>
              <ul className="space-y-3 text-jade-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coral-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Preservar las recetas tradicionales mexicanas sin comprometer su autenticidad</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Utilizar únicamente ingredientes frescos y de la más alta calidad</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-jade-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Crear un ambiente familiar donde todos se sientan en casa</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Chef Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="bg-cream-50/95 backdrop-blur-sm p-8 rounded-3xl shadow-warm-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-80 lg:h-96 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Chef María Image */}
                  <img 
                    src="https://www.gastrolabweb.com/u/fotografias/m/2021/9/23/f768x1-19234_19361_32.png"
                    alt="Chef María - Fundadora y Chef Ejecutiva de La Cocina de María"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2 drop-shadow-lg">
                      Chef María
                    </h3>
                    <p className="text-lg font-semibold drop-shadow-md mb-1">
                      Fundadora y Chef Ejecutiva
                    </p>
                    <p className="text-sm drop-shadow-md italic">
                      "Cada platillo es una carta de amor a México"
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-pink-500/80 backdrop-blur-sm rounded-full opacity-90 flex items-center justify-center">
                    <div className="w-6 h-6 bg-coral-400 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-jade-400/80 backdrop-blur-sm rounded-full opacity-90"></div>
                  <div className="absolute top-1/2 right-4 w-4 h-4 bg-gold-400/80 backdrop-blur-sm rounded-full opacity-80"></div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-pink-200 rounded-full opacity-30 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-jade-200 rounded-full opacity-25 -z-10"></div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          <StatCard
            icon={Clock}
            value="8"
            label="Años de Tradición"
            delay={0.1}
          />
          <StatCard
            icon={Heart}
            value="500+"
            label="Familias Satisfechas"
            delay={0.2}
          />
          <StatCard
            icon={Award}
            value="20+"
            label="Platillos Tradicionales"
            delay={0.3}
          />
          <StatCard
            icon={Users}
            value="100%"
            label="Recetas Ancestrales"
            delay={0.4}
          />
        </motion.div>
      </div>
    </section>
  );
};