import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Notify from '../components/Notify';

describe('<Account />', () => {
  test('should protected routes component', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Notify />
        </MemoryRouter>,
      );
    });
  });
});
