import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';
import { GET_LOGIN_ACTIVITIES } from '../../Mutations/manageStudentMutations';

import LoginActivitiesTable from '../LoginActivitiesTable';

const mocks = [
  {
    request: {
      query: GET_LOGIN_ACTIVITIES,
      variables: { page: 1 },
    },
    result: {
      data: {
        getProfile: {
          __typename: 'Profile',
          activity: [
            {
              date: '2023-07-01',
              country_name: 'Country 1',
              city: 'City 1',
              state: 'State 1',
              IPv4: '127.0.0.1',
              latitude: '1.2345',
              longitude: '2.3456',
              country_code: 'CC1',
              postal: '12345',
              failed: 'No',
            },
            // Additional activity items...
          ],
        },
      },
    },
  },
  // Additional mocks for other pages...
];

describe('LoginActivitiesTable', () => {
  it('renders loading message on initial load', () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LoginActivitiesTable />
      </MockedProvider>
    );

    expect(getByText('Loading login activities...')).toBeInTheDocument();
  });

  it('renders login activities correctly', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LoginActivitiesTable />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(getByText('Country 1')).toBeInTheDocument()
    );
    expect(getByText('City 1')).toBeInTheDocument();
    expect(getByText('State 1')).toBeInTheDocument();
    expect(getByText('127.0.0.1')).toBeInTheDocument();
    expect(getByText('No')).toBeInTheDocument();
  });

  it('loads more activities when "Load More" button is clicked', async () => {
    const { getByText, queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LoginActivitiesTable />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(getByText('Country 1')).toBeInTheDocument()
    );
    expect(queryByText('Country 2')).toBeNull();

    fireEvent.click(getByText('Load More'));

    await waitFor(() =>
      expect(getByText('Country 2')).toBeInTheDocument()
    );
  });

  it('goes back to the previous activities when "Go Back" button is clicked', async () => {
    const { getByText, queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LoginActivitiesTable />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(getByText('Country 1')).toBeInTheDocument()
    );

    fireEvent.click(getByText('Load More'));

    await waitFor(() =>
      expect(getByText('Country 2')).toBeInTheDocument()
    );

    fireEvent.click(getByText('Go Back'));

    await waitFor(() =>
      expect(getByText('Country 1')).toBeInTheDocument()
    );
    expect(queryByText('Country 2')).toBeNull();
  });
});
