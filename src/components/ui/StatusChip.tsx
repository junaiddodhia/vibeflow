
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
          className: 'text-spotify-green border-spotify-green'
        };
      case 'pending':
        return {
          label: 'Pending',
          icon: Clock,
          className: 'text-blue-400 border-blue-500'
        };
      case 'rejected':
        return {
          label: 'Rejected',
          icon: X,
          className: 'text-red-400 border-red-500'
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className={`inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium border-2 ${config.className} mx-3 my-3 shadow-md`}>
      <config.icon size={12} className="mr-2" />
      {config.label}
    </div>
  );
};

export default StatusChip;
