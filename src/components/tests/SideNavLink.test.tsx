import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Sidebar from '../Sidebar';
import SideNavLink from '../SideNavLink';

describe('DashHeader test ', () => {
  it('Should render navlink witthout active indicator', () => {
    const elem = renderer
      .create(
        <BrowserRouter>
          <SideNavLink to="/main" name="main">
            <div />
          </SideNavLink>
        </BrowserRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Should render with an active style', () => {
    const elem = renderer
      .create(
        <MemoryRouter initialEntries={['/main']}>
          <SideNavLink to="/main" name="main">
            <div />
          </SideNavLink>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Should render the sidebar with setings as active', () => {
    const elem = renderer
      .create(
        <MemoryRouter initialEntries={['/dashboard/settings']}>
          <Sidebar style="" />
        </MemoryRouter>,
      )
      .toJSON();

    expect(elem).toMatchSnapshot();
  });
});
