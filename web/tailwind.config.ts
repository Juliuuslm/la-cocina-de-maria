import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nueva paleta "Tradición Mexicana Moderna" compatible con rosa mexicano
        pink: {
          50: '#FDF2F7',
          100: '#FCE7F0',
          200: '#FBBDE1',
          300: '#F993D2',
          400: '#F569C3',
          500: '#E4007C', // Rosa Mexicano - Color protagonista
          600: '#C6006A',
          700: '#A80058',
          800: '#8A0046',
          900: '#6C0034',
        },
        coral: {
          50: '#FFF4F1',
          100: '#FFE8E1',
          200: '#FFD1C3',
          300: '#FFB4A0',
          400: '#FF8A6B',
          500: '#FF6B4A', // Coral cálido - Puente cromático
          600: '#E5532F',
          700: '#C73E1D',
          800: '#A5341A',
          900: '#872D1C',
        },
        terracota: {
          50: '#FDF6F0',
          100: '#FAE9D6',
          200: '#F4D2AD',
          300: '#ECB67E',
          400: '#E2954D',
          500: '#D2691E', // Terracota suave más anaranjada
          600: '#B85A1A',
          700: '#9A4918',
          800: '#7F3C1A',
          900: '#68331A',
        },
        jade: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#00A693', // Verde jade - Complementario del rosa
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#FFB347', // Dorado mexicano
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        cream: {
          50: '#FFF8F0', // Blanco hueso
          100: '#F5E6D3', // Crema rosado
          200: '#EDD5BA',
          300: '#E3C4A1',
          400: '#D7B388',
          500: '#C9A26F',
          600: '#B8915A',
          700: '#A17F4A',
          800: '#876B3F',
          900: '#705838',
        },
        // Colores neutrales mejorados
        neutral: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        }
      },
      fontFamily: {
        // Tipografías del branding
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'script': ['Dancing Script', 'Caveat', 'cursive'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'warm': '0 4px 6px -1px rgba(234, 88, 12, 0.1), 0 2px 4px -1px rgba(234, 88, 12, 0.06)',
        'warm-lg': '0 10px 15px -3px rgba(234, 88, 12, 0.1), 0 4px 6px -2px rgba(234, 88, 12, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;