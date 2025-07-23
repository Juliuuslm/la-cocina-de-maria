// Tipos TypeScript para el proyecto del Restaurante La Cocina de María

export interface Restaurant {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
  };
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  isSpecialty?: boolean;
  allergens?: string[];
}

export type MenuCategory = 
  | 'desayunos'
  | 'comidas-corridas'
  | 'platillos-carta'
  | 'bebidas'
  | 'postres'
  | 'especialidades';

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject: 'general' | 'reservations' | 'events' | 'catering';
}

export interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}