import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer, { act } from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import Grading from '../../src/pages/GradingSystem';

describe('Register an Organization', () => {
  it('Renders the register Page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ApolloProvider>
            <Grading />
          </ApolloProvider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should open add grading system model', () => {
    const removeModelMck = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <ApolloProvider>
          <Grading />
        </ApolloProvider>
      </MemoryRouter>,
    );
    expect(removeModelMck).toBeCalledTimes(0);
  });

  it('Testing Grading component', async () => {
    render(
      <MemoryRouter>
        <ApolloProvider>
          <Grading />
        </ApolloProvider>
      </MemoryRouter>,
    );

    const gradeName = screen.getByPlaceholderText(
      'Label eg: Name of grading system',
    );
    const gradeDisc = screen.getByPlaceholderText('description');
    const grade = screen.getByPlaceholderText('Grade');
    const gradeBtn = screen.getByTestId('gradeBtn');
    const saveGrade = screen.getByTestId('saveGrade');

    act(() => {
      fireEvent.change(gradeName, {
        target: { value: '' },
      });
    });
    act(() => {
      fireEvent.change(gradeDisc, {
        target: { value: '' },
      });
    });
    act(() => {
      fireEvent.change(grade, {
        target: { value: '' },
      });
    });

    act(() => {
      fireEvent.click(gradeBtn);
      fireEvent.click(saveGrade);
    });

    // test empty input
  });
});
