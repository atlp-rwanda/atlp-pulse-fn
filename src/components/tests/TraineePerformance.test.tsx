/* eslint-disable */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
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

    let removePrevMck = getByTestId('prev');
    fireEvent.click(removePrevMck);
    expect(PreMck).toHaveBeenCalledTimes(0);

    let removeNextMck = getByTestId('next');
    fireEvent.click(removeNextMck);
    expect(NexMck).toHaveBeenCalledTimes(0);

    const removepage1Mck = getByTestId('page1');
    fireEvent.click(removepage1Mck);
    expect(setPageMck).toHaveBeenCalledTimes(0);

    const removepage3Mck = getByTestId('page3');
    fireEvent.click(removepage3Mck);
    expect(MckPage).toHaveBeenCalledTimes(0);
  });
});
