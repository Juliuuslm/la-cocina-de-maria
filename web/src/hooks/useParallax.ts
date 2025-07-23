"use client";

import { useTransform, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface UseParallaxProps {
  speed?: number;
  direction?: 'up' | 'down';
}

export const useParallax = ({ speed = 0.5, direction = 'up' }: UseParallaxProps = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [0, multiplier * speed * 100]);

  return { ref, y };
};

export const useParallaxRotate = (speed = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, speed * 360]);

  return { ref, rotate };
};

export const useParallaxScale = (speed = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + speed]);

  return { ref, scale };
};