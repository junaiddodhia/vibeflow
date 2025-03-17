
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
      <div className="bg-[#222222] hover:bg-[#2a2a2a] border border-[#333333] p-4 rounded-md transition-all duration-200 mb-1 animate-fade-in">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 relative rounded-md overflow-hidden shadow-lg flex-shrink-0 md:w-16 md:h-16 lg:w-18 lg:h-18">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white text-base md:text-lg">{title}</h3>
            <div className="flex items-center text-xs text-[#b3b3b3] mt-1 md:text-sm md:mt-2">
              <div className="flex items-center mr-3">
                <Music size={12} className="mr-1 md:size-14" />
                <span>{totalSongs} songs</span>
              </div>
              <div className="flex items-center">
                <Users size={12} className="mr-1 md:size-14" />
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
