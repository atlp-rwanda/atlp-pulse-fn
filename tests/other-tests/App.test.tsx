import React from 'react';
import renderer from 'react-test-renderer';
import '../../test/jest/__mocks__/matchMedia';
import App from '../../src/App';

describe('App test ', () => {
  it('Should render app', () => {
    const elem = renderer.create(<App />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
