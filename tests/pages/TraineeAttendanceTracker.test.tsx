/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer, { act } from 'react-test-renderer';
import { toast } from 'react-toastify';
import {
  cleanup,
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import {
  MockedProvider as ApolloProvider,
  MockedProvider,
} from '@apollo/client/testing';
import TraineeAttendanceTracker from '../../src/pages/TraineeAttendanceTracker';
import { GET_ALL_TEAMS, GET_TTL_TEAMS } from '../../src/queries/team.queries';
import { GET_TEAM_ATTENDANCE } from '../../src/queries/attendance.queries';

const mocks = [
  {
    request: {
      query: GET_ALL_TEAMS,
      variables: {
        orgToken: 'mocked-org-token',
      },
    },
    result: {
      data: {
        getAllTeams: [
          {
            id: 'Team-I-id-123',
            name: 'Team I',
            isJobActive: true,
            active: true,
            phase: {
              id: 'test-phase-i',
              name: 'Phase I',
            },
            cohort: {
              name: 'cohort 1',
              phase: {
                id: 'test-phase-i',
                name: 'Phase I',
              },
              coordinator: {
                id: 'coordinator-id',
              },
            },
            members: [
              {
                id: 'test-trainee-name',
                email: 'test-trainee-name@gmail.com',
                role: 'trainee',
                status: {
                  date: null,
                  reason: null,
                  status: 'active',
                },
                profile: {
                  id: 'trainee-name-profile',
                  name: 'test-trainee-name',
                },
              },
            ],
          },
          {
            id: 'Team-II-id-123',
            name: 'Team II',
            isJobActive: true,
            active: true,
            phase: {
              id: 'test-phase-i',
              name: 'Phase I',
            },
            cohort: {
              name: 'cohort 1',
              phase: {
                id: 'test-phase-i',
                name: 'Phase I',
              },
              coordinator: {
                id: 'coordinator-id',
              },
            },
            members: [
              {
                id: 'test-trainee-name2',
                email: 'test-trainee-name2@gmail.com',
                role: 'ttl',
                status: {
                  date: null,
                  reason: null,
                  status: 'active',
                },
                profile: {
                  id: 'trainee-name2-profile',
                  name: 'test-trainee-name2',
                },
              },
            ],
          },
          {
            id: '66eea29cba07ede8a49e8bc7',
            name: 'Team III',
            cohort: {
              name: 'cohort 2',
              phase: {
                name: 'Phase II',
                id: '66eea29cba07ede8a49e8bae',
              },
              coordinator: {
                id: '66eea29cba07ede8a49e8dcz',
              },
            },
            members: [],
          },
        ],
      },
    },
    maxUsageCount: 10,
  },
  {
    request: {
      query: GET_TTL_TEAMS,
      variables: {
        orgToken: 'mocked-org-token',
      },
    },
    result: {
      data: {
        getTTLTeams: [
          {
            id: 'Team-I-id-123',
            name: 'Team I',
            isJobActive: true,
            active: true,
            phase: {
              id: 'test-phase-i',
              name: 'Phase I',
            },
            cohort: {
              name: 'cohort 1',
              phase: {
                id: 'test-phase-i',
                name: 'Phase I',
              },
              coordinator: {
                id: 'coordinator-id',
              },
            },
            members: [
              {
                id: 'test-trainee-name',
                email: 'test-trainee-name@gmail.com',
                role: 'trainee',
                status: {
                  date: null,
                  reason: null,
                  status: 'active',
                },
                profile: {
                  id: 'trainee-name-profile',
                  name: 'test-trainee-name',
                },
              },
            ],
          },
        ],
      },
    },
    maxUsageCount: 10,
  },
  {
    delay: 500,
    request: {
      query: GET_TEAM_ATTENDANCE,
      variables: {
        orgToken: 'mocked-org-token',
        team: 'Team-I-id-123',
      },
    },
    result: {
      data: {
        getTeamAttendance: {
          today: '1729533725697',
          yesterday: '1729274525697',
          attendanceWeeks: [
            {
              phase: {
                id: 'test-phase-i',
                name: 'Phase I',
              },
              weeks: [1],
            },
            {
              phase: {
                id: 'test-phase-ii',
                name: 'Phase II',
              },
              weeks: [1, 2],
            },
          ],
          attendance: [
            {
              week: 1,
              phase: {
                id: 'test-phase-i',
                name: 'Phase I',
              },
              dates: {
                mon: {
                  date: '2024-10-21',
                  isValid: true,
                },
                tue: {
                  date: '2024-10-22',
                  isValid: false,
                },
                wed: {
                  date: '2024-10-23',
                  isValid: false,
                },
                thu: {
                  date: '2024-10-24',
                  isValid: false,
                },
                fri: {
                  date: '2024-10-25',
                  isValid: false,
                },
              },
              days: {
                mon: [
                  {
                    trainee: {
                      id: 'test-trainee-name',
                      email: 'test-trainee-name@gmail.com',
                      profile: {
                        id: 'trainee-name-profile',
                        name: 'test-trainee-name',
                      },
                    },
                    score: 2,
                  },
                  {
                    trainee: {
                      id: 'test-trainee-name2',
                      email: 'test-trainee-name2@gmail.com',
                      profile: {
                        id: 'trainee-name2-profile',
                        name: 'test-trainee-name2',
                      },
                    },
                    score: 1,
                  },
                ],
                tue: [],
                wed: [],
                thu: [],
                fri: [],
              },
            },
          ],
        },
      },
    },
    maxUsageCount: 10,
  },
];

jest.mock('react-toastify', () => ({
  toast: {
    warning: jest.fn(),
    error: jest.fn(),
  },
}));

describe('CRUD Of Trainee Attendance', () => {
  beforeEach(() => {
    localStorage.setItem('orgToken', 'mocked-org-token');
  });

  afterEach(async () => {
    localStorage.clear();
    jest.restoreAllMocks();
    await cleanup();
  });

  it('Renders the TraineeAttendance Page', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      user: {
        role: 'coordinator',
      },
    }));
    const elem = renderer
      .create(
          <MockedProvider mocks={mocks} addTypename={false}>
            <TraineeAttendanceTracker />
          </MockedProvider>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Renders the TraineeAttendance Page', async () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      user: {
        role: 'ttl',
      },
    }));
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TraineeAttendanceTracker />
      </MockedProvider>,
    );

    expect(await screen.findByText('Loading Data...')).toBeInTheDocument();

    const teamElement = await screen.findByTestId('team-test');
    expect(teamElement).toBeInTheDocument();

    fireEvent.change(teamElement, {
      target: { value: 'Team-I-id-123' },
    });

    const weeksElement = await screen.findByTestId('week-test');
    expect(weeksElement).toBeInTheDocument();

    const updateLink2 = screen.getByTestId('update-link-2');
    expect(updateLink2).toBeInTheDocument();

    const phase1Element = await screen.findByText('Phase I');
    expect(phase1Element).toBeInTheDocument();

    fireEvent.click(phase1Element);

    const phase2Element = await screen.findByText('Phase II');
    expect(phase2Element).toBeInTheDocument();

    fireEvent.change(weeksElement, { target: { value: '2' } });
    fireEvent.change(weeksElement, { target: { value: '1' } });

    const daysElement = screen.getAllByTestId('days-test');
    expect(daysElement).toHaveLength(5);
    daysElement.forEach((element) => {
      fireEvent.click(element);
    });
    fireEvent.click(daysElement[0]);

    // Back to Phase I
    fireEvent.click(phase1Element);

    // Find row with trainee name test-trainee-name
    expect(await screen.findByText('test-trainee-name')).toBeInTheDocument();

    fireEvent.click(updateLink2);

    const cancelButton = await screen.findByTestId('cancel-button');
    expect(cancelButton).toBeInTheDocument();
    fireEvent.click(cancelButton);

    fireEvent.click(updateLink2);

    const deleteBtn = await screen.findByTestId('delete-btn-test');
    expect(deleteBtn).toBeInTheDocument();

    fireEvent.click(deleteBtn);

    expect(toast.warning).toHaveBeenCalledWith(
      'You cannot delete the attendance while it is being updated.',
      { style: { color: '#000', lineHeight: '.95rem' } },
    );

    const editButton = await screen.findAllByTestId('edit-button');
    expect(editButton).toHaveLength(2);

    fireEvent.click(editButton[0]);

    const zeroScore = await screen.findByTestId('score-0');
    expect(zeroScore).toBeInTheDocument();
    fireEvent.click(zeroScore);

    await fireEvent.click(phase2Element);

    expect(toast.warning).toHaveBeenCalledWith(
      'First Discard or Update your changes',
      expect.objectContaining({
        style: { color: '#000', lineHeight: '.95rem' },
      }),
    );

    fireEvent.click(daysElement[1]);

    expect(toast.warning).toHaveBeenCalledWith(
      'First Discard or Update your changes',
      expect.objectContaining({
        style: { color: '#000', lineHeight: '.95rem' },
      }),
    );

    fireEvent.change(weeksElement, { target: { value: '2' } });

    expect(toast.warning).toHaveBeenCalledWith(
      'First Discard or Update your changes',
      expect.objectContaining({
        style: { color: '#000', lineHeight: '.95rem' },
      }),
    );
  });
  it("Doesn't Delete attendance Test for day without entries", async () => {
    await cleanup();
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      user: {
        role: 'coordinator',
      },
    }));
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TraineeAttendanceTracker />
      </MockedProvider>,
    );

    const teamElement = await screen.findByTestId('team-test');
    expect(teamElement).toBeInTheDocument();

    fireEvent.change(teamElement, {
      target: { value: '66eea29cba07ede8a49e8bc6' },
    });

    expect(await screen.findByText('Loading Data...')).toBeInTheDocument();

    const phase1Element = await screen.findByText('Phase I');
    expect(phase1Element).toBeInTheDocument();

    fireEvent.click(phase1Element);

    const weeksElement = await screen.findByTestId('week-test');
    expect(weeksElement).toBeInTheDocument();

    const updateLink2 = screen.getByTestId('update-link-2');
    expect(updateLink2).toBeInTheDocument();

    expect(await screen.findByText('test-trainee-name')).toBeInTheDocument();

    fireEvent.change(weeksElement, { target: { value: '2' } });
    fireEvent.change(weeksElement, { target: { value: '1' } });

    const phase2Element = await screen.findByText('Phase II');
    expect(phase2Element).toBeInTheDocument();
    fireEvent.click(phase2Element);

    const daysElement = screen.getAllByTestId('days-test');

    fireEvent.click(daysElement[4]);

    const deleteBtn = await screen.findByTestId('delete-btn-test');
    expect(deleteBtn).toBeInTheDocument();

    fireEvent.click(deleteBtn);
  });
});
