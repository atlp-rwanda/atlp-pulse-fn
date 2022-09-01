import React from 'react';
import render from 'react-test-renderer';
import Square from '../Square';

describe('Square skeleton', () => {
  it('Should render', () => {
    const elem = render.create(<Square />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
