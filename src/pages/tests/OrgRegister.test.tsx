/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Register from './../OrgRegister';

describe.skip('Register an Organization', () => {
  test('Renders the register Page', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Register />
        </MemoryRouter>,
      );
    });
    expect(screen.getByTestId('dataid')).toBeInTheDocument();
    expect(screen.getByTestId('input1')).toBeInTheDocument();
    act(() => {
      fireEvent.change(screen.getByTestId('input1'), {
        target: { value: 'Rwanda' },
      });
    });
  });
});
