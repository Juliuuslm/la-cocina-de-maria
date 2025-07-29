"use client";

import React, { useState } from 'react';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className="w-full max-w-full overflow-x-hidden">
        {children}
      </div>
    </>
  );
};