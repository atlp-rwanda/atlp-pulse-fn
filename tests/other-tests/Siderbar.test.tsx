import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../../src/pages/Home';

describe('<Home />', () => {
  it('Renders Home', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <Home />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
