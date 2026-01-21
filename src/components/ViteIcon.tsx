// ViteIcon.tsx
import React from 'react';

type IconProps = {
  size?: number;
  className?: string;
};

const ViteIcon: React.FC<IconProps> = ({ size = 20, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2L2 19h20L12 2zm0 4l6.5 11h-13L12 6z" />
    </svg>
  );
};

export default ViteIcon;
