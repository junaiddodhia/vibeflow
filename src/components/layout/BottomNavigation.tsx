
import React from 'react';
import { Home, Music, Search, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Music, label: 'Playlists', path: '/playlists' },
    { icon: User, label: 'Profile', path: '/profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-card rounded-t-2xl border-t border-vibe-border">
      <div className="flex justify-around items-center h-16 px-4">
        {navItems.map((item, index) => {
          const isActive = path === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex flex-col items-center justify-center w-16 h-full transition-all duration-300 ${
                isActive ? 'text-white' : 'text-gray-500'
              }`}
            >
              <item.icon
                size={22}
                className={`mb-1 ${
                  isActive ? 'text-vibe-blue' : 'text-gray-500'
                }`}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
