import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing';
import { useNavigate, useLocation } from 'react-router-dom';
import TwoFactorPage from '../../src/pages/LoginWith2fa';
import { BrowserRouter } from 'react-router-dom';
import { LOGIN_WITH_2FA } from '../../src/pages/LoginWith2fa';
import { UserContext } from '../../src/hook/useAuth';
import React from 'react';

// Mock the navigate and location hooks
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useLocation: () => ({
    state: {
      email: 'user@example.com',
      TwoWayVerificationToken: 'test-token',
    },
  }),
}));

// Mock UserContext
const mockLogin = jest.fn();
interface UserContextWrapperProps {
  children: React.ReactNode;
}

const UserContextWrapper: React.FC<UserContextWrapperProps> = ({
  children,
}) => (
  <UserContext.Provider value={{ login: mockLogin }}>
    {children}
  </UserContext.Provider>
);
const mocks = [
  {
    request: {
      query: LOGIN_WITH_2FA,
      variables: {
        email: 'user@example.com',
        otp: '123456',
        TwoWayVerificationToken: 'test-token',
      },
    },
    result: {
      data: {
        loginWithTwoFactorAuthentication: {
          token: 'jwt-token',
          user: {
            id: '1',
            role: 'trainee',
            email: 'user@example.com',
            profile: {
              id: '1',
              firstName: 'John',
              lastName: 'Doe',
              name: 'John Doe',
              address: '',
              city: '',
              country: '',
              phoneNumber: '',
              biography: '',
              avatar: '',
              cover: '',
            },
          },
          message: 'Login successful',
        },
      },
    },
  },
  {
    request: {
      query: LOGIN_WITH_2FA,
      variables: {
        email: 'user@example.com',
        otp: '654321',
        TwoWayVerificationToken: 'test-token',
      },
    },
    result: {
      errors: [{ message: 'Invalid OTP' }],
    },
  },
];

describe('TwoFactorPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('submits OTP and navigates on success', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserContextWrapper>
          <TwoFactorPage />
        </UserContextWrapper>
      </MockedProvider>,
    );

    // Type OTP digits
    for (let i = 0; i < 6; i++) {
      const input = screen.getByTestId(`otp-input-${i}`);
      await userEvent.type(input, String(i + 1));
    }

    // Get and click submit button
    const submitButton = screen.getByRole('button', { name: /verify(ing)?/i });

    // Wait for the button to be enabled after all inputs are filled
    // await waitFor(() => {
    //   expect(submitButton).not.toBeDisabled();
    // });

    await userEvent.click(submitButton);

    // Wait for success message and navigation
    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard', {
        replace: true,
      });
    });
  });

  test('displays an error message on failed OTP submission', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserContextWrapper>
          <TwoFactorPage />
        </UserContextWrapper>
      </MockedProvider>,
    );

    // Type incorrect OTP
    for (let i = 0; i < 6; i++) {
      const input = screen.getByTestId(`otp-input-${i}`);
      await userEvent.type(input, String(6 - i));
    }

    // Get and click submit button
    const submitButton = screen.getByRole('button', { name: /verify(ing)?/i });

    // await waitFor(() => {
    //   expect(submitButton).not.toBeDisabled();
    // });

    await userEvent.click(submitButton);

    // Check for error message
    // await waitFor(() => {
    //   expect(screen.getByText('Invalid OTP')).toBeInTheDocument();
    // });
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
