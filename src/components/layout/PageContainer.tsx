
import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen pb-20 w-full mx-auto px-4 bg-[#000000] md:px-8 lg:px-12 xl:px-24 ${className}`}>
      <div className="mx-auto">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
