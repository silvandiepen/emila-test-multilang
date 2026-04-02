<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  alert('Form submitted!')
}
</script>

<template>
  <div class="contact">
    <section class="content">
      <h1>{{ t('contact.title') }}</h1>
      <p class="subtitle">{{ t('contact.subtitle') }}</p>
      <p class="description">{{ t('contact.description') }}</p>

      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">{{ t('contact.form.name') }}</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">{{ t('contact.form.email') }}</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
          />
        </div>

        <div class="form-group">
          <label for="message">{{ t('contact.form.message') }}</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-button">
          {{ t('contact.form.submit') }}
        </button>
      </form>
    </section>
  </div>
</template>

<style scoped>
.contact {
  padding: 2rem;
}

.content {
  max-width: 600px;
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

.contact-form {
  text-align: left;
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #42b883;
}

.submit-button {
  width: 100%;
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #38a373;
}
</style>
