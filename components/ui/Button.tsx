import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 font-mono font-bold text-sm uppercase tracking-wider transition-all duration-200 border-2 border-black active:translate-y-[2px] active:translate-x-[2px] active:shadow-none";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(128,128,128,1)]",
    outline: "bg-transparent text-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};