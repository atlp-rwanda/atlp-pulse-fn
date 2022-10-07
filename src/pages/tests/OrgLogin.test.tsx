import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import OrgLogin from '../Organization/Orglogin';

const client = new ApolloClient({ cache: new InMemoryCache() });

describe('Organization Login', () => {
  it('Should render', () => {
    const elem = renderer
      .create(
        <ApolloProvider client={client}>
          <MemoryRouter>
            <OrgLogin />
          </MemoryRouter>
        </ApolloProvider>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
