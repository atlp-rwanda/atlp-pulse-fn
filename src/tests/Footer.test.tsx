import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Footer from '../components/Footer';

describe('<Account />', () => {
  test('should render account component', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>,
      );
    });
    expect(screen.getByTestId('lanChange')).toBeInTheDocument();
  });
});
