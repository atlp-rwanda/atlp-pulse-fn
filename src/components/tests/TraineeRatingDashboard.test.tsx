import '@testing-library/jest-dom';
import React from 'react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';

import TraineeRatingDashboard from '../../pages/TraineeRatingDashboard';

jest.mock('../../pages/TraineeRatingDashboard');

describe('TraineeRatingDashboard Tests', () => {
  jest.mock('react-dom', () => ({
    ...jest.requireActual('react-dom'),
    // @ts-ignore
    createPortal: (node) => node,
  }));

  it('Renders TraineeRatingDashboard', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <TraineeRatingDashboard />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Renders TraineeRatingDashboard', () => {
    const result = render(
      <BrowserRouter>
        <ApolloProvider>
          <TraineeRatingDashboard />
        </ApolloProvider>
      </BrowserRouter>,
    );
    screen.debug(undefined, 1000000);
  });
});
