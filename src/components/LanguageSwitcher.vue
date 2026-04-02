<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { supportedLocales, type SupportedLocale } from '../i18n'

const { locale, t } = useI18n()

const changeLanguage = (lang: SupportedLocale) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<template>
  <div class="language-switcher">
    <span class="label">{{ t('language.label') }}:</span>
    <div class="buttons">
      <button
        v-for="lang in supportedLocales"
        :key="lang"
        :class="{ active: locale === lang }"
        @click="changeLanguage(lang)"
      >
        {{ t(`language.${lang}`) }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.label {
  font-size: 0.875rem;
  color: #666;
}

.buttons {
  display: flex;
  gap: 0.5rem;
}

button {
  padding: 0.375rem 0.75rem;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;
}

button:hover {
  border-color: #42b883;
  color: #42b883;
}

button.active {
  background-color: #42b883;
  border-color: #42b883;
  color: white;
}
</style>
