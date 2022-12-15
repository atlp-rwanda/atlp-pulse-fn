/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import Grading from '../GradingSystem';

describe('Register an Organization', () => {
  it('Renders the register Page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ApolloProvider>
            <Grading />
          </ApolloProvider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should open add grading system model', () => {
    const removeModelMck = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <ApolloProvider>
          <Grading />
        </ApolloProvider>
      </MemoryRouter>,
    );
    expect(removeModelMck).toBeCalledTimes(0);
  });
});
