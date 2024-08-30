/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Register from './../OrgRegister';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '@testing-library/jest-dom';

const client = new ApolloClient({ cache: new InMemoryCache() });

describe('Register an Organization', () => {
  test('Renders the register Page', () => {
    act(() => {
      render(
        <ApolloProvider client={client}>
          <MemoryRouter>
            <Register />
          </MemoryRouter>
        </ApolloProvider>,
      );
    });
    expect(screen.getByTestId('dataid')).toBeInTheDocument();
    expect(screen.getByTestId('input1')).toBeInTheDocument();
    act(() => {
      fireEvent.change(screen.getByTestId('input1'), {
        target: { value: 'Rwanda' },
      });
    });
  });
});
