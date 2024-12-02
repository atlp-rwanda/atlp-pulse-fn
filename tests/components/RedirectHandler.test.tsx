import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import RedirectHandler from '../../src/pages/RedirectHandler';

// Mock window.location using Object.defineProperty
const mockReplace = jest.fn();
const originalWindow = window.location;

beforeAll(() => {
  // Mock window.location before all tests
  Object.defineProperty(window, 'location', {
    configurable: true,
    enumerable: true,
    value: {
      ...originalWindow,
      search: '',
      replace: mockReplace,
    },
  });
});

afterAll(() => {
  // Restore original window.location after all tests
  Object.defineProperty(window, 'location', {
    configurable: true,
    enumerable: true,
    value: originalWindow,
  });
});

describe('RedirectHandler', () => {
  beforeEach(() => {
    // Clear mock calls between tests
    mockReplace.mockClear();
    // Reset URL parameters
    Object.defineProperty(window.location, 'search', {
      configurable: true,
      value: '',
    });
  });

  // Test basic rendering
  it('renders loading state correctly', () => {
    render(<RedirectHandler />);

    expect(screen.getByText('Redirecting...')).toBeInTheDocument();
    expect(screen.getByText('here')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  // Test web destination redirect
  it('redirects to web destination with correct parameters', () => {
    Object.defineProperty(window.location, 'search', {
      value: '?path=/test&dest=web&param1=value1&param2=value2',
    });
    render(<RedirectHandler />);

    expect(mockReplace).toHaveBeenCalledWith(
      '/test?param1=value1&param2=value2',
    );
  });

  // Test app destination redirect
  it('redirects to app destination with correct parameters', () => {
    Object.defineProperty(window.location, 'search', {
      value: '?path=/test&dest=app&param1=value1&param2=value2',
    });
    render(<RedirectHandler />);

    expect(mockReplace).toHaveBeenCalledWith(
      'com.atlp.pulseapp:///test?param1=value1&param2=value2',
    );
  });

  // Test fallback URL
  it('uses fallback URL when provided', () => {
    Object.defineProperty(window.location, 'search', {
      value: '?fallback=/custom-fallback',
    });
    render(<RedirectHandler />);

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      '/custom-fallback',
    );
  });

  // Test default fallback
  it('uses default fallback when no fallback provided', () => {
    render(<RedirectHandler />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  // Test invalid redirect data
  it('logs error when path is missing', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    Object.defineProperty(window.location, 'search', {
      value: '?dest=web',
    });
    render(<RedirectHandler />);

    expect(consoleSpy).toHaveBeenCalledWith('Invalid redirect data');
    consoleSpy.mockRestore();
  });

  // Test query parameter building
  it('builds query string correctly excluding ignored parameters', () => {
    Object.defineProperty(window.location, 'search', {
      value:
        '?path=/test&dest=web&param1=value1&path=ignored&dest=ignored&fallback=ignored',
    });
    render(<RedirectHandler />);

    expect(mockReplace).toHaveBeenCalledWith('/test?param1=value1');
  });

  // Test multiple query parameters
  it('handles multiple query parameters correctly', () => {
    Object.defineProperty(window.location, 'search', {
      value: '?path=/test&dest=web&param1=value1&param2=value2&param3=value3',
    });
    render(<RedirectHandler />);

    expect(mockReplace).toHaveBeenCalledWith(
      '/test?param1=value1&param2=value2&param3=value3',
    );
  });

  // Test empty query parameters
  it('handles no query parameters correctly', () => {
    Object.defineProperty(window.location, 'search', {
      value: '?path=/test&dest=web',
    });
    render(<RedirectHandler />);

    expect(mockReplace).toHaveBeenCalledWith('/test?');
  });

  // Test cleanup
  it('performs cleanup on unmount', () => {
    const { unmount } = render(<RedirectHandler />);
    unmount();
    // Add assertions if you add cleanup logic to the component
  });
});
