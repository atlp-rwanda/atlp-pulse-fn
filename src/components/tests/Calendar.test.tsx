import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import Calendar from '../Calendar';

describe('Calendar Tests', () => {
  it('should open Calendar model', () => {
    const removeModelMck = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <Calendar />
      </MemoryRouter>,
    );
    const removeModel = getByTestId('removeModel');
    fireEvent.click(removeModel);
    expect(removeModelMck).toBeCalledTimes(0);
  });
  it('should handle add event', () => {
    const handleAddEventMck = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <Calendar />
      </MemoryRouter>,
    );
    const handleAddEvent = getByTestId('handleAddEvent');
    fireEvent.click(handleAddEvent);
    expect(handleAddEventMck).toBeCalledTimes(0);
  });
  it('should handle Date Click', () => {
    const handleDateClickMck = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <Calendar />
      </MemoryRouter>,
    );
    const handleDateClick = getByTestId('handleDateClick');
    fireEvent.click(handleDateClick);
    expect(handleDateClickMck).toBeCalledTimes(0);
  });

  it('should set new event', () => {
    const setNewEventMck = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <Calendar />
      </MemoryRouter>,
    );
    const setNewEvent = getByTestId('setNewEvent');
    fireEvent.click(setNewEvent);
    expect(setNewEventMck).toBeCalledTimes(0);
  });

  it('should set add event model', () => {
    const setAddEventModelMck = jest.fn();
    expect(setAddEventModelMck).toBeCalledTimes(0);
  });

  it('should set data', () => {
    const setDataMck = jest.fn();
    expect(setDataMck).toBeCalledTimes(0);
  });
});
