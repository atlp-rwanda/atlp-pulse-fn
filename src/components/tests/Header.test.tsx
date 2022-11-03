/* eslint-disable */
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import UserProvider, { UserContext } from '../../hook/useAuth';
import Header from '../Header';

describe('Header Tests', () => {
  it('Should render the header with pricing active', () => {
    const elem = renderer
      .create(
        <MemoryRouter initialEntries={['/pricing']}>
          <Header></Header>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Should render the header with home', () => {
    const elem = renderer
      .create(
        <MemoryRouter initialEntries={['/']}>
          <Header></Header>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Should render the header with product active', () => {
    const elem = renderer
      .create(
        <MemoryRouter initialEntries={['/product']}>
          <Header></Header>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Should render the header with no active', () => {
    const elem = renderer
      .create(
        <MemoryRouter initialEntries={['/no-active']}>
          <Header></Header>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Should render the header with no active', () => {
    const elem = renderer
      .create(
        <UserContext.Provider
          value={{ user: { auth: true, name: 'name', role: 'admin' } }}
        >
          <MemoryRouter initialEntries={['/no-active']}>
            <Header></Header>
          </MemoryRouter>
        </UserContext.Provider>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Should render the header with no active', () => {
    const elem = renderer
      .create(
        <UserProvider>
          <MemoryRouter initialEntries={['/']}>
            <Header></Header>
          </MemoryRouter>
        </UserProvider>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});