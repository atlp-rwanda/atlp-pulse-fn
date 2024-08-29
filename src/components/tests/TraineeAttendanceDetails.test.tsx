/* eslint-disable */
import '@testing-library/jest-dom';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TraineeAttendanceDetails from '../TraineeAttendanceDetails';
import { screen, render } from '@testing-library/react';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';

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
  it('should render a Detailed Trainee Attendance Page ', () => {
    const result = render(
      <BrowserRouter>
        <ApolloProvider>
          <TraineeAttendanceDetails />
        </ApolloProvider>
      </BrowserRouter>,
    );
    expect(screen.getAllByText('Record')).toHaveLength(3);
    expect(screen.getByText('Comment')).toBeInTheDocument();
  });
});
