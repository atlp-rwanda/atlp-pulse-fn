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
import { PAUSE_AND_RESUME_ATTENDANCE } from '../../src/Mutations/Attendance';

const sampleResult = {
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
};

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
            isJobActive: false,
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
        getTeamAttendance: sampleResult,
      },
    },
    maxUsageCount: 10,
  },
  {
    delay: 500,
    request: {
      query: PAUSE_AND_RESUME_ATTENDANCE,
      variables: {
        orgToken: 'mocked-org-token',
        team: 'Team-I-id-123',
      },
    },
    result: {
      data: {
        pauseAndResumeTeamAttendance: {
          team: {
            id: 'Team-I-id-123',
            name: 'Team-I-id-123',
            isJobActive: true,
          },
          sanitizedAttendance: sampleResult,
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
        </MockedProvider>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Renders loading state and handles no data gracefully', async () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      user: { role: 'ttl' },
    }));

    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <TraineeAttendanceTracker />
      </MockedProvider>,
    );

    expect(screen.getByText('Loading Data...')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('No teams')).toBeInTheDocument();
    });
  });

  it('Renders the TraineeAttendance Page with mocked data and tests attendance actions', async () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      user: { role: 'ttl' },
    }));

    const mockSetIsUpdatedMode = jest.fn();
    const mockSetSelectedDayHasData = jest.fn();

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TraineeAttendanceTracker />
      </MockedProvider>,
    );

    expect(await screen.findByText('Loading Data...')).toBeInTheDocument();

    const teamElement = await screen.findByTestId('team-test');
    expect(teamElement).toBeInTheDocument();
    fireEvent.change(teamElement, { target: { value: 'Team-I-id-123' } });

    const weeksElement = await screen.findByTestId('week-test');
    expect(weeksElement).toBeInTheDocument();
    fireEvent.change(weeksElement, { target: { value: '1' } });

    const phase1Element = await screen.findByText('Phase I');
    expect(phase1Element).toBeInTheDocument();
    fireEvent.click(phase1Element);

    const daysElement = screen.getAllByTestId('days-test');
    expect(daysElement).toHaveLength(5);
    fireEvent.click(daysElement[0]);

    const updateLink = await screen.findByTestId('update-link-2');
    expect(updateLink).toBeInTheDocument();

    fireEvent.click(updateLink);
    expect(toast.warning).toHaveBeenCalledWith(
      'You cannot update attendance for the day without any entries.',
      { style: { color: '#000', lineHeight: '.95rem' } },
    );

    mockSetSelectedDayHasData.mockImplementation(() => true);
    fireEvent.click(updateLink);

    mockSetIsUpdatedMode.mockImplementation(() => true);
    const deleteBtn = await screen.findByTestId('delete-btn-test');
    expect(deleteBtn).toBeInTheDocument();
    fireEvent.click(deleteBtn);

    fireEvent.click(deleteBtn);

    // Verify all calls to toast.warning
    expect(toast.warning).toHaveBeenNthCalledWith(
      1,
      'You cannot update attendance for the day without any entries.',
      { style: { color: '#000', lineHeight: '.95rem' } },
    );

    expect(toast.warning).toHaveBeenNthCalledWith(
      2,
      'You cannot update attendance for the day without any entries.',
      { style: { color: '#000', lineHeight: '.95rem' } },
    );

    expect(toast.warning).toHaveBeenNthCalledWith(
      3,
      'You cannot delete attendance for the day without any entries.',
      { style: { color: '#000', lineHeight: '.95rem' } },
    );
  });

  it('Handles "Pause Attendance" functionality', async () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      user: { role: 'coordinator' },
    }));

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TraineeAttendanceTracker />
      </MockedProvider>,
    );

    const teamElement = await screen.findByTestId('team-test');
    expect(teamElement).toBeInTheDocument();

    fireEvent.change(teamElement, {
      target: { value: 'Team-I-id-123' },
    });

    const pauseAttendanceButton = await screen.findByText('Submit Attendance');
    expect(pauseAttendanceButton).toBeInTheDocument();

    fireEvent.click(pauseAttendanceButton);
  });
  it('Handles "Resume Attendance" functionality', async () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      user: { role: 'coordinator' },
    }));

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TraineeAttendanceTracker />
      </MockedProvider>,
    );

    const teamElement = await screen.findByTestId('team-test');
    expect(teamElement).toBeInTheDocument();

    fireEvent.change(teamElement, {
      target: { value: 'Team-I-id-123' },
    });

    const resumeAttendanceButton = await screen.findByText('Resume Attendance');
    expect(resumeAttendanceButton).toBeInTheDocument();

    fireEvent.click(resumeAttendanceButton);

    const confirmButton = await screen.findByText('Confirm');
    expect(confirmButton).toBeInTheDocument();
    fireEvent.click(confirmButton);
  });

  it('Handles interactions with disabled or missing elements', async () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      user: { role: 'ttl' },
    }));

    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <TraineeAttendanceTracker />
      </MockedProvider>,
    );

    const teamElement = screen.queryByTestId('team-test');
    expect(teamElement).not.toBeInTheDocument();

    const updateLink = screen.queryByTestId('update-link-2');
    expect(updateLink).not.toBeInTheDocument();
  });
});
