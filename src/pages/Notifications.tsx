
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import NotificationCard from '../components/ui/NotificationCard';
import { Toaster } from '../components/ui/toaster';

// Mock data
const initialNotifications = [
  {
    id: '1',
    type: 'request' as const,
    playlistName: 'Indie Essentials',
    songTitle: 'Lost in Yesterday',
    username: 'Alex',
    time: '2 hours ago',
    thumbnailUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: '2',
    type: 'approval' as const,
    playlistName: 'Indie Essentials',
    songTitle: 'Lost in Yesterday',
    username: 'Maya',
    time: '5 hours ago',
    thumbnailUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: '3',
    type: 'rejection' as const,
    playlistName: 'Indie Essentials',
    songTitle: 'Lost in Yesterday',
    username: 'Jordan',
    time: '1 day ago',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: '4',
    type: 'comment' as const,
    playlistName: 'Indie Essentials',
    songTitle: 'Lost in Yesterday',
    username: 'Jordan',
    time: '1 day ago',
    message: 'Nice pick, but we already have a similar song!',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleApprove = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const handleReject = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const handleComment = (id: string, comment: string) => {
    console.log(`Added comment to notification ${id}: ${comment}`);
    // In a real app, you might update the notification with the comment
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const handleThankYou = (id: string) => {
    console.log(`Sent thank you for notification ${id}`);
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const handleAskWhy = (id: string) => {
    console.log(`Asked why for notification ${id}`);
    // In a real app, you might send a request for feedback
  };

  const handleReact = (id: string) => {
    console.log(`Reacted to notification ${id}`);
    // In a real app, you might update the UI to show the reaction
  };

  const handleReply = (id: string, reply: string) => {
    console.log(`Replied to notification ${id}: ${reply}`);
    // In a real app, you might update the notification with the reply
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const handleDismiss = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

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
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                type={notification.type}
                playlistName={notification.playlistName}
                songTitle={notification.songTitle}
                username={notification.username}
                time={notification.time}
                message={notification.message}
                thumbnailUrl={notification.thumbnailUrl}
                onApprove={() => handleApprove(notification.id)}
                onReject={() => handleReject(notification.id)}
                onComment={(comment) => handleComment(notification.id, comment)}
                onThankYou={() => handleThankYou(notification.id)}
                onAskWhy={() => handleAskWhy(notification.id)}
                onReact={() => handleReact(notification.id)}
                onReply={(reply) => handleReply(notification.id, reply)}
                onDismiss={() => handleDismiss(notification.id)}
              />
            ))
          ) : (
            <div className="text-center py-12 text-white/50">
              You don't have any notifications
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </PageContainer>
  );
};

export default Notifications;
