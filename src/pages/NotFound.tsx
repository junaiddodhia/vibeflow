
import React from 'react';
import { Home, Music as MusicIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
      <div className="glass-card p-8 max-w-md w-full text-center rounded-xl animate-fade-in bg-zinc-900/90">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-zinc-800 flex items-center justify-center">
          <MusicIcon size={32} className="text-green-500 animate-pulse-soft" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">404</h1>
        <p className="text-xl font-medium text-white mb-4">Page Not Found</p>
        <p className="text-zinc-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full flex items-center justify-center gap-2 mx-auto transition-colors">
            <Home size={18} />
            <span>Back to Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
