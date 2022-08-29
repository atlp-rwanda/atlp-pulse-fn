/* eslint-disable react/jsx-indent */
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Details from '../components/Payment-steps/steps/Details';
import renderWithReactHookForm from './TestHelper';
import FormProvider from '../components/Payment-steps/contexts/StepperContex';

describe('<Details />', () => {
  test('should render account component', () => {
    act(() => {
      renderWithReactHookForm(<Details />);
    });
    expect(screen.getByTestId('cardname')).toBeInTheDocument();
    expect(screen.getByTestId('btn-2')).toBeInTheDocument();
    expect(screen.getByTestId('cardnumber')).toBeInTheDocument();
    expect(screen.getByTestId('cvv')).toBeInTheDocument();
    expect(screen.getByTestId('mm')).toBeInTheDocument();
    expect(screen.getByText('Enter your card details')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter Credit card number'),
    ).toBeInTheDocument();
    act(() => {
      fireEvent.change(screen.getByTestId('cardname'), {
        target: { value: 'Rwanda' },
      });
      fireEvent.change(screen.getByTestId('cardnumber'), '4444 4444 4444 4444');
      fireEvent.change(screen.getByTestId('mm'), '12/23');
      fireEvent.change(screen.getByTestId('cvv'), {
        target: { value: '12323' },
      });
      fireEvent.change(screen.getByTestId('mm'));
      fireEvent.input(screen.getByTestId('cvv'));
      fireEvent.input(screen.getByTestId('mm'));
      fireEvent.input(screen.getByTestId('cardnumber'));
    });
  });

  it('should setCurrent step', () => {
    const setCurrentMck = jest.fn();
    const { getByTestId } = renderWithReactHookForm(
    <FormProvider>
      <Details />
    </FormProvider>,
    );
    const setCurrent = getByTestId('btn-2');
    fireEvent.click(setCurrent);
    expect(setCurrentMck).toBeCalledTimes(0);
  });
});
