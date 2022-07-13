import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import UpdatedRatingDashboard from '../../pages/UpdatedRatingDashboard';

describe('<UpdatedRatingDashboard />', () => {
  it('Renders UpdatedRatingDashboard', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <UpdatedRatingDashboard />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
