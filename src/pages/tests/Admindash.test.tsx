/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import AdminCohort from '../../containers/admin-dashBoard/Cohorts';
import AdminManage from '../../containers/admin-dashBoard/ManagerRoles';
import AdminSession from '../../containers/admin-dashBoard/Sessions';

describe('Admin dashboard page', () => {
  it('Renders cohort Page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <AdminCohort />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Renders Manage role Page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <AdminManage />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Renders Session Page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <AdminSession />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
