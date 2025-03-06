
import React from 'react';
import { Settings, Music, Users } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import PlaylistCard from '../components/ui/PlaylistCard';

// Mock data
const userData = {
  username: 'MusicLover',
  fullName: 'Alex Johnson',
  profilePicture: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300',
  stats: {
    playlists: 8,
    approvedRequests: 42,
    collaborations: 15
  }
};

const userPlaylists = [
  {
    id: '1',
    title: 'Weekend Vibes',
    totalSongs: 24,
    collaborators: 3,
    coverImage: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: '2',
    title: 'Chill & Study',
    totalSongs: 32,
    collaborators: 5,
    coverImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: '4',
    title: 'Road Trip',
    totalSongs: 28,
    collaborators: 2,
    coverImage: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

const Profile: React.FC = () => {
  return (
    <PageContainer>
      <div className="pt-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Profile</h1>
          <button className="p-2 rounded-full bg-vibe-card hover:bg-vibe-card-hover transition-colors">
            <Settings size={20} className="text-white" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="glass-card p-6 mb-8 animate-fade-in">
          <div className="flex items-center">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-vibe-blue mr-4">
              <img 
                src={userData.profilePicture} 
                alt={userData.username} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{userData.username}</h2>
              <p className="text-gray-400">{userData.fullName}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="glass-card p-3 text-center animate-fade-in">
              <div className="text-vibe-blue mb-1">
                <Music size={20} className="mx-auto" />
              </div>
              <p className="text-lg font-bold text-white">{userData.stats.playlists}</p>
              <p className="text-xs text-gray-400">Playlists</p>
            </div>
            <div className="glass-card p-3 text-center animate-fade-in">
              <div className="text-vibe-green mb-1">
                <Users size={20} className="mx-auto" />
              </div>
              <p className="text-lg font-bold text-white">{userData.stats.collaborations}</p>
              <p className="text-xs text-gray-400">Collaborations</p>
            </div>
            <div className="glass-card p-3 text-center animate-fade-in">
              <div className="text-vibe-purple mb-1">
                <Music size={20} className="mx-auto" />
              </div>
              <p className="text-lg font-bold text-white">{userData.stats.approvedRequests}</p>
              <p className="text-xs text-gray-400">Approved Songs</p>
            </div>
          </div>
        </div>

        {/* User Playlists */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Your Playlists</h2>
          
          <div className="space-y-3">
            {userPlaylists.map((playlist) => (
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
      </div>
    </PageContainer>
  );
};

export default Profile;
