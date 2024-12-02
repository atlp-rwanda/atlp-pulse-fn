import '@testing-library/jest-dom';
import React from 'react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, render, renderHook } from '@testing-library/react';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';

import TraineeRatingDashboard from '../../src/pages/TraineeRatingDashboard';
import useViewTraineeRatings from '../../src/components/ratings/hooks/useViewTraineeRatings';

describe('TraineeRatingDashboard Tests', () => {
  it('Renders TraineeRatingDashboard', () => {
    const wrapper = ({ children }: any) => (
      <MemoryRouter>
        <ApolloProvider mocks={[]} addTypename={false}>
          {children}
        </ApolloProvider>
      </MemoryRouter>
    );

    const { result } = renderHook(() => useViewTraineeRatings('3434'), {
      wrapper,
    });
    expect(result?.current?.loading).toBeDefined();
    expect(result?.current?.viewAddNewRating).toEqual(false);
    expect(result?.current?.deviceWidth).toBeDefined();
    expect(result?.current?.onClose).toBeInstanceOf(Function);
    expect(result?.current?.t).toBeInstanceOf(Function);
    expect(result?.current?.maxSprint).toEqual(0);
    expect(result?.current?.selectViewSprint).toEqual(false);
    expect(result?.current?.setSelectViewSprint).toBeInstanceOf(Function);
    expect(result?.current?.currentSprint).toEqual('Sprint 0');
    expect(result?.current?.sprintOptions).toEqual([]);
    expect(result?.current?.selectedSprintRatings).toEqual([]);
    expect(result?.current?.deviceWidth).toBeDefined();
    expect(result?.current?.successMessage).toEqual('');
    expect(result?.current?.setViewAddNewRating).toBeInstanceOf(Function);
    expect(result?.current?.viewAddNewRating).toEqual(false);
    expect(result?.current?.organizationToken).toBeNull();
    expect(result?.current?.refetch).toBeInstanceOf(Function);
    expect(result?.current?.setSuccessMessage).toBeInstanceOf(Function);
    expect(result?.current?.loading).toEqual(true);
  });
});
