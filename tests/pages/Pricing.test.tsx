import React from 'react';

import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Pricing from '../../src/pages/Pricing';

describe('Pricing Page', () => {
  it('Renders the page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <Pricing />
        </MemoryRouter>,
      )
      .toJSON();

    expect(elem).toMatchSnapshot();
  });
});
