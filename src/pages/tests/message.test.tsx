/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Message from '../Organization/Message';

describe('Page Not Found', () => {
  it('Renders the 404 Page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <Message />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
