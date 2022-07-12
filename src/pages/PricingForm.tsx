import React from 'react';
import PricingForm from '../components/PricingForm';

export default function PricingForm() {
  return (
    <div className="bg-light-bg dark:bg-dark-frame-bg flex flex-col justify-center items-center mx-auto w-2/4 pt-10">
      <div className="flex flex-col dark:bg-dark-frame-bg justify-center m-10">
        <PricingForm />
      </div>
    </div>
  );
}
