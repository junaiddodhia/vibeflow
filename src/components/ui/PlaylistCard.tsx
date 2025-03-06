
import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Users } from 'lucide-react';

interface PlaylistCardProps {
  id: string;
  title: string;
  totalSongs: number;
  collaborators: number;
  coverImage: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({
  id,
  title,
  totalSongs,
  collaborators,
  coverImage
}) => {
  return (
    <Link to={`/playlist/${id}`} className="block">
      <div className="bg-spotify-gray hover:bg-spotify-gray-light p-4 rounded-lg transition-all duration-200 mb-3 animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 relative rounded-md overflow-hidden shadow-md">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white text-sm">{title}</h3>
            <div className="flex items-center text-xs text-spotify-text-gray mt-1">
              <div className="flex items-center mr-3">
                <Music size={12} className="mr-1" />
                <span>{totalSongs} songs</span>
              </div>
              <div className="flex items-center">
                <Users size={12} className="mr-1" />
                <span>{collaborators} collaborators</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaylistCard;
