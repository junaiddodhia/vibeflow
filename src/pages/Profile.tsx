
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
      <div className="pt-8 md:pt-12">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h1 className="text-2xl font-bold text-white md:text-3xl">Profile</h1>
          <button className="p-2 rounded-full bg-spotify-gray hover:bg-spotify-gray-light transition-colors">
            <Settings size={20} className="text-white md:size-22" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="bg-spotify-gray p-6 rounded-lg mb-8 animate-fade-in md:p-8 md:rounded-xl">
          <div className="flex items-center md:items-start">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-spotify-green mr-4 md:w-28 md:h-28 md:mr-6">
              <img 
                src={userData.profilePicture} 
                alt={userData.username} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:mt-2">
              <h2 className="text-xl font-bold text-white md:text-2xl">{userData.username}</h2>
              <p className="text-spotify-text-gray md:text-lg">{userData.fullName}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 md:mt-8 md:gap-6">
            <div className="bg-spotify-gray-light p-3 rounded-lg text-center animate-fade-in md:p-5 md:rounded-xl">
              <div className="text-spotify-green mb-1 md:mb-2">
                <Music size={20} className="mx-auto md:size-24" />
              </div>
              <p className="text-lg font-bold text-white md:text-xl">{userData.stats.playlists}</p>
              <p className="text-xs text-spotify-text-gray md:text-sm">Playlists</p>
            </div>
            <div className="bg-spotify-gray-light p-3 rounded-lg text-center animate-fade-in md:p-5 md:rounded-xl">
              <div className="text-spotify-green mb-1 md:mb-2">
                <Users size={20} className="mx-auto md:size-24" />
              </div>
              <p className="text-lg font-bold text-white md:text-xl">{userData.stats.collaborations}</p>
              <p className="text-xs text-spotify-text-gray md:text-sm">Collabs</p>
            </div>
            <div className="bg-spotify-gray-light p-3 rounded-lg text-center animate-fade-in md:p-5 md:rounded-xl">
              <div className="text-spotify-green mb-1 md:mb-2">
                <Music size={20} className="mx-auto md:size-24" />
              </div>
              <p className="text-lg font-bold text-white md:text-xl">{userData.stats.approvedRequests}</p>
              <p className="text-xs text-spotify-text-gray md:text-sm">Approved Songs</p>
            </div>
          </div>
        </div>

        {/* User Playlists */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 md:text-xl md:mb-6">Your Playlists</h2>
          
          <div className="space-y-3 md:space-y-4 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-4">
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
