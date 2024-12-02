import '@testing-library/jest-dom';
import React from 'react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, render, waitFor } from '@testing-library/react';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';

import BarChart from '../../src/Chart/BarChart';
import { GET_ALL_TEAMS } from '../../src/queries/team.queries';

jest.mock('../../src/pages/TraineeRatingDashboard');

const mock = [
  {
    request: {
      query: GET_ALL_TEAMS,
      variables: {
        orgToken: null,
      },
    },
    result: {
      data: {
        getAllTeams: [
          {
            id: '1',
            name: 'The marvel comics',
            isJobActive: true,
            active: true,
            phase: { id: '1', name: 'Phase 1' },
            cohort: {
              name: 'Cohort 1',
              phase: { id: '1', name: 'Phase 1' },
              coordinator: { id: '1' },
            },
            members: [],
          },
          {
            id: '2',
            name: 'DC movies',
            isJobActive: false,
            active: false,
            phase: { id: '2', name: 'Phase 2' },
            cohort: {
              name: 'Cohort 2',
              phase: { id: '2', name: 'Phase 2' },
              coordinator: { id: '2' },
            },
            members: [],
          },
        ],
      },
    },
  },
];

describe('TraineeRatingDashboard Tests', () => {
  jest.mock('react-dom', () => ({
    ...jest.requireActual('react-dom'),
    // @ts-ignore
    createPortal: (node) => node,
  }));

  it('Renders barchat loading', () => {
    const result = render(
      <BrowserRouter>
        <ApolloProvider>
          <BarChart />
        </ApolloProvider>
      </BrowserRouter>,
    );
    screen.debug(undefined, 1000000);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
  it('Renders barchat Error', async () => {
    const result = render(
      <BrowserRouter>
        <ApolloProvider addTypename={false} mocks={mock}>
          <BarChart />
        </ApolloProvider>
      </BrowserRouter>,
    );
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    expect(screen.getByText(/Error loading ratings/i)).toBeInTheDocument();
  });
});
