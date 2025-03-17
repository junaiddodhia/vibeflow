
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
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  type,
  playlistName,
  songTitle,
  username,
  time,
  message
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
      <div className="flex items-start">
        <div className="mr-3 text-[#aaaaaa]">
          <config.icon size={16} />
        </div>
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
    </div>
  );
};

export default NotificationCard;
