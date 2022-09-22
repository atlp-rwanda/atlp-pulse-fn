import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ScrollToTop from '../../components/ScrollToTop';

describe('<ScrollToTop />', () => {
  it('Renders ScrollToTop', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ScrollToTop />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
