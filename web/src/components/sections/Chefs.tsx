"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Award, Clock, Users } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface Chef {
  id: number;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  image: string;
  description: string;
}

const chefs: Chef[] = [
  {
    id: 1,
    name: "Chef María Elena Vásquez",
    title: "Chef Ejecutiva",
    specialty: "Mole Poblano y Cocina Tradicional",
    experience: "25 años",
    image: "https://storage.googleapis.com/gx-global-cms/mkt/0b1a8199-48d3-48fe-9506-ca56680555a3.png",
    description: "Maestra en el arte del mole poblano, heredó las recetas familiares de su abuela poblana"
  },
  {
    id: 2,
    name: "Chef Ricardo Morales",
    title: "Especialista en Carnes",
    specialty: "Tacos al Pastor y Asados",
    experience: "15 años",
    image: "https://www.culinariamexicana.com.mx/wp-content/uploads/2022/10/alejandro-ruiz-04-scaled.jpg",
    description: "Experto en trompo al pastor y técnicas de asado tradicionales del norte de México"
  },
  {
    id: 3,
    name: "Chef Esperanza Ramírez",
    title: "Repostera Tradicional",
    specialty: "Postres y Dulces Mexicanos",
    experience: "20 años",
    image: "https://storage.googleapis.com/gx-global-cms/mkt/87638868-cfb7-4f11-a4a1-130c3b114c63.png",
    description: "Especialista en tres leches, churros y dulces tradicionales con técnicas ancestrales"
  }
];

const ChefCard = ({ chef, index }: { chef: Chef, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-500"
  >
    {/* Chef Image */}
    <div className="relative aspect-[4/5] overflow-hidden">
      <img
        src={chef.image}
        alt={chef.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      
      {/* Experience Badge */}
      <div className="absolute top-4 right-4">
        <div className="bg-jade-700 text-white px-3 py-1 rounded-full font-bold text-sm shadow-warm flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{chef.experience}</span>
        </div>
      </div>
      
      {/* Chef Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-serif font-bold mb-1 text-cream-50">
            {chef.name}
          </h3>
          <p className="text-coral-300 font-semibold mb-2">
            {chef.title}
          </p>
          <div className="flex items-center space-x-2 mb-3">
            <Award className="w-4 h-4 text-gold-400" />
            <p className="text-sm text-gray-300">
              {chef.specialty}
            </p>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            {chef.description}
          </p>
        </motion.div>
      </div>
    </div>
    
    {/* Hover Effect Border */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-coral-500/50 rounded-2xl transition-all duration-300"></div>
  </motion.div>
);

export const Chefs: React.FC = () => {
  return (
    <section id="chefs" className="py-[75px] relative">
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
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-16 h-16 bg-coral-500 rounded-full flex items-center justify-center shadow-warm">
              <ChefHat className="w-9 h-9 text-white" />
            </div>
            <div className="h-px bg-gold-400 flex-1 max-w-32"></div>
          </motion.div>
          
          <h2 className="text-[72px] font-serif font-medium mb-4 relative z-10">
            <span className="text-jade-800">Nuestros</span> <span className="text-pink-500">Maestros Cocineros</span>
          </h2>
          <p className="text-base text-jade-600 max-w-2xl mx-auto font-normal relative z-10">
            Conoce a los artistas culinarios que dan vida a cada platillo con pasión, dedicación y tradición familiar mexicana
          </p>
        </motion.div>

        {/* Chefs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {chefs.map((chef, index) => (
            <ChefCard key={chef.id} chef={chef} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card variant="feature" className="text-center h-full bg-amber-50 border-2 border-yellow-600 flex items-center justify-center">
              <div>
                <div className="text-5xl font-serif font-bold text-black mb-3">
                  3
                </div>
                <p className="text-lg text-black font-medium">
                  Chefs Especializados
                </p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card variant="feature" className="text-center h-full bg-amber-50 border-2 border-yellow-600 flex items-center justify-center">
              <div>
                <div className="text-5xl font-serif font-bold text-black mb-3">
                  60+
                </div>
                <p className="text-lg text-black font-medium">
                  Años de Experiencia
                </p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card variant="feature" className="text-center h-full bg-amber-50 border-2 border-yellow-600 flex items-center justify-center">
              <div>
                <div className="text-5xl font-serif font-bold text-black mb-3">
                  100+
                </div>
                <p className="text-lg text-black font-medium">
                  Recetas Tradicionales
                </p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card variant="feature" className="text-center h-full bg-amber-50 border-2 border-yellow-600 flex items-center justify-center">
              <div>
                <div className="text-5xl font-serif font-bold text-black mb-3">
                  24/7
                </div>
                <p className="text-lg text-black font-medium">
                  Pasión por Cocinar
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-jade-600 font-medium">
            Cada platillo es preparado con amor y dedicación, siguiendo recetas familiares transmitidas de generación en generación
          </p>
        </motion.div>
      </div>
    </section>
  );
};