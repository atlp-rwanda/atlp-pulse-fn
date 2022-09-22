import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import DashRoutes from '../DashRoutes';

describe('Dashboard Routes', () => {
  it('Should render', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <DashRoutes />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
