import React from 'react';

interface WindowCardProps {
  title?: string;
  date?: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const WindowCard: React.FC<WindowCardProps> = ({ 
  title = "untitled", 
  date, 
  children, 
  className = "",
  noPadding = false
}) => {
  return (
    <div className={`border-2 border-black bg-white shadow-retro-lg flex flex-col h-full ${className}`}>
      {/* Window Header */}
      <div className="border-b-2 border-black bg-gray-200 px-3 py-2 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full border-2 border-black bg-white"></div>
          <div className="w-3 h-3 rounded-full border-2 border-black bg-white"></div>
        </div>
        <div className="font-mono text-xs font-bold uppercase tracking-tight truncate px-4">
          {date ? `${date} - ${title}` : title}
        </div>
      </div>
      
      {/* Window Content */}
      <div className={`flex-grow ${noPadding ? '' : 'p-6'}`}>
        {children}
      </div>
    </div>
  );
};