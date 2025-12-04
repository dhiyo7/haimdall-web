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
    primary: "bg-black text-white hover:bg-gray-800 shadow-retro-gray hover:shadow-retro",
    outline: "bg-transparent text-black hover:bg-black hover:text-white shadow-retro"
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