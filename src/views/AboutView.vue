<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="about">
    <section class="content">
      <h1>{{ t('about.title') }}</h1>
      <p class="subtitle">{{ t('about.subtitle') }}</p>
      <p class="description">{{ t('about.description') }}</p>

      <div class="team-section">
        <h2>{{ t('about.team') }}</h2>
        <p>{{ t('about.teamDescription') }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  padding: 2rem;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.subtitle {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.description {
  color: #777;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.team-section {
  margin-top: 3rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.team-section h2 {
  color: #42b883;
  margin-bottom: 1rem;
}

.team-section p {
  color: #666;
  line-height: 1.6;
}
</style>
