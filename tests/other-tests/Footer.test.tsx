import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import Footer from '../../src/components/Footer';

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
