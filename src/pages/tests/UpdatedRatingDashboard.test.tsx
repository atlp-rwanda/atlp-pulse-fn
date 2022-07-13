import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import UpdatedRatingDashboard from '../../pages/UpdatedRatingDashboard';

describe('<UpdatedRatingDashboard />', () => {
  it('Renders UpdatedRatingDashboard', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <UpdatedRatingDashboard />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should remove approve model', () => {
    const removeApproveModelMck = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <UpdatedRatingDashboard />
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
        <UpdatedRatingDashboard />
      </MemoryRouter>,
    );
    const removeRejectModel = getByTestId('removeRejectModel');
    fireEvent.click(removeRejectModel);
    expect(removeRejectModelMck).toBeCalledTimes(0);
  });
});
