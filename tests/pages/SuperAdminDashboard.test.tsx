/* eslint-disable class-methods-use-this */
import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import SuperAdminDashboard from '../../src/pages/SuperAdminDashboard';
import {
  GET_ALL_ORG_USERS,
  GET_ORGANIZATIONS,
  GET_REGISTRATION_STATS,
} from '../../src/queries/organization.queries';
import { GET_EVENTS } from '../../src/queries/event.queries';

global.ResizeObserver = class {
  observe() {}

  unobserve() {}

  disconnect() {}
};

const mocks = [
  {
    request: {
      query: GET_ALL_ORG_USERS,
    },
    result: {
      data: {
        getAllOrgUsers: {
          totalUsers: 2,
          organizations: [
            {
              organization: {
                id: 'test-org-id',
                name: 'test-org',
                description: 'test-org',
                admin: {
                  id: 'test-org-admin',
                  email: 'test-org-admin@test.com',
                  profile: {
                    name: 'test-org',
                  },
                },
                status: 'active',
              },
              members: [
                {
                  email: 'test-org-admin@test.com',
                  profile: {
                    name: 'test-org',
                  },
                },
              ],
              monthPercentage: 5.88235294117647,
              loginsCount: 2,
              recentLocation: null,
            },
            {
              organization: {
                id: 'test-org2-id',
                name: 'test-org2',
                description: 'test-org2',
                admin: {
                  id: 'test-org2-admin',
                  email: 'test-org2-admin@test.com',
                  profile: {
                    name: 'test-org2',
                  },
                },
                status: 'active',
              },
              members: [
                {
                  email: 'test-org-user@test.com',
                  profile: {
                    name: 'test-org-user',
                  },
                },
              ],
              monthPercentage: 0,
              loginsCount: 0,
              recentLocation: null,
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: GET_EVENTS,
      variables: {
        authToken: 'mocked-org-token',
      },
    },
    result: {
      data: {
        getEvents: [
          {
            id: 'test-event-id',
            user: 'test-event-user',
            end: '2024-12-10T14:43:49.000Z',
            hostName: 'John Doe',
            start: '2024-12-01T14:43:49.000Z',
            timeToEnd: '14:01',
            timeToStart: '08:45',
            title: 'test-event-title',
            invitees: [
              {
                email: 'test-event-user@test.com',
              },
            ],
          },
        ],
      },
    },
  },
  {
    request: {
      query: GET_REGISTRATION_STATS,
    },
    result: {
      data: {
        getRegistrationStats: [
          {
            year: 2024,
            stats: [
              {
                month: 'jan',
                users: 0,
                organizations: 0,
              },
              {
                month: 'feb',
                users: 0,
                organizations: 0,
              },
              {
                month: 'mar',
                users: 0,
                organizations: 0,
              },
              {
                month: 'apr',
                users: 0,
                organizations: 0,
              },
              {
                month: 'may',
                users: 0,
                organizations: 0,
              },
              {
                month: 'jun',
                users: 0,
                organizations: 0,
              },
              {
                month: 'jul',
                users: 0,
                organizations: 0,
              },
              {
                month: 'aug',
                users: 0,
                organizations: 0,
              },
              {
                month: 'sep',
                users: 1,
                organizations: 2,
              },
              {
                month: 'oct',
                users: 1,
                organizations: 1,
              },
              {
                month: 'nov',
                users: 3,
                organizations: 2,
              },
              {
                month: 'dec',
                users: null,
                organizations: null,
              },
            ],
          },
          {
            year: 2023,
            stats: [
              {
                month: 'jan',
                users: 0,
                organizations: 0,
              },
              {
                month: 'feb',
                users: 0,
                organizations: 0,
              },
              {
                month: 'mar',
                users: 0,
                organizations: 0,
              },
              {
                month: 'apr',
                users: 0,
                organizations: 0,
              },
              {
                month: 'may',
                users: 0,
                organizations: 1,
              },
              {
                month: 'jun',
                users: 0,
                organizations: 0,
              },
              {
                month: 'jul',
                users: 0,
                organizations: 0,
              },
              {
                month: 'aug',
                users: 0,
                organizations: 0,
              },
              {
                month: 'sep',
                users: 0,
                organizations: 2,
              },
              {
                month: 'oct',
                users: 1,
                organizations: 0,
              },
              {
                month: 'nov',
                users: 2,
                organizations: 1,
              },
              {
                month: 'dec',
                users: null,
                organizations: null,
              },
            ],
          },
        ],
      },
    },
  },
  {
    request: {
      query: GET_ORGANIZATIONS,
    },
    result: {
      data: {
        getOrganizations: [
          {
            id: 'test-org-id',
            name: 'test-org',
            description: 'test-org-description',
            admin: {
              id: 'test-org-admin-id',
              email: 'test-org-admin@test.com',
            },
            status: 'active',
          },
          {
            id: 'test-org2-id',
            name: 'test-org2',
            description: 'test-org2-description',
            admin: {
              id: 'test-org2-admin-id',
              email: 'test-org2-admin@test.com',
            },
            status: 'pending',
          },
          {
            id: 'test-org3-id',
            name: 'test-org3',
            description: 'test-org3-description',
            admin: {
              id: 'test-org3-admin-id',
              email: 'test-org3-admin@test.com',
            },
            status: 'rejected',
          },
        ],
      },
    },
  },
];
jest.mock('recharts', () => {
  const OriginalRecharts = jest.requireActual('recharts');
  return {
    ...OriginalRecharts,
    ResponsiveContainer: ({ children }: any) => <div>{children}</div>,
  };
});

describe('Super Admin Dashboard test ', () => {
  beforeEach(() => {
    localStorage.setItem('auth_token', 'mocked-org-token');
  });
  afterEach(async () => {
    localStorage.clear();
    jest.restoreAllMocks();
    await cleanup();
  });
  it('Should render SuperAdminDashboard', () => {
    const elem = renderer
      .create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <MemoryRouter>
            <SuperAdminDashboard />
          </MemoryRouter>
        </MockedProvider>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Should display platform stats', async () => {
    await cleanup();
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <SuperAdminDashboard />
        </MemoryRouter>
      </MockedProvider>,
    );

    const orgCardTitle = await screen.findByText('Organizations');
    expect(orgCardTitle).toBeInTheDocument();
    const orgCount = await screen.findByText('03');
    expect(orgCount).toBeInTheDocument();
  });
  it('Should display on graph data from another year', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <SuperAdminDashboard />
        </MemoryRouter>
      </MockedProvider>,
    );
    expect(
      await screen.findByTestId('registrationStatsLoading'),
    ).toBeInTheDocument();
    const year = await screen.findAllByText('2024');
    expect(year).toHaveLength(2);
    const year2 = await screen.findAllByText('2023');
    expect(year2).toHaveLength(2);
    fireEvent.click(year2[1]);
    fireEvent.click(year[0]);
  });
});
