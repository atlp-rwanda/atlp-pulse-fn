import React from 'react';
import { render } from '@testing-library/react';
import Stepper from '../components/Payment-steps/Steper';

describe('<Stepper />', () => {
  const steps = ['Account Information', 'Payment', 'Complete'];
  test('should render steper component', () => {
    const currentStep = 1;
    render(<Stepper steps={steps} currentStep={currentStep} />);
  });
  test('should return to confirm', () => {
    const currentStep = 2;
    render(<Stepper steps={steps} currentStep={currentStep} />);
  });
});
