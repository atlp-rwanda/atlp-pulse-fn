import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '../../test/jest/__mocks__/matchMedia';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import UpdatedRatingDashboard from '../../src/pages/UpdatedRatingDashboard';
import '@testing-library/jest-dom';

describe('<UpdatedRatingDashboard />', () => {
  it('Renders updatedRating', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ApolloProvider>
            <UpdatedRatingDashboard />
          </ApolloProvider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should remove approve model', () => {
    const removeApproveModelMck = jest.fn();

    const { getByTestId } = render(
      <MemoryRouter>
        <ApolloProvider>
          <UpdatedRatingDashboard />
        </ApolloProvider>
      </MemoryRouter>,
    );
    const removeApproveModel = getByTestId('removeApproveModel');
    fireEvent.click(removeApproveModel);
    expect(removeApproveModelMck).toBeCalledTimes(0);
  });

  it('should remove reject model', () => {
    const removeRejectModelMck = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <ApolloProvider>
          <UpdatedRatingDashboard />
        </ApolloProvider>
      </MemoryRouter>,
    );
    const removeRejectModel = getByTestId('removeRejectModel');
    fireEvent.click(removeRejectModel);
    expect(removeRejectModelMck).toBeCalledTimes(0);
  });

  it('should render the remove approve modal', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ApolloProvider>
          <UpdatedRatingDashboard />
        </ApolloProvider>
      </MemoryRouter>,
    );

    const route = getByTestId('removeApproveModel');
    expect(route).toBeInTheDocument();
  });
  it('should render the remove reject modal', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ApolloProvider>
          <UpdatedRatingDashboard />
        </ApolloProvider>
      </MemoryRouter>,
    );

    expect(getByTestId('removeRejectModel')).toBeInTheDocument();
  });
});
