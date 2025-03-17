
import React, { useState } from 'react';
import { MessageCircle, Plus, Check, X, User, ArrowRight, Music, ListMusic } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Dialog, DialogContent } from './dialog';
import { Textarea } from './textarea';
import { useToast } from '@/hooks/use-toast';

type NotificationType = 'request' | 'approval' | 'rejection' | 'comment';

interface NotificationCardProps {
  type: NotificationType;
  playlistName: string;
  songTitle: string;
  username: string;
  time: string;
  message?: string;
  thumbnailUrl?: string;
  onApprove?: () => void;
  onReject?: () => void;
  onComment?: (comment: string) => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  type,
  playlistName,
  songTitle,
  username,
  time,
  message,
  thumbnailUrl = 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=300&h=300', // Default thumbnail
  onApprove,
  onReject,
  onComment
}) => {
  const [isCommentDialogOpen, setIsCommentDialogOpen] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { toast } = useToast();

  const getTypeConfig = () => {
    switch (type) {
      case 'request':
        return {
          icon: Plus,
          title: `${username} requested to add a song`,
          iconColor: 'text-spotify-green',
          bgColor: 'bg-spotify-green/10'
        };
      case 'approval':
        return {
          icon: Check,
          title: `${username} approved your song request`,
          iconColor: 'text-spotify-green',
          bgColor: 'bg-spotify-green/10'
        };
      case 'rejection':
        return {
          icon: X,
          title: `${username} rejected your song request`,
          iconColor: 'text-destructive',
          bgColor: 'bg-destructive/10'
        };
      case 'comment':
        return {
          icon: MessageCircle,
          title: `${username} commented on your request`,
          iconColor: 'text-spotify-blue',
          bgColor: 'bg-spotify-blue/10'
        };
    }
  };

  const config = getTypeConfig();

  const handleApprove = () => {
    toast({
      title: "Song Approved",
      description: `You've approved adding ${songTitle} to ${playlistName}`,
    });
    if (onApprove) onApprove();
  };

  const handleReject = () => {
    toast({
      title: "Song Rejected",
      description: `You've rejected adding ${songTitle} to ${playlistName}`,
      variant: "destructive"
    });
    if (onReject) onReject();
  };

  const handleCommentOpen = () => {
    setIsCommentDialogOpen(true);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      toast({
        title: "Comment Added",
        description: "Your comment has been added to the request",
      });
      if (onComment) onComment(commentText);
      setIsCommentDialogOpen(false);
      setCommentText('');
    }
  };

  return (
    <div className="p-4 bg-[#111] border-0 mb-3 transition-all duration-200 hover:bg-[#181818] rounded-0">
      {/* 1. User Icon and Requested Info */}
      <div className="flex items-start gap-3">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 bg-[#0F0F0F] flex items-center justify-center rounded-0">
            <User size={14} className="text-white/70" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white">
            {config.title}
          </p>
        </div>
      </div>
      
      {/* 2. Song and Playlist info with icons */}
      <div className="flex items-center mt-2 ml-9 text-xs text-spotify-white/70">
        <Music size={14} className="mr-1 text-spotify-white/50" />
        <span className="font-medium">{songTitle}</span>
        <ArrowRight size={12} className="mx-1 text-spotify-white/50" />
        <ListMusic size={14} className="mr-1 text-spotify-white/50" />
        <span className="font-medium">{playlistName}</span>
      </div>
      
      {/* 3. Action buttons row */}
      <div className="flex justify-between mt-3 ml-9">
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex-1 bg-[#202020] hover:bg-[#252525] text-spotify-white/70 rounded-0"
          onClick={handleCommentOpen}
        >
          <MessageCircle size={16} />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex-1 mx-2 bg-[#202020] hover:bg-[#252525] text-spotify-white/70 rounded-0"
          onClick={handleReject}
        >
          <X size={16} className="text-destructive" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex-1 bg-[#202020] hover:bg-[#252525] text-spotify-white/70 rounded-0"
          onClick={handleApprove}
        >
          <Check size={16} className="text-spotify-green" />
        </Button>
      </div>

      {/* Comment Dialog */}
      <Dialog open={isCommentDialogOpen} onOpenChange={setIsCommentDialogOpen}>
        <DialogContent className="bg-[#202020] border-0 rounded-0 max-w-[320px] p-4">
          <h3 className="text-sm font-semibold text-white mb-2">Add a Comment</h3>
          <Textarea 
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Enter your comment..."
            maxLength={50}
            className="bg-[#333] border-0 resize-none rounded-0 text-sm text-white placeholder:text-white/50 focus-visible:ring-0 min-h-[60px]"
          />
          <div className="text-[10px] text-white/50 text-right mt-1">
            {commentText.length}/50
          </div>
          <div className="flex justify-end gap-2 mt-3">
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-0 bg-transparent border-white/20 text-white/70 hover:bg-white/10"
              onClick={() => setIsCommentDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              size="sm"
              className="rounded-0 bg-spotify-green hover:bg-spotify-green-dark"
              onClick={handleCommentSubmit}
            >
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NotificationCard;
