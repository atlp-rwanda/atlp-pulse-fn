// @ts-nocheck
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
// import { ApolloProvider } from '@apollo/client';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import TraineeRatingDashboard from '../TraineeRatingDashboard';
import { client } from '../../index';

class ResizeObserverMock {
  observe() {
    this;
  }

  unobserve() {
    this;
  }

  disconnect() {
    this;
  }
}

window.ResizeObserver = ResizeObserverMock;

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
            <TraineeRatingDashboard />
          </ApolloProvider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Updates state', async () => {
    render(
      <MemoryRouter>
        <ApolloProvider>
          <TraineeRatingDashboard />
        </ApolloProvider>
      </MemoryRouter>,
    );

    const addRatingBtn = screen.getByTestId('addRatingButton');
    fireEvent.click(addRatingBtn);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    const traineeComboInput = screen.getByTestId('traineeComboInput');
    expect(traineeComboInput).toBeInTheDocument();
    fireEvent.change(traineeComboInput, {
      target: { value: 'Bad trainee name' },
    });
    expect(screen.getByTestId('notFoundDiv')).toBeInTheDocument();

    fireEvent.click(await screen.findByTestId('sprintList'));
    fireEvent.click(await screen.findByTestId('traineeList'));
  });
});
