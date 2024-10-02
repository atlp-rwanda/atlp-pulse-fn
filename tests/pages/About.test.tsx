import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import { About } from '../../src/pages/About';

describe('About page', () => {
  it('renders the about page', () => {
    const elem = renderer.create(
      <MemoryRouter>
        <ApolloProvider>
          <About />
        </ApolloProvider>
      </MemoryRouter>,
    );

    expect(elem.toJSON()).toMatchSnapshot();
  });
});
