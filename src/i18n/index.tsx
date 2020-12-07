import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import betaEn from './beta/en'
import betaRu from './beta/ru'
import adminEn from './admin/en'
import adminRu from './admin/ru'

export default i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        betaEn,
        adminEn,
      },
    },
    ru: {
        translation: {
            betaRu,
            adminRu,
        },
      },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})