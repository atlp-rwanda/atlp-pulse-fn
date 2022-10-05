import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DashRoutes from '../DashRoutes';
import Dashboard from '../../pages/Dashboard';
import Settings from '../../pages/Settings';
import AdminCohort from '../admin-dashBoard/Cohorts';
import AdminSission from '../admin-dashBoard/Sessions';

describe('Dashboard Routes', () => {
  const user = userEvent.setup();
  // it('Should render', () => {
  //   const elem = renderer
  //     .create(
  //       <MemoryRouter>
  //         <DashRoutes />
  //       </MemoryRouter>,
  //     )
  //     .toJSON();
  //   expect(elem).toMatchSnapshot();
  // });
  it('Should Redirect to settings', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <DashRoutes />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Should render delete button', async () => {
    render(
      <MemoryRouter>
        <AdminSission />
      </MemoryRouter>,
    );
    const route = screen.getByTestId('delete');
    expect(route).toBeInTheDocument();
  });
  it('Should render remove button', async () => {
    render(
      <MemoryRouter>
        <AdminSission />
      </MemoryRouter>,
    );
    const route = screen.getByTestId('remove');
    expect(route).toBeInTheDocument();
  });
  it('Should render register model button', async () => {
    render(
      <MemoryRouter>
        <AdminSission />
      </MemoryRouter>,
    );
    const route = screen.getByTestId('registerModel');
    expect(route).toBeInTheDocument();
  });
});
