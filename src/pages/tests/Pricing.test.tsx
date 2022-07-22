import React from 'react';

import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Pricing from '../Pricing';
import PricingForm from '../../components/PricingForm';

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
  it('Renders the page with form', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <PricingForm />
        </MemoryRouter>,
      )
      .toJSON();

    expect(elem).toMatchSnapshot();
  });
});
