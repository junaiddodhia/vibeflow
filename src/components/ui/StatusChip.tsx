
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
          className: 'bg-spotify-green/20 text-spotify-green border-spotify-green/30'
        };
      case 'pending':
        return {
          label: 'Pending',
          icon: Clock,
          className: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
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
    <div className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${config.className} mx-1 my-1`}>
      <config.icon size={10} className="mr-1.5" />
      {config.label}
    </div>
  );
};

export default StatusChip;
