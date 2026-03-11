<template>
  <div class="anon-popup-wrapper">
    <!-- Floating trigger button -->
    <button
      class="anon-trigger"
      :class="{ 'anon-trigger--open': isOpen }"
      @click="togglePopup"
      :title="t.triggerTitle"
    >
      <span class="anon-trigger__icon">💬</span>
      <span class="anon-trigger__label">{{ t.triggerLabel }}</span>
    </button>

    <!-- Popup panel -->
    <Transition name="anon-slide">
      <div v-if="isOpen" class="anon-popup">
        <!-- Header with language toggle -->
        <div class="anon-popup__header">
          <h3 class="anon-popup__title">{{ t.title }}</h3>
          <button
            class="lang-toggle"
            @click="lang = lang === 'id' ? 'en' : 'id'"
            :title="t.switchLang"
          >
            <span :class="{ active: lang === 'id' }">ID</span>
            <span class="lang-toggle__divider">/</span>
            <span :class="{ active: lang === 'en' }">EN</span>
          </button>
        </div>

        <p class="anon-popup__desc">{{ t.description }}</p>

        <form @submit.prevent="sendMessage" class="anon-popup__form">
          <div class="anon-field">
            <label for="anon-username">{{ t.usernameLabel }}</label>
            <input
              v-model="username"
              type="text"
              id="anon-username"
              :placeholder="t.usernamePlaceholder"
              maxlength="50"
              required
            />
          </div>

          <div class="anon-field">
            <label for="anon-message">{{ t.messageLabel }}</label>
            <textarea
              v-model="message"
              id="anon-message"
              rows="4"
              :placeholder="t.messagePlaceholder"
              required
            ></textarea>
          </div>

          <button type="submit" :disabled="sending" class="anon-submit btn btn-primary">
            {{ sending ? t.sending : t.send }}
          </button>

          <p v-if="successMsg" class="anon-feedback anon-feedback--success">{{ successMsg }}</p>
          <p v-if="errorMsg" class="anon-feedback anon-feedback--error">{{ errorMsg }}</p>
        </form>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const isOpen = ref(true)
const lang = ref('id')
const username = ref('')
const message = ref('')
const sending = ref(false)
const successMsg = ref('')
const errorMsg = ref('')

const translations = {
  id: {
    triggerLabel: 'Kirim Pesan Anonim',
    triggerTitle: 'Kirim pesan anonim',
    title: '✉️ Pesan Anonim',
    description: 'Kirimkan pesan, pertanyaan, atau apapun yang ingin kamu sampaikan. Identitasmu tetap anonim!',
    usernameLabel: 'Nama Pengguna',
    usernamePlaceholder: 'Anonim',
    messageLabel: 'Pesan',
    messagePlaceholder: 'Tulis pesan, pertanyaan, atau apapun yang ingin kamu bagikan...',
    send: 'Kirim Pesan',
    sending: 'Mengirim...',
    success: 'Pesan berhasil terkirim! Terima kasih 🎉',
    error: 'Gagal mengirim pesan. Silakan coba lagi.',
    switchLang: 'Ganti bahasa'
  },
  en: {
    triggerLabel: 'Send Anonymous Message',
    triggerTitle: 'Send an anonymous message',
    title: '✉️ Anonymous Message',
    description: 'Send me a message, question, or anything you want to share. Your identity stays anonymous!',
    usernameLabel: 'Username',
    usernamePlaceholder: 'Anonymous',
    messageLabel: 'Message',
    messagePlaceholder: 'Write a message, question, or anything you want to share...',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully! Thank you 🎉',
    error: 'Failed to send message. Please try again.',
    switchLang: 'Switch language'
  }
}

const t = computed(() => translations[lang.value])

const togglePopup = () => {
  isOpen.value = !isOpen.value
  // Clear feedback when toggling
  successMsg.value = ''
  errorMsg.value = ''
}

