"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormData, formValidation, formatWhatsAppMessage } from '@/lib/formValidation';
import { RESTAURANT_INFO, getWhatsAppUrl } from '@/lib/constants';

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export const useContactForm = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid }
  } = useForm<ContactFormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      date: '',
      guests: undefined,
      message: ''
    }
  });

  const watchedSubject = watch('subject');
  const isReservation = watchedSubject === 'reservations';

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Format message for WhatsApp
      const whatsappMessage = formatWhatsAppMessage(data);
      const whatsappUrl = getWhatsAppUrl(RESTAURANT_INFO.whatsapp, whatsappMessage);

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        reset();
        setStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage('Hubo un error al enviar el mensaje. Por favor intente nuevamente.');
    }
  };

  const resetForm = () => {
    reset();
    setStatus('idle');
    setErrorMessage('');
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    watch,
    errors,
    isValid,
    status,
    errorMessage,
    resetForm,
    isReservation,
    // Helper functions for field registration with validation
    registerName: () => register('name', formValidation.name),
    registerEmail: () => register('email', formValidation.email),
    registerPhone: () => register('phone', formValidation.phone),
    registerSubject: () => register('subject', formValidation.subject),
    registerDate: () => register('date', formValidation.date),
    registerGuests: () => register('guests', formValidation.guests),
    registerMessage: () => register('message', formValidation.message),
  };
};