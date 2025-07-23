"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface UseCountAnimationProps {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
}

export const useCountAnimation = ({ 
  end, 
  duration = 2000, 
  start = 0, 
  decimals = 0 
}: UseCountAnimationProps) => {
  const [count, setCount] = useState(start);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true, margin: "0px 0px -100px 0px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    
    hasStarted.current = true;
    const startValue = start;
    const endValue = end;
    const difference = endValue - startValue;
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = startValue + (difference * easeOutQuart);
      setCount(Number(currentValue.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, start, duration, decimals]);

  return { count, ref: countRef };
};

// Hook específico para extraer números de strings como "98%" o "4.9/5"
export const useCountAnimationFromString = (
  value: string, 
  duration = 2000
) => {
  // Extraer el primer número de la cadena
  const numericValue = parseFloat(value.match(/[\d.]+/)?.[0] || '0');
  const decimals = value.includes('.') ? 1 : 0;
  
  const { count, ref } = useCountAnimation({
    end: numericValue,
    duration,
    decimals
  });

  // Reemplazar el número en la cadena original con el valor animado
  const animatedValue = value.replace(/[\d.]+/, count.toString());
  
  return { animatedValue, ref };
};