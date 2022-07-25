import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import '../../../test/jest/__mocks__/matchMedia';
import PricingForm from '../PricingForm';

describe('Pricing form  test ', () => {
  it('Should render Pricing form and payment form', () => {
    const elem = renderer
      .create(
        <BrowserRouter>
          <PricingForm />
        </BrowserRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
