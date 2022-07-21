/* eslint-disable */
import i18next from 'i18next';

const getLanguage = () => {
  const lan = i18next.language
    || (typeof window !== 'undefined' && window.localStorage.i18nextLng)
    || 'en';

  return lan.split('-')[0];
};

export default getLanguage;
