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
import { GET_ALL_TEAMS } from '../../src/Mutations/teamMutation';
import { GET_TEAM_ATTENDANCE } from '../../src/Mutations/Attendance';

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
            id: '66eea29cba07ede8a49e8bc6',
            name: 'Team I',
            cohort: {
              name: 'cohort 1',
              phase: {
                name: 'Phase I',
                id: '66eea29cba07ede8a49e8bad',
              },
              coordinator: {
                id: '66eea29cba07ede8a49e8dcz',
              },
            },
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
        team: '66eea29cba07ede8a49e8bc6',
      },
    },
    result: {
      data: {
        getTeamAttendance: [
          {
            id: '66faedaab256018b1efcd57a',
            week: '1',
            phase: {
              name: 'Phase I',
              id: '66eea29cba07ede8a49e8bad',
            },
            cohort: {
              id: '66eea29cba07ede8a49e8bbb',
              name: 'cohort 1',
            },
            teams: [
              {
                team: {
                  id: '66eea29cba07ede8a49e8bc6',
                  name: 'Team I',
                },
                trainees: [
                  {
                    trainee: {
                      id: '66eea29cba07ede8a49e8b81',
                      email: 'example@gmail.com',
                      profile: {
                        id: '66eea29cba07ede8a49e8b90',
                        name: 'Example Virgile',
                      },
                    },
                    status: [
                      {
                        day: 'mon',
                        date: '1727654400000',
                        score: 2,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: '66fc3cd78788248998569bb7',
            week: '1',
            phase: {
              name: 'Phase II',
              id: '66eea29cba07ede8a49ewxyz',
            },
            cohort: {
              id: '66eea29cba07ede8a49e8bbb',
              name: 'cohort 1',
            },
            teams: [
              {
                team: {
                  id: '66eea29cba07ede8a49e8bc6',
                  name: 'Team I',
                },
                trainees: [
                  {
                    trainee: {
                      id: '66eea29cba07ede8a49e8b81',
                      email: 'example@gmail.com',
                      profile: {
                        id: '66eea29cba07ede8a49e8b90',
                        name: 'Example Virgile',
                      },
                    },
                    status: [
                      {
                        day: 'mon',
                        date: '1728259200000',
                        score: 1,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    maxUsageCount: 10,
  },
];

jest.mock('react-toastify', () => ({
  toast: {
    warning: jest.fn(),
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
    const elem = renderer
      .create(
        <MemoryRouter>
          <MockedProvider mocks={[]} addTypename={false}>
            <TraineeAttendanceTracker />
          </MockedProvider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Renders the TraineeAttendance Page', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TraineeAttendanceTracker />
      </MockedProvider>,
    );

    expect(await screen.findByText('Loading Data...')).toBeInTheDocument();

    const teamElement = await screen.findByTestId('team-test');
    expect(teamElement).toBeInTheDocument();

    fireEvent.change(teamElement, {
      target: { value: '66eea29cba07ede8a49e8bc6' },
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

    expect(await screen.findByText('Example Virgile')).toBeInTheDocument();

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

    const editButton = await screen.findByTestId('edit-button');
    expect(editButton).toBeInTheDocument();

    fireEvent.click(editButton);

    const zeroScore = await screen.findByTestId('score-0');
    fireEvent.click(zeroScore);

    fireEvent.click(phase2Element);

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

    expect(await screen.findByText('Example Virgile')).toBeInTheDocument();

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
