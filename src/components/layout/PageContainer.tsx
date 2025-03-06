
import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen pb-20 w-full max-w-lg mx-auto px-4 bg-spotify-black ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
