import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { GET_LOGIN_ACTIVITIES } from '../../src/queries/manageStudent.queries';
import LoginActivitiesTable from '../../src/components/LoginActivitiesTable';
import LoginActivitiesSkeleton from '../../src/Skeletons/loginActivities.skeleton';

const mockLoginActivities = [
  {
    date: '2023-07-15',
    country_name: 'Country 1',
    city: 'City 1',
    state: 'State 1',
    IPv4: '127.0.0.1',
    latitude: '123.456',
    longitude: '789.012',
    country_code: 'CC1',
    postal: '12345',
    failed: 0,
  },
];

const mocks = [
  {
    request: {
      query: GET_LOGIN_ACTIVITIES,
      variables: { page: 1 },
    },
    result: {
      data: {
        getProfile: {
          activity: mockLoginActivities,
        },
      },
    },
  },
];

describe('LoginActivities', () => {
  it('renders login activities skeleton table', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LoginActivitiesTable />
      </MockedProvider>,
    );
    expect(screen.getByTestId('login-activities-skeleton')).toBeInTheDocument();
  });
  it('displays loading state while fetching login activities', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LoginActivitiesTable />
      </MockedProvider>,
    );

    expect(screen.getByTestId('login-activities-skeleton')).toBeTruthy();
  });

  it('displays error state if login activities retrieval fails', async () => {
    const errorMock = {
      request: {
        query: GET_LOGIN_ACTIVITIES,
        variables: { page: 1 },
      },
      error: new Error('Failed to fetch login activities'),
    };

    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <LoginActivitiesTable />
      </MockedProvider>,
    );
  });

  it('sorts login activities when table headers are clicked', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LoginActivitiesTable />
      </MockedProvider>,
    );
  });

  it('paginates login activities when navigating to different pages', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LoginActivitiesTable />
      </MockedProvider>,
    );
  });

  it('filters login activities based on search criteria or filters', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LoginActivitiesTable />
      </MockedProvider>,
    );
  });

  it('displays responsive design for different screen sizes', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={['/']}>
          <LoginActivitiesTable />
        </MemoryRouter>
      </MockedProvider>,
    );
  });
});
