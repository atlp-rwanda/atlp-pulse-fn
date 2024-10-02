/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import AttendanceDetails from '../../../src/containers/Trainee/AttendanceDetails';

describe('Attendance Detailed page', () => {
  it('Renders the Attendance Detailed Page ', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <AttendanceDetails />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
