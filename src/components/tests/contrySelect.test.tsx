import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React, { createRef } from 'react';
import CountrySelector from '../CountrySelector';

describe('CountrySelector', () => {
  let onToggleMock: jest.Mock;
  let onChangeMock: jest.Mock;

  beforeEach(() => {
    onToggleMock = jest.fn();
    onChangeMock = jest.fn();
  });

  it('calls onToggle and clears query when clicking outside', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <CountrySelector
        id="test"
        open
        onToggle={onToggleMock}
        onChange={onChangeMock}
        selectedValue={{ value: 'us', title: 'United States' }}
        ref={ref}
      />,
    );

    fireEvent.mouseDown(document);

    expect(onToggleMock).toHaveBeenCalled();
  });

  it('does not call onToggle or clear query when clicking inside', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <CountrySelector
        id="test"
        open
        onToggle={onToggleMock}
        onChange={onChangeMock}
        selectedValue={{ value: 'us', title: 'United States' }}
        ref={ref}
      />,
    );

    fireEvent.mouseDown(screen.getByTestId('countries'));

    expect(onToggleMock).not.toHaveBeenCalled();
  });
});
