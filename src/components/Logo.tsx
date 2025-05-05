import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M50 10L63.5 26.9L82.5 30.3L67.5 45L70 64.9L50 56L30 64.9L32.5 45L17.5 30.3L36.5 26.9L50 10Z"
        fill="currentColor"
        stroke="#F7941D"
        strokeWidth="2"
      />
      <path 
        d="M50 20L59 31.5L72 33.8L61.5 44.1L63.2 57.5L50 51.4L36.8 57.5L38.5 44.1L28 33.8L41 31.5L50 20Z"
        fill="#F7941D"
      />
    </svg>
  );
};

export default Logo;