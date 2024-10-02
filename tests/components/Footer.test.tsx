import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Footer from '../../src/components/Footer';

describe('<Footer/>', () => {
  it('Renders Header', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
