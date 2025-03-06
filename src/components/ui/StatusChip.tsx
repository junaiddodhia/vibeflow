
import React from 'react';
import { Check, Clock, X } from 'lucide-react';

type Status = 'approved' | 'pending' | 'rejected';

interface StatusChipProps {
  status: Status;
}

const StatusChip: React.FC<StatusChipProps> = ({ status }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'approved':
        return {
          label: 'Approved',
          icon: Check,
          className: 'bg-vibe-green/20 text-vibe-green border-vibe-green/30'
        };
      case 'pending':
        return {
          label: 'Pending',
          icon: Clock,
          className: 'bg-vibe-blue/20 text-vibe-blue border-vibe-blue/30'
        };
      case 'rejected':
        return {
          label: 'Rejected',
          icon: X,
          className: 'bg-red-500/20 text-red-400 border-red-500/30'
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${config.className}`}>
      <config.icon size={12} className="mr-1" />
      {config.label}
    </div>
  );
};

export default StatusChip;
