import '@testing-library/jest-dom';
import '../test/jest/__mocks__/matchMedia';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: any) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));
