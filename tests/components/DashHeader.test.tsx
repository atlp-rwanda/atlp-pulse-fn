import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  gql,
  useApolloClient,
  useLazyQuery,
  useMutation,
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import renderer from 'react-test-renderer';
import '../../test/jest/__mocks__/matchMedia';
import DashHeader from '../../src/components/DashHeader';

const client = new ApolloClient({ cache: new InMemoryCache() });

describe('DashHeader test ', () => {
  it('Should render DashHeader', () => {
    const elem = renderer
      .create(
        <ApolloProvider client={client}>
          <BrowserRouter>
            <DashHeader />
          </BrowserRouter>
        </ApolloProvider>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
