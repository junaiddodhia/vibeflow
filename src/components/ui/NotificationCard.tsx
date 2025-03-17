
import React from 'react';
import { MessageCircle, Plus, Check, X } from 'lucide-react';

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
          title: `${username} requested to add a song`
        };
      case 'approval':
        return {
          icon: Check,
          title: `${username} approved your song request`
        };
      case 'rejection':
        return {
          icon: X,
          title: `${username} rejected your song request`
        };
      case 'comment':
        return {
          icon: MessageCircle,
          title: `${username} commented on your request`
        };
    }
  };

  const config = getTypeConfig();

  return (
    <div className="p-3 bg-[#222222] hover:bg-[#2a2a2a] border border-[#333333] rounded-md mb-3 animate-fade-in transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex items-start">
          {/* User Profile Icon */}
          <div className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center mr-3 text-[#aaaaaa]">
            <config.icon size={16} />
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <p className="text-sm font-medium text-white">{config.title}</p>
            <p className="text-xs text-[#b3b3b3] mt-1">
              {songTitle} • {playlistName}
            </p>
            {message && (
              <p className="text-xs text-[#b3b3b3] mt-2 p-2 bg-[#2a2a2a] rounded-md border border-[#333333]">
                "{message}"
              </p>
            )}
            <p className="text-xs text-[#777777] mt-2">{time}</p>
          </div>
        </div>
        
        {/* Song Thumbnail (Right Side) */}
        <div className="w-10 h-10 min-w-10 rounded-md overflow-hidden ml-3">
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
