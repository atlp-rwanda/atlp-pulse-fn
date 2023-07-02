/* eslint-disable */
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../../test/jest/__mocks__/matchMedia';
import TraineePerfomance from '../TraineePerformance';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';

describe('View overall performance', () => {
  it('Renders a Detailed Trainee Performance Page ', () => {
    const PreMck = jest.fn();
    const NexMck = jest.fn();
    const setPageMck = jest.fn();
    const MckPage = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <ApolloProvider>
          <TraineePerfomance />
        </ApolloProvider>
      </BrowserRouter>,
    );
  });
});
