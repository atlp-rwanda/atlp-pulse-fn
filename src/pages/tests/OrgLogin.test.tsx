import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import OrgLogin from '../Organization/Orglogin';

describe('Organization Login', () => {
  it('Should render', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ApolloProvider>
            <OrgLogin />
          </ApolloProvider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
