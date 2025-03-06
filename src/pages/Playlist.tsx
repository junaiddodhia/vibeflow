
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MoreVertical, 
  Plus, 
  Music,
  MessageCircle,
  Check,
  X,
  Share2
} from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import SongCard from '../components/ui/SongCard';

// Mock data
const playlistData = {
  id: '1',
  title: 'Weekend Vibes',
  description: 'Music to get your weekend started right. Merge Music. Make Memories.',
  coverImage: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=600&h=600',
  totalSongs: 24,
  collaborators: 3,
  songs: [
    {
      id: 's1',
      title: 'Summer Nights',
      artist: 'Sunset Groove',
      coverImage: 'https://images.unsplash.com/photo-1595971294624-80bcf0d7eb24?auto=format&fit=crop&q=80&w=300&h=300',
      status: 'approved',
      addedBy: 'You'
    },
    {
      id: 's2',
      title: 'Ocean Drive',
      artist: 'Coastal Beats',
      coverImage: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=300&h=300',
      status: 'approved',
      addedBy: 'Alex'
    },
    {
      id: 's3',
      title: 'Midnight City',
      artist: 'Urban Pulse',
      coverImage: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=300&h=300',
      status: 'approved',
      addedBy: 'Maya'
    }
  ],
  requests: [
    {
      id: 'r1',
      title: 'Starlight',
      artist: 'Cosmic Waves',
      coverImage: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&q=80&w=300&h=300',
      status: 'pending',
      addedBy: 'Jordan',
      message: 'This song has the perfect vibe for this playlist!'
    },
    {
      id: 'r2',
      title: 'Daydream',
      artist: 'Lucid Sound',
      coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=300&h=300',
      status: 'pending',
      addedBy: 'Taylor',
      message: 'One of my favorites, hope you like it too!'
    }
  ]
};

type Tab = 'tracks' | 'requests';

const Playlist: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<Tab>('tracks');
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [requestMessage, setRequestMessage] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);

  const handlePlay = (songId: string) => {
    console.log('Playing song:', songId);
    // Implement play functionality
  };

  const handleApprove = (requestId: string) => {
    console.log('Approving request:', requestId);
    // Implement approve functionality
  };

  const handleReject = (requestId: string) => {
    console.log('Rejecting request:', requestId);
    // Implement reject functionality
  };

  const handleComment = (requestId: string) => {
    console.log('Commenting on request:', requestId);
    setSelectedRequest(requestId);
    // Implement comment functionality
  };

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting song request with message:', requestMessage);
    setIsRequestModalOpen(false);
    setRequestMessage('');
    // Implement submit functionality
  };

  return (
    <PageContainer className="pb-24">
      <div className="relative">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-vibe-dark/80 backdrop-blur-xl pt-4 pb-2">
          <div className="flex justify-between items-center mb-4">
            <Link to="/">
              <button className="p-2 rounded-full bg-vibe-card hover:bg-vibe-card-hover transition-colors">
                <ArrowLeft size={20} className="text-white" />
              </button>
            </Link>
            <button className="p-2 rounded-full bg-vibe-card hover:bg-vibe-card-hover transition-colors">
              <MoreVertical size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Playlist Info */}
        <div className="mb-6 animate-fade-in">
          <div className="relative w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={playlistData.coverImage} 
              alt={playlistData.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-white text-center">{playlistData.title}</h1>
          <p className="text-gray-400 text-center mt-1 px-8">{playlistData.description}</p>
          
          <div className="flex justify-center items-center gap-3 mt-4">
            <button 
              className="vibe-button-primary"
              onClick={() => setIsRequestModalOpen(true)}
            >
              <Plus size={18} />
              <span>Add Song</span>
            </button>
            <button className="vibe-button-secondary">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-vibe-border mb-4">
          <button
            onClick={() => setActiveTab('tracks')}
            className={`vibe-tab ${activeTab === 'tracks' ? 'vibe-tab-active' : 'text-gray-400'}`}
          >
            <div className="flex items-center gap-2">
              <Music size={16} />
              <span>Tracks ({playlistData.songs.length})</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`vibe-tab ${activeTab === 'requests' ? 'vibe-tab-active' : 'text-gray-400'}`}
          >
            <div className="flex items-center gap-2">
              <Plus size={16} />
              <span>Requests ({playlistData.requests.length})</span>
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="mt-4">
          {activeTab === 'tracks' ? (
            <div className="space-y-3">
              {playlistData.songs.map((song) => (
                <SongCard
                  key={song.id}
                  title={song.title}
                  artist={song.artist}
                  coverImage={song.coverImage}
                  status="approved"
                  addedBy={song.addedBy}
                  onPlay={() => handlePlay(song.id)}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {playlistData.requests.map((request) => (
                <div key={request.id} className="vibe-card animate-fade-in">
                  <SongCard
                    title={request.title}
                    artist={request.artist}
                    coverImage={request.coverImage}
                    status="pending"
                    addedBy={request.addedBy}
                    onPlay={() => handlePlay(request.id)}
                  />
                  {request.message && (
                    <div className="mt-2 p-3 bg-vibe-card rounded-xl text-sm text-gray-300">
                      "{request.message}"
                    </div>
                  )}
                  <div className="flex justify-end gap-2 mt-3">
                    <button
                      onClick={() => handleComment(request.id)}
                      className="p-2 rounded-full bg-vibe-card hover:bg-vibe-card-hover transition-colors"
                    >
                      <MessageCircle size={20} className="text-vibe-purple" />
                    </button>
                    <button
                      onClick={() => handleReject(request.id)}
                      className="p-2 rounded-full bg-red-500/10 hover:bg-red-500/20 transition-colors"
                    >
                      <X size={20} className="text-red-400" />
                    </button>
                    <button
                      onClick={() => handleApprove(request.id)}
                      className="p-2 rounded-full bg-vibe-green/10 hover:bg-vibe-green/20 transition-colors"
                    >
                      <Check size={20} className="text-vibe-green" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Request Modal */}
      {isRequestModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="glass-card p-6 w-full max-w-md rounded-2xl animate-scale-in">
            <h2 className="text-xl font-bold text-white mb-4">Suggest a Song</h2>
            
            <form onSubmit={handleSubmitRequest}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Song Title
                </label>
                <input
                  type="text"
                  className="vibe-input"
                  placeholder="Enter song title"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Artist
                </label>
                <input
                  type="text"
                  className="vibe-input"
                  placeholder="Enter artist name"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Explain Your Vibe
                </label>
                <textarea
                  className="vibe-input h-20 resize-none"
                  placeholder="Share why this song would be a great addition..."
                  value={requestMessage}
                  onChange={(e) => setRequestMessage(e.target.value)}
                ></textarea>
              </div>
              
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="vibe-button-secondary"
                  onClick={() => setIsRequestModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="vibe-button-primary"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </PageContainer>
  );
};

export default Playlist;
