"use client";

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Menu } from '@/components/sections/Menu';
import { Testimonials } from '@/components/sections/Testimonials';
import { Chefs } from '@/components/sections/Chefs';
import { ContactForm } from '@/components/sections/ContactForm';
import { ContactInfo } from '@/components/sections/ContactInfo';
import { Footer } from '@/components/layout/Footer';
import { UnifiedBackground } from '@/components/layout/UnifiedBackground';
import { pageVariants, staggerSlow } from '@/lib/animations';

export default function Home() {
  return (
    <>
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageVariants}
      >
        <UnifiedBackground>
          <motion.main
            variants={staggerSlow}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={pageVariants}>
              <Hero />
            </motion.div>
            <motion.div variants={pageVariants}>
              <About />
            </motion.div>
            <motion.div variants={pageVariants}>
              <Menu />
            </motion.div>
            <motion.div variants={pageVariants}>
              <Testimonials />
            </motion.div>
            <motion.div variants={pageVariants}>
              <Chefs />
            </motion.div>
            <motion.div variants={pageVariants}>
              <ContactForm />
            </motion.div>
            <motion.div variants={pageVariants}>
              <ContactInfo />
            </motion.div>
            <div className="py-[75px]"></div>
          </motion.main>
        </UnifiedBackground>
      </motion.div>
      <Footer />
    </>
  );
}
