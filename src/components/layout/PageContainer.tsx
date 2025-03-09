
import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen pb-20 w-full mx-auto px-4 bg-spotify-black max-w-screen-xl md:px-8 lg:px-12 xl:px-20">
      <div className="max-w-2xl mx-auto md:max-w-4xl lg:max-w-6xl">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
