import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import { UserContext } from '../../hook/useAuth';

describe('Navbar component test', () => {
  it('Renders Navigation bar', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(screen.getByText(/PULSE/i)).toBeInTheDocument();
  });
  it('If there is org token', () => {
    localStorage.setItem('orgToken', 'orgSampleToken@12345');
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(screen.getAllByText(/Sign In/i)).toBeDefined();
  });
  it('If User is authenticated', () => {
    localStorage.setItem('orgToken', 'orgSampleToken@12345');
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ user:{auth: true} }}>
          <Navbar />
        </UserContext.Provider>
      </MemoryRouter>,
    );
    expect(screen.getAllByText(/LogOUT/i)).toBeDefined();
  });
});
