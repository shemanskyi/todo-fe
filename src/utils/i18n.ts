import { initReactI18next } from 'react-i18next';

import en from 'i18n/en.json';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: { ...en },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    keySeparator: '.',
    resources,
  });

export default i18n;
