import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TextArea from '../../ratings/textarea';

it('testing testarea', () => {
  let changed = false;

  const onChange = (e: any) => {
    changed = true;
  };

  render(<TextArea onChange={onChange} />);

  const input = screen.getByTestId('input-element');
  fireEvent.change(input, { target: { value: 'hey' } });

  expect(changed).toBe(true);
});
