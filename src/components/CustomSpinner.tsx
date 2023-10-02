/* eslint-disable */

import React from 'react';

interface CustomSpinnerProps {
  size?: string;
}

const CustomSpinner: React.FC<CustomSpinnerProps> = ({ size }) => {
  const spinnerSize = size || 'w-5 h-5'; // Set a default size or use the provided size

  return (
    <div
      className={`loader ease-linear rounded-full border-8 ${spinnerSize} border-t-8 border-gray-200`}
    />
  );
};

export default CustomSpinner;
