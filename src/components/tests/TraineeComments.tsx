/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TraineeComments from '../TraineeComments';

describe('Trainee Comments page', () => {
  it('Renders the Trainee Comments Page ', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <TraineeComments />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
