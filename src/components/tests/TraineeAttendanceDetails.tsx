/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TraineeAttendanceDetails from '../TraineeAttendanceDetails';

describe('Trainee Viewing Detailed Attendance Rating', () => {
  it('Renders a Detailed Trainee Attendance Page ', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <TraineeAttendanceDetails />
          
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
