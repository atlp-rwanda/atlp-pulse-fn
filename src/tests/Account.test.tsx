import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Account from '../components/Payment-steps/steps/Account';
import renderWithReactHookForm from './TestHelper';

describe('<Account />', () => {
  test('should render account component', () => {
    act(() => {
      renderWithReactHookForm(<Account />);
    });
    expect(screen.getByTestId('icon').childNodes[0]).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'City' })).toBeInTheDocument();
    expect(screen.getByText('1. Billing Contact')).toBeInTheDocument();
    expect(screen.getByText('Organization name')).toBeInTheDocument();
    expect(screen.getByText('Postal code')).toBeInTheDocument();
    const iconCredit = screen.getByTestId('icon').children[0];
    act(() => {
      fireEvent.change(screen.getByLabelText('City'), {
        target: { value: 'Rwanda' },
      });
      fireEvent.change(screen.getByTestId('organization'), {
        target: { value: 'Rwanda' },
      });
      fireEvent.change(screen.getByTestId('street'), {
        target: { value: 'Rwanda' },
      });
      fireEvent.change(screen.getByTestId('postal'), {
        target: { value: '123458' },
      });
      fireEvent.click(iconCredit);
      fireEvent.input(screen.getByTestId('postal'));
    });
  });
});
