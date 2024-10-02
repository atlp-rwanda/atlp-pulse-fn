import React from 'react';

import renderer from 'react-test-renderer';
import ButtonLoading from '../../src/components/ButtonLoading';

describe('Button Loading', () => {
  it('Renders the button', () => {
    const elem = renderer.create(<ButtonLoading style="md" />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
