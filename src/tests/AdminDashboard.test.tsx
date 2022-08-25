import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import AdminDashboard from '../pages/AdminDashboard';

describe('<Account />', () => {
  test('should render account component', () => {
    act(() => {
      render(
        <MemoryRouter>
          <AdminDashboard />
        </MemoryRouter>,
      );
    });
  });
});
