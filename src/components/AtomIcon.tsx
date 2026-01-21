// AtomIcon.tsx
import React from 'react';

type IconProps = {
  size?: number;
  className?: string;
};

const AtomIcon: React.FC<IconProps> = ({ size = 20, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
};

export default AtomIcon;
