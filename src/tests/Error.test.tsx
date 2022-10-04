import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Error from '../pages/Error';

describe('<Error />', () => {
  test('should render account component', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Error />
        </MemoryRouter>,
      );
    });
    expect(
      screen.getByRole('button', { name: 'Back Home' }),
    ).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Back Home' }));
    });
  });
});
