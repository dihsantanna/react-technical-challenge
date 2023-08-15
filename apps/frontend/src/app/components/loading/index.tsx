import React from 'react';

export const Loading: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse">
        <div className="w-24 h-24 border-4 border-dashed border-dark-violet-500 animate-spin duration-75 rounded-full" />
      </div>
    </div>
  );
};
