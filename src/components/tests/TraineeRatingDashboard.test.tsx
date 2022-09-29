import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import TraineeRatingDashboard from '../../pages/TraineeRatingDashboard';

jest.mock('../../pages/TraineeRatingDashboard');

describe('TraineeRatingDashboard Tests', () => {
  jest.mock('react-dom', () => ({
    ...jest.requireActual('react-dom'),
    // @ts-ignore
    createPortal: (node) => node,
  }));

  it('Renders TraineeRatingDashboard', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <TraineeRatingDashboard />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
