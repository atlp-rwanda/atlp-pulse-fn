import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ProtectedRoute from '../../src/ProtectedRoute';
import Footer from '../../src/components/Footer';
import { UserContext } from '../../src/hook/useAuth';

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
  test('should Render if the user is authenticated', () => {
    act(() => {
      render(
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <UserContext.Provider value={{ name: '', role: 'user', auth: true }}>
          <MemoryRouter>
            <ProtectedRoute>
              <Footer />
            </ProtectedRoute>
          </MemoryRouter>
        </UserContext.Provider>,
      );
    });
  });
});
