"use client";

import React from 'react';

interface UnifiedBackgroundProps {
  children: React.ReactNode;
}

export const UnifiedBackground: React.FC<UnifiedBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-[100dvh] md:min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Extended gradient for mobile to prevent white line */}
      <div className="md:hidden absolute -bottom-32 left-0 right-0 h-32 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 z-0"></div>
      {/* Unified Background Pattern - Mexican Textile Inspired */}
      <div className="absolute inset-0 overflow-x-hidden">
        
        {/* === ZONA SUPERIOR (TOP) === */}
        <div className="overflow-x-hidden">
        {/* Geometric circles - top area */}
        <div className="absolute top-16 left-2 sm:left-8 md:left-12 w-24 h-24 bg-coral-500 rounded-full opacity-10"></div>
        <div className="absolute top-20 right-2 sm:right-8 md:right-12 lg:right-16 w-20 h-20 bg-jade-500 rounded-full opacity-12"></div>
        <div className="absolute top-24 left-1/2 w-16 h-16 bg-gold-600 rounded-full opacity-8"></div>
        
        {/* Agave silhouette - top left */}
        <div className="absolute top-12 left-2 sm:left-6 md:left-8 opacity-8">
          <svg width="40" height="60" viewBox="0 0 60 80" fill="none" className="w-8 sm:w-12 md:w-15 h-auto">
            <path d="M30 80 L30 50 L38 42 L45 35 M30 60 L25 52 L18 45 M30 70 L40 62 L48 55" 
                  stroke="#8B4513" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        
        {/* Papel picado - top right corner (safe zone) */}
        <div className="absolute top-8 right-2 sm:right-6 md:right-8 opacity-8">
          <svg width="30" height="40" viewBox="0 0 40 60" fill="none" className="w-6 sm:w-8 md:w-9 h-auto">
            <path d="M8 5 L16 13 L8 21 L0 13 Z" fill="#E4007C" opacity="0.7"/>
            <path d="M24 5 L32 13 L24 21 L16 13 Z" fill="#FF6B4A" opacity="0.7"/>
            <path d="M8 21 L16 29 L8 37 L0 29 Z" fill="#00A693" opacity="0.7"/>
            <path d="M24 21 L32 29 L24 37 L16 29 Z" fill="#FFB347" opacity="0.7"/>
          </svg>
        </div>
        
        {/* Small comal - top center */}
        <div className="absolute top-20 left-1/3 opacity-12">
          <svg width="40" height="40" viewBox="0 0 60 60" fill="none" className="w-8 sm:w-10 md:w-12 h-auto">
            <circle cx="30" cy="30" r="22" fill="#2F4F4F" opacity="0.8"/>
            <circle cx="30" cy="30" r="18" fill="#696969" opacity="0.9"/>
            <circle cx="30" cy="30" r="14" stroke="#A9A9A9" strokeWidth="1" fill="none" opacity="0.6"/>
            <circle cx="30" cy="30" r="2" fill="#DCDCDC" opacity="0.7"/>
          </svg>
        </div>
        
        {/* Aztec triangle - top left area */}
        <div className="absolute top-24 left-1/4 opacity-8">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 8 L32 28 L8 28 Z" stroke="#B45309" strokeWidth="2" fill="#FDE68A"/>
          </svg>
        </div>
        
        </div>
        
        {/* === ZONA MEDIA (MIDDLE) === */}
        <div className="overflow-x-hidden">
        {/* Geometric circles - middle area */}
        <div className="absolute top-1/2 left-2 sm:left-6 md:left-8 w-20 h-20 bg-jade-400 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 right-2 sm:right-8 md:right-12 w-18 h-18 bg-coral-400 rounded-full opacity-12"></div>
        <div className="absolute top-2/5 right-1/3 w-14 h-14 bg-pink-500 rounded-full opacity-10"></div>
        
        {/* Cazuela - middle left */}
        <div className="absolute top-1/3 left-2 sm:left-12 md:left-16 opacity-18">
          <svg width="70" height="70" viewBox="0 0 80 80" fill="none">
            <ellipse cx="40" cy="60" rx="22" ry="7" fill="#8B4513" opacity="0.8"/>
            <rect x="18" y="40" width="44" height="20" rx="3" fill="#A0522D" opacity="0.9"/>
            <ellipse cx="40" cy="40" rx="22" ry="7" fill="#CD853F" opacity="0.9"/>
            <path d="M15 50 Q10 50 10 45 Q10 40 15 40" stroke="#654321" strokeWidth="2" fill="none"/>
            <path d="M65 50 Q70 50 70 45 Q70 40 65 40" stroke="#654321" strokeWidth="2" fill="none"/>
            <path d="M30 30 Q32 25 30 20" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
            <path d="M40 28 Q42 23 40 18" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
            <path d="M50 30 Q52 25 50 20" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
          </svg>
        </div>
        
        {/* Large knife - middle right */}
        <div className="absolute top-2/5 right-2 sm:right-12 md:right-16 opacity-15">
          <svg width="45" height="70" viewBox="0 0 50 80" fill="none">
            <rect x="23" y="15" width="4" height="45" rx="2" fill="#C0C0C0" opacity="0.9"/>
            <path d="M20 15 L30 15 L30 40 L25 45 Z" fill="#DCDCDC" opacity="0.8"/>
            <rect x="21" y="45" width="8" height="20" rx="4" fill="#8B4513" opacity="0.8"/>
            <line x1="25" y1="47" x2="25" y2="60" stroke="#CD853F" strokeWidth="1" opacity="0.6"/>
          </svg>
        </div>
        
        {/* Wooden spoon - middle left area */}
        <div className="absolute top-3/5 left-2 sm:left-16 md:left-20 opacity-16">
          <svg width="45" height="65" viewBox="0 0 60 80" fill="none">
            <ellipse cx="30" cy="20" rx="15" ry="10" fill="#D2691E" opacity="0.8"/>
            <ellipse cx="30" cy="18" rx="12" ry="8" fill="#DEB887" opacity="0.9"/>
            <rect x="27" y="25" width="6" height="40" rx="3" fill="#D2691E" opacity="0.8"/>
            <rect x="28" y="25" width="4" height="38" rx="2" fill="#DEB887" opacity="0.7"/>
            <line x1="29" y1="30" x2="29" y2="60" stroke="#CD853F" strokeWidth="1" opacity="0.6"/>
          </svg>
        </div>
        
        {/* Large pot - middle right area */}
        <div className="absolute top-1/2 right-2 sm:right-16 md:right-20 opacity-17">
          <svg width="65" height="65" viewBox="0 0 70 70" fill="none">
            <ellipse cx="35" cy="55" rx="18" ry="5" fill="#8B4513" opacity="0.8"/>
            <rect x="17" y="38" width="36" height="17" rx="2" fill="#A0522D" opacity="0.9"/>
            <ellipse cx="35" cy="38" rx="18" ry="5" fill="#CD853F" opacity="0.9"/>
            <path d="M14 48 Q10 48 10 43 Q10 38 14 38" stroke="#654321" strokeWidth="2" fill="none"/>
            <path d="M56 48 Q60 48 60 43 Q60 38 56 38" stroke="#654321" strokeWidth="2" fill="none"/>
            <path d="M27 28 Q29 23 27 18" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
            <path d="M35 26 Q37 21 35 16" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
            <path d="M43 28 Q45 23 43 18" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
          </svg>
        </div>
        
        </div>
        
        {/* === ZONA INFERIOR (BOTTOM) === */}
        <div className="overflow-x-hidden">
        {/* Geometric circles - bottom area */}
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gold-600 rounded-full opacity-10"></div>
        <div className="absolute bottom-24 right-1/3 w-18 h-18 bg-coral-500 rounded-full opacity-12"></div>
        <div className="absolute bottom-40 right-2 sm:right-6 md:right-8 w-14 h-14 bg-jade-500 rounded-full opacity-8"></div>
        
        {/* Pan - bottom left */}
        <div className="absolute bottom-32 left-2 sm:left-12 md:left-16 opacity-18">
          <svg width="75" height="45" viewBox="0 0 90 50" fill="none">
            <ellipse cx="30" cy="30" rx="22" ry="15" fill="#2F4F4F" opacity="0.8"/>
            <ellipse cx="30" cy="27" rx="20" ry="13" fill="#696969" opacity="0.9"/>
            <ellipse cx="30" cy="25" rx="18" ry="11" fill="#A9A9A9" opacity="0.7"/>
            <rect x="48" y="23" width="25" height="4" rx="2" fill="#8B4513" opacity="0.8"/>
            <circle cx="70" cy="25" r="2.5" fill="#654321" opacity="0.7"/>
            <ellipse cx="25" cy="20" rx="6" ry="4" fill="#C0C0C0" opacity="0.5"/>
          </svg>
        </div>
        
        {/* Mexican plate - bottom center */}
        <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 opacity-16">
          <svg width="70" height="70" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="35" fill="#DEB887" opacity="0.9"/>
            <circle cx="40" cy="40" r="28" fill="#F5DEB3" opacity="0.9"/>
            <circle cx="40" cy="40" r="22" stroke="#DC143C" strokeWidth="2" fill="none" opacity="0.8" strokeDasharray="3 2"/>
            <circle cx="40" cy="40" r="18" stroke="#FF6347" strokeWidth="1" fill="none" opacity="0.7" strokeDasharray="2 1"/>
            <circle cx="40" cy="40" r="10" fill="#228B8D" opacity="0.6"/>
            <path d="M40 30 L45 40 L40 50 L35 40 Z" fill="#DC143C" opacity="0.7"/>
          </svg>
        </div>
        
        {/* Crossed cutlery - bottom right */}
        <div className="absolute bottom-36 right-2 sm:right-16 md:right-20 opacity-20">
          <svg width="60" height="60" viewBox="0 0 70 70" fill="none">
            <rect x="20" y="15" width="3" height="40" rx="1.5" fill="#C0C0C0" opacity="0.9" transform="rotate(25 35 35)"/>
            <rect x="17" y="13" width="2" height="10" rx="1" fill="#C0C0C0" opacity="0.8" transform="rotate(25 35 35)"/>
            <rect x="20" y="13" width="2" height="10" rx="1" fill="#C0C0C0" opacity="0.8" transform="rotate(25 35 35)"/>
            <rect x="23" y="13" width="2" height="10" rx="1" fill="#C0C0C0" opacity="0.8" transform="rotate(25 35 35)"/>
            <rect x="45" y="15" width="3" height="40" rx="1.5" fill="#C0C0C0" opacity="0.9" transform="rotate(-25 35 35)"/>
            <path d="M42 13 L50 13 L50 23 L46 25 Z" fill="#DCDCDC" opacity="0.8" transform="rotate(-25 35 35)"/>
          </svg>
        </div>
        
        {/* Metate - bottom left area */}
        <div className="absolute bottom-16 left-1/3 opacity-17">
          <svg width="70" height="40" viewBox="0 0 80 45" fill="none">
            <ellipse cx="40" cy="30" rx="30" ry="10" fill="#2F4F4F" opacity="0.8"/>
            <ellipse cx="40" cy="27" rx="27" ry="8" fill="#696969" opacity="0.9"/>
            <ellipse cx="20" cy="40" rx="5" ry="3" fill="#2F4F4F" opacity="0.8"/>
            <ellipse cx="40" cy="40" rx="5" ry="3" fill="#2F4F4F" opacity="0.8"/>
            <ellipse cx="60" cy="40" rx="5" ry="3" fill="#2F4F4F" opacity="0.8"/>
            <ellipse cx="25" cy="20" rx="12" ry="3" fill="#696969" opacity="0.7" transform="rotate(15 25 20)"/>
          </svg>
        </div>
        
        {/* Tortilla warmer - bottom right area */}
        <div className="absolute bottom-20 right-1/4 opacity-15">
          <svg width="55" height="55" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="25" fill="#DEB887" opacity="0.8"/>
            <circle cx="30" cy="30" r="20" fill="#F5DEB3" opacity="0.9"/>
            <circle cx="30" cy="30" r="16" fill="#FAEBD7" opacity="0.7"/>
            <circle cx="30" cy="18" r="6" fill="#CD853F" opacity="0.6"/>
            <rect x="27" y="14" width="6" height="8" rx="3" fill="#8B4513" opacity="0.7"/>
          </svg>
        </div>
        
        {/* Additional subtle decorative triangles */}
        <div className="absolute bottom-2/3 right-1/5 opacity-8">
          <svg width="30" height="30" viewBox="0 0 35 35" fill="none">
            <path d="M17 6 L28 26 L6 26 Z" stroke="#A34E29" strokeWidth="2" fill="#FEEDDC"/>
          </svg>
        </div>
        </div>
        
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};