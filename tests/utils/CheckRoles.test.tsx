/* eslint-disable */
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { UserContext } from '../../src/hook/useAuth';

import CheckRoles from '../../src/utils/CheckRoles';

describe('CheckRoles component', () => {
  it('should not render the child component', () => {
    const user = { name: '', role: 'user', auth: false };
    const elem = renderer
      .create(
        <MemoryRouter>
          <UserContext.Provider value={user}>
            <CheckRoles roles={['admin']}>
              <div></div>
            </CheckRoles>
          </UserContext.Provider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('should render the the child compoenent', () => {
    const user = { role: 'admin', name: 'Fabrice', auth: true };
    const elem = renderer
      .create(
        <MemoryRouter>
          <UserContext.Provider value={{ user }}>
            <CheckRoles roles={['admin']}>
              <div></div>
            </CheckRoles>
          </UserContext.Provider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
