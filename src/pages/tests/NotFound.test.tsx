import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import NotFound from '../NotFound';

describe('Not Found', () => {
  it('Renders the 404 Page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
