/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Error from '../Error';

describe('Page Not Found', () => {
  it('Renders the 404 Page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <Error />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});