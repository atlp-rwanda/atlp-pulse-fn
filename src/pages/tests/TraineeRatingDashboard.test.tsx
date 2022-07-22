import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import TraineeRatingDashboard from '../TraineeRatingDashboard';

describe('TraineeRatingDashboard Tests', () => {
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

  it('should update trainee model', () => {
    const removeModelMck = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <TraineeRatingDashboard />
      </MemoryRouter>,
    );
    const removeModel = getByTestId('removeModel');
    fireEvent.click(removeModel);
    expect(removeModelMck).toBeCalledTimes(0);
  });

  it('should delete trainee model', () => {
    const removeDeleteModelMck = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <TraineeRatingDashboard />
      </MemoryRouter>,
    );
    const removeDeleteModel = getByTestId('removeDeleteModel');
    fireEvent.click(removeDeleteModel);
    expect(removeDeleteModelMck).toBeCalledTimes(0);
  });
});
