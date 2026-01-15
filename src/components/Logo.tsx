
import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'xl';
  className?: string;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '', color = 'currentColor' }) => {
  const sizes = {
    small: 'size-7',
    medium: 'size-12',
    large: 'size-32',
    xl: 'size-40',
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <svg fill={color} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect height="13.3" rx="4" width="13.3" x="4" y="4"></rect>
        <rect height="13.3" rx="4" width="13.3" x="17.3" y="17.3"></rect>
        <rect height="13.3" rx="4" width="13.3" x="30.6" y="30.6"></rect>
      </svg>
    </div>
  );
};
