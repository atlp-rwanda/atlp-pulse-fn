import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import AdminLogin from '../Organization/AdminLogin';

describe('Admin Login', () => {
  it('Should render', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <AdminLogin />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
