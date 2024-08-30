/* eslint-disable func-names */
// @ts-nocheck
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import UserRegister from '../Organization/UserRegister';

describe('TraineeRatingDashboard Tests', () => {
  const observe = jest.fn();
  const disconnect = jest.fn();
  window.IntersectionObserver = jest.fn(function () {
    this.observe = observe;
    this.disconnect = disconnect;
  });

  it('Renders TraineeRatingDashboard', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ApolloProvider>
            <UserRegister />
          </ApolloProvider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
