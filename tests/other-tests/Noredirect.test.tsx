import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import Noredirect from '../../src/pages/Noredirect';

describe('<Account />', () => {
  test('should display details', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Noredirect />
        </MemoryRouter>,
      );
    });
    expect(screen.getByRole('button', { name: 'back' })).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: 'back' }));
    });
  });
});
