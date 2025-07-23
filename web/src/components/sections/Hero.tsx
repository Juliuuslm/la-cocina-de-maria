"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { RESTAURANT_INFO, getWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer, 
  textReveal, 
  hoverScale, 
  buttonPress,
  floatingAnimation,
  scaleIn,
  viewportConfig 
} from '@/lib/animations';
import { useParallax, useParallaxRotate } from '@/hooks/useParallax';

const HeroFeature = ({ title, description, delay }: {
  title: string;
  description: string;
  delay: number;
}) => {
  // Colores unificados en crema cálido que combina con el fondo de página
  const colors = {
    bg: 'bg-amber-50',
    border: 'border-yellow-600',
    titleText: 'text-black',
    descText: 'text-black'
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      whileHover="hover"
    >
      <motion.div 
        variants={hoverScale}
        className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-8 text-center h-full shadow-warm cursor-pointer`}
      >
        <motion.h3 
          variants={textReveal}
          className={`text-3xl font-serif font-extrabold ${colors.titleText} mb-6`}
        >
          {title}
        </motion.h3>
        <motion.p 
          variants={fadeInUp}
          className={`${colors.descText} text-lg leading-relaxed`}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  const { ref: parallaxRef, y: parallaxY } = useParallax({ speed: 0.3 });
  const { ref: rotateRef, rotate } = useParallaxRotate(0.2);
  
  const handleReservation = () => {
    const whatsappUrl = getWhatsAppUrl(RESTAURANT_INFO.whatsapp, DEFAULT_WHATSAPP_MESSAGE);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen pt-20">
      <div className="container mx-auto px-4 py-[75px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Content Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >

            {/* Welcome Text */}
            <motion.div
              variants={fadeInLeft}
              className="relative"
            >
              <motion.p 
                variants={fadeInUp}
                className="text-terracota-600 font-script text-2xl lg:text-3xl mb-4 relative z-10"
              >
                Bienvenidos a
              </motion.p>
              <motion.h1 
                variants={textReveal}
                className="text-[128px] font-serif font-semibold text-jade-800 leading-[100%] relative z-10"
              >
                La Cocina <br />
                <motion.span 
                  variants={textReveal}
                  className="text-pink-500 drop-shadow-sm"
                >
                  de María
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Tagline */}
            <motion.div
              variants={fadeInUp}
              className="space-y-4"
            >
              <motion.div 
                variants={fadeInLeft}
                className="inline-flex items-center bg-amber-50 text-amber-800 border-2 border-amber-600 px-4 py-2 rounded-full text-sm font-medium shadow-warm"
              >
                <motion.span 
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                  className="mr-2"
                >
                  ✨
                </motion.span>
                Tradición familiar desde 2017
              </motion.div>
              <motion.p 
                variants={textReveal}
                className="text-base lg:text-lg text-jade-700 leading-relaxed max-w-lg font-semibold bg-cream-50/85 backdrop-blur-sm p-4 rounded-xl"
              >
                Disfruta de auténtica comida casera mexicana preparada con recetas ancestrales 
                e ingredientes frescos en el corazón de Roma Norte.
              </motion.p>
            </motion.div>

            {/* Location & Rating */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap items-center gap-6 text-sm"
            >
              <motion.div 
                variants={fadeInLeft}
                className="flex items-center space-x-2 text-jade-800 bg-cream-50/90 backdrop-blur-sm px-3 py-2 rounded-lg"
              >
                <MapPin className="w-4 h-4 text-coral-600" />
                <span className="font-semibold text-sm lg:text-base">Roma Norte, CDMX</span>
              </motion.div>
              <motion.div 
                variants={fadeInRight}
                className="flex items-center space-x-2 text-jade-800 bg-cream-50/90 backdrop-blur-sm px-3 py-2 rounded-lg"
              >
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + 1 }}
                    >
                      <Star className="w-4 h-4 fill-current text-gold-500" />
                    </motion.div>
                  ))}
                </div>
                <span className="font-semibold text-sm lg:text-base">8 años de tradición</span>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                variants={fadeInLeft}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div variants={buttonPress}>
                  <Button 
                    size="lg" 
                    onClick={handleReservation}
                    className="group w-full sm:w-auto"
                  >
                    <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Hacer Reservación
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div variants={buttonPress}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto"
                  >
                    Ver Menú
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Image Right */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative z-10">
              {/* Main Dish Image */}
              <motion.div 
                className="bg-cream-50/95 backdrop-blur-sm p-8 rounded-3xl shadow-warm-lg transform"
                whileHover={{ 
                  rotate: 0,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                initial={{ rotate: 2 }}
                animate={{ rotate: 2 }}
              >
                <motion.div 
                  className="w-full h-[32rem] lg:h-[36rem] xl:h-[42rem] rounded-2xl flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Mole Poblano Image */}
                  <img 
                    src="https://www.foodrepublic.com/img/gallery/the-7-moles-of-oaxaca/l-intro-1687910174.jpg"
                    alt="Mole Poblano - Nuestra especialidad de la casa"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
                  <motion.div 
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                    className="absolute bottom-6 left-6 text-white"
                  >
                    <motion.h3 
                      variants={textReveal}
                      className="text-2xl font-serif font-bold mb-2 drop-shadow-lg"
                    >
                      Mole Poblano
                    </motion.h3>
                    <motion.p 
                      variants={fadeInUp}
                      className="font-semibold drop-shadow-md"
                    >
                      Nuestra especialidad de la casa
                    </motion.p>
                  </motion.div>
                  
                  {/* Decorative Elements - Mexican inspired */}
                  <motion.div 
                    variants={floatingAnimation}
                    initial="initial"
                    animate="animate"
                    className="absolute top-4 right-4 w-12 h-12 bg-coral-400/80 backdrop-blur-sm rounded-full opacity-90 flex items-center justify-center"
                  >
                    <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
                  </motion.div>
                  <motion.div 
                    variants={floatingAnimation}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-4 right-4 w-8 h-8 bg-jade-400/80 backdrop-blur-sm rounded-full opacity-90"
                  ></motion.div>
                  <motion.div 
                    variants={floatingAnimation}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 1 }}
                    className="absolute top-1/2 right-4 w-4 h-4 bg-gold-400/80 backdrop-blur-sm rounded-full opacity-80"
                  ></motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Background Decorative Circle with Parallax */}
            <motion.div 
              ref={parallaxRef}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              style={{ y: parallaxY }}
              className="absolute -top-8 -right-8 w-64 h-64 bg-coral-200 rounded-full opacity-25 -z-10"
            ></motion.div>
            
            {/* Additional Decorative Elements */}
            <motion.div
              ref={rotateRef}
              style={{ rotate }}
              className="absolute -bottom-12 -left-12 w-32 h-32 border-2 border-gold-300/30 rounded-full -z-10"
            ></motion.div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-24 grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          <HeroFeature
            title="Recetas Ancestrales"
            description="Platillos preparados con recetas familiares transmitidas de generación en generación, conservando los sabores auténticos de México."
            delay={1.4}
          />
          
          <HeroFeature
            title="Ingredientes Frescos"
            description="Seleccionamos cuidadosamente ingredientes frescos y locales cada día para garantizar la calidad y sabor de nuestros platillos."
            delay={1.6}
          />
          
          <HeroFeature
            title="Ambiente Familiar"
            description="Un espacio cálido y acogedor donde las familias se reúnen para compartir momentos especiales alrededor de la mesa."
            delay={1.8}
          />
        </motion.div>
      </div>
    </section>
  );
};