/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import Grading from '../GradingSystem';

describe('Register an Organization', () => {
  it('Renders the register Page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <Grading />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should open add grading system model', () => {
    const removeModelMck = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
       <Grading />
      </MemoryRouter>,
    );
    const removeModel = getByTestId('removeModel');
    fireEvent.click(removeModel);
    expect(removeModelMck).toBeCalledTimes(0);
  });
});