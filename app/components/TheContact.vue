<template>
  <section id="contact" class="contact">
    <div class="container container--small">
      <div class="section-header flow-in">
        <h2 class="section-title text-gradient">Let's Collaborate</h2>
        <p class="section-subtitle">Interested in working together? Send me a message and let's discuss your vision.</p>
      </div>
      <div class="contact__grid flow-in">
        <div class="contact-left-col">
          <form @submit.prevent="sendMessage" class="contact__form">
            <div class="form-group">
              <label for="username">Username</label>
              <p class="form-note">Your username does not have to be your real name, but it is good to know who sent me a message!</p>
              <input v-model="formUsername" type="text" id="username" placeholder="Anonymous" required maxlength="50" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea v-model="formMessage" id="message" rows="5" placeholder="send me an anonimous message, thought, question, or anything you want to share with me." required></textarea>
            </div>
            <button type="submit" :disabled="sending" class="btn btn-primary btn-full">
              {{ sending ? 'Sending...' : 'Send Message' }}
            </button>
            <p v-if="successMsg" class="success-message">{{ successMsg }}</p>
            <p v-if="errorMsg" class="error-message">{{ errorMsg }}</p>
          </form>
        </div>
        <div class="contact__info">
          <div class="info-card info-card--mint">
            <h3>Direct Contact</h3>
            <div class="contact-item">
              <span>alanjamlu34@email.com</span>
            </div>
            <a href="https://wa.me/6281338827474" target="_blank" class="btn-whatsapp">
              WhatsApp Me
            </a>
          </div>
          <div class="info-card info-card--lavender">
            <h3>Social Profiles</h3>
            <div class="social-grid">
              <a href="https://www.linkedin.com/in/paulinus-alan-sanjaya-jamlu/" target="_blank" class="social-link">LinkedIn</a>
              <a href="https://github.com/Alanjamlu34" target="_blank" class="social-link">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const formUsername = ref('')
const formMessage = ref('')
const sending = ref(false)
const successMsg = ref('')
const errorMsg = ref('')

const recentMessages = ref([])
const loadingMessages = ref(true)

const fetchRecentMessages = async () => {
  try {
    const data = await $fetch('/api/chat-recent')
    recentMessages.value = data
  } catch (error) {
    console.error('Failed to fetch recent messages:', error)
  } finally {
    loadingMessages.value = false
  }
}

onMounted(() => {
  fetchRecentMessages()
})

const sendMessage = async () => {
  if (!formMessage.value.trim() || !formUsername.value.trim()) return

  sending.value = true
  successMsg.value = ''
  errorMsg.value = ''
  
  try {
    await $fetch('/api/chat', {
      method: 'POST',
      body: {
        username: formUsername.value.trim(),
        chat: formMessage.value.trim()
      }
    })
    successMsg.value = 'Message sent successfully!'
    formUsername.value = ''
    formMessage.value = ''
    setTimeout(() => successMsg.value = '', 5000)
    
    // Refresh recent messages
    await fetchRecentMessages()
  } catch (error) {
    console.error('Failed to send message:', error)
    errorMsg.value = 'Failed to send message. Please try again.'
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
.container--small {
  max-width: 900px;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
}

.contact__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  padding: 2.5rem;
  gap: 2.5rem;
  background: white;
  border-radius: var(--clay-radius);
  box-shadow: var(--clay-shadow-deep), var(--clay-shadow-in);
  border: 1.5px solid rgba(255, 255, 255, 0.7);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
}

.form-note {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-style: italic;
  opacity: 0.8;
}

.success-message {
  color: #34d399;
  font-size: 0.9rem;
  margin-top: 0.8rem;
  text-align: center;
  font-weight: 600;
}

.error-message {
  color: #f87171;
  font-size: 0.9rem;
  margin-top: 0.8rem;
  text-align: center;
  font-weight: 600;
}

.contact-left-col {
  display: flex;
  flex-direction: column;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  background: var(--bg-primary);
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  border-radius: var(--clay-radius-sm);
  color: var(--text-primary);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 5px 5px 12px rgba(0, 0, 0, 0.04), inset -5px -5px 12px rgba(255, 255, 255, 0.9);
}

.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--mint);
  background: white;
  box-shadow: inset 6px 6px 14px rgba(0, 0, 0, 0.05), inset -6px -6px 14px rgba(255, 255, 255, 1);
  transform: scale(1.01);
}

.btn-full {
  width: 100%;
}

.contact__info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  padding: 1.75rem;
  border-radius: var(--clay-radius-sm);
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
  border: 1.5px solid transparent;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.info-card--mint {
  background: var(--mint-soft);
  border-color: rgba(126, 249, 255, 0.25);
}

.info-card--lavender {
  background: var(--lavender-soft);
  border-color: rgba(230, 230, 250, 0.4);
}

.info-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: var(--clay-shadow-deep), var(--clay-shadow-in);
}

.info-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  font-weight: 700;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: #25D366;
  color: white !important;
  padding: 0.65rem 1.4rem;
  border-radius: var(--clay-radius-pill);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: none;
  box-shadow: 6px 6px 15px rgba(37, 211, 102, 0.2), inset 3px 3px 6px rgba(255, 255, 255, 0.3), inset -3px -3px 6px rgba(0, 0, 0, 0.1);
}

.btn-whatsapp:hover {
  background: #128C7E;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 8px 8px 20px rgba(37, 211, 102, 0.3), inset 3px 3px 6px rgba(255, 255, 255, 0.3), inset -3px -3px 6px rgba(0, 0, 0, 0.1);
}

.social-grid {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-link {
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.5rem 1.1rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: var(--clay-radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: var(--text-secondary);
  box-shadow: inset 3px 3px 6px rgba(255, 255, 255, 0.8), inset -3px -3px 6px rgba(0, 0, 0, 0.04);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.social-link:hover {
  background: var(--accent-primary);
  color: white;
  border-color: var(--accent-primary);
  transform: translateY(-2px) scale(1.06);
  box-shadow: var(--clay-shadow-out);
}

@media (max-width: 768px) {
  .contact__grid {
    grid-template-columns: 1fr;
    padding: 1.75rem;
  }
}
</style>
