import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Calendar from '../Calendar';

const client = new ApolloClient({ cache: new InMemoryCache() });

describe('Calendar Tests', () => {
  it('should open Calendar model', () => {
    const removeModelMck = jest.fn();
    const { getByTestId } = render(
      <ApolloProvider client={client}>
        <MemoryRouter>
          <Calendar />
        </MemoryRouter>
      </ApolloProvider>,
    );
    const removeModel = getByTestId('removeModel');
    fireEvent.click(removeModel);
    expect(removeModelMck).toBeCalledTimes(0);
  });
  it('should handle add event', () => {
    const handleAddEventMck = jest.fn();
    const { getByTestId } = render(
      <ApolloProvider client={client}>
        <MemoryRouter>
          <Calendar />
        </MemoryRouter>
      </ApolloProvider>,
    );
    const handleAddEvent = getByTestId('handleAddEvent');
    fireEvent.click(handleAddEvent);
    expect(handleAddEventMck).toBeCalledTimes(0);
  });
  it('should handle Date Click', () => {
    const handleDateClickMck = jest.fn();
    const { getByTestId } = render(
      <ApolloProvider client={client}>
        <MemoryRouter>
          <Calendar />
        </MemoryRouter>
      </ApolloProvider>,
    );
    const handleDateClick = getByTestId('handleDateClick');
    fireEvent.click(handleDateClick);
    expect(handleDateClickMck).toBeCalledTimes(0);
  });

  it('should set new event', () => {
    const setNewEventMck = jest.fn();
    const { getByTestId } = render(
      <ApolloProvider client={client}>
        <MemoryRouter>
          <Calendar />
        </MemoryRouter>
      </ApolloProvider>,
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
