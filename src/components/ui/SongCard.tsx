
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
    <div className="vibe-card flex items-center gap-3 mb-3 animate-fade-in">
      <div className="w-12 h-12 relative rounded-lg overflow-hidden">
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
      <div className="flex-1">
        <h3 className="font-medium text-white text-sm">{title}</h3>
        <p className="text-xs text-gray-400">{artist}</p>
        {addedBy && (
          <p className="text-xs text-gray-500 mt-1">Added by {addedBy}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        {status && <StatusChip status={status} />}
        <button className="p-1 rounded-full hover:bg-white/10">
          <MoreHorizontal size={18} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default SongCard;
