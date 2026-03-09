<template>
  <div class="app-wrapper">
    <!-- Decorative floating blobs -->
    <div class="blob blob--1"></div>
    <div class="blob blob--2"></div>
    <div class="blob blob--3"></div>
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
  background: var(--bg-primary);
}

/* Floating pastel blobs for organic depth */
.blob {
  position: fixed;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
  pointer-events: none;
  z-index: -1;
  animation: blobFloat 20s ease-in-out infinite;
}

.blob--1 {
  width: 400px;
  height: 400px;
  background: var(--mint);
  top: 10%;
  left: -5%;
  animation-delay: 0s;
}

.blob--2 {
  width: 350px;
  height: 350px;
  background: var(--lavender);
  top: 50%;
  right: -8%;
  animation-delay: -7s;
}

.blob--3 {
  width: 300px;
  height: 300px;
  background: var(--orange);
  bottom: 10%;
  left: 30%;
  animation-delay: -14s;
}

/* Custom scrollbar — clay feel */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--mint-soft), var(--lavender-soft));
  border-radius: 10px;
  border: 2px solid var(--bg-primary);
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, var(--mint), var(--lavender));
}

html {
  scroll-behavior: smooth;
}
</style>
