import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { About }  from '../pages/About';

describe('about tests', () => {
  it('Renders the HomePage ', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <About />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Should render the about with no active', () => {
    const elem = renderer
      .create(
        <MemoryRouter initialEntries={['/no-active']}>
          <About />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
})