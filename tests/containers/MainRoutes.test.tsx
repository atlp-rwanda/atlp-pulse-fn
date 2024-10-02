import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MainRoutes from '../../src/containers/Routes';

describe('Main Routes', () => {
  it('Should render', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <MainRoutes />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
