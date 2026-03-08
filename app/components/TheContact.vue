<template>
  <section id="contact" class="contact">
    <div class="container container--small">
      <div class="section-header flow-in">
        <h2 class="section-title text-gradient">Let's Collaborate</h2>
        <p class="section-subtitle">Interested in working together? Send me a message and let's discuss your vision.</p>
      </div>
      <div class="contact__grid glass flow-in">
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

          <!-- Recent Messages Display -->
          <!-- <div class="recent-messages mt-8">
            <h3 class="text-lg font-bold text-[var(--accent-primary)] mb-4">Recent Anonymous Messages</h3>
            <div v-if="loadingMessages" class="text-sm text-gray-400">Loading recent messages...</div>
            <div v-else-if="recentMessages.length === 0" class="text-sm text-gray-500">No messages yet.</div>
            <div v-else class="recent-messages-grid">
              <div v-for="msg in recentMessages" :key="msg.chatID" class="message-card">
                <div class="message-card-header">
                  <span class="message-avatar">A</span>
                  <span class="message-username">*****</span>
                </div>
                <p class="message-content">{{ msg.chat }}</p>
              </div>
            </div>
          </div> -->
        </div>
        <div class="contact__info">
          <div class="info-card">
            <h3>Direct Contact</h3>
            <div class="contact-item">
              <!-- <img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-email-icon-png-image_5065641.jpg" alt="Email" class="contact-icon" /> -->
              <span>alanjamlu34@email.com</span>
            </div>
            <a href="https://wa.me/6281338827474" target="_blank" class="btn-whatsapp">
              <!-- <img src="https://img.freepik.com/premium-psd/whatsapp-style-green-circular-chat-call-icon-messaging-apps_705838-13521.jpg?semt=ais_hybrid&w=740&q=80" alt="WhatsApp" class="contact-icon" /> -->
              WhatsApp Me
            </a>
          </div>
          <div class="info-card">
            <h3>Social Profiles</h3>
            <div class="social-grid">
              <a href="https://www.linkedin.com/in/paulinus-alan-sanjaya-jamlu/" target="_blank" class="social-link">LinkedIn</a>
              <a href="https://github.com/Alanjamlu34" target="_blank" class="social-link">Github</a>
              <!-- <a href="#" class="social-link">Twitter</a> -->
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

.contact__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  padding: 3rem;
  border-radius: 2rem;
  gap: 3rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--text-secondary);
}

.form-note {
  font-size: 0.8rem;
  color: var(--text-tertiary, #9ca3af);
  margin-bottom: 0.5rem;
  font-style: italic;
}

.success-message {
  color: #34d399;
  font-size: 0.9rem;
  margin-top: 0.8rem;
  text-align: center;
}

.error-message {
  color: #f87171;
  font-size: 0.9rem;
  margin-top: 0.8rem;
  text-align: center;
}

.contact-left-col {
  display: flex;
  flex-direction: column;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--card-border);
  border-radius: 0.75rem;
  color: white;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
  background: rgba(255, 255, 255, 0.08);
}

.btn-full {
  width: 100%;
}

.contact__info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--accent-primary);
}

.info-card p {
  color: var(--text-secondary);
  font-size: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 1rem;
}

.contact-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  background-color: white;
  transition: transform 0.3s ease;
}

.contact-item:hover .contact-icon {
  transform: scale(1.1) rotate(5deg);
}

.info-card {
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--card-border);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(59, 130, 246, 0.3);
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background-color: #25D366;
  color: white !important;
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  border: none;
}

.btn-whatsapp:hover {
  background-color: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.social-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  border: 1px solid var(--card-border);
}

.social-link:hover {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
}

@media (max-width: 768px) {
  .contact__grid {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
}

.recent-messages-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 1rem 1.25rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.message-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--accent-primary);
  opacity: 0.5;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

.message-card:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(5px);
}

.message-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.message-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-primary), #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
}

.message-username {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-tertiary, #9ca3af);
  letter-spacing: 2px;
}

.message-content {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-secondary);
  font-style: italic;
  padding-left: 2.25rem;
}
</style>
