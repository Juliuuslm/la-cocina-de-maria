"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Users, Award, Heart, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer, 
  textReveal, 
  hoverScale,
  scaleIn,
  viewportConfig 
} from '@/lib/animations';
import { useCountAnimationFromString } from '@/hooks/useCountAnimation';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carmen González",
    location: "Ciudad de México",
    text: "El mole poblano transporta directamente a Puebla, con sabores auténticos que solo una receta familiar puede ofrecer.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    date: "Hace 2 semanas"
  },
  {
    id: 2,
    name: "Roberto Martínez",
    location: "Guadalajara",
    text: "Los chiles en nogada superaron todas mis expectativas. La nogada fresca y el picadillo perfectamente sazonado.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    date: "Hace 1 semana"
  },
  {
    id: 3,
    name: "María Elena Rodríguez",
    location: "Puebla",
    text: "Como poblana, confirmo que preparan el mole como debe ser. Cada ingrediente se nota y el equilibrio es perfecto.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", 
    date: "Hace 3 días"
  },
  {
    id: 4,
    name: "Fernando Silva",
    location: "Monterrey",
    text: "Los tacos al pastor son espectaculares, con sabor único del trompo tradicional y tortillas hechas a mano.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    date: "Hace 1 mes"
  }
];

const statistics = [
  {
    id: 1,
    value: "98%",
    label: "Clientes Satisfechos",
    icon: Heart,
    delay: 0.1
  },
  {
    id: 2,
    value: "500+",
    label: "Familias Atendidas",
    icon: Users,
    delay: 0.2
  },
  {
    id: 3,
    value: "4.9/5",
    label: "Calificación Promedio",
    icon: Star,
    delay: 0.3
  },
  {
    id: 4,
    value: "100%",
    label: "Ingredientes Frescos",
    icon: Award,
    delay: 0.4
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center space-x-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating 
            ? 'text-gold-500 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial, index: number }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportConfig}
    whileHover="hover"
  >
    <motion.div variants={hoverScale}>
      <Card variant="feature" className="h-full bg-amber-50 border-2 border-yellow-600 p-6 cursor-pointer">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col h-full"
        >
          {/* Quote Icon */}
          <motion.div variants={scaleIn}>
            <Quote className="w-8 h-8 text-coral-400/40 mb-4" />
          </motion.div>
          
          {/* Testimonial Text */}
          <motion.blockquote 
            variants={textReveal}
            className="text-black leading-relaxed mb-6 flex-1 italic"
          >
            "{testimonial.text}"
          </motion.blockquote>
          
          {/* Rating */}
          <motion.div variants={fadeInUp} className="mb-4">
            <StarRating rating={testimonial.rating} />
          </motion.div>
          
          {/* Author Info */}
          <motion.div 
            variants={fadeInLeft}
            className="flex items-center space-x-3"
          >
            <motion.div 
              variants={scaleIn}
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-coral-500/30"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <motion.h4 
                variants={textReveal}
                className="font-serif font-bold text-black"
              >
                {testimonial.name}
              </motion.h4>
              <motion.p 
                variants={fadeInUp}
                className="text-coral-600 text-sm"
              >
                {testimonial.location}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  </motion.div>
);

const StatCard = ({ stat }: { stat: typeof statistics[0] }) => {
  const { animatedValue, ref } = useCountAnimationFromString(stat.value, 2000);
  
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      whileHover="hover"
    >
      <motion.div variants={hoverScale}>
        <Card variant="feature" className="text-center h-full bg-amber-50 border-2 border-yellow-600 flex items-center justify-center cursor-pointer">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div 
              ref={ref}
              variants={textReveal}
              className="text-5xl font-serif font-bold text-black mb-3"
            >
              {animatedValue}
            </motion.div>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-black font-medium"
            >
              {stat.label}
            </motion.p>
          </motion.div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export const Testimonials: React.FC = () => {

  return (
    <section id="testimonials" className="py-[75px] relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.div
            variants={scaleIn}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <motion.div 
              variants={scaleIn}
              className="w-16 h-16 bg-coral-500 rounded-full flex items-center justify-center shadow-warm"
            >
              <Quote className="w-9 h-9 text-white" />
            </motion.div>
            <motion.div 
              variants={fadeInRight}
              className="h-px bg-gold-400 flex-1 max-w-32"
            ></motion.div>
          </motion.div>
          
          <motion.h2 
            variants={textReveal}
            className="text-[72px] font-serif font-medium mb-4 relative z-10"
          >
            <span className="text-jade-800">Lo que dicen</span> <span className="text-pink-500">nuestros clientes</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-base text-jade-600 max-w-2xl mx-auto font-normal relative z-10"
          >
            Testimonios reales de familias que han disfrutado nuestra auténtica cocina mexicana
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {statistics.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </motion.div>

        {/* Verification Text */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-12"
        >
          <motion.p 
            variants={textReveal}
            className="text-jade-600 text-sm"
          >
            Testimonios verificados de clientes reales
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};