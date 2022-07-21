/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TraineeAttendance from '../TraineeAttendance';


describe('Trainee Attendance page', () => {
  it('Renders the Trainee Attendance Page ', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <TraineeAttendance />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
