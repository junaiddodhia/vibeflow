
import React from 'react';
import { MessageCircle, Plus, Check, X, User, ArrowRight } from 'lucide-react';
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
          iconColor: 'bg-destructive text-black'
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
    <div className="p-4 bg-[#111] border-0 mb-3 transition-all duration-200 hover:bg-[#181818]">
      <div className="flex items-start gap-3">
        {/* Left Column: Avatar only */}
        <div className="flex flex-col items-center">
          {/* User Profile Icon - Updated to match the size of the action icon */}
          <div className="w-6 h-6 bg-[#0F0F0F] flex items-center justify-center">
            <User size={14} className="text-white/70" />
          </div>
        </div>
        
        {/* Middle: Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">
            {config.title}
          </p>
          <p className="text-xs text-spotify-white/70 mt-1 font-medium flex items-center">
            {songTitle} <ArrowRight size={12} className="mx-1 text-spotify-white/50" /> {playlistName}
          </p>
          {message && (
            <p className="text-xs text-spotify-white/80 mt-2 p-2 bg-[#0F0F0F] border-0">
              "{message}"
            </p>
          )}
        </div>
      </div>
      
      {/* Bottom row with action icon, image, and timestamp */}
      <div className="flex items-center mt-3">
        {/* Action Icon at bottom left */}
        <div className={cn("w-6 h-6 flex items-center justify-center", config.iconColor)}>
          <config.icon size={14} />
        </div>
        
        {/* Song Thumbnail in the center */}
        <div className="flex-1 flex justify-center">
          <div className="w-12 h-12 overflow-hidden">
            <img 
              src={thumbnailUrl} 
              alt={`${songTitle} thumbnail`} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        
        {/* Timestamp positioned at bottom right */}
        <p className="text-xs text-spotify-white/50">{time}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
