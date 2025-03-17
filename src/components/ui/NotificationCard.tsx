
import React from 'react';
import { MessageCircle, Plus, Check, X, User } from 'lucide-react';
import { cn } from '@/lib/utils';

type NotificationType = 'request' | 'approval' | 'rejection' | 'comment';

interface NotificationCardProps {
  type: NotificationType;
  playlistName: string;
  songTitle: string;
  username: string;
  time: string;
  message?: string;
  thumbnailUrl?: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  type,
  playlistName,
  songTitle,
  username,
  time,
  message,
  thumbnailUrl = 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=300&h=300' // Default thumbnail
}) => {
  const getTypeConfig = () => {
    switch (type) {
      case 'request':
        return {
          icon: Plus,
          title: `${username} requested to add a song`,
          iconColor: 'bg-spotify-green text-black'
        };
      case 'approval':
        return {
          icon: Check,
          title: `${username} approved your song request`,
          iconColor: 'bg-spotify-green text-black'
        };
      case 'rejection':
        return {
          icon: X,
          title: `${username} rejected your song request`,
          iconColor: 'bg-destructive text-white'
        };
      case 'comment':
        return {
          icon: MessageCircle,
          title: `${username} commented on your request`,
          iconColor: 'bg-spotify-blue text-white'
        };
    }
  };

  const config = getTypeConfig();

  return (
    <div className="p-4 glass-card rounded-lg mb-3 transition-all duration-200 hover:scale-[1.01] border border-white/5">
      <div className="flex items-start gap-3">
        {/* Left Column: Avatar and Action Icon */}
        <div className="flex flex-col items-center space-y-2">
          {/* User Profile Icon */}
          <div className="w-10 h-10 rounded-full bg-[#232323] flex items-center justify-center shadow-sm">
            <User size={16} className="text-white/70" />
          </div>
          
          {/* Action Icon */}
          <div className={cn("w-6 h-6 rounded-full flex items-center justify-center shadow-sm", config.iconColor)}>
            <config.icon size={14} />
          </div>
        </div>
        
        {/* Middle: Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">
            {config.title}
          </p>
          <p className="text-xs text-spotify-white/70 mt-1 font-medium">
            {songTitle} • {playlistName}
          </p>
          {message && (
            <p className="text-xs text-spotify-white/80 mt-2 p-2 bg-black/20 rounded-md backdrop-blur-sm">
              "{message}"
            </p>
          )}
          <p className="text-xs text-spotify-white/50 mt-2">{time}</p>
        </div>
        
        {/* Right: Song Thumbnail */}
        <div className="w-12 h-12 rounded-md overflow-hidden shadow-md">
          <img 
            src={thumbnailUrl} 
            alt={`${songTitle} thumbnail`} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
