/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import PerformanceDetails from '../PerformanceDetails';

describe('Detailed Peformance page', () => {
  it('Renders a detailed performance Page ', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <PerformanceDetails />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
