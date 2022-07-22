/* eslint-disable */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '../../../../test/jest/__mocks__/matchMedia';

import Cohorts from '../Cohorts';

describe('Cohorts page tests', () => {
  it('Removes the model on click', () => {
    const removeCohortModel = jest.fn();
    const deleteCohortModel = jest.fn();
    const removeModelMck = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <Cohorts />
      </BrowserRouter>,
    );
    let removeCohort = getByTestId('remove');
    fireEvent.click(removeCohort);
    expect(removeCohortModel).toHaveBeenCalledTimes(0);

    let deleteCohort = getByTestId('delete');
    fireEvent.click(deleteCohort);
    expect(deleteCohortModel).toHaveBeenCalledTimes(0);

    let removeModel = getByTestId('removeModel');
    fireEvent.click(removeModel);
    expect(removeModelMck).toHaveBeenCalledTimes(0);
  });
});
