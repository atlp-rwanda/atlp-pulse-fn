import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import OrgLogin from '../Organization/Orglogin';

describe.skip('Organization Login', () => {
  it('Should render', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <OrgLogin />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
