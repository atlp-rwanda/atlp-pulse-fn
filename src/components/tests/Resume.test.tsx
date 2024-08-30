import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Resume from '../Resume';

describe('<Resume />', () => {
  it('Renders Resume', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ApolloProvider>
            <Resume />
          </ApolloProvider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
