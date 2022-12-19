import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import i18n from '../../i18n';
import {
  ApolloProvider,
} from '@apollo/client';
import ProfileTabs from '../ProfileTabs';
import { client } from '../..';

describe('<ProfileTabs/>', () => {
  it('Renders Profile Tabs', () => {
  const elem = render(
      <MemoryRouter>
      <MockedProvider mocks={[]}>
        <ProfileTabs data={{ name: 'Fabrice' }} />
        </MockedProvider>
      </MemoryRouter>
        
    );

  expect(elem).toMatchSnapshot();
  });
});