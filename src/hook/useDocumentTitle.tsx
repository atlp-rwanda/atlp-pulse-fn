import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import getLanguage from '../utils/getLanguage';

function useDocumentTitle(title: string) {
  const language = getLanguage();
  const { t } = useTranslation();
  useEffect(() => {
    document.title = `${t(title)} | Devpulse`;
  }, [title, language]);
}

export default useDocumentTitle;
