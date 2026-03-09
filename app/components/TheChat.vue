<template>
  <!-- Chat Feature (Button Removed as per request) -->
  <div class="fixed bottom-6 right-6 z-50">

    <!-- Chat Window -->
    <div 
      v-if="isOpen"
      class="clay glass absolute bottom-0 right-0 w-80 sm:w-96 flex flex-col overflow-hidden"
      style="height: 480px; max-height: calc(100vh - 120px); background: rgba(255, 255, 255, 0.7);"
    >
      <!-- Header -->
      <div class="p-5 bg-gradient-to-r from-[var(--mint)] to-[var(--lavender)] text-[#1f2937] shadow-sm border-b border-white/50">
        <h3 class="font-bold text-lg">Anonymous Chat</h3>
        <p class="text-xs opacity-75">Ask a question or just say hi!</p>
      </div>

      <!-- Messages Area -->
      <div 
        ref="chatBox"
        class="flex-1 overflow-y-auto p-4 space-y-3 bg-[var(--bg-primary)]"
      >
        <div v-if="loading" class="flex justify-center text-gray-400">
          <span class="animate-pulse">Loading messages...</span>
        </div>
        
        <div v-else-if="messages.length === 0" class="text-center text-gray-500 text-sm mt-4">
          No messages yet. Be the first to start the conversation!
        </div>

        <div 
          v-for="(msg, index) in messages" 
          :key="msg.chatID"
          v-show="index < messages.length - 5"
          class="flex flex-col bg-[var(--bg-secondary)] p-3 rounded-lg border border-[var(--card-border)] shadow-sm"
        >
          <span class="font-semibold text-sm text-[var(--accent-primary)] mb-1">{{ msg.username }}</span>
          <span class="text-[var(--text-secondary)] text-sm break-words">{{ msg.chat }}</span>
        </div>
      </div>

      <!-- Input Area -->
      <form @submit.prevent="sendMessage" class="p-3 bg-[var(--bg-secondary)] border-t border-[var(--card-border)] space-y-2">
        <input 
          v-model="newUsername" 
          type="text" 
          placeholder="Fake name (or Anonymous)" 
          class="w-full text-sm p-2 rounded bg-[var(--bg-primary)] border border-[var(--card-border)] text-[var(--text-primary)] focus:outline-none focus:border-blue-500 transition-colors"
          required
          maxlength="50"
        />
        <div class="flex gap-2">
          <input 
            v-model="newMessage" 
            type="text" 
            placeholder="Type your message..." 
            class="flex-1 text-sm p-2 rounded bg-[var(--bg-primary)] border border-[var(--card-border)] text-[var(--text-primary)] focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
          <button 
            type="submit" 
            :disabled="sending"
            class="clay-orange px-6 py-2 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
            style="border: none; box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);"
          >
            {{ sending ? '...' : 'Send' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'

const isOpen = ref(false)
const messages = ref([])
const newUsername = ref('')
const newMessage = ref('')
const loading = ref(false)
const sending = ref(false)
const chatBox = ref(null)

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value && messages.value.length === 0) {
    fetchMessages()
  } else if (isOpen.value) {
    scrollToBottom()
  }
}

const fetchMessages = async () => {
  loading.value = true
  try {
    const data = await $fetch('/api/chat')
    // API returns DESC, reverse to ascending order for typical chat visual
    messages.value = data.reverse()
    scrollToBottom()
  } catch (error) {
    console.error('Failed to fetch messages:', error)
  } finally {
    loading.value = false
  }
}

const sendMessage = async () => {
  if (!newUsername.value.trim() || !newMessage.value.trim()) return

  const originalUsername = newUsername.value.trim() || 'Anonymous'
  
  sending.value = true
  try {
    await $fetch('/api/chat', {
      method: 'POST',
      body: {
        username: originalUsername,
        chat: newMessage.value.trim()
      }
    })
    newMessage.value = ''
    await fetchMessages()
  } catch (error) {
    console.error('Failed to send message:', error)
  } finally {
    sending.value = false
  }
}

const scrollToBottom = () => {
  nextTick(() => {
    if (chatBox.value) {
      chatBox.value.scrollTop = chatBox.value.scrollHeight
    }
  })
}

let pollInterval = null
watch(isOpen, (newVal) => {
  if (newVal) {
    pollInterval = setInterval(fetchMessages, 5000)
  } else {
    clearInterval(pollInterval)
  }
})
</script>
