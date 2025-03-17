
import React from 'react';
import { Plus, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import PlaylistCard from '../components/ui/PlaylistCard';
import NotificationCard from '../components/ui/NotificationCard';
import SearchBar from '../components/ui/SearchBar';

// Mock data - more realistic playlists
const recentPlaylists = [
  {
    id: '1',
    title: 'Indie Essentials',
    totalSongs: 42,
    collaborators: 5,
    coverImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: '2',
    title: 'Coding Focus',
    totalSongs: 36,
    collaborators: 3,
    coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: '3',
    title: 'Evening Chill',
    totalSongs: 28,
    collaborators: 2,
    coverImage: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

const recentActivity = [
  {
    type: 'request' as const,
    playlistName: 'Indie Essentials',
    songTitle: 'Lost in Yesterday',
    username: 'Alex',
    time: '2 hours ago',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    type: 'rejection' as const,
    playlistName: 'Weekend Vibes',
    songTitle: 'Bad Habits',
    username: 'Sarah',
    time: '3 hours ago',
    message: 'Not quite the right fit for this playlist.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    type: 'approval' as const,
    playlistName: 'Coding Focus',
    songTitle: 'Midnight City',
    username: 'Maya',
    time: '5 hours ago',
    thumbnailUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    type: 'comment' as const,
    playlistName: 'Evening Chill',
    songTitle: 'Dreamland',
    username: 'Jordan',
    time: '1 day ago',
    message: 'Perfect for the playlist vibe!',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

const Home: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Implement search functionality
  };

  return (
    <PageContainer>
      <div className="pt-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">VibeFlow</h1>
          <Link to="/notifications">
            <button className="text-white hover:text-spotify-green transition-colors">
              <Bell size={20} />
            </button>
          </Link>
        </div>

        <SearchBar onSearch={handleSearch} placeholder="Search songs or playlists..." />

        <div className="mb-8 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">Playlists</h2>
            <Link to="/create-playlist">
              <button className="flex items-center space-x-1 bg-[#1DB954] hover:bg-[#1AA34A] text-black px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
                <Plus size={16} />
                <span>Create</span>
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {recentPlaylists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                id={playlist.id}
                title={playlist.title}
                totalSongs={playlist.totalSongs}
                collaborators={playlist.collaborators}
                coverImage={playlist.coverImage}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Activity</h2>
          
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <NotificationCard
                key={index}
                type={activity.type}
                playlistName={activity.playlistName}
                songTitle={activity.songTitle}
                username={activity.username}
                time={activity.time}
                message={activity.message}
                thumbnailUrl={activity.thumbnailUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
