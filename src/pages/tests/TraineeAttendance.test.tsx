/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer, { act } from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import TraineeAttendanceTracker from '../TraineeAttendance';
import { traineeAttendanceData } from '../../dummyData/traineeAttendance';

describe('CRUD Of Trainee Attendance', () => {
  const mockOptional = [
    { value: 'Monday' },
    { value: 'Tuesday' },
    { value: 'Wednesday' },
    { value: 'Thusday' },
    { value: 'Friday' },
  ];

  it('Renders the TraineeAttendance Page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ApolloProvider>
            <TraineeAttendanceTracker />
          </ApolloProvider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('Test component', () => {
    render(
      <MemoryRouter>
        <ApolloProvider>
          <TraineeAttendanceTracker />
        </ApolloProvider>
      </MemoryRouter>,
    );

    const submitAttend = screen.getByTestId('submitAttend');
    const removeModel = screen.getByTestId('removeModel');
    const getDay = screen.getByTestId('getDay');
    const getWeek = screen.getByTestId('getWeek');
    const testWeek = screen.getByTestId('testWeek');

    fireEvent.click(submitAttend);
    fireEvent.click(removeModel);

    expect(screen.getByTestId('removeModel')).toBeInTheDocument();
    expect(getDay).toBeInTheDocument();
    expect(getWeek).toBeInTheDocument();
    expect(testWeek).toBeInTheDocument();

    fireEvent.change(testWeek, {
      target: {
        value: '1',
      },
    });

    fireEvent.change(getDay, { target: { value: 'Monday' } });
    fireEvent.change(getDay, { target: { value: 'Tuesday' } });
    fireEvent.change(getDay, { target: { value: 'Wednesday' } });
    fireEvent.change(getDay, { target: { value: 'Thursday' } });
    fireEvent.change(getDay, { target: { value: 'Friday' } });
  });
});
