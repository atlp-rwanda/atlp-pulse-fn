import React from 'react';
import renderer from 'react-test-renderer';
import '../../../test/jest/__mocks__/matchMedia';

import TraineeDashboard from '../TraineeDashboard';

describe('Trainee Dashboard test ', () => {
  it('Should render TraineeDashboard', () => {
    const elem = renderer.create(<TraineeDashboard />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
