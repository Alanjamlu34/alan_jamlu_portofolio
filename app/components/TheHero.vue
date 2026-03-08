<template>
  <section id="hero" class="hero">
    <div class="container hero__content">
      <div class="hero__badge glass">
        <span class="pulse"></span> Available for new projects
      </div>
      <h1 class="hero__title">
        Building Scalable <br />
        <span class="text-gradient">Digital Experiences</span>
      </h1>
      <p class="hero__subtitle">
        I'm <span class="highlight">Alan Jamlu</span>, a Fullstack Web Developer specialized in modern frameworks like <span class="underline">Nuxt.js</span> & <span class="underline">Vue.js</span>. I help brands turn complex ideas into high-performance, landing pages and web applications.
      </p>
      <div class="hero__cta">
        <a href="#projects" class="btn btn-primary">See My Work</a>
        <a href="#about" class="btn btn-secondary">More About Me</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8rem;
}

.hero__content {
  text-align: center;
  max-width: 800px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 99px;
  margin-bottom: 2rem;
  color: var(--accent-primary);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.pulse {
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 50%;
  animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
}

.hero__title {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.hero__subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  max-width: 650px;
  margin: 0 auto 2.5rem;
}

.highlight {
  color: var(--text-primary);
  font-weight: 600;
}

.underline {
  border-bottom: 2px solid var(--accent-primary);
  display: inline-block;
}

.hero__cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media (max-width: 768px) {
  .hero__cta {
    flex-direction: column;
  }
}
</style>
