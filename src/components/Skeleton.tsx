import React from 'react';
import Lottie from 'lottie-react';
import animatedLogo from '../assets/logoAnimation.json';

export default function Skeleton() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-radial from-gray-800 to-white dark:from-black dark:to-gray-900">
      <Lottie className="h-24" animationData={animatedLogo} />
    </div>
  );
}
