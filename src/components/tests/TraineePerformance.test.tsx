/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TraineePerfomance from '../TraineePerformance';

describe('View overall performance', () => {
  it('Renders the Trainee Performance Page ', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <TraineePerfomance />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
