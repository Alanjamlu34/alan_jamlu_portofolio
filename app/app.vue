<template>
  <div class="app-wrapper">
    <TheHeader />
    <main>
      <TheHero />
      <TheAboutMe />
      <TheTechStack />
      <TheProjects />
      <TheContact />
    </main>
    <TheFooter />
    <TheChat />
  </div>
</template>

<script setup>
import '~/assets/css/main.css'

// Meta tags for SEO
useHead({
  title: 'Alan Jamlu | Fullstack Web Developer',
  meta: [
    { name: 'description', content: 'Portfolio of Alan Jamlu, a Fullstack Web Developer specializing in Nuxt.js, Vue.js, and modern JavaScript applications.' },
    { name: 'keywords', content: 'Alan Jamlu, Web Developer, Fullstack, Nuxt.js, Vue.js, JavaScript, Portfolio' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<style>
.app-wrapper {
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
  z-index: 0;
}

.app-wrapper::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20%;
  background: linear-gradient(to top, rgba(59, 130, 246, 0.15), transparent);
  pointer-events: none;
  z-index: -1;
}

/* Custom scrollbar for premium feel */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--card-border);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent-primary);
}

html {
  scroll-behavior: smooth;
}
</style>
