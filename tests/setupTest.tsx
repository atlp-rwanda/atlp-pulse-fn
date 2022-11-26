import '@testing-library/jest-dom';
import '../test/jest/__mocks__/matchMedia';


jest.mock('react-i18next', () => ({
  initReactI18next: { type: "3rdParty", init: jest.fn() },
  useTranslation: () => ({
    t: (str: any) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
    
  }),

 

}));


