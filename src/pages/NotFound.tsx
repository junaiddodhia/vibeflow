
import React from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-vibe-dark p-4">
      <div className="glass-card p-8 max-w-md w-full text-center rounded-2xl animate-fade-in">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-vibe-card flex items-center justify-center">
          <Music size={32} className="text-vibe-blue animate-pulse-soft" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">404</h1>
        <p className="text-xl font-medium text-white mb-4">Page Not Found</p>
        <p className="text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className="vibe-button-primary mx-auto">
            <Home size={18} />
            <span>Back to Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
