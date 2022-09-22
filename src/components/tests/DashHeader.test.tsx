import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '../../../test/jest/__mocks__/matchMedia';
import DashHeader from '../DashHeader';

describe('DashHeader test ', () => {
  it('Should render DashHeader', () => {
    const elem = renderer
      .create(
        <BrowserRouter>
          <DashHeader />
        </BrowserRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
