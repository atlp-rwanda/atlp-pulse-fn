import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Complete from '../components/Payment-steps/steps/Complete';
import FormProvider from '../components/Payment-steps/contexts/StepperContex';

describe('<Complete />', () => {
  test('should render account component', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Complete />
        </MemoryRouter>,
      );
    });
    expect(screen.getByTestId('link')).toBeInTheDocument();
    expect(screen.getByTestId('link1')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('link'));
  });

  it('should setCurrent step', () => {
    const setCurrentMck = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <FormProvider>
          <Complete />
        </FormProvider>
      </MemoryRouter>,
    );
    const setCurrent = getByTestId('link1');
    fireEvent.click(setCurrent);
    expect(setCurrentMck).toBeCalledTimes(0);
  });
});
