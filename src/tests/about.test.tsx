import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { About } from '../pages/About';
import { I18nextProvider } from 'react-i18next';

// Mock i18next
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
  I18nextProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Extend the Jest matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}

// Mock the react-icons
jest.mock('react-icons/ai', () => ({
  AiOutlineLeft: () => <div data-testid="mock-left-icon" />,
  AiOutlineRight: () => <div data-testid="mock-right-icon" />,
}));

// Mock the image imports
jest.mock('../assets/Frame.svg', () => 'mock-frame-image');
jest.mock('../assets/second.svg', () => 'mock-second-image');
jest.mock('../assets/third.svg', () => 'mock-third-image');
jest.mock('../assets/fourth.svg', () => 'mock-fourth-image');
jest.mock('../assets/person.png', () => 'mock-person-image');
jest.mock('../assets/person2.png', () => 'mock-person2-image');
jest.mock('../assets/ur.png', () => 'mock-ur-image');

describe('About Component', () => {
  const renderComponent = () => {
    return render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
  };

  it('renders the main heading', () => {
    renderComponent();
    expect(screen.getByText('hero2')).toBeInTheDocument();
  });

  it('renders all about cards', () => {
    renderComponent();
    expect(screen.getByText('performance')).toBeInTheDocument();
    expect(screen.getByText('analytics')).toBeInTheDocument();
    expect(screen.getByText('continuos')).toBeInTheDocument();
    expect(screen.getByText('goal')).toBeInTheDocument();
  });

  it('renders testimonial section', () => {
    renderComponent();
    expect(screen.getAllByText('Bernard Dushimimana')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Susan')[0]).toBeInTheDocument();
  });

  it('renders navigation icons for testimonials', () => {
    renderComponent();
    expect(screen.getByTestId('mock-left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('mock-right-icon')).toBeInTheDocument();
  });

  it('renders the correct number of testimonials', () => {
    renderComponent();
    const testimonials = screen.getAllByText(/Sr\.Manager|organisation/);
    expect(testimonials).toHaveLength(4);
  });

  it('renders the final heading', () => {
    renderComponent();
    expect(screen.getByText('Come shape the future together')).toBeInTheDocument();
  });
});