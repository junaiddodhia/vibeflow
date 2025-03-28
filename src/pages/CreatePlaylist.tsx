
import React, { useState } from 'react';
import { ArrowLeft, Upload, Music } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';

const CreatePlaylist: React.FC = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCoverImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreatePlaylist = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating playlist:', { playlistName, description, coverImage });
    // In a real app, you would make an API call here
    navigate('/'); // Redirect to home after creation
  };

  return (
    <PageContainer>
      <div className="pt-4">
        <div className="flex items-center mb-6">
          <Link to="/">
            <button className="p-2 rounded-full bg-spotify-gray-light hover:bg-spotify-gray-lighter transition-colors mr-3">
              <ArrowLeft size={20} className="text-white" />
            </button>
          </Link>
          <h1 className="text-2xl font-bold text-white">Create Playlist</h1>
        </div>

        <form onSubmit={handleCreatePlaylist} className="animate-fade-in">
          {/* Cover Image Upload */}
          <div className="mb-6">
            <div 
              className="w-48 h-48 mx-auto relative rounded-xl overflow-hidden bg-spotify-gray-light border-2 border-dashed border-spotify-gray-lighter flex items-center justify-center"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: coverImage ? `url(${coverImage})` : 'none' }}
            >
              {!coverImage && (
                <div className="text-center p-4">
                  <Music size={40} className="mx-auto mb-2 text-spotify-text-gray" />
                  <p className="text-sm text-spotify-text-gray">Upload Playlist Cover</p>
                </div>
              )}
              
              <input 
                type="file" 
                accept="image/*" 
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleImageUpload}
              />
              
              {coverImage && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="p-2 rounded-full bg-spotify-green/20">
                    <Upload size={24} className="text-spotify-green" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Playlist Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-spotify-text-gray mb-2">
              Playlist Name
            </label>
            <input
              type="text"
              className="vibe-input"
              placeholder="Enter playlist name"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-spotify-text-gray mb-2">
              Description
            </label>
            <textarea
              className="vibe-input h-24 resize-none"
              placeholder="Describe the vibe of your playlist..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Create Button */}
          <button
            type="submit"
            className="bg-spotify-green hover:bg-spotify-green-dark text-black font-bold py-3 px-6 rounded-full w-full transition-colors"
            disabled={!playlistName.trim()}
          >
            CREATE
          </button>
        </form>
      </div>
    </PageContainer>
  );
};

export default CreatePlaylist;
