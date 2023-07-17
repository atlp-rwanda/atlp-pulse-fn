/* eslint-disable */
// import React, { createContext, ReactNode, useState } from 'react';
import React, {createContext, ReactNode,useState} from 'react';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export const FormContext = createContext<any>({});

export function FormProvider({ children, ...props }: Props) {
  const [currentStep, setStep] = useState(1);

  const setCurrentStep = (step: number) => {
    setStep(step);
  };

  return (
    <FormContext.Provider
      {...props}
      value={{
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