const sendMessage = async () => {
  if (!message.value.trim()) return

  sending.value = true
  successMsg.value = ''
  errorMsg.value = ''

  try {
    await $fetch('/api/chat', {
      method: 'POST',
      body: {
        username: username.value.trim() || (lang.value === 'id' ? 'Anonim' : 'Anonymous'),
        chat: message.value.trim()
      }
    })
    successMsg.value = t.value.success
    username.value = ''
    message.value = ''
    setTimeout(() => {
      successMsg.value = ''
    }, 5000)
  } catch (error) {
    console.error('Failed to send anonymous message:', error)
    errorMsg.value = t.value.error
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
/* ── Trigger Button ── */
.anon-trigger {
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;
  z-index: 1000;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.4rem;
  border: 1.5px solid rgba(255, 255, 255, 0.7);
  border-radius: var(--clay-radius-pill);
  background: var(--gradient-main);
  color: var(--text-primary);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.88rem;
  cursor: pointer;
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.anon-trigger:hover {
  transform: translateY(-4px) scale(1.06);
  box-shadow: var(--clay-shadow-deep), var(--clay-shadow-in);
}

.anon-trigger--open {
  background: var(--lavender-soft);
  box-shadow: var(--clay-shadow-out);
}

.anon-trigger__icon {
  font-size: 1.15rem;
  line-height: 1;
}

/* ── Popup Panel ── */
.anon-popup {
  position: fixed;
  bottom: 5rem;
  left: 1.5rem;
  z-index: 999;
  width: 370px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 1.75rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1.5px solid rgba(255, 255, 255, 0.7);
  border-radius: var(--clay-radius);
  box-shadow: var(--clay-shadow-deep), var(--clay-shadow-in);
}

/* ── Header ── */
.anon-popup__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.anon-popup__title {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

/* ── Language Toggle ── */
.lang-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.35rem 0.75rem;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  border-radius: var(--clay-radius-pill);
  background: var(--lavender-soft);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.78rem;
  color: var(--text-secondary);
  cursor: pointer;
  box-shadow: inset 3px 3px 6px rgba(255, 255, 255, 0.8), inset -3px -3px 6px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.lang-toggle span.active {
  color: var(--accent-primary);
  font-weight: 700;
}

.lang-toggle__divider {
  opacity: 0.4;
}

/* ── Description ── */
.anon-popup__desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.55;
  margin-bottom: 1.25rem;
}

/* ── Form Fields ── */
.anon-field {
  margin-bottom: 1rem;
}

.anon-field label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: var(--text-primary);
}

.anon-field input,
.anon-field textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--text-primary);
  background: var(--bg-primary);
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  border-radius: var(--clay-radius-sm);
  box-shadow: inset 5px 5px 12px rgba(0, 0, 0, 0.04), inset -5px -5px 12px rgba(255, 255, 255, 0.9);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  resize: vertical;
}

.anon-field input:focus,
.anon-field textarea:focus {
  outline: none;
  border-color: var(--mint);
  background: white;
  box-shadow: inset 6px 6px 14px rgba(0, 0, 0, 0.05), inset -6px -6px 14px rgba(255, 255, 255, 1);
  transform: scale(1.01);
}

/* ── Submit Button ── */
.anon-submit {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.92rem;
}

/* ── Feedback ── */
.anon-feedback {
  font-size: 0.85rem;
  margin-top: 0.75rem;
  text-align: center;
  font-weight: 600;
}

.anon-feedback--success {
  color: #34d399;
}

.anon-feedback--error {
  color: #f87171;
}

/* ── Slide Transition ── */
.anon-slide-enter-active,
.anon-slide-leave-active {
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.anon-slide-enter-from,
.anon-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

/* ── Mobile ── */
@media (max-width: 480px) {
  .anon-trigger__label {
    display: none;
  }

  .anon-trigger {
    padding: 0.75rem;
    border-radius: 50%;
  }

  .anon-trigger__icon {
    font-size: 1.3rem;
  }

  .anon-popup {
    left: 0.75rem;
    right: 0.75rem;
    width: auto;
  }
}
</style>
