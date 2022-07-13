import React from 'react';
import render from 'react-test-renderer';
import Skeleton from '../Skeleton';

describe('Skeleton UI', () => {
  it('Should render', () => {
    const elem = render.create(<Skeleton />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
