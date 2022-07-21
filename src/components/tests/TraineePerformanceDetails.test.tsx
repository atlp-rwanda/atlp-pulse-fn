/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TraineePerfomanceDetails from '../TraineePerformanceDetails';

describe('Trainee Viewing Detailed performance Rating', () => {
  it('Renders a Detailed Trainee Performance Page ', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <TraineePerfomanceDetails />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
