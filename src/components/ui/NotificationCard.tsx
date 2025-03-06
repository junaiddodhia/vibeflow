
import React from 'react';
import { Check, X, MessageCircle, Clock } from 'lucide-react';

interface NotificationCardProps {
  type: 'request' | 'approval' | 'rejection' | 'comment';
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
          color: 'text-vibe-blue',
          bgColor: 'bg-vibe-blue/10',
          title: `${username} requested to add a song`
        };
      case 'approval':
        return {
          icon: Check,
          color: 'text-vibe-green',
          bgColor: 'bg-vibe-green/10',
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
          color: 'text-vibe-purple',
          bgColor: 'bg-vibe-purple/10',
          title: `${username} commented on your request`
        };
    }
  };

  const config = getTypeConfig();

  return (
    <div className="vibe-card mb-3 animate-fade-in">
      <div className="flex items-start">
        <div className={`p-2 rounded-full ${config.bgColor} mr-3`}>
          <config.icon className={config.color} size={18} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-white">{config.title}</p>
          <p className="text-xs text-gray-400 mt-1">
            {songTitle} • {playlistName}
          </p>
          {message && (
            <p className="text-xs text-gray-300 mt-2 p-2 bg-white/5 rounded-lg">
              "{message}"
            </p>
          )}
          <p className="text-xs text-gray-500 mt-2">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
