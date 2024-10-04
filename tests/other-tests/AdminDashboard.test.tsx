import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AdminDashboard from '../../src/pages/AdminDashboard';

const client = new ApolloClient({ cache: new InMemoryCache() });

describe('<Account />', () => {
  test('should render account component', async () => {
    act(() => {
      render(
        <ApolloProvider client={client}>
          <MemoryRouter>
            <AdminDashboard />
          </MemoryRouter>
        </ApolloProvider>,
      );
    });

    const inviteBtn = screen.getByTestId('invite');
    const removeInviteModel = screen.getByTestId('removeInviteModel');
    const inviteInput = screen.getByTestId('inviteInput');

    expect(inviteInput).toBeInTheDocument();
    expect(inviteBtn).toBeInTheDocument();
    expect(removeInviteModel).toBeInTheDocument();

    act(() => {
      fireEvent.change(inviteInput, {
        target: { value: 'admin@devpulse.co' },
      });
      fireEvent.click(inviteBtn);
      fireEvent.click(removeInviteModel);
    });
  });
});