<template>
  <section id="hero" class="hero">
    <div class="container hero__grid">
      <div class="hero__content">
        <div class="hero__badge">
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
        <div class="hero__image">
          <img src="../public/images/hero-bg.png" alt="Premium Developer Setup" />
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
  gap: 0.6rem;
  padding: 0.6rem 1.25rem;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: var(--clay-radius-pill);
  margin-bottom: 2rem;
  color: #0b4f52;
  border: 1.5px solid rgba(126, 249, 255, 0.3);
  background: var(--mint-soft);
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hero__badge:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: var(--clay-shadow-deep), var(--clay-shadow-in);
}

.pulse {
  width: 9px;
  height: 9px;
  background: #34d399;
  border-radius: 50%;
  animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6); }
  70% { transform: scale(1); box-shadow: 0 0 0 12px rgba(52, 211, 153, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
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
  line-height: 1.7;
}

.highlight {
  color: var(--text-primary);
  font-weight: 700;
}

.underline {
  border-bottom: 2.5px solid var(--accent-primary);
  display: inline-block;
  padding-bottom: 1px;
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
  border-radius: var(--clay-radius);
  overflow: hidden;
  box-shadow: var(--clay-shadow-deep), var(--clay-shadow-in);
  border: 2px solid rgba(255, 255, 255, 0.7);
  aspect-ratio: 4/3;
  width: 100%;
  max-width: 500px;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hero__image:hover {
  transform: translateY(-8px) scale(1.02) rotate(0.5deg);
  box-shadow: 18px 18px 35px rgba(0, 0, 0, 0.12), var(--clay-shadow-in);
  border-color: var(--mint);
}

.hero__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hero__image:hover img {
  transform: scale(1.06);
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
    padding-top: 7rem;
  }
  
  .hero__cta {
    flex-direction: column;
    align-items: center;
  }
}
</style>
