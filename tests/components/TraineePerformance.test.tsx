/* eslint-disable */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../test/jest/__mocks__/matchMedia';
import TraineePerfomance, { GET_RATINGS_DATA } from '../../src/components/TraineePerformance';
import { MockedProvider as ApolloProvider, wait } from '@apollo/client/testing';

describe('View overall performance', () => {
  it('Renders a Detailed Trainee Performance Page with no data  ', () => {
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
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
