import React from 'react';
import renderer from 'react-test-renderer';
import '../../../test/jest/__mocks__/matchMedia';
import SupAdDashboard from '../SupAdDashboard';

describe('Super Admin Dashboard test ', () => {
  it('Should render SupAdDashboard', () => {
    const elem = renderer.create(<SupAdDashboard />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
