import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import ManagerCard from '../../src/components/CoordinatorCard';

describe('Record attendance modal', () => {
  beforeEach(() => {
    localStorage.setItem('orgToken', 'mocked-org-token');
  });

  afterEach(() => {
    localStorage.clear();
    cleanup();
  });
  it('Renders Record attendance modal', () => {
    const elem = renderer
      .create(
        <MockedProvider>
          <ManagerCard />
        </MockedProvider>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Displays loading spinner while data is fetching', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ManagerCard />
      </MockedProvider>,
    );

    // Check if the spinner is rendered
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
