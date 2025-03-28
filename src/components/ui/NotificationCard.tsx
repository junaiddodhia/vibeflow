import React, { useState } from 'react';
import { MessageCircle, Plus, Check, X, Music, ListMusic, Heart, Reply, ThumbsUp, FileQuestion } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Dialog, DialogContent } from './dialog';
import { Textarea } from './textarea';
import { useToast } from '@/hooks/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Card } from './card';

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
  onThankYou?: () => void;
  onAskWhy?: () => void;
  onReact?: () => void;
  onReply?: (reply: string) => void;
  onDismiss?: () => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  type,
  playlistName,
  songTitle,
  username,
  time,
  message,
  thumbnailUrl,
  onApprove,
  onReject,
  onComment,
  onThankYou,
  onAskWhy,
  onReact,
  onReply,
  onDismiss
}) => {
  const [isCommentDialogOpen, setIsCommentDialogOpen] = useState(false);
  const [isReplyDialogOpen, setIsReplyDialogOpen] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [replyText, setReplyText] = useState('');
  const { toast } = useToast();

  const getTypeConfig = () => {
    switch (type) {
      case 'request':
        return {
          icon: Plus,
          title: `${username} requested to add a song.`,
          iconColor: 'text-spotify-green',
          bgColor: 'bg-spotify-green/10',
          emoji: ''
        };
      case 'approval':
        return {
          icon: Check,
          title: `Your request was approved.`,
          iconColor: 'text-spotify-green',
          bgColor: 'bg-spotify-green/10',
          emoji: ''
        };
      case 'rejection':
        return {
          icon: X,
          title: `Your request was rejected.`,
          iconColor: 'text-destructive',
          bgColor: 'bg-destructive/10',
          emoji: ''
        };
      case 'comment':
        return {
          icon: MessageCircle,
          title: `Your request received a comment.`,
          iconColor: 'text-spotify-blue',
          bgColor: 'bg-spotify-blue/10',
          emoji: ''
        };
    }
  };

  const config = getTypeConfig();
  const Icon = config.icon;

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

  const handleReplyOpen = () => {
    setIsReplyDialogOpen(true);
  };

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      toast({
        title: "Reply Sent",
        description: "Your reply has been sent",
      });
      if (onReply) onReply(replyText);
      setIsReplyDialogOpen(false);
      setReplyText('');
    }
  };

  const handleThankYou = () => {
    toast({
      title: "Thank You Sent",
      description: "Your appreciation has been sent",
    });
    if (onThankYou) onThankYou();
  };

  const handleAskWhy = () => {
    toast({
      title: "Feedback Requested",
      description: "You've requested feedback on why your song was rejected",
    });
    if (onAskWhy) onAskWhy();
  };

  const handleReact = () => {
    toast({
      title: "Reaction Sent",
      description: "You've reacted to the comment",
    });
    if (onReact) onReact();
  };

  const handleDismiss = () => {
    if (onDismiss) onDismiss();
  };

  const renderActionButtons = () => {
    switch (type) {
      case 'request':
        return (
          <div className="grid grid-cols-3 gap-2 mt-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="bg-[#202020] hover:bg-[#252525] text-spotify-white/70 justify-center py-2.5"
              onClick={handleApprove}
            >
              <Check size={16} className="text-spotify-green" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="bg-[#202020] hover:bg-[#252525] text-spotify-white/70 justify-center py-2.5"
              onClick={handleReject}
            >
              <X size={16} className="text-destructive" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="bg-[#202020] hover:bg-[#252525] text-spotify-white/70 justify-center py-2.5"
              onClick={handleCommentOpen}
            >
              <MessageCircle size={16} />
            </Button>
          </div>
        );
      case 'approval':
        return null;
      case 'rejection':
        return null;
      case 'comment':
        return (
          <div className="grid grid-cols-3 gap-2 mt-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="bg-[#202020] hover:bg-[#252525] text-spotify-white/70 justify-center py-2.5"
              onClick={handleDismiss}
            >
              <Check size={16} className="text-spotify-green" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="bg-[#202020] hover:bg-[#252525] text-spotify-white/70 justify-center py-2.5"
              onClick={handleReact}
            >
              <Heart size={16} className="text-spotify-green" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="bg-[#202020] hover:bg-[#252525] text-spotify-white/70 justify-center py-2.5"
              onClick={handleReplyOpen}
            >
              <Reply size={16} className="text-spotify-blue" />
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="p-4 bg-[#111] border-0 mb-3 transition-all duration-200 hover:bg-[#181818]">
      <div className="flex items-start">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white flex items-center tracking-wide leading-5">
            <span className={cn("inline-flex p-1 mr-2", config.bgColor)}>
              <Icon size={12} className={config.iconColor} />
            </span>
            {config.title}
          </p>
          
          <div className="flex text-xs text-spotify-white/70 mt-2.5 tracking-wide leading-relaxed">
            <div className="flex items-center text-left">
              <Music size={14} className="mr-1.5 text-spotify-white/50 flex-shrink-0" />
              <span className="font-medium">{songTitle}</span>
              <span className="mx-1.5">→</span>
              <ListMusic size={14} className="mr-1.5 text-spotify-white/50 flex-shrink-0" />
              <span className="font-medium">{playlistName}</span>
            </div>
          </div>
          
          {type === 'comment' && message && (
            <div className="mt-4">
              <Card className="bg-[#202020] border-0 p-3">
                <p className="text-xs text-white/90 text-left leading-relaxed tracking-wide">
                  {message}
                </p>
              </Card>
            </div>
          )}
          
          {renderActionButtons()}
        </div>
      </div>

      <Dialog open={isCommentDialogOpen} onOpenChange={setIsCommentDialogOpen}>
        <DialogContent className="bg-[#202020] border-0 max-w-[320px] p-4">
          <h3 className="text-sm font-semibold text-white mb-2 tracking-wide">Add a Comment</h3>
          <Textarea 
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Enter your comment..."
            maxLength={50}
            className="bg-[#333] border-0 resize-none text-sm text-white placeholder:text-white/50 focus-visible:ring-0 min-h-[60px] leading-relaxed tracking-wide"
          />
          <div className="text-[10px] text-white/50 text-right mt-1">
            {commentText.length}/50
          </div>
          <div className="flex justify-end gap-2 mt-3">
            <Button 
              variant="outline" 
              size="sm"
              className="bg-transparent border-white/20 text-white/70 hover:bg-white/10"
              onClick={() => setIsCommentDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              size="sm"
              className="bg-spotify-green hover:bg-spotify-green-dark"
              onClick={handleCommentSubmit}
            >
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isReplyDialogOpen} onOpenChange={setIsReplyDialogOpen}>
        <DialogContent className="bg-[#202020] border-0 max-w-[320px] p-4">
          <h3 className="text-sm font-semibold text-white mb-2 tracking-wide">Reply to Comment</h3>
          <Textarea 
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Enter your reply..."
            maxLength={50}
            className="bg-[#333] border-0 resize-none text-sm text-white placeholder:text-white/50 focus-visible:ring-0 min-h-[60px] leading-relaxed tracking-wide"
          />
          <div className="text-[10px] text-white/50 text-right mt-1">
            {replyText.length}/50
          </div>
          <div className="flex justify-end gap-2 mt-3">
            <Button 
              variant="outline" 
              size="sm"
              className="bg-transparent border-white/20 text-white/70 hover:bg-white/10"
              onClick={() => setIsReplyDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              size="sm"
              className="bg-spotify-green hover:bg-spotify-green-dark"
              onClick={handleReplySubmit}
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
