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
          iconColor: 'text-spotify-green'
        };
      case 'approval':
        return {
          icon: Check,
          title: `${username} approved your song request`,
          iconColor: 'text-spotify-green'
        };
      case 'rejection':
        return {
          icon: X,
          title: `${username} rejected your song request`,
          iconColor: 'text-destructive'
        };
      case 'comment':
        return {
          icon: MessageCircle,
          title: `${username} commented on your request`,
          iconColor: 'text-spotify-blue'
        };
    }
  };

  const config = getTypeConfig();

  return (
    <div className="p-4 bg-[#111] border-0 mb-3 transition-all duration-200 hover:bg-[#181818] rounded-0">
      <div className="flex items-start gap-3">
        {/* Left Column: Avatar only */}
        <div className="flex flex-col items-center">
          {/* User Profile Icon - Updated to match the size of the action icon */}
          <div className="w-6 h-6 bg-[#0F0F0F] flex items-center justify-center rounded-0">
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
          {/* Removed the message display here since it's already shown in the bottom row */}
        </div>
      </div>
      
      {/* Bottom row with action icon only */}
      <div className="flex items-center mt-3">
        {/* Action Icon */}
        <div className={cn("flex items-center", config.iconColor)}>
          <config.icon size={14} />
          {message && <span className="ml-2 text-xs text-spotify-white/80">"{message}"</span>}
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
