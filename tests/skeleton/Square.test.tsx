import React from 'react';
import render from 'react-test-renderer';
import Square from '../../src/Skeletons/Square';

describe('Square skeleton', () => {
  it('Should render', () => {
    const elem = render.create(<Square />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
