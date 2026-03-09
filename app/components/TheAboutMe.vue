<template>
  <section id="about" class="about">
    <div class="container about__grid">
      <div class="about__image-container flow-in">
        <div class="about__image clay">
          <img src="/profile.jpg" alt="Alan Jamlu Profile" class="img-fluid" />
        </div>
        <div class="about__experience clay glass clay-mint">
          <div class="exp-number" style="color: #0b4f52">2+</div>
          <div class="exp-text" style="color: #0b4f52">Years Experience</div>
        </div>
      </div>
      <div class="about__content">
        <h2 class="section-title text-gradient flow-in">About Me</h2>
        <p class="about__description flow-in">
          I'm a Web Developer with a passion for building clean, efficient, and user-friendly web solutions using <span class="underline">Nuxt.js</span> and <span class="underline">Vue.js</span>. My journey in tech is driven by an obsession with <span class="highlight">Frontend Perfection</span>.
        </p>
        <div class="about__stats">
          <div class="stat-item clay glass clay-lavender flow-in">
            <span class="stat-label" style="color: #4b4b8b">Clients</span>
            <span class="stat-value" style="color: #4b4b8b">5+</span>
          </div>
          <div class="stat-item clay glass clay-orange flow-in flow-stagger-1">
            <span class="stat-label" style="color: #7b4300">Projects</span>
            <span class="stat-value" style="color: #7b4300">12+</span>
          </div>
          <!-- <div class="stat-item glass flow-in flow-stagger-2">
            <span class="stat-label">Success Rate</span>
            <span class="stat-value">99%</span>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
}

.about__image-container {
  position: relative;
}

.about__image {
  aspect-ratio: 1;
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.about__image:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.35), var(--clay-shadow-in);
}

.about__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.about__experience {
  position: absolute;
  bottom: -2rem;
  right: -1rem;
  padding: 1.5rem 2rem;
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.exp-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent-primary);
  line-height: 1;
}

.exp-text {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
}

.about__description {
  font-size: 1.15rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.highlight {
  color: var(--text-primary);
  font-weight: 600;
}

.underline {
  border-bottom: 2px solid var(--accent-primary);
  display: inline-block;
}

.about__stats {
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.stat-item {
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  flex: 1;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px) scale(1.05);
}

.stat-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent-primary);
}

@media (max-width: 992px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>
