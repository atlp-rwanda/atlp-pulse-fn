import React from 'react';
import Lottie from 'lottie-react';
import animatedLogo from '../../assets/logoAnimation.json';

export default function LogoLoader() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Lottie className="h-24" animationData={animatedLogo} />
    </div>
  );
}
