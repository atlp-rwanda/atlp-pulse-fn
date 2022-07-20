/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Register from './../OrgRegister';

describe('Register an Organization', () => {
  it('Renders the register Page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <Register />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
