import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import TextArea from '../../../src/pages/ratings/textarea';
import Frame from '../../../src/pages/ratings/frame';

it('testing testarea', () => {
  const rows = {
    quantity: '2',
    quantityRemark: 'good',
    quality: '1',
    qualityRemark: 'woo',
    professional_Skills: '2',
    professionalRemark: 'good',
  };
  const allFeeds: any[] = [
    {
      createdAt: new Date('1/1/2023'),
      content: 'msg1',
      sender: {
        email: 'newEmail@test.co',
      },
    },
  ];

  render(
    <MemoryRouter>
      <ApolloProvider>
        <Frame rows={rows} allFeeds={allFeeds} />
      </ApolloProvider>
    </MemoryRouter>,
  );

  const input = screen.getByTestId('input-element');
  fireEvent.change(input, { target: { value: 'hey' } });
});
