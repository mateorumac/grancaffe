import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './locales/fr.json';
import it from './locales/it.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      it: { translation: it }
    },
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
