import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import MobileDropdown from '../../src/components/Docs/MobileDropdown';

// Mock useLocation since we're testing NavLink active states
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/'
  })
}));

describe('MobileDropdown', () => {
  // Helper function to render component with router
  const renderWithRouter = (component: React.ReactNode) => {
    return render(
      <BrowserRouter>
        {component}
      </BrowserRouter>
    );
  };

  // Test basic rendering
  it('renders all navigation links', () => {
    renderWithRouter(<MobileDropdown />);
    
    expect(screen.getByText('Getting started (new users)')).toBeInTheDocument();
    expect(screen.getByText('How To SignIn An Organization')).toBeInTheDocument();
    expect(screen.getByText('How To SignUp A New Organization')).toBeInTheDocument();
  });

  // Test correct URLs
  it('has correct href attributes for all links', () => {
    renderWithRouter(<MobileDropdown />);
    
    expect(screen.getByText('Getting started (new users)').closest('a'))
      .toHaveAttribute('href', '/docs/getting-started');
    
    expect(screen.getByText('How To SignIn An Organization').closest('a'))
      .toHaveAttribute('href', '/docs/org-signin');
    
    expect(screen.getByText('How To SignUp A New Organization').closest('a'))
      .toHaveAttribute('href', '/docs/org-signup');
  });

  // Test active link styling
  it('applies active styles to current route', () => {
    render(
      <MemoryRouter initialEntries={['/docs/getting-started']}>
        <MobileDropdown />
      </MemoryRouter>
    );

    const activeLink = screen.getByText('Getting started (new users)').closest('a');
    expect(activeLink).toHaveClass('text-[#4f30be]');
  });

  // Test dark mode active styling
  it('applies dark mode active styles when in dark mode', () => {
    // Mock dark mode by adding dark class to document
    document.documentElement.classList.add('dark');
    
    render(
      <MemoryRouter initialEntries={['/docs/getting-started']}>
        <MobileDropdown />
      </MemoryRouter>
    );

    const activeLink = screen.getByText('Getting started (new users)').closest('a');
    expect(activeLink).toHaveClass('dark:text-[#a791f5]');
    
    // Cleanup
    document.documentElement.classList.remove('dark');
  });

  // Test inactive link styling
  it('does not apply active styles to inactive routes', () => {
    render(
      <MemoryRouter initialEntries={['/docs/getting-started']}>
        <MobileDropdown />
      </MemoryRouter>
    );

    const inactiveLink = screen.getByText('How To SignIn An Organization').closest('a');
    expect(inactiveLink).not.toHaveClass('text-[#4f30be]');
    expect(inactiveLink).not.toHaveClass('dark:text-[#a791f5]');
  });

  // Test accessibility
  it('has accessible navigation', () => {
    renderWithRouter(<MobileDropdown />);
    
    // Check if navigation is accessible
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    
    links.forEach(link => {
      expect(link).toBeVisible();
      expect(link).toHaveAttribute('href');
    });
  });
});