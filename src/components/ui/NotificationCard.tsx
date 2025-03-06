
import React from 'react';
import { Check, X, MessageCircle, Clock } from 'lucide-react';

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
          icon: Clock,
          color: 'text-blue-400',
          bgColor: 'bg-blue-400/10',
          title: `${username} requested to add a song`
        };
      case 'approval':
        return {
          icon: Check,
          color: 'text-spotify-green',
          bgColor: 'bg-spotify-green/10',
          title: `${username} approved your song request`
        };
      case 'rejection':
        return {
          icon: X,
          color: 'text-red-500',
          bgColor: 'bg-red-500/10',
          title: `${username} rejected your song request`
        };
      case 'comment':
        return {
          icon: MessageCircle,
          color: 'text-purple-400',
          bgColor: 'bg-purple-400/10',
          title: `${username} commented on your request`
        };
    }
  };

  const config = getTypeConfig();

  return (
    <div className="p-3 bg-spotify-gray hover:bg-spotify-gray-light rounded-md mb-3 animate-fade-in transition-all duration-200">
      <div className="flex items-start">
        <div className={`p-2 rounded-full ${config.bgColor} mr-3`}>
          <config.icon className={config.color} size={16} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-white">{config.title}</p>
          <p className="text-xs text-spotify-text-gray mt-1">
            {songTitle} • {playlistName}
          </p>
          {message && (
            <p className="text-xs text-gray-300 mt-2 p-2 bg-spotify-gray-light rounded-md">
              "{message}"
            </p>
          )}
          <p className="text-xs text-spotify-text-gray opacity-70 mt-2">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
