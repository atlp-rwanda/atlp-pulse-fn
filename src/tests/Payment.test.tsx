import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Pay from '../components/Payment';

describe('<Pay />', () => {
  test('should render payment component', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Pay />
        </MemoryRouter>,
      );
    });
    expect(screen.getByTestId('text1')).toBeInTheDocument();
  });
});
