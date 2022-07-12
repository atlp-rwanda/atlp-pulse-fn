import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App test ', () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });
  it('Should render app', () => {
    const elem = renderer.create(<App />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
