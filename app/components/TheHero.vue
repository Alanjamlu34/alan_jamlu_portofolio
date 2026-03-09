<template>
  <section id="hero" class="hero">
    <div class="container hero__grid">
      <div class="hero__content">
        <div class="hero__badge clay">
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
      <div class="hero__image-container flow-in flow-stagger-2">
        <div class="hero__image clay">
          <img src="/images/hero-bg.png" alt="Premium Developer Setup" />
        </div>
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
  padding-bottom: 4rem;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero__content {
  text-align: left;
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
  color: #0b4f52;
  border: none;
  background: var(--mint);
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
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
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.hero__subtitle {
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
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
}

.hero__image-container {
  display: flex;
  justify-content: center;
  position: relative;
}

.hero__image {
  border-radius: 35px;
  overflow: hidden;
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
  aspect-ratio: 4/3;
  width: 100%;
  max-width: 500px;
}

.hero__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hero__image:hover img {
  transform: scale(1.05);
}

@media (max-width: 992px) {
  .hero__grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  
  .hero__content {
    text-align: center;
  }
  
  .hero__cta {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 6rem;
  }
  
  .hero__cta {
    flex-direction: column;
  }
}
</style>
