import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Pricing from '../../src/pages/Pricing';

describe('<Pricing />', () => {
  it('Renders Pricing', () => {
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
