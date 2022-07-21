/* eslint-disable */
import React, { useState } from 'react';
import { UseContextProvider } from './Payment-steps/contexts/StepperContex';
import StepperControl from './Payment-steps/StepperControl';
import Steper from './Payment-steps/Steper';
import Account from './Payment-steps/steps/Account';
import Details from './Payment-steps/steps/Details';
import Complete from './Payment-steps/steps/Complete';

function Pay() {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([])
  const steps= [
    "Account Information",
    "Payment",
    "complete"
  ];

  const displayStep = (step: any) =>{
    switch(step) {
      case 1:
        return <Account />
      case 2:
        return <Details />
      case 3:
        return <Complete />
      default:
    }
  }

  const handleClick = (direction: any) => {
    let newStep = currentStep;
      direction == "Next" ? newStep++ : newStep--;
      // chack if the steps are within bounds
      newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  return (
    <div className="md:w-3/4 mx-auto shadow-xl rounded-2xl  bg-white py-2 my-32">
      <div className="container horizontal mt-5">
        {/* Stepper */}
        <Steper 
         steps={steps}
         currentStep={currentStep}
        />

        <div className="my-10 p-10">
          <UseContextProvider>
            {displayStep(currentStep)}
          </UseContextProvider>
        </div>
      </div>
      
      {/* StepperControl */}
      <StepperControl 
      handleClick={handleClick}
      currentStep={currentStep}
      steps={steps}
      />
    </div>
  );
}

export default Pay;
