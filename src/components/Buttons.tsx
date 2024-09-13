/* eslint-disable */
import React from 'react';

interface Props {
  children: React.ReactNode;
  style?: any;
  onClick?: () => void;
  variant?: string;
  size?: string;
  type?: any;
  disabled?: boolean;
  loading?: boolean;
}
const Button: React.FC<Props> = ({
  children,
  style,
  onClick,
  variant = 'default',
  size = 'md',
  type = 'button',
  disabled = false,
  loading = false,
  ...rest
}) => (
  <button
    type={type}
    className={`btn ${variant} ${size} ${style} font-serif ${
      disabled
        ? 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300 hover:text-gray-500'
        : ''
    }`}
    onClick={onClick}
    disabled={disabled ? disabled : loading}
    {...rest}
  >
    {loading ? <div className="loader mr-1 font-serif" /> : children}
  </button>
);

export default Button;
