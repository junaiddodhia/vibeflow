
import React from 'react';
import { MoreHorizontal, Play } from 'lucide-react';
import StatusChip from './StatusChip';

interface SongCardProps {
  title: string;
  artist: string;
  coverImage: string;
  status?: 'approved' | 'pending' | 'rejected';
  addedBy?: string;
  onPlay?: () => void;
}

const SongCard: React.FC<SongCardProps> = ({
  title,
  artist,
  coverImage,
  status,
  addedBy,
  onPlay
}) => {
  return (
    <div className="p-3 rounded-md bg-spotify-gray hover:bg-spotify-gray-light transition-all duration-200 mb-2 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 relative rounded-md overflow-hidden shadow-md">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={onPlay}
          >
            <Play size={16} fill="white" className="text-white" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-white text-sm truncate">{title}</h3>
          <p className="text-xs text-spotify-text-gray truncate">{artist}</p>
          {addedBy && (
            <p className="text-xs text-spotify-text-gray opacity-70 mt-0.5 truncate">Added by {addedBy}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {status && <StatusChip status={status} />}
          <button className="p-1 rounded-full hover:bg-spotify-gray-lighter">
            <MoreHorizontal size={18} className="text-spotify-text-gray" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
