import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import renderer, { act } from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { GET_TRAINEE_ATTENDANCE } from '../../src/queries/attendance.queries';
import TraineeAttendance from '../../src/pages/TraineeAttendance';

const mockData = {
  getTraineeAttendanceByID: [
    {
      weekNumber: '1',
      traineeAttendance: [
        { days: 'Monday', value: 1 },
        { days: 'Tuesday', value: 0 },
      ],
    },
  ],
};

const mocks = [
  {
    request: {
      query: GET_TRAINEE_ATTENDANCE,
      variables: { },
    },
    result: {
      data: {
        getTraineeAttendance: {
          teamName: 'Team I',
          traineeId: 'Team-I-id',
          phases: [
            {
              phase: {
                _id: 'Phase-I-id',
                name: 'Phase I',
              },
              weeks: [
                {
                  week: 1,
                  daysStatus: {
                    mon: {
                      date: '2024-10-21',
                      score: null,
                    },
                    tue: {
                      date: '2024-10-22',
                      score: null,
                    },
                    wed: {
                      date: '2024-10-23',
                      score: '1',
                    },
                    thu: {
                      date: '2024-10-24',
                      score: '1',
                    },
                    fri: {
                      date: '2024-10-25',
                      score: '0',
                    },
                  },
                },
                {
                  week: 2,
                  daysStatus: {
                    mon: {
                      date: '2024-10-28',
                      score: '1',
                    },
                    tue: {
                      date: '2024-10-29',
                      score: null,
                    },
                    wed: {
                      date: '2024-10-30',
                      score: null,
                    },
                    thu: {
                      date: '2024-10-31',
                      score: null,
                    },
                    fri: {
                      date: '2024-11-01',
                      score: null,
                    },
                  },
                },
              ],
            },
            {
              phase: {
                _id: 'Phase-II-id',
                name: 'Phase II',
              },
              weeks: [
                {
                  week: 1,
                  daysStatus: {
                    mon: {
                      date: '2024-10-21',
                      score: null,
                    },
                    tue: {
                      date: '2024-10-22',
                      score: '1',
                    },
                    wed: {
                      date: '2024-10-23',
                      score: '2',
                    },
                    thu: {
                      date: '2024-10-24',
                      score: '1',
                    },
                    fri: {
                      date: '2024-10-25',
                      score: null,
                    },
                  },
                },
              ],
            },
          ],
        },
      },
    },
  },
];

describe('Renders the TraineeAttendance Page', () => {
  it('renders trainee attendance data correctly', async () => {
    const elem = renderer
      .create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <TraineeAttendance />
        </MockedProvider>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('Shows a message when there is no attendance record for trainee', async () => {

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TraineeAttendance />
      </MockedProvider>,
    );

    // Check if Date was displayed
    expect(await screen.findByText('24, Oct 2024')).toBeInTheDocument();

    const phaseElement = await screen.findByText('Phase I');
    expect(phaseElement).toBeInTheDocument();
    fireEvent.click(phaseElement);
    
    const weekElement = await screen.findByTestId('week-test');
    expect(weekElement).toBeInTheDocument();
    fireEvent.change(weekElement, { target: { value: '1' } });
  });
  it('Shows a message when there is no attendance record for trainee', async () => {
    
    mocks[0].result.data.getTraineeAttendance.phases = [];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TraineeAttendance />
      </MockedProvider>,
    );

    expect(await screen.findByText("You don't have an attendance record in the system at the moment.")).toBeInTheDocument();
  });

});