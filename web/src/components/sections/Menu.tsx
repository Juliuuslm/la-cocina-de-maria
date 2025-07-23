"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Sample Mexican food images - replace with actual restaurant photos
const galleryImages = [
  {
    src: "https://angelopolis.com/wp-content/uploads/2015/08/Mole-Poblano.jpg",
    alt: "Mole Poblano tradicional",
    title: "Mole Poblano"
  },
  {
    src: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/03/Copia-de-Fotolia_191701524_Subscription_Monthly_XXL-1024x768.jpg", 
    alt: "Tacos al Pastor auténticos",
    title: "Tacos al Pastor"
  },
  {
    src: "https://www.recipemash.com/wp-content/uploads/2023/06/Chiles-en-nogado.jpg",
    alt: "Chiles en Nogada",
    title: "Chiles en Nogada"
  },
  {
    src: "https://blog.amigofoods.com/wp-content/uploads/2021/03/pozole-rojo-mexican-soup.jpg",
    alt: "Pozole Rojo tradicional", 
    title: "Pozole Rojo"
  },
  {
    src: "https://yumtamtam.de/ytt_images/Limonade.jpg",
    alt: "Aguas frescas mexicanas",
    title: "Aguas Frescas"
  },
  {
    src: "https://gastronomicainternacional.com/wp-content/uploads/2020/04/postre-mexicano-2-1024x576.jpg",
    alt: "Postres mexicanos tradicionales",
    title: "Postres"
  }
];

const menuItems = [
  {
    id: 1,
    name: "Mole Poblano",
    price: 280,
    description: "Tradicional mole con más de 20 ingredientes, pollo de rancho criado en libertad y tortillas hechas a mano",
    image: "https://angelopolis.com/wp-content/uploads/2015/08/Mole-Poblano.jpg",
    featured: true
  },
  {
    id: 2, 
    name: "Tacos al Pastor",
    price: 180,
    description: "Tres tacos con carne marinada 24 horas, piña asada, cebolla morada, cilantro fresco y salsa verde",
    image: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/03/Copia-de-Fotolia_191701524_Subscription_Monthly_XXL-1024x768.jpg",
    featured: false
  },
  {
    id: 3,
    name: "Chiles en Nogada", 
    price: 350,
    description: "Chiles poblanos rellenos de picadillo dulce, nogada fresca de castilla y granada roja. Temporada agosto-septiembre",
    image: "https://www.recipemash.com/wp-content/uploads/2023/06/Chiles-en-nogado.jpg",
    featured: true
  },
  {
    id: 4,
    name: "Pozole Rojo",
    price: 220,
    description: "Caldo ancestral con maíz cacahuazintle, carne de cerdo, chile guajillo y acompañamientos tradicionales",
    image: "https://blog.amigofoods.com/wp-content/uploads/2021/03/pozole-rojo-mexican-soup.jpg",
    featured: false
  },
  {
    id: 5,
    name: "Aguas Frescas",
    price: 45,
    description: "Refrescantes bebidas tradicionales de jamaica, tamarindo, horchata y frutas de temporada naturales",
    image: "https://yumtamtam.de/ytt_images/Limonade.jpg",
    featured: false
  },
  {
    id: 6,
    name: "Postres",
    price: 120,
    description: "Dulces tradicionales mexicanos: flan napolitano, tres leches, arroz con leche y churros con cajeta",
    image: "https://gastronomicainternacional.com/wp-content/uploads/2020/04/postre-mexicano-2-1024x576.jpg",
    featured: false
  }
];

const GalleryImage = ({ image, index }: { image: typeof galleryImages[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-300"
  >
    <div className="aspect-square overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-4 left-4 text-white">
        <h4 className="font-serif font-bold text-lg drop-shadow-lg">
          {image.title}
        </h4>
      </div>
    </div>
  </motion.div>
);

const MenuCard = ({ 
  item, 
  index, 
  isSelected, 
  onClick 
}: { 
  item: typeof menuItems[0], 
  index: number,
  isSelected: boolean,
  onClick: () => void
}) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    onClick={onClick}
    className="cursor-pointer"
  >
    <Card 
      variant="feature" 
      className={`relative overflow-hidden hover:scale-[1.02] transition-all duration-300 bg-amber-50 border-2 ${
        isSelected 
          ? 'border-yellow-600 shadow-warm-lg scale-[1.02]' 
          : 'border-black hover:border-yellow-600'
      }`}
    >
      {/* Price Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-jade-700 text-white px-3 py-1 rounded-full font-bold text-lg shadow-warm">
          ${item.price}
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        {/* Dish Image */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-warm">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 pt-2">
          <h3 className="text-xl font-serif font-bold text-black mb-2">
            {item.name}
          </h3>
          <p className="text-black leading-relaxed text-sm">
            {item.description}
          </p>
        </div>
      </div>
      
      {/* Featured Badge */}
      {item.featured && (
        <div className="absolute top-4 left-4">
          <div className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
            Especialidad
          </div>
        </div>
      )}
    </Card>
  </motion.div>
);

export const Menu: React.FC = () => {
  const [selectedMenuId, setSelectedMenuId] = useState(1); // Default to first item (Mole Poblano)
  
  const selectedItem = menuItems.find(item => item.id === selectedMenuId) || menuItems[0];
  
  const handleItemSelection = (itemId: number) => {
    setSelectedMenuId(itemId);
  };
  
  const handleMenuAction = () => {
    // Open WhatsApp or menu link
    window.open('https://wa.me/5215512345678?text=Hola, me gustaría ver el menú completo', '_blank');
  };

  return (
    <section id="menu" className="py-[75px] relative">
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
            <span className="text-jade-800">Nuestros</span> <span className="text-pink-500">Platillos</span>
          </h2>
          <p className="text-base text-jade-600 max-w-2xl mx-auto font-normal relative z-10">
            Auténticos sabores mexicanos preparados con recetas familiares y ingredientes de la más alta calidad
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Photo Gallery - Left Side */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 flex flex-col min-h-[600px]"
            >
            <div className="text-center lg:text-left mb-6">
              <h3 className="text-2xl font-serif font-bold text-jade-800 mb-2">
                Galería Gastronómica
              </h3>
              <p className="text-jade-600">
                Imagen del platillo seleccionado
              </p>
            </div>
            
            {/* Single Large Image of Selected Item */}
            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedItem.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-2xl shadow-warm-lg"
                >
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-auto max-h-[650px] min-h-[500px] object-contain"
                  />
                
                {/* Selection indicator */}
                <div className="absolute top-4 right-4">
                  <div className="bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-warm">
                    Seleccionado
                  </div>
                </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            </motion.div>
          </div>

          {/* Menu Cards - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left mb-6">
              <h3 className="text-2xl font-serif font-bold text-jade-800 mb-2">
                Especialidades de la Casa
              </h3>
              <p className="text-jade-600">
                Nuestros platillos más emblemáticos
              </p>
            </div>
            
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <MenuCard 
                  key={item.id} 
                  item={item} 
                  index={index}
                  isSelected={selectedMenuId === item.id}
                  onClick={() => handleItemSelection(item.id)}
                />
              ))}
            </div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center pt-6"
            >
              <Button 
                variant="primary" 
                size="lg"
                onClick={handleMenuAction}
                className="shadow-warm-lg hover:shadow-xl transition-shadow duration-300"
              >
                Ver Menú Completo
              </Button>
              <p className="text-sm text-jade-600 mt-2">
                Descubre todos nuestros platillos y bebidas tradicionales
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};