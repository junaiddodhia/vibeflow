
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import NotificationCard from '../components/ui/NotificationCard';

// Mock data
const notifications = [
  {
    type: 'request' as const,
    playlistName: 'Weekend Vibes',
    songTitle: 'Starlight',
    username: 'Alex',
    time: '2 hours ago'
  },
  {
    type: 'approval' as const,
    playlistName: 'Chill & Study',
    songTitle: 'Ocean Waves',
    username: 'Maya',
    time: '5 hours ago'
  },
  {
    type: 'rejection' as const,
    playlistName: 'Workout Mix',
    songTitle: 'Heavy Metal',
    username: 'Jordan',
    time: '1 day ago',
    message: 'This doesn\'t fit the playlist vibe, but thanks for the suggestion!'
  },
  {
    type: 'comment' as const,
    playlistName: 'Workout Mix',
    songTitle: 'Power Up',
    username: 'Jordan',
    time: '1 day ago',
    message: 'Great song for the final stretch!'
  },
  {
    type: 'request' as const,
    playlistName: 'Road Trip',
    songTitle: 'Highway Drive',
    username: 'Casey',
    time: '2 days ago'
  }
];

const Notifications: React.FC = () => {
  return (
    <PageContainer>
      <div className="pt-4">
        <div className="flex items-center mb-6">
          <Link to="/">
            <button className="p-2 rounded-full bg-vibe-card hover:bg-vibe-card-hover transition-colors mr-3">
              <ArrowLeft size={20} className="text-white" />
            </button>
          </Link>
          <h1 className="text-2xl font-bold text-white">Notifications</h1>
        </div>

        <div className="space-y-3">
          {notifications.map((notification, index) => (
            <NotificationCard
              key={index}
              type={notification.type}
              playlistName={notification.playlistName}
              songTitle={notification.songTitle}
              username={notification.username}
              time={notification.time}
              message={notification.message}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Notifications;
