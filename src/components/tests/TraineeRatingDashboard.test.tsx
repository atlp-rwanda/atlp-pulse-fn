import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import TraineeRatingDashboard from '../../pages/TraineeRatingDashboard';

describe('<TraineeRatingDashboard />', () => {
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
