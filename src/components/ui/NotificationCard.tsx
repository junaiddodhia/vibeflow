
import React, { useState } from 'react';
import { MessageCircle, Plus, Check, X, User, ArrowRight, Music, ListMusic, Heart, Reply, ThumbsUp, FileQuestion } from 'lucide-react';
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
  thumbnailUrl = 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=300&h=300', // Default thumbnail
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
          title: `${username} requested to add '${songTitle}' to ${playlistName}.`,
          iconColor: 'text-spotify-green',
          bgColor: 'bg-spotify-green/10',
          emoji: '📌'
        };
      case 'approval':
        return {
          icon: Check,
          title: `Your request to add '${songTitle}' to ${playlistName} was approved!`,
          iconColor: 'text-spotify-green',
          bgColor: 'bg-spotify-green/10',
          emoji: '🎉'
        };
      case 'rejection':
        return {
          icon: X,
          title: `Your request to add '${songTitle}' to ${playlistName} was rejected.`,
          iconColor: 'text-destructive',
          bgColor: 'bg-destructive/10',
          emoji: '🚫'
        };
      case 'comment':
        return {
          icon: MessageCircle,
          title: `Your request to add '${songTitle}' to ${playlistName} received a comment.`,
          iconColor: 'text-spotify-blue',
          bgColor: 'bg-spotify-blue/10',
          emoji: '💬'
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
        );
      case 'approval':
        return (
          <div className="flex justify-between mt-3 ml-9">
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex-1 bg-[#202020] hover:bg-[#252525] text-spotify-white/70 rounded-0"
                >
                  <ThumbsUp size={16} className="text-spotify-blue" />
                  <span className="ml-2">Thank You</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-[#202020] border-0">
                <div className="p-3">
                  <p className="text-xs text-white/70 mb-2">Send a thank you?</p>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="bg-[#303030] hover:bg-[#404040] text-white/70 rounded-0"
                      onClick={() => handleDismiss()}
                    >
                      Cancel
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-spotify-green hover:bg-spotify-green/80 text-white rounded-0"
                      onClick={() => {
                        handleThankYou();
                        handleDismiss();
                      }}
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex-1 ml-2 bg-[#202020] hover:bg-[#252525] text-spotify-white/70 rounded-0"
              onClick={handleDismiss}
            >
              <Check size={16} className="text-spotify-green" />
              <span className="ml-2">Dismiss</span>
            </Button>
          </div>
        );
      case 'rejection':
        return (
          <div className="flex justify-between mt-3 ml-9">
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex-1 bg-[#202020] hover:bg-[#252525] text-spotify-white/70 rounded-0"
              onClick={handleAskWhy}
            >
              <FileQuestion size={16} className="text-spotify-blue" />
              <span className="ml-2">Ask Why?</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex-1 ml-2 bg-[#202020] hover:bg-[#252525] text-spotify-white/70 rounded-0"
              onClick={handleDismiss}
            >
              <Check size={16} className="text-spotify-green" />
              <span className="ml-2">Dismiss</span>
            </Button>
          </div>
        );
      case 'comment':
        return (
          <div className="flex justify-between mt-3 ml-9">
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex-1 bg-[#202020] hover:bg-[#252525] text-spotify-white/70 rounded-0"
              onClick={handleReact}
            >
              <Heart size={16} className="text-spotify-green" />
              <span className="ml-2">React</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex-1 mx-2 bg-[#202020] hover:bg-[#252525] text-spotify-white/70 rounded-0"
              onClick={handleReplyOpen}
            >
              <Reply size={16} className="text-spotify-blue" />
              <span className="ml-2">Reply</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex-1 bg-[#202020] hover:bg-[#252525] text-spotify-white/70 rounded-0"
              onClick={handleDismiss}
            >
              <Check size={16} className="text-spotify-green" />
              <span className="ml-2">Dismiss</span>
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="p-4 bg-[#111] border-0 mb-3 transition-all duration-200 hover:bg-[#181818] rounded-0">
      {/* Notification Title */}
      <div className="flex items-start gap-3">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 bg-[#0F0F0F] flex items-center justify-center rounded-0">
            <User size={14} className="text-white/70" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white">
            {config.emoji} {config.title}
          </p>
        </div>
      </div>
      
      {/* Song and Playlist info with icons */}
      <div className="flex items-center mt-2 ml-9 text-xs text-spotify-white/70">
        <Music size={14} className="mr-1 text-spotify-white/50" />
        <span className="font-medium">{songTitle}</span>
        <ArrowRight size={12} className="mx-1 text-spotify-white/50" />
        <ListMusic size={14} className="mr-1 text-spotify-white/50" />
        <span className="font-medium">{playlistName}</span>
      </div>
      
      {/* Show message for comment notifications */}
      {type === 'comment' && message && (
        <div className="mt-2 ml-9">
          <Card className="bg-[#202020] border-0 p-3 rounded-0">
            <p className="text-xs text-white/90">
              <span className="text-white/50">📝</span> {message}
            </p>
          </Card>
        </div>
      )}
      
      {/* Action buttons row */}
      {renderActionButtons()}

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

      {/* Reply Dialog */}
      <Dialog open={isReplyDialogOpen} onOpenChange={setIsReplyDialogOpen}>
        <DialogContent className="bg-[#202020] border-0 rounded-0 max-w-[320px] p-4">
          <h3 className="text-sm font-semibold text-white mb-2">Reply to Comment</h3>
          <Textarea 
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Enter your reply..."
            maxLength={50}
            className="bg-[#333] border-0 resize-none rounded-0 text-sm text-white placeholder:text-white/50 focus-visible:ring-0 min-h-[60px]"
          />
          <div className="text-[10px] text-white/50 text-right mt-1">
            {replyText.length}/50
          </div>
          <div className="flex justify-end gap-2 mt-3">
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-0 bg-transparent border-white/20 text-white/70 hover:bg-white/10"
              onClick={() => setIsReplyDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              size="sm"
              className="rounded-0 bg-spotify-green hover:bg-spotify-green-dark"
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
