import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import UserProvider from '../../hook/useAuth';

import AdminLogin from '../Organization/AdminLogin';
import LOGIN_MUTATION from '../Organization/LoginMutation';

const mocks: any = [];
const successMocks: any = [
  {
    request: {
      query: LOGIN_MUTATION,
      variables: {
        loginInputs: {
          email: 'admin@me.com',
          password: 'password',
        },
      },
    },
    result: {
      data: {
        loginUser: {
          token: 'token',
          user: {
            id: '23re',
            email: 'admin@me.com',
            profile: null,
          },
        },
      },
    },
  },
];

const mockedUsedLocation = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => mockedUsedLocation,
}));

const mockUseLocationValue = {
  pathname: '/testroute',
  search: '',
  hash: '',
  state: '/dashboard/trainee',
};

describe('Admin Login', () => {
  it('Should render', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ApolloProvider addTypename={false} mocks={mocks}>
            <AdminLogin />
          </ApolloProvider>
          {' '}
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});

describe('Admin login with error', () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn().mockImplementation(() => mockUseLocationValue),
  }));
  it('Should render with login error message', async () => {
    const { getByTestId, findByText } = render(
      <MemoryRouter>
        <ApolloProvider addTypename={false} mocks={mocks}>
          <UserProvider>
            <AdminLogin />
          </UserProvider>
        </ApolloProvider>
      </MemoryRouter>,
    );
    fireEvent.submit(getByTestId('loginForm'));
    expect(await findByText('Email is required')).toBeInTheDocument();
  });
  it('Should submit the form', async () => {
    const { getByTestId, findByText } = render(
      <MemoryRouter>
        <UserProvider>
          <ApolloProvider addTypename={false} mocks={successMocks}>
            <AdminLogin />
          </ApolloProvider>
        </UserProvider>
      </MemoryRouter>,
    );

    fireEvent.input(getByTestId('email'), {
      target: { value: 'admin@me.com' },
    });
    fireEvent.input(getByTestId('password'), {
      target: { value: '12345678' },
    });
    fireEvent.submit(getByTestId('loginForm'));
    expect(await findByText('Sign In')).toBeInTheDocument();
  });
});
