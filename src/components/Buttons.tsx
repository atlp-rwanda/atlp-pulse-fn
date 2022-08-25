/* eslint-disable */
import React from 'react';

interface Props {
  children: React.ReactNode;
  style?: any;
  onClick?: () => void;
  variant: string;
  size: string;
  type?: any;
}
const Button: React.FC<Props> = ({
  children,
  style,
  onClick,
  variant = 'default',
  size = 'md',
  type = 'button',
  ...rest
}) => (
  <button
    type={type}
    className={`btn ${variant} ${size} ${style}`}
    onClick={onClick}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
