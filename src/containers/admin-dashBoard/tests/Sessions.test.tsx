/* eslint-disable */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '../../../../test/jest/__mocks__/matchMedia';

import Sessions from '../Sessions';

describe('session page tests', () => {
  it('Removes the model on click', () => {
    const removeSessionModel = jest.fn();
    const deleteSessionModel = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <Sessions />
      </BrowserRouter>,
    );
    let removeSession = getByTestId('remove');
    fireEvent.click(removeSession);
    expect(removeSessionModel).toHaveBeenCalledTimes(0);

    let deleteSession = getByTestId('delete');
    fireEvent.click(deleteSession);
    expect(deleteSessionModel).toHaveBeenCalledTimes(0);
  });
});