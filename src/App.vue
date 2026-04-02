<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const { t } = useI18n()
</script>

<template>
  <div class="app">
    <header class="header">
      <nav class="nav">
        <div class="nav-links">
          <router-link to="/">{{ t('nav.home') }}</router-link>
          <router-link to="/about">{{ t('nav.about') }}</router-link>
          <router-link to="/contact">{{ t('nav.contact') }}</router-link>
        </div>
        <LanguageSwitcher />
      </nav>
    </header>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} - {{ t('footer.copyright') }}</p>
    </footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.2s;
  border-bottom: 2px solid transparent;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #42b883;
  border-bottom-color: #42b883;
}

.main {
  flex: 1;
  padding: 2rem 0;
}

.footer {
  background-color: #f5f5f5;
  padding: 1.5rem;
  text-align: center;
  color: #666;
}
</style>
