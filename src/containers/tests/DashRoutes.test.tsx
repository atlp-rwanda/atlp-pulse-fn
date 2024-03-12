import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import DashRoutes from '../DashRoutes';
import AdminSission from '../admin-dashBoard/Sessions';
import '@testing-library/jest-dom'

describe('Dashboard Routes', () => {
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
  it('Should render delete button', () => {
      render(
      <MemoryRouter>
        <ApolloProvider>
          <AdminSission />
        </ApolloProvider>
      </MemoryRouter>,
    );
    const route = screen.getByTestId('delete')
    expect(route).toBeInTheDocument();
  });
  it('Should render remove button', () => {
    render(
      <MemoryRouter>
        <ApolloProvider>
          <AdminSission />
        </ApolloProvider>
      </MemoryRouter>,
    );
    const route = screen.getByTestId('remove');
    expect(route).toBeInTheDocument();
  });
  it('Should render register model button', () => {
    render(
      <MemoryRouter>
        <ApolloProvider>
          <AdminSission />
        </ApolloProvider>
      </MemoryRouter>,
    );
    const route = screen.getByTestId('registerModel');
    expect(route).toBeInTheDocument();
  });
});
