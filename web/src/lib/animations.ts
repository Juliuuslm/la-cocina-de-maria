import { Variants } from 'framer-motion';

// Variants básicos para elementos individuales
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Variants para contenedores con stagger
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// Variants para efectos especiales
export const floatingAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const pulseAnimation: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const rotateAnimation: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Variants para interacciones
export const hoverScale: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const hoverLift: Variants = {
  rest: { y: 0, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
  hover: { 
    y: -8,
    boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const buttonPress: Variants = {
  rest: { scale: 1 },
  tap: { 
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
};

// Variants para navegación
export const slideInFromTop: Variants = {
  hidden: { 
    opacity: 0, 
    y: -100 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const slideInFromBottom: Variants = {
  hidden: { 
    opacity: 0, 
    y: 100 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Variants para revelado de texto
export const textReveal: Variants = {
  hidden: { 
    opacity: 0,
    y: 50,
    skewY: 2
  },
  visible: { 
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const letterReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Transiciones de página
export const pageTransition = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.6
};

export const pageVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: pageTransition
  },
  exit: { 
    opacity: 0,
    transition: pageTransition
  }
};

// Configuraciones de viewport para optimización
export const viewportConfig = {
  once: true,
  margin: "0px 0px -100px 0px",
  amount: 0.3
};

export const viewportConfigFast = {
  once: true,
  margin: "0px 0px -50px 0px",
  amount: 0.1
};

// Configuraciones optimizadas para performance
export const performanceConfig = {
  willChange: "transform, opacity",
  style: {
    backfaceVisibility: "hidden" as const,
    perspective: 1000,
    transformStyle: "preserve-3d" as const
  }
};

// Variants optimizados para hardware acceleration
export const fadeInUpOptimized: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    ...performanceConfig.style
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      willChange: performanceConfig.willChange
    }
  }
};

export const scaleInOptimized: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    ...performanceConfig.style
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      willChange: performanceConfig.willChange
    }
  }
};

// Easings personalizados
export const customEasing = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.25, 0.46, 0.45, 0.94],
  sharp: [0.4, 0, 0.2, 1]
};