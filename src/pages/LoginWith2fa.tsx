/* eslint-disable */
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useMutation, gql, useApolloClient } from '@apollo/client';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../hook/useAuth';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { handleError } from '../components/ErrorHandle';

interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  name: string | null;
  address: string | null;
  city: string | null;
  country: string | null;
  phoneNumber: string | null;
  biography: string | null;
  avatar: string | null;
  cover: string | null;
  __typename: 'Profile';
}

interface User {
  id: string;
  role: string;
  email: string;
  profile: Profile;
  __typename: 'User';
}

interface LoginResponse {
  loginWithTwoFactorAuthentication: {
    token: string;
    user: User;
    message: string;
    __typename: 'LoginResponse';
  };
}

export const LOGIN_WITH_2FA = gql`
  mutation LoginWithTwoFactorAuthentication($email: String!, $otp: String!) {
    loginWithTwoFactorAuthentication(email: $email, otp: $otp) {
      token
      user {
        id
        role
        email
        profile {
          id
          firstName
          lastName
          name
          address
          city
          country
          phoneNumber
          biography
          avatar
          cover
        }
      }
      message
    }
  }
`;

const TwoFactorPage: React.FC = () => {
  const [input, setInput] = useState<string[]>(Array(6).fill(''));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { login } = useContext(UserContext);
  const client = useApolloClient();
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {};
  useEffect(() => {
    // Update document class and localStorage when theme changes
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    if (!email) {
      navigate('/login');
    }
  }, [email, navigate]);

  const [loginWithTwoFactorAuthentication] = useMutation<LoginResponse>(
    LOGIN_WITH_2FA,
    {
      onCompleted: async (data) => {
        const response = data.loginWithTwoFactorAuthentication;
        try {
          //localStorage.setItem('authToken', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          await login(response);
          await client.resetStore();
          toast.success(response.message);

          const rolePaths: Record<string, string> = {
            superAdmin: '/dashboard',
            admin: '/trainees',
            coordinator: '/dashboard',
            manager: '/dashboard',
            ttl: '/dashboard',
            trainee: '/dashboard',
          };

          const redirectPath = rolePaths[response.user.role] || '/dashboard';
          navigate(redirectPath, { replace: true });
        } catch (error) {
          toast.error(handleError(error));
        }
      },
      onError: (error) => {
        toast.error(handleError(error));
        setInput(Array(6).fill(''));
      },
    },
  );

  const verifyOtp = async (currentInput = input) => {
    if (currentInput.some((val) => !val)) {
      setError('Please Enter All Digits');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await loginWithTwoFactorAuthentication({
        variables: {
          email,
          otp: currentInput.join(''),
          // TwoWayVerificationToken,
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInput = useCallback(
    (index: number, value: string) => {
      if (!/^\d*$/.test(value)) return;

      const newInput = [...input];
      newInput[index] = value;
      setInput(newInput);

      if (value && index < input.length - 1) {
        const nextInput = document.getElementById(
          `otp-input-${index + 1}`,
        ) as HTMLInputElement;
        nextInput?.focus();
      }

      if (value && index === input.length - 1) {
        const allFilled = newInput.every((val) => val !== '');
        if (allFilled) {
          verifyOtp(newInput);
        }
      }
    },
    [input],
  );

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Backspace' && !input[index] && index > 0) {
      const prevInput = document.getElementById(
        `otp-input-${index - 1}`,
      ) as HTMLInputElement;
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();

    if (!/^\d+$/.test(pastedData)) {
      setError('Only Numbers Can Be Pasted');
      return;
    }

    const digits = pastedData.slice(0, 6).split('');
    const newInput = [...digits, ...Array(6 - digits.length).fill('')];

    setInput(newInput);

    if (digits.length < 6) {
      const nextEmptyIndex = digits.length;
      const nextInput = document.getElementById(
        `otp-input-${nextEmptyIndex}`,
      ) as HTMLInputElement;
      nextInput?.focus();
    } else {
      verifyOtp(newInput);
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-200 bg-gray-100 dark:bg-gray-900">
      <div className="p-8 transition-colors duration-200 bg-white rounded-lg shadow-md dark:bg-gray-800 w-96">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
          {'Verification Required'}
        </h2>

        <p className="mb-6 text-sm text-center text-gray-600 dark:text-gray-400">
          {'Enter Verification Code'}
          <br />
          <span className="font-medium">{email}</span>
        </p>

        {error && (
          <div className="p-3 mb-4 text-sm text-red-500 bg-red-100 rounded dark:bg-red-900/30">
            {error}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            verifyOtp();
          }}
        >
          <div className="flex justify-center mb-6 space-x-2">
            {input.map((value, index) => (
              <input
                data-testid={`otp-input-${index}`}
                key={index}
                id={`otp-input-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={value}
                onChange={(e) => handleInput(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-12 h-12 text-lg font-semibold text-center text-gray-800 transition-colors bg-white border rounded dark:text-gray-100 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={loading}
                autoComplete="one-time-code"
                required
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading || input.some((val) => !val)}
            className="w-full py-3 text-white transition-colors bg-primary rounded hover:bg-blue-600 disabled:bg-primary dark:disabled:bg-primary disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                {'Verifying'}
              </span>
            ) : (
              'VerifyCode'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TwoFactorPage;
