/* eslint-disable */
import '@testing-library/jest-dom';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../../../test/jest/__mocks__/matchMedia';

import ManageRole from '../ManagerRoles';

import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Manage role page tests', () => {
  it('Renders Manage role Page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ApolloProvider>
            <ManageRole />
          </ApolloProvider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
