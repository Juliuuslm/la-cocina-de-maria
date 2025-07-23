import { NavigationItem, SEOData } from './types';

export const RESTAURANT_INFO = {
  name: 'Restaurante La Cocina de María',
  owner: 'María González Rodríguez',
  description: 'Restaurante familiar que sirve comida casera mexicana tradicional con recetas ancestrales y ingredientes frescos locales.',
  tagline: 'Tradición familiar desde 2017',
  phone: '+52 55 1234 5678',
  email: 'maria.gonzalez@gmail.com',
  whatsapp: '+5255123456785',
  address: {
    street: 'Calle Orizaba 123',
    neighborhood: 'Roma Norte',
    city: 'Ciudad de México',
    state: 'CDMX',
    zipCode: '06700',
    coordinates: {
      lat: 19.4147,
      lng: -99.1674,
    },
  },
  hours: {
    monday: '8:00 AM - 6:00 PM',
    tuesday: '8:00 AM - 6:00 PM',
    wednesday: '8:00 AM - 6:00 PM',
    thursday: '8:00 AM - 6:00 PM',
    friday: '8:00 AM - 8:00 PM',
    saturday: '8:00 AM - 8:00 PM',
    sunday: '9:00 AM - 5:00 PM',
  },
  socialMedia: {
    facebook: 'https://facebook.com/lacocinadmaria',
    instagram: 'https://instagram.com/lacocinadmaria',
    whatsapp: '+5255123456785',
  },
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'inicio', label: 'Inicio', href: '#hero' },
  { id: 'nosotros', label: 'Nosotros', href: '#about' },
  { id: 'menu', label: 'Menú', href: '#menu' },
  { id: 'servicios', label: 'Servicios', href: '#services' },
  { id: 'testimonios', label: 'Testimonios', href: '#testimonials' },
  { id: 'contacto', label: 'Contacto', href: '#contact' },
];

export const SEO_DATA: SEOData = {
  title: 'Restaurante La Cocina de María | Comida Mexicana Tradicional en Roma Norte',
  description: 'Disfruta de la auténtica comida casera mexicana en el corazón de Roma Norte. Especialidades en mole poblano, chiles rellenos y cochinita pibil. Tradición familiar desde 2017.',
  keywords: [
    'restaurante Roma Norte',
    'comida mexicana tradicional',
    'cocina casera CDMX',
    'restaurante familiar',
    'mole poblano Roma Norte',
    'chiles rellenos',
    'cochinita pibil',
    'comida corrida',
    'desayunos mexicanos',
    'María González restaurante',
  ],
  ogImage: '/images/og-restaurante-maria.jpg',
};

export const SPECIALTIES = [
  'Mole Poblano',
  'Chiles Rellenos',
  'Cochinita Pibil',
  'Pozole Rojo',
  'Tamales Oaxaqueños',
  'Enchiladas Verdes',
];

export const CONTACT_SUBJECTS = [
  { value: 'general', label: 'Información General' },
  { value: 'reservations', label: 'Reservaciones' },
  { value: 'events', label: 'Eventos y Banquetes' },
  { value: 'catering', label: 'Servicio de Catering' },
];

export const BUSINESS_HOURS_FORMATTED = {
  'Lunes a Jueves': '8:00 AM - 6:00 PM',
  'Viernes y Sábado': '8:00 AM - 8:00 PM',
  'Domingo': '9:00 AM - 5:00 PM',
};

export const DEFAULT_WHATSAPP_MESSAGE = 'Hola, me gustaría hacer una reservación en La Cocina de María';

export const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${RESTAURANT_INFO.address.coordinates.lat},${RESTAURANT_INFO.address.coordinates.lng}&zoom=16`;

export const SCHEMA_ORG_DATA = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: RESTAURANT_INFO.name,
  description: RESTAURANT_INFO.description,
  image: ['/images/restaurant-exterior.jpg'],
  telephone: RESTAURANT_INFO.phone,
  email: RESTAURANT_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: RESTAURANT_INFO.address.street,
    addressLocality: RESTAURANT_INFO.address.neighborhood,
    addressRegion: RESTAURANT_INFO.address.state,
    postalCode: RESTAURANT_INFO.address.zipCode,
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: RESTAURANT_INFO.address.coordinates.lat,
    longitude: RESTAURANT_INFO.address.coordinates.lng,
  },
  openingHours: [
    'Mo-Th 08:00-18:00',
    'Fr-Sa 08:00-20:00',
    'Su 09:00-17:00',
  ],
  servesCuisine: 'Mexican',
  priceRange: '$$',
  acceptsReservations: true,
};

export const getWhatsAppUrl = (phone: string, message?: string): string => {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = message ? encodeURIComponent(message) : '';
  return `https://wa.me/${cleanPhone}${message ? `?text=${encodedMessage}` : ''}`;
};