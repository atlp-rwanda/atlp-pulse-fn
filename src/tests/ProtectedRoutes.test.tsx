import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ProtectedRoute from '../ProtectedRoute';
import Footer from '../components/Footer';

describe('<Account />', () => {
  test('should protected routes component', () => {
    act(() => {
      render(
        <MemoryRouter>
          <ProtectedRoute>
            <Footer />
          </ProtectedRoute>
        </MemoryRouter>,
      );
    });
  });
});
