import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import renderer from 'react-test-renderer';
import ProfileCoverpage from '../ProfileCoverpage';

const client = new ApolloClient({ cache: new InMemoryCache() });

describe('<ProfileTabs/>', () => {
  it('Renders Profile Tabs', () => {
    const elem = renderer
      .create(
        <ApolloProvider client={client}>
          <MemoryRouter>
            <ProfileCoverpage
              data={{ name: 'Fabrice' }}
              currentPage="editProfile"
            />
          </MemoryRouter>
        </ApolloProvider>,
      )
      .toJSON();

    expect(elem).toMatchSnapshot();
  });
});
