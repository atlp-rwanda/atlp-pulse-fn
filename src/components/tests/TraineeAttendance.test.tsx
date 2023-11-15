import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import TraineeAttendance, { optimizeWeekData } from '../TraineeAttendance'; // Adjust the import path accordingly
import { GET_WEEKLY_ATTENDANCE } from '../../Mutations/Attendance';

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
      query: GET_WEEKLY_ATTENDANCE,
      variables: { traineeEmail: 'test@example.com' },
    },
    result: { data: mockData },
  },
];

describe('TraineeAttendance', () => {
  it('renders trainee attendance data correctly', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TraineeAttendance />
      </MockedProvider>,
    );

    expect(screen.getByText(/Tuesday/i)).toBeInTheDocument();
    expect(screen.getByText(/Wednesday/i)).toBeInTheDocument();
    expect(screen.getByText(/Thursday/i)).toBeInTheDocument();
    expect(screen.getByText(/Friday/i)).toBeInTheDocument();
  });

  it('renders trainee attendance data correctly again', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TraineeAttendance />
      </MockedProvider>,
    );

    // Expect the rendered content based on the mocked data
    expect(screen.getByText(/Week/i)).toBeInTheDocument();
    expect(screen.getByText(/Monday/i)).toBeInTheDocument();
  });

  it('navigates to the next and previous pages', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TraineeAttendance />
      </MockedProvider>,
    );

    await waitFor(() => screen.getByText('Monday'));

    // Your logic for navigating to the next and previous pages
    userEvent.click(screen.getByTestId('next'));

    // Your assertions for the updated page content
    expect(screen.getByText('Tuesday')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('prev'));

    // Your assertions for the updated page content
    expect(screen.getByText('Monday')).toBeInTheDocument();
  });

  it('optimizes week data correctly', async () => {
    const testData = {
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

    const expectedData = [
      {
        weekNumber: '1',
        traineeAttendance: [
          { days: 'Monday', value: 1 },
          { days: 'Tuesday', value: 0 },
          { days: 'Wednesday', value: 'N/A' },
          { days: 'Thursday', value: 'N/A' },
          { days: 'Friday', value: 'N/A' },
        ],
      },
    ];

    expect(optimizeWeekData(testData)).toStrictEqual(expectedData);
  });
});
