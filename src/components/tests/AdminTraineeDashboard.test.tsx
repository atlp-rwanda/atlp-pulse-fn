import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import AdminTraineeDashboard from '../../pages/AdminTraineeDashboard';

describe('<AdminTraineeDashboard />', () => {
  it('Renders AdminTraineeDashboard', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <AdminTraineeDashboard />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
