import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'feature' | 'testimonial';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className,
  variant = 'default' 
}) => {
  const variants = {
    default: 'bg-white border-2 border-coral-500 shadow-warm-lg',
    feature: 'bg-cream-50 border-2 border-coral-500 shadow-warm-lg',
    testimonial: 'bg-white border-l-4 border-pink-500 border-2 border-coral-400 shadow-warm-lg',
  };

  return (
    <div className={cn(
      'rounded-2xl p-6 transition-all duration-200 hover:shadow-warm-lg',
      variants[variant],
      className
    )}>
      {children}
    </div>
  );
};