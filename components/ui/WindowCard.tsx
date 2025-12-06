import React from 'react';

interface WindowCardProps {
  title?: string;
  date?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  noPadding?: boolean;
}

export const WindowCard: React.FC<WindowCardProps> = ({
  title = "untitled",
  date,
  children,
  className = "",
  contentClassName = "",
  noPadding = false,
}) => {
  return (
    <div className={`border-2 border-black bg-white flex flex-col h-full ${className}`}>
      {/* Window Header */}
      <div className="border-b-2 border-black bg-gray-200 px-3 py-1 flex items-center justify-between gap-4">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3.5 h-3.5 rounded-full border border-black bg-white"></div>
          <div className="w-3.5 h-3.5 rounded-full border border-black bg-white"></div>
        </div>
        <div className="flex-grow text-center font-mono text-xs font-bold uppercase tracking-tight truncate leading-tight">
          {title}
        </div>
        {date && (
          <div className="font-mono text-[10px] font-bold shrink-0 opacity-60">
            {date}
          </div>
        )}
        {!date && <div className="w-[34px]"></div>} {/* Spacer for centering if needed, but flex-grow on title handles most */}
      </div>

      {/* Window Content */}
      <div className={`flex-grow ${noPadding ? 'p-0' : 'p-4'} ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};