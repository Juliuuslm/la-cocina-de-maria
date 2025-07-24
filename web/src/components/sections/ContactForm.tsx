"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  User, 
  Mail, 
  Phone, 
  Calendar,
  Users,
  FileText,
  Send,
  Check,
  AlertCircle,
  Loader2,
  ChefHat
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useContactForm } from '@/hooks/useContactForm';
import { CONTACT_SUBJECTS } from '@/lib/constants';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer, 
  textReveal,
  hoverScale,
  buttonPress,
  scaleIn,
  viewportConfig 
} from '@/lib/animations';

const FormField = ({ 
  icon: Icon, 
  label, 
  error, 
  children, 
  required = false 
}: {
  icon: React.ElementType;
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) => (
  <motion.div variants={fadeInUp} className="space-y-2">
    <label className="flex items-center space-x-2 text-jade-800 font-semibold text-sm">
      <Icon className="w-4 h-4 text-coral-600" />
      <span>
        {label}
        {required && <span className="text-pink-500 ml-1">*</span>}
      </span>
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          className="flex items-center space-x-1 text-red-600 text-xs"
        >
          <AlertCircle className="w-3 h-3" />
          <span>{error}</span>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const StatusMessage = ({ status, errorMessage }: { status: string; errorMessage: string }) => (
  <AnimatePresence>
    {status !== 'idle' && (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className={`p-4 rounded-xl flex items-center space-x-3 ${
          status === 'success' 
            ? 'bg-green-50 border-2 border-green-200 text-green-800' 
            : status === 'error'
            ? 'bg-red-50 border-2 border-red-200 text-red-800'
            : 'bg-blue-50 border-2 border-blue-200 text-blue-800'
        }`}
      >
        {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
        {status === 'success' && <Check className="w-5 h-5" />}
        {status === 'error' && <AlertCircle className="w-5 h-5" />}
        
        <div>
          {status === 'loading' && <p className="font-medium">Enviando mensaje...</p>}
          {status === 'success' && (
            <>
              <p className="font-medium">¡Mensaje enviado exitosamente!</p>
              <p className="text-sm">Se abrirá WhatsApp para confirmar el envío.</p>
            </>
          )}
          {status === 'error' && (
            <>
              <p className="font-medium">Error al enviar mensaje</p>
              <p className="text-sm">{errorMessage}</p>
            </>
          )}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export const ContactForm: React.FC = () => {
  const {
    registerName,
    registerEmail,
    registerPhone,
    registerSubject,
    registerDate,
    registerGuests,
    registerMessage,
    handleSubmit,
    errors,
    status,
    errorMessage,
    isReservation,
    isValid
  } = useContactForm();

  return (
    <section id="contactform" className="py-[75px] relative w-full overflow-x-hidden">
      <div className="container mx-auto px-4 w-full max-w-7xl">
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
            <div className="w-16 h-16 bg-coral-500 rounded-full flex items-center justify-center shadow-warm">
              <MessageCircle className="w-9 h-9 text-white" />
            </div>
            <motion.div 
              variants={fadeInRight}
              className="h-px bg-gold-400 flex-1 max-w-32"
            />
          </motion.div>
          
          <motion.h2 
            variants={textReveal}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-serif font-medium mb-4 relative z-10"
          >
            <span className="text-jade-800">Contáctanos</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-base text-jade-600 max-w-2xl mx-auto font-normal relative z-10"
          >
            Envíanos un mensaje para reservaciones, eventos especiales o cualquier consulta. Te responderemos a la brevedad
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto"
        >
          <Card variant="feature" className="bg-amber-50 border-2 border-yellow-600 p-8">
            <motion.form
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Status Message */}
              <StatusMessage status={status} errorMessage={errorMessage} />

              {/* Form Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Name Field */}
                <FormField icon={User} label="Nombre completo" required error={errors.name?.message}>
                  <input
                    {...registerName()}
                    type="text"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-coral-500 focus:outline-none transition-colors bg-white text-black placeholder-jade-400"
                    placeholder="Ingresa tu nombre completo"
                  />
                </FormField>

                {/* Email Field */}
                <FormField icon={Mail} label="Correo electrónico" required error={errors.email?.message}>
                  <input
                    {...registerEmail()}
                    type="email"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-coral-500 focus:outline-none transition-colors bg-white text-black placeholder-jade-400"
                    placeholder="tu@email.com"
                  />
                </FormField>

                {/* Phone Field */}
                <FormField icon={Phone} label="Teléfono" error={errors.phone?.message}>
                  <input
                    {...registerPhone()}
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-coral-500 focus:outline-none transition-colors bg-white text-black placeholder-jade-400"
                    placeholder="55 1234 5678"
                  />
                </FormField>

                {/* Subject Field */}
                <FormField icon={ChefHat} label="Tipo de consulta" required error={errors.subject?.message}>
                  <select
                    {...registerSubject()}
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-coral-500 focus:outline-none transition-colors bg-white text-black"
                  >
                    <option value="">Selecciona una opción</option>
                    {CONTACT_SUBJECTS.map((subject) => (
                      <option key={subject.value} value={subject.value}>
                        {subject.label}
                      </option>
                    ))}
                  </select>
                </FormField>

                {/* Conditional Fields for Reservations */}
                <AnimatePresence>
                  {isReservation && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FormField icon={Calendar} label="Fecha preferida" required error={errors.date?.message}>
                          <input
                            {...registerDate()}
                            type="date"
                            suppressHydrationWarning={true}
                            min={typeof window !== 'undefined' ? new Date().toISOString().split('T')[0] : ''}
                            className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-coral-500 focus:outline-none transition-colors bg-white text-black"
                          />
                        </FormField>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <FormField icon={Users} label="Número de personas" required error={errors.guests?.message}>
                          <input
                            {...registerGuests()}
                            type="number"
                            min="1"
                            max="20"
                            className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-coral-500 focus:outline-none transition-colors bg-white text-black placeholder-jade-400"
                            placeholder="¿Cuántas personas?"
                          />
                        </FormField>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Message Field */}
              <FormField icon={FileText} label="Mensaje" required error={errors.message?.message}>
                <textarea
                  {...registerMessage()}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-coral-500 focus:outline-none transition-colors bg-white text-black placeholder-jade-400 resize-y"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </FormField>

              {/* Submit Button */}
              <motion.div 
                variants={fadeInUp}
                className="flex justify-center pt-4"
              >
                <motion.div
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div variants={buttonPress}>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={!isValid || status === 'loading'}
                      className="group relative overflow-hidden"
                    >
                      <span className="flex items-center space-x-2">
                        {status === 'loading' ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        )}
                        <span>
                          {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                        </span>
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Helper Text */}
              <motion.div variants={fadeInUp}>
                <p className="text-center text-jade-500 text-sm">
                  Tu mensaje se enviará via WhatsApp para una respuesta más rápida
                </p>
              </motion.div>
            </motion.form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};