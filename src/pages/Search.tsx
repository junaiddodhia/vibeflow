
import React, { useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import SearchBar from '../components/ui/SearchBar';
import SongCard from '../components/ui/SongCard';
import PlaylistCard from '../components/ui/PlaylistCard';

// Mock data
const mockSearchResults = {
  songs: [
    {
      id: 's1',
      title: 'Summer Nights',
      artist: 'Sunset Groove',
      coverImage: 'https://images.unsplash.com/photo-1595971294624-80bcf0d7eb24?auto=format&fit=crop&q=80&w=300&h=300',
    },
    {
      id: 's2',
      title: 'Ocean Drive',
      artist: 'Coastal Beats',
      coverImage: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=300&h=300',
    },
    {
      id: 's3',
      title: 'Midnight City',
      artist: 'Urban Pulse',
      coverImage: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=300&h=300',
    }
  ],
  playlists: [
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
    }
  ]
};

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<null | typeof mockSearchResults>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults(null);
      return;
    }
    
    // Simulate search with delay
    setTimeout(() => {
      setSearchResults(mockSearchResults);
    }, 300);
  };

  return (
    <PageContainer>
      <div className="pt-8">
        <h1 className="text-2xl font-bold text-white mb-6">Search</h1>
        
        <SearchBar 
          onSearch={handleSearch} 
          placeholder="Search"
        />
        
        {!searchQuery && !searchResults && (
          <div className="flex flex-col items-center justify-center mt-16 text-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-vibe-card mb-4">
              <div className="text-vibe-blue animate-pulse-soft">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Search VibeFlow</h3>
            <p className="text-gray-400 max-w-xs">
              Find songs, playlists, and artists to add to your collaborative playlists
            </p>
          </div>
        )}
        
        {searchQuery && searchResults && (
          <div className="mt-6 animate-fade-in">
            {searchResults.songs.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-white mb-4">Songs</h2>
                <div className="space-y-3">
                  {searchResults.songs.map((song) => (
                    <SongCard
                      key={song.id}
                      title={song.title}
                      artist={song.artist}
                      coverImage={song.coverImage}
                      onPlay={() => console.log(`Playing song: ${song.id}`)}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {searchResults.playlists.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">Playlists</h2>
                <div className="space-y-3">
                  {searchResults.playlists.map((playlist) => (
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
            )}
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default Search;
