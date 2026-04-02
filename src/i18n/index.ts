import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import nl from './locales/nl.json'
import es from './locales/es.json'
import fr from './locales/fr.json'

export type SupportedLocale = 'en' | 'nl' | 'es' | 'fr'

export const supportedLocales: SupportedLocale[] = ['en', 'nl', 'es', 'fr']

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    nl,
    es,
    fr
  }
})

export default i18n
